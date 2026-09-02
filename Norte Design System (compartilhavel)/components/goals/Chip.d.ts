import * as React from "react";

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Month label, e.g. "mar". */
  month?: React.ReactNode;
  /** Tabular value, e.g. "+3.000" or "·····". */
  value?: React.ReactNode;
  /** up = positive (blue), down = attention (violet), now = current month (lit). */
  variant?: "up" | "down" | "now";
}

/** A month cell in the history strip. */
export function Chip(props: ChipProps): JSX.Element;
