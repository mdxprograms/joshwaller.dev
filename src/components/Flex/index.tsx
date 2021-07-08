import React, { FC } from "react";

import styles from "./flex.module.css";

type FlexProps = {
  alignStart?: boolean;
  alignEnd?: boolean;
  alignCenter?: boolean;
  column?: boolean;
  wrap?: boolean;
  row?: boolean;
  justifyStart?: boolean;
  justifyEnd?: boolean;
  justifyCenter?: boolean;
  justifyAround?: boolean;
  justifyBetween?: boolean;
};

const Flex: FC<FlexProps> = (props) => {
  const classes: string = [
    // eslint-disable-next-line array-callback-return
    ...Object.keys(props).filter((k: string) => {
      if (k !== "children") {
        return styles[k];
      }
    }),
    "flex",
  ]
    .map((cls) => styles[cls])
    .join(" ");

  return <div className={classes}>{props.children}</div>;
};

export default Flex;
