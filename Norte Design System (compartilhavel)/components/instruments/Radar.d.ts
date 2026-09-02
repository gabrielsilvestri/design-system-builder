import * as React from "react";

export interface RadarContact {
  /** Bearing in degrees — 0 = up (north), clockwise. */
  angle: number;
  /** Distance from center, 0..1. */
  dist: number;
  /** Blip color role. */
  variant?: "accent" | "accent2" | "crit";
  /** Draw a target-lock bracket around this contact. */
  lock?: boolean;
}

export interface RadarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Contacts to plot. */
  contacts?: RadarContact[];
  /** Diameter in px. Default 210. */
  size?: number;
  /** Run the rotating sweep beam. Default true. */
  sweep?: boolean;
}

/**
 * Sweeping search scope: rings, cross axes, rotating beam, contact blips.
 *
 * @startingPoint section="Norte" subtitle="Radar / search scope" viewport="240x240"
 */
export function Radar(props: RadarProps): JSX.Element;
