# Fluxo do design-system-builder v2

Referência completa. A skill `design-system-builder` executa, este doc é pra entender o que vai acontecer.

## Visão geral

```
1. Brainstorm     ·  alinhar cliente, escopo, modo, tema, voz
2. Inputs         ·  organizar manual/site/assets em <cliente>/_inputs/
3. Discovery      ·  dual-source paralelo (Playwright + static-extract) + manual PDF (se canonical)
4. Extraction     ·  token-extractor produz DESIGN.md schema v2 + guia-marca.md PT
5. Export         ·  _scripts/export.mjs gera tokens.css + tokens.json + tailwind.config.js
6. Gate           ·  apresentar paleta + tipografia + quality score pro usuário
7. Build          ·  showcase-builder gera <cliente>/brandbook/ multi-page
8. Verify         ·  lint próprio + score + identity check + coverage check + Playwright
9. Entrega        ·  link local + próximos passos + oferta drift mensal
```

**Schema canônico**: schema v2 nosso, machine-readable (ver `_docs/design-md-schema-v2.md`). Não dependemos de `@google/design.md` lint.

## Quando rodar

- Cliente novo precisa de design system completo
- Cliente existente quer refinar com manual oficial atualizado
- Cliente quer gerar artefato pra colar em outras IAs
- Manutenção mensal recorrente (drift)

## Quando NÃO rodar

- Só atualizar uma cor -> edit direto em tokens.css? NÃO. Edita o DESIGN.md e roda `export.mjs` (tokens.css é derivado).
- Adicionar componente -> editar `_template/brandbook/_shared/components.css.stub` (e regerar o brandbook) ou usar `frontend-design`
- Mudar copy -> editar guia-marca.md e/ou DESIGN.md

## Cenários

### Cenário A: cliente com manual completo (modo canonical)

Exemplo: Vivendo de Bordado.

Inputs típicos:
- PDF do manual (cores, toolkit, aplicações)
- ZIP/pasta com logos SVG, fontes TTF/OTF, materiais
- URL do site

Discovery despacha 3 jobs em paralelo: PDF reader + Playwright + static-extract. Token-extractor cruza os 3.

Tempo médio: 45 a 60 minutos (com brainstorm).

### Cenário B: cliente só com site (modo derived)

Inputs típicos:
- URL do site
- Talvez algumas screenshots de redes
- Nenhum manual

Discovery despacha 2 jobs em paralelo: Playwright + static-extract.

Tempo médio: 25 a 35 minutos. Confidence mais baixa em média, mais perguntas no gate.

### Cenário C: cliente com manual + site divergentes (modo hybrid)

O static-extract revela cores que o manual não menciona, ou o manual tem fonte que o site não usa. Cada conflito vira entrada em `tokens-decisions.md` com decisão justificada. Manual primário.

### Cenário D: refinamento de design system existente

Skipa parte do brainstorm. Foco é discovery (com manual atualizado) + extraction. Build do brandbook pode reusar estrutura, só atualiza tokens.

### Cenário E: manutenção mensal (drift)

```bash
node _scripts/drift.mjs <cliente>
```

Re-roda static-extract no site live, compara com DESIGN.md committed. Verdict: in-sync / minor-drift / notable-drift / major-drift. Cliente paga retainer.

## Comandos úteis

```bash
# Capturar referência do site (Playwright)
node _scripts/capture-reference.mjs https://cliente.com.br <cliente>/_inputs/.screenshots/

# Static-extract (sibling skill)
node _scripts/static-extract.mjs <cliente>

# Servir o brandbook gerado
node _scripts/serve.mjs <cliente> 3000

# Exportar tokens derivados
node _scripts/export.mjs <cliente>

# Lint próprio
node _scripts/lint.mjs <cliente>

# Quality score A-F
node _scripts/score.mjs <cliente>

# Drift detection
node _scripts/drift.mjs <cliente>

# Telemetry histórico
node _scripts/telemetry.mjs <cliente>

# Verify completo (lint + score + identity + coverage + Playwright)
node _scripts/verify.mjs <cliente> 3000
```

## Boas práticas

- **Decida o tema cedo.** Light / dark / alternance / edições nomeadas (tipo LIGHT/DARK/GOLD) muda muita coisa.
- **Documente conflitos em `tokens-decisions.md`.** Cada decisão não-trivial.
- **Português com acento sempre.** No DESIGN.md, na copy do brandbook, em tudo.
- **Não invente Pantone.** Só liste o que está no manual.
- **Reuse estrutura de stubs.** Os stubs em `_template/brandbook/` cobrem todas as seções; o showcase-builder strip-a o que o schema não populou.
- **Quality score >= B no entregável.** Gate sugerido.
- **Brand-identity rule é lei.** Primary é cor do logo, não cor de link.
- **Coverage notes obrigatórias.** Categoria ausente vira design intent, não buraco.

## Saída final esperada

```
<cliente>/
├── DESIGN.md               · CANÔNICO, schema v2
├── guia-marca.md           · PT complementar, com Pantone, CMYK, voz, prompt LLM
├── tokens.css              · CSS custom properties em :root (derivado de DESIGN.md)
├── tokens.json             · DTCG W3C (derivado)
├── tailwind.config.js      · Tailwind v3 theme.extend (derivado)
├── fonts.css               · @font-face (se fontes locais)
├── fonts/                  · TTF/OTF (se locais)
├── assets/
│   ├── logo/               · SVGs
│   ├── icons/              · SVGs (se cliente tem icon system)
│   └── materiais/          · JPGs de aplicação
├── brandbook/              · MULTI-PAGE BRANDBOOK
│   ├── _shared/            · base.css, components.css, theme-toggle.js, copy.js, layout.html
│   ├── index.html          · landing TOC
│   ├── guidelines.html     · master single-page
│   ├── foundations.html    · 10 seções de tokens
│   ├── logo.html           · 5 seções de logo
│   ├── icons.html          · condicional
│   ├── moodboard.html      · condicional
│   └── estrategia.html     · condicional (positioning, archetypes, voice, manifesto, journey, evidence, testimonials)
├── quality-score.json      · grade A-F em 7 categorias
├── drift-report.json       · só após rodar drift.mjs
├── _inputs/                · discovery + briefing (não-versionado)
│   ├── briefing.md
│   ├── discovery-manual.md
│   ├── discovery-site.md
│   ├── discovery-assets.md
│   ├── tokens-decisions.md
│   ├── lint-report.json
│   ├── static/             · output do static-extract (incluindo DESIGN.md google-spec + 18 detection JSONs)
│   └── .screenshots/       · Playwright capture + verify
└── README.md               · como abrir, lint, exportar, deploy
```
