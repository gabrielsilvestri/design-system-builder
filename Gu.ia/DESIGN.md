---
schema_version: 2.0
client_name: Gu.ia
client_slug: guia
description: "O painel da Gu.ia leva a profissional liberal do zero ao produto no ar, e o design system existe pra que cada passo dessa jornada se leia sem esforço."
language: pt-br
edition: "LILÁS 2026-09"
year: 2026

style_archetype: polaris-friendly
style_confidence: 84
default_theme: light
themes_available:
  - light

confidence_summary:
  high: 75
  medium: 23
  low: 5
  total: 103

colors:
  primary: "#7149ca"
  on-primary: "#f9f8fd"
  secondary: "#633ab6"
  on-secondary: "#f9f8fd"
  tertiary: "#ebe8fa"
  on-tertiary: "#633ab6"
  neutral: "#595669"
  surface: "#f4f3f9"
  on-surface: "#302d3e"
  surface-variant: "#fbfbfe"
  on-surface-variant: "#302d3e"
  outline: "#89869b"
  error: "#a23c3f"
  on-error: "#f9f8fd"
  success: "#246a43"
  warning: "#775520"
  info: "#633ab6"
  named:
    fundo:
      hex: "#f4f3f9"
      rgb: "244,243,249"
      oklch: "0.966 0.008 293"
      role: "fundo da página, o canvas do painel"
    superficie:
      hex: "#fbfbfe"
      rgb: "251,251,254"
      oklch: "0.988 0.004 293"
      role: "cartão e barra lateral (1.07:1 acima do fundo): a peça sobe, não desce"
    superficie-2:
      hex: "#eeecf5"
      rgb: "238,236,245"
      oklch: "0.948 0.012 293"
      role: "campo de formulário, hover de item e faixa recuada (1.06:1 abaixo do fundo)"
    folha:
      hex: "#fbf7ed"
      rgb: "251,247,237"
      oklch: "0.977 0.014 88"
      role: "a prévia do ebook e da página de vendas, o único tom quente do sistema (1.03:1 contra o fundo)"
    folha-linha:
      hex: "#e5dfd3"
      rgb: "229,223,211"
      oklch: "0.905 0.018 88"
      role: "divisória dentro da folha (1.24:1 sobre a folha), decorativa"
    linha:
      hex: "#dddce6"
      rgb: "221,220,230"
      oklch: "0.898 0.014 293"
      role: "divisória decorativa (1.23 fundo / 1.32 superfície / 1.16 superfície-2), abaixo do piso de controle de propósito"
    linha-controle:
      hex: "#89869b"
      rgb: "137,134,155"
      oklch: "0.630 0.032 293"
      role: "borda de campo, botão e caixa clicável (3.20 / 3.42 / 3.02), piso duro de 3:1"
    tinta:
      hex: "#302d3e"
      rgb: "48,45,62"
      oklch: "0.309 0.030 293"
      role: "texto principal (12.12 / 12.95 / 11.43), dentro da faixa 11 a 13"
    tinta-apoio:
      hex: "#595669"
      rgb: "89,86,105"
      oklch: "0.462 0.032 293"
      role: "texto secundário, legenda e descrição (6.43 / 6.87 / 6.07)"
    tinta-sutil:
      hex: "#696678"
      rgb: "105,102,120"
      oklch: "0.520 0.028 293"
      role: "rótulo, placeholder e metadado (5.05 / 5.39 / 4.76), o degrau mais claro que ainda passa"
    roxo:
      hex: "#7149ca"
      rgb: "113,73,202"
      oklch: "0.520 0.190 293"
      role: "fundo do botão primário e preenchimento de marca (5.43 / 5.80 / 5.12 como área)"
    roxo-hover:
      hex: "#5f35b1"
      rgb: "95,53,177"
      oklch: "0.455 0.185 293"
      role: "hover do botão primário: escurece, nunca clareia (tinta clara em cima = 7.55)"
    roxo-ativo:
      hex: "#4f2998"
      rgb: "79,41,152"
      oklch: "0.400 0.170 293"
      role: "botão primário pressionado (tinta clara em cima = 9.45)"
    roxo-tinta:
      hex: "#633ab6"
      rgb: "99,58,182"
      oklch: "0.470 0.185 293"
      role: "o roxo como TEXTO: link, rótulo de botão secundário, ícone ativo (6.77 / 7.23 / 6.39)"
    roxo-borda:
      hex: "#8b72d7"
      rgb: "139,114,215"
      oklch: "0.620 0.150 293"
      role: "borda do controle selecionado e do cartão em foco (3.47 / 3.71 / 3.27)"
    roxo-fundo:
      hex: "#ebe8fa"
      rgb: "235,232,250"
      oklch: "0.938 0.024 293"
      role: "preenchimento de chip, item atual e seleção; roxo-tinta em cima = 6.21, tinta em cima = 11.11. Nunca é texto"
    roxo-fundo-2:
      hex: "#ded9f7"
      rgb: "222,217,247"
      oklch: "0.898 0.042 293"
      role: "seleção pressionada e trilha de barra de progresso; roxo-tinta em cima = 5.47"
    claro:
      hex: "#f9f8fd"
      rgb: "249,248,253"
      oklch: "0.982 0.006 293"
      role: "tinta sobre o roxo cheio (5.67 sobre roxo), o branco tingido do sistema"
    verde:
      hex: "#246a43"
      rgb: "36,106,67"
      oklch: "0.470 0.095 155"
      role: "estado no ar e etapa concluída, como texto e ícone (5.92 / 6.32 / 5.58)"
    verde-fundo:
      hex: "#e1f2e6"
      rgb: "225,242,230"
      oklch: "0.945 0.024 155"
      role: "preenchimento do selo no ar; verde em cima = 5.61"
    verde-borda:
      hex: "#5a9570"
      rgb: "90,149,112"
      oklch: "0.620 0.085 155"
      role: "borda do selo no ar (3.19 / 3.41 / 3.01)"
    ambar:
      hex: "#775520"
      rgb: "119,85,32"
      oklch: "0.475 0.082 75"
      role: "aviso e pendência, como texto e ícone (6.13 / 6.55 / 5.78)"
    ambar-fundo:
      hex: "#f6ecd7"
      rgb: "246,236,215"
      oklch: "0.945 0.030 85"
      role: "preenchimento do aviso inline; âmbar em cima = 5.76"
    ambar-borda:
      hex: "#a6804a"
      rgb: "166,128,74"
      oklch: "0.625 0.085 75"
      role: "borda do aviso inline (3.28 / 3.50 / 3.09)"
    vermelho:
      hex: "#a23c3f"
      rgb: "162,60,63"
      oklch: "0.500 0.135 22"
      role: "erro e crédito no fim, como texto e ícone (5.85 / 6.25 / 5.52)"
    vermelho-fundo:
      hex: "#fbe7e6"
      rgb: "251,231,230"
      oklch: "0.945 0.022 22"
      role: "preenchimento do erro e da badge de crédito; vermelho em cima = 5.43"
    vermelho-borda:
      hex: "#be6563"
      rgb: "190,101,99"
      oklch: "0.610 0.115 22"
      role: "borda do campo com erro (3.64 / 3.89 / 3.43)"

