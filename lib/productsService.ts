import { Product } from "@/types/product";
import { axiosQueryInstance } from "./axiosInstance";

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await axiosQueryInstance.get("/products");
  return res.data;
};
