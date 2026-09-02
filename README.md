# Workspace · design system

Ferramenta pra construir design systems de clientes de forma replicável e production-grade. Schema próprio (v2), dual-source discovery, multi-page brandbook premium, com instrumentação completa (lint próprio, quality score A-F, drift detection, telemetria de custo).

## O que esta ferramenta faz

A partir do site do cliente (e opcionalmente PDF de manual + assets), produz um design system completo em 30-60 minutos:

1. **Captura** o site real do cliente por dois ângulos: Playwright (computed styles renderizados) + análise estática de CSS bruto (CSS vars, @font-face, declarações, archetype visual).
2. **Extrai** todos os tokens (cor, tipografia, spacing, radius, shadows, motion, breakpoints) com rastreabilidade (provenance comment por token, confidence high/medium/low).
3. **Consolida** em um DESIGN.md canônico no nosso schema v2 (machine-readable) + guia-marca.md rico em PT (com Pantone/CMYK/voz/prompt LLM).
4. **Deriva** automaticamente `tokens.css` (CSS custom properties), `tokens.json` (DTCG W3C), `tailwind.config.js` (v3 theme.extend).
5. **Renderiza** um brandbook multi-página navegável (index TOC, guidelines master, foundations, logo, plus icons/moodboard/estratégia condicionais) com qualidade visual inspirada em brandbooks de referencia premium.
6. **Verifica** o entregável: linter próprio com 11 rules, quality score A-F em 7 categorias, sanity check de brand-identity (primary é cor de marca, não cor de link), coverage notes obrigatórias, Playwright (zero erros de console, fontes carregam, responsive).
7. **Mantém** o sistema vivo: comando `drift.mjs` re-roda análise no site live mensalmente e gera relatório do que mudou (produto vendável recorrente).

Tudo isso orquestrado por uma skill Claude Code que despacha 3 subagents (brand-discovery, token-extractor, showcase-builder) em paralelo quando o passo permite.

## TL;DR de uso

```bash
# Setup uma vez
cd "design system"
npm install
npx playwright install chromium
cd .claude/skills/design-md-static && npm install && cd ../../..
```

Para criar o design system de um cliente novo:

1. Abrir o Claude Code neste workspace
2. Pedir: "cria o design system do cliente X" (com URL ou manual ou ambos)
3. A skill `design-system-builder` é invocada
4. Ela roda brainstorm (alinha modo, tema, voz), despacha discovery dual-source, monta DESIGN.md v2, gera tokens derivados, apresenta gate de aprovação com quality score, despacha showcase-builder, roda verify
5. Saída final: `<cliente>/` completa com brandbook navegável

## Modos de operação

| Modo | Quando | Source of truth |
|---|---|---|
| **canonical** | Cliente tem manual oficial em PDF | Manual (Playwright e static-extract calibram tema digital) |
| **derived** | Cliente só tem site | CSS vars > declarações > inferido (com confidence ladder) |
| **hybrid** | Manual + site com conflitos detectados | Manual primário, conflitos documentados em `tokens-decisions.md` |

A decisão de modo é explícita no preflight da skill orquestradora.

## Setup inicial (uma vez)

```bash
cd "design system"

# 1. Deps do workspace
npm install

# 2. Playwright
npx playwright install chromium

# 3. Deps da skill irmã design-md-static (pipeline estática (static-extract))
cd .claude/skills/design-md-static
npm install
cd ../../..
```

## Estrutura do workspace

