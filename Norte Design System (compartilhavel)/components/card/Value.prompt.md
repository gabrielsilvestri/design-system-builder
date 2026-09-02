The one dominant number per card — tabular mono, never glowing. `Sub` is its quiet caption.

```jsx
<Value prefix="R$ " cents=",00" variant="positive">12.000</Value>
<Sub>o que temos agora</Sub>
```

Variants: `variant="positive"` (blue, money in/have) · `variant="attention"` (violet, money out/owe) · omit for neutral ink. `prefix` = small unit, `cents`/`suffix` = small trailing. Never wrap a Value in glow.
