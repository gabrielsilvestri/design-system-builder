Detail line inside a card — `k` label (with ▸) left, `v` value right. Wrap a set in `Rows`.

```jsx
<Rows>
  <Row k="Aluguel" v="R$ 4.000" sub="venc 10/07" />
  <Row k="Pessoa B" v="R$ 12.000" variant="accent2" />
</Rows>
```

Value tints: `soft` (faint italic), `accent` (blue), `accent2` (violet). `sub` adds a quiet second line under the key. `Rows` strips the first row's top divider for you.
