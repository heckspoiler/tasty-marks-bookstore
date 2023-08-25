"use client";
import AddToCartButton from "./AddToCartButton";
import MoreInfoButton from "./MoreInfoButton";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import styles from "./ProductCard.module.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import imageUrlBuilder from "@sanity/image-url";

const ProductCard = ({ product }) => {
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

  console.log("Product:", product);
  console.log("Product Slug:", product.slug);

  const shouldShowInfo = router.pathname === "/shop/products" || isHovered;

  return (
    <>
      <Link href={`/shop/products/${product.slug.current}`}>
        <div
          className={styles.productContainer}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{
            backgroundImage: `url(${imageUrlBuilder(client)
              .image(product.image)
              .url()})`,
          }}
        >
          <div
            className={`${styles.productInformationContainer} ${
              shouldShowInfo ? styles.isVisible : styles.isNotVisible
            }`}
          >
            <h3>{product.name}</h3>
            <p className={styles.productPrice}>CHF {product.price}</p>
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
