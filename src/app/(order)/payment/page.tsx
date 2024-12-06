"use client";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "sonner";

type Props = {};

const PaymentPage = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      toast.success("Заказ оформлен! Детали отправлены на почту.");
    }, 1000);
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <div className="flex flex-col gap-[15px] items-center justify-center h-full">
      <div className="animate-spin">
        <LoaderCircle size={64} />
      </div>
      <div className="text-[24px] text-center font-semibold">
        Представим, что здесь происходит оплата 😉
      </div>
    </div>
  );
};

export default PaymentPage;
