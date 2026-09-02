import React from "react";

const bracket = {
  position: "absolute",
  width: 14,
  height: 14,
  pointerEvents: "none",
};

/**
 * Hud — the cockpit status bar that sits at the top of a Norte panel.
 * Brand hex on the left, link/session telemetry, a dashed grow line,
 * then the katakana system seal and sync state on the right.
 */
export function Hud({
  brand = "NORTE.SYS",
  badge = "N",
  link = "LINK ESTÁVEL",
  session,
  seal = "家計システム",
  sync = "OK",
  style,
  ...rest
}) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: "var(--p-sp-4)",
        padding: "var(--hud-pad)",
        fontSize: "var(--p-fs-sm)",
        letterSpacing: "var(--p-track-mid)",
        background:
          "linear-gradient(90deg, color-mix(in oklch,var(--color-accent),transparent 90%), transparent 60%)",
        border: "1px solid var(--surface-line)",
        borderRadius: "var(--card-radius)",
        color: "var(--text-dim)",
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--p-sp-2)",
          color: "var(--color-accent)",
          fontFamily: "var(--font-display)",
          fontWeight: "var(--p-fw-semi)",
          letterSpacing: ".1em",
        }}
      >
        <span
          style={{
            width: 26,
            height: 26,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-display)",
            fontWeight: "var(--p-fw-bold)",
            fontSize: "var(--p-fs-md)",
            color: "var(--text-on-accent)",
            background:
              "linear-gradient(150deg,var(--color-accent),var(--color-accent-2))",
            clipPath: "polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)",
          }}
        >
          {badge}
        </span>
        {brand}
      </span>

      {link && (
        <>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--color-accent)",
              boxShadow: "0 0 9px var(--color-accent)",
            }}
          />
          <span style={{ color: "var(--text-faint)" }}>{link}</span>
        </>
      )}

      {session && (
        <>
          <span style={{ width: 1, height: 16, background: "var(--surface-line)" }} />
          <span>
            <span style={{ color: "var(--text-faint)" }}>SESSÃO </span>
            {session}
          </span>
        </>
      )}

      <span
        style={{
          flex: 1,
          height: 1,
          background:
            "repeating-linear-gradient(90deg,var(--surface-line) 0 4px,transparent 4px 9px)",
        }}
      />

      {seal && (
        <span
          style={{
            color: "color-mix(in oklch,var(--color-accent),transparent 40%)",
            letterSpacing: ".2em",
          }}
        >
          {seal}
        </span>
      )}
      {sync && (
        <>
          <span style={{ width: 1, height: 16, background: "var(--surface-line)" }} />
          <span>
            <span style={{ color: "var(--text-faint)" }}>SYNC </span>
            {sync}
          </span>
        </>
      )}

      <span style={{ ...bracket, left: -1, top: -1, borderTop: "2px solid var(--card-bracket)", borderLeft: "2px solid var(--card-bracket)" }} />
      <span style={{ ...bracket, right: -1, bottom: -1, borderBottom: "2px solid var(--card-bracket)", borderRight: "2px solid var(--card-bracket)" }} />
    </div>
  );
}
