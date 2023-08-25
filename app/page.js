import styles from "./Home.module.css";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

import ProductCard from "./components/ProductCard";

export const getProductsAsync = async () => {
  return client.fetch(groq`*[_type == "product"]`);
};

export default async function Home() {
  const products = await getProductsAsync();
  return (
    <main>
      <section className={styles.mainSection}>
        <h2>New Arrivals</h2>
        <section className={styles.arrivalsContainer}>
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </section>
      </section>
    </main>
  );
}
