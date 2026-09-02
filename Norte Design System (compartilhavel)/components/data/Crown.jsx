import React from "react";

/**
 * Crown — the small violet marker that flags who did more. Drops a glow.
 * Inline with a Row value: <Row v={<>R$ 12.000 <Crown/></>} />.
 */
export function Crown({ size = 23, style, ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      style={{
        fill: "var(--color-accent-2)",
        filter: "drop-shadow(0 0 6px var(--color-accent-2))",
        verticalAlign: -3,
        ...style,
      }}
      {...rest}
    >
      <path d="M4 17.5 1.3 6 7.5 9.8 12 2.5 16.5 9.8 22.7 6 20 17.5z" />
    </svg>
  );
}
