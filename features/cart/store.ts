import { create } from "zustand";
import { Product } from "../product/type";
import { persist } from "zustand/middleware";

type CartState = {
  cart: Product[];
  addItemToCart: (product: Product) => void;
  removeItemsFromCart: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addItemToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),
      removeItemsFromCart: (id) =>
        set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
      clearCart: () => set(() => ({ cart: [] })),
    }),
    {
      name: "cart-storage",
    }
  )
);
