#!/usr/bin/env node
/**
 * diff-prototipo.mjs · compara, token por token, o bloco `:root` de um HTML
 * consumidor com o `tokens.css` do design system.
 *
 * Uso:
 *   node _scripts/diff-prototipo.mjs <cliente> <caminho do html>
 *
 * A comparação é por NOME e por VALOR RESOLVIDO: antes de comparar, cada
 * `var(--x)` é substituído pelo valor de `--x` do PRÓPRIO arquivo, porque
 * `--tabs-ease: var(--ease-out)` e `--tabs-ease: cubic-bezier(...)` são a
 * mesma cor no navegador e uma diferença só de escrita não é drift.
 * Espaço em branco também é normalizado pelo mesmo motivo.
 *
 * Saída: uma linha por diferença, e o total. Código de saída 1 se houver
 * qualquer diferença.
 */

import { readFileSync, existsSync } from "node:fs";
import { resolve, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const raizWorkspace = resolve(__dirname, "..");

const [, , cliente, caminhoHtml] = process.argv;
if (!cliente || !caminhoHtml) {
  console.error("Uso: node _scripts/diff-prototipo.mjs <cliente> <caminho do html>");
  process.exit(1);
}

const caminhoTokens = join(raizWorkspace, cliente, "tokens.css");
for (const p of [caminhoTokens, caminhoHtml]) {
  if (!existsSync(p)) {
    console.error(`[diff] não achei ${p}`);
    process.exit(1);
  }
}

/** Extrai o primeiro bloco `:root { ... }` de um texto CSS ou HTML. */
function blocoRoot(texto) {
  // o seletor de verdade, não a palavra ":root" solta num comentário
  const m = texto.match(/:root\s*\{/);
  if (!m) return "";
  const abre = m.index + m[0].length - 1;
  let nivel = 0;
  for (let j = abre; j < texto.length; j++) {
    if (texto[j] === "{") nivel += 1;
    else if (texto[j] === "}") {
      nivel -= 1;
      if (nivel === 0) return texto.slice(abre + 1, j);
    }
  }
  return "";
}

/** Tira comentários /* ... *\/ sem tocar no conteúdo de string. */
function semComentarios(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, "");
}

function lerTokens(texto) {
  const corpo = semComentarios(blocoRoot(texto));
  const mapa = new Map();
  // separa por ";" fora de parênteses e fora de aspas
  let atual = "";
  let par = 0;
  let aspa = null;
  const partes = [];
  for (const ch of corpo) {
    if (aspa) {
      if (ch === aspa) aspa = null;
    } else if (ch === '"' || ch === "'") {
      aspa = ch;
    } else if (ch === "(") par += 1;
    else if (ch === ")") par -= 1;
    else if (ch === ";" && par === 0) {
      partes.push(atual);
      atual = "";
      continue;
    }
    atual += ch;
  }
  if (atual.trim()) partes.push(atual);

  for (const parte of partes) {
    const m = parte.match(/^\s*(--[A-Za-z0-9_-]+)\s*:([\s\S]*)$/);
    if (!m) continue;
    mapa.set(m[1], m[2].trim());
  }
  return mapa;
}

/** Substitui var(--x) pelo valor de --x do próprio mapa, até 5 níveis. */
function resolver(valor, mapa, nivel = 0) {
  if (nivel > 5) return valor;
  const subst = valor.replace(/var\(\s*(--[A-Za-z0-9_-]+)\s*(?:,[^)]*)?\)/g, (todo, nome) =>
    mapa.has(nome) ? mapa.get(nome) : todo
  );
  return subst === valor ? valor : resolver(subst, mapa, nivel + 1);
}

/** Normaliza pra comparar: sem espaço supérfluo, minúsculo, sem zero à esquerda. */
function normalizar(valor) {
  return valor
    .replace(/\s+/g, " ")
    .replace(/\s*([,:()])\s*/g, "$1")
    .replace(/(^|[\s,(])0\.(\d)/g, "$1.$2")
    .trim()
    .toLowerCase();
}

const doSistema = lerTokens(readFileSync(caminhoTokens, "utf8"));
const doProto = lerTokens(readFileSync(caminhoHtml, "utf8"));

const nomes = [...new Set([...doProto.keys(), ...doSistema.keys()])].sort();
const difs = [];
const soNoSistema = [];

for (const nome of nomes) {
  const temProto = doProto.has(nome);
  const temSis = doSistema.has(nome);
  if (temProto && !temSis) {
    difs.push({ nome, tipo: "só no protótipo", proto: doProto.get(nome), sistema: "(ausente)" });
    continue;
  }
  if (!temProto && temSis) {
    // não é drift: o sistema pode declarar token que o consumidor não usa
    // (breakpoint, por exemplo, que em CSS não entra em media query)
    soNoSistema.push({ nome, sistema: doSistema.get(nome) });
    continue;
  }
  const vp = normalizar(resolver(doProto.get(nome), doProto));
  const vs = normalizar(resolver(doSistema.get(nome), doSistema));
  if (vp !== vs) {
    difs.push({ nome, tipo: "valor diferente", proto: doProto.get(nome), sistema: doSistema.get(nome) });
  }
}

console.log(`[diff] ${doProto.size} token(s) no :root do protótipo, ${doSistema.size} no tokens.css`);
if (soNoSistema.length) {
  console.log(
    `[diff] ${soNoSistema.length} token(s) só no sistema (não é drift, o consumidor só não usa): ` +
      soNoSistema.map((x) => x.nome).join(", ")
  );
}
if (difs.length === 0) {
  console.log("[diff] 0 diferenças");
  process.exit(0);
}
for (const d of difs) {
  console.log(`  ${d.nome}  [${d.tipo}]`);
  console.log(`    protótipo: ${d.proto}`);
  console.log(`    sistema:   ${d.sistema}`);
}
console.log(`[diff] ${difs.length} diferença(s)`);
process.exit(1);
