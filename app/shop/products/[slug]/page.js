import { ProductDetails } from "../../../../features/ProductDetails";
import { client } from "@/sanity/lib/client";
import { getProductsAsync } from "@/app/page";

async function ProductDetailsPage() {
  const product = await getProductsAsync();
  console.log("product du hurensohn", product);
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
}

export default ProductDetailsPage;
