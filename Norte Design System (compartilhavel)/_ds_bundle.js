/* @ds-bundle: {"format":3,"namespace":"NorteDesignSystem_23eb33","components":[{"name":"Card","sourcePath":"components/card/Card.jsx"},{"name":"Group","sourcePath":"components/card/Group.jsx"},{"name":"Row","sourcePath":"components/card/Row.jsx"},{"name":"Rows","sourcePath":"components/card/Row.jsx"},{"name":"Value","sourcePath":"components/card/Value.jsx"},{"name":"Sub","sourcePath":"components/card/Value.jsx"},{"name":"Crown","sourcePath":"components/data/Crown.jsx"},{"name":"Meter","sourcePath":"components/data/Meter.jsx"},{"name":"Split","sourcePath":"components/data/Split.jsx"},{"name":"Chip","sourcePath":"components/goals/Chip.jsx"},{"name":"Tile","sourcePath":"components/goals/Tile.jsx"},{"name":"Radar","sourcePath":"components/instruments/Radar.jsx"},{"name":"Hud","sourcePath":"components/surface/Hud.jsx"},{"name":"Surface","sourcePath":"components/surface/Surface.jsx"}],"sourceHashes":{"components/card/Card.jsx":"6b6f39e3dda9","components/card/Group.jsx":"10450c4a5124","components/card/Row.jsx":"c8b770cda517","components/card/Value.jsx":"07922369c8a8","components/data/Crown.jsx":"d722baa6a1e8","components/data/Meter.jsx":"21167b08e77d","components/data/Split.jsx":"7bd19e240f40","components/goals/Chip.jsx":"5129dd5f1a42","components/goals/Tile.jsx":"36cbac0a734c","components/instruments/Radar.jsx":"3a026d6c33f3","components/surface/Hud.jsx":"f6aa372a0091","components/surface/Surface.jsx":"8291c16946bb","ui_kits/norte/Panel.jsx":"99d9c5853d73"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NorteDesignSystem_23eb33 = window.NorteDesignSystem_23eb33 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/card/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const bracket = {
  position: "absolute",
  width: 14,
  height: 14,
  pointerEvents: "none"
};

/**
 * Card — the glass module every Norte reading lives in.
 * Brackets on the top-left + bottom-right, a header with title, optional
 * katakana seal / code / tick, then children (a Value + Rows by convention).
 *
 * Non-negotiable card pattern: one dominant Value at the top, detail below.
 */
function Card({
  title,
  mark = "◢",
  seal,
  code,
  tick = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      padding: "var(--card-pad)",
      color: "var(--text-ink)",
      borderRadius: "var(--card-radius)",
      background: "var(--card-bg)",
      backdropFilter: "blur(var(--p-blur))",
      WebkitBackdropFilter: "blur(var(--p-blur))",
      border: "1px solid var(--card-border)",
      boxShadow: "var(--card-shadow)",
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--p-sp-2)",
      marginBottom: "var(--p-sp-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)",
      fontSize: "var(--p-fs-2xs)"
    }
  }, mark), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--p-fs-sm)",
      fontWeight: "var(--p-fw-semi)",
      letterSpacing: "var(--p-track-wide)",
      textTransform: "uppercase",
      color: "var(--color-accent)",
      textShadow: "0 0 9px var(--glow)"
    }
  }, title), code && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--p-fs-xs)",
      color: "var(--text-faint)",
      letterSpacing: ".08em",
      marginLeft: "var(--p-sp-3)"
    }
  }, code), tick && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "var(--p-sp-3)",
      width: 34,
      height: 9,
      background: "repeating-linear-gradient(90deg,color-mix(in oklch,var(--color-accent),transparent 55%) 0 2px,transparent 2px 5px)"
    }
  }), seal && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontSize: "var(--p-fs-xs)",
      letterSpacing: ".16em",
      color: "color-mix(in oklch,var(--color-accent),transparent 38%)"
    }
  }, seal)), children, /*#__PURE__*/React.createElement("span", {
    style: {
      ...bracket,
      left: -1,
      top: -1,
      borderTop: "2px solid var(--card-bracket)",
      borderLeft: "2px solid var(--card-bracket)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...bracket,
      right: -1,
      bottom: -1,
      borderBottom: "2px solid var(--card-bracket)",
      borderRight: "2px solid var(--card-bracket)"
    }
  }));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/card/Card.jsx", error: String((e && e.message) || e) }); }

