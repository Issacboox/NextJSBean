export type Product = {
    id: number;
    name: string;
    price: number;
};

export interface CartItem extends Product {
    amount: number;
}
