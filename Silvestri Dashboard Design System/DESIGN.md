---
schema_version: 2.0
client_name: silvestri dashboard
client_slug: silvestri-dashboard
description: "O design system padrão dos painéis e apps do Biel (painel do Instagram, bielchat e o que vier): a estrutura e o acabamento do design system da Gu.ia vestidos com a paleta escura e teal da casa."
language: pt-br
edition: "TEAL REFINADO 2026-09"
year: 2026

style_archetype: polaris-friendly
style_confidence: 86
default_theme: dark
themes_available:
  - dark

confidence_summary:
  high: 70
  medium: 12
  low: 2
  total: 84

colors:
  primary: "#4fc7bb"
  on-primary: "#101216"
  secondary: "#5bbcb2"
  on-secondary: "#101216"
  tertiary: "#1f3135"
  on-tertiary: "#5bbcb2"
  neutral: "#9fa6b0"
  surface: "#101216"
  on-surface: "#bcc2c9"
  surface-variant: "#191d23"
  on-surface-variant: "#bcc2c9"
  outline: "#37404e"
  error: "#e88080"
  on-error: "#101216"
  success: "#5fc890"
  warning: "#d5a95a"
  info: "#6ea8fe"
  named:
    fundo:
      hex: "#101216"
      rgb: "16,18,22"
      role: "canvas liso da página, sem textura, sem grade e sem gradiente"
    barra:
      hex: "#14171b"
      rgb: "20,23,27"
      role: "fundo da barra lateral, um degrau entre o canvas e o cartão"
    superficie:
      hex: "#191d23"
      rgb: "25,29,35"
      role: "cartão, painel, campo e botão secundário: sempre um degrau acima do canvas"
    superficie-2:
      hex: "#222732"
      rgb: "34,39,50"
      role: "hover neutro, trilho recuado de controle segmentado e cabeçalho de tabela"
    superficie-3:
      hex: "#2a3140"
      rgb: "42,49,64"
      role: "pressionado e barra de progresso vazia"
    borda-suave:
      hex: "#262c35"
      rgb: "38,44,53"
      role: "contorno decorativo de cartão e painel (1.20:1 sobre a superfície); o que separa o cartão é borda mais sombra"
    linha:
      hex: "#37404e"
      rgb: "55,64,78"
      role: "divisória, contorno de campo e de botão secundário em repouso"
    linha-controle:
      hex: "#5a6674"
      rgb: "90,102,116"
      role: "contorno de controle no hover e borda que precisa de 3:1 sobre o canvas"
    tinta:
      hex: "#bcc2c9"
      rgb: "188,194,201"
      role: "texto principal e título; teto de 11:1 pelo astigmatismo do Biel"
    tinta-apoio:
      hex: "#9fa6b0"
      rgb: "159,166,176"
      role: "descrição, legenda e texto secundário"
    tinta-sutil:
      hex: "#9098a3"
      rgb: "144,152,163"
      role: "rótulo de grupo, metadado e ícone em repouso"
    teal:
      hex: "#4fc7bb"
      rgb: "79,199,187"
      role: "o acento único como ÁREA: botão principal, barra de progresso, marca"
    teal-hover:
      hex: "#6fd3c8"
      rgb: "111,211,200"
      role: "hover do botão principal: no escuro o acento clareia"
    teal-ativo:
      hex: "#45b3a8"
      rgb: "69,179,168"
      role: "botão principal pressionado"
    teal-tinta:
      hex: "#5bbcb2"
      rgb: "91,188,178"
      role: "o teal como TEXTO: link, item atual, ícone ativo, rótulo de destaque"
    teal-borda:
      hex: "#3a8c85"
      rgb: "58,140,133"
      role: "borda do controle selecionado e do cartão em destaque; nunca texto"
    teal-fundo:
      hex: "#1f3135"
      rgb: "31,49,53"
      role: "preenchimento do item atual, do chip e da seleção; nunca texto"
    teal-fundo-2:
      hex: "#243f41"
      rgb: "36,63,65"
      role: "seleção pressionada e trilho de barra de progresso"
    escuro:
      hex: "#101216"
      rgb: "16,18,22"
      role: "tinta sobre o teal cheio"
    verde:
      hex: "#5fc890"
      rgb: "95,200,144"
      role: "dado de comentário e lead; estado ok e no ar"
    ambar:
      hex: "#d5a95a"
      rgb: "213,169,90"
      role: "dado de engajamento; aviso e pendência (nunca como preenchimento sólido)"
    vermelho:
      hex: "#e88080"
      rgb: "232,128,128"
      role: "queda e erro"
    azul:
      hex: "#6ea8fe"
      rgb: "110,168,254"
      role: "dado de clique; informação"
    roxo:
      hex: "#a78bfa"
      rgb: "167,139,250"
      role: "só categoria de dado (reel), nunca acento de interface"
    ardosia:
      hex: "#7f8b9e"
      rgb: "127,139,158"
      role: "dado neutro sem sentido de negócio (demografia)"

