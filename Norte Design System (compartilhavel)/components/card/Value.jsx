import React from "react";

const variantColor = {
  positive: "var(--color-positive)",
  attention: "var(--color-attention)",
};

/**
 * Value — the one dominant number per card. Tabular mono, never glowing
 * (decision: --value-glow stays none; glow lives on frames, not digits).
 * `prefix` renders small (e.g. "R$ "), `cents` renders as a small suffix.
 */
export function Value({ prefix, cents, suffix, variant, children, style, ...rest }) {
  return (
    <div
      style={{
        fontVariantNumeric: "tabular-nums",
        fontSize: "var(--p-fs-2xl)",
        fontWeight: "var(--p-fw-semi)",
        letterSpacing: "-.02em",
        lineHeight: 1,
        color: variantColor[variant] || "var(--text-ink)",
        textShadow: "var(--value-glow)",
        ...style,
      }}
      {...rest}
    >
      {prefix && (
        <small style={{ fontSize: ".4em", color: "var(--text-faint)", fontWeight: "var(--p-fw-med)" }}>
          {prefix}
        </small>
      )}
      {children}
      {cents && <i style={{ fontSize: ".46em", color: "var(--text-faint)", fontStyle: "normal" }}>{cents}</i>}
      {suffix && <i style={{ fontSize: ".46em", color: "var(--text-faint)", fontStyle: "normal" }}>{suffix}</i>}
    </div>
  );
}

/** Sub — the quiet caption directly under a Value ("o que temos agora"). */
export function Sub({ children, style, ...rest }) {
  return (
    <div
      style={{ fontSize: "var(--p-fs-sm)", color: "var(--text-faint)", marginTop: "var(--p-sp-1)", ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
