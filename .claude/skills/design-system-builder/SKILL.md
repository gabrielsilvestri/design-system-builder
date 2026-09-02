---
name: design-system-builder
description: Use ao criar um design system completo para um cliente. Schema v2 próprio (DESIGN.md machine-readable + guia-marca.md em PT), dual-source discovery (Playwright + static-extract via skill irmã design-md-static), multi-page brandbook premium (foundations, logo, guidelines, e opcionais icons/moodboard/estrategia), com confidence ladder, quality score A-F, drift detection e telemetry. Cobre canonical (manual PDF), derived (só site) e hybrid. Use também para refinar design systems existentes, gerar guia-marca.md com prompt LLM para colar em outras IAs, ou rodar drift mensal como manutenção recorrente. Não usar para criação genérica de páginas web sem cliente real.
---

# Design System Builder v2

Constrói design systems production-grade de clientes. Fidelidade canônica acima de criatividade.

Cada cliente recebe:

- `DESIGN.md` (schema v2 machine-readable, fonte da verdade, spec em `_docs/design-md-schema-v2.md`)
- `guia-marca.md` (PT, cliente-facing, com Pantone/CMYK/voz/banlist/prompt LLM)
- `tokens.css`, `tokens.json` (DTCG), `tailwind.config.js` (derivados via `_scripts/export.mjs`, nunca escritos à mão)
- `brandbook/` multi-page (index, guidelines, foundations, logo + opcionais)
- `quality-score.json` (A-F em 7 categorias)

## Quando usar

- Cliente novo precisando do primeiro design system completo.
- Cliente com manual offline (PDF, Behance, dossiê) sem versão digital.
- Refinar design system que ficou desalinhado do manual.
- Gerar artefato pra colar em outra IA (prompt template embarcado).
- Manutenção mensal recorrente via `drift.mjs` (produto vendável separado).

Não usar para página web genérica sem cliente real nem componente isolado (nesses casos, `frontend-design`), nem para migração de tokens entre formatos sem rebuild visual.

## Preflight

| Porta | Checagem | Se falhar |
|---|---|---|
| Inputs | Pasta `<cliente>/_inputs/` existe ou usuário forneceu URL + caminho dos materiais. | Pedir ao usuário: site, manual (se houver), pasta com assets. |
| Modo | Decidido: `canonical` (manual oficial), `derived` (só site/refs), ou `hybrid` (manual + site com conflitos). | Ler `_docs/modos.md`. Anunciar a decisão. |
| Brainstorm | `superpowers:brainstorming` rodou para alinhar escopo, voz, tema. | Rodar antes de escrever arquivo. |
| Tema | Tema dominante decidido (light / dark / alternance / edições nomeadas tipo LIGHT/DARK/GOLD). | Perguntar. Não assumir do manual. |

Anuncie antes de editar arquivos:

```text
DSBUILDER_PREFLIGHT v2: inputs=pass mode=canonical|derived|hybrid brainstorm=pass theme=light|dark|alternance themes_available=[...]
```

## Fluxo

### 1. Brainstorm

`superpowers:brainstorming`, cobrindo antes de escrever qualquer arquivo: quem é o cliente (site, redes, manual), o que existe de input (PDF, assets SVG, screenshots, URL), tema dominante, voz (brasileiro casual, técnico formal, voz específica) e destino (handoff dev, conectar IAs, manutenção recorrente).

### 2. Receber inputs

```
<cliente>/_inputs/
├── _raw/                  (PDFs, ZIPs originais, não-versionado)
├── manual/                (PDFs descomprimidos, se modo canonical)
├── assets-oficiais/       (logo SVG, símbolo, wordmark)
├── refs-visuais/          (screenshots de inspiração)
└── briefing.md            (URL + slug + tema + modo + notas)
```

`briefing.md` mínimo:

```yaml
slug: vivendo-de-bordado
url: https://vivendodebordado.com.br
tema: light
modo: canonical
edition: "Verão 2026"
voz: [tradicional, artesanal, acolhedora]
```

### 3. Decidir modo

Ver `_docs/modos.md`, anunciar no preflight:

- **canonical**: manual oficial existe, manual é source of truth e o site só calibra o tema digital
- **derived**: só site, static-extract + Playwright são source of truth
- **hybrid**: manual + site com conflitos, manual primário, conflitos vão pra `_inputs/tokens-decisions.md`

### 4. Discovery (dual-source paralelo)

Com URL, o `brand-discovery` despacha dois jobs em paralelo:

```text
Job A: node _scripts/capture-reference.mjs <url> <cliente>/_inputs/.screenshots/
Job B: node _scripts/static-extract.mjs <cliente>
```

