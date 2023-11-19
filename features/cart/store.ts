import { create } from "zustand";
import { CartItem, Product } from "../product/type";
import { persist } from "zustand/middleware";

type CartState = {
  cart: CartItem[];
  addItemToCart: (product: Product) => void;
  removeItemsFromCart: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addItemToCart: (product) => {
        set((state) => {
          const id = product.id;
          const found = state.cart.find((item) => item.id === id);

          if (found) {
            const nextProduct = {
              ...found,
              amount: found.amount + 1,
            };

            const nextCart = state.cart.map((item) => {
              if (item.id === id) return nextProduct;
              return item;
            });

            return { cart: nextCart };
          } else {
            return {
              cart: [
                ...state.cart,
                {
                  ...product,
                  amount: 1, // default at first add
                },
              ],
            };
          }
        });
      },
      removeItemsFromCart: (id) =>
        set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
      clearCart: () => set(() => ({ cart: [] })),
    }),
    {
      name: "cart-storage",
      skipHydration: true,
    }
  )
);
