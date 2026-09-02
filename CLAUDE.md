# CLAUDE.md · workspace design system

Workspace para construir design systems de clientes em modo v2 (schema próprio, dual-source discovery, multi-page brandbook premium). Cada cliente vira uma subpasta aqui dentro. O subagent que opera neste workspace é o especialista de design systems, modelo Opus, despachado pela Lain.

A skill `design-system-builder` (`.claude/skills/design-system-builder/SKILL.md`) é a orquestradora: ela roda o preflight, despacha os subagents na ordem certa, roda `export.mjs`, apresenta o gate de aprovação com `score.mjs` e roda `verify.mjs` no final.

## O que o workspace faz

Pega URL do cliente (e opcionalmente PDF + assets), produz:

- `DESIGN.md` schema v2 (machine-readable, fonte da verdade)
- `guia-marca.md` em PT (Pantone/CMYK/voz/prompt LLM)
- `tokens.css`, `tokens.json` DTCG, `tailwind.config.js` (derivados via `export.mjs`)
- `brandbook/` multi-página navegável (index, guidelines, foundations, logo + opcionais)
- `quality-score.json` (grade A-F)

Em 30-60 min, com confidence ladder, brand-identity rule, coverage notes e brand-specific Don'ts.

Regra operacional: `tokens.css`, `tokens.json` e `tailwind.config.js` são SEMPRE derivados via `_scripts/export.mjs`. Nunca editar à mão. Árvore do workspace, árvore de saída por cliente e hierarquia de fonte da verdade estão no `README.md`.

Outra regra operacional que não está no README: **scripts > LLM onde for determinístico**. static-extract é regex puro; o LLM só faz prosa narrativa e decisões semânticas.

## Subagents disponíveis

Lançar via Agent tool com `subagent_type` igual ao nome do arquivo (sem `.md`):

- **brand-discovery**: lê manuais de marca (PDF), faz screenshot do site (Playwright), e despacha o static-extract (skill irmã design-md-static) em paralelo. Consolida em `<cliente>/_inputs/discovery-*.md` com conflitos detectados.
- **token-extractor**: pega outputs de discovery + briefing + computed-styles e produz `<cliente>/DESIGN.md` (schema v2) + `<cliente>/guia-marca.md`. Obedece os 10 princípios LEI.
- **showcase-builder**: monta `<cliente>/brandbook/` multi-página (4 sempre, 3 condicionais) a partir do DESIGN.md, guia-marca.md, tokens.css/json, computed-styles.json e os stubs em `_template/brandbook/`.

## Modos

- **canonical**: manual oficial existe → manual é fonte da verdade
- **derived**: só site → CSS vars > declarações > inferido, com confidence ladder
- **hybrid**: manual + site com conflitos → manual primário, conflitos em `tokens-decisions.md`

A decisão de modo é explícita no preflight.

## Servidor local, screenshots, exports

Sempre via localhost, nunca `file:///`.

```bash
node _scripts/serve.mjs <cliente> [port]
node _scripts/capture-reference.mjs <url> [out-dir]
node _scripts/static-extract.mjs <cliente>            # pipeline regex (consome tokens do plano Claude Code via claude-cli)
node _scripts/export.mjs <cliente>                    # tokens.css + json + tailwind do DESIGN.md
node _scripts/lint.mjs <cliente>                      # linter próprio, 11 rules
node _scripts/score.mjs <cliente>                     # quality grade A-F
node _scripts/drift.mjs <cliente>                     # drift vs site live (consome tokens)
node _scripts/telemetry.mjs <cliente>                 # histórico de custo
node _scripts/verify.mjs <cliente> [port]             # lint + score + identity + coverage + Playwright
```

## Schema próprio

O schema v2 é nosso e não depende de `@google/design.md`. O linter próprio em `_scripts/lint.mjs` cobre as 11 rules que importam pro schema (missing-required-slot, broken-ref, hex-format, generic-dont, section-order, archetype-missing, provenance-missing, entre outras). Spec completa em `_docs/design-md-schema-v2.md`.

A skill irmã `design-md-static` gera google-spec internamente (é o output natural do pipeline estatico), e o token-extractor transforma esse output no schema v2.

## Produtos vendáveis derivados

- **Entrega inicial**: brandbook completo + DESIGN.md + tokens + guia-marca. Pacote fechado.
- **Manutenção mensal**: `drift.mjs` re-roda análise no site live e gera relatório. Retainer recorrente.
- **Selo de qualidade**: quality score grade A-F como métrica objetiva.

## Acentos e pontuação

Português escreve com acento sempre: `é`, `são`, `está`, `não`, `também`, `código`, `ação`. Soltar acento de palavra completa é descuido, não estilo. Exceções: abreviações curtas (vc, tb, tá, né, pq, td). A persona da Lain usa lowercase mas mantém acentos.

Nunca usar en dash (–) ou em dash (—) em texto corrido. Substituir por parênteses, vírgula, dois-pontos, ponto médio (·), ou frase separada.

## Quando algo dá errado

- Lint `missing-required-slot` → falta `colors.primary`/`on-primary`/`surface`/`on-surface` no DESIGN.md
- Lint `generic-dont` → Don't bate regex banida; reescrever brand-specific
- Lint `hex-format` → cor top-level com hex != 6 dígitos
- Verify warning `brand-identity` → primary parece cor de UI (azul); revisar contra logo da marca
- Verify warning `coverage-note` → categoria ausente sem prosa de design intent
- `export.mjs` falha → DESIGN.md sem frontmatter válido
- Multi-page brandbook nav quebrada → showcase-builder não atualizou nav pras páginas condicionais geradas
- static-extract custou caro → phase reuse cache (24h) deveria zerar custo de re-run sem mudança
- Subagent retornando vazio → checar permissão de Read no caminho de input

## Referências internas

- Spec do schema v2: `_docs/design-md-schema-v2.md`
- Brand-identity rule (10 exemplos canônicos): `_docs/brand-identity-rule.md`
- Coverage notes: `_docs/coverage-notes.md`
- Maturidade (design.md → Storybook → vault): `_docs/maturidade.md`
- Fluxo dual-source completo: `_docs/fluxo.md`
- Canonical / derived / hybrid: `_docs/modos.md`
- O que pedir ao usuário: `_docs/inputs-esperados.md`
