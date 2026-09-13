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
                  "esmeralda": "var(--color-esmeralda)",
                  "esmeralda-texto": "var(--color-esmeralda-texto)",
                  "esmeralda-fundo": "var(--color-esmeralda-fundo)",
                  "on-esmeralda": "var(--color-on-esmeralda)",
                  "superficie": "var(--color-superficie)",
                  "superficie-cartao": "var(--color-superficie-cartao)",
                  "superficie-alta": "var(--color-superficie-alta)",
                  "pilula": "var(--color-pilula)",
                  "superficie-tinta": "var(--color-superficie-tinta)",
                  "fio": "var(--color-fio)",
                  "fio-alto": "var(--color-fio-alto)",
                  "contorno": "var(--color-contorno)",
                  "tinta": "var(--color-tinta)",
                  "tinta-corpo": "var(--color-tinta-corpo)",
                  "tinta-meta": "var(--color-tinta-meta)",
                  "turquesa-sinal": "var(--color-turquesa-sinal)",
                  "erro": "var(--color-erro)",
                  "atencao": "var(--color-atencao)",
                  "light-surface": "var(--color-light-surface)",
                  "light-surface-variant": "var(--color-light-surface-variant)",
                  "light-superficie-alta": "var(--color-light-superficie-alta)",
                  "light-superficie-tinta": "var(--color-light-superficie-tinta)",
                  "light-fio": "var(--color-light-fio)",
                  "light-fio-alto": "var(--color-light-fio-alto)",
                  "light-outline": "var(--color-light-outline)",
                  "light-tinta": "var(--color-light-tinta)",
                  "light-tinta-corpo": "var(--color-light-tinta-corpo)",
                  "light-tinta-meta": "var(--color-light-tinta-meta)",
                  "light-esmeralda": "var(--color-light-esmeralda)",
                  "light-esmeralda-texto": "var(--color-light-esmeralda-texto)",
                  "light-on-esmeralda": "var(--color-light-on-esmeralda)",
                  "light-turquesa-sinal": "var(--color-light-turquesa-sinal)",
                  "light-erro": "var(--color-light-erro)",
                  "light-atencao": "var(--color-light-atencao)"
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
              "micro": "var(--font-micro)"
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
              "micro": "var(--font-weight-micro)"
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
              "container-padding": "var(--space-container-padding)",
              "measure": "var(--space-measure)",
              "measure-min": "var(--space-measure-min)",
              "measure-max": "var(--space-measure-max)"
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
              "desktop": "1024px",
              "wide": "1280px"
          },
          "boxShadow": {
              "flat": "var(--shadow-flat)",
              "ambient": "var(--shadow-ambient)",
              "standard": "var(--shadow-standard)",
              "elevated": "var(--shadow-elevated)",
              "deep": "var(--shadow-deep)",
              "focus-ring": "var(--shadow-focus-ring)"
          },
          "transitionDuration": {
              "fast": "var(--duration-fast)",
              "base": "var(--duration-base)",
              "slow": "var(--duration-slow)"
          },
          "transitionTimingFunction": {
              "press": "var(--ease-press)",
              "release": "var(--ease-release)",
              "ease-out": "var(--ease-out)",
              "ease-in-out": "var(--ease-in-out)"
          },
          "zIndex": {
              "base": "var(--z-base)",
              "raised": "var(--z-raised)",
              "sticky": "var(--z-sticky)",
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