// components/card/Group.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Group — a subtotal divider inside a card (e.g. "Fixos … R$ 5.700").
 * Accent uppercase label on the left, a bold tabular total on the right.
 */
function Group({
  label,
  total,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginTop: "var(--p-sp-4)",
      marginBottom: 2,
      fontSize: "var(--p-fs-xs)",
      letterSpacing: "var(--p-track-mid)",
      textTransform: "uppercase",
      color: "var(--color-accent)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("b", {
    style: {
      fontVariantNumeric: "tabular-nums",
      color: "var(--text-ink)",
      fontSize: "var(--p-fs-md)"
    }
  }, total));
}
Object.assign(__ds_scope, { Group });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/card/Group.jsx", error: String((e && e.message) || e) }); }

// components/card/Row.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const vVariant = {
  soft: {
    color: "var(--text-faint)",
    fontStyle: "italic",
    fontWeight: "var(--p-fw-reg)"
  },
  accent: {
    color: "var(--color-accent)"
  },
  accent2: {
    color: "var(--color-accent-2)"
  }
};

/**
 * Row — a detail line inside a card (label left, value right).
 * The key carries a ▸ marker. Value can be tinted via `variant`.
 * Pass `sub` for a quiet second line under the key (e.g. a due date).
 */
function Row({
  k,
  v,
  variant,
  sub,
  _first,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 10,
      padding: "6px 0",
      borderTop: _first ? "none" : "1px solid var(--surface-line)",
      fontSize: "var(--p-fs-md)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-dim)",
      display: "flex",
      gap: 7,
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)"
    }
  }, "\u25B8"), /*#__PURE__*/React.createElement("span", null, k, sub && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--p-fs-xs)",
      color: "var(--text-faint)"
    }
  }, sub))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: "tabular-nums",
      fontWeight: "var(--p-fw-med)",
      color: "var(--text-ink)",
      ...(vVariant[variant] || {})
    }
  }, v));
}

/** Rows — the detail block under a Value. Strips the top border off the first Row. */
function Rows({
  children,
  style,
  ...rest
}) {
  const items = React.Children.toArray(children).filter(Boolean);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      marginTop: "var(--p-sp-3)",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), items.map((child, i) => React.isValidElement(child) ? React.cloneElement(child, {
    _first: i === 0
  }) : child));
}
Object.assign(__ds_scope, { Row, Rows });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/card/Row.jsx", error: String((e && e.message) || e) }); }

// components/card/Value.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const variantColor = {
  positive: "var(--color-positive)",
  attention: "var(--color-attention)"
};

/**
 * Value — the one dominant number per card. Tabular mono, never glowing
 * (decision: --value-glow stays none; glow lives on frames, not digits).
 * `prefix` renders small (e.g. "R$ "), `cents` renders as a small suffix.
 */
function Value({
  prefix,
  cents,
  suffix,
  variant,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontVariantNumeric: "tabular-nums",
      fontSize: "var(--p-fs-2xl)",
      fontWeight: "var(--p-fw-semi)",
      letterSpacing: "-.02em",
      lineHeight: 1,
      color: variantColor[variant] || "var(--text-ink)",
      textShadow: "var(--value-glow)",
      ...style
    }
  }, rest), prefix && /*#__PURE__*/React.createElement("small", {
    style: {
      fontSize: ".4em",
      color: "var(--text-faint)",
      fontWeight: "var(--p-fw-med)"
    }
  }, prefix), children, cents && /*#__PURE__*/React.createElement("i", {
    style: {
      fontSize: ".46em",
      color: "var(--text-faint)",
      fontStyle: "normal"
    }
  }, cents), suffix && /*#__PURE__*/React.createElement("i", {
    style: {
      fontSize: ".46em",
      color: "var(--text-faint)",
      fontStyle: "normal"
    }
  }, suffix));
}