contrast_notes:
  color-tinta: "10.44 / 10.01 / 9.42 / 8.33 sobre fundo, barra, superfície e superfície-2; abaixo do teto de 11:1"
  color-tinta-apoio: "7.64 / 7.32 / 6.89 / 6.09 sobre fundo, barra, superfície e superfície-2"
  color-tinta-sutil: "6.43 / 6.17 / 5.80 / 5.13 sobre fundo, barra, superfície e superfície-2; 4.65 sobre teal-fundo"
  color-teal: "9.12:1 sobre o fundo; escuro em cima 9.12:1"
  color-teal-hover: "escuro em cima 10.56:1"
  color-teal-ativo: "escuro em cima 7.38:1"
  color-teal-tinta: "8.29 / 7.48 sobre fundo e superfície; 5.99 sobre teal-fundo; 4.98 sobre teal-fundo-2"
  color-linha: "1.79 / 1.62 sobre fundo e superfície (divisória, não limite de controle)"
  color-linha-controle: "3.20 / 2.89 sobre fundo e superfície"
  color-borda-suave: "1.33 / 1.20 sobre fundo e superfície (decorativa)"
  color-verde: "8.18:1 sobre a superfície"
  color-ambar: "7.78:1 sobre a superfície"
  color-vermelho: "6.31:1 sobre a superfície"
  color-azul: "7.00:1 sobre a superfície"
  color-roxo: "6.22:1 sobre a superfície"
  color-ardosia: "4.91:1 sobre a superfície"

