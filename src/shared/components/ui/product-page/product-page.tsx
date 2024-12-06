"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Container from "../Container";
import { Products, ProductsSkus } from "@prisma/client";
import {
  ArrowLeftCircle,
  ChevronDownCircleIcon,
  ChevronLeft,
  LoaderCircle,
  ShoppingBasket,
} from "lucide-react";
import { useRouter } from "next/navigation";
import ProductDescription from "./product-description";
import ProductOption from "./product-option";
import LayoutWithBack from "../layouts/layout-with-back";
import ProductHeader from "./product-header";
import ButtonBack from "../../ButtonBack";
import { CreateCartItemValues } from "@/src/services/dto/cart.dto";
import { useCart } from "@/src/shared/hooks/use-cart";
import { toast } from "sonner";
interface Props {
  product: Products & {
    productSkus: ProductsSkus[];
  };
}

const ProductPage = ({ product }: Props) => {
  const [size, setSize] = useState("");
  const { addCartItem, loading } = useCart();
  useEffect(() => {
    console.log(size);
  }, [size]);
  const handlSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (size === "") {
      toast.error("Выберите размер товара!");
      return;
    }
    addCartItem({ productItemId: product.id, size: size });
  };

  return (
    <div className=" relative flex flex-col bg-neitral2">
      <ButtonBack className="absolute top-[20px] left-[7.5%] translate-x-[-7.5%]" />
      <Image
        src={product.imageUrl}
        alt="product_image"
        width={300}
        height={500}
        className=" w-full sm:w-[50%] xl:w-[20%] mx-auto"
      />
      <Container className="w-full rounded-t-[20px] container_shadow mt-[-20px] bg-background">
        <form
          className="w-[85%] xl:w-[600px] flex flex-col gap-[20px] py-[50px] mx-auto"
          onSubmit={handlSubmit}
        >
          <ProductHeader
            name={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
          />
          <hr />

          <div className="flex flex-col gap-[15px]">
            <h3 className="text-[20px] opacity-70">Размер</h3>
            <div className="flex items-center gap-[10px]">
              {product.productSkus.map((sku) =>
                sku.quantity > 0 ? (
                  <ProductOption
                    value={sku.value}
                    key={sku.id}
                    size={size}
                    setSize={setSize}
                  />
                ) : (
                  <div
                    className={`w-[35px] aspect-square rounded-full border flex items-center justify-center opacity-60 relative`}
                  >
                    {sku.value}
                    <div className="absolute inset bg-red-300 w-[100%] h-[3px] rotate-45"></div>
                  </div>
                )
              )}
              {product.productSkus.map(
                (sku) =>
                  sku.quantity < 5 &&
                  sku.value === size && <p>Осталось {sku.quantity} шт.</p>
              )}
            </div>
          </div>

          <button
            className="p-[15px] flex gap-[10px] items-center justify-center text-background rounded-[24px] bg-active hover:bg-foreground duration-150"
            disabled={loading}
          >
            {loading ? (
              <div className="animate-spin">
                <LoaderCircle size={24} />
              </div>
            ) : (
              <>
                <ShoppingBasket />
                Добавить в корзину
              </>
            )}
          </button>

          <hr />
          <ProductDescription text={product.description} />
          <hr />
        </form>
      </Container>{" "}
    </div>
  );
};

export default ProductPage;
