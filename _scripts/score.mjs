#!/usr/bin/env node
// _scripts/score.mjs
// Computa quality grade A-F em 7 categorias para o DESIGN.md de um cliente.
// Saída: <cliente>/quality-score.json

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "js-yaml";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const workspaceRoot = resolve(__dirname, "..");

const [, , clientArg] = process.argv;
if (!clientArg) {
  console.error("Usage: node _scripts/score.mjs <cliente>");
  process.exit(1);
}

const clientDir = resolve(workspaceRoot, clientArg);
const designMdPath = join(clientDir, "DESIGN.md");
if (!existsSync(designMdPath)) {
  console.error(`DESIGN.md not found: ${designMdPath}`);
  process.exit(1);
}

const raw = readFileSync(designMdPath, "utf8");
const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
if (!fmMatch) {
  console.error("DESIGN.md has no YAML frontmatter");
  process.exit(1);
}
const tokens = YAML.load(fmMatch[1]);
const body = fmMatch[2];

// 1. colors_coverage (15%)
const requiredColorSlots = [
  "primary",
  "on-primary",
  "secondary",
  "on-secondary",
  "tertiary",
  "on-tertiary",
  "neutral",
  "surface",
  "on-surface",
  "surface-variant",
  "on-surface-variant",
  "outline",
  "error",
  "on-error",
  "success",
  "warning",
  "info",
];
const colorsPresent = requiredColorSlots.filter((s) => tokens.colors?.[s]).length;
const colorsCoverage = colorsPresent / requiredColorSlots.length;

// 2. typography_coverage (15%)
const canonicalTypoRoles = [
  "display-hero",
  "display-large",
  "section-heading",
  "subheading-large",
  "subheading",
  "body-large",
  "body",
  "body-small",
  "button",
  "button-small",
  "link",
  "caption",
  "caption-small",
  "micro",
];
const typoPresent = canonicalTypoRoles.filter((r) => tokens.typography?.[r]).length;
const typoCoverage = typoPresent / canonicalTypoRoles.length;

// 3. component_completeness (15%)
const requiredAtoms = [
  "button-primary",
  "button-secondary",
  "button-ghost",
  "card",
  "input-text",
  "badge-default",
  "nav-header",
];
const atomsPresent = requiredAtoms.filter((a) => tokens.components?.[a]).length;
const componentCompleteness = atomsPresent / requiredAtoms.length;

// 4. confidence_high_ratio (20%)
const conf = tokens.confidence_summary || {
  high: 0,
  medium: 0,
  low: 0,
  total: 0,
};
const confTotal = conf.total || conf.high + conf.medium + conf.low;
const confHighRatio = confTotal > 0 ? conf.high / confTotal : 0;

// 5. lint_clean (15%)
let lintClean = 1;
const lintReportPath = join(clientDir, "_inputs", "lint-report.json");
if (existsSync(lintReportPath)) {
  const lint = JSON.parse(readFileSync(lintReportPath, "utf8"));
  lintClean = lint.errors_count === 0 ? 1 : 0;
}

// 6. brand_specificity_donts (10%)
const dontsMatch = body.match(/##\s*7\.\s*Do'?s and Don'?ts[\s\S]*?(?=\n##\s|\n*$)/i);
const dontsText = dontsMatch ? dontsMatch[0] : "";
const genericDontPatterns = [
  /n[ãa]o use muitas/i,
  /mantenha consist/i,
  /evite clash/i,
  /use o mais pr[óo]ximo/i,
  /garanta espac/i,
  /don'?t use too many/i,
  /maintain consistent/i,
];
const hasGenericDont = genericDontPatterns.some((p) => p.test(dontsText));
const brandSpecificityDonts = hasGenericDont ? 0 : 1;

// 7. coverage_notes_present (10%)
const depthSection = body.match(/##\s*\d+\.\s*Depth.*?(?=\n##\s|$)/is)?.[0] || "";
const hasShadows =
  tokens.shadows &&
  Object.values(tokens.shadows).some((v) => v && v !== "none");
const mentionsFlat = /flat|low-elevation|sem sombra|intencionalmente plano/i.test(
  depthSection
);
const coverageNotesOk = hasShadows || mentionsFlat ? 1 : 0;

const categories = {
  colors_coverage: { score: colorsCoverage, weight: 0.15 },
  typography_coverage: { score: typoCoverage, weight: 0.15 },
  component_completeness: { score: componentCompleteness, weight: 0.15 },
  confidence_high_ratio: { score: confHighRatio, weight: 0.2 },
  lint_clean: { score: lintClean, weight: 0.15 },
  brand_specificity_donts: { score: brandSpecificityDonts, weight: 0.1 },
  coverage_notes_present: { score: coverageNotesOk, weight: 0.1 },
};

const overall =
  Object.values(categories).reduce((acc, c) => acc + c.score * c.weight, 0) *
  100;

const gradeOf = (s) =>
  s >= 0.9 ? "A" : s >= 0.8 ? "B" : s >= 0.7 ? "C" : s >= 0.6 ? "D" : "F";

const grade = gradeOf(overall / 100);

const result = {
  client: clientArg,
  grade,
  overall: Math.round(overall),
  categories: Object.fromEntries(
    Object.entries(categories).map(([k, v]) => [
      k,
      {
        score: Math.round(v.score * 100),
        weight: v.weight,
        grade: gradeOf(v.score),
      },
    ])
  ),
  generated_at: new Date().toISOString(),
};

const outputPath = join(clientDir, "quality-score.json");
writeFileSync(outputPath, JSON.stringify(result, null, 2) + "\n");

console.log(`\n[score] ${clientArg}: grade ${grade} (${result.overall}/100)`);
for (const [k, v] of Object.entries(result.categories)) {
  console.log(`  ${k.padEnd(28)} ${String(v.score).padStart(3)}%  ${v.grade}`);
}
console.log(`[score] report: ${outputPath}`);
