/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./brandbook/**/*.html"],
  theme: {
      "extend": {
          "colors": {
              "primary": "var(--color-primary)",
              "on-primary": "var(--color-on-primary)",
              "secondary": "var(--color-secondary)",
              "on-secondary": "var(--color-on-secondary)",
              "tertiary": "var(--color-tertiary)",
              "on-tertiary": "var(--color-on-tertiary)",
              "neutral": "var(--color-neutral)",
              "surface": "var(--color-surface)",
              "on-surface": "var(--color-on-surface)",
              "surface-variant": "var(--color-surface-variant)",
              "on-surface-variant": "var(--color-on-surface-variant)",
              "outline": "var(--color-outline)",
              "error": "var(--color-error)",
              "on-error": "var(--color-on-error)",
              "success": "var(--color-success)",
              "warning": "var(--color-warning)",
              "info": "var(--color-info)",
              "named": {
                  "fundo": "var(--color-fundo)",
                  "barra": "var(--color-barra)",
                  "superficie": "var(--color-superficie)",
                  "superficie-2": "var(--color-superficie-2)",
                  "superficie-3": "var(--color-superficie-3)",
                  "borda-suave": "var(--color-borda-suave)",  // 1.33 / 1.20 sobre fundo e superfície (decorativa)
                  "linha": "var(--color-linha)",  // 1.79 / 1.62 sobre fundo e superfície (divisória, não limite de controle)
                  "linha-controle": "var(--color-linha-controle)",  // 3.20 / 2.89 sobre fundo e superfície
                  "tinta": "var(--color-tinta)",  // 10.44 / 10.01 / 9.42 / 8.33 sobre fundo, barra, superfície e superfície-2; abaixo do teto de 11:1
                  "tinta-apoio": "var(--color-tinta-apoio)",  // 7.64 / 7.32 / 6.89 / 6.09 sobre fundo, barra, superfície e superfície-2
                  "tinta-sutil": "var(--color-tinta-sutil)",  // 6.43 / 6.17 / 5.80 / 5.13 sobre fundo, barra, superfície e superfície-2; 4.65 sobre teal-fundo
                  "teal": "var(--color-teal)",  // 9.12:1 sobre o fundo; escuro em cima 9.12:1
                  "teal-hover": "var(--color-teal-hover)",  // escuro em cima 10.56:1
                  "teal-ativo": "var(--color-teal-ativo)",  // escuro em cima 7.38:1
                  "teal-tinta": "var(--color-teal-tinta)",  // 8.29 / 7.48 sobre fundo e superfície; 5.99 sobre teal-fundo; 4.98 sobre teal-fundo-2
                  "teal-borda": "var(--color-teal-borda)",
                  "teal-fundo": "var(--color-teal-fundo)",
                  "teal-fundo-2": "var(--color-teal-fundo-2)",
                  "escuro": "var(--color-escuro)",
                  "verde": "var(--color-verde)",  // 8.18:1 sobre a superfície
                  "ambar": "var(--color-ambar)",  // 7.78:1 sobre a superfície
                  "vermelho": "var(--color-vermelho)",  // 6.31:1 sobre a superfície
                  "azul": "var(--color-azul)",  // 7.00:1 sobre a superfície
                  "roxo": "var(--color-roxo)",  // 6.22:1 sobre a superfície
                  "ardosia": "var(--color-ardosia)"  // 4.91:1 sobre a superfície
              }
          },
          "fontFamily": {
              "display-hero": "var(--font-display-hero)",
              "display-large": "var(--font-display-large)",
              "section-heading": "var(--font-section-heading)",
              "subheading-large": "var(--font-subheading-large)",
              "subheading": "var(--font-subheading)",
              "metric": "var(--font-metric)",
              "metric-small": "var(--font-metric-small)",
              "body-large": "var(--font-body-large)",
              "body": "var(--font-body)",
              "body-small": "var(--font-body-small)",
              "button": "var(--font-button)",
              "button-small": "var(--font-button-small)",
              "link": "var(--font-link)",
              "caption": "var(--font-caption)",
              "caption-small": "var(--font-caption-small)",
              "micro": "var(--font-micro)",
              "code": "var(--font-code)"
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
              "metric": [
                  "var(--text-metric)",
                  {
                      "lineHeight": "var(--leading-metric)",
                      "letterSpacing": "var(--tracking-metric)"
                  }
              ],
              "metric-small": [
                  "var(--text-metric-small)",
                  {
                      "lineHeight": "var(--leading-metric-small)",
                      "letterSpacing": "var(--tracking-metric-small)"
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
              "code": [
                  "var(--text-code)",
                  {
                      "lineHeight": "var(--leading-code)",
                      "letterSpacing": "var(--tracking-code)"
                  }
              ]
          },
          "fontWeight": {
              "display-hero": "var(--font-weight-display-hero)",
              "display-large": "var(--font-weight-display-large)",
              "section-heading": "var(--font-weight-section-heading)",
              "subheading-large": "var(--font-weight-subheading-large)",
              "subheading": "var(--font-weight-subheading)",
              "metric": "var(--font-weight-metric)",
              "metric-small": "var(--font-weight-metric-small)",
              "body-large": "var(--font-weight-body-large)",
              "body": "var(--font-weight-body)",
              "body-small": "var(--font-weight-body-small)",
              "button": "var(--font-weight-button)",
              "button-small": "var(--font-weight-button-small)",
              "link": "var(--font-weight-link)",
              "caption": "var(--font-weight-caption)",
              "caption-small": "var(--font-weight-caption-small)",
              "micro": "var(--font-weight-micro)",
              "code": "var(--font-weight-code)"
          },
          "spacing": {
              "xs": "var(--space-xs)",
              "sm": "var(--space-sm)",
              "md": "var(--space-md)",
              "base": "var(--space-base)",
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
              "full": "var(--radius-full)"
          },
          "screens": {
              "tablet": "640px",
              "desktop": "960px",
              "wide": "1180px"
          },
          "boxShadow": {
              "flat": "var(--shadow-flat)",
              "suave": "var(--shadow-suave)",
              "retomada": "var(--shadow-retomada)",
              "elevado": "var(--shadow-elevado)",
              "flutuante": "var(--shadow-flutuante)",
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
              "modal": "var(--z-modal)"
          },
          "opacity": {
              "invisible": "var(--opacity-invisible)",
              "muted": "var(--opacity-muted)",
              "full": "var(--opacity-full)"
          }
      }
  },
  plugins: [],
};
