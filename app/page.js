import styles from "./Home.module.css";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const getProductsAsync = async () => {
  console.log("getProductsAsync");
  return client.fetch(groq`*[_type == "product"]`);
};

export const revalidate = 60;

export default async function Home() {
  const products = await getProductsAsync();
  return (
    <main className={styles.mainSection}>
      <section className="section-main">
        <h1>Landing Page</h1>
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              <h2>{product.name}</h2>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
