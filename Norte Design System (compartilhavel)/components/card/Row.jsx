import React from "react";

const vVariant = {
  soft: { color: "var(--text-faint)", fontStyle: "italic", fontWeight: "var(--p-fw-reg)" },
  accent: { color: "var(--color-accent)" },
  accent2: { color: "var(--color-accent-2)" },
};

/**
 * Row — a detail line inside a card (label left, value right).
 * The key carries a ▸ marker. Value can be tinted via `variant`.
 * Pass `sub` for a quiet second line under the key (e.g. a due date).
 */
export function Row({ k, v, variant, sub, _first, style, ...rest }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 10,
        padding: "6px 0",
        borderTop: _first ? "none" : "1px solid var(--surface-line)",
        fontSize: "var(--p-fs-md)",
        ...style,
      }}
      {...rest}
    >
      <span style={{ color: "var(--text-dim)", display: "flex", gap: 7, alignItems: "baseline" }}>
        <span style={{ color: "var(--color-accent)" }}>▸</span>
        <span>
          {k}
          {sub && (
            <span style={{ display: "block", fontSize: "var(--p-fs-xs)", color: "var(--text-faint)" }}>{sub}</span>
          )}
        </span>
      </span>
      <span style={{ fontVariantNumeric: "tabular-nums", fontWeight: "var(--p-fw-med)", color: "var(--text-ink)", ...(vVariant[variant] || {}) }}>
        {v}
      </span>
    </div>
  );
}

/** Rows — the detail block under a Value. Strips the top border off the first Row. */
export function Rows({ children, style, ...rest }) {
  const items = React.Children.toArray(children).filter(Boolean);
  return (
    <div style={{ marginTop: "var(--p-sp-3)", display: "flex", flexDirection: "column", ...style }} {...rest}>
      {items.map((child, i) =>
        React.isValidElement(child) ? React.cloneElement(child, { _first: i === 0 }) : child
      )}
    </div>
  );
}
