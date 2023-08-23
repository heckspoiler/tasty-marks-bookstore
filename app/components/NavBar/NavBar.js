"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/studio")) {
    return null;
  }
  return (
    <nav className={styles.NavBar}>
      <Link href="/">
        <Image
          src="/logo.svg"
          width={80}
          height={80}
          className={styles.navElement}
          alt="Logo Tasty Marks"
        />
      </Link>
      <ul className={styles.navList}>
        <Link href="/" className={styles.navElement}>
          Home
        </Link>
        <Link href="/shop/products" className={styles.navElement}>
          Shop
        </Link>
        <Link href="/about" className={styles.navElement}>
          About
        </Link>
        <Link href="/contact" className={styles.navElement}>
          Contact
        </Link>
      </ul>
      <Link href="/shop/cart">
        <Image
          src="/shopping-cart.svg"
          width={25}
          height={25}
          className={styles.navElement}
          alt="Logo Tasty Marks"
        />
      </Link>
      {process.env.NODE_ENV === "development" && (
        <Link href="/studio">
          <button>EDIT</button>
        </Link>
      )}
    </nav>
  );
};

export default NavBar;
