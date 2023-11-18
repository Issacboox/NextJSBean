import ProductList from "../ui/product-list";
import { Product } from "./type";
import { useProductStore } from "./store";
import { useCartStore } from "../cart/store";

export default function ProductSummary() {
    const products = useProductStore((state) => state.products);
    const addItemToCart = useCartStore((state) => state.addItemToCart);

    const handleOnProductClick = (product: Product) => {
        addItemToCart(product);
    };

    return (
        <div>
            <h1>Products</h1>
            <ProductList productList={products} onClick={handleOnProductClick} />
        </div>
    );
}
