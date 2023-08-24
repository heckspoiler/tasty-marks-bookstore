"use client";

import { useRouter } from "next/navigation";
import ProductCard from "@/app/components/ProductCard";

const Products = () => {
  const router = useRouter();

  return (
    <section>
      <ProductCard />
    </section>
  );
};

export default Products;
