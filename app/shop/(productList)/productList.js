import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const getProductsAsync = async () => {
  console.log("getProductsAsync");
  return client.fetch(groq`*[_type == "product"]`);
};

export default async function productList() {
  const products = await getProductsAsync();

  return (
    <section>
      <h1>Product List</h1>
      <div>{products}</div>
    </section>
  );
}
