"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";
import { useState, useEffect } from "react";

const ProductCard = () => {
  return (
    <Link href="/">
      <div className={styles.productContainer}>
        {/* <Image
        alt="image"
        src="/alien-8bit-light.svg"
        width={200}
        height={200}
        className={styles.productImage}
      /> */}
        <div className={styles.productInformationContainer}>
          <h3>Product</h3>
          <p>CHF 20</p>
          <div className={styles.buttonContainer}>
            <button className={styles.moreInfoButton}>More Info</button>
            <button className={styles.addCartButton}>Add to Cart</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
