import React, { FC } from "react";
import { FiHome } from "react-icons/fi";
import { GrProjects, GrResume, GrContact } from "react-icons/gr";

import Button from "../Button";

import styles from "./sidenav.module.css";

const links = [
  {
    Icon: FiHome,
    link: "/",
    alt: "Home",
  },
  {
    Icon: GrResume,
    link: "/experience",
    alt: "Experience",
  },
  {
    Icon: GrProjects,
    link: "/projects",
    alt: "Projects",
  },
  {
    Icon: GrContact,
    link: "/contact",
    alt: "Contact",
  },
];

const Sidenav: FC = () => {
  const onLinkClick = (link: string) => {
    console.log(link);
  };

  return (
    <nav className={styles.sidenav}>
      {links.map(({ Icon, link, alt }) => (
        <Button key={alt} variant="link" onClick={() => onLinkClick(link)}>
          <Icon size={24} />
        </Button>
      ))}
    </nav>
  );
};

export default Sidenav;
