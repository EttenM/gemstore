import Link from "next/link";
import React from "react";

type Props = {
  totalAmount: number;
};

const CartFooter = ({ totalAmount }: Props) => {
  return (
    <div className="w-full rounded-t-[20px] md:rounded-[20px] container_shadow py-[30px] bg-background px-[30px]">
      <div className=" flex flex-col gap-[20px]">
        <div className="flex justify-between">
          <p className="text-[16px] font-bold">Всего</p>
          <p className="text-[16px] font-bold">{totalAmount} ₽</p>
        </div>

        <Link
          href="/checkout"
          className="p-[15px] flex gap-[10px] items-center justify-center text-background rounded-[24px] bg-active hover:bg-foreground duration-150"
        >
          Перейти к оформлению
        </Link>
      </div>
    </div>
  );
};

export default CartFooter;
