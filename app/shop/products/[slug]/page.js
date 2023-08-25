import React from "react";
import { ProductDetails } from "../../../../features/ProductDetails";
import { getProductsAsync } from "../../../page";
import { get } from "react-hook-form";

async function ProductDetailsPage() {
  const product = await getProductsAsync();

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
}

export default ProductDetailsPage;
