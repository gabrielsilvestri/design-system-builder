/**
 * Exporta tokens derivados a partir do DESIGN.md canônico do cliente (schema v2).
 *
 * Uso:
 *   node _scripts/export.mjs <client-dir>
 *
 * Gera:
 *   <client-dir>/tokens.css         (CSS custom properties em :root)
 *   <client-dir>/tokens.json        (DTCG, W3C Design Tokens Format)
 *   <client-dir>/tailwind.config.js (Tailwind v3 theme.extend)
 *
 * O parser lê o YAML frontmatter do DESIGN.md via js-yaml e deriva os três
 * artefatos. Campos opcionais (shadows, motion, breakpoints, etc.) são
 * pulados silenciosamente quando ausentes; coverage notes no body cuidam disso.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "js-yaml";

const argv = process.argv.slice(2);
if (argv.length < 1) {
  console.error("Uso: node _scripts/export.mjs <client-dir>");
  process.exit(1);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const workspaceRoot = resolve(__dirname, "..");
const clientDir = resolve(argv[0]);
const designPath = join(clientDir, "DESIGN.md");

if (!existsSync(designPath)) {
  console.error(`[export] não encontrei ${designPath}`);
  process.exit(1);
}

const raw = readFileSync(designPath, "utf8");
const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
if (!fmMatch) {
  console.error("[export] DESIGN.md sem YAML frontmatter (esperado bloco --- ... ---)");
  process.exit(1);
}

let tokens;
try {
  tokens = YAML.load(fmMatch[1]);
} catch (err) {
  console.error("[export] erro ao parsear YAML frontmatter:", err.message);
  process.exit(1);
}

if (!tokens || typeof tokens !== "object") {
  console.error("[export] frontmatter vazio ou inválido");
  process.exit(1);
}

// ============ Helpers ============

const CANONICAL_COLOR_SLOTS = [
  "primary", "on-primary",
  "secondary", "on-secondary",
  "tertiary", "on-tertiary",
  "neutral",
  "surface", "on-surface",
  "surface-variant", "on-surface-variant",
  "outline",
  "error", "on-error",
  "success", "warning", "info",
];

function slugify(str) {
  return String(str)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function pickHex(value) {
  // Aceita string hex direta ou objeto { hex: "#..." } do bloco named.
  if (typeof value === "string") return value;
  if (value && typeof value === "object" && typeof value.hex === "string") return value.hex;
  return null;
}

function isObj(v) {
  return v && typeof v === "object" && !Array.isArray(v);
}

// ============ tokens.css ============

function buildCss(t) {
  const lines = [];
  lines.push("/* Gerado por _scripts/export.mjs a partir de DESIGN.md (schema v2) */");
  lines.push("/* Não editar manualmente; rodar export.mjs novamente após alterar DESIGN.md */");
  lines.push("");
  lines.push(":root {");

  // Colors canonical
  if (isObj(t.colors)) {
    lines.push("  /* ============ COLORS (canonical slots) ============ */");
    for (const slot of CANONICAL_COLOR_SLOTS) {
      const hex = pickHex(t.colors[slot]);
      if (hex) lines.push(`  --color-${slot}: ${hex};`);
    }
    lines.push("");

    // Named colors
    if (isObj(t.colors.named)) {
      const entries = Object.entries(t.colors.named);
      if (entries.length > 0) {
        lines.push("  /* ============ NAMED COLORS (do manual) ============ */");
        for (const [name, value] of entries) {
          const hex = pickHex(value);
          if (hex) lines.push(`  --color-${slugify(name)}: ${hex};`);
        }
        lines.push("");
      }
    }
  }

  // Typography
  if (isObj(t.typography)) {
    const entries = Object.entries(t.typography).filter(([, v]) => isObj(v));
    if (entries.length > 0) {
      lines.push("  /* ============ TYPOGRAPHY (roles) ============ */");
      for (const [role, spec] of entries) {
        const slug = slugify(role);
        if (spec.fontFamily) lines.push(`  --font-${slug}: ${spec.fontFamily};`);
        if (spec.fontSize) lines.push(`  --text-${slug}: ${spec.fontSize};`);
        if (spec.fontWeight !== undefined && spec.fontWeight !== null) {
          lines.push(`  --font-weight-${slug}: ${spec.fontWeight};`);
        }
        if (spec.lineHeight) lines.push(`  --leading-${slug}: ${spec.lineHeight};`);
        if (spec.letterSpacing) lines.push(`  --tracking-${slug}: ${spec.letterSpacing};`);
      }
      lines.push("");
    }
  }

  // Spacing
  if (isObj(t.spacing)) {
    const entries = Object.entries(t.spacing);
    if (entries.length > 0) {
      lines.push("  /* ============ SPACING ============ */");
      for (const [name, value] of entries) {
        lines.push(`  --space-${name}: ${value};`);
      }
      lines.push("");
    }
  }

  // Rounded
  if (isObj(t.rounded)) {
    const entries = Object.entries(t.rounded);
    if (entries.length > 0) {
      lines.push("  /* ============ ROUNDED ============ */");
      for (const [name, value] of entries) {
        lines.push(`  --radius-${name}: ${value};`);
      }
      lines.push("");
    }
  }

  // Breakpoints
  if (isObj(t.breakpoints)) {
    const entries = Object.entries(t.breakpoints);
    if (entries.length > 0) {
      lines.push("  /* ============ BREAKPOINTS ============ */");
      for (const [name, value] of entries) {
        lines.push(`  --breakpoint-${name}: ${value};`);
      }
      lines.push("");
    }
  }

  // Shadows
  if (isObj(t.shadows)) {
    const entries = Object.entries(t.shadows);
    if (entries.length > 0) {
      lines.push("  /* ============ SHADOWS ============ */");
      for (const [name, value] of entries) {
        lines.push(`  --shadow-${name}: ${value};`);
      }
      lines.push("");
    }
  }

  // Motion (durations + easings)
  if (isObj(t.motion)) {
    const durations = isObj(t.motion.durations) ? Object.entries(t.motion.durations) : [];
    const easings = isObj(t.motion.easings) ? Object.entries(t.motion.easings) : [];
    if (durations.length > 0 || easings.length > 0) {
      lines.push("  /* ============ MOTION ============ */");
      for (const [name, value] of durations) {
        lines.push(`  --duration-${name}: ${value};`);
      }
      for (const [name, value] of easings) {
        lines.push(`  --ease-${slugify(name).replace(/^ease-/, "")}: ${value};`);
      }
      lines.push("");
    }
  }

  // Z-index
  const zKey = t["z-index"] ?? t.zIndex;
  if (isObj(zKey)) {
    const entries = Object.entries(zKey);
    if (entries.length > 0) {
      lines.push("  /* ============ Z-INDEX ============ */");
      for (const [name, value] of entries) {
        lines.push(`  --z-${name}: ${value};`);
      }
      lines.push("");
    }
  }

  // Opacity
  if (isObj(t.opacity)) {
    const entries = Object.entries(t.opacity);
    if (entries.length > 0) {
      lines.push("  /* ============ OPACITY ============ */");
      for (const [name, value] of entries) {
        lines.push(`  --opacity-${name}: ${value};`);
      }
      lines.push("");
    }
  }

  // Remove trailing blank line antes do fechamento
  while (lines.length > 1 && lines[lines.length - 1] === "") lines.pop();
  lines.push("}");
  return lines.join("\n") + "\n";
}