typography:
  display-hero:
    fontFamily: "\"Hanken Grotesk\", system-ui, sans-serif"
    fontSize: "36px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.028em"
    role: "o número-herói, uma vez por tela no máximo"
  display-large:
    fontFamily: "\"Hanken Grotesk\", system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.025em"
    role: "título de página; 26px até 640px"
  section-heading:
    fontFamily: "\"Hanken Grotesk\", system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: "1.35"
    letterSpacing: "-0.015em"
    role: "título de seção da página"
  subheading-large:
    fontFamily: "\"Hanken Grotesk\", system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: "1.4"
    letterSpacing: "-0.01em"
    role: "título de cartão e de painel"
  subheading:
    fontFamily: "\"Hanken Grotesk\", system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: "1.45"
    letterSpacing: "0em"
    role: "rótulo de campo e título de bloco pequeno"
  metric:
    fontFamily: "\"Hanken Grotesk\", system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: "1.15"
    letterSpacing: "-0.025em"
    features: "'tnum'"
    role: "número de indicador; 24px até 640px; numerais tabulares"
  metric-small:
    fontFamily: "\"Hanken Grotesk\", system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.02em"
    features: "'tnum'"
    role: "número de cartão secundário e de faixa densa"
  body-large:
    fontFamily: "\"Hanken Grotesk\", system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0em"
    role: "frase de abertura de tela e texto de leitura"
  body:
    fontFamily: "\"Hanken Grotesk\", system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.55"
    letterSpacing: "0em"
    role: "corpo padrão de painel, linha de tabela e descrição de cartão"
  body-small:
    fontFamily: "\"Hanken Grotesk\", system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "0.004em"
    role: "texto de apoio dentro de peça densa, no piso de 14px"
  button:
    fontFamily: "\"Hanken Grotesk\", system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.005em"
    role: "rótulo de botão, alvo de 44px"
  button-small:
    fontFamily: "\"Hanken Grotesk\", system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0em"
    role: "rótulo de botão compacto, chip, filtro e segmento"
  link:
    fontFamily: "\"Hanken Grotesk\", system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: "1.5"
    letterSpacing: "0em"
    role: "link em texto corrido, em teal-tinta"
  caption:
    fontFamily: "\"Hanken Grotesk\", system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.45"
    letterSpacing: "0.004em"
    role: "legenda, metadado e eixo de gráfico, no piso de 14px"
  caption-small:
    fontFamily: "\"Hanken Grotesk\", system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "1.4"
    letterSpacing: "0.008em"
    role: "legenda que precisa de presença: o piso não desce, o peso sobe"
  micro:
    fontFamily: "\"Hanken Grotesk\", system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "1.3"
    letterSpacing: "0.04em"
    role: "rótulo de grupo da barra e eyebrow, em caixa alta"
  code:
    fontFamily: "\"JetBrains Mono\", \"Cascadia Mono\", ui-monospace, monospace"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "1.5"
    letterSpacing: "-0.01em"
    role: "código, endereço, slug e palavra-chave; nunca corpo nem número de indicador"

rounded:
  none: "0px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  full: "9999px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  base: "16px"
  lg: "20px"
  xl: "24px"
  "2xl": "32px"
  "3xl": "40px"
  "4xl": "48px"
  "5xl": "64px"
  gutter: "16px"
  container-padding: "40px"

breakpoints:
  mobile: "0px"
  tablet: "640px"
  desktop: "960px"
  wide: "1180px"

shadows:
  flat: "none"
  suave: "0 2px 6px rgb(0 0 0 / 34%)"
  retomada: "0 5px 20px rgb(0 0 0 / 44%)"
  elevado: "0 2px 4px rgb(0 0 0 / 42%), 0 12px 24px -12px rgb(0 0 0 / 52%)"
  flutuante: "0 4px 8px rgb(0 0 0 / 45%), 0 24px 48px -20px rgb(0 0 0 / 60%)"
  foco: "0 0 0 2px #4fc7bb"

custom:
  barra-larg: "260px"
  coluna: "1120px"
  ui-raio-painel: "16px"
  ui-raio-controle: "12px"
  ui-espaco-card: "24px"
  ui-espaco-grade: "16px"
  ui-foco-halo: "0 0 0 5px rgb(79 199 187 / 18%)"

motion:
  durations:
    fast: "140ms"
    base: "240ms"
    slow: "400ms"
  easings:
    ease-out: "cubic-bezier(0.22, 1, 0.36, 1)"
    ease-in-out: "cubic-bezier(0.65, 0, 0.35, 1)"
  reduced-motion-respected: true

z-index:
  base: 0
  raised: 20
  sticky: 60
  gaveta: 125
  modal: 160

opacity:
  invisible: "0"
  muted: "0.4"
  full: "1"

preview_tokens:
  button_primary_bg: "#4fc7bb"
  button_primary_text: "#101216"
  button_primary_border: "#4fc7bb"
  button_secondary_bg: "#191d23"
  button_secondary_text: "#bcc2c9"
  button_secondary_border: "#37404e"
  button_tertiary_text: "#5bbcb2"
  surface_bg: "#101216"
  card_bg: "#191d23"
  text: "#bcc2c9"
  text_muted: "#9fa6b0"
  border: "#262c35"
  accent: "#4fc7bb"
  button_radius: "12px"
  card_radius: "16px"
  input_radius: "12px"

