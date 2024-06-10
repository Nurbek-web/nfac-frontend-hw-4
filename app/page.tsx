"use client";

import { useEffect, useState } from "react";
import CreateProduct from "./create-product";
import ProductsList from "./products-list";

export default function Home() {
  return (
    <div>
      <CreateProduct />
      <ProductsList />
    </div>
  );
}
