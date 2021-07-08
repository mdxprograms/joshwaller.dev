import { FC, useState } from "react";

import { IconProps } from "../../icons/iconTypes";
import HomeIcon from "../../icons/Home";
import BookOpenIcon from "../../icons/BookOpen";
import Tool from "../../icons/Tool";
import Mail from "../../icons/Mail";
import Button from "../Button";

import styles from "./sidenav.module.css";

type Link = {
  id: number;
  Icon: FC<IconProps>;
  href: string;
  alt: string;
};

const links: Link[] = [
  {
    id: 1,
    Icon: HomeIcon,
    href: "/",
    alt: "Home",
  },
  {
    id: 2,
    Icon: BookOpenIcon,
    href: "/experience",
    alt: "Experience",
  },
  {
    id: 3,
    Icon: Tool,
    href: "/projects",
    alt: "Projects",
  },
  {
    id: 4,
    Icon: Mail,
    href: "/contact",
    alt: "Contact",
  },
];

const Sidenav: FC = () => {
  const [activeLink, setActiveLink] = useState(links[0]);

  const renderIcon = ({ id, Icon }: Link) => {
    return <Icon stroke={activeLink.id === id ? "#8be9fd" : "#f8f8f2"} />;
  };

  return (
    <nav className={styles.sidenav}>
      {links.map((link) => (
        <Button
          key={link.id}
          variant="link"
          onClick={() => setActiveLink(link)}
        >
          {renderIcon(link)}
        </Button>
      ))}
    </nav>
  );
};

export default Sidenav;