components:
  button-primary:
    bg: "{colors.primary}"
    text: "{colors.on-primary}"
    border: "{colors.primary}"
    radius: "{rounded.md}"
    padding: "8px 20px"
    min_height: "44px"
    font: "15px Hanken Grotesk weight 600"
    states:
      hover: { bg: "#6fd3c8", border: "#6fd3c8" }
      focus: { ring: "2px solid {colors.primary}", offset: "3px" }
      active: { bg: "#45b3a8", transform: "scale(.975)" }
      disabled: { bg: "#222732", text: "#9098a3", border: "#37404e" }
  button-secondary:
    bg: "{colors.surface-variant}"
    text: "{colors.on-surface}"
    border: "{colors.outline}"
    radius: "{rounded.md}"
    padding: "8px 20px"
    min_height: "44px"
    font: "15px Hanken Grotesk weight 600"
    states:
      hover: { bg: "#222732", border: "#5a6674" }
      focus: { ring: "2px solid {colors.primary}", offset: "3px" }
  button-ghost:
    bg: "transparent"
    text: "{colors.secondary}"
    border: "transparent"
    radius: "{rounded.md}"
    padding: "8px 12px"
    font: "15px Hanken Grotesk weight 600"
    states:
      hover: { bg: "#1f3135" }
  card:
    bg: "{colors.surface-variant}"
    border: "#262c35"
    radius: "{rounded.lg}"
    padding: "24px"
    shadow: "{shadows.suave}"
  input-text:
    bg: "{colors.surface-variant}"
    text: "{colors.on-surface}"
    border: "{colors.outline}"
    radius: "{rounded.md}"
    padding: "12px 16px"
    min_height: "48px"
    font: "15px Hanken Grotesk weight 400"
    states:
      hover: { border: "#5a6674" }
      focus: { border: "{colors.primary}", ring: "2px solid {colors.primary}", offset: "2px" }
      error: { border: "{colors.error}" }
      disabled: { bg: "#222732", text: "#9098a3" }
  badge-default:
    bg: "#1f3135"
    text: "{colors.secondary}"
    border: "transparent"
    radius: "{rounded.sm}"
    padding: "2px 10px"
    font: "14px Hanken Grotesk weight 600"
  nav-item:
    bg: "transparent"
    text: "{colors.on-surface}"
    radius: "{rounded.md}"
    padding: "8px 12px"
    min_height: "44px"
    font: "15px Hanken Grotesk weight 500"
    states:
      hover: { bg: "#222732" }
      current: { bg: "#1f3135", text: "#5bbcb2", weight: 600 }
  nav-header:
    bg: "#14171b"
    text: "{colors.on-surface}"
    border_bottom: "#37404e"
    height: "60px"

positioning:
  enemy: "O painel que parece terminal de depuração: tudo em mono, tudo do mesmo tamanho, nada manda na página"
  audience: "O Biel, que abre os painéis várias vezes por dia e tem astigmatismo"
  category: "Painel de operação e de métricas, escuro, de leitura rápida"
  claim: "A estrutura calma da Gu.ia com a paleta da casa: uma coisa manda por tela, e toda cor é medida"

archetypes:
  - { name: "Sage", weight: 55, essence: "Número medido e lido de relance" }
  - { name: "Caregiver", weight: 25, essence: "Espaço de respiro, nada grita" }
  - { name: "Ruler", weight: 20, essence: "Ordem: grade regular, hierarquia clara" }
archetype_synthesis: "Um painel sereno e preciso: diz o que importa primeiro e deixa o resto a um passo"

voice:
  brand_voice:
    traits: [direta, calma, precisa]
    tone: "Frase curta que diz o número e o que ele quer dizer"
    example: "2.476 comentários no período, 62 cliques no link da bio"
  approved_vocabulary: ["período", "janela", "lead", "comentário", "clique"]
  banlist: [exclamação, caps de ênfase, emoji colorido, en dash, em dash]

