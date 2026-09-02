---
name: norte-design
description: Use this skill to generate well-branded interfaces and assets for Norte (the couples-finance "cockpit" panel — Ghost in the Shell / cyberpunk neon glass, azul + violeta), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `styles.css` — link this one file; it `@import`s all tokens (`tokens/*.css`).
- `tokens/` — color, typography, spacing, effects, fonts. Three layers: primitive (`--p-*`) → semantic → component. **Never hardcode a color/font/space/effect — always `var(--token)`.**
- `components/` — React primitives (namespace `window.NorteDesignSystem_23eb33`): Surface, Hud, Card, Value/Sub, Row/Rows, Group, Meter, Split, Crown, Tile, Chip. Each has a `.prompt.md` with usage.
- `ui_kits/norte/` — the full panel recreation (disposition 03). Best starting point for a screen.
- `guidelines/` — foundation specimen cards.

## Non-negotiables (read `readme.md` for the full set)
- **Card pattern:** big total on top + detail below; one dominant number per card.
- **Glow lives on frames, bars, titles, icons — NEVER on digits.** Values are always clean mono tabular.
- **Color:** azul = temos/positivo/Pessoa A · violeta = devemos/atenção/Pessoa B (cold attention, not alarm). Red only for real insolvency.
- **Forbidden:** matrix green · blinking cursor/blink · gold/mustard/brown · pure white · generic fintech navy+gold · emoji.
- **Copy:** pt-BR with accents, couple's plural ("o que temos"), never an em/en dash (— –), katakana telemetry seals.
- **Icons:** inline stroke SVG (currentColor, weight 1.7, round caps) + unicode marks (◢ ▸) + katakana. No icon font, no emoji.
- **Fonts:** Chakra Petch (display) + IBM Plex Mono (mono + all values). Loaded from Google Fonts.
