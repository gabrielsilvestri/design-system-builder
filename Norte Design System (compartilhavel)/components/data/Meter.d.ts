import * as React from "react";

export interface MeterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Fill percentage, 0–100. */
  value?: number;
}

/**
 * Single segmented gauge — "the tank". One accent fill with a tick overlay.
 *
 * @startingPoint section="Norte" subtitle="Segmented gauge / fuel tank" viewport="320x40"
 */
export function Meter(props: MeterProps): JSX.Element;
