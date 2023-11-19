import { create } from "zustand";
import { Product } from "./type";

type ProductState = {
  products: Product[];
  setProducts: (products: Product[]) => void;
};

export const useProductStore = create<ProductState>()((set, get) => ({
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
    }
  ],
  setProducts: (products) => set({ products }),
}));
