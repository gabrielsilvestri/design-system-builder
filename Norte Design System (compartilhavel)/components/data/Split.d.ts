import * as React from "react";

export interface SplitProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Side A (accent / blue) percentage, 0–100. */
  a?: number;
  /** Side B (accent-2 / violet) percentage. Defaults to 100 − a. */
  b?: number;
}

/** Two-proportion bar — blue vs violet, e.g. who contributed more. */
export function Split(props: SplitProps): JSX.Element;
