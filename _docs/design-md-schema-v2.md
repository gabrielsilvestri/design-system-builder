# DESIGN.md schema v2 (nossa estrutura)

Spec própria do workspace. Não dependemos de `@google/design.md` lint. Cobre 9 seções numeradas + YAML frontmatter expandido com 17 blocos.

## Por que próprio schema

- Liberdade de campos em PT onde fizer sentido (`positioning.enemy`, `voice.banlist`, `manifesto.quote`)
- Profundidade maior em components (state matrix + variants)
- Bloco `preview_tokens:` com hex 6 dígitos resolvidos pra render
- Confidence ladder agregado em `confidence_summary:`
- Coverage notes mandatórias via linter próprio

## Frontmatter, blocos

### Identificação

```yaml
schema_version: 2.0
client_name: Vivendo de Bordado
client_slug: vivendo-de-bordado
description: <one-line oficial da marca>
language: pt-br
edition: <"Verão 2026" se aplicável>
year: 2026
```

### Classificação visual

```yaml
style_archetype: brutalist-mono          # detectado pelo static-extract
style_confidence: 78                      # 0-100, do classifyStyle
default_theme: dark                       # detectado pelo theme-default
themes_available: [dark, lime, gold]      # se cliente tem múltiplas edições
```

Archetypes válidos: shadcn-neutral, apple-glass, brutalist-mono, polaris-friendly, carbon-enterprise, marketing-gradient, material-elevation, govuk-conservative, porsche-precision, ant-china-enterprise, community-polished, unclassified.

### Confidence summary

```yaml
confidence_summary:
  high: 42
  medium: 18
  low: 7
  total: 67
```

Agregado de todas as provenance comments do frontmatter. Verify exige `high / total >= 0.6` ou abre warning.

### Colors

Slots canônicos (todos obrigatórios; faltar -> linter error):

```yaml
colors:
  primary: "#hex"             # IDENTIDADE da marca (logo, hero), não cor de UI mais usada
  on-primary: "#hex"          # texto sobre primary, WCAG AA
  secondary: "#hex"
  on-secondary: "#hex"
  tertiary: "#hex"            # accent / highlight
  on-tertiary: "#hex"
  neutral: "#hex"             # texto muted padrão
  surface: "#hex"             # canvas / background dominante
  on-surface: "#hex"
  surface-variant: "#hex"     # surface elevada / alternada
  on-surface-variant: "#hex"
  outline: "#hex"             # bordas / dividers
  error: "#hex"
  on-error: "#hex"
  success: "#hex"
  warning: "#hex"
  info: "#hex"
```

Slots opcionais — cores nomeadas do manual:

```yaml
colors:
  named:
    brand-primary:
      hex: "#7C5CFC"
      pantone: "802 C"
      rgb: "209,255,0"
      cmyk: "20,0,100,0"
      role: "accent neon"
    void-dark:
      hex: "#050505"
      role: "primary background"
```

Regra: todas as cores do manual devem aparecer em `named:` preservando o nome original. Mapping pros slots canônicos é separado e documentado em `tokens-decisions.md`.

### Typography

12-18 roles canônicos. Quanto mais o manual tem, mais preenchemos.

```yaml
typography:
  display-hero:
    fontFamily: "Tasa Orbiter, system-ui, sans-serif"
    fontSize: "72px"
    fontWeight: 800
    lineHeight: "1.05"
    letterSpacing: "-0.02em"
    features: "'ss01'"        # OpenType features se detectadas
    role: "hero billboard"
  display-large:
    # ...
  section-heading: { ... }
  subheading-large: { ... }
  subheading: { ... }
  body-large: { ... }
  body: { ... }
  body-small: { ... }
  button: { ... }
  button-small: { ... }
  link: { ... }
  caption: { ... }
  caption-small: { ... }
  caption-tabular: { ... }    # com 'tnum' feature
  micro: { ... }
  nano: { ... }
  code-body: { ... }          # monospace, se presente
  code-bold: { ... }
  code-label: { ... }
  code-micro: { ... }
```

### Spacing e radius

```yaml
rounded:
  none: "0px"
  sm: "4px"
  md: "8px"
  lg: "16px"
  xl: "24px"                  # opcional
  full: "9999px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "64px"
  "4xl": "96px"
  "5xl": "128px"
  gutter: "24px"
  container-padding: "32px"
```

### Breakpoints, shadows, motion, z-index, opacity

Todos opcionais; quando ausentes, exigem coverage note no body. Estrutura:

