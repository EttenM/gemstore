"use client";
import React, { useState } from "react";
import ProgressBar from "./progress-bar";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  checkoutFormSchema,
  CheckoutFormValues,
} from "@/src/constants/checkout-form-schema";
import PersonalDataForm from "./user-data-form";
import UserDataForm from "./user-data-form";
import AddressDataForm from "./address-data-form";
import { createOrder } from "@/src/app/actions";
import { Span } from "next/dist/trace";
import { LoaderCircle } from "lucide-react";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {};

const CheckoutForm = (props: Props) => {
  const [submiting, setSubmiting] = useState(false);
  const router = useRouter();
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      email: "",
      comment: "",
    },
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    try {
      setSubmiting(true);
      // const { ...rest } = data;
      console.log(data + " data");
      const url = await createOrder(data);
      toast.success("Заказ успешно оформлен! 📝 Переход на оплату... ");

      if (url) {
        // router.push(url);
        location.href = url;
      }
    } catch (error) {
      setSubmiting(false);
      toast.success("Что-то пошло не так.");
    } finally {
      setSubmiting(false);
    }
  };
  return (
    <div className="flex flex-col gap-[35px]">
      <FormProvider {...form}>
        <form
          className="flex flex-col gap-[20px]"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <ProgressBar step={1} />
          <h2 className="text-[24px] font-semibold">1. Персональные данные</h2>
          <UserDataForm />
          <div className=" flex flex-col gap-[20px] pt-[35px]">
            <ProgressBar step={2} />
            <h2 className="text-[24px] font-semibold">2. Адрес получателя</h2>
          </div>
          <AddressDataForm />
          <button
            type="submit"
            className="p-[15px] flex gap-[10px] items-center justify-center text-background 
          rounded-[24px] bg-active hover:bg-foreground duration-150"
          >
            {submiting ? (
              <div className="animate-spin">
                <LoaderCircle size={24} />
              </div>
            ) : (
              <span>Перейти к оплате</span>
            )}
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default CheckoutForm;