```
design system/
├── CLAUDE.md                                # entry point para o Claude Code
├── README.md                                # este arquivo
├── package.json                             # playwright + js-yaml
├── .claude/
│   ├── settings.json
│   ├── skills/
│   │   ├── design-system-builder/           # SKILL ORQUESTRADORA (v2)
│   │   │   ├── SKILL.md
│   │   │   └── reference/
│   │   │       ├── design-md-spec.md, checklist.md, modos.md, llm-prompt-template.md, exemplo-vdb.md
│   │   └── design-md-static/                # SKILL IRMÃ (static-extract, ferramenta interna)
│   │       ├── run.cjs                      # pipeline estática URL → DESIGN.md (google-spec)
│   │       └── lib/, data/, scripts/, package.json (node_modules instalados localmente)
│   └── agents/
│       ├── brand-discovery.md               # dispatcha Playwright + static-extract em paralelo
│       ├── token-extractor.md               # produz DESIGN.md schema v2 + guia-marca.md
│       └── showcase-builder.md              # gera multi-page brandbook
├── _scripts/                                # ferramentas operacionais
│   ├── serve.mjs                            # servidor estático localhost
│   ├── capture-reference.mjs                # Playwright: screenshots + computed-styles
│   ├── static-extract.mjs                   # wrapper do design-md-static
│   ├── export.mjs                           # DESIGN.md → tokens.css + tokens.json + tailwind.config.js
│   ├── lint.mjs                             # linter próprio, 11 rules
│   ├── lint.test.mjs                        # 5 testes TDD
│   ├── score.mjs                            # quality grade A-F
│   ├── drift.mjs                            # detecção de drift vs site live
│   ├── telemetry.mjs                        # histórico de runs + consumo de tokens (estimativa USD opcional)
│   └── verify.mjs                           # lint + score + identity + coverage + Playwright
├── _template/
│   ├── DESIGN.md.stub                       # schema v2 completo com placeholders
│   ├── guia-marca.md.stub                   # PT, Pantone/CMYK/voz/prompt LLM
│   ├── fonts.css.stub
│   ├── README.md.stub
│   ├── PLACEHOLDERS.md
│   └── brandbook/                           # MULTI-PAGE
│       ├── _shared/
│       │   ├── base.css.stub, components.css.stub
│       │   ├── theme-toggle.js.stub, copy.js.stub
│       │   └── layout.html.stub             # partial reusado em todas as páginas
│       ├── index.html.stub                  # landing TOC
│       ├── guidelines.html.stub             # master single-page, 14 seções
│       ├── foundations.html.stub            # 10 seções de tokens
│       ├── logo.html.stub                   # 5 seções
│       ├── icons.html.stub                  # condicional
│       ├── moodboard.html.stub              # condicional
│       └── estrategia.html.stub             # condicional
├── _docs/                                   # documentação de referência
│   ├── fluxo.md                             # fluxo dual-source completo
│   ├── modos.md                             # canonical / derived / hybrid
│   ├── inputs-esperados.md
│   ├── design-md-schema-v2.md               # spec do nosso schema (substitui @google/design.md)
│   ├── brand-identity-rule.md               # princípio + 10 exemplos canônicos
│   ├── coverage-notes.md                    # como documentar ausências como design intent
│   └── maturidade.md                        # escada design.md → Storybook → vault
└── <cliente-1>/, <cliente-2>/, ...          # projetos gerados (não-versionado por padrão)
```

## Fluxo completo

```
brainstorm  ·  inputs  ·  discovery (dual-source paralelo)  ·  token-extractor (schema v2)
                                                                            ↓
                                                            export.mjs (tokens.css + json + tailwind)
                                                                            ↓
                                                          GATE (paleta + tipo + quality score)
                                                                            ↓
                                                       showcase-builder (multi-page brandbook)
                                                                            ↓
                                              verify.mjs (lint + score + identity + coverage + Playwright)
                                                                            ↓
                                                                       entrega
```

Detalhes passo a passo em `_docs/fluxo.md`.

## Princípios LEI do sistema

Quatro leis que o token-extractor obedece (codificadas em `.claude/agents/token-extractor.md`):

1. **Brand-identity rule** — `primary` é a cor do logo/header/favicon, não a cor mais usada da UI. Mercado Livre = amarelo, Stripe = roxo, Itaú = laranja, Spotify = verde. Ver `_docs/brand-identity-rule.md` com 10 exemplos canônicos.
2. **Brand-specific Don'ts** — proibido escrever Don't genérico ("não use muitas cores"). Tem que citar fonte/peso/cor da marca específica ("não use Tasa Orbiter em peso menor que 800"). O linter próprio reprova.
3. **Coverage notes** — categorias ausentes (shadow, motion, forms) viram design intent escrito ("o sistema é intencionalmente flat. Profundidade vem de contraste de surface, não de sombra"), não buraco.
4. **Provenance sempre** — cada token canônico tem comment `# from --var-name` (high) / `# from h1 declaration` (medium) / `# inferred from X` (low). Agregado em `confidence_summary` no frontmatter.

## Saída esperada por cliente

```
<cliente>/
├── DESIGN.md               · CANÔNICO, schema v2 (machine-readable)
├── guia-marca.md           · PT, Pantone + CMYK + voz + banlist + prompt LLM
├── tokens.css              · CSS custom properties (derivado)
├── tokens.json             · DTCG W3C (derivado)
├── tailwind.config.js      · Tailwind v3 theme.extend (derivado)
├── fonts.css               · @font-face (se locais)
├── fonts/                  · TTF/OTF (se locais)
├── assets/
│   ├── logo/               · SVGs
│   ├── icons/              · SVGs (se cliente tem icon system)
│   └── materiais/          · JPGs de aplicação
├── brandbook/              · MULTI-PAGE NAVEGÁVEL
│   ├── _shared/{base.css, components.css, theme-toggle.js, copy.js, layout.html}
│   ├── index.html          · landing TOC
│   ├── guidelines.html     · master 14 seções (identity, typography, palette, logo, manifesto, symbols, naming flow, positioning, archetypes, evidence, journey, testimonials, voice, components)
│   ├── foundations.html    · 10 seções de tokens (typography, color, spacing, surfaces, motion, semantic, accessibility, dark/light pairing, glow/elevation, audio)
│   ├── logo.html           · 5 seções (primary, variants, clear space, usage rules, color contexts)
│   ├── icons.html          · condicional
│   ├── moodboard.html      · condicional
│   └── estrategia.html     · condicional (positioning, archetypes, voice, manifesto, journey, evidence, testimonials)
├── quality-score.json      · grade A-F em 7 categorias
├── drift-report.json       · após primeira drift
├── _inputs/                · não-versionado
│   ├── briefing.md         · url + slug + modo + tema + voz
│   ├── discovery-manual.md (se canonical)
│   ├── discovery-site.md   · Playwright + static-extract consolidados, com conflitos
│   ├── discovery-assets.md
│   ├── tokens-decisions.md · cada conflito + escolha
│   ├── lint-report.json
│   ├── static/             · output completo do design-md-static (DESIGN.md google-spec + 18 detection JSONs + telemetry.json)
│   └── .screenshots/       · Playwright capture + verify
└── README.md               · como abrir, lint, exportar, deploy
```

