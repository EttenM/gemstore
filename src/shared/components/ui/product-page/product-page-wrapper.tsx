"use client";
import React from "react";
import CartItem from "@/src/shared/components/ui/cart-page/cart-item";
import Container from "@/src/shared/components/ui/Container";
import LayoutWithBack from "@/src/shared/components/ui/layouts/layout-with-back";
import PageTitle from "@/src/shared/components/ui/PageTitle";
import { useCart } from "@/src/shared/hooks/use-cart";
import { useCartStore } from "@/src/shared/store/store";
import CartFooter from "../cart-page/cart-footer";
type Props = {};

const ProductPageWrapper = (props: Props) => {
  const { totalAmount, items, removeCartItem, updateItemQuantity, loading } =
    useCart();
  if (items.length === 0) {
    return (
      <LayoutWithBack title="Ваша корзина" className={"h-full "}>
        <div className="h-full relative flex justify-center items-center my-auto text-[20px] font-semibold ">
          Ваша корзина пуста!
        </div>
      </LayoutWithBack>
    );
  }
  return (
    <LayoutWithBack title="Ваша корзина" className={""}>
      <div className="flex flex-col justify-between h-full">
        <Container className="md:w-[600px]">
          <div className="flex flex-col gap-[25px] mt-[25px]">
            {items.map((item) => (
              <CartItem
                item={item}
                removeCartItem={removeCartItem}
                updateItemQuantity={updateItemQuantity}
                totalAmount={totalAmount}
                loading={loading}
                key={item.id}
              />
            ))}
          </div>
        </Container>
        <Container className="w-full  md:w-[600px]">
          <CartFooter totalAmount={totalAmount} />
        </Container>
      </div>
    </LayoutWithBack>
  );
};

export default ProductPageWrapper;