/** Sub — the quiet caption directly under a Value ("o que temos agora"). */
function Sub({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontSize: "var(--p-fs-sm)",
      color: "var(--text-faint)",
      marginTop: "var(--p-sp-1)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Value, Sub });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/card/Value.jsx", error: String((e && e.message) || e) }); }

// components/data/Crown.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Crown — the small violet marker that flags who did more. Drops a glow.
 * Inline with a Row value: <Row v={<>R$ 12.000 <Crown/></>} />.
 */
function Crown({
  size = 23,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    style: {
      fill: "var(--color-accent-2)",
      filter: "drop-shadow(0 0 6px var(--color-accent-2))",
      verticalAlign: -3,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M4 17.5 1.3 6 7.5 9.8 12 2.5 16.5 9.8 22.7 6 20 17.5z"
  }));
}
Object.assign(__ds_scope, { Crown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Crown.jsx", error: String((e && e.message) || e) }); }

// components/data/Meter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Meter — the single segmented gauge ("the tank"). Fill grows left→right
 * with an accent gradient + glow; a tick overlay reads it like an instrument.
 */
function Meter({
  value = 0,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      height: "var(--meter-h)",
      background: "var(--meter-track)",
      border: "1px solid var(--surface-line)",
      overflow: "hidden",
      borderRadius: "var(--p-r-sm)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      height: "100%",
      width: pct + "%",
      background: "linear-gradient(90deg, color-mix(in oklch,var(--color-accent),transparent 35%), var(--color-accent))",
      boxShadow: "0 0 14px var(--glow)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      content: '""',
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "repeating-linear-gradient(90deg, transparent 0 calc(var(--meter-tick-gap) - 1px), var(--meter-tick) calc(var(--meter-tick-gap) - 1px) var(--meter-tick-gap))"
    }
  }));
}
Object.assign(__ds_scope, { Meter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Meter.jsx", error: String((e && e.message) || e) }); }

// components/data/Split.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Split — a two-proportion bar ("who did more"). Side A is accent (blue),
 * side B is accent-2 (violet); a tick overlay reads it like a gauge.
 */
function Split({
  a = 50,
  b,
  style,
  ...rest
}) {
  const aPct = Math.max(0, Math.min(100, a));
  const bPct = b == null ? 100 - aPct : Math.max(0, Math.min(100, b));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      display: "flex",
      height: 13,
      border: "1px solid var(--surface-line)",
      borderRadius: "var(--p-r-sm)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    style: {
      width: aPct + "%",
      background: "var(--color-accent)",
      boxShadow: "0 0 12px var(--glow)"
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      width: bPct + "%",
      background: "var(--color-accent-2)",
      boxShadow: "0 0 12px var(--glow-2)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "repeating-linear-gradient(90deg, transparent 0 11px, var(--meter-tick) 11px 12px)"
    }
  }));
}
Object.assign(__ds_scope, { Split });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Split.jsx", error: String((e && e.message) || e) }); }

// components/goals/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const valueColor = {
  up: "var(--color-positive)",
  down: "var(--color-attention)",
  now: "var(--color-accent)"
};

/**
 * Chip — a month cell in the history strip. `up` tints the value blue,
 * `down` violet, `now` lights the whole chip (accent border + glow).
 */
function Chip({
  month,
  value,
  variant,
  style,
  ...rest
}) {
  const isNow = variant === "now";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--tile-bg)",
      border: isNow ? "1px solid var(--color-accent)" : "1px solid var(--surface-line)",
      boxShadow: isNow ? "0 0 12px color-mix(in oklch,var(--color-accent),transparent 78%)" : "none",
      padding: "9px 10px",
      borderRadius: "var(--card-radius)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--p-fs-xs)",
      color: "var(--text-faint)",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, month), /*#__PURE__*/React.createElement("div", {
    style: {
      fontVariantNumeric: "tabular-nums",
      fontSize: "var(--p-fs-md)",
      fontWeight: "var(--p-fw-semi)",
      color: valueColor[variant] || "var(--text-ink)"
    }
  }, value));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/goals/Chip.jsx", error: String((e && e.message) || e) }); }

