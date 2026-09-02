Objective card — icon, name, goal amount, progress bar, guardado caption. `active` lights the border + glow and shows the badge.

```jsx
<Tile
  active
  icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21s7-3.5 7-9V6l-7-3-7 3v6c0 5.5 7 9 7 9z"/></svg>}
  name="Reserva de emergência"
  goal="R$ 10.000"
  progress={0}
  sub="guardado R$ 0"
/>
```

Lay tiles out in a 2-col grid. The icon svg must use `stroke="currentColor" fill="none"` so it inherits the accent + glow.
