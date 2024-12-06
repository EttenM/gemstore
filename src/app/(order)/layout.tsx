import LayoutWithBack from "@/src/shared/components/ui/layouts/layout-with-back";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Оформление заказа | Gemstore",
  description: "Gemstore - Магазин стильной одежды!",
};
export default function CheckOutLayout({
  children,
}: // props
Readonly<{
  children: React.ReactNode;
}>) {
  // console.log(theme?.value);
  return <LayoutWithBack title="Оформление заказа">{children}</LayoutWithBack>;
}