// components/goals/Tile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tile — an objective ("goal") card. Icon, name, goal amount, a thin progress
 * bar, and a guardado caption. `active` lights the border + glow and shows an
 * "ATIVA" badge. Pass `icon` as an inline <svg> using stroke="currentColor".
 */
function Tile({
  icon,
  name,
  goal,
  progress = 0,
  sub,
  active = false,
  badge = "ATIVA",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pct = Math.max(0, Math.min(100, progress));
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      padding: "var(--p-sp-3)",
      borderRadius: "var(--card-radius)",
      border: active ? "1px solid var(--color-accent)" : `1px solid ${hover ? "var(--surface-line-str)" : "var(--surface-line)"}`,
      background: active ? "linear-gradient(160deg, color-mix(in oklch,var(--color-accent),transparent 80%), transparent 60%)" : "var(--tile-bg)",
      boxShadow: active ? "0 0 20px color-mix(in oklch,var(--color-accent),transparent 75%), inset 0 0 16px color-mix(in oklch,var(--color-accent),transparent 90%)" : "none",
      transition: "border-color .15s ease",
      ...style
    }
  }, rest), active && badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 11,
      right: 11,
      fontSize: "var(--p-fs-2xs)",
      fontWeight: "var(--p-fw-bold)",
      letterSpacing: "var(--p-track-mid)",
      color: "var(--text-on-accent)",
      background: "var(--color-accent)",
      padding: "2px 7px",
      borderRadius: "var(--p-r-sm)"
    }
  }, badge), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: active ? "1px solid var(--color-accent)" : "1px solid color-mix(in oklch,var(--color-accent),transparent 52%)",
      borderRadius: "var(--card-radius)",
      marginBottom: 9,
      color: "var(--color-accent)",
      filter: "drop-shadow(0 0 4px var(--glow))"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--p-fs-sm)",
      color: "var(--text-dim)",
      marginBottom: 6,
      minHeight: "2.4em"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontVariantNumeric: "tabular-nums",
      fontSize: "var(--p-fs-lg)",
      fontWeight: "var(--p-fw-bold)",
      color: "var(--text-ink)",
      marginBottom: 8
    }
  }, goal), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: "var(--meter-track)",
      overflow: "hidden",
      marginBottom: 6,
      borderRadius: "var(--p-r-sm)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      display: "block",
      height: "100%",
      width: pct + "%",
      background: "var(--color-accent)",
      boxShadow: "0 0 8px var(--glow)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--p-fs-xs)",
      color: "var(--text-faint)"
    }
  }, sub));
}
Object.assign(__ds_scope, { Tile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/goals/Tile.jsx", error: String((e && e.message) || e) }); }

// components/instruments/Radar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const blipColor = {
  accent: "var(--color-accent)",
  accent2: "var(--color-accent-2)",
  crit: "var(--color-danger)"
};

/**
 * Radar — the sweeping search scope. Concentric rings + cross axes, a rotating
 * accent beam, and contact blips positioned by angle (deg, 0 = up, clockwise)
 * and dist (0..1). A contact with `lock` gets an accent-2 target bracket.
 */
function Radar({
  contacts = [],
  size = 210,
  sweep = true,
  style,
  ...rest
}) {
  const c = size / 2;
  const rmax = c - 9;
  const pos = (angle, dist) => {
    const a = (angle - 90) * (Math.PI / 180);
    return {
      x: c + Math.cos(a) * dist * rmax,
      y: c + Math.sin(a) * dist * rmax
    };
  };
  const ring = f => ({
    position: "absolute",
    left: "50%",
    top: "50%",
    width: rmax * 2 * f,
    height: rmax * 2 * f,
    transform: "translate(-50%,-50%)",
    borderRadius: "50%",
    border: "1px solid color-mix(in oklch,var(--color-accent),transparent 78%)",
    pointerEvents: "none"
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      width: size,
      height: size,
      borderRadius: "50%",
      overflow: "hidden",
      background: "radial-gradient(circle at 50% 50%, color-mix(in oklch,var(--color-accent),transparent 86%), var(--surface-deep) 72%)",
      border: "1px solid var(--surface-line-str)",
      boxShadow: "inset 0 0 26px color-mix(in oklch,var(--color-accent),transparent 80%)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: ring(1)
  }), /*#__PURE__*/React.createElement("span", {
    style: ring(0.66)
  }), /*#__PURE__*/React.createElement("span", {
    style: ring(0.33)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "50%",
      height: 1,
      background: "color-mix(in oklch,var(--color-accent),transparent 80%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "50%",
      width: 1,
      background: "color-mix(in oklch,var(--color-accent),transparent 80%)"
    }
  }), sweep && /*#__PURE__*/React.createElement("span", {
    className: "nt-sweep",
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      pointerEvents: "none",
      background: "conic-gradient(from -8deg, color-mix(in oklch,var(--color-accent),transparent 38%), color-mix(in oklch,var(--color-accent),transparent 88%) 42deg, transparent 70deg)"
    }
  }), contacts.map((ct, i) => {
    const p = pos(ct.angle, ct.dist);
    const col = blipColor[ct.variant] || "var(--color-accent)";
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, ct.lock && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: p.x,
        top: p.y,
        width: 20,
        height: 20,
        transform: "translate(-50%,-50%)",
        border: "1px solid var(--color-accent-2)",
        boxShadow: "0 0 9px var(--glow-2)",
        pointerEvents: "none"
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "nt-blip",
      style: {
        position: "absolute",
        left: p.x,
        top: p.y,
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: col,
        boxShadow: `0 0 8px ${col}`,
        animationDelay: `${i % 5 * 0.4}s`
      }
    }));
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: 5,
      height: 5,
      transform: "translate(-50%,-50%)",
      borderRadius: "50%",
      background: "var(--color-accent)",
      boxShadow: "0 0 10px var(--color-accent)"
    }
  }));
}
Object.assign(__ds_scope, { Radar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/instruments/Radar.jsx", error: String((e && e.message) || e) }); }

// components/surface/Hud.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const bracket = {
  position: "absolute",
  width: 14,
  height: 14,
  pointerEvents: "none"
};

/**
 * Hud — the cockpit status bar that sits at the top of a Norte panel.
 * Brand hex on the left, link/session telemetry, a dashed grow line,
 * then the katakana system seal and sync state on the right.
 */
function Hud({
  brand = "NORTE.SYS",
  badge = "N",
  link = "LINK ESTÁVEL",
  session,
  seal = "家計システム",
  sync = "OK",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      gap: "var(--p-sp-4)",
      padding: "var(--hud-pad)",
      fontSize: "var(--p-fs-sm)",
      letterSpacing: "var(--p-track-mid)",
      background: "linear-gradient(90deg, color-mix(in oklch,var(--color-accent),transparent 90%), transparent 60%)",
      border: "1px solid var(--surface-line)",
      borderRadius: "var(--card-radius)",
      color: "var(--text-dim)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--p-sp-2)",
      color: "var(--color-accent)",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--p-fw-semi)",
      letterSpacing: ".1em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--p-fw-bold)",
      fontSize: "var(--p-fs-md)",
      color: "var(--text-on-accent)",
      background: "linear-gradient(150deg,var(--color-accent),var(--color-accent-2))",
      clipPath: "polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)"
    }
  }, badge), brand), link && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--color-accent)",
      boxShadow: "0 0 9px var(--color-accent)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, link)), session && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 16,
      background: "var(--surface-line)"
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, "SESS\xC3O "), session)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "repeating-linear-gradient(90deg,var(--surface-line) 0 4px,transparent 4px 9px)"
    }
  }), seal && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "color-mix(in oklch,var(--color-accent),transparent 40%)",
      letterSpacing: ".2em"
    }
  }, seal), sync && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 16,
      background: "var(--surface-line)"
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, "SYNC "), sync)), /*#__PURE__*/React.createElement("span", {
    style: {
      ...bracket,
      left: -1,
      top: -1,
      borderTop: "2px solid var(--card-bracket)",
      borderLeft: "2px solid var(--card-bracket)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...bracket,
      right: -1,
      bottom: -1,
      borderBottom: "2px solid var(--card-bracket)",
      borderRight: "2px solid var(--card-bracket)"
    }
  }));
}
Object.assign(__ds_scope, { Hud });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/Hud.jsx", error: String((e && e.message) || e) }); }