// ============ tokens.json (DTCG W3C) ============

function buildDtcg(t) {
  const out = {};

  // Colors
  if (isObj(t.colors)) {
    out.color = {};
    for (const slot of CANONICAL_COLOR_SLOTS) {
      const hex = pickHex(t.colors[slot]);
      if (hex) out.color[slot] = { $value: hex, $type: "color" };
    }
    if (isObj(t.colors.named)) {
      const named = {};
      for (const [name, value] of Object.entries(t.colors.named)) {
        const hex = pickHex(value);
        if (hex) named[slugify(name)] = { $value: hex, $type: "color" };
      }
      if (Object.keys(named).length > 0) out.color.named = named;
    }
    if (Object.keys(out.color).length === 0) delete out.color;
  }

  // Typography
  if (isObj(t.typography)) {
    const typo = {};
    for (const [role, spec] of Object.entries(t.typography)) {
      if (!isObj(spec)) continue;
      const value = {};
      if (spec.fontFamily) value.fontFamily = spec.fontFamily;
      if (spec.fontSize) value.fontSize = spec.fontSize;
      if (spec.fontWeight !== undefined && spec.fontWeight !== null) value.fontWeight = spec.fontWeight;
      if (spec.lineHeight) value.lineHeight = spec.lineHeight;
      if (spec.letterSpacing) value.letterSpacing = spec.letterSpacing;
      if (Object.keys(value).length > 0) {
        typo[slugify(role)] = { $value: value, $type: "typography" };
      }
    }
    if (Object.keys(typo).length > 0) out.typography = typo;
  }

  // Spacing
  if (isObj(t.spacing)) {
    const sp = {};
    for (const [name, value] of Object.entries(t.spacing)) {
      sp[name] = { $value: String(value), $type: "dimension" };
    }
    if (Object.keys(sp).length > 0) out.spacing = sp;
  }

  // Rounded
  if (isObj(t.rounded)) {
    const r = {};
    for (const [name, value] of Object.entries(t.rounded)) {
      r[name] = { $value: String(value), $type: "dimension" };
    }
    if (Object.keys(r).length > 0) out.rounded = r;
  }

  // Breakpoints
  if (isObj(t.breakpoints)) {
    const bp = {};
    for (const [name, value] of Object.entries(t.breakpoints)) {
      bp[name] = { $value: String(value), $type: "dimension" };
    }
    if (Object.keys(bp).length > 0) out.breakpoints = bp;
  }

  // Shadows
  if (isObj(t.shadows)) {
    const sh = {};
    for (const [name, value] of Object.entries(t.shadows)) {
      sh[name] = { $value: String(value), $type: "shadow" };
    }
    if (Object.keys(sh).length > 0) out.shadow = sh;
  }

  // Motion
  if (isObj(t.motion)) {
    const motion = {};
    if (isObj(t.motion.durations)) {
      motion.duration = {};
      for (const [name, value] of Object.entries(t.motion.durations)) {
        motion.duration[name] = { $value: String(value), $type: "duration" };
      }
    }
    if (isObj(t.motion.easings)) {
      motion.easing = {};
      for (const [name, value] of Object.entries(t.motion.easings)) {
        motion.easing[name] = { $value: String(value), $type: "cubicBezier" };
      }
    }
    if (Object.keys(motion).length > 0) out.motion = motion;
  }

  // Z-index
  const zKey = t["z-index"] ?? t.zIndex;
  if (isObj(zKey)) {
    const z = {};
    for (const [name, value] of Object.entries(zKey)) {
      z[name] = { $value: Number(value), $type: "number" };
    }
    if (Object.keys(z).length > 0) out["z-index"] = z;
  }

  // Opacity
  if (isObj(t.opacity)) {
    const op = {};
    for (const [name, value] of Object.entries(t.opacity)) {
      op[name] = { $value: String(value), $type: "number" };
    }
    if (Object.keys(op).length > 0) out.opacity = op;
  }

  return out;
}

