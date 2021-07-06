import { FC } from "react";

import styles from "./container.module.css";

type ContainerProps = {
  bgLight?: boolean;
  bgDark?: boolean;
};

const Container: FC<ContainerProps> = ({ children, bgLight, bgDark }) => {
  const withClasses = () => {
    if (bgLight) {
      return styles.containerLight;
    } else if (bgDark) {
      return styles.containerDark;
    } else {
      return styles.container;
    }
  };

  return <div className={withClasses()}>{children}</div>;
};

export default Container;
