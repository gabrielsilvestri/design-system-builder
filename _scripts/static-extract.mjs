#!/usr/bin/env node
// _scripts/static-extract.mjs
// Wrapper para a skill design-md-static (static-extract standalone) que redireciona
// os outputs para <cliente>/_inputs/static/ em vez de outputs/design-md/<slug>/.
//
// Uso:
//   node _scripts/static-extract.mjs <cliente> [--url <url>] [--compare] [--no-reuse]
//
// Se --url não for passado, tenta ler "url: https://..." do <cliente>/_inputs/briefing.md.

import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const workspaceRoot = resolve(__dirname, "..");

const [, , clientArg, ...rest] = process.argv;
if (!clientArg) {
  console.error("Usage: node _scripts/static-extract.mjs <cliente> [--url <url>] [--compare] [--no-reuse]");
  process.exit(1);
}

const clientDir = resolve(workspaceRoot, clientArg);
if (!existsSync(clientDir)) {
  console.error(`Client folder not found: ${clientDir}`);
  process.exit(1);
}

let urlFromBriefing = null;
const briefingPath = join(clientDir, "_inputs", "briefing.md");
if (existsSync(briefingPath)) {
  const briefing = readFileSync(briefingPath, "utf8");
  const match = briefing.match(/url[:\s]+(\S+)/i);
  if (match) urlFromBriefing = match[1].replace(/[<>]/g, "");
}

const urlFlagIndex = rest.indexOf("--url");
const url = urlFlagIndex >= 0 ? rest[urlFlagIndex + 1] : urlFromBriefing;
if (!url) {
  console.error("No --url provided and none found in _inputs/briefing.md");
  process.exit(1);
}

const compareFlag = rest.includes("--compare")
  ? ["--compare", join(clientDir, "DESIGN.md")]
  : [];
const reuseFlag = rest.includes("--no-reuse") ? ["--no-reuse"] : [];

const outDir = join(clientDir, "_inputs", "static");
mkdirSync(outDir, { recursive: true });

const skillScript = join(
  workspaceRoot,
  ".claude",
  "skills",
  "design-md-static",
  "run.cjs"
);

console.log(`[static-extract] cliente=${clientArg} url=${url}`);
console.log(`[static-extract] outputs -> ${outDir}`);

const r = spawnSync(
  "node",
  [skillScript, "--url", url, "--out", outDir, ...compareFlag, ...reuseFlag],
  {
    cwd: workspaceRoot,
    stdio: "inherit",
  }
);

process.exit(r.status || 0);
