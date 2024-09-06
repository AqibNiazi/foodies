import Link from "next/link";
import React from "react";
import IconImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";
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
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