manifesto:
  quote: "uma coisa manda por tela; o resto espera a vez."
  body_paragraphs:
    - "A estrutura vem da Gu.ia: sans de tela, cartão com respiro, barra agrupada, faixa de indicadores."
    - "A cor vem da casa: canvas escuro frio, teal como acento único, cor de dado reservada."
    - "Toda cor é medida, com piso de 4.5:1 e teto de 11:1."

moodboard:
  categories:
    - name: "Gu.ia, protótipo E"
      references: ["barra lateral por grupo", "faixa de contadores", "grade regular de cartões", "retomada com um botão"]
      influences: ["Hanken em toda a interface", "raio 12 no controle e 16 no painel", "sombra suave no lugar da borda forte"]
    - name: "Painel do Instagram"
      references: ["canvas #101216", "teal #4fc7bb", "cor de dado por significado"]
      influences: ["dark como tema único", "teto de contraste de 11:1"]
  design_principles:
    - "Sans de tela na interface; mono só em código e endereço"
    - "Um acento (teal); cor de dado reservada ao significado"
    - "14px é piso duro"
    - "Cartão se separa por degrau de superfície, borda suave e sombra, nunca por borda forte"
    - "Espaço em múltiplo de 4"
---

# silvestri dashboard · design system

## 1. Visual Theme & Atmosphere

