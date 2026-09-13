# Gabriel Silvestri, design system

Design system pessoal de marca do Gabriel Silvestri. Edição **Esmeralda 2026**, tema
canônico **dark**, com edição light medida ao lado.

## Como abrir

```bash
# do diretório do workspace (Criador Design System)
node _scripts/serve.mjs "Gabriel Silvestri" 3000
# abrir http://localhost:3000/brandbook/
```

Sempre via http, nunca `file://`: o brandbook importa `tokens.css` e `fonts.css` por
caminho relativo, e o protocolo de arquivo bloqueia as fontes.

## Como manter

```bash
# re-exportar os derivados a partir do DESIGN.md (nunca editar os derivados à mão)
node _scripts/export.mjs "Gabriel Silvestri"

# linter próprio, 11 rules
node _scripts/lint.mjs "Gabriel Silvestri"

# quality score A-F
node _scripts/score.mjs "Gabriel Silvestri"

# lint + score + brand-identity + coverage + Playwright (com o serve rodando em outra aba)
node _scripts/verify.mjs "Gabriel Silvestri" 3000

# re-medir o contraste depois de mexer em qualquer cor
cd "Gabriel Silvestri/_inputs" && node medir-contraste.mjs

# regerar as páginas do brandbook a partir do DESIGN.md
node "Gabriel Silvestri/_inputs/gerar-brandbook.mjs"
```

## O que é fonte e o que é derivado

| Arquivo | Papel |
|---|---|
| `DESIGN.md` | canônico, machine-readable. É aqui que se edita |
| `guia-marca.md` | o guia humano em PT, complementar |
| `tokens.css`, `tokens.json`, `tailwind.config.js` | **derivados**, gerados por `export.mjs`. Nunca editar à mão |
| `fonts.css` + `fonts/` | as duas famílias locais em woff2 |
| `brandbook/` | páginas geradas a partir do DESIGN.md por `_inputs/gerar-brandbook.mjs` |
| `_inputs/` | briefing, discovery, decisões, contraste medido e capturas |

A página inicial do brandbook é `brandbook/index.html`.

## Estrutura do brandbook

- `index.html`, sumário e a paleta em um olhar
- `guidelines.html`, o sistema inteiro em uma página
- `foundations.html`, os tokens crus com o snippet de uso de cada família
- `logo.html`, a identidade tipográfica (não há logo desenhado)
- `estrategia.html`, posicionamento, voz e vocabulário

Não foram geradas `icons.html` (a marca não tem sistema de ícones próprio) nem
`moodboard.html` (não existe bloco `moodboard:` no schema). As páginas condicionais só
aparecem quando o schema as sustenta.

## Material novo

Imagem de aplicação entra em `assets/materiais/`, depois se roda
`node "Gabriel Silvestri/_inputs/gerar-brandbook.mjs"` de novo.
