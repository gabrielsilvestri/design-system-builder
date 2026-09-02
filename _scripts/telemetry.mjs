#!/usr/bin/env node
// _scripts/telemetry.mjs
// Lê <cliente>/_inputs/static/telemetry.json e history/*/telemetry.json,
// imprime tabela de runs com wall_clock, provider, model, tokens, custo USD, cache hits.

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const workspaceRoot = resolve(__dirname, "..");

const [, , clientArg] = process.argv;
if (!clientArg) {
  console.error("Usage: node _scripts/telemetry.mjs <cliente>");
  process.exit(1);
}

const clientDir = resolve(workspaceRoot, clientArg);
const staticDir = join(clientDir, "_inputs", "static");

const runs = [];

const latestTelemetry = join(staticDir, "telemetry.json");
if (existsSync(latestTelemetry)) {
  const t = JSON.parse(readFileSync(latestTelemetry, "utf8"));
  runs.push({ ts: t.generated_at || "latest", ...t });
}

const historyDir = join(staticDir, "history");
if (existsSync(historyDir)) {
  for (const entry of readdirSync(historyDir)) {
    const entryPath = join(historyDir, entry);
    if (statSync(entryPath).isDirectory()) {
      const tPath = join(entryPath, "telemetry.json");
      if (existsSync(tPath)) {
        const t = JSON.parse(readFileSync(tPath, "utf8"));
        runs.push({ ts: entry, ...t });
      }
    }
  }
}

if (runs.length === 0) {
  console.log(`[telemetry] no runs found under ${staticDir}`);
  process.exit(0);
}

console.log(`\n[telemetry] ${clientArg} — ${runs.length} run(s)\n`);
console.log(
  "timestamp                  provider     model                       wall      tokens-in   tokens-out  cache-hit  retries  USD"
);
console.log("-".repeat(120));

let totalUsd = 0;
for (const r of runs) {
  const ts = (r.ts || "").padEnd(26);
  const provider = (r.provider || "?").padEnd(12);
  const model = (r.llm?.model || "?").padEnd(28);
  const wall = `${((r.wall_clock_ms || 0) / 1000).toFixed(1)}s`.padEnd(8);
  const tin = String(r.llm?.input_tokens ?? "?").padStart(10);
  const tout = String(r.llm?.output_tokens ?? "?").padStart(10);
  const cacheHits = Object.values(r.reuse?.trace || {}).filter(
    (v) => v === "HIT"
  ).length;
  const cache = `${cacheHits}/5`.padEnd(10);
  const retries = String(r.llm?.retries ?? 0).padStart(6);
  const usd = `$${(r.llm?.cost_estimate?.usd ?? 0).toFixed(2)}`.padStart(7);
  totalUsd += r.llm?.cost_estimate?.usd ?? 0;
  console.log(
    `${ts} ${provider} ${model} ${wall} ${tin}  ${tout}  ${cache}  ${retries}  ${usd}`
  );
}

console.log("-".repeat(120));
console.log(`Total cost across all runs: $${totalUsd.toFixed(2)}`);