O padrão dos painéis e apps do Biel desde 27/09/2026. A estrutura, a tipografia e o acabamento vêm do design system da Gu.ia (protótipo E, `Clientes\Claudia Barradas\design-system\`), aprovado por ele como o mais refinado da casa. A paleta continua a do painel do Instagram e do painel da lain: canvas escuro frio `#101216`, teal `#4fc7bb` como acento único e as cores de dado com significado fixo. Tema escuro é o único tema. Canvas liso: sem textura, sem grade, sem gradiente, sem glow.

## 2. Color Palette & Roles

Três degraus de superfície fazem a profundidade: canvas `#101216`, barra lateral `#14171b`, cartão `#191d23`. Hover e trilho recuado usam `#222732`; pressionado `#2a3140`. O cartão se separa do canvas pelo degrau, pela borda suave `#262c35` e pela sombra suave, nunca por borda forte. Divisória e contorno de campo `#37404e`; contorno no hover `#5a6674`.

Tinta `#bcc2c9` (texto e título), apoio `#9fa6b0`, sutil `#9098a3`. O teto de 11:1 existe pelo astigmatismo do Biel: não clarear a tinta.

O teal tem quatro trabalhos e um token pra cada: `teal` é área (botão principal, barra de progresso, marca), `teal-tinta` é texto (link, item atual, ícone ativo), `teal-borda` é limite de controle selecionado, `teal-fundo` e `teal-fundo-2` são preenchimento. Preenchimento nunca vira texto.

Cor de dado é reservada: verde é comentário e lead, azul é clique, âmbar é engajamento, roxo é reel, ardósia é dado neutro (demografia), vermelho é queda e erro. Nenhuma delas vira decoração, e o roxo nunca vira acento de interface. Âmbar não entra como preenchimento sólido (o marrom-dourado escuro é proibido pela régua visual): aviso usa texto e ícone âmbar sobre a superfície, com fundo em `color-mix` de no máximo 12%.

## 3. Typography System

Hanken Grotesk organiza a interface inteira: título de página 30px/600 (26px no celular), seção 20px/600, cartão 17px/600, rótulo 15px/600, corpo 15px, apoio e legenda 14px. Rótulo de grupo da barra em caixa alta 14px/500 com 0.04em. Indicador 30px/600 com numerais tabulares (24px no celular), número secundário 22px/600. JetBrains Mono fica só em código, endereço, slug e palavra-chave de campanha, a 14px/500. Tracking negativo nos tamanhos grandes, zero no corpo, levemente positivo na caixa alta. Nenhum texto abaixo de 14px, inclusive eixo de gráfico. Título e subtítulo em caixa de frase (primeira letra maiúscula).

## 4. Components

Botão e campo com raio de 12px; painel e cartão com 16px; chip com 8px. Botão padrão com alvo mínimo de 44px e padding 8px 20px. O principal é teal cheio com tinta escura, e só existe um por tela. O secundário é superfície com contorno `linha`, que vira `linha-controle` no hover. Foco é anel sólido de 2px em teal com afastamento de 3px, em todo controle. Campo 48px de altura mínima, padding 12px 16px. Cartão com padding 24px (20px abaixo de 640px), borda suave e sombra suave. Controle segmentado: trilho `superficie-2` com raio 12px; o segmento escolhido é uma pastilha `superficie` elevada com tinta teal. Filtro solto escolhido enche de `teal-fundo` com `teal-tinta`. Item da barra: 44px, raio 12px, ícone em `tinta-sutil`; atual com `teal-fundo` e `teal-tinta`, sem borda. Tabela: cabeçalho em `superficie-2`, linha de 44px, número à direita com numerais tabulares. Tooltip: `superficie-2`, raio 12px, sombra flutuante. Popover nasce do controle que abriu, ancorado no canto dele, com sombra flutuante e raio 16px. Funil de etapas é a fita que afina (a linha do despacho do bielchat): estações sobre um degradê teal de 32% a 14%, espessura proporcional ao maior valor, detalhe da estação numa linha abaixo no hover e no foco. As receitas estão em `components.css` e renderizadas em `brandbook/index.html`.

## 5. Layout & Spacing

Barra lateral fixa de 260px, conteúdo de até 1120px com 40px de respiro lateral (16px no celular). Espaço sempre em múltiplo de 4. Grade de cartões regular com gap de 16px, sem cartão de largura dupla por enfeite. Seção separada por 48px; título de seção a 16px do conteúdo. Cabeçalho de página: título e linha do que a tela faz à esquerda, ação da tela à direita (filtro de período, botão principal). Indicadores formam uma faixa: cartões iguais lado a lado, rótulo em apoio, número embaixo.

## 6. Depth & Elevation

Profundidade vem do degrau de superfície mais sombra preta difusa: `suave` (0 2px 6px a 34%) em cartão, `retomada` (0 5px 20px a 44%) no cartão principal e no hover de cartão clicável, `flutuante` em tooltip e menu. Sem glow colorido, sem halo teal. O foco tem halo de 5px a 18% além do anel.

## 7. Do's and Don'ts

Fazer: uma ação principal por tela; título em caixa de frase; número com numerais tabulares; ícone de linha em `currentColor`; cor de dado só com significado; medir contraste de todo par novo.

Não fazer: voltar ao mono em toda a interface; borda forte pra separar cartão; teal como texto sobre teal-fundo-2 em tamanho pequeno; glow, gradiente decorativo de fundo, grade de fundo ou textura (o degradê da fita de funil é dado, não decoração, e fica); roxo como acento; preenchimento âmbar sólido; texto abaixo de 14px; travessão.

## 8. Responsive Behavior

Até 960px a barra lateral vira gaveta com botão "Menu" no topo. Até 640px os cartões ficam em uma coluna, o título de página cai pra 26px, o indicador pra 24px e o padding de cartão pra 20px. Faixa de indicadores com quatro colunas acima de 1180px, duas até lá, uma no celular estreito. Nenhuma rolagem horizontal da página: tabela larga rola dentro do próprio contêiner. Alvos de toque de 44px. Respeitar `prefers-reduced-motion`.

## 9. Agent Prompt Guide

Ler este DESIGN.md e usar `tokens.css`, `fonts.css` e `components.css` desta pasta. Tokens nascem aqui e são exportados por `_scripts/export.mjs`; ninguém edita os derivados. Hanken Grotesk na interface, JetBrains Mono só em código. Teal é o único acento; as cores de dado têm significado fixo. Medir todo par de cor novo com `_scripts/medir-cor.mjs medir`. Conferir em 390, 768 e 1440px. Responder em português e sem travessão.
