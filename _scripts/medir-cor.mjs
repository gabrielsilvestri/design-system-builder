#!/usr/bin/env node
/**
 * medir-cor.mjs · conversão OKLCH -> sRGB e medição de contraste WCAG 2.x.
 *
 * Existe porque o workspace não tinha nenhuma conta de cor: a régua da casa
 * exige razão de contraste MEDIDA por token (piso 4.5:1, teto 13:1 no texto
 * principal, 3:1 em borda de controle), e o export.mjs só copia hex.
 *
 * Subcomandos:
 *   node _scripts/medir-cor.mjs oklch <L> <C> <H>         hex da cor OKLCH (L em 0..1)
 *   node _scripts/medir-cor.mjs medir <hex-tinta> <hex-fundo> [...fundos]
 *   node _scripts/medir-cor.mjs anotar <cliente>          comenta o tokens.css
 *
 * O subcomando `anotar` roda DEPOIS do export.mjs: ele lê o bloco
 * `contrast_notes:` do frontmatter do DESIGN.md e escreve cada nota como
 * comentário na linha do token correspondente do tokens.css. É idempotente
 * (reescreve a nota se já existir) e não inventa nada: o que ele escreve é o
 * que está no DESIGN.md, que por sua vez é conferido por `medir`.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import YAML from "js-yaml";

// ============ conversões ============

export function hexToRgb(hex) {
  const h = String(hex).trim().replace(/^#/, "");
  if (!/^[0-9a-fA-F]{6}$/.test(h)) throw new Error(`hex inválido: ${hex}`);
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

export function rgbToHex(r, g, b) {
  const c = (n) => Math.round(Math.min(255, Math.max(0, n))).toString(16).padStart(2, "0");
  return `#${c(r)}${c(g)}${c(b)}`;
}

/** Luminância relativa WCAG 2.x (sRGB, canal linearizado). */
export function luminancia(hex) {
  const [r, g, b] = hexToRgb(hex).map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Razão de contraste WCAG 2.x entre dois hex. */
export function contraste(a, b) {
  const la = luminancia(a);
  const lb = luminancia(b);
  const claro = Math.max(la, lb);
  const escuro = Math.min(la, lb);
  return (claro + 0.05) / (escuro + 0.05);
}

/** Saturação HSL em porcentagem (a régua pede abaixo de 80). */
export function saturacaoHsl(hex) {
  const [r, g, b] = hexToRgb(hex).map((v) => v / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return 0;
  const d = max - min;
  return (l > 0.5 ? d / (2 - max - min) : d / (max + min)) * 100;
}

/** OKLCH (L 0..1, C, H em graus) -> sRGB hex, com clamp de gamut por redução de croma. */
export function oklchParaHex(L, C, H) {
  for (let c = C; c >= 0; c -= 0.001) {
    const rgb = oklchParaRgbBruto(L, c, H);
    if (rgb.every((v) => v >= -0.0008 && v <= 1.0008)) {
      return rgbToHex(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
    }
  }
  return rgbToHex(0, 0, 0);
}

function oklchParaRgbBruto(L, C, H) {
  const h = (H * Math.PI) / 180;
  const a = C * Math.cos(h);
  const bb = C * Math.sin(h);

  const l_ = L + 0.3963377774 * a + 0.2158037573 * bb;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * bb;
  const s_ = L - 0.0894841775 * a - 1.291485548 * bb;

  const l = l_ * l_ * l_;
  const m = m_ * m_ * m_;
  const s = s_ * s_ * s_;

  const lr = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  const lg = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  const lb = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;

  const gama = (u) => (u <= 0.0031308 ? 12.92 * u : 1.055 * Math.pow(u, 1 / 2.4) - 0.055);
  return [gama(lr), gama(lg), gama(lb)];
}

/** sRGB hex -> OKLCH { L, C, H }, pra registrar a escala de derivação. */
export function hexParaOklch(hex) {
  const [R, G, B] = hexToRgb(hex).map((v) => {
    const s = v / 255;
    return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });

  const l = Math.cbrt(0.4122214708 * R + 0.5363325363 * G + 0.0514459929 * B);
  const m = Math.cbrt(0.2119034982 * R + 0.6806995451 * G + 0.1073969566 * B);
  const s = Math.cbrt(0.0883024619 * R + 0.2817188376 * G + 0.6299787005 * B);

  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const a = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const b = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;

  const C = Math.hypot(a, b);
  let H = (Math.atan2(b, a) * 180) / Math.PI;
  if (H < 0) H += 360;
  return { L, C, H };
}

// ============ CLI ============

const __dirname = dirname(fileURLToPath(import.meta.url));
const raizWorkspace = resolve(__dirname, "..");

function fmt(n, casas = 2) {
  return n.toFixed(casas);
}

function anotar(cliente) {
  const dirCliente = resolve(raizWorkspace, cliente);
  const caminhoDesign = join(dirCliente, "DESIGN.md");
  const caminhoTokens = join(dirCliente, "tokens.css");

  if (!existsSync(caminhoDesign)) {
    console.error(`[anotar] não achei ${caminhoDesign}`);
    process.exit(1);
  }
  if (!existsSync(caminhoTokens)) {
    console.error(`[anotar] não achei ${caminhoTokens}. Rode export.mjs antes.`);
    process.exit(1);
  }

  const bruto = readFileSync(caminhoDesign, "utf8");
  const fm = bruto.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!fm) {
    console.error("[anotar] DESIGN.md sem frontmatter");
    process.exit(1);
  }
  const dados = YAML.load(fm[1]) || {};
  const notas = dados.contrast_notes || {};

  const notasEscuras = dados.contrast_notes_dark || {};

  const linhas = readFileSync(caminhoTokens, "utf8").split(/\r?\n/);
  let aplicadas = 0;
  // o mesmo token aparece nos dois temas: no bloco claro a nota traz as duas
  // razões, no bloco escuro só a do escuro. Sem isso, a nota do claro apareceria
  // colada num valor escuro e diria o contrário do que a cor faz ali.
  let temaAtual = "claro";
  const saida = linhas.map((linha) => {
    if (/\[data-theme="dark"\]|:root:not\(\[data-theme\]\)/.test(linha)) temaAtual = "escuro";
    else if (/\[data-theme="light"\]/.test(linha)) temaAtual = "ilha-clara";
    else if (/^:root\s*\{/.test(linha)) temaAtual = "claro";

    const m = linha.match(/^(\s*--([a-z0-9-]+):\s*[^;]+;)(?:\s*\/\*.*\*\/)?\s*$/);
    if (!m) return linha;
    const chave = m[2];
    const clara = notas[chave];
    const escura = notasEscuras[chave];

    let nota = null;
    if (temaAtual === "escuro") {
      nota = escura ? `escuro: ${escura}` : null;
    } else if (temaAtual === "ilha-clara") {
      nota = clara ? `claro: ${clara}` : null;
    } else if (clara && escura) {
      nota = `claro: ${clara} | escuro: ${escura}`;
    } else if (clara) {
      nota = clara;
    }
    if (!nota) return linha;
    aplicadas += 1;
    return `${m[1]}  /* ${nota} */`;
  });

  writeFileSync(caminhoTokens, saida.join("\n"), "utf8");

  // o tailwind.config.js é o outro lado do handoff, então leva a mesma nota
  const caminhoTw = join(dirCliente, "tailwind.config.js");
  let anotadasTw = 0;
  if (existsSync(caminhoTw)) {
    const linhasTw = readFileSync(caminhoTw, "utf8").split(/\r?\n/);
    const saidaTw = linhasTw.map((linha) => {
      const m = linha.match(/^(\s*"[^"]+":\s*"var\(--([a-z0-9-]+)\)",?)(?:\s*\/\/.*)?\s*$/);
      if (!m) return linha;
      const nota = notas[m[2]];
      if (!nota) return linha;
      anotadasTw += 1;
      return `${m[1]}  // ${nota}`;
    });
    writeFileSync(caminhoTw, saidaTw.join("\n"), "utf8");
  }

  const faltando = Object.keys(notas).filter(
    (k) => !linhas.some((l) => new RegExp(`^\\s*--${k}:`).test(l))
  );
  console.log(`[anotar] ${aplicadas} token(s) comentado(s) em tokens.css, ${anotadasTw} em tailwind.config.js`);
  if (faltando.length) {
    console.log(`[anotar] aviso: notas sem token correspondente: ${faltando.join(", ")}`);
  }
}

// só roda o CLI quando o arquivo é chamado direto: outros scripts importam as
// funções daqui e não podem disparar o parser de argumentos
const chamadoDireto =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
const [, , cmd, ...args] = chamadoDireto ? process.argv : [];

if (cmd === "oklch") {
  const [L, C, H] = args.map(Number);
  const hex = oklchParaHex(L, C, H);
  console.log(hex);
} else if (cmd === "medir") {
  const [tinta, ...fundos] = args;
  for (const f of fundos) {
    console.log(`${tinta} sobre ${f}: ${fmt(contraste(tinta, f))}:1`);
  }
} else if (cmd === "anotar") {
  if (!args[0]) {
    console.error("Uso: node _scripts/medir-cor.mjs anotar <cliente>");
    process.exit(1);
  }
  anotar(args[0]);
} else if (cmd) {
  console.error(`comando desconhecido: ${cmd}`);
  console.error("use: oklch | medir | anotar");
  process.exit(1);
}
