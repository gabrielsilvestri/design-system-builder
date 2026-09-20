/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./brandbook/**/*.html"],
  theme: {
      "extend": {
          "colors": {
              "primary": "var(--color-primary)",  // roxo de marca, fundo do botão primário; tinta clara em cima = 5.67:1
              "on-primary": "var(--color-on-primary)",  // 5.67:1 sobre primary, 7.55:1 sobre o hover, 9.45:1 sobre o pressionado
              "secondary": "var(--color-secondary)",  // o roxo como texto: 6.77 fundo / 7.23 superfície / 6.39 superfície-2
              "on-secondary": "var(--color-on-secondary)",  // 7.07:1 sobre secondary, usado quando o roxo escuro vira área
              "tertiary": "var(--color-tertiary)",  // lilás de preenchimento, nunca texto; secondary em cima = 6.21:1
              "on-tertiary": "var(--color-on-tertiary)",  // 6.21:1 sobre tertiary
              "neutral": "var(--color-neutral)",  // texto secundário: 6.43 fundo / 6.87 superfície / 6.07 superfície-2
              "surface": "var(--color-surface)",  // fundo da página, a superfície de referência das medições
              "on-surface": "var(--color-on-surface)",  // texto principal: 12.12 fundo / 12.95 superfície / 11.43 superfície-2, dentro da faixa 11 a 13
              "surface-variant": "var(--color-surface-variant)",  // cartão e barra lateral, 1.07:1 acima do fundo
              "on-surface-variant": "var(--color-on-surface-variant)",  // 12.95:1 sobre o cartão
              "outline": "var(--color-outline)",  // borda de controle: 3.20 fundo / 3.42 superfície / 3.02 superfície-2, piso de 3:1
              "error": "var(--color-error)",  // erro como texto e ícone: 5.85 / 6.25 / 5.52
              "on-error": "var(--color-on-error)",  // 6.11:1 sobre error
              "success": "var(--color-success)",  // estado no ar: 5.92 / 6.32 / 5.58
              "warning": "var(--color-warning)",  // aviso e pendência: 6.13 / 6.55 / 5.78
              "info": "var(--color-info)",  // informação reaproveita o roxo-tinta: 6.77 / 7.23 / 6.39
              "named": {
                  "fundo": "var(--color-fundo)",  // canvas da página; toda tinta abaixo é medida contra ele primeiro
                  "superficie": "var(--color-superficie)",  // 1.07:1 acima do fundo: o cartão sobe, não desce
                  "superficie-2": "var(--color-superficie-2)",  // 1.06:1 abaixo do fundo: campo, hover e faixa recuada
                  "folha": "var(--color-folha)",  // 1.03:1 contra o fundo; separa-se por borda e elevação, não por luminância
                  "folha-linha": "var(--color-folha-linha)",  // 1.24:1 sobre a folha, divisória decorativa
                  "linha": "var(--color-linha)",  // 1.23 / 1.32 / 1.16, abaixo do piso de controle de propósito: é divisória, não desenha controle
                  "linha-controle": "var(--color-linha-controle)",  // 3.20 / 3.42 / 3.02, piso duro de 3:1 da WCAG 1.4.11
                  "tinta": "var(--color-tinta)",  // 12.12 / 12.95 / 11.43, a faixa 11 a 13 fechada dos dois lados
                  "tinta-apoio": "var(--color-tinta-apoio)",  // 6.43 / 6.87 / 6.07
                  "tinta-sutil": "var(--color-tinta-sutil)",  // 5.05 / 5.39 / 4.76, e 4.63 sobre o lilás de chip: o degrau mais claro que ainda passa
                  "roxo": "var(--color-roxo)",  // como área: 5.43 / 5.80 / 5.12; tinta clara em cima = 5.67
                  "roxo-hover": "var(--color-roxo-hover)",  // tinta clara em cima = 7.55; o hover escurece, nunca clareia
                  "roxo-ativo": "var(--color-roxo-ativo)",  // tinta clara em cima = 9.45
                  "roxo-tinta": "var(--color-roxo-tinta)",  // 6.77 / 7.23 / 6.39, e 6.98 sobre a folha
                  "roxo-borda": "var(--color-roxo-borda)",  // 3.47 / 3.71 / 3.27, e 3.18 sobre o lilás de chip
                  "roxo-fundo": "var(--color-roxo-fundo)",  // preenchimento; roxo-tinta em cima = 6.21, tinta em cima = 11.11
                  "roxo-fundo-2": "var(--color-roxo-fundo-2)",  // preenchimento pressionado; roxo-tinta em cima = 5.47, tinta em cima = 9.79
                  "claro": "var(--color-claro)",  // 5.67 sobre o roxo, 6.18 sobre o verde, 6.11 sobre o vermelho
                  "verde": "var(--color-verde)",  // 5.92 / 6.32 / 5.58, e 5.61 sobre o próprio preenchimento
                  "verde-fundo": "var(--color-verde-fundo)",  // preenchimento do selo no ar; verde em cima = 5.61
                  "verde-borda": "var(--color-verde-borda)",  // 3.19 / 3.41 / 3.01
                  "ambar": "var(--color-ambar)",  // 6.13 / 6.55 / 5.78, e 5.76 sobre o próprio preenchimento
                  "ambar-fundo": "var(--color-ambar-fundo)",  // preenchimento do aviso; âmbar em cima = 5.76
                  "ambar-borda": "var(--color-ambar-borda)",  // 3.28 / 3.50 / 3.09
                  "vermelho": "var(--color-vermelho)",  // 5.85 / 6.25 / 5.52, e 5.43 sobre o próprio preenchimento
                  "vermelho-fundo": "var(--color-vermelho-fundo)",  // preenchimento do erro e da badge de crédito; vermelho em cima = 5.43
                  "vermelho-borda": "var(--color-vermelho-borda)"  // 3.64 / 3.89 / 3.43
              }
          },
          "fontFamily": {
              "display-hero": "var(--font-display-hero)",
              "display-large": "var(--font-display-large)",
              "section-heading": "var(--font-section-heading)",
              "subheading-large": "var(--font-subheading-large)",
              "subheading": "var(--font-subheading)",
              "body-large": "var(--font-body-large)",
              "body": "var(--font-body)",
              "body-small": "var(--font-body-small)",
              "button": "var(--font-button)",
              "button-small": "var(--font-button-small)",
              "link": "var(--font-link)",
              "caption": "var(--font-caption)",
              "caption-small": "var(--font-caption-small)",
              "micro": "var(--font-micro)",
              "code-body": "var(--font-code-body)",
              "code-large": "var(--font-code-large)"
          },
          "fontSize": {
              "display-hero": [
                  "var(--text-display-hero)",
                  {
                      "lineHeight": "var(--leading-display-hero)",
                      "letterSpacing": "var(--tracking-display-hero)"
                  }
              ],
              "display-large": [
                  "var(--text-display-large)",
                  {
                      "lineHeight": "var(--leading-display-large)",
                      "letterSpacing": "var(--tracking-display-large)"
                  }
              ],
              "section-heading": [
                  "var(--text-section-heading)",
                  {
                      "lineHeight": "var(--leading-section-heading)",
                      "letterSpacing": "var(--tracking-section-heading)"
                  }
              ],
              "subheading-large": [
                  "var(--text-subheading-large)",
                  {
                      "lineHeight": "var(--leading-subheading-large)",
                      "letterSpacing": "var(--tracking-subheading-large)"
                  }
              ],
              "subheading": [
                  "var(--text-subheading)",
                  {
                      "lineHeight": "var(--leading-subheading)",
                      "letterSpacing": "var(--tracking-subheading)"
                  }
              ],
              "body-large": [
                  "var(--text-body-large)",
                  {
                      "lineHeight": "var(--leading-body-large)",
                      "letterSpacing": "var(--tracking-body-large)"
                  }
              ],
              "body": [
                  "var(--text-body)",
                  {
                      "lineHeight": "var(--leading-body)",
                      "letterSpacing": "var(--tracking-body)"
                  }
              ],
              "body-small": [
                  "var(--text-body-small)",
                  {
                      "lineHeight": "var(--leading-body-small)",
                      "letterSpacing": "var(--tracking-body-small)"
                  }
              ],
              "button": [
                  "var(--text-button)",
                  {
                      "lineHeight": "var(--leading-button)",
                      "letterSpacing": "var(--tracking-button)"
                  }
              ],
              "button-small": [
                  "var(--text-button-small)",
                  {
                      "lineHeight": "var(--leading-button-small)",
                      "letterSpacing": "var(--tracking-button-small)"
                  }
              ],
              "link": [
                  "var(--text-link)",
                  {
                      "lineHeight": "var(--leading-link)",
                      "letterSpacing": "var(--tracking-link)"
                  }
              ],
              "caption": [
                  "var(--text-caption)",
                  {
                      "lineHeight": "var(--leading-caption)",
                      "letterSpacing": "var(--tracking-caption)"
                  }
              ],
              "caption-small": [
                  "var(--text-caption-small)",
                  {
                      "lineHeight": "var(--leading-caption-small)",
                      "letterSpacing": "var(--tracking-caption-small)"
                  }
              ],
              "micro": [
                  "var(--text-micro)",
                  {
                      "lineHeight": "var(--leading-micro)",
                      "letterSpacing": "var(--tracking-micro)"
                  }
              ],
              "code-body": [
                  "var(--text-code-body)",
                  {
                      "lineHeight": "var(--leading-code-body)",
                      "letterSpacing": "var(--tracking-code-body)"
                  }
              ],
              "code-large": [
                  "var(--text-code-large)",
                  {
                      "lineHeight": "var(--leading-code-large)",
                      "letterSpacing": "var(--tracking-code-large)"
                  }
              ]
          },
          "fontWeight": {
              "display-hero": "var(--font-weight-display-hero)",
              "display-large": "var(--font-weight-display-large)",
              "section-heading": "var(--font-weight-section-heading)",
              "subheading-large": "var(--font-weight-subheading-large)",
              "subheading": "var(--font-weight-subheading)",
              "body-large": "var(--font-weight-body-large)",
              "body": "var(--font-weight-body)",
              "body-small": "var(--font-weight-body-small)",
              "button": "var(--font-weight-button)",
              "button-small": "var(--font-weight-button-small)",
              "link": "var(--font-weight-link)",
              "caption": "var(--font-weight-caption)",
              "caption-small": "var(--font-weight-caption-small)",
              "micro": "var(--font-weight-micro)",
              "code-body": "var(--font-weight-code-body)",
              "code-large": "var(--font-weight-code-large)"
          },
          "spacing": {
              "xs": "var(--space-xs)",
              "sm": "var(--space-sm)",
              "md": "var(--space-md)",
              "lg": "var(--space-lg)",
              "xl": "var(--space-xl)",
              "2xl": "var(--space-2xl)",
              "3xl": "var(--space-3xl)",
              "4xl": "var(--space-4xl)",
              "5xl": "var(--space-5xl)",
              "gutter": "var(--space-gutter)",
              "container-padding": "var(--space-container-padding)"
          },
          "borderRadius": {
              "none": "var(--radius-none)",
              "sm": "var(--radius-sm)",
              "md": "var(--radius-md)",
              "lg": "var(--radius-lg)",
              "xl": "var(--radius-xl)",
              "full": "var(--radius-full)"
          },
          "screens": {
              "tablet": "640px",
              "desktop": "960px",
              "wide": "1180px"
          },
          "boxShadow": {
              "flat": "var(--shadow-flat)",
              "base": "var(--shadow-base)",
              "elevado": "var(--shadow-elevado)",
              "flutuante": "var(--shadow-flutuante)",
              "folha": "var(--shadow-folha)",
              "foco": "var(--shadow-foco)"
          },
          "transitionDuration": {
              "fast": "var(--duration-fast)",
              "base": "var(--duration-base)",
              "slow": "var(--duration-slow)"
          },
          "transitionTimingFunction": {
              "ease-out": "var(--ease-out)",
              "ease-in-out": "var(--ease-in-out)"
          },
          "zIndex": {
              "base": "var(--z-base)",
              "raised": "var(--z-raised)",
              "sticky": "var(--z-sticky)",
              "gaveta": "var(--z-gaveta)",
              "modal": "var(--z-modal)",
              "toast": "var(--z-toast)"
          },
          "opacity": {
              "invisible": "var(--opacity-invisible)",
              "faint": "var(--opacity-faint)",
              "muted": "var(--opacity-muted)",
              "prominent": "var(--opacity-prominent)",
              "full": "var(--opacity-full)"
          }
      }
  },
  plugins: [],
};
