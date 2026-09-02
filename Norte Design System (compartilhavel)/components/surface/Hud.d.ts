import * as React from "react";

export interface HudProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Brand wordmark next to the hex badge. Default "NORTE.SYS". */
  brand?: string;
  /** Single glyph inside the hex badge. Default "N". */
  badge?: string;
  /** Link-status label. Pass "" to hide the dot + label. Default "LINK ESTÁVEL". */
  link?: string;
  /** Session label, e.g. "Pessoa A × Pessoa B". Hidden when omitted. */
  session?: string;
  /** Katakana system seal on the right. Default "家計システム". */
  seal?: string;
  /** Sync state. Default "OK". */
  sync?: string;
}

/**
 * Cockpit status bar for the top of a Norte panel: brand hex, link/session
 * telemetry, a dashed grow line, katakana seal, and sync state.
 *
 * @startingPoint section="Norte" subtitle="Cockpit HUD status bar" viewport="1280x80"
 */
export function Hud(props: HudProps): JSX.Element;
