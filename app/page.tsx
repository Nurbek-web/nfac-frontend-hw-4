"use client";

import { useEffect, useState } from "react";
import CreateProduct from "./create-product";
import ProductsList from "./products-list";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Button className="w-full m-4" onClick={() => setModalOpen(true)}>
        Open Modal
      </Button>
      {modalOpen && <CreateProduct setModalOpen={setModalOpen} />}

      <ProductsList />
    </div>
  );
}