// components/surface/Surface.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface — the cockpit background for any Norte screen.
 * Applies the CRT scanline + telemetry grid + corner radials over the
 * void base. Wrap a whole view in it; everything else sits on top.
 */
function Surface({
  children,
  style,
  ...rest
}) {
  const surfaceStyle = {
    minHeight: "100%",
    color: "var(--text-ink)",
    fontFamily: "var(--font-mono)",
    fontSize: "var(--p-fs-base)",
    lineHeight: 1.4,
    backgroundColor: "var(--surface-void)",
    backgroundImage: ["repeating-linear-gradient(0deg, oklch(0.07 0.02 268 / .5) 0 1px, transparent 1px 3px)", "linear-gradient(0deg, var(--surface-grid) 0 1px, transparent 1px 48px)", "linear-gradient(90deg, var(--surface-grid) 0 1px, transparent 1px 48px)", "radial-gradient(90% 60% at 78% -10%, color-mix(in oklch,var(--color-accent),transparent 55%), transparent 60%)", "radial-gradient(70% 50% at 8% 110%, color-mix(in oklch,var(--color-accent-2),transparent 65%), transparent 60%)"].join(","),
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: surfaceStyle
  }, rest), children);
}
Object.assign(__ds_scope, { Surface });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/Surface.jsx", error: String((e && e.message) || e) }); }

