"use client";

import { useEffect, useState } from "react";
import CreateProduct from "./create-product";
import ProductsList from "./products-list";

export default function Home() {
  // Optional: Adding client-side only logic if needed
  useEffect(() => {
    // Any client-side only logic
  }, []);

  return (
    <div>
      <CreateProduct />
      <ProductsList />
    </div>
  );
}
