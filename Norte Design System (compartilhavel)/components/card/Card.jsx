import React from "react";

const bracket = { position: "absolute", width: 14, height: 14, pointerEvents: "none" };

/**
 * Card — the glass module every Norte reading lives in.
 * Brackets on the top-left + bottom-right, a header with title, optional
 * katakana seal / code / tick, then children (a Value + Rows by convention).
 *
 * Non-negotiable card pattern: one dominant Value at the top, detail below.
 */
export function Card({ title, mark = "◢", seal, code, tick = false, children, style, ...rest }) {
  return (
    <div
      style={{
        position: "relative",
        padding: "var(--card-pad)",
        color: "var(--text-ink)",
        borderRadius: "var(--card-radius)",
        background: "var(--card-bg)",
        backdropFilter: "blur(var(--p-blur))",
        WebkitBackdropFilter: "blur(var(--p-blur))",
        border: "1px solid var(--card-border)",
        boxShadow: "var(--card-shadow)",
        ...style,
      }}
      {...rest}
    >
      {title && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--p-sp-2)",
            marginBottom: "var(--p-sp-3)",
          }}
        >
          <span style={{ color: "var(--color-accent)", fontSize: "var(--p-fs-2xs)" }}>{mark}</span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--p-fs-sm)",
              fontWeight: "var(--p-fw-semi)",
              letterSpacing: "var(--p-track-wide)",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              textShadow: "0 0 9px var(--glow)",
            }}
          >
            {title}
          </span>
          {code && (
            <span
              style={{
                fontSize: "var(--p-fs-xs)",
                color: "var(--text-faint)",
                letterSpacing: ".08em",
                marginLeft: "var(--p-sp-3)",
              }}
            >
              {code}
            </span>
          )}
          {tick && (
            <span
              style={{
                marginLeft: "var(--p-sp-3)",
                width: 34,
                height: 9,
                background:
                  "repeating-linear-gradient(90deg,color-mix(in oklch,var(--color-accent),transparent 55%) 0 2px,transparent 2px 5px)",
              }}
            />
          )}
          {seal && (
            <span
              style={{
                marginLeft: "auto",
                fontSize: "var(--p-fs-xs)",
                letterSpacing: ".16em",
                color: "color-mix(in oklch,var(--color-accent),transparent 38%)",
              }}
            >
              {seal}
            </span>
          )}
        </div>
      )}

      {children}

      <span style={{ ...bracket, left: -1, top: -1, borderTop: "2px solid var(--card-bracket)", borderLeft: "2px solid var(--card-bracket)" }} />
      <span style={{ ...bracket, right: -1, bottom: -1, borderBottom: "2px solid var(--card-bracket)", borderRight: "2px solid var(--card-bracket)" }} />
    </div>
  );
}
