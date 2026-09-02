import React from "react";

/**
 * Meter — the single segmented gauge ("the tank"). Fill grows left→right
 * with an accent gradient + glow; a tick overlay reads it like an instrument.
 */
export function Meter({ value = 0, style, ...rest }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div
      style={{
        position: "relative",
        height: "var(--meter-h)",
        background: "var(--meter-track)",
        border: "1px solid var(--surface-line)",
        overflow: "hidden",
        borderRadius: "var(--p-r-sm)",
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          display: "block",
          height: "100%",
          width: pct + "%",
          background:
            "linear-gradient(90deg, color-mix(in oklch,var(--color-accent),transparent 35%), var(--color-accent))",
          boxShadow: "0 0 14px var(--glow)",
        }}
      />
      <span
        style={{
          content: '""',
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "repeating-linear-gradient(90deg, transparent 0 calc(var(--meter-tick-gap) - 1px), var(--meter-tick) calc(var(--meter-tick-gap) - 1px) var(--meter-tick-gap))",
        }}
      />
    </div>
  );
}
