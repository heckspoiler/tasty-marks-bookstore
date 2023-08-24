import styles from "./Home.module.css";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";
import ProductCard from "./components/ProductCard";

const getProductsAsync = async () => {
  console.log("getProductsAsync");
  return client.fetch(groq`*[_type == "product"]`);
};

export const revalidate = 60;

export default async function Home() {
  const products = await getProductsAsync();
  return (
    <main>
      <section className={styles.mainSection}>
        <h2>New Arrivals</h2>
        <section className={styles.arrivalsContainer}>
          {/* <ul>
          {products.map((product) => (
            <li key={product._id}>
              <h2>{product.name}</h2>

              <p>CHF {product.price}</p>
            </li>
          ))}
        </ul> */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
      </section>
    </main>
  );
}
