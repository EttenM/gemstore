"use server";

import { prisma } from "@/prisma/prisma-client";
import { cookies } from "next/headers";
import { CheckoutFormValues } from "../constants/checkout-form-schema";
import { OrderStatus } from "@prisma/client";
import { createPayment } from "../shared/lib/create-payment";

export const createOrder = async (data: CheckoutFormValues) => {
  const token = cookies().get("cartToken")?.value;

  if (!token) {
    throw new Error("No cart token found");
  }

  const userCart = await prisma.cart.findFirst({
    where: {
      token: token,
    },
    include: {
      items: {
        include: {
          productItem: true,
        },
      },
    },
  });

  if (!userCart) {
    throw new Error("Корзина не найдена ");
  }
  if (userCart?.totalAmount === 0) {
    console.log(userCart.totalAmount + " userCart");
    throw new Error("Корзина пустая");
  }

  const order = await prisma.order.create({
    data: {
      token: token,
      fullName: data.firstName + " " + data.lastName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      comment: data.comment,
      totalAmount: userCart.totalAmount,
      status: OrderStatus.PENDING,
      items: JSON.stringify(userCart.items),
    },
  });
  /* Очищаем корзину */
  await prisma.cart.update({
    where: {
      id: userCart.id,
    },
    data: {
      totalAmount: 0,
    },
  });

  await prisma.cartItem.deleteMany({
    where: {
      cartId: userCart.id,
    },
  });

  const paymentData = await createPayment();

  return paymentData;
};
