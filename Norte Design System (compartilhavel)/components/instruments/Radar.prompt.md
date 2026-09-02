Sweeping radar scope — the hero instrument. Plots contacts by bearing + distance under a rotating accent beam.

```jsx
<Radar
  size={210}
  contacts={[
    { angle: 40, dist: 0.7, variant: "crit", lock: true },
    { angle: 150, dist: 0.45, variant: "accent2" },
    { angle: 290, dist: 0.85, variant: "accent" },
  ]}
/>
```

`angle` is degrees (0 = up, clockwise), `dist` is 0..1. `variant`: accent (friendly) · accent2 (unknown) · crit (hostile). `lock` draws a violet target bracket. Set `sweep={false}` to freeze the beam.
