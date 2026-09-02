Glass module with corner brackets — the home of every Norte reading. Always: one dominant `Value` on top, detail `Row`s below.

```jsx
<Card title="Saldo em conta" seal="残高" tick>
  <Value prefix="R$ " cents=",00" variant="positive">12.000</Value>
  <Sub>o que temos agora</Sub>
  <Rows>
    <Row k="Conta Pessoa A" v="R$ 8.000,00" />
    <Row k="Conta Pessoa B" v="R$ 4.000,00" />
  </Rows>
</Card>
```

Header props: `title`, `seal` (katakana, right-aligned), `code` (uppercase tag), `tick` (telemetry swatch), `mark` (leading glyph, default ◢).
