import * as React from "react";

export interface GroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase accent label, e.g. "Fixos". */
  label?: React.ReactNode;
  /** Bold tabular subtotal, e.g. "R$ 5.700". */
  total?: React.ReactNode;
}

/** A subtotal divider inside a card — accent label left, bold total right. */
export function Group(props: GroupProps): JSX.Element;
