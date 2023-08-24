import { useRouter } from "next/navigation";
import ShopProductCard from "@/app/components/ShopProductCard";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import styles from "./ProductsPage.module.css";

export const getProductsAsync = async () => {
  return client.fetch(groq`*[_type == "product"]`);
};

export default async function Products() {
  const products = await getProductsAsync();

  return (
    <main>
      <section className={styles.mainSection}>
        <h2>Shop</h2>
        <section className={styles.shopContainer}>
          {products.slice(0, 3).map((product) => (
            <ShopProductCard key={product.name} product={product} />
          ))}
        </section>
      </section>
    </main>
  );
}
