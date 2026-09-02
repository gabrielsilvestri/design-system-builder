# Adoção do spec google-labs-code/design.md

Este workspace adotou o formato **DESIGN.md** (spec do Google Labs Code) como artefato canônico de cada cliente. Fonte: https://github.com/google-labs-code/design.md.

## Por que adotamos

1. **Formato padrão emergente**: o spec é minimalista, well-defined, e cada vez mais agentes/ferramentas vão consumi-lo
2. **Linter pronto**: `npx @google/design.md lint` checa broken refs, contraste WCAG AA, section order, missing primary, orphaned tokens
3. **Export pronto**: 1 DESIGN.md gera Tailwind v3 config, CSS custom properties em `:root`, e DTCG tokens.json
4. **Interop**: outras IAs/agentes que adotem o spec leem nosso output sem precisar de adaptação

## Como afeta o fluxo

```
ANTES
  token-extractor → tokens.css + tokens.json (hand-written)
  showcase-builder → index.html + design.md (PT, com prompt LLM)

DEPOIS
  token-extractor → DESIGN.md (canônico, spec) + guia-marca.md (PT, rico)
  export.mjs      → tokens.css + tokens.json + tailwind.config.js (derivados via CLI)
  showcase-builder → index.html + README.md
  verify.mjs      → lint do DESIGN.md (parte do gate) + browser check
```

## Estrutura de saída por cliente

```
<cliente>/
├── DESIGN.md               ← CANÔNICO, escrito pelo token-extractor
├── guia-marca.md           ← PT, com Pantone, CMYK, prompt LLM, escrito pelo token-extractor
├── tokens.css              ← CSS custom properties em :root, gerado por export.mjs
├── tokens.json             ← DTCG, gerado por export.mjs
├── tailwind.config.js      ← Tailwind v3 theme.extend, gerado por export.mjs
├── fonts.css               ← se há fontes locais
├── fonts/
├── assets/{logo,materiais}/
├── index.html              ← showcase, escrito pelo showcase-builder
└── README.md               ← escrito pelo showcase-builder
```

## Schema resumido do DESIGN.md

YAML frontmatter:

```yaml
---
version: alpha
name: <Client>
description: <one-line>
colors:
  primary, on-primary,
  secondary, on-secondary,
  tertiary, on-tertiary,
  neutral,
  surface, on-surface, surface-variant, on-surface-variant,
  outline,
  error, on-error
typography:
  display-lg, headline-lg, headline-md, headline-sm,
  body-lg, body-md, body-sm,
  label-md
rounded:
  none, sm, md, lg, xl, full
spacing:
  xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, gutter, container-padding
components:
  button-primary, button-primary-hover, button-outline, button-ghost,
  card-base, card-feature,
  input-base
---
```

Markdown body, seções na ordem fixa:

1. `## Overview`
2. `## Colors`
3. `## Typography`
4. `## Layout`
5. `## Elevation & Depth`
6. `## Shapes`
7. `## Components`
8. `## Do's and Don'ts`

## Token references

Dentro do YAML, usar `{path.to.token}` em components:

```yaml
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
```

NUNCA hardcode hex em components. Sempre referenciar.

## Comandos CLI essenciais

No Windows o binário oficial se chama `design.md` e o `.md` confunde o resolver de bins (PowerShell associa com Markdown e roda errado). Por isso usamos sempre `node ./node_modules/@google/design.md/dist/index.js ...` em vez de `npx`. Em macOS/Linux qualquer um funciona, mas o caminho direto é cross-platform.

```bash
# Validar
node ./node_modules/@google/design.md/dist/index.js lint DESIGN.md
node ./node_modules/@google/design.md/dist/index.js lint --format json DESIGN.md

# Comparar versões (detecta regressões)
node ./node_modules/@google/design.md/dist/index.js diff DESIGN-v1.md DESIGN-v2.md

# Exportar
node ./node_modules/@google/design.md/dist/index.js export --format tailwind DESIGN.md   # Tailwind v3 config (objeto completo com theme.extend)
node ./node_modules/@google/design.md/dist/index.js export --format dtcg     DESIGN.md   # W3C Design Tokens (DTCG)

# CSS custom properties em :root: derivado por _scripts/export.mjs a partir do output Tailwind.
# A CLI 0.1.1 não emite Tailwind v4 @theme nativamente; o futuro do spec deve incluir.

# Injetar o spec inteiro num prompt de IA
node ./node_modules/@google/design.md/dist/index.js spec
node ./node_modules/@google/design.md/dist/index.js spec --rules
```

No projeto, isso fica encapsulado em `_scripts/export.mjs` e `_scripts/verify.mjs`. Pré-requisito: `npm install` rodou no workspace.

## Regras do linter

| Rule | Severity | O que checa |
|---|---|---|
| `broken-ref` | error | Token references (`{colors.primary}`) que não resolvem |
| `missing-primary` | warning | Colors definidos mas sem `primary` |
| `contrast-ratio` | warning | `backgroundColor`/`textColor` abaixo de WCAG AA (4.5:1) |
| `orphaned-tokens` | warning | Color tokens definidos mas nunca usados em components |
| `token-summary` | info | Quantos tokens em cada seção |
| `missing-sections` | info | Spacing/rounded ausentes quando outros tokens existem |
| `missing-typography` | warning | Colors definidos mas sem typography |
| `section-order` | warning | Seções fora da ordem canônica |

O `verify.mjs` falha se houver `error`. Warnings são reportadas mas não bloqueiam.

## O que NÃO está no spec, mas mantemos no `guia-marca.md`

- Pantone CP
- CMYK
- RGB explícito (o spec aceita hex, RGB sai do hex)
- Voz e tom detalhados em PT
- Anti-references
- Prompt LLM template completo
- Changelog em PT
- Links pro manual original

## Exemplos do repo oficial

Vale ler os 3 exemplos do repo upstream antes de operar:

- `atmospheric-glass` (dark, glass morphism, tipografia Inter)
- `paws-and-paths` (light, friendly, multi-purpose)
- `totality-festival` (high-contrast, dramatic)

Cada um tem `DESIGN.md` + `design_tokens.json` + `tailwind.config.js`. São referência canônica de como o formato é usado.

## Versão do spec

O spec está em `version: alpha`. Espere mudanças. Quando atualizarmos a dependência `@google/design.md`, revisar se o `_template/DESIGN.md.stub` ainda passa no linter.
