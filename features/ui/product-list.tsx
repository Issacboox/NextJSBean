"use client";

import { Product, CartItem } from "../product/type";
import { get } from "lodash";

type Props = {
  productList: Product[] | CartItem[];
  onClick?: (product: Product) => void;
  isCartList?: boolean;
};

export default function ProductList({
  productList,
  onClick,
  isCartList,
}: Props) {
  console.log("productList", productList);

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {productList.map((product, index) => {
          const amount = get(product, "amount");
          return (
            <li
              key={index}
              onClick={() => {
                if (typeof onClick === "function") {
                  onClick(product);
                }
              }}
              className="text-xl p-2"
            >
              {product.name}
              {amount ? `x ${amount}` : ""}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
