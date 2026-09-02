import React from "react";

/**
 * Split — a two-proportion bar ("who did more"). Side A is accent (blue),
 * side B is accent-2 (violet); a tick overlay reads it like a gauge.
 */
export function Split({ a = 50, b, style, ...rest }) {
  const aPct = Math.max(0, Math.min(100, a));
  const bPct = b == null ? 100 - aPct : Math.max(0, Math.min(100, b));
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        height: 13,
        border: "1px solid var(--surface-line)",
        borderRadius: "var(--p-r-sm)",
        overflow: "hidden",
        ...style,
      }}
      {...rest}
    >
      <i style={{ width: aPct + "%", background: "var(--color-accent)", boxShadow: "0 0 12px var(--glow)" }} />
      <i style={{ width: bPct + "%", background: "var(--color-accent-2)", boxShadow: "0 0 12px var(--glow-2)" }} />
      <span
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "repeating-linear-gradient(90deg, transparent 0 11px, var(--meter-tick) 11px 12px)",
        }}
      />
    </div>
  );
}
