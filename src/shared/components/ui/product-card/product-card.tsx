import { Products, ProductsSkus } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  product: Products;
}

const ProducCard = ({ product }: Props) => {
  return (
    <Link
      href={`/product/${product.id}`}
      key={product.id}
      className="hover:brightness-125 duration-200"
    >
      <div className="flex flex-col gap-[15px]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={140}
          height={280}
          className="object-cover rounded-[15px] w-full aspect-[3/4.5]"
        />
        <div className="flex flex-col gap-[5px]">
          <div className="text-[14px] line-clamp-2">{product.name}</div>
          <div className=" flex gap-[5px] items-center">
            <span className="font-bold ">{product.price}</span> ₽
            {product.oldPrice && (
              <span className="opacity-50 text-[12px] line-through">
                {product.oldPrice} ₽
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProducCard;
