# CLAUDE.md · silvestri dashboard design system

## O que é

O design system padrão de todo painel, dashboard e app interno do Biel, decidido por ele em 27/09/2026: "pega o design system da guia + protótipo e aplica aquele estilo ... e deixa como nosso design system padrão", mantendo a paleta da casa. Tema escuro único.

## De onde vem cada parte

- Estrutura, tipografia (Hanken Grotesk), raios (12 controle, 16 painel), espaçamento em múltiplo de 4, sombras suaves, receitas de barra, cartão, indicador e botão: design system da Gu.ia, `D:\AI\Lain\Clientes\Claudia Barradas\design-system\` e protótipo E. Não se copia nada que é da cliente (roxo, folha, papel, selo Gu, tema claro).
- Paleta: painel do Instagram e painel da lain (canvas `#101216`, teal `#4fc7bb`, tinta `#bcc2c9`, cores de dado com significado fixo).

## Regras

- `DESIGN.md` é o único arquivo de token que se edita; os derivados saem do `export.mjs`.
- Cor nova só entra medida (`node _scripts/medir-cor.mjs medir <tinta> <fundo>`), piso 4.5:1 e teto 11:1.
- Hanken em toda a interface; JetBrains Mono só em código, endereço, slug e palavra-chave.
- Consumidores copiam valores, não importam: mudou aqui, atualizar o `estilo.css` do painel-instagram e o bloco `.bielchat` do `globals.css` do comentario-vira-dm.
