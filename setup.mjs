#!/usr/bin/env node
// Wizard de primeiro uso do workspace de design system.
// Roda os passos de instalacao em ordem, checa pre-requisitos e mostra o proximo passo.
// Uso: node setup.mjs

import { execSync, spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = dirname(fileURLToPath(import.meta.url));
const STATIC = join(ROOT, ".claude", "skills", "design-md-static");

const c = {
  reset: "\x1b[0m", bold: "\x1b[1m", dim: "\x1b[2m",
  green: "\x1b[32m", yellow: "\x1b[33m", red: "\x1b[31m", cyan: "\x1b[36m",
};
const ok = (m) => console.log(`${c.green}ok${c.reset}  ${m}`);
const warn = (m) => console.log(`${c.yellow}!${c.reset}   ${m}`);
const fail = (m) => console.log(`${c.red}x${c.reset}   ${m}`);
const step = (n, m) => console.log(`\n${c.bold}${c.cyan}[${n}]${c.reset} ${c.bold}${m}${c.reset}`);

function run(cmd, cwd) {
  const r = spawnSync(cmd, { cwd, shell: true, stdio: "inherit" });
  return r.status === 0;
}

console.log(`${c.bold}Workspace design system - primeiro uso${c.reset}`);
console.log(`${c.dim}${ROOT}${c.reset}`);

// 1. Node
step(1, "Checando Node.js");
const major = Number(process.versions.node.split(".")[0]);
if (major >= 18) ok(`Node ${process.versions.node}`);
else { fail(`Node ${process.versions.node}. Precisa de 18 ou mais novo. Instale em https://nodejs.org e rode de novo.`); process.exit(1); }

// 2. Deps do workspace
step(2, "Instalando deps do workspace (playwright, js-yaml)");
if (!run("npm install", ROOT)) { fail("npm install falhou no root. Veja o erro acima."); process.exit(1); }
ok("deps do workspace instaladas");

// 3. Chromium do Playwright
step(3, "Baixando o Chromium do Playwright (uma vez)");
if (!run("npx playwright install chromium", ROOT)) warn("playwright install falhou. O discovery por screenshot nao vai rodar ate resolver. Tente 'npx playwright install chromium' manualmente.");
else ok("Chromium pronto");

// 4. Deps da skill irma design-md-static
step(4, "Instalando deps da skill design-md-static (static-extract)");
if (existsSync(join(STATIC, "package.json"))) {
  if (!run("npm install", STATIC)) warn("npm install falhou em design-md-static. O static-extract nao roda ate resolver.");
  else ok("deps do static-extract instaladas");
} else warn("design-md-static/package.json nao encontrado, pulando.");

// 5. Prova rapida: linter
step(5, "Provando o linter (node --test)");
const t = spawnSync("node", ["--test", "_scripts/lint.test.mjs"], { cwd: ROOT, shell: true, stdio: "inherit" });
if (t.status === 0) ok("linter passou nos testes");
else warn("os testes do linter nao passaram limpos. Veja acima; nao bloqueia o uso.");

console.log(`\n${c.green}${c.bold}Pronto.${c.reset} Proximo passo:`);
console.log(`  1. Abra o Claude Code nesta pasta.`);
console.log(`  2. Peca: ${c.bold}"cria o design system do cliente X"${c.reset} com a URL do site (e PDF do manual, se tiver).`);
console.log(`  3. Leia ${c.bold}COMECE-AQUI.md${c.reset} para o passo a passo completo.`);