// ui_kits/norte/Panel.jsx
try { (() => {
/* global React */
// Norte · painel do casal — template screen. Reads the DS namespace at render
// time so it works no matter when ds-base.js finishes loading the bundle.
function Panel() {
  const NS = window.NorteDesignSystem_23eb33;
  const [, force] = React.useState(0);
  React.useEffect(() => {
    if (NS) return;
    const t = setInterval(() => {
      if (window.NorteDesignSystem_23eb33) {
        clearInterval(t);
        force(n => n + 1);
      }
    }, 60);
    return () => clearInterval(t);
  }, [NS]);
  if (!NS) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "var(--font-mono)",
        color: "var(--text-faint)"
      }
    }, "carregando sistema\u2026");
  }
  const {
    Surface,
    Hud,
    Card,
    Value,
    Sub,
    Rows,
    Row,
    Group,
    Meter,
    Split,
    Crown,
    Tile,
    Chip
  } = NS;
  const shield = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s7-3.5 7-9V6l-7-3-7 3v6c0 5.5 7 9 7 9z"
  }));
  const paw = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "12",
    cy: "15.5",
    rx: "3.4",
    ry: "2.7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7.3",
    cy: "11.2",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16.7",
    cy: "11.2",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.7",
    cy: "8",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "14.3",
    cy: "8",
    r: "1.4"
  }));
  const plane = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 12l18-8-8 18-2-8-8-2z"
  }));
  const house = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 11l8-7 8 7M6 10v9h12v-9"
  }));
  const GOALS = [{
    id: "reserva",
    icon: shield,
    name: "Reserva de emergência",
    goal: "R$ 10.000",
    progress: 0,
    sub: "guardado R$ 0"
  }, {
    id: "pet",
    icon: paw,
    name: "Arranhador do pet",
    goal: "R$ 3.000",
    progress: 0,
    sub: "guardado R$ 0"
  }, {
    id: "viagem",
    icon: plane,
    name: "Viagem do casal",
    goal: "R$ 8.000",
    progress: 0,
    sub: "guardado R$ 0"
  }, {
    id: "casa",
    icon: house,
    name: "Entrada do apê",
    goal: "R$ 40.000",
    progress: 0,
    sub: "guardado R$ 0"
  }];
  function PanelInner() {
    const [active, setActive] = React.useState("reserva");
    return /*#__PURE__*/React.createElement(Surface, {
      style: {
        minHeight: "100vh",
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--p-sp-3)",
        maxWidth: 1280,
        margin: "0 auto",
        gridTemplateColumns: ".9fr 1.1fr 1.05fr",
        gridTemplateAreas: '"hud hud hud" "sal pag tnk" "sal cst qfz" "div cst obj" "div cst obj" "mes mes mes"'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        gridArea: "hud"
      }
    }, /*#__PURE__*/React.createElement(Hud, {
      session: "Pessoa A \xD7 Pessoa B",
      sync: "OK"
    })), /*#__PURE__*/React.createElement(Card, {
      title: "Saldo em conta",
      seal: "\u6B8B\u9AD8",
      tick: true,
      style: {
        gridArea: "sal"
      }
    }, /*#__PURE__*/React.createElement(Value, {
      prefix: "R$ ",
      cents: ",00",
      variant: "positive"
    }, "12.000"), /*#__PURE__*/React.createElement(Sub, null, "o que temos agora \xB7 fech 30/06"), /*#__PURE__*/React.createElement(Rows, null, /*#__PURE__*/React.createElement(Row, {
      k: "Conta Pessoa A",
      v: "R$ 8.000,00",
      variant: "accent"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Conta Pessoa B",
      v: "R$ 4.000,00",
      variant: "accent2"
    }))), /*#__PURE__*/React.createElement(Card, {
      title: "Contas a pagar",
      seal: "\u652F\u6255",
      style: {
        gridArea: "pag"
      }
    }, /*#__PURE__*/React.createElement(Value, {
      prefix: "R$ "
    }, "2.000"), /*#__PURE__*/React.createElement(Sub, null, "vence nos pr\xF3ximos 7 dias"), /*#__PURE__*/React.createElement(Rows, null, /*#__PURE__*/React.createElement(Row, {
      k: "Cart\xE3o Pessoa A",
      sub: "venc 10/07",
      v: "R$ 1.000"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Cart\xE3o Pessoa B",
      sub: "venc 15/07",
      v: "R$ 800"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Internet",
      sub: "venc 20/07",
      v: "R$ 200",
      variant: "soft"
    }))), /*#__PURE__*/React.createElement(Card, {
      title: "Tanque",
      seal: "\u71C3\u6599",
      code: "FUEL",
      style: {
        gridArea: "tnk"
      }
    }, /*#__PURE__*/React.createElement(Value, {
      variant: "attention",
      prefix: "R$ ",
      style: {
        marginBottom: 10
      }
    }, "8.000"), /*#__PURE__*/React.createElement(Meter, {
      value: 55
    }), /*#__PURE__*/React.createElement(Sub, null, "j\xE1 entraram R$ 10.000 \xB7 55% \xB7 meta R$ 18.000")), /*#__PURE__*/React.createElement(Card, {
      title: "Custo de vida",
      seal: "\u751F\u6D3B\u8CBB",
      style: {
        gridArea: "cst"
      }
    }, /*#__PURE__*/React.createElement(Value, {
      prefix: "R$ "
    }, "14.700"), /*#__PURE__*/React.createElement(Sub, null, "o que a vida custou este m\xEAs"), /*#__PURE__*/React.createElement(Group, {
      label: "Fixos",
      total: "R$ 5.700"
    }), /*#__PURE__*/React.createElement(Rows, null, /*#__PURE__*/React.createElement(Row, {
      k: "Aluguel",
      v: "R$ 4.000"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Luz",
      v: "R$ 500"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Condom\xEDnio",
      v: "R$ 600"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Internet",
      v: "R$ 200",
      variant: "soft"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Pet (ra\xE7\xE3o + areia)",
      v: "R$ 400"
    })), /*#__PURE__*/React.createElement(Group, {
      label: "Vari\xE1veis",
      total: "R$ 9.000"
    }), /*#__PURE__*/React.createElement(Rows, null, /*#__PURE__*/React.createElement(Row, {
      k: "Mercado",
      v: "R$ 4.000"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Restaurantes",
      v: "R$ 2.000"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Transporte",
      v: "R$ 1.000",
      variant: "soft"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Lazer",
      v: "R$ 2.000"
    }))), /*#__PURE__*/React.createElement(Card, {
      title: "Quem fez",
      seal: "\u53CE\u5165",
      style: {
        gridArea: "qfz"
      }
    }, /*#__PURE__*/React.createElement(Rows, {
      style: {
        marginTop: 0
      }
    }, /*#__PURE__*/React.createElement(Row, {
      k: "Pessoa A",
      v: "R$ 12.000",
      variant: "accent"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Pessoa B",
      v: /*#__PURE__*/React.createElement(React.Fragment, null, "R$ 12.000 ", /*#__PURE__*/React.createElement(Crown, null)),
      variant: "accent2"
    })), /*#__PURE__*/React.createElement(Split, {
      a: 50,
      style: {
        marginTop: 12
      }
    }), /*#__PURE__*/React.createElement(Sub, null, "receita combinada R$ 24.000 \xB7 quase empatados")), /*#__PURE__*/React.createElement(Card, {
      title: "D\xEDvidas",
      seal: "\u8CA0\u50B5",
      style: {
        gridArea: "div"
      }
    }, /*#__PURE__*/React.createElement(Value, {
      variant: "attention",
      prefix: "R$ "
    }, "6.500"), /*#__PURE__*/React.createElement(Sub, null, "separado do gasto do m\xEAs"), /*#__PURE__*/React.createElement(Rows, null, /*#__PURE__*/React.createElement(Row, {
      k: "Financiamento do carro",
      sub: "18 de 36 parcelas",
      v: "R$ 5.000",
      variant: "accent2"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Parcelado geladeira",
      sub: "3 de 10 parcelas",
      v: "R$ 1.500",
      variant: "accent2"
    }))), /*#__PURE__*/React.createElement(Card, {
      title: "Objetivos",
      seal: "\u76EE\u6A19",
      style: {
        gridArea: "obj"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10,
        marginTop: 4
      }
    }, GOALS.map(g => /*#__PURE__*/React.createElement(Tile, {
      key: g.id,
      icon: g.icon,
      name: g.name,
      goal: g.goal,
      progress: g.progress,
      sub: g.sub,
      active: active === g.id,
      onClick: () => setActive(g.id),
      style: {
        cursor: "pointer"
      }
    }))), /*#__PURE__*/React.createElement(Sub, {
      style: {
        marginTop: 10
      }
    }, "toque pra definir a meta ativa do m\xEAs")), /*#__PURE__*/React.createElement(Card, {
      title: "Hist\xF3rico mensal",
      seal: "\u6708\u6B21",
      code: "2026",
      style: {
        gridArea: "mes"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(6,1fr)",
        gap: 9
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      month: "jan",
      value: "\u22122.000",
      variant: "down"
    }), /*#__PURE__*/React.createElement(Chip, {
      month: "fev",
      value: "\u22121.500",
      variant: "down"
    }), /*#__PURE__*/React.createElement(Chip, {
      month: "mar",
      value: "+3.000",
      variant: "up"
    }), /*#__PURE__*/React.createElement(Chip, {
      month: "abr",
      value: "\u22121.000",
      variant: "down"
    }), /*#__PURE__*/React.createElement(Chip, {
      month: "mai",
      value: "\u22122.500",
      variant: "down"
    }), /*#__PURE__*/React.createElement(Chip, {
      month: "jun",
      value: "\xB7\xB7\xB7\xB7\xB7",
      variant: "now"
    })))));
  }
  return /*#__PURE__*/React.createElement(PanelInner, null);
}
window.Panel = Panel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/norte/Panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Group = __ds_scope.Group;

__ds_ns.Row = __ds_scope.Row;

__ds_ns.Rows = __ds_scope.Rows;

__ds_ns.Value = __ds_scope.Value;

__ds_ns.Sub = __ds_scope.Sub;

__ds_ns.Crown = __ds_scope.Crown;

__ds_ns.Meter = __ds_scope.Meter;

__ds_ns.Split = __ds_scope.Split;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Tile = __ds_scope.Tile;

__ds_ns.Radar = __ds_scope.Radar;

__ds_ns.Hud = __ds_scope.Hud;

__ds_ns.Surface = __ds_scope.Surface;

})();
