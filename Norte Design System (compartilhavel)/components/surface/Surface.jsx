import React from "react";

/**
 * Surface — the cockpit background for any Norte screen.
 * Applies the CRT scanline + telemetry grid + corner radials over the
 * void base. Wrap a whole view in it; everything else sits on top.
 */
export function Surface({ children, style, ...rest }) {
  const surfaceStyle = {
    minHeight: "100%",
    color: "var(--text-ink)",
    fontFamily: "var(--font-mono)",
    fontSize: "var(--p-fs-base)",
    lineHeight: 1.4,
    backgroundColor: "var(--surface-void)",
    backgroundImage: [
      "repeating-linear-gradient(0deg, oklch(0.07 0.02 268 / .5) 0 1px, transparent 1px 3px)",
      "linear-gradient(0deg, var(--surface-grid) 0 1px, transparent 1px 48px)",
      "linear-gradient(90deg, var(--surface-grid) 0 1px, transparent 1px 48px)",
      "radial-gradient(90% 60% at 78% -10%, color-mix(in oklch,var(--color-accent),transparent 55%), transparent 60%)",
      "radial-gradient(70% 50% at 8% 110%, color-mix(in oklch,var(--color-accent-2),transparent 65%), transparent 60%)",
    ].join(","),
    ...style,
  };
  return (
    <div style={surfaceStyle} {...rest}>
      {children}
    </div>
  );
}
