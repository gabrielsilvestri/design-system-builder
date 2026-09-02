Full-bleed cockpit background — the CRT-scanline + telemetry-grid + neon-radial surface every Norte view sits on.

```jsx
<Surface style={{ padding: 24 }}>
  <Hud session="Pessoa A × Pessoa B" />
  {/* cards… */}
</Surface>
```

Notes: it only paints the background and sets the base mono font + ink color. Pass `style` to add padding or min-height. Always the outermost wrapper of a screen.