```yaml
breakpoints:
  mobile: "0px"
  tablet: "768px"
  desktop: "1024px"
  wide: "1440px"

shadows:
  flat: "none"
  ambient: "0 1px 2px rgba(0,0,0,0.04)"
  standard: "0 2px 8px rgba(0,0,0,0.08)"
  elevated: "0 8px 24px rgba(0,0,0,0.12)"
  deep: "0 16px 48px rgba(0,0,0,0.18)"
  glow: "0 0 24px var(--color-tertiary)"   # se a marca usa glow

motion:
  durations:
    fast: "160ms"
    base: "240ms"
    slow: "480ms"
  easings:
    ease-out: "cubic-bezier(0.16, 1, 0.3, 1)"
    ease-in-out: "cubic-bezier(0.65, 0, 0.35, 1)"
  reduced-motion-respected: true

z-index:
  base: 0
  raised: 10
  sticky: 100
  modal: 1000
  toast: 10000

opacity:
  invisible: "0"
  faint: "0.05"
  muted: "0.4"
  prominent: "0.7"
  full: "1"
```

### preview_tokens (hex resolvidos pra preview live)

```yaml
preview_tokens:
  button_primary_bg: "#7C5CFC"
  button_primary_text: "#050505"
  button_primary_border: "#7C5CFC"
  button_secondary_bg: "transparent"
  button_secondary_text: "#F5F4E7"
  button_secondary_border: "#F5F4E7"
  button_tertiary_text: "#7C5CFC"
  surface_bg: "#050505"
  card_bg: "#0F0F11"
  text: "#F5F4E7"
  text_muted: "#79786A"
  border: "#2A2A2A"
  accent: "#7C5CFC"
  button_radius: "8px"
  card_radius: "12px"
  input_radius: "4px"
```

### Components (com states)

```yaml
components:
  button-primary:
    bg: "#7C5CFC"
    text: "#050505"
    border: "#7C5CFC"
    radius: "8px"
    padding: "12px 24px"
    font: "14px Geist Mono weight 500 0.08em uppercase"
    states:
      hover: { bg: "#E5FF40", text: "#050505" }
      focus: { ring: "0 0 0 2px #7C5CFC" }
      active: { bg: "#B3DD00" }
      disabled: { bg: "#79786A", opacity: 0.4 }
  button-secondary: { ... }
  button-ghost: { ... }
  card:
    bg: "#0F0F11"
    border: "#2A2A2A"
    radius: "12px"
    padding: "24px"
    shadow: "none"
  input-text:
    bg: "transparent"
    text: "#F5F4E7"
    border: "#2A2A2A"
    radius: "4px"
    padding: "8px 12px"
    states:
      focus: { border: "#7C5CFC" }
      error: { border: "#FF4444", text: "#FF4444" }
      disabled: { bg: "#0F0F11", opacity: 0.4 }
  badge-default: { ... }
  nav-header:
    bg: "rgba(5,5,5,0.96)"
    text: "#F5F4E7"
    border_bottom: "#2A2A2A"
    backdrop_filter: "blur(16px)"
    height: "56px"
```

### Blocos condicionais (só se manual descreve)

```yaml
audio:
  cues: [boot, confirm, alert, swoosh, drop, ghost]
  specs:
    max_duration: "300ms"
    target_loudness: "-6 dBFS"
    reverb: false

logo:
  variants: [primary, horizontal, compact, favicon, monogram]
  formats: [svg, png, pdf]
  clear_space: "1x height of 'X'"
  prohibited: [rotate, distort, recolor-non-brand, gradient]
  color_contexts:
    - { bg: "#050505", logo_color: "#F5F4E7" }
    - { bg: "#7C5CFC", logo_color: "#050505" }

icons:
  inventory_count: 14
  canonical_viewbox: "24x24"
  stroke_width: "2px"
  sizes: [16, 24, 32, 48]
  variants: [default, brand, muted, error, info, warning]
  min_touch_target: "44x44"

moodboard:
  categories:
    - name: "Web UI & Product"
      references: ["Symbiotic.fi", "Linear", "Vercel"]
      influences: ["hero sections", "button systems"]
  design_principles: ["Dark-First", "Neon Lime Accent", "Monospace Voice", ...]

positioning:
  enemy: "A complexidade"
  audience: "Os criadores não-técnicos"
  category: "AI Orchestration Experience"
  claim: "Acesso direto à IA raiz empacotada com metodologia"

archetypes:
  - { name: "Magician", weight: 60, essence: "Poder transformacional" }
  - { name: "Sage", weight: 25, essence: "Sabedoria codificada" }
  - { name: "Explorer", weight: 15, essence: "Autonomia mapeada" }
  synthesis: "Transformador fundamentado, revelador não místico, aventureiro com mapa"

voice:
  brand_voice:
    traits: [frio, implacável, minimalista, sábio]
    tone: "Direto, objetivo, institucional-premium"
    example: "A IA é a seta. O X é meu."
  founder_voice:                # opcional, dual voice
    traits: [caloroso, apaixonado, expansivo]
    tone: "Provocativo, social-first"
    example: "Você não está pronto pra Matrix"
  approved_vocabulary: ["O X", "A Seta", "O Terminal", "A Clareza"]
  banlist: [mágico, revolucionário, fácil, hack]

manifesto:
  quote: "Eu não preciso ser programador para criar."
  body_paragraphs:
    - "Nós acreditamos que a IA não é o herói. Você é."
    - "A IA não é o destino. É o caminho."

hero_journey:
  acts:
    - { name: "O Sono", description: "Preso na matrix de ferramentas visuais" }
    - { name: "O Chamado", description: "Terminal + metodologia oferecidos" }
    - { name: "A Toca do Coelho", description: "Aprendizado profundo, fluxo, resultados reais" }
    - { name: "O Despertar", description: "Transformado de observador em criador poderoso" }

evidence:
  - { metric: "R$500K", context: "valor anual gerado por aluno", source: "João Pedro" }
  - { metric: "6 dias", context: "MVP entregue", source: "interno" }

testimonials:
  - quote: "Atingi R$8K/mês sem saber codar."
    author: "Karla Pazos"
    context: "Empreendedora não-técnica"
    result: "Renda recorrente"
```