Modo canonical adiciona um terceiro: `Agent(brand-discovery)` lê os PDFs de `<cliente>/_inputs/manual/`.

Consolida em `discovery-site.md` (com seção "Conflitos detectados" quando computed != CSS declarado), `discovery-manual.md` e `discovery-assets.md`.

### 5. Token extraction

Despache `token-extractor`. Ele consome discovery + `static/` + `computed-styles.json` + `briefing.md` e produz `<cliente>/DESIGN.md`, `guia-marca.md`, `fonts.css` (só com fontes locais) e `_inputs/tokens-decisions.md`. Os 10 princípios LEI que ele obedece estão em `.claude/agents/token-extractor.md`.

### 6. Export dos tokens derivados

```bash
node _scripts/export.mjs <cliente>
```

Gera `tokens.css` (CSS custom properties em `:root`), `tokens.json` (DTCG W3C) e `tailwind.config.js` (Tailwind v3 `theme.extend` referenciando as CSS vars).

### 7. Gate de aprovação

Apresente ao usuário e espere aprovação ou ajustes: tabela de cores nomeadas com hex + Pantone + role + token canônico, specimens tipográficos, quality score (`node _scripts/score.mjs <cliente>`), style archetype detectado, e as decisões controversas de `tokens-decisions.md`. Ajuste pedido: refaz o DESIGN.md e roda export de novo.

### 8. Showcase build

Despache `showcase-builder`. Ele gera `<cliente>/brandbook/` multi-page (4 páginas fixas + 3 condicionais) mais o `<cliente>/README.md`. Detalhe de páginas e padrão visual em `.claude/agents/showcase-builder.md`.

### 9. Verify

```bash
# Terminal 1
node _scripts/serve.mjs <cliente> 3000

# Terminal 2
node _scripts/verify.mjs <cliente> 3000
```

Cobre 5 coisas: lint próprio (`_scripts/lint.mjs`, 11 rules: missing-required-slot, broken-ref, hex-format, generic-dont, section-order, archetype-missing, provenance-missing e outras), quality score (`score.mjs`, gate sugerido >= C), sanity de brand-identity (alerta se `primary` parece cor de UI), coverage notes (alerta se shadow/motion ausentes sem prosa de design intent) e o check Playwright do brandbook (console errors, fontes, SVGs, responsive desktop + mobile).

### 10. Entrega

Link local (`http://localhost:3000/brandbook/`), quality score, o que está em `<cliente>/`, e os próximos passos (push pra repo, deploy, oferta de manutenção mensal via drift). Não faça push automático: pergunte o destino primeiro.

## Produtos derivados (vendáveis)

**Drift mensal.** `node _scripts/drift.mjs <cliente>` re-roda static-extract no site live e compara com o DESIGN.md atual, gerando `<cliente>/drift-report.json` com verdict in-sync / minor-drift / notable-drift / major-drift. Cliente paga mensalmente por relatório + ajustes.

**Telemetria.** `node _scripts/telemetry.mjs <cliente>` traz histórico de runs com wall_clock, provider, model, tokens in/out, estimativa USD opcional, retries e cache hits. Tudo roda via claude-cli dentro do plano Claude Code, sem cobrança USD direta. Serve pra precificar o serviço.

## Princípios

- **Fidelidade canônica acima de criatividade.** Pantone 5535 CP é esse hex exato.
- **Brand-identity rule é lei.** `primary` é cor do logo, não cor de link.
- **Coverage note** sempre: categoria ausente vira design intent, não buraco.
- **DESIGN.md é spec-strict** e o schema é nosso, sem dependência de tooling externo (externo). O linter próprio pega o resto.
- **PT com acento sempre.** Sem en dash nem em dash.
- **Multi-page brandbook por padrão.** O cliente decide se publica todas as páginas ou só guidelines.

## Referências

- [_docs/design-md-schema-v2.md](../../../_docs/design-md-schema-v2.md), spec do nosso schema
- [_docs/brand-identity-rule.md](../../../_docs/brand-identity-rule.md), princípio + 10 exemplos canônicos
- [_docs/coverage-notes.md](../../../_docs/coverage-notes.md), padrão de design intent
- [_docs/maturidade.md](../../../_docs/maturidade.md), escada design.md -> Storybook -> vault
- [_docs/fluxo.md](../../../_docs/fluxo.md), fluxo dual-source
- [_docs/modos.md](../../../_docs/modos.md), canonical / derived / hybrid
- [reference/llm-prompt-template.md](reference/llm-prompt-template.md), template do prompt embarcado em guia-marca.md