typography:
  display-hero:
    fontFamily: 'Anybody,"Hanken Grotesk",sans-serif'
    fontSize: "48px"
    fontWeight: 800
    lineHeight: "1.05"
    letterSpacing: "-0.03em"
    role: "abertura de tela de comemoração e capa do brandbook"
  display-large:
    fontFamily: 'Anybody,"Hanken Grotesk",sans-serif'
    fontSize: "36px"
    fontWeight: 700
    lineHeight: "1.1"
    letterSpacing: "-0.028em"
    role: "número grande de contador e título de boas-vindas"
  section-heading:
    fontFamily: 'Anybody,"Hanken Grotesk",sans-serif'
    fontSize: "24px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "-0.022em"
    role: "h1 de tela: o nome da ferramenta em que a aluna está"
  subheading-large:
    fontFamily: 'Anybody,"Hanken Grotesk",sans-serif'
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "1.25"
    letterSpacing: "-0.018em"
    role: "h2 de bloco e título de cartão de lançamento"
  subheading:
    fontFamily: '"Hanken Grotesk",sans-serif'
    fontSize: "18px"
    fontWeight: 700
    lineHeight: "1.35"
    letterSpacing: "-0.012em"
    role: "h3 de cartão, onde o display já pesaria demais"
  body-large:
    fontFamily: '"Hanken Grotesk",sans-serif'
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0em"
    role: "frase de abertura de tela e texto do overlay de boas-vindas"
  body:
    fontFamily: '"Hanken Grotesk",sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0em"
    role: "corpo padrão do painel, campo de formulário e balão do chat"
  body-small:
    fontFamily: '"Hanken Grotesk",sans-serif'
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "0em"
    role: "descrição de cartão e texto de apoio dentro de peça densa"
  button:
    fontFamily: '"Hanken Grotesk",sans-serif'
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.005em"
    role: "rótulo de botão padrão, altura de alvo 46px"
  button-small:
    fontFamily: '"Hanken Grotesk",sans-serif'
    fontSize: "15px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0em"
    role: "rótulo de botão compacto, chip e filtro, altura de alvo 44px"
  link:
    fontFamily: '"Hanken Grotesk",sans-serif'
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "1.5"
    letterSpacing: "0em"
    role: "link em texto corrido, sempre sublinhado, na cor roxo-tinta"
  caption:
    fontFamily: '"Hanken Grotesk",sans-serif'
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.45"
    letterSpacing: "0.004em"
    role: "legenda e metadado no piso de 14px"
  caption-small:
    fontFamily: '"Hanken Grotesk",sans-serif'
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "1.4"
    letterSpacing: "0.008em"
    role: "legenda que precisa de um degrau a mais de presença; o piso não desce, o peso sobe"
  micro:
    fontFamily: '"Hanken Grotesk",sans-serif'
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "1.3"
    letterSpacing: "0.06em"
    role: "rótulo de grupo e eyebrow em caixa alta, ainda 14px"
  code-body:
    fontFamily: '"IBM Plex Mono",ui-monospace,monospace'
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "1.5"
    letterSpacing: "-0.01em"
    role: "número de crédito, valor e contador de caracteres"
  code-large:
    fontFamily: '"IBM Plex Mono",ui-monospace,monospace'
    fontSize: "20px"
    fontWeight: 500
    lineHeight: "1.4"
    letterSpacing: "-0.015em"
    role: "o endereço da página no ar, a linha que a aluna copia"

rounded:
  none: "0px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  "2xl": "32px"
  "3xl": "48px"
  "4xl": "64px"
  "5xl": "96px"
  gutter: "24px"
  container-padding: "32px"

custom:
  barra-larg: "268px"
  coluna: "1120px"
  cena: "radial-gradient(120% 68% at 50% -14%, color-mix(in srgb, var(--color-roxo-fundo) 62%, transparent) 0%, transparent 60%), radial-gradient(70% 50% at 108% 108%, color-mix(in srgb, var(--color-superficie-2) 70%, transparent) 0%, transparent 58%)"
  grao: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23g)' opacity='0.02'/%3E%3C/svg%3E\")"

breakpoints:
  mobile: "0px"
  tablet: "640px"
  desktop: "960px"
  wide: "1180px"

shadows:
  flat: "none"
  base: "0 1px 2px rgba(48,45,62,.06), 0 1px 3px -1px rgba(113,73,202,.08)"
  elevado: "0 2px 4px rgba(48,45,62,.05), 0 12px 24px -12px rgba(113,73,202,.20)"
  flutuante: "0 4px 8px rgba(48,45,62,.06), 0 24px 48px -20px rgba(113,73,202,.30)"
  folha: "0 1px 2px rgba(60,48,30,.07), 0 18px 36px -18px rgba(60,48,30,.22)"
  foco: "0 0 0 3px var(--color-roxo)"

