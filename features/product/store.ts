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
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
    },
    {
      id: 4,
      name: "Product 4",
      price: 5,
    },
  ],
  setProducts: (products) => set({ products }),
}));
