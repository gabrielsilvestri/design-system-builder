# Guia de marca · Gu.ia

Versão 1.0.0 · edição LILÁS 2026-09 · tema claro (único) · atualizado 19/09/2026

A Gu.ia leva uma profissional liberal (nutricionista, psicóloga, veterinária) do zero ao produto no ar: entrevista, público, tema, ebook, oferta, página de vendas, stories e postagens. Quem usa é uma aluna que nunca montou um produto digital, no desktop e no celular.

Este guia é o que o design do painel novo obedece. O princípio que rege tudo: **nenhuma cor entra no olho**. Cada valor abaixo carrega a razão de contraste medida contra a superfície em que ele de fato aparece, calculada com luminância relativa da WCAG 2.

---

## As três superfícies claras

O painel novo troca a base escura por uma base clara. São três tons muito próximos, e é de propósito: o que separa um cartão da página não é a diferença de fundo, é a borda mais a sombra.

| Token | Hex | RGB | Papel |
|---|---|---|---|
| `--color-fundo` | `#f4f3f9` | 244,243,249 | a página |
| `--color-superficie` | `#fbfbfe` | 251,251,254 | cartão, barra lateral, barra de topo (1.07:1 acima do fundo) |
| `--color-superficie-2` | `#eeecf5` | 238,236,245 | campo de formulário, hover de item, faixa recuada (1.06:1 abaixo do fundo) |
| `--color-folha` | `#fbf7ed` | 251,247,237 | a prévia do ebook e da página de vendas (1.03:1 contra o fundo) |

Não existe `#ffffff` nem `#000000` em lugar nenhum. Todos os neutros são tingidos no mesmo matiz do roxo (H 293 em OKLCH), com croma abaixo de 0.035: eles não parecem coloridos, mas conversam com o acento em vez de brigar com ele.

A folha é o único tom quente do sistema (matiz 88). Ela é o que a aluna reconhece como "o meu produto" dentro da tela, e se separa por três sinais ao mesmo tempo, porque um só não bastaria: tom quente, borda própria (`#e5dfd3`, 1.24:1) e uma sombra mais funda.

---

## As duas linhas

| Token | Hex | Razões (fundo / superfície / superfície-2) | Papel |
|---|---|---|---|
| `--color-linha` | `#dddce6` | 1.23 / 1.32 / 1.16 | divisória decorativa, separa sem desenhar |
| `--color-linha-controle` | `#89869b` | 3.20 / 3.42 / 3.02 | a borda que desenha um controle clicável |

São duas porque servem a coisas diferentes. A WCAG 1.4.11 exige 3:1 no limite visual de um componente interativo, e é `--color-linha-controle` que cumpre isso. A divisória de lista não precisa (nem deve) desse peso: dez linhas fortes numa tabela gritam mais que o conteúdo.

---

## A tinta

| Token | Hex | Razões (fundo / superfície / superfície-2) | Papel |
|---|---|---|---|
| `--color-tinta` | `#302d3e` | 12.12 / 12.95 / 11.43 | texto principal |
| `--color-tinta-apoio` | `#595669` | 6.43 / 6.87 / 6.07 | descrição, legenda, metadado |
| `--color-tinta-sutil` | `#696678` | 5.05 / 5.39 / 4.76 | rótulo, placeholder (4.63 sobre o lilás de chip) |

A faixa do texto principal é fechada dos dois lados: **piso 11:1 e teto 13:1**. O piso existe porque abaixo dele o degrau para o texto de apoio desaparece. O teto existe porque tinta quase pura sobre branco quase puro espalha o traço e cansa em leitura longa, e o painel é lido todos os dias.

Nenhuma tinta desce abaixo de 4.5:1 em nenhuma das três superfícies. Quando um texto precisa de menos presença, ele desce de cor ou de peso, nunca de tamanho.

---

## O roxo, em quatro papéis

O roxo é o único acento do sistema. O matiz vem do que a Claudia já usa em todo material dela (H 293 em OKLCH, o mesmo do `#7C3AED` que está no produto hoje). O valor foi derivado aqui, em OKLCH, com croma reduzido: `#7C3AED` marca 83 por cento de saturação HSL e o teto da casa é 80. O `#7149ca` marca 55 por cento e continua sendo o mesmo roxo aos olhos de quem conhece a marca.

Quatro tokens porque são quatro trabalhos, e misturá-los é o que faz um acento único virar ruído:

