import { CartStateItem } from "@/src/shared/lib/get-cart-details";
import { Products } from "@prisma/client";
import { LoaderCircle, Trash2Icon } from "lucide-react";
import Image from "next/image";
import React from "react";
import QuantityChange from "./quantity-change";
import Link from "next/link";

type Props = {
  item: CartStateItem;
  removeCartItem: (id: string) => void;
  updateItemQuantity: (id: string, quantity: number) => void;
  totalAmount: number;
  loading: boolean;
};

const CartItem = ({
  item,
  loading,
  removeCartItem,
  totalAmount,
  updateItemQuantity,
}: Props) => {
  const onClickCountButton = (
    id: string,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <div
      className={`flex gap-[10px] shadow-sm shadow-foreground rounded-[20px]  overflow-hidden relative ${
        item.disabled ? "animate-pulse" : ""
      }`}
    >
      <Image
        src={item.imageUrl}
        alt="item_image"
        width={100}
        height={100}
        className="w-[100px] aspect-square object-cover"
      />

      <div className="flex flex-col gap-[5px] flex-1 py-[15px] pr-[15px] text-[clamp(12px,3.5vw,16px)]">
        <div className="flex justify-between gap-[10px]">
          <div className="flex flex-col gap-[10px]">
            <Link
              href={`/product/${item.productItem.id}`}
              className="hover:text-active"
            >
              {item.productItem.name}
            </Link>
            <p>{item.productItem.price} ₽</p>
          </div>
          <button
            className="text-red-300 self-start hover:text-red-500 duration-150"
            onClick={() => {
              removeCartItem(item.id);
            }}
          >
            <Trash2Icon />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p className=" self-end opacity-70">
            Размер: <span>{item.size}</span>
          </p>
          <QuantityChange onClickCountButton={onClickCountButton} item={item} />
        </div>
      </div>

      {item.disabled && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200/50 duration-150">
          <div className="animate-spin">
            <LoaderCircle size={24} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
