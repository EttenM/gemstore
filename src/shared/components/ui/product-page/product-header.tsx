import React from "react";

type Props = {
  name: string;
  price: number;
  oldPrice?: number | null;
};

const ProductHeader = ({ name, price, oldPrice }: Props) => {
  return (
    <div className="flex items-center justify-between gap-[10px]">
      <h1 className="text-[20px] font-bold">{name}</h1>
      <div className="flex gap-[5px] items-center">
        <span className="text-[22px] text-nowrap">{price} ₽</span>
        {oldPrice && (
          <span className="opacity-50 text-[16px] line-through text-nowrap">
            {oldPrice} ₽
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductHeader;
