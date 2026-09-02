import * as React from "react";

export interface CrownProps extends React.SVGProps<SVGSVGElement> {
  /** Pixel size. Default 23. */
  size?: number;
}

/** Violet glowing crown — marks who contributed more, inline beside a value. */
export function Crown(props: CrownProps): JSX.Element;
