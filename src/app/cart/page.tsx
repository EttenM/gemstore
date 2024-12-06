import React, { Suspense, useEffect } from "react";
import Loading from "./loading";
import ProductPageWrapper from "@/src/shared/components/ui/product-page/product-page-wrapper";
export async function generateMetadata() {
  return {
    title: "Корзина | Gemstore",
  };
}
type Props = {};

const CartPage = (props: Props) => {
  return (
    <Suspense fallback={<Loading />}>
      <ProductPageWrapper />
    </Suspense>
  );
};

export default CartPage;
