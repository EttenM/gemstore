import { CartDTO } from "@/src/services/dto/cart.dto";
import { Products } from "@prisma/client";

export type CartStateItem = {
  id: string;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  disabled?: boolean;
  size: string;
  productItem: Products;
};

interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number;
  totalQuantity: number;
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
  let totalCount = 0;
  data.items.map((item) => {
    totalCount += item.quantity;
  });
  const items = data.items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productItem.name,
    imageUrl: item.productItem.imageUrl,
    price: item.productItem.price,
    disabled: false,
    size: item.size,
    productItem: item.productItem,
  })) as CartStateItem[];

  return {
    items,
    totalAmount: data.totalAmount,
    totalQuantity: totalCount,
  };
};
