# Turquesa Dither

Design system de landing e página de conversão em pixel art: dither Bayer 4x4 em três tons turquesa, seções escuras e claras alternadas, tipo grotesco grande e motion feito do próprio dither. Nasceu na página do curso UX/UI Design à Prova de Balas 2.0 (uxui.gabrielsilvestri.com.br, 22/10/2026) e o Biel aprovou pra replicar.

Peça de referência viva: `D:\AI\Lain\Business de IA\MeV Páginas com IA antigo\exemplos-paginas\PDV UXUIPB\index.html`. Mostruário: `demo.html` desta pasta.

## Cor

Três tons, sem quarto matiz. O dither só usa os três puros; a interface usa os derivados.

| token | hex | papel |
|---|---|---|
| `--d0` | #101216 | fundo escuro, tom 0 do dither |
| `--teal` | #3a8c85 | o acento único, tom 1 do dither; botão, barra do topo, tag |
| `--l0` | #d6f3ef | fundo claro, tom 2 do dither; título no escuro |
| `--d1` `--d2` `--dline` | #161a1e #1d2327 #2a3638 | superfícies e linha no escuro |
| `--l1` `--l2` `--lline` | #e6f7f4 #c4e8e3 #a9d3cd | superfícies e linha no claro |
| `--teal-lt` | #6fc1b9 | teal como TEXTO no escuro (8,9:1) |
| `--teal-dk` | #1b5651 | teal como TEXTO no claro (7,2:1) |
| `--teal-hi` | #4aa49c | hover do botão |

Contraste medido: corpo no escuro `#b9d8d3` 12,3:1; corpo no claro `#17302f` 11,9:1; texto escuro sobre `--teal` 4,7:1 (passa AA sem folga, por isso botão leva peso 720 e 17px). `--teal` nunca é cor de texto pequeno.

## Tipo

Geist (texto e título) + Geist Mono (kicker, número, preço, etiqueta), pelo Google Fonts. Título com tracking negativo (-0,045em no h1, -0,04em no h2), corpo em 0, mono em caixa alta com +0,06em. `text-wrap: balance` no display e `pretty` no corpo, parágrafo com `max-width: 58ch`.

## Componentes (em `dither.css`)

- `.dk` / `.lt`: tema por seção; alternar escuro e claro e costurar com `.band`.
- `.band.dl` (escuro pra claro) e `.band.ld` (claro pra escuro): faixa de 96px de transição em dither.
- `.kick`: rótulo mono com o degrau de dois pixels antes.
- `.rule`: régua pontilhada de 8px (separador, topo de card, topo de número).
- `.btn`: bloco teal com sombra pontilhada (`dither-shadow.png`) deslocada que anda no hover e volta no clique.
- `.stackd`: sombra em rampa de dither deslocada 14px atrás de um bloco (card de preço, foto).
- `.heroart`: ilustração do hero (interface em pixel art na frente de uma esfera) com `.tag` de fundamento por cima.
- `.ic`: ícone SVG em pixel com `shape-rendering: crispEdges`.

## Motion (em `dither-motion.js`)

Todo efeito é dither desenhado em canvas pequeno e ampliado com `image-rendering: pixelated`, só roda com o elemento na tela e para sob `prefers-reduced-motion`.

1. **Esfera viva:** a luz da esfera do hero gira devagar (um quadro a cada 70ms). Markup: `.heroart` com `data-front` apontando o PNG sem esfera; o `<img>` traz o PNG completo como fallback sem JS.
2. **Faixa ondulando:** a borda de cada `.band` ondula com duas senoides (um quadro a cada 80ms).
3. **Dissolve de entrada:** o bloco entra trocando, em ordem Bayer de células de 8px, fundo por teal e teal por transparente, de cima pra baixo (750ms). Marcar com `data-dither-in` ou listar seletores em `window.DITHER_IN` antes do script.

Mais as entradas em CSS: `.rise` (sobe com opacidade, escalonado por `--i`) e a ilustração aparecendo em `steps()`.

## Imagem

- Textura e ilustração saem de script (`scripts/gen_assets.py`, `scripts/hero_ui.py`) com a mesma receita: grade lógica, Bayer 4x4, três tons, ampliar 4x com vizinho mais próximo.
- Print, screenshot de projeto e vídeo ficam SEM dither, legíveis, em moldura simples.

## Não fazer

- Não passar foto de pessoa pelo dither: no hero da página do curso a foto do Biel em dither ficou horrível e virou ilustração. O dither vai em elemento, textura e ícone.
- Não usar fundo em grade nem em pontos, nem glow, nem degradê suave.
- Não abrir um segundo acento: tudo que destaca é teal.
- Não animar layout: motion é canvas ou `transform`/`opacity`.
