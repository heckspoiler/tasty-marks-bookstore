import React from "react";
import { ProductDetails } from "../../../features/ProductDetails";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const getProductsAsync = async () => {
  return client.fetch(groq`*[_type == "product"]`);
};

async function ProductDetailsPage() {
  const products = await getProductsAsync();

  return (
    <div>
      <ProductDetails products={products} />
    </div>
  );
}

export default ProductDetailsPage;
