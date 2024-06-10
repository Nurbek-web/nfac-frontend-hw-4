import { useQuery } from "@tanstack/react-query";
import { Product } from "@/types/product";
import { fetchProducts } from "@/lib/productsService";

const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};

export default useProducts;
