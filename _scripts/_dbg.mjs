#!/usr/bin/env node
/**
 * notas-contraste.mjs · gera `contrast_notes` e `contrast_notes_dark` no
 * DESIGN.md a partir das próprias paletas, medindo tudo na hora.
 *
 * Uso:  node _scripts/notas-contraste.mjs <cliente>
 *
 * Existe porque nota de contraste escrita à mão apodrece: basta uma superfície
 * mudar pra todos os números do arquivo virarem mentira. Aqui a nota é
 * derivada, como o tokens.css. Depois dela, rodar export.mjs e `medir-cor.mjs
 * anotar`, que copiam a nota pro CSS e pro Tailwind.
 *
 * Régua aplicada por papel:
 *   tinta principal   faixa fechada 11 a 13 sobre as três superfícies
 *   tinta de apoio    piso 4.5
 *   borda de controle piso 3
 *   preenchimento     medido pelo que senta em cima, nunca como tinta
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "js-yaml";
import { contraste } from "./medir-cor.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const raiz = resolve(__dirname, "..");
const cliente = process.argv[2];
if (!cliente) {
  console.error("Uso: node _scripts/notas-contraste.mjs <cliente>");
  process.exit(1);
}
const caminho = join(resolve(raiz, cliente), "DESIGN.md");
if (!existsSync(caminho)) {
  console.error(`[notas] não achei ${caminho}`);
  process.exit(1);
}

const bruto = readFileSync(caminho, "utf8");
const fm = bruto.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
if (!fm) {
  console.error("[notas] DESIGN.md sem frontmatter");
  process.exit(1);
}
const dados = YAML.load(fm[1]);

const SLOTS = [
  "primary", "on-primary", "secondary", "on-secondary", "tertiary", "on-tertiary",
  "neutral", "surface", "on-surface", "surface-variant", "on-surface-variant",
  "outline", "error", "on-error", "success", "warning", "info",
];

/** Superfícies onde uma tinta pode cair, e preenchimentos que não são tinta. */
const SUPERFICIES = ["fundo", "superficie", "superficie-2"];
const PREENCHIMENTO = new Set([
  "fundo", "superficie", "superficie-2", "barra", "papel", "folha",
  "roxo-fundo", "roxo-fundo-2", "verde-fundo", "ambar-fundo", "vermelho-fundo",
  "tertiary", "surface", "surface-variant",
]);
const DIVISORIA = new Set(["linha", "borda-painel", "papel-linha", "folha-linha"]);
const PISO_BORDA = new Set([
  "linha-controle", "linha-campo", "outline", "roxo-borda", "verde-borda",
  "ambar-borda", "vermelho-borda", "marca-opcao", "campo-hover",
]);

/** Pares fixos: token -> [[rótulo, token de fundo], ...] */
const PARES = {
  "on-primary": [["sobre primary", "primary"], ["sobre o hover", "roxo-hover"], ["sobre o pressionado", "roxo-ativo"]],
  "on-secondary": [["sobre secondary", "secondary"]],
  "on-tertiary": [["sobre tertiary", "tertiary"]],
  "on-error": [["sobre error", "error"]],
  claro: [["sobre o roxo", "roxo"], ["sobre o hover", "roxo-hover"], ["sobre o pressionado", "roxo-ativo"]],
  "roxo-fundo": [["roxo-tinta em cima", "roxo-tinta"], ["tinta em cima", "tinta"]],
  "roxo-fundo-2": [["roxo-tinta em cima", "roxo-tinta"]],
  "verde-fundo": [["verde em cima", "verde"]],
  "ambar-fundo": [["âmbar em cima", "ambar"]],
  "vermelho-fundo": [["vermelho em cima", "vermelho"]],
  tertiary: [["secondary em cima", "secondary"]],
  papel: [["folha-tinta em cima", "folha-tinta"], ["folha-apoio em cima", "folha-apoio"], ["folha-marca em cima", "folha-marca"]],
  folha: [["folha-tinta em cima", "folha-tinta"], ["folha-apoio em cima", "folha-apoio"], ["folha-marca em cima", "folha-marca"]],
};

function pegaHex(v) {
  if (typeof v === "string") return v;
  if (v && typeof v === "object" && typeof v.hex === "string") return v.hex;
  return null;
}

