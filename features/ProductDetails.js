import React from "react";
import { getProductsAsync } from "@/app/page";

export async function getStaticProps({ params }) {
  const product = await getProductsAsync(params);
  console.log("productSlug", productSlug);
  return {
    props: {
      product: product,
    },
  };
}

export const ProductDetails = ({ product }) => {
  return (
    <div>
      <div key={product._id}>{product.name}</div>
    </div>
  );
};