## Markdown body, 9 seções numeradas

Tudo em **português**. Cabeçalhos exatos:

```
## 1. Visual Theme & Atmosphere
## 2. Color Palette & Roles
## 3. Typography Rules
## 4. Components
## 5. Layout Principles
## 6. Depth & Elevation
## 7. Do's and Don'ts
## 8. Responsive Behavior
## 9. Agent Prompt Guide
```

Regras de cada seção: ver `_template/DESIGN.md.stub`.

## Provenance comments (rastreabilidade)

Cada token canônico do frontmatter recebe um comentário temporário com origem. O token-extractor escreve provisoriamente; o pós-processo agrega em `confidence_summary` e remove os comentários do arquivo final.

```yaml
colors:
  primary: "#7C5CFC"      # from --brand-primary (CSS var, high confidence)
  secondary: "#050505"    # from --bb-dark (CSS var, high confidence)
  tertiary: "#F5F4E7"     # from --bb-warm-white (CSS var, high confidence)
  on-primary: "#050505"   # inferred from contrast WCAG AA
typography:
  display-hero:
    fontFamily: "Tasa Orbiter, system-ui, sans-serif"  # from @font-face
    fontSize: "72px"                                    # from h1 declaration
```

Origin categories válidas:
- `from --var-name` (high)
- `from @font-face` (high)
- `from manual page N` (high)
- `from <selector> declaration` (medium)
- `inferred from <reasoning>` (low)

## Token references em components

Use `{path.to.token}` quando o valor é um pointer pro frontmatter (mantém DRY):

```yaml
components:
  button-primary:
    bg: "{colors.primary}"
    text: "{colors.on-primary}"
    radius: "{rounded.md}"
```

Linter checa que todas as refs resolvem. Hex literais também são aceitos (preview_tokens são sempre literais).

## Lint próprio

Ver `_scripts/lint.mjs`. Rules implementadas:

| Rule | Severity |
|---|---|
| missing-required-slot | error |
| broken-ref | error |
| contrast-ratio | error |
| unit-required | error |
| hex-format | error |
| section-order | warning |
| orphaned-token | warning |
| provenance-missing | warning |
| generic-dont | error |
| archetype-missing | warning |
| coverage-note-missing | warning |

## Diferenças vs google-labs/design.md

| Aspecto | google-labs spec | nosso schema v2 |
|---|---|---|
| Seções | 8 fixas, não numeradas | 9 numeradas |
| Color slots | ~10 | 17 + `named:` |
| Typography roles | ~8 | 12-18 |
| Components | YAML simples | YAML com `states` + `variants` |
| Preview tokens | não tem | `preview_tokens:` block |
| Confidence | não tem | `confidence_summary` + provenance comments |
| Style archetype | não tem | `style_archetype:` no frontmatter |
| Blocos brand (positioning/archetypes/voice/manifesto/etc) | não tem | seções condicionais ricas |
| Lint | `@google/design.md` CLI | linter próprio em Node |

A skill `design-md-static` gera google-labs format. O nosso token-extractor consome essa saída e converte pra schema v2.
