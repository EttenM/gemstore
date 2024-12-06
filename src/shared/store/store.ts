import {
  addCartItem,
  getCart,
  removeCartItem,
  updateItemQuantity,
} from "@/src/services/cart";
import { CreateCartItemValues } from "@/src/services/dto/cart.dto";
import { create } from "zustand";
import { CartStateItem, getCartDetails } from "../lib/get-cart-details";
import { toast } from "sonner";

// export type CartStateItem = {
//   id: number;
//   quantity: number;
//   name: string;
//   imageUrl: string;
//   price: number;
//   disabled?: boolean;
// };

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  totalQuantity: number;
  items: CartStateItem[];

  /* Получение товаров из корзины */
  fetchCartItems: () => Promise<void>;

  /* Запрос на обновление количества товара */
  updateItemQuantity: (id: string, quantity: number) => Promise<void>;

  /* Запрос на добавление товара в корзину */
  addCartItem: (values: CreateCartItemValues) => Promise<void>;

  /* Запрос на удаление товара из корзины */
  removeCartItem: (id: string) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  error: false,
  loading: true,
  totalAmount: 0,
  totalQuantity: 0,

  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await getCart();
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  removeCartItem: async (id: string) => {
    try {
      set((state) => ({
        loading: true,
        error: false,
        items: state.items.map((item) =>
          item.id === id ? { ...item, disabled: true } : item
        ),
      }));
      const data = await removeCartItem(id);
      set(getCartDetails(data));
      toast.success("Товар удален из корзины!");
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set((state) => ({
        loading: false,
        items: state.items.map((item) => ({ ...item, disabled: false })),
      }));
    }
  },

  updateItemQuantity: async (id: string, quantity: number) => {
    try {
      set({ loading: true, error: false });
      const data = await updateItemQuantity(id, quantity);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  addCartItem: async (values: CreateCartItemValues) => {
    try {
      set({ loading: true, error: false });
      const data = await addCartItem(values);
      set(getCartDetails(data));
      toast.success("Товар добавлен в корзину!");
    } catch (error) {
      console.error(error);
      set({ error: true });
      toast.success("Что-то пошло не так!");
    } finally {
      set({ loading: false });
    }
  },
}));
