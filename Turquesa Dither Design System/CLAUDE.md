# CLAUDE.md (Turquesa Dither Design System)

Design system da casa (não é de cliente) pra página em pixel art turquesa com motion de dither. Feito à mão a partir da página do curso de UX, fora do pipeline schema v2 do workspace: aqui não tem `export.mjs`, a fonte da verdade é `DESIGN.md` + `dither.css`.

Sucesso: uma página nova replica o visual copiando `dither.css`, `dither-motion.js` e `assets/`, sem reinventar textura nem efeito.

## Como usar numa página nova

1. Copiar `dither.css`, `dither-motion.js` e a pasta `assets/` pra pasta da página (os caminhos são relativos: `assets/...`).
2. Carregar Geist e Geist Mono do Google Fonts, linkar o CSS no `<head>` e o JS no fim do `<body>`.
3. Montar as seções com `.dk` e `.lt` alternadas, costuradas por `<div class="band dl" aria-hidden="true"></div>` (ou `ld`).
4. Marcar com `data-dither-in` os blocos que entram dissolvendo (card, preço, foto, vídeo).
5. Ilustração nova de hero: editar `scripts/hero_ui.py` (formas em grade lógica 240x300) e gerar duas versões, `python scripts/hero_ui.py assets/hero.png` e `python scripts/hero_ui.py assets/hero-front.png nosphere`.
6. Texturas em outra paleta: trocar `PAL` em `scripts/gen_assets.py` e rodar `python scripts/gen_assets.py assets`; trocar também `PAL` no topo do `dither-motion.js`.

`demo.html` mostra tudo funcionando: `node` não é preciso, abrir por qualquer servidor local (`npx serve .` ou `python -m http.server`).

## Armadilhas

- `#3a8c85` dá 4,7:1 com texto escuro: serve pra botão com fonte grande e pesada, nunca pra texto pequeno. Teal como texto é `--teal-lt` no escuro e `--teal-dk` no claro.
- Canvas e PNG de dither só ficam nítidos com `image-rendering: pixelated`; sem isso viram borrão.
- O dissolve pinta a cor de fundo da `section` mais próxima: bloco fora de `section` usa o fundo do `body`.
- Foto de pessoa não vai no dither (ver `DESIGN.md`, Não fazer).
