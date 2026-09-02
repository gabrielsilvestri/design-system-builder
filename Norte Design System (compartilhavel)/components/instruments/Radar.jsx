import React from "react";

const blipColor = {
  accent: "var(--color-accent)",
  accent2: "var(--color-accent-2)",
  crit: "var(--color-danger)",
};

/**
 * Radar — the sweeping search scope. Concentric rings + cross axes, a rotating
 * accent beam, and contact blips positioned by angle (deg, 0 = up, clockwise)
 * and dist (0..1). A contact with `lock` gets an accent-2 target bracket.
 */
export function Radar({ contacts = [], size = 210, sweep = true, style, ...rest }) {
  const c = size / 2;
  const rmax = c - 9;
  const pos = (angle, dist) => {
    const a = (angle - 90) * (Math.PI / 180);
    return { x: c + Math.cos(a) * dist * rmax, y: c + Math.sin(a) * dist * rmax };
  };
  const ring = (f) => ({
    position: "absolute",
    left: "50%",
    top: "50%",
    width: rmax * 2 * f,
    height: rmax * 2 * f,
    transform: "translate(-50%,-50%)",
    borderRadius: "50%",
    border: "1px solid color-mix(in oklch,var(--color-accent),transparent 78%)",
    pointerEvents: "none",
  });
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 50%, color-mix(in oklch,var(--color-accent),transparent 86%), var(--surface-deep) 72%)",
        border: "1px solid var(--surface-line-str)",
        boxShadow: "inset 0 0 26px color-mix(in oklch,var(--color-accent),transparent 80%)",
        ...style,
      }}
      {...rest}
    >
      <span style={ring(1)} />
      <span style={ring(0.66)} />
      <span style={ring(0.33)} />
      <span style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 1, background: "color-mix(in oklch,var(--color-accent),transparent 80%)" }} />
      <span style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 1, background: "color-mix(in oklch,var(--color-accent),transparent 80%)" }} />

      {sweep && (
        <span
          className="nt-sweep"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            pointerEvents: "none",
            background:
              "conic-gradient(from -8deg, color-mix(in oklch,var(--color-accent),transparent 38%), color-mix(in oklch,var(--color-accent),transparent 88%) 42deg, transparent 70deg)",
          }}
        />
      )}

      {contacts.map((ct, i) => {
        const p = pos(ct.angle, ct.dist);
        const col = blipColor[ct.variant] || "var(--color-accent)";
        return (
          <React.Fragment key={i}>
            {ct.lock && (
              <span
                style={{
                  position: "absolute",
                  left: p.x,
                  top: p.y,
                  width: 20,
                  height: 20,
                  transform: "translate(-50%,-50%)",
                  border: "1px solid var(--color-accent-2)",
                  boxShadow: "0 0 9px var(--glow-2)",
                  pointerEvents: "none",
                }}
              />
            )}
            <span
              className="nt-blip"
              style={{
                position: "absolute",
                left: p.x,
                top: p.y,
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: col,
                boxShadow: `0 0 8px ${col}`,
                animationDelay: `${(i % 5) * 0.4}s`,
              }}
            />
          </React.Fragment>
        );
      })}

      <span
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 5,
          height: 5,
          transform: "translate(-50%,-50%)",
          borderRadius: "50%",
          background: "var(--color-accent)",
          boxShadow: "0 0 10px var(--color-accent)",
        }}
      />
    </div>
  );
}
