import { CartStateItem } from "@/src/shared/lib/get-cart-details";
import React from "react";

type Props = {
  item: CartStateItem;
  onClickCountButton: (
    id: string,
    quantity: number,
    type: "plus" | "minus"
  ) => void;
};

const QuantityChange = ({ item, onClickCountButton }: Props) => {
  return (
    <div className="rounded-[30px] border border-active flex gap-[5px] items-center py-[5px] px-[15px] ">
      <button
        className="hover:bg-gray-300 px-[10px] rounded-[30px] duration-150"
        disabled={item.quantity <= 1}
        onClick={() => {
          onClickCountButton(item.id, item.quantity, "minus");
        }}
      >
        -
      </button>
      <p className="min-w-[20px] text-center">{item.quantity}</p>
      <button
        className="hover:bg-gray-300 px-[10px] rounded-[30px] duration-150"
        onClick={() => {
          onClickCountButton(item.id, item.quantity, "plus");
        }}
      >
        +
      </button>
    </div>
  );
};

export default QuantityChange;
