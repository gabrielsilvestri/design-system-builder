# Coverage notes

> Quando a marca não usa uma categoria, escreva como design intent, não como falha.

Don't é diferente de "não tem". Se a marca não usa shadow, o DESIGN.md tem que documentar isso como intenção (sistema flat by design), não fingir que tem shadow nem deixar a categoria vazia.

## Categorias que admitem coverage note

| Categoria | Sinal de ausência | Coverage note típica |
|---|---|---|
| Shadows | `box-shadow: none` em todas declarações, OU nenhum `box-shadow:` no CSS | "O sistema é intencionalmente flat. Profundidade vem de contraste de surface, não de sombra. Don't: não adicione sombras em camadas." |
| Glassmorphism | Nenhum `backdrop-filter:` no CSS | "A linguagem visual prefere superfícies sólidas. Don't: não adicione backdrop-blur." |
| Forms | Nenhum `input`, `textarea`, `select` selector no CSS | "Esta é uma superfície de marketing. Tokens de label, helper, error não estão definidos. Se for shipar form nesta marca, infira label size de `body-small` e helper de `caption`." |
| Single button style (sem variantes) | Só um button class detectado, sem `--primary`, `--ghost`, etc | "O sistema usa um único estilo de botão. Ênfase é comunicada por placement e copy, não por variante. Don't: não invente botão secundário/ghost." |
| Tooltips / Avatars / Tabs | Selectors não detectados | "Esta superfície não define tokens de tooltip / avatar / tab. Se seu contexto exige, derive a partir das primitivas de tipografia + radius + spacing pra manter consistência." |
| Motion | Nenhum `transition:`, `animation:`, `@keyframes` | "O sistema é estático por design. Toda mudança de estado é instantânea. Don't: não adicione transições suaves." |
| Dark mode | Sem `[data-theme="dark"]`, `.dark`, `prefers-color-scheme` | "A marca é light-only. Se um cliente exigir dark, derive a partir de inversão de surface e on-surface, mantendo accent primary igual." |
| Icons (sistema) | Sem inventory de icons / só decorativos | "A marca usa ícones sob demanda, sem inventário curado. Don't: não invente um icon system; use a biblioteca do projeto consumidor." |
| Audio | Sem cues sônicos documentados | (não documentar, audio é raríssimo) |

## Onde escrever no DESIGN.md

| Categoria | Seção markdown |
|---|---|
| Shadows | `## 6. Depth & Elevation` (parágrafo "Shadow Philosophy") |
| Glassmorphism | `## 6. Depth & Elevation` + chip-list em `## 7. Do's and Don'ts` |
| Forms | `## 4. Components` (parágrafo sob "Inputs & Forms") |
| Single button style | `## 4. Components` (parágrafo sob "Buttons") |
| Motion | `## 6. Depth & Elevation` (parágrafo "Motion Philosophy") ou seção dedicada se houver |
| Dark mode | `## 1. Visual Theme & Atmosphere` (último parágrafo) |
| Icons | `## 4. Components` (parágrafo sob "Decorative Elements") |

## Tom

Assertivo. "O sistema é flat" não "o sistema não tem shadow". Cliente lê como decisão de design, não falta de informação. O design system é uma postura, não um catálogo.

## Verify

O linter próprio (`_scripts/lint.mjs`) checa: se categoria está ausente do frontmatter e não há menção textual no body, emite warning `coverage-note-missing`. Não é error (não bloqueia), mas alerta o operador a explicitar a decisão.
