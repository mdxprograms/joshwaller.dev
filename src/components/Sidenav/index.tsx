import React, { FC } from "react";

import Button from "../Button";

import styles from "./sidenav.module.css";

const Sidenav: FC = () => {
  const onLinkClick = () => {
    console.log("it workd");
  };

  return (
    <nav className={styles.sidenav}>
      <Button variant="cta" onClick={onLinkClick}>
        Home
      </Button>
      <Button variant="action" onClick={onLinkClick}>
        XP
      </Button>
      <Button variant="link" onClick={onLinkClick}>
        Projects
      </Button>
      <Button variant="link" onClick={onLinkClick}>
        Contact
      </Button>
    </nav>
  );
};

export default Sidenav;
