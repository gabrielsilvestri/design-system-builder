import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card title — rendered in display caps, accent + glow. */
  title?: React.ReactNode;
  /** Leading mark glyph before the title. Default "◢". */
  mark?: string;
  /** Katakana seal, right-aligned in the header (e.g. "残高"). */
  seal?: string;
  /** Short uppercase code shown after the title (e.g. "FUEL"). */
  code?: string;
  /** Show the telemetry tick swatch in the header. Default false. */
  tick?: boolean;
  children?: React.ReactNode;
}

/**
 * Glass module with luminous corner brackets — the container for every
 * reading. Convention: one dominant <Value> at the top, <Row>s below.
 *
 * @startingPoint section="Norte" subtitle="Glass card — total on top, detail below" viewport="420x260"
 */
export function Card(props: CardProps): JSX.Element;
