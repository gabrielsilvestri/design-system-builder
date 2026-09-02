import React from "react";

/**
 * Tile — an objective ("goal") card. Icon, name, goal amount, a thin progress
 * bar, and a guardado caption. `active` lights the border + glow and shows an
 * "ATIVA" badge. Pass `icon` as an inline <svg> using stroke="currentColor".
 */
export function Tile({ icon, name, goal, progress = 0, sub, active = false, badge = "ATIVA", style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const pct = Math.max(0, Math.min(100, progress));
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        padding: "var(--p-sp-3)",
        borderRadius: "var(--card-radius)",
        border: active
          ? "1px solid var(--color-accent)"
          : `1px solid ${hover ? "var(--surface-line-str)" : "var(--surface-line)"}`,
        background: active
          ? "linear-gradient(160deg, color-mix(in oklch,var(--color-accent),transparent 80%), transparent 60%)"
          : "var(--tile-bg)",
        boxShadow: active
          ? "0 0 20px color-mix(in oklch,var(--color-accent),transparent 75%), inset 0 0 16px color-mix(in oklch,var(--color-accent),transparent 90%)"
          : "none",
        transition: "border-color .15s ease",
        ...style,
      }}
      {...rest}
    >
      {active && badge && (
        <span
          style={{
            position: "absolute",
            top: 11,
            right: 11,
            fontSize: "var(--p-fs-2xs)",
            fontWeight: "var(--p-fw-bold)",
            letterSpacing: "var(--p-track-mid)",
            color: "var(--text-on-accent)",
            background: "var(--color-accent)",
            padding: "2px 7px",
            borderRadius: "var(--p-r-sm)",
          }}
        >
          {badge}
        </span>
      )}
      <div
        style={{
          width: 30,
          height: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: active
            ? "1px solid var(--color-accent)"
            : "1px solid color-mix(in oklch,var(--color-accent),transparent 52%)",
          borderRadius: "var(--card-radius)",
          marginBottom: 9,
          color: "var(--color-accent)",
          filter: "drop-shadow(0 0 4px var(--glow))",
        }}
      >
        {icon}
      </div>
      <div style={{ fontSize: "var(--p-fs-sm)", color: "var(--text-dim)", marginBottom: 6, minHeight: "2.4em" }}>{name}</div>
      <div
        style={{
          fontVariantNumeric: "tabular-nums",
          fontSize: "var(--p-fs-lg)",
          fontWeight: "var(--p-fw-bold)",
          color: "var(--text-ink)",
          marginBottom: 8,
        }}
      >
        {goal}
      </div>
      <div style={{ height: 5, background: "var(--meter-track)", overflow: "hidden", marginBottom: 6, borderRadius: "var(--p-r-sm)" }}>
        <i style={{ display: "block", height: "100%", width: pct + "%", background: "var(--color-accent)", boxShadow: "0 0 8px var(--glow)" }} />
      </div>
      <div style={{ fontSize: "var(--p-fs-xs)", color: "var(--text-faint)" }}>{sub}</div>
    </div>
  );
}
