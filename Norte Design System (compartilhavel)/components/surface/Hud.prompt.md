Cockpit status bar for the top of a panel — brand hex, link/session telemetry, katakana system seal, sync state, with luminous corner brackets.

```jsx
<Hud session="Pessoa A × Pessoa B" sync="OK" />
```

Variants: every label is a prop — `brand`, `badge` (the hex glyph), `link`, `session`, `seal`, `sync`. Pass `link=""` to drop the live dot. Keep it the first child of `<Surface>`.
