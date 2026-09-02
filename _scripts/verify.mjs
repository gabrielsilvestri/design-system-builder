/**
 * Verifica o entregável do cliente:
 *   1. Lint próprio do DESIGN.md schema v2 (_scripts/lint.mjs)
 *   2. Quality score A-F (_scripts/score.mjs)
 *   3. Brand-identity sanity check (primary parece UI color?)
 *   4. Coverage notes check (shadow/motion/forms ausentes têm prosa?)
 *   5. Playwright check do brandbook gerado (console errors, fontes, SVGs, responsive)
 *
 * Uso:
 *   node _scripts/verify.mjs <client-dir> [port]
 *
 * Pré-requisito pra Playwright: rodar serve.mjs antes em outra aba/processo.
 */

import { chromium, devices } from "playwright";
import { mkdirSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "js-yaml";
import { lintDesignMd } from "./lint.mjs";

const argv = process.argv.slice(2);
if (argv.length < 1) {
  console.error("Uso: node _scripts/verify.mjs <client-dir> [port]");
  process.exit(1);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const workspaceRoot = resolve(__dirname, "..");
const clientDir = resolve(argv[0]);
const port = parseInt(argv[1] ?? "3000", 10);
const url = `http://localhost:${port}/brandbook/`;

const out = join(clientDir, "_inputs", ".screenshots", "verify");
mkdirSync(out, { recursive: true });

let exitFail = 0;

// ===== Passo 1: lint próprio =====
const designMdPath = join(clientDir, "DESIGN.md");
let tokens = null;
let body = "";
let lintResult = { errors_count: 0, warnings_count: 0, findings: [] };

if (existsSync(designMdPath)) {
  const md = readFileSync(designMdPath, "utf8");
  lintResult = lintDesignMd(md);

  const lintReportDir = join(clientDir, "_inputs");
  if (existsSync(lintReportDir)) {
    writeFileSync(
      join(lintReportDir, "lint-report.json"),
      JSON.stringify(lintResult, null, 2) + "\n"
    );
  }

  for (const f of lintResult.findings) {
    const tag = f.severity === "error" ? "ERROR  " : "WARNING";
    console.log(`  [${tag}] ${f.rule}: ${f.message}`);
  }
  console.log(
    `[verify] lint: ${lintResult.errors_count} error(s), ${lintResult.warnings_count} warning(s)`
  );
  if (lintResult.errors_count > 0) exitFail = 1;

  const fmMatch = md.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (fmMatch) {
    try {
      tokens = YAML.load(fmMatch[1]);
      body = fmMatch[2];
    } catch (e) {
      console.log(`[verify] YAML parse error: ${e.message}`);
    }
  }
} else {
  console.log(`[verify] DESIGN.md não encontrado em ${designMdPath}`);
}

// ===== Passo 2: quality score =====
console.log();
const scoreScript = join(workspaceRoot, "_scripts", "score.mjs");
if (existsSync(designMdPath) && existsSync(scoreScript)) {
  const r = spawnSync("node", [scoreScript, argv[0]], {
    cwd: workspaceRoot,
    stdio: "inherit",
  });
  if (r.status !== 0) {
    console.log(`[verify] score.mjs returned ${r.status}`);
  }
  const scorePath = join(clientDir, "quality-score.json");
  if (existsSync(scorePath)) {
    const score = JSON.parse(readFileSync(scorePath, "utf8"));
    console.log(`[verify] quality grade: ${score.grade} (${score.overall}/100)`);
  }
}

// ===== Passo 3: brand-identity sanity =====
if (tokens?.colors?.primary) {
  const primary = tokens.colors.primary.toLowerCase();
  const blueish = /^#([0-2][0-9a-f]|3[0-7])[0-9a-f]{2}([89a-f][0-9a-f]|[a-f]f)/i;
  if (blueish.test(primary)) {
    console.log();
    console.log(
      `[verify] warning: primary=${primary} parece cor de UI (azul de link?). Confirme que é cor de identidade da marca (logo/header/favicon), não cor de UI mais usada. Ver _docs/brand-identity-rule.md.`
    );
  }
}

// ===== Passo 4: coverage notes =====
if (tokens && body) {
  const hasShadows =
    tokens.shadows &&
    Object.values(tokens.shadows).some((v) => v && v !== "none");
  const mentionsFlat = /flat|low-elevation|sem sombra|intencionalmente plano|intencionalmente flat/i.test(
    body
  );
  if (!hasShadows && !mentionsFlat) {
    console.log();
    console.log(
      `[verify] warning: nenhum shadow no schema e nenhuma coverage note sobre flat design no body. Ver _docs/coverage-notes.md.`
    );
  }

  const hasMotion =
    tokens.motion &&
    (tokens.motion.durations || tokens.motion.easings);
  const mentionsStatic = /est[áa]tico por design|sem transi|sem anima/i.test(body);
  if (!hasMotion && !mentionsStatic) {
    console.log();
    console.log(
      `[verify] warning: nenhum motion no schema e nenhuma coverage note. Ver _docs/coverage-notes.md.`
    );
  }
}

// ===== Passo 5: Playwright =====
console.log();
let browserErrors = [];
try {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.5,
  });
  const page = await ctx.newPage();

  page.on("pageerror", (e) => browserErrors.push(`pageerror: ${e.message}`));
  page.on("console", (msg) => {
    if (msg.type() === "error")
      browserErrors.push(`console.error: ${msg.text()}`);
  });
  page.on("requestfailed", (req) => {
    browserErrors.push(
      `requestfailed: ${req.url()}, ${req.failure()?.errorText}`
    );
  });

  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(2200);

  await page.screenshot({ path: join(out, "verify-fold.png"), fullPage: false });

  const h = await page.evaluate(() => document.body.scrollHeight);
  const steps = Math.min(10, Math.ceil(h / 900));
  for (let i = 1; i < steps; i++) {
    await page.evaluate(
      (y) => window.scrollTo({ top: y, behavior: "instant" }),
      i * 900
    );
    await page.waitForTimeout(700);
    await page.screenshot({
      path: join(out, `verify-scroll-${String(i).padStart(2, "0")}.png`),
      fullPage: false,
    });
  }

  await page.screenshot({ path: join(out, "verify-full.png"), fullPage: true });

  const m = await browser.newContext({ ...devices["iPhone 13 Pro"] });
  const mp = await m.newPage();
  await mp.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await mp.waitForTimeout(1500);
  await mp.screenshot({ path: join(out, "verify-mobile-fold.png") });
  await m.close();

  await browser.close();

  if (browserErrors.length) {
    console.log(`[verify] browser errors:`);
    browserErrors.forEach((e) => console.log("  -", e));
    exitFail = 1;
  } else {
    console.log(`[verify] browser: sem erros`);
  }
  console.log(`[verify] screenshots em ${out}`);
} catch (e) {
  console.log(`[verify] Playwright falhou (${e.message}). serve.mjs está rodando em ${url}?`);
  exitFail = 1;
}

// ===== Resumo final =====
console.log();
if (exitFail !== 0) {
  console.log(`[verify] FAILED`);
  process.exit(1);
}
console.log(`[verify] OK`);