**Hierarquia de fonte da verdade:**

1. `DESIGN.md` é canônico e machine-readable (schema v2 nosso, não @google/design.md).
2. `guia-marca.md` é o complemento humano em PT, cliente-facing.
3. `tokens.css`, `tokens.json`, `tailwind.config.js` SEMPRE derivados via `_scripts/export.mjs`. Nunca editar à mão.
4. `brandbook/*.html` consome os derivados via `_shared/base.css`.

## Comandos úteis

```bash
# Capturar referência do site (Playwright)
node _scripts/capture-reference.mjs https://cliente.com.br <cliente>/_inputs/.screenshots/

# Static-extract (pipeline regex (static-extract), sem headless browser)
node _scripts/static-extract.mjs <cliente>

# Exportar tokens derivados do DESIGN.md
node _scripts/export.mjs <cliente>

# Linter próprio (11 rules)
node _scripts/lint.mjs <cliente>

# Quality score A-F
node _scripts/score.mjs <cliente>

# Drift contra site live (manutenção mensal)
node _scripts/drift.mjs <cliente>

# Telemetria histórica
node _scripts/telemetry.mjs <cliente>

# Servir + verify completo
node _scripts/serve.mjs <cliente> 3000          # em um terminal
node _scripts/verify.mjs <cliente> 3000         # em outro

# Testes do linter
node --test _scripts/lint.test.mjs
```

Aliases via npm scripts: `npm run static-extract -- <cliente>`, `npm run drift -- <cliente>`, `npm run score -- <cliente>`, `npm run telemetry -- <cliente>`, `npm run export -- <cliente>`, `npm run lint -- <cliente>`, `npm run verify -- <cliente>`, `npm run serve -- <cliente>`.

## Produtos vendáveis derivados

### Entrega inicial (cliente novo)
Pacote fechado: brandbook completo + DESIGN.md + tokens derivados + guia-marca.md. 30-60 min de produção.

### Manutenção mensal recorrente
`drift.mjs` re-roda análise no site live, gera relatório, mostra o que mudou. Retainer mensal.

### Selo de qualidade
Quality score grade A-F como métrica objetiva de profundidade do design system. Comprovação de valor pro cliente.

### Justificativa de uso
`telemetry.json` por cliente mostra consumo de tokens por run (e calcula uma estimativa USD opcional como referência da API Anthropic). Não há cobrança USD direta porque tudo roda via claude-cli dentro do plano Claude Code. Útil pra entender uso e precificar o serviço pro brand owner.

## Próximas melhorias possíveis

- Storybook integration (Nível 2 de maturidade, ver `_docs/maturidade.md`)
- Drift automático em CI (GitHub Actions agendado)
- Multi-theme preview comparativo no foundations.html
- Export pra Figma Tokens format
- Vault tokenization layer (Nível 3, enterprise)

## Onde mexer quando algo dá errado

- Subagent retornando vazio → checar permissão de Read no caminho de input
- Playwright não carrega fontes → confirmar que `serve.mjs` está rodando antes de `verify`
- Placeholder não substituído → conferir lista em `_template/PLACEHOLDERS.md`
- Cor fica errada vs manual → modo canonical exige cópia exata; checar `discovery-manual.md`
- Lint falha com `missing-required-slot` → DESIGN.md sem `colors.primary` ou outro slot canônico obrigatório
- Lint falha com `broken-ref` → token reference em components aponta pra token inexistente
- Lint falha com `generic-dont` → Don't bate regex banida ("não use muitas cores", etc.); reescrever brand-specific
- Lint falha com `hex-format` → cor top-level com hex diferente de 6 dígitos
- Verify warning de brand-identity → primary parece cor de UI azul; verificar se é mesmo a cor do logo
- export.mjs falha → garantir que existe DESIGN.md no diretório do cliente e que o YAML frontmatter é válido
- static-extract custou alto → checar phase reuse cache (24h); ver `node_modules/design-md-static/...` README
- Multi-page brandbook nav quebrada → showcase-builder precisa atualizar nav incluindo só páginas geradas (skip condicionais)

## Histórico de versões

- **v2** (esta versão): schema próprio, dual-source discovery, multi-page brandbook premium, linter próprio, quality score, drift, telemetry, 10 princípios LEI codificados
- **v1**: schema google-labs-code/design.md, Playwright single-source, single-page showcase, lint via `@google/design.md` CLI
