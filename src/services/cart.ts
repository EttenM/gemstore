import { CartDTO, CreateCartItemValues } from "./dto/cart.dto";
import { axiosInstance } from "./instance";

export const getCart = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>("/cart")).data;
};

export const removeCartItem = async (id: string): Promise<CartDTO> => {
  return (await axiosInstance.delete<CartDTO>("/cart/" + id)).data;
};
export const updateItemQuantity = async (
  itemId: string,
  quantity: number
): Promise<CartDTO> => {
  return (await axiosInstance.patch<CartDTO>("/cart/" + itemId, { quantity }))
    .data;
};

export const addCartItem = async (
  values: CreateCartItemValues
): Promise<CartDTO> => {
  return (await axiosInstance.post<CartDTO>("/cart", values)).data;
};
