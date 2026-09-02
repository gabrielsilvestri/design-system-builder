#!/usr/bin/env node
// _scripts/drift.mjs
// Re-roda static-extract contra a URL live do cliente e compara o output com
// <cliente>/DESIGN.md atual. Emite verdict in-sync / minor-drift / notable-drift / major-drift.

import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const workspaceRoot = resolve(__dirname, "..");

const [, , clientArg] = process.argv;
if (!clientArg) {
  console.error("Usage: node _scripts/drift.mjs <cliente>");
  process.exit(1);
}

const clientDir = resolve(workspaceRoot, clientArg);
const designMdPath = join(clientDir, "DESIGN.md");
if (!existsSync(designMdPath)) {
  console.error(`DESIGN.md not found: ${designMdPath}`);
  process.exit(1);
}

console.log(`[drift] running static-extract --compare against ${designMdPath}`);

const r = spawnSync(
  "node",
  [
    join(workspaceRoot, "_scripts", "static-extract.mjs"),
    clientArg,
    "--compare",
    "--no-reuse",
  ],
  { cwd: workspaceRoot, stdio: "inherit" }
);

if (r.status !== 0) {
  console.error("[drift] static-extract failed");
  process.exit(r.status);
}

const driftReportPath = join(
  clientDir,
  "_inputs",
  "static",
  "drift-report.json"
);
if (!existsSync(driftReportPath)) {
  console.error("[drift] drift-report.json not produced; check --compare path");
  process.exit(2);
}

const drift = JSON.parse(readFileSync(driftReportPath, "utf8"));
const summary = drift.summary || {};
const verdict = summary.verdict || "unknown";

const surfaced = {
  client: clientArg,
  verdict,
  drift_score: summary.drift_score,
  total_drifted: summary.total_drifted,
  total_added: summary.total_added,
  total_removed: summary.total_removed,
  total_matched: summary.total_matched,
  compared_against: drift.compared_against,
  live_url: drift.live_url,
  generated_at: new Date().toISOString(),
};

const outputPath = join(clientDir, "drift-report.json");
writeFileSync(outputPath, JSON.stringify(surfaced, null, 2) + "\n");

console.log(`\n[drift] verdict: ${verdict.toUpperCase()}`);
console.log(
  `[drift] drift_score=${summary.drift_score} drifted=${summary.total_drifted} added=${summary.total_added} removed=${summary.total_removed} matched=${summary.total_matched}`
);
console.log(`[drift] report: ${outputPath}`);
