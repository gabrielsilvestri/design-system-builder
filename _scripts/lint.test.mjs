// _scripts/lint.test.mjs
// TDD pra _scripts/lint.mjs

import { test } from "node:test";
import assert from "node:assert/strict";
import { lintDesignMd } from "./lint.mjs";

test("missing-required-slot fails on absent colors.primary", () => {
  const md = `---
schema_version: 2.0
client_name: Test
colors: {}
---
## 1. Visual Theme
`;
  const r = lintDesignMd(md);
  const err = r.findings.find((f) => f.rule === "missing-required-slot");
  assert.ok(err, "should emit missing-required-slot");
  assert.equal(err.severity, "error");
});

test("hex-format fails on non-6-digit hex in colors top-level", () => {
  const md = `---
schema_version: 2.0
client_name: Test
colors:
  primary: "#abc"
  on-primary: "#000000"
  surface: "#ffffff"
  on-surface: "#000000"
---
## 1. Visual Theme
`;
  const r = lintDesignMd(md);
  const err = r.findings.find((f) => f.rule === "hex-format");
  assert.ok(err);
});

test("generic-dont fails on banned phrase", () => {
  const md = `---
schema_version: 2.0
client_name: Test
colors:
  primary: "#abcdef"
  on-primary: "#000000"
  surface: "#ffffff"
  on-surface: "#000000"
---
## 7. Do's and Don'ts

### Don'ts (brand-specific)

- Não use muitas cores
`;
  const r = lintDesignMd(md);
  const err = r.findings.find((f) => f.rule === "generic-dont");
  assert.ok(err);
  assert.equal(err.severity, "error");
});

test("section-order warns on missing section", () => {
  const md = `---
schema_version: 2.0
client_name: Test
colors:
  primary: "#abcdef"
  on-primary: "#000000"
  surface: "#ffffff"
  on-surface: "#000000"
---
## 1. Visual Theme
## 3. Typography
## 2. Colors
`;
  const r = lintDesignMd(md);
  const warn = r.findings.find((f) => f.rule === "section-order");
  assert.ok(warn);
  assert.equal(warn.severity, "warning");
});

test("clean DESIGN.md passes with zero errors", () => {
  const md = `---
schema_version: 2.0
client_name: Test
style_archetype: brutalist-mono
confidence_summary: { high: 10, medium: 2, low: 0, total: 12 }
colors:
  primary: "#abcdef"
  on-primary: "#000000"
  secondary: "#123456"
  on-secondary: "#ffffff"
  tertiary: "#abcdef"
  on-tertiary: "#000000"
  neutral: "#666666"
  surface: "#ffffff"
  on-surface: "#000000"
  surface-variant: "#eeeeee"
  on-surface-variant: "#222222"
  outline: "#cccccc"
  error: "#cc0000"
  on-error: "#ffffff"
  success: "#00aa00"
  warning: "#ffaa00"
  info: "#0066cc"
typography:
  body: { fontFamily: "Inter", fontSize: "16px", fontWeight: 400, lineHeight: "1.5", letterSpacing: "0em" }
---
## 1. Visual Theme & Atmosphere
brutalist mono aesthetic
## 2. Color Palette & Roles
primary palette
## 3. Typography Rules
inter at all sizes
## 4. Components
button primary
## 5. Layout Principles
8px scale
## 6. Depth & Elevation
flat by design
## 7. Do's and Don'ts
### Don'ts
- Não use Tasa Orbiter em peso menor que 800
## 8. Responsive Behavior
desktop first
## 9. Agent Prompt Guide
example
`;
  const r = lintDesignMd(md);
  const errors = r.findings.filter((f) => f.severity === "error");
  assert.equal(
    errors.length,
    0,
    `expected zero errors, got: ${JSON.stringify(errors, null, 2)}`
  );
});