| Token | Hex | Razão | Papel |
|---|---|---|---|
| `--color-roxo` | `#7149ca` | tinta clara em cima = 5.67 | ÁREA: fundo do botão primário, selo, barra de progresso |
| `--color-roxo-tinta` | `#633ab6` | 6.77 / 7.23 / 6.39 | TEXTO: link, rótulo de botão fantasma, ícone do item atual |
| `--color-roxo-borda` | `#8b72d7` | 3.47 / 3.71 / 3.27 | LIMITE: borda do controle selecionado |
| `--color-roxo-fundo` | `#ebe8fa` | roxo-tinta em cima = 6.21 | PREENCHIMENTO: chip, item atual, seleção |

Mais dois de apoio: `--color-roxo-hover` (`#5f35b1`, tinta clara em cima = 7.55) e `--color-roxo-ativo` (`#4f2998`, 9.45). O hover do botão primário **escurece**, nunca clareia: clarear derruba o contraste do rótulo exatamente no momento em que o dedo está em cima dele.

O `--color-roxo-fundo` e o `--color-roxo-fundo-2` são preenchimento e nunca texto. Como tinta eles ficariam abaixo de 1.5:1.

---

## Os estados

Cor nunca conta o estado sozinha. Cada um vem com ícone e palavra.

| Estado | Tinta | Preenchimento | Borda |
|---|---|---|---|
| No ar, etapa concluída | `#246a43` (5.92 / 6.32 / 5.58) | `#e1f2e6` (5.61) | `#5a9570` (3.19 / 3.41 / 3.01) |
| Aviso, pendência | `#775520` (6.13 / 6.55 / 5.78) | `#f6ecd7` (5.76) | `#a6804a` (3.28 / 3.50 / 3.09) |
| Erro, crédito no fim | `#a23c3f` (5.85 / 6.25 / 5.52) | `#fbe7e6` (5.43) | `#be6563` (3.64 / 3.89 / 3.43) |

Os três são dessaturados de propósito (croma OKLCH entre 0.082 e 0.135, contra 0.190 do roxo), pra conviver com o acento sem virar um segundo acento. Informação não tem família própria: reaproveita o roxo como texto, porque o sistema tem um acento só.

---

## Tipografia

Três famílias, todas embutidas em `assets/fontes/` e todas funcionando sem rede.

- **Anybody** no display, peso 500 a 800, nunca abaixo de 20px.
- **Hanken Grotesk** no corpo, peso 400 a 700, nunca acima de 18px.
- **IBM Plex Mono** em número, valor e endereço, peso 500, piso próprio de 16px.

| Papel | Família | Tamanho | Peso | Entrelinha | Tracking |
|---|---|---|---|---|---|
| Comemoração | Anybody | 48px | 800 | 1.05 | -0.03em |
| Contador, boas-vindas | Anybody | 36px | 700 | 1.1 | -0.028em |
| Título de tela (h1) | Anybody | 24px | 700 | 1.2 | -0.022em |
| Título de bloco (h2) | Anybody | 20px | 700 | 1.25 | -0.018em |
| Título de cartão (h3) | Hanken Grotesk | 18px | 700 | 1.35 | -0.012em |
| Abertura de tela | Hanken Grotesk | 18px | 400 | 1.6 | 0 |
| Corpo | Hanken Grotesk | 16px | 400 | 1.6 | 0 |
| Descrição de cartão | Hanken Grotesk | 15px | 400 | 1.5 | 0 |
| Botão | Hanken Grotesk | 16px | 600 | 1.2 | -0.005em |
| Botão compacto, chip | Hanken Grotesk | 15px | 600 | 1.2 | 0 |
| Legenda, metadado | Hanken Grotesk | 14px | 400 | 1.45 | 0.004em |
| Rótulo em caixa alta | Hanken Grotesk | 14px | 700 | 1.3 | 0.06em |
| Crédito, valor | IBM Plex Mono | 16px | 500 | 1.5 | -0.01em |
| Endereço no ar | IBM Plex Mono | 20px | 500 | 1.4 | -0.015em |

**14px é piso duro**, e o piso inclui rótulo, badge, legenda, cabeçalho de tabela e contador de caracteres. Mono tem piso próprio de 16px, porque em caixa baixa ela desenha menor que uma sans no mesmo corpo.

Linha de texto entre 45 e 75 caracteres, com o limite no próprio parágrafo (`max-width` em `ch`), nunca no container.

---

## Profundidade

Três planos, e toda sombra é em duas camadas (uma curta de contato, uma longa de ambiente) tingida de roxo, nunca cinza chapada.

