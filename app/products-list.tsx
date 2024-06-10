"use client";

import useProducts from "@/hooks/useProducts";
import ProductCard from "./product-card";

export default function ProductsList() {
  const { data, isLoading, isSuccess } = useProducts();

  if (isLoading) {
    return <>Loading ...</>;
  }
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-6 py-8">
      {isSuccess && data.map((product) => <ProductCard product={product} />)}
    </section>
  );
}