motion:
  durations:
    fast: "140ms"
    base: "240ms"
    slow: "400ms"
  easings:
    ease-out: "cubic-bezier(0.22, 1, 0.36, 1)"
    ease-in-out: "cubic-bezier(0.65, 0, 0.35, 1)"
  reduced-motion-respected: true
  receitas:
    modal-open-dur: "250ms"
    modal-close-dur: "150ms"
    modal-scale: "0.96"
    modal-ease: "var(--ease-out)"
    toast-open: "350ms"
    toast-close: "250ms"
    toast-distance: "16px"
    toast-blur: "2px"
    toast-scale: "0.97"
    toast-ease: "var(--ease-out)"
    panel-open-dur: "var(--duration-slow)"
    panel-close-dur: "350ms"
    panel-ease: "var(--ease-out)"
    tabs-dur: "250ms"
    tabs-ease: "var(--ease-out)"

z-index:
  base: 0
  raised: 20
  sticky: 60
  gaveta: 125
  modal: 160
  toast: 180

opacity:
  invisible: "0"
  faint: "0.06"
  muted: "0.4"
  prominent: "0.72"
  full: "1"

preview_tokens:
  button_primary_bg: "#7149ca"
  button_primary_text: "#f9f8fd"
  button_primary_border: "#7149ca"
  button_secondary_bg: "#fbfbfe"
  button_secondary_text: "#302d3e"
  button_secondary_border: "#89869b"
  button_tertiary_text: "#633ab6"
  surface_bg: "#f4f3f9"
  card_bg: "#fbfbfe"
  text: "#302d3e"
  text_muted: "#595669"
  border: "#dddce6"
  accent: "#7149ca"
  button_radius: "8px"
  card_radius: "12px"
  input_radius: "8px"

components:
  button-primary:
    bg: "{colors.primary}"
    text: "{colors.on-primary}"
    border: "{colors.primary}"
    radius: "{rounded.sm}"
    padding: "8px 20px"
    min_height: "46px"
    font: "16px Hanken Grotesk weight 600"
    states:
      hover: { bg: "#5f35b1", border: "#5f35b1" }
      focus: { ring: "3px solid {colors.primary}", offset: "3px" }
      active: { bg: "#4f2998", transform: "scale(.975)" }
      disabled: { bg: "#eeecf5", text: "#696678", border: "#89869b", cursor: "not-allowed" }
  button-secondary:
    bg: "{colors.surface-variant}"
    text: "{colors.on-surface}"
    border: "{colors.outline}"
    radius: "{rounded.sm}"
    padding: "8px 20px"
    min_height: "46px"
    font: "16px Hanken Grotesk weight 600"
    states:
      hover: { bg: "#eeecf5", border: "#633ab6" }
      focus: { ring: "3px solid {colors.primary}", offset: "3px" }
      active: { transform: "scale(.975)" }
      disabled: { text: "#696678", border: "#89869b", cursor: "not-allowed" }
  button-ghost:
    bg: "transparent"
    text: "{colors.secondary}"
    border: "transparent"
    radius: "{rounded.sm}"
    padding: "8px 12px"
    min_height: "46px"
    font: "16px Hanken Grotesk weight 600"
    states:
      hover: { bg: "{colors.tertiary}" }
      focus: { ring: "3px solid {colors.primary}", offset: "3px" }
      active: { bg: "#ded9f7" }
      disabled: { text: "#696678", cursor: "not-allowed" }
  card:
    bg: "{colors.surface-variant}"
    border: "{colors.outline}"
    radius: "{rounded.md}"
    padding: "20px 24px"
    shadow: "{shadows.base}"
    states:
      hover: { border: "#8b72d7", shadow: "{shadows.elevado}" }
      focus: { ring: "3px solid {colors.primary}", offset: "3px" }
      selecionado: { bg: "{colors.tertiary}", border: "{colors.primary}" }
  input-text:
    bg: "{colors.surface-variant}"
    text: "{colors.on-surface}"
    border: "{colors.outline}"
    radius: "{rounded.sm}"
    padding: "12px 16px"
    min_height: "48px"
    font: "16px Hanken Grotesk weight 400"
    states:
      hover: { border: "#633ab6" }
      focus: { border: "{colors.primary}", ring: "{shadows.foco}" }
      error: { border: "#be6563", text: "{colors.error}" }
      disabled: { bg: "#eeecf5", text: "#696678", cursor: "not-allowed" }
  badge-default:
    bg: "{colors.surface-variant}"
    text: "{colors.neutral}"
    border: "{colors.outline}"
    radius: "{rounded.full}"
    padding: "4px 12px"
    font: "14px Hanken Grotesk weight 700"
    variants:
      no-ar: { bg: "#e1f2e6", text: "#246a43", border: "#5a9570" }
      andamento: { bg: "{colors.tertiary}", text: "{colors.secondary}", border: "#8b72d7" }
      exemplo: { bg: "{colors.tertiary}", text: "{colors.secondary}", border: "#8b72d7" }
      credito: { bg: "#fbe7e6", text: "{colors.error}", border: "#be6563" }
  nav-header:
    bg: "{colors.surface-variant}"
    text: "{colors.on-surface}"
    border_bottom: "{colors.outline}"
    height: "60px"
    shadow: "{shadows.base}"
  nav-item:
    bg: "transparent"
    text: "{colors.on-surface}"
    border: "transparent"
    radius: "{rounded.sm}"
    padding: "8px 12px"
    min_height: "44px"
    font: "16px Hanken Grotesk weight 500"
    states:
      hover: { bg: "#eeecf5" }
      focus: { ring: "3px solid {colors.primary}", offset: "3px" }
      atual: { bg: "{colors.tertiary}", border: "#8b72d7", text: "{colors.secondary}" }
  chip-opcao:
    bg: "{colors.surface-variant}"
    text: "{colors.on-surface}"
    border: "{colors.outline}"
    radius: "{rounded.full}"
    padding: "8px 16px"
    min_height: "44px"
    font: "15px Hanken Grotesk weight 600"
    states:
      hover: { border: "{colors.secondary}" }
      focus: { ring: "3px solid {colors.primary}", offset: "3px" }
      selecionado: { bg: "{colors.tertiary}", border: "{colors.primary}", text: "{colors.secondary}" }
      disabled: { text: "#696678", cursor: "not-allowed" }
  etapa-trilho:
    bg: "{colors.surface-variant}"
    border: "{colors.outline}"
    radius: "{rounded.sm}"
    padding: "8px 12px"
    min_height: "44px"
    font: "15px Hanken Grotesk weight 600"
    states:
      feita: { text: "#246a43", border: "#5a9570", bg: "#e1f2e6" }
      atual: { bg: "{colors.tertiary}", border: "{colors.primary}", text: "{colors.secondary}" }
      futura: { text: "#696678", border: "{colors.outline}" }
  folha-previa:
    bg: "#fbf7ed"
    text: "#302d3e"
    border: "#e5dfd3"
    radius: "{rounded.md}"
    padding: "40px"
    shadow: "{shadows.folha}"