// ============ tailwind.config.js ============

function buildTailwind(t) {
  const extend = {};

  // Colors (refs pra CSS vars)
  if (isObj(t.colors)) {
    const colors = {};
    for (const slot of CANONICAL_COLOR_SLOTS) {
      if (pickHex(t.colors[slot])) colors[slot] = `var(--color-${slot})`;
    }
    if (isObj(t.colors.named)) {
      const named = {};
      for (const [name, value] of Object.entries(t.colors.named)) {
        if (pickHex(value)) named[slugify(name)] = `var(--color-${slugify(name)})`;
      }
      if (Object.keys(named).length > 0) colors.named = named;
    }
    if (Object.keys(colors).length > 0) extend.colors = colors;
  }

  // Typography: separa em fontFamily, fontSize, fontWeight
  if (isObj(t.typography)) {
    const fontFamily = {};
    const fontSize = {};
    const fontWeight = {};
    for (const [role, spec] of Object.entries(t.typography)) {
      if (!isObj(spec)) continue;
      const slug = slugify(role);
      if (spec.fontFamily) fontFamily[slug] = `var(--font-${slug})`;
      if (spec.fontSize) {
        const meta = {};
        if (spec.lineHeight) meta.lineHeight = `var(--leading-${slug})`;
        if (spec.letterSpacing) meta.letterSpacing = `var(--tracking-${slug})`;
        fontSize[slug] = Object.keys(meta).length > 0
          ? [`var(--text-${slug})`, meta]
          : `var(--text-${slug})`;
      }
      if (spec.fontWeight !== undefined && spec.fontWeight !== null) {
        fontWeight[slug] = `var(--font-weight-${slug})`;
      }
    }
    if (Object.keys(fontFamily).length > 0) extend.fontFamily = fontFamily;
    if (Object.keys(fontSize).length > 0) extend.fontSize = fontSize;
    if (Object.keys(fontWeight).length > 0) extend.fontWeight = fontWeight;
  }

  // Spacing
  if (isObj(t.spacing)) {
    const sp = {};
    for (const name of Object.keys(t.spacing)) sp[name] = `var(--space-${name})`;
    if (Object.keys(sp).length > 0) extend.spacing = sp;
  }

  // Border radius
  if (isObj(t.rounded)) {
    const r = {};
    for (const name of Object.keys(t.rounded)) r[name] = `var(--radius-${name})`;
    if (Object.keys(r).length > 0) extend.borderRadius = r;
  }

  // Breakpoints viram screens (em Tailwind, screens não usa CSS vars; passa literal)
  if (isObj(t.breakpoints)) {
    const screens = {};
    for (const [name, value] of Object.entries(t.breakpoints)) {
      // Pula "mobile" / 0px (Tailwind assume mobile-first como default)
      const v = String(value);
      if (v === "0px" || v === "0") continue;
      screens[name] = v;
    }
    if (Object.keys(screens).length > 0) extend.screens = screens;
  }

  // Shadows
  if (isObj(t.shadows)) {
    const sh = {};
    for (const name of Object.keys(t.shadows)) sh[name] = `var(--shadow-${name})`;
    if (Object.keys(sh).length > 0) extend.boxShadow = sh;
  }

  // Motion
  if (isObj(t.motion)) {
    if (isObj(t.motion.durations)) {
      const d = {};
      for (const name of Object.keys(t.motion.durations)) d[name] = `var(--duration-${name})`;
      if (Object.keys(d).length > 0) extend.transitionDuration = d;
    }
    if (isObj(t.motion.easings)) {
      const e = {};
      for (const name of Object.keys(t.motion.easings)) {
        const slug = slugify(name).replace(/^ease-/, "");
        e[name] = `var(--ease-${slug})`;
      }
      if (Object.keys(e).length > 0) extend.transitionTimingFunction = e;
    }
  }

  // Z-index
  const zKey = t["z-index"] ?? t.zIndex;
  if (isObj(zKey)) {
    const z = {};
    for (const name of Object.keys(zKey)) z[name] = `var(--z-${name})`;
    if (Object.keys(z).length > 0) extend.zIndex = z;
  }

  // Opacity
  if (isObj(t.opacity)) {
    const op = {};
    for (const name of Object.keys(t.opacity)) op[name] = `var(--opacity-${name})`;
    if (Object.keys(op).length > 0) extend.opacity = op;
  }

  // Serializa como JS object literal (não JSON, pra ficar idiomático)
  const themeBody = JSON.stringify({ extend }, null, 4)
    .split("\n")
    .map((line, idx) => (idx === 0 ? line : "  " + line))
    .join("\n");

  return `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./brandbook/**/*.html"],
  theme: ${themeBody},
  plugins: [],
};
`;
}

// ============ Executa ============

try {
  const css = buildCss(tokens);
  writeFileSync(join(clientDir, "tokens.css"), css, "utf8");

  const dtcg = buildDtcg(tokens);
  writeFileSync(join(clientDir, "tokens.json"), JSON.stringify(dtcg, null, 2) + "\n", "utf8");

  const tw = buildTailwind(tokens);
  writeFileSync(join(clientDir, "tailwind.config.js"), tw, "utf8");

  console.log(`[export] OK: tokens.css + tokens.json + tailwind.config.js gerados em ${clientDir}`);
} catch (err) {
  console.error("[export] falha ao gerar artefatos:", err.message);
  process.exit(1);
}
