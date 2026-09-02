Month cell for the history strip. `up` = positive blue, `down` = attention violet, `now` = current month (lit border + glow).

```jsx
<Chip month="mar" value="+3.000" variant="up" />
<Chip month="jun" value="·····" variant="now" />
```

Lay them in a `repeat(6, 1fr)` grid. The current month uses dots (`·····`) until it closes — never a blinking cursor.
