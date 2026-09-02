import React from "react";

/**
 * Group — a subtotal divider inside a card (e.g. "Fixos … R$ 5.700").
 * Accent uppercase label on the left, a bold tabular total on the right.
 */
export function Group({ label, total, style, ...rest }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginTop: "var(--p-sp-4)",
        marginBottom: 2,
        fontSize: "var(--p-fs-xs)",
        letterSpacing: "var(--p-track-mid)",
        textTransform: "uppercase",
        color: "var(--color-accent)",
        ...style,
      }}
      {...rest}
    >
      <span>{label}</span>
      <b style={{ fontVariantNumeric: "tabular-nums", color: "var(--text-ink)", fontSize: "var(--p-fs-md)" }}>
        {total}
      </b>
    </div>
  );
}
