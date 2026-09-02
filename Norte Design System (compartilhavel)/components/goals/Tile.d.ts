import * as React from "react";

export interface TileProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Inline <svg> icon — use stroke="currentColor" fill="none". */
  icon?: React.ReactNode;
  /** Objective name (can wrap two lines). */
  name?: React.ReactNode;
  /** Goal amount, e.g. "R$ 10.000". */
  goal?: React.ReactNode;
  /** Progress toward the goal, 0–100. */
  progress?: number;
  /** Caption under the bar, e.g. "guardado R$ 0". */
  sub?: React.ReactNode;
  /** Lights the border + glow and shows the badge. */
  active?: boolean;
  /** Badge text shown when active. Default "ATIVA". */
  badge?: string;
}

/**
 * An objective card: icon, name, goal, progress bar, guardado caption.
 *
 * @startingPoint section="Norte" subtitle="Goal tile — default + active" viewport="220x200"
 */
export function Tile(props: TileProps): JSX.Element;