logo:
  variants: [selo, wordmark, lockup-horizontal, favicon]
  formats: [svg]
  clear_space: "metade da altura do selo em todos os lados"
  prohibited:
    - "girar o selo ou aplicar sombra nele"
    - "trocar o roxo do selo por qualquer outra cor de acento"
    - "escrever Guia sem o ponto: o nome é Gu.ia, e o ponto é o que faz o olho ler guia e IA ao mesmo tempo"
    - "usar o selo sobre foto sem uma caixa sólida atrás"
  color_contexts:
    - { bg: "#fbfbfe", logo_color: "#7149ca" }
    - { bg: "#f4f3f9", logo_color: "#7149ca" }
    - { bg: "#7149ca", logo_color: "#f9f8fd" }

icons:
  inventory_count: 24
  canonical_viewbox: "24x24"
  stroke_width: "1.75px"
  sizes: [14, 16, 20, 24, 28]
  variants: [padrao, ativo, apoio, estado]
  min_touch_target: "44x44"

positioning:
  enemy: "A tela que a aluna abre sem saber qual é o próximo passo"
  audience: "Profissional liberal (nutricionista, psicóloga, veterinária) que nunca montou um produto digital"
  category: "Painel guiado de criação de infoproduto"
  claim: "Cada tela diz onde ela está, o que já ficou pronto e qual é o único próximo passo"

archetypes:
  - { name: "Caregiver", weight: 50, essence: "Segura a mão da aluna sem infantilizar" }
  - { name: "Sage", weight: 30, essence: "Sabe o caminho e mostra ele em ordem" }
  - { name: "Creator", weight: 20, essence: "O produto dela sai do painel pronto pra vender" }
archetype_synthesis: "Uma professora prática: acolhedora no tom, firme na sequência, e o resultado sai da aula com a aluna"

voice:
  brand_voice:
    traits: [brasileiro, claro, sem jargão, direto]
    tone: "Fala com uma aluna leiga, em frase curta, nomeando a coisa pelo que ela faz"
    example: "Seu ebook está pronto. Falta só escolher a capa."
  approved_vocabulary:
    - "lançamento"
    - "peça"
    - "próximo passo"
    - "no ar"
    - "crédito"
    - "ficha"
  banlist: [funil, onboarding, dashboard, copy, deploy, pipeline, en dash, em dash]

manifesto:
  quote: "A aluna nunca deveria precisar adivinhar qual é o próximo passo."
  body_paragraphs:
    - "O painel não é uma caixa de ferramentas: é uma sequência. Cada tela mostra onde ela está e o que vem depois."
    - "Cor sozinha nunca conta o estado. Se algo está no ar, parado ou com erro, tem ícone e palavra junto."
    - "Toda cor tem razão de contraste medida, porque quem usa o painel usa no celular, na sala de espera, com a luz do lado errado."

moodboard:
  categories:
    - name: "Painel guiado de produto"
      references: ["Shopify Polaris", "Notion", "Linear"]
      influences: ["item de navegação com estado atual explícito", "estado vazio que ensina em vez de esvaziar"]
    - name: "Material impresso da Claudia"
      references: ["capa do infoproduto", "arte da Comunidade", "avatar da Gu.ia"]
      influences: ["o roxo como assinatura", "calor no material que a aluna leva pra fora do painel"]
    - name: "Papel dentro da tela"
      references: ["prévia de documento", "prova de impressão"]
      influences: ["a folha quente que separa o que é produto do que é painel"]
  design_principles:
    - "Um acento só, e ele é roxo"
    - "Piso de 14px em qualquer texto lido"
    - "Texto principal entre 11:1 e 13:1, nunca tinta pura sobre branco puro"
    - "Estado sempre em cor mais ícone mais palavra"
    - "Profundidade por elevação em três planos, sombra tingida de roxo"

evidence:
  - { metric: "9", context: "ferramentas na grade da home, de entrevista a postagens", source: "inventário do protótipo E" }
  - { metric: "11 a 13:1", context: "faixa de contraste do texto principal, medida nas três superfícies", source: "_scripts/medir-cor.mjs" }
  - { metric: "14px", context: "piso de tamanho em rótulo, badge, legenda e cabeçalho de tabela", source: "régua visual da casa" }

