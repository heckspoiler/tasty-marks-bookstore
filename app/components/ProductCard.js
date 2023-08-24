"use client";
import AddToCartButton from "./AddToCartButton";
import MoreInfoButton from "./MoreInfoButton";
import Link from "next/link";
import styles from "./ProductCard.module.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const ProductCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = usePathname();

  const handleMouseOver = () => {
    if (router.pathname != "/shop/products") {
      setIsHovered(true);
    }
  };
  const handleMouseOut = () => {
    if (router.pathname != "/shop/products") {
      setIsHovered(false);
    }
  };

  const shouldShowInfo = router.pathname === "/shop/products" || isHovered;

  return (
    <>
      <Link href="/">
        <div
          className={styles.productContainer}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {/* <Image
        alt="image"
        src="/alien-8bit-light.svg"
        width={200}
        height={200}
        className={styles.productImage}
      /> */}

          <div
            className={`${styles.productInformationContainer} ${
              shouldShowInfo ? styles.isVisible : styles.isNotVisible
            }`}
          >
            <h3>Product</h3>
            <p className={styles.productPrice}>CHF 20</p>
            <div className={styles.buttonContainer}>
              <MoreInfoButton />
              <AddToCartButton />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
