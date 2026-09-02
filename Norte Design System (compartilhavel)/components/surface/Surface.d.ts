import * as React from "react";

export interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

/**
 * Cockpit background: CRT scanline + telemetry grid + neon corner radials
 * over the void base. Wrap an entire Norte view in it.
 *
 * @startingPoint section="Norte" subtitle="Empty cockpit surface to build a panel on" viewport="1280x720"
 */
export function Surface(props: SurfaceProps): JSX.Element;
