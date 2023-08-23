import Link from "next/link";
import styles from "./ShopNav.module.css";

const ShopNav = () => {
  return (
    <sidebar className={styles.navBar}>
      <ul className={styles.navList}>
        <Link href="/shop/products/all-products" className={styles.navElement}>
          All Products
        </Link>
        <Link
          href="/shop/products/design-history"
          className={styles.navElement}
        >
          Design History
        </Link>
        <Link
          href="/shop/products/graphic-design"
          className={styles.navElement}
        >
          Graphic Design
        </Link>
      </ul>
    </sidebar>
  );
};

export default ShopNav;
