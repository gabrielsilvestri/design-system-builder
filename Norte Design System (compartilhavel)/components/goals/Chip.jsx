import React from "react";

const valueColor = {
  up: "var(--color-positive)",
  down: "var(--color-attention)",
  now: "var(--color-accent)",
};

/**
 * Chip — a month cell in the history strip. `up` tints the value blue,
 * `down` violet, `now` lights the whole chip (accent border + glow).
 */
export function Chip({ month, value, variant, style, ...rest }) {
  const isNow = variant === "now";
  return (
    <div
      style={{
        background: "var(--tile-bg)",
        border: isNow ? "1px solid var(--color-accent)" : "1px solid var(--surface-line)",
        boxShadow: isNow ? "0 0 12px color-mix(in oklch,var(--color-accent),transparent 78%)" : "none",
        padding: "9px 10px",
        borderRadius: "var(--card-radius)",
        ...style,
      }}
      {...rest}
    >
      <div style={{ fontSize: "var(--p-fs-xs)", color: "var(--text-faint)", textTransform: "uppercase", marginBottom: 4 }}>
        {month}
      </div>
      <div
        style={{
          fontVariantNumeric: "tabular-nums",
          fontSize: "var(--p-fs-md)",
          fontWeight: "var(--p-fw-semi)",
          color: valueColor[variant] || "var(--text-ink)",
        }}
      >
        {value}
      </div>
    </div>
  );
}
