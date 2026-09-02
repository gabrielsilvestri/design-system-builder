import * as React from "react";

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Label on the left (carries the ▸ marker). */
  k?: React.ReactNode;
  /** Value on the right. */
  v?: React.ReactNode;
  /** Tint for the value. */
  variant?: "soft" | "accent" | "accent2";
  /** Quiet second line under the key (e.g. "venc 10/07"). */
  sub?: React.ReactNode;
}

/** A detail line: label + ▸ on the left, tabular value on the right. */
export function Row(props: RowProps): JSX.Element;

export interface RowsProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
/** Wrapper for a block of Rows — removes the top border of the first Row. */
export function Rows(props: RowsProps): JSX.Element;
