"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./nav-link.module.css";
const NavLink = ({ path, children }) => {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={
        pathname.startsWith(path)
          ? `${styles.link} ${styles.active}`
          : styles.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