contrast_notes:
  color-primary: "roxo de marca, fundo do botão primário; tinta clara em cima = 5.67:1"
  color-on-primary: "5.67:1 sobre primary, 7.55:1 sobre o hover, 9.45:1 sobre o pressionado"
  color-secondary: "o roxo como texto: 6.77 fundo / 7.23 superfície / 6.39 superfície-2"
  color-on-secondary: "7.07:1 sobre secondary, usado quando o roxo escuro vira área"
  color-tertiary: "lilás de preenchimento, nunca texto; secondary em cima = 6.21:1"
  color-on-tertiary: "6.21:1 sobre tertiary"
  color-neutral: "texto secundário: 6.43 fundo / 6.87 superfície / 6.07 superfície-2"
  color-surface: "fundo da página, a superfície de referência das medições"
  color-on-surface: "texto principal: 12.12 fundo / 12.95 superfície / 11.43 superfície-2, dentro da faixa 11 a 13"
  color-surface-variant: "cartão e barra lateral, 1.07:1 acima do fundo"
  color-on-surface-variant: "12.95:1 sobre o cartão"
  color-outline: "borda de controle: 3.20 fundo / 3.42 superfície / 3.02 superfície-2, piso de 3:1"
  color-error: "erro como texto e ícone: 5.85 / 6.25 / 5.52"
  color-on-error: "6.11:1 sobre error"
  color-success: "estado no ar: 5.92 / 6.32 / 5.58"
  color-warning: "aviso e pendência: 6.13 / 6.55 / 5.78"
  color-info: "informação reaproveita o roxo-tinta: 6.77 / 7.23 / 6.39"
  color-fundo: "canvas da página; toda tinta abaixo é medida contra ele primeiro"
  color-superficie: "1.07:1 acima do fundo: o cartão sobe, não desce"
  color-superficie-2: "1.06:1 abaixo do fundo: campo, hover e faixa recuada"
  color-folha: "1.03:1 contra o fundo; separa-se por borda e elevação, não por luminância"
  color-folha-linha: "1.24:1 sobre a folha, divisória decorativa"
  color-linha: "1.23 / 1.32 / 1.16, abaixo do piso de controle de propósito: é divisória, não desenha controle"
  color-linha-controle: "3.20 / 3.42 / 3.02, piso duro de 3:1 da WCAG 1.4.11"
  color-tinta: "12.12 / 12.95 / 11.43, a faixa 11 a 13 fechada dos dois lados"
  color-tinta-apoio: "6.43 / 6.87 / 6.07"
  color-tinta-sutil: "5.05 / 5.39 / 4.76, e 4.63 sobre o lilás de chip: o degrau mais claro que ainda passa"
  color-roxo: "como área: 5.43 / 5.80 / 5.12; tinta clara em cima = 5.67"
  color-roxo-hover: "tinta clara em cima = 7.55; o hover escurece, nunca clareia"
  color-roxo-ativo: "tinta clara em cima = 9.45"
  color-roxo-tinta: "6.77 / 7.23 / 6.39, e 6.98 sobre a folha"
  color-roxo-borda: "3.47 / 3.71 / 3.27, e 3.18 sobre o lilás de chip"
  color-roxo-fundo: "preenchimento; roxo-tinta em cima = 6.21, tinta em cima = 11.11"
  color-roxo-fundo-2: "preenchimento pressionado; roxo-tinta em cima = 5.47, tinta em cima = 9.79"
  color-claro: "5.67 sobre o roxo, 6.18 sobre o verde, 6.11 sobre o vermelho"
  color-verde: "5.92 / 6.32 / 5.58, e 5.61 sobre o próprio preenchimento"
  color-verde-fundo: "preenchimento do selo no ar; verde em cima = 5.61"
  color-verde-borda: "3.19 / 3.41 / 3.01"
  color-ambar: "6.13 / 6.55 / 5.78, e 5.76 sobre o próprio preenchimento"
  color-ambar-fundo: "preenchimento do aviso; âmbar em cima = 5.76"
  color-ambar-borda: "3.28 / 3.50 / 3.09"
  color-vermelho: "5.85 / 6.25 / 5.52, e 5.43 sobre o próprio preenchimento"
  color-vermelho-fundo: "preenchimento do erro e da badge de crédito; vermelho em cima = 5.43"
  color-vermelho-borda: "3.64 / 3.89 / 3.43"
---

## 1. Visual Theme & Atmosphere

O painel da Gu.ia é uma sala de aula prática em forma de software: a aluna entra sem saber montar um produto digital e sai com ebook, oferta, página de vendas e postagens no ar. O sistema visual existe pra sustentar essa sequência. A base é clara, levemente lilás, e a única cor de acento é o roxo que a Claudia já usa em todo material dela.

O painel novo troca a base escura por uma base clara por três motivos declarados no briefing: a aluna abre o painel no celular em qualquer luz, boa parte do conteúdo que ela gera é documento (que no fim vira papel branco), e a base clara deixa o roxo trabalhar como acento em vez de competir com um fundo que já é roxo.

**Características principais:**

- Uma cor de acento só. O roxo aparece em botão primário, item atual, foco e link, e em nada mais. Não há segunda família de acento: o que precisa de destaque sem ser ação vira neutro com peso.
- Neutros tingidos no mesmo matiz do roxo (H 293 em OKLCH), com croma abaixo de 0.035. Não há `#ffffff` nem `#000000` em lugar nenhum do sistema.
- Três superfícies muito próximas (1.06:1 e 1.07:1 entre si) e uma quarta quente, a folha. A separação entre elas não vem de luminância, vem de borda mais elevação.
- Profundidade em três planos (base, elevado, flutuante) com sombra em camadas tingida de roxo. O fundo da página carrega um radial discreto e um grão SVG a 0.02 de opacidade, nunca um grid.
- Estado nunca é só cor: cada um carrega ícone e palavra junto.

## 2. Color Palette & Roles

### Primary

O roxo `#7149ca` é a identidade. A proveniência é declarada: o matiz canônico vem do `--violet` de produção (`#7C3AED`, H 293 em OKLCH), que é o roxo que a Claudia reconhece como dela. O que não veio de lá foi o valor: `#7C3AED` é violet-600 do Tailwind, com saturação HSL de 83 por cento, acima do teto de 80 da régua da casa. A escala aqui é derivada em OKLCH no mesmo matiz, com croma reduzido: `#7149ca` mede 55 por cento de saturação HSL e mantém o reconhecimento da marca.

### O roxo tem quatro papéis, e por isso quatro tokens

Essa separação é o que faz o acento único caber no painel inteiro sem virar ruído:

