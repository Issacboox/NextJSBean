"use client";

import { Product } from "../product/type";

type Props = {
  productList: Product[];
  onClick?: (product: Product) => void;
};

export default function ProductList({ productList, onClick }: Props) {


  return (
    <div>
      <ul className="flex flex-col gap-2">
        {productList.map((product) => (
          <li
            onClick={() => {
              if (typeof onClick === "function") {
                onClick(product);
              }
            }}
            className="text-xl p-2"
            key={product.id}
          >
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