| Plano | Uso |
|---|---|
| base | cartão, barra lateral, barra de topo |
| elevado | cartão em hover, rodapé de próximo passo, gaveta |
| flutuante | toast, balão do tour, modal, chat |

Numa UI clara com três superfícies a 1.07:1 umas das outras, é a sombra que faz a hierarquia. Sem ela o painel inteiro vira uma folha só.

O fundo da página não é chapado: leva um radial discreto em lilás e um grão a 0.02 de opacidade. Não há grid de fundo, glow, gradiente neon nem blob.

---

## Voz

Brasileira, clara, sem jargão. Fala com uma aluna leiga, em frase curta, nomeando a coisa pelo que ela faz.

**Soa assim:**

> Seu ebook está pronto. Falta só escolher a capa.

> Faltam 2 etapas pro seu lançamento ir ao ar.

> Você ainda não tem peça nesta biblioteca. Veja um exemplo de como ela fica.

**Vocabulário aprovado:** lançamento, peça, próximo passo, no ar, crédito, ficha.

**Banlist:** funil, onboarding, dashboard, copy, deploy, pipeline. E, na escrita, nada de en dash nem em dash: vírgula, parênteses, dois-pontos ou frase separada.

Erro explica o que aconteceu e o que fazer, sem pedir desculpa e sem ser vago. Tela vazia é convite, não ausência: mostra uma peça de exemplo em vez de uma área em branco.

---

## As sete regras que são a identidade

1. **Um acento só, e ele é roxo.** O que precisa de destaque sem ser ação vira neutro com peso.
2. **Faixa de contraste fechada.** Texto principal entre 11:1 e 13:1; nenhuma tinta abaixo de 4.5:1; borda de controle acima de 3:1.
3. **Sem branco puro e sem preto puro.** Neutros tingidos no matiz 293, croma abaixo de 0.035.
4. **Piso de 14px em qualquer texto lido**, 16px em mono. Hierarquia desce por cor e por peso.
5. **Estado é cor mais ícone mais palavra.** Nunca só cor.
6. **Profundidade em três planos**, com sombra tingida de roxo em duas camadas.
7. **Toda cor é medida.** `node _scripts/medir-cor.mjs medir <tinta> #f4f3f9 #fbfbfe #eeecf5` antes de qualquer cor nova entrar.

---

## Prompt para outras IAs

Cole no início do chat com qualquer LLM. Substitua `[TAREFA]` pela sua pergunta.

---

Você é designer do painel da **Gu.ia**, o SaaS que leva uma profissional liberal leiga do zero ao produto no ar. A interface é clara, o acento é um só (roxo), e toda cor tem razão de contraste medida.

Superfícies: `#f4f3f9` página, `#fbfbfe` cartão e barra lateral, `#eeecf5` campo e hover, `#fbf7ed` a folha do ebook (única quente). Sem branco nem preto puros.

Tinta: `#302d3e` principal (12.12 / 12.95 / 11.43), `#595669` apoio, `#696678` rótulo. Nunca acima de 13:1 nem abaixo de 4.5:1.

Roxo: `#7149ca` como área (botão primário, tinta clara em cima = 5.67), `#633ab6` como texto, `#8b72d7` como borda selecionada, `#ebe8fa` e `#ded9f7` como preenchimento (nunca texto). Hover do primário escurece para `#5f35b1`.

Linhas: `#dddce6` divisória decorativa, `#89869b` borda de controle (3:1).

Estado: verde `#246a43`, âmbar `#775520`, vermelho `#a23c3f`, cada um com preenchimento e borda próprios, sempre com ícone e palavra junto.

Tipografia: Anybody no display (nunca abaixo de 20px), Hanken Grotesk no corpo (nunca acima de 18px), IBM Plex Mono em número e endereço (piso de 16px). Piso geral de 14px, incluindo rótulo, badge, legenda e cabeçalho de tabela.

Guia de iteração:

1. Cada tinta está entre 4.5:1 e 13:1 sobre as três superfícies, e o texto principal entre 11 e 13?
2. Todo controle clicável tem borda de 3:1, alvo de 44px, e os estados hover, foco visível, pressionado e desabilitado?
3. Entrou uma segunda cor de acento? Se sim, ela vira neutro com peso ou vira estado com ícone.
4. Algum texto caiu abaixo de 14px (ou de 16px em mono)?
5. O roxo apareceu como texto usando o token de área em vez do de tinta?

Tarefa: [TAREFA]

Responda em português brasileiro, com acentos corretos, sem en dash nem em dash. Se precisar de placeholder, marque como `[a definir]` em vez de inventar.

---
