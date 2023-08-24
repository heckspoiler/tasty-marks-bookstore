"use client";
import Link from "next/link";
import styles from "./ShopProductCard.module.css";
import MoreInfoButton from "./MoreInfoButton";
import AddToCartButton from "./AddToCartButton";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const ShopProductCard = ({ product }) => {
  return (
    <>
      <Link href="/">
        <div
          className={styles.productContainer}
          style={{
            backgroundImage: `url(${imageUrlBuilder(client)
              .image(product.image)
              .url()})`,
          }}
        >
          <div className={styles.productInformationContainer}>
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

export default ShopProductCard;
