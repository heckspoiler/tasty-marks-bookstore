"use client";

import { useRouter } from "next/navigation";

const Products = () => {
  const router = useRouter();

  return (
    <section>
      <h1>Design Rules Everything Around Me (DREAM give the money)</h1>
      <button onClick={() => router.push("/shop/cart")}>Go to Cart</button>
    </section>
  );
};

export default Products;
