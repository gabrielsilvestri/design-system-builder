#!/usr/bin/env node
// _scripts/lint.mjs
// Linter próprio para DESIGN.md schema v2 (sem dependência do @google/design.md).
//
// Rules:
//   missing-required-slot  error   slots canônicos obrigatórios em colors
//   hex-format             error   colors top-level com hex != 6 dígitos
//   generic-dont           error   Don'ts genéricos banidos
//   section-order          warning seções markdown fora de ordem 1-9
//   archetype-missing      warning style_archetype não populado
//   provenance-missing     warning confidence_summary ausente
//   broken-ref             error   {path.to.token} não resolve
//
// Uso (CLI):
//   node _scripts/lint.mjs <cliente>
// Uso (programático):
//   import { lintDesignMd } from "./lint.mjs";

import { readFileSync, existsSync, writeFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import YAML from "js-yaml";

const REQUIRED_COLOR_SLOTS = ["primary", "on-primary", "surface", "on-surface"];

const HEX6 = /^#[0-9a-fA-F]{6}$/;

const GENERIC_DONT_PATTERNS = [
  /n[ãa]o use muitas/i,
  /mantenha consist/i,
  /evite clash/i,
  /use o mais pr[óo]ximo/i,
  /garanta espac/i,
  /don'?t use too many/i,
  /maintain consistent/i,
  /avoid clashing/i,
];

const CANONICAL_SECTION_PATTERNS = [
  /##\s*1\.\s*Visual Theme/i,
  /##\s*2\.\s*Color/i,
  /##\s*3\.\s*Typography/i,
  /##\s*4\.\s*Components/i,
  /##\s*5\.\s*Layout/i,
  /##\s*6\.\s*Depth/i,
  /##\s*7\.\s*Do'?s and Don'?ts/i,
  /##\s*8\.\s*Responsive/i,
  /##\s*9\.\s*Agent Prompt/i,
];

function resolveTokenRef(tokens, refPath) {
  const segments = refPath.split(".");
  let cur = tokens;
  for (const seg of segments) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = cur[seg];
  }
  return cur;
}

export function lintDesignMd(md) {
  const findings = [];

  const fmMatch = md.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!fmMatch) {
    findings.push({
      rule: "frontmatter-missing",
      severity: "error",
      message: "DESIGN.md must start with --- YAML frontmatter ---",
    });
    return { findings, errors_count: 1, warnings_count: 0 };
  }

  let tokens;
  try {
    tokens = YAML.load(fmMatch[1]);
  } catch (e) {
    findings.push({
      rule: "frontmatter-parse",
      severity: "error",
      message: `YAML parse error: ${e.message}`,
    });
    return { findings, errors_count: 1, warnings_count: 0 };
  }
  const body = fmMatch[2];

  // missing-required-slot
  for (const slot of REQUIRED_COLOR_SLOTS) {
    if (!tokens.colors?.[slot]) {
      findings.push({
        rule: "missing-required-slot",
        severity: "error",
        message: `colors.${slot} is required`,
      });
    }
  }

  // hex-format on top-level colors
  for (const [k, v] of Object.entries(tokens.colors || {})) {
    if (k === "named") continue;
    if (typeof v === "string" && !HEX6.test(v)) {
      findings.push({
        rule: "hex-format",
        severity: "error",
        message: `colors.${k} must be 6-digit hex, got: ${v}`,
      });
    }
  }

  // broken-ref: resolve {path.to.token} em components
  const components = tokens.components || {};
  for (const [compName, compDef] of Object.entries(components)) {
    if (typeof compDef !== "object" || compDef == null) continue;
    for (const [propName, propValue] of Object.entries(compDef)) {
      if (typeof propValue === "string") {
        const refMatch = propValue.match(/^\{([\w.-]+)\}$/);
        if (refMatch) {
          const resolved = resolveTokenRef(tokens, refMatch[1]);
          if (resolved === undefined) {
            findings.push({
              rule: "broken-ref",
              severity: "error",
              message: `components.${compName}.${propName} references unresolved token: {${refMatch[1]}}`,
            });
          }
        }
      }
    }
  }

  // generic-dont
  const dontsMatch = body.match(
    /##\s*7\.\s*Do'?s and Don'?ts[\s\S]*?(?=\n##\s|\n*$)/i
  );
  const dontsText = dontsMatch ? dontsMatch[0] : "";
  for (const pat of GENERIC_DONT_PATTERNS) {
    if (pat.test(dontsText)) {
      findings.push({
        rule: "generic-dont",
        severity: "error",
        message: `Don't section contains generic phrase matching ${pat}`,
      });
      break;
    }
  }

  // section-order
  const positions = CANONICAL_SECTION_PATTERNS.map((re) => body.search(re));
  const found = positions
    .map((p, i) => ({ i, p }))
    .filter((x) => x.p >= 0);
  for (let i = 1; i < found.length; i++) {
    if (found[i].p < found[i - 1].p) {
      findings.push({
        rule: "section-order",
        severity: "warning",
        message: "Markdown sections are out of canonical order (1-9)",
      });
      break;
    }
  }

  // archetype-missing
  if (!tokens.style_archetype || tokens.style_archetype === "unclassified") {
    findings.push({
      rule: "archetype-missing",
      severity: "warning",
      message: "style_archetype not set or unclassified",
    });
  }

  // provenance-missing
  if (!tokens.confidence_summary) {
    findings.push({
      rule: "provenance-missing",
      severity: "warning",
      message: "confidence_summary not populated",
    });
  }

  const errors_count = findings.filter((f) => f.severity === "error").length;
  const warnings_count = findings.filter((f) => f.severity === "warning").length;

  return { findings, errors_count, warnings_count };
}

// CLI entry
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const __dirname = fileURLToPath(new URL(".", import.meta.url));
  const workspaceRoot = resolve(__dirname, "..");
  const [, , clientArg] = process.argv;
  if (!clientArg) {
    console.error("Usage: node _scripts/lint.mjs <cliente>");
    process.exit(1);
  }
  const designMdPath = join(workspaceRoot, clientArg, "DESIGN.md");
  if (!existsSync(designMdPath)) {
    console.error(`DESIGN.md not found: ${designMdPath}`);
    process.exit(1);
  }
  const md = readFileSync(designMdPath, "utf8");
  const result = lintDesignMd(md);
  const reportDir = join(workspaceRoot, clientArg, "_inputs");
  const reportPath = join(reportDir, "lint-report.json");
  try {
    writeFileSync(reportPath, JSON.stringify(result, null, 2) + "\n");
  } catch (e) {
    // _inputs/ pode não existir ainda; cair pra cliente root
    writeFileSync(
      join(workspaceRoot, clientArg, "lint-report.json"),
      JSON.stringify(result, null, 2) + "\n"
    );
  }
  for (const f of result.findings) {
    console.log(`  [${f.severity}] ${f.rule}: ${f.message}`);
  }
  console.log(
    `\n[lint] ${result.errors_count} error(s), ${result.warnings_count} warning(s)`
  );
  process.exit(result.errors_count > 0 ? 1 : 0);
}
