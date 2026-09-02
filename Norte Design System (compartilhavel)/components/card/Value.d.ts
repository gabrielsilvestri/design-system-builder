import * as React from "react";

export interface ValueProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small leading unit, e.g. "R$ ". */
  prefix?: string;
  /** Small trailing cents, e.g. ",00". */
  cents?: string;
  /** Small trailing suffix (alias of cents for non-currency). */
  suffix?: string;
  /** Color role. Omit for neutral ink. */
  variant?: "positive" | "attention";
  /** The integer part of the number. */
  children?: React.ReactNode;
}

/**
 * The single dominant number of a card. Tabular mono, never glows.
 *
 * @startingPoint section="Norte" subtitle="Dominant tabular value" viewport="320x120"
 */
export function Value(props: ValueProps): JSX.Element;

export interface SubProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
/** Quiet caption directly under a Value. */
export function Sub(props: SubProps): JSX.Element;