/** Monta o mapa de hex de um tema: slots canônicos + named, com fallback. */
function paleta(tema) {
  const base = dados.colors || {};
  const mapa = new Map();
  for (const slot of SLOTS) {
    const hex = pegaHex(base[slot]);
    if (hex) mapa.set(slot, hex);
  }
  for (const [nome, v] of Object.entries(base.named || {})) {
    const hex = pegaHex(v);
    if (hex) mapa.set(nome, hex);
  }
  if (tema === "dark") {
    const d = dados.colors_dark || {};
    for (const slot of SLOTS) {
      const hex = pegaHex(d[slot]);
      if (hex) mapa.set(slot, hex);
    }
    for (const [nome, v] of Object.entries(d.named || {})) {
      const hex = pegaHex(v);
      if (hex) mapa.set(nome, hex);
    }
  }
  return mapa;
}

const f = (n) => n.toFixed(2);

function notasDoTema(tema) {
  const p = paleta(tema);
  const sups = SUPERFICIES.map((n) => p.get(n)).filter(Boolean);
  const pagina = p.get("fundo");
  const notas = {};

  for (const [nome, hex] of p) {
    const partes = [];

    if (PREENCHIMENTO.has(nome)) {
      if (nome !== "fundo" && pagina) {
        partes.push(`degrau de ${f(contraste(hex, pagina))}:1 contra a página`);
      } else {
        partes.push("a página, superfície de referência das medições");
      }
    } else if (DIVISORIA.has(nome)) {
      partes.push(
        `${sups.map((s) => f(contraste(hex, s))).join(" / ")} sobre fundo, cartão e campo: divisória, fica abaixo do piso de controle de propósito`
      );
    } else {
      const rs = sups.map((s) => contraste(hex, s));
      const pior = Math.min(...rs);
      let regua = "";
      if (nome === "on-surface" || nome === "tinta" || nome === "on-surface-variant") {
        regua = pior >= 11 && Math.max(...rs) <= 13 ? ", dentro da faixa 11 a 13" : `, FORA da faixa 11 a 13 (pior ${f(pior)})`;
      } else if (PISO_BORDA.has(nome)) {
        regua = pior >= 3 ? `, piso de 3:1 cumprido (pior ${f(pior)})` : `, ABAIXO do piso de 3:1 (pior ${f(pior)})`;
      } else if (!nome.startsWith("on-") && nome !== "claro") {
        regua = pior >= 4.5 ? `, piso de 4.5:1 cumprido (pior ${f(pior)})` : `, ABAIXO do piso de 4.5:1 (pior ${f(pior)})`;
      }
      partes.push(`${rs.map(f).join(" / ")} sobre fundo, cartão e campo${regua}`);
    }

    for (const [rotulo, outro] of PARES[nome] || []) {
      const h2 = p.get(outro);
      if (h2) partes.push(`${f(contraste(hex, h2))}:1 ${rotulo}`);
    }

    notas[`color-${nome}`] = partes.join("; ");
  }
  return notas;
}

function blocoYaml(chave, notas) {
  const linhas = [`${chave}:`];
  for (const [k, v] of Object.entries(notas)) {
    linhas.push(`  ${k}: ${JSON.stringify(v)}`);
  }
  return linhas.join("\n");
}

const claras = notasDoTema("light");
const escuras = notasDoTema("dark");

let saida = bruto;
// troca (ou cria) os dois blocos, sempre imediatamente antes de `audit:` ou do fim do frontmatter
const blocoClaro = blocoYaml("contrast_notes", claras);
const blocoEscuro = blocoYaml("contrast_notes_dark", escuras);

function trocaBloco(texto, chave, novo) {
  const re = new RegExp(`^${chave}:\\n(?:  .*\\n)*`, "m");
  if (re.test(texto)) return texto.replace(re, novo + "\n");
  return null;
}

let tmp = trocaBloco(saida, "contrast_notes", blocoClaro);
if (tmp === null) {
  console.error("[notas] não achei o bloco contrast_notes");
  process.exit(1);
}
saida = tmp;

tmp = trocaBloco(saida, "contrast_notes_dark", blocoEscuro);
if (tmp === null) {
  // ainda não existe: entra logo depois do bloco claro
  saida = saida.replace(blocoClaro + "\n", blocoClaro + "\n" + blocoEscuro + "\n");
}

console.log("DEBUG linha-campo escuro:", escuras["color-linha-campo"]); console.log("DEBUG outline escuro:", escuras["color-outline"]);
console.log(
  `[notas] ${Object.keys(claras).length} nota(s) no tema claro e ${Object.keys(escuras).length} no escuro, medidas e escritas em ${caminho}`
);
