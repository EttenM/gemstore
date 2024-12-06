import React, { useEffect } from "react";

import { CartStateItem } from "../lib/get-cart-details";
import { CreateCartItemValues } from "@/src/services/dto/cart.dto";
import { useCartStore } from "../store/store";

type ReturnProps = {
  totalAmount: number;
  totalQuantity: number;
  items: CartStateItem[];
  loading: boolean;
  removeCartItem: (id: string) => void;
  addCartItem: (values: CreateCartItemValues) => void;
  updateItemQuantity: (id: string, quantity: number) => void;
};

export const useCart = (): ReturnProps => {
  const cartState = useCartStore((state) => state);

  useEffect(() => {
    cartState.fetchCartItems();
  }, []);

  return cartState;
};
