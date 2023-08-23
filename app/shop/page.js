import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function Shop() {
  try {
    const products = await client.fetch(
      groq`*[_type == "products"] {name, author, slug, images, categories, description, sku, currency, price}`
    );
    console.log(products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <section>
      <h1>Shop</h1>
    </section>
  );
}
