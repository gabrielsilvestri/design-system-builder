# silvestri dashboard · design system

O design system padrão dos painéis e apps do Biel desde 27/09/2026. Estrutura, tipografia e acabamento do design system da Gu.ia (protótipo E), com a paleta escura e o teal da casa. Primeiros consumidores: o painel do Instagram (`Business de IA\painel-instagram\estilo.css`) e o bielchat (`Business de IA\projetos\comentario-vira-dm\app\globals.css`).

## Arquivos

- `DESIGN.md`: fonte da verdade (schema v2). É o único arquivo de token que se edita.
- `tokens.css`, `tokens.json`, `tailwind.config.js`: derivados por `_scripts/export.mjs`, com o contraste anotado por `medir-cor.mjs anotar`.
- `fonts.css`: Hanken Grotesk e JetBrains Mono pelo Google Fonts.
- `components.css`: as receitas (casca, barra, cabeçalho, cartão, indicador, botão, segmentado, filtro, chip, campo, tabela, aviso, dica, progresso, popover, fita de funil).
- `brandbook/index.html`: a referência viva, que usa os três CSS.

## Atualizar

```powershell
cd "D:\AI\Lain\Agentes e Skills\skills\Criador Design System"
$ds = "Silvestri Dashboard Design System"
node _scripts/export.mjs $ds
node _scripts/medir-cor.mjs anotar $ds
node _scripts/lint.mjs $ds
node _scripts/score.mjs $ds
node _scripts/serve.mjs $ds 4190   # http://localhost:4190/brandbook/
```

Mudou token ou receita aqui, os dois consumidores precisam receber a mudança: o `estilo.css` do painel e o `globals.css` do bielchat não importam estes arquivos, eles copiam os valores.
