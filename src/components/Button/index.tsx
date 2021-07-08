import React, { FC } from "react";

import styles from "./button.module.css";

type ButtonProps = {
  variant: "dark" | "light" | "cta" | "link" | "action";
  onClick: () => void;
};

const Button: FC<ButtonProps> = (props) => {
  return (
    <button className={styles[props.variant]} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
