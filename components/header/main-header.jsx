import Link from "next/link";
import React from "react";
import IconImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src={IconImg} alt="a plate with food on it." priority />
        Foodies
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink path="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink path="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