- `--color-roxo` (#7149ca) é **área**: fundo do botão primário, preenchimento do selo da marca, barra de progresso. A tinta clara em cima mede 5.67:1.
- `--color-roxo-tinta` (#633ab6) é **texto**: link, rótulo de botão fantasma, ícone do item atual, número de etapa. Mede 6.77 sobre o fundo e 7.23 sobre o cartão.
- `--color-roxo-borda` (#8b72d7) é **limite de controle selecionado**, e fica em 3.47 / 3.71 / 3.27, acima do piso de 3:1.
- `--color-roxo-fundo` (#ebe8fa) e `--color-roxo-fundo-2` (#ded9f7) são **preenchimento**: chip selecionado, item atual da navegação, trilha de progresso. Nunca são texto, e o lint humano reprova o uso deles como `color`.

### Neutral Scale

Três tintas: `#302d3e` (principal, 12.12 / 12.95 / 11.43), `#595669` (apoio, 6.43 / 6.87 / 6.07) e `#696678` (rótulo, 5.05 / 5.39 / 4.76). A faixa do texto principal é fechada dos dois lados: piso 11 porque abaixo disso o degrau para o texto de apoio some, teto 13 porque tinta pura sobre branco puro espalha o traço em leitura longa.

### Surface & Borders

`#f4f3f9` é a página, `#fbfbfe` é o cartão e a barra lateral, `#eeecf5` é o campo de formulário e o hover de item. As três ficam a 1.06:1 e 1.07:1 umas das outras: o que faz um cartão ler como cartão é a borda mais a sombra de plano base, não a diferença de fundo. Há duas linhas e elas servem a coisas diferentes: `--color-linha` (#dddce6, 1.23:1) é divisória decorativa e fica abaixo do piso de propósito, e `--color-linha-controle` (#89869b, 3.20:1) é a borda que desenha um controle clicável e obedece à WCAG 1.4.11.

### A folha

A prévia do ebook e da página de vendas precisa ler como papel dentro de um painel que agora também é claro. A distinção é tripla, porque só uma não bastaria: tom quente (`#fbf7ed`, matiz 88, o único desvio do matiz roxo em todo o sistema), borda própria (`#e5dfd3`) e a sombra `folha`, mais funda e neutra-quente que as do painel. Contra a página ela mede 1.03:1, então quem separa é a borda e a elevação.

### Interactive & Status

Verde `#246a43`, âmbar `#775520` e vermelho `#a23c3f` são dessaturados de propósito (croma OKLCH entre 0.082 e 0.135, contra 0.190 do roxo) pra não virarem segundo acento. Cada um tem o trio completo: tinta, preenchimento e borda de 3:1. Informação não tem família própria: `info` reaproveita o roxo-tinta, porque o sistema tem um acento só. O laranja `#FF6B35` do botão de reportar problema em produção não entra: o que era laranja vira neutro, e a ação continua sendo uma ação de texto.

## 3. Typography Rules

### Font Family

**Anybody** no display, **Hanken Grotesk** no corpo, **IBM Plex Mono** em número e endereço. As três estão na lista de preferidas da casa, as três são embutíveis offline em woff2 latin e latin-ext, e as três estão em `assets/fontes/`.

Por que essas e não as de produção: a Inter está na blacklist da casa e não entra nem como fallback. A Hanken Grotesk ficou porque já está embutida no protótipo E, tem altura de x alta e aberturas abertas, que é o que o corpo do painel precisa: a aluna lê frase curta em tela pequena. A Anybody entrou no display porque é o par padrão de display da casa, tem personalidade própria nos terminais e no `g`, e contrasta de verdade com a Hanken em vez de repetir o mesmo gênero de grotesca. A IBM Plex Mono ficou por já estar embutida e por ter altura de x suficiente pra sustentar o piso de mono.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| display-hero | Anybody | 48px | 800 | 1.05 | -0.03em | tela de comemoração |
| display-large | Anybody | 36px | 700 | 1.1 | -0.028em | contador e boas-vindas |
| section-heading | Anybody | 24px | 700 | 1.2 | -0.022em | h1 de tela |
| subheading-large | Anybody | 20px | 700 | 1.25 | -0.018em | h2 de bloco |
| subheading | Hanken Grotesk | 18px | 700 | 1.35 | -0.012em | h3 de cartão |
| body-large | Hanken Grotesk | 18px | 400 | 1.6 | 0 | abertura de tela |
| body | Hanken Grotesk | 16px | 400 | 1.6 | 0 | corpo padrão |
| body-small | Hanken Grotesk | 15px | 400 | 1.5 | 0 | descrição de cartão |
| button | Hanken Grotesk | 16px | 600 | 1.2 | -0.005em | alvo de 46px |
| button-small | Hanken Grotesk | 15px | 600 | 1.2 | 0 | alvo de 44px |
| link | Hanken Grotesk | 16px | 600 | 1.5 | 0 | sublinhado, roxo-tinta |
| caption | Hanken Grotesk | 14px | 400 | 1.45 | 0.004em | legenda no piso |
| caption-small | Hanken Grotesk | 14px | 500 | 1.4 | 0.008em | piso mantido, peso sobe |
| micro | Hanken Grotesk | 14px | 700 | 1.3 | 0.06em | rótulo em caixa alta |
| code-body | IBM Plex Mono | 16px | 500 | 1.5 | -0.01em | crédito, valor, contador |
| code-large | IBM Plex Mono | 20px | 500 | 1.4 | -0.015em | endereço no ar |

### Principles

- **14px é piso duro**, e o piso inclui rótulo, badge, legenda, cabeçalho de tabela e contador de caracteres. Quando um texto precisa de menos presença, desce de cor (tinta para tinta-apoio para tinta-sutil) ou de peso, nunca de tamanho.
- **Mono tem piso próprio de 16px.** A faixa dominante de tinta de uma monoespaçada em caixa baixa mede menor que a de uma sans proporcional no mesmo corpo, então 14px de mono lê como 12 de sans.
- **Tracking é específico do tamanho.** Negativo só no display (de -0.018em a -0.03em, mais apertado quanto maior), zero no corpo, positivo pequeno em legenda e rótulo em caixa alta.
- **Entrelinha cresce quando o tamanho cai:** 1.05 no hero, 1.6 no corpo.
- **Medida de 45 a 75 caracteres**, com `max-width` em `ch` no próprio parágrafo, nunca no container. O padrão do painel é 66ch no corpo e 40ch em descrição de cartão.
- **Duas famílias que não se confundem.** A Anybody não desce abaixo de 20px e nunca entra em corpo, rótulo ou botão; a Hanken não sobe acima de 18px.

## 4. Components

### Buttons

Três níveis: primário (roxo cheio, tinta clara, 46px de altura), secundário (superfície de cartão com borda de 3:1) e fantasma (sem fundo, rótulo em roxo-tinta). Uma tela tem um botão primário só, e o rodapé de ficha de lançamento é o exemplo canônico: a etapa inteira termina em uma ação. O hover do primário escurece (`#5f35b1`), nunca clareia, e o pressionado escurece mais (`#4f2998`); a razão é que clarear o fundo derruba o contraste do rótulo justo quando o dedo está em cima. Desabilitado não usa opacidade: usa superfície recuada com tinta-sutil, que continua medindo 4.76:1.

### Cards & Containers

Fundo de cartão, borda de 3:1, raio de 12px, sombra de plano base. O hover troca a borda por roxo-borda e sobe pro plano elevado. O cartão selecionável (opção de tema, capa de ebook) ganha preenchimento lilás mais borda roxa cheia, e a marca de seleção é um círculo com o traço dentro, porque cor sozinha não conta estado.

### Inputs & Forms

Campo com fundo recuado (`#eeecf5`), borda de controle e 48px de altura. O foco é duplo: a borda vira roxo cheio e um anel de 3px em roxo cheio aparece fora dela, medindo 5.80:1 contra o cartão e 5.43:1 contra a página. O anel já foi translúcido a 28 por cento e media 1.52:1, abaixo do piso de 3:1 que a WCAG 2.4.11 pede pro indicador de foco. O erro é borda `#be6563` mais uma linha de texto em vermelho com ícone, nunca só a borda vermelha. O contador de caracteres é mono, 16px, e vira tinta de aviso quando passa do limite, com a palavra junto.

### Badges / Tags / Pills

Pílula, peso 700, 14px. Quatro variantes: neutra (superfície e borda de controle), no ar (verde), em andamento e exemplo (lilás com roxo-tinta) e crédito (vermelho dessaturado). A badge de crédito aparece uma vez por tela, no máximo, porque o vermelho é o único token que interrompe a leitura de propósito.

### Navigation

Barra lateral fixa de 268px com seções rotuladas em micro caixa alta, item de 44px de altura e três estados visíveis: normal, hover (superfície recuada) e atual (preenchimento lilás, borda roxo-borda, ícone e rótulo em roxo-tinta, mais `aria-current="page"`). Abaixo de 960px a barra vira gaveta com véu e uma barra de topo de 60px.

### Feedback

Toast flutuante com sombra do plano flutuante e texto no piso de 16px, aviso inline em âmbar com ícone, e o estado vazio que nunca é vazio: mostra uma peça de exemplo com a badge "exemplo" e borda tracejada, porque a aluna aprende o formato vendo um preenchido.

### Tour e véu

O balão do tour é plano flutuante com borda roxa cheia, dois botões (Próximo e Pular) e o véu que bloqueia a tela é a tinta principal a 42 por cento, nunca preto. O overlay de boas-vindas tem um botão só.

## 5. Layout Principles

### Spacing System

Escala de 4 em 4 até 24, depois dobrando: 4, 8, 12, 16, 24, 32, 48, 64, 96. O corpo da tela respira em 32px no desktop e 16px no celular. Entre blocos, 32px; dentro de um bloco, 12px.

### Grid & Container

Barra lateral de 268px fixa, palco com coluna máxima de 1120px centralizada. As grades são `auto-fill` com mínimo declarado (320px em cartão de lançamento, 248px em peça, três colunas fixas na grade de ferramentas), porque a quantidade de peças muda a cada lançamento e a grade não pode exigir número par.

### Whitespace Philosophy

O respiro entre blocos é maior que o respiro interno, pra cada bloco ler como uma coisa. Tela de formulário tem coluna estreita (760px) mesmo em monitor largo: a aluna responde uma pergunta por vez e a linha longa a faz perder o lugar.

### Border Radius Scale

8px em botão, campo, chip e item de navegação; 12px em cartão e caixa; 16px em modal e balão; 24px em superfície grande; pílula em badge e filtro. Nada de raio entre esses degraus.

## 6. Depth & Elevation

| Plano | Sombra | Uso |
|---|---|---|
| flat | none | faixa recuada, campo, item de lista |
| base | 0 1px 2px rgba(48,45,62,.06), 0 1px 3px -1px rgba(113,73,202,.08) | cartão, barra lateral, barra de topo |
| elevado | 0 2px 4px rgba(48,45,62,.05), 0 12px 24px -12px rgba(113,73,202,.20) | cartão em hover, rodapé de próximo passo, gaveta |
| flutuante | 0 4px 8px rgba(48,45,62,.06), 0 24px 48px -20px rgba(113,73,202,.30) | toast, balão do tour, modal, chat |
| folha | 0 1px 2px rgba(60,48,30,.07), 0 18px 36px -18px rgba(60,48,30,.22) | prévia do ebook e da página de vendas |
| foco | 0 0 0 3px var(--color-roxo) | anel de foco de campo |

### Shadow Philosophy

Toda sombra é em duas camadas (uma curta de contato, uma longa de ambiente) e tingida: a camada longa carrega o roxo da marca a 8, 20 e 30 por cento, nunca cinza chapado. Numa UI clara com três superfícies a 1.07:1 umas das outras, a sombra é o que faz a hierarquia: sem ela o painel inteiro vira uma folha só. A folha do ebook é a única exceção de matiz, com sombra quente, pelo mesmo motivo que ela tem tom próprio.

O fundo da página não é chapado: leva um radial discreto em lilás a 0.06 no alto e um grão SVG a 0.02 de opacidade. Não há grid de fundo, glow, gradiente neon nem blob em lugar nenhum.

## 7. Do's and Don'ts

### Do's

- Derive qualquer cor nova em OKLCH no matiz 293, o mesmo do `--violet` de produção, e meça com `node _scripts/medir-cor.mjs medir <tinta> #f4f3f9 #fbfbfe #eeecf5` antes de usar.
- Segure o texto principal entre 11:1 e 13:1 nas TRÊS superfícies claras, porque metade do texto do painel mora dentro de cartão.
- Use `--color-roxo-tinta` (#633ab6) quando o roxo for texto e `--color-roxo` (#7149ca) quando ele for área: são dois tokens porque são dois trabalhos.
- Ponha borda de 3:1 (`--color-linha-controle`) em tudo que é clicável e deixe `--color-linha` (1.23:1) só nas divisórias, que não desenham controle nenhum.
- Escreva estado com cor mais ícone mais palavra: "No ar" com o círculo de confirmação, "Faltam 2 etapas" com o contador, "Crédito acabando" com o raio.
- Faça o hover do botão primário escurecer para `#5f35b1`, porque clarear derruba o contraste do rótulo no momento em que o dedo está em cima.
- Mantenha a folha do ebook separada por três sinais ao mesmo tempo (tom quente, borda própria, sombra funda), já que contra a página ela mede só 1.03:1.

### Don'ts

- Nunca use `--color-roxo-fundo` (#ebe8fa) ou `--color-roxo-fundo-2` (#ded9f7) como cor de texto: eles são preenchimento de chip e de item atual, e como tinta ficam abaixo de 1.5:1.
- Nunca traga de volta o laranja `#FF6B35` do botão de reportar problema: o sistema tem um acento só, e o que era laranja vira neutro com peso.
- Nunca use `#7C3AED` cru: é violet-600 do Tailwind, marca 83 por cento de saturação HSL e passa do teto de 80 da casa. O matiz dele fica, o valor não.
- Nunca escreva texto acima de 13:1 sobre o cartão `#fbfbfe`: uma tinta mais escura que `#302d3e` chega em tinta quase pura sobre branco quase puro, que é o que a régua da casa reprova.
- Nunca desça rótulo, badge, legenda ou cabeçalho de tabela abaixo de 14px, nem mono abaixo de 16px: a hierarquia baixa por cor e por peso, nunca por tamanho.
- Nunca ponha a Anybody em corpo, rótulo ou botão: ela é display acima de 20px, e abaixo disso os terminais dela fecham as contraformas.
- Nunca use emoji como ícone em badge, cartão ou item de navegação: o inventário é SVG de traço 1.75 em viewBox de 24.
- Nunca separe cartão de página por diferença de fundo: as superfícies estão a 1.07:1 de propósito, e quem separa é a borda mais a sombra do plano base.

## 8. Responsive Behavior

### Breakpoints

| Nome | Largura | Mudanças |
|---|---|---|
| mobile | 0px | coluna única, grades em 1, h1 desce para 20px |
| tablet | 640px | contadores em 2 colunas, grades de peça em 2 |
| desktop | 960px | barra lateral fixa aparece, gaveta some, grade de ferramentas em 3 |
| wide | 1180px | mesa do ebook em 3 colunas, palco chega em 1120px |

### Touch Targets

Todo controle é elemento interativo de verdade com 44px de altura mínima, e o botão padrão tem 46px. Ícone sozinho tem caixa de 44x44 com `aria-label`. O alvo de toque nunca encolhe no celular: o que encolhe é o texto ao redor dele.

### Collapsing Strategy

Abaixo de 960px a barra lateral vira gaveta (véu com a tinta principal a 62 por cento, foco preso dentro, Esc fecha) e uma barra de topo de 60px assume o nome e o botão do menu. A mesa do ebook colapsa de três colunas pra uma, com a lista de capítulos virando uma faixa rolável de 216px pra que o texto fique a uma dobra de distância.

### Image Behavior

A única imagem do painel é a capa do ebook, que é composta em HTML (faixa, título, autora) em vez de raster, então ela escala com a tipografia. Prévia de peça longa usa proporção declarada (3/4 na capa, 9/16 no story) pra não pular durante o carregamento.

## 9. Agent Prompt Guide

Cole isto no início do chat com qualquer LLM. Substitua `{{TAREFA}}` pela sua pergunta.

---

Você é designer do painel da **Gu.ia**, o SaaS que leva uma profissional liberal leiga do zero ao produto no ar. A UI é clara, o acento é um só (roxo), e toda cor tem razão de contraste medida.

### Referência rápida de cor

- Superfícies: `#f4f3f9` página, `#fbfbfe` cartão e barra lateral, `#eeecf5` campo e hover, `#fbf7ed` a folha do ebook (única quente).
- Tinta: `#302d3e` principal (12.12 / 12.95 / 11.43), `#595669` apoio, `#696678` rótulo. Nunca acima de 13:1 nem abaixo de 4.5:1.
- Roxo: `#7149ca` como área, `#633ab6` como texto, `#8b72d7` como borda selecionada, `#ebe8fa` e `#ded9f7` como preenchimento (nunca texto).
- Linhas: `#dddce6` divisória decorativa, `#89869b` borda de controle (3:1).
- Estado: verde `#246a43`, âmbar `#775520`, vermelho `#a23c3f`, cada um com preenchimento e borda próprios, sempre com ícone e palavra junto.

### Tipografia

Anybody no display (nunca abaixo de 20px), Hanken Grotesk no corpo (nunca acima de 18px), IBM Plex Mono em número e endereço (piso de 16px). Piso geral de 14px, incluindo rótulo, badge, legenda e cabeçalho de tabela. Hierarquia desce por cor e peso, nunca por tamanho.

### Prompts de componente de exemplo

- "monte um cartão de lançamento: fundo #fbfbfe, borda #89869b, raio 12, sombra base, manchete em Hanken 18/700, selo de estado com ícone, e o trilho de etapas embaixo com feita em verde, atual em roxo e futura em #dddce6."
- "faça o item atual da barra lateral: preenchimento #ebe8fa, borda #8b72d7, ícone e rótulo em #633ab6, 44px de altura, com aria-current page."
- "escreva um estado vazio de biblioteca que mostre uma peça de exemplo com badge exemplo e borda tracejada, nunca uma tela sem nada."

### Guia de iteração

1. Cada tinta está entre 4.5:1 e 13:1 sobre as três superfícies claras, e o texto principal entre 11 e 13?
2. Todo controle clicável tem borda de 3:1 e alvo de 44px, com hover, foco visível, pressionado e desabilitado?
3. Entrou alguma segunda cor de acento? Se sim, ela vira neutro com peso ou vira estado com ícone.
4. Algum texto caiu abaixo de 14px (ou de 16px em mono)?
5. O roxo apareceu como texto usando o token de área em vez do de tinta?

### Tarefa

{{TAREFA}}

Responda em português brasileiro, com acentos corretos, sem en dash nem em dash. Se precisar de placeholder, marque como `[a definir]` em vez de inventar.

---
