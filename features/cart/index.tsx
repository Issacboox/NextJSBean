"use client";

import { useCartStore } from "./store";
import ProductList from "../ui/product-list";

export default function CartInfomation() {
    const cart = useCartStore((state) => state.cart);

    return (
        <div>
            <h1>Cart</h1>
            <ProductList productList={cart} />;
        </div>
    );
}
