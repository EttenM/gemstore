import { Cart, CartItem, Products } from "@prisma/client";

export type CartItemDTO = CartItem & {
  productItem: Products;
};

export interface CartDTO extends Cart {
  items: CartItemDTO[];
}

export interface CreateCartItemValues {
  productItemId: string;
  size?: string;
}
