"use client";
import React, { useEffect, useRef } from "react";

import { useSideBarOpen } from "@/src/shared/store/sidebar";
import "./style.scss";
import { X } from "lucide-react";
import { Category, Products, Subcategories } from "@prisma/client";

import qs from "qs";

import { useOutsideFilters } from "@/src/shared/hooks/useOutsideFillters";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import FiltersForm from "./filters-form";
import { useFilters } from "@/src/shared/hooks/useFilters";
import { useRouter } from "next/navigation";

type Props = {
  subcategories: Subcategories[];
  products: Products[];
};

interface FiltersForm {
  color: [];
  subcategory: [];
  prices: [];
}
const FilltersBar = ({ subcategories, products }: Props) => {
  const filterbarState = useSideBarOpen((state) => state.isOpenFilterBar);
  const toggleFilterBar = useSideBarOpen((state) => state.toggleFilterBar);

  const ref = useRef<HTMLElement>(null);

  const colorSet = new Set<string>(products.map((product) => product.color));
  const colorArray = Array.from(colorSet);

  const filters = useFilters();

  const router = useRouter();
  const form = useForm<FiltersForm>({
    defaultValues: {
      // price: "",
      color: [],
      subcategory: [],
      prices: [],
    },
  });

  useOutsideFilters({ filterbarState, toggleFilterBar, ref });

  const handleClose = () => {
    const filterbar = document.querySelector(".filterbar");
    const body = document.querySelector("body");
    filterbar?.classList.remove("open");
    body?.classList.remove("darkened");
    toggleFilterBar(false);
  };

  const onSubmit = (data: FiltersForm) => {
    const params = {
      colors: data.color,
      subcategories: data.subcategory,
      prices: data.prices,
    };
    const query = qs.stringify(params, {
      arrayFormat: "comma",
    });

    router.push(`?${query}`, {
      scroll: false,
    });

    handleClose();
    // form.reset();
  };

  return (
    <nav
      className="filterbar w-[80%] md:w-[40%] xl:w-[30%] h-screen rounded-l-[15px] fixed top-0 right-0 bg-background z-[100] px-[15px] md:px-[30px] py-[70px] flex flex-col gap-[30px] overflow-y-auto"
      ref={ref}
    >
      <div className="flex justify-between">
        <h2 className="text-[20px] ">Фильтры</h2>
        <button onClick={handleClose}>
          <X />
        </button>
      </div>
      <hr />{" "}
      <FormProvider {...form}>
        <form
          className="flex flex-col gap-[20px]"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FiltersForm
            subcategories={subcategories}
            products={products}
            colorArray={colorArray}
          />

          <div className="flex gap-[30px]">
            <button
              className="px-[30px] py-[10px] rounded-[30px] bg-neitral text-background hover:bg-active duration-150"
              onClick={() => {
                form.reset();
              }}
            >
              Сбросить
            </button>
            <button
              className="px-[30px] py-[10px] rounded-[30px] bg-foreground text-background hover:bg-active duration-150"
              type="submit"
            >
              Применить
            </button>
          </div>
        </form>{" "}
      </FormProvider>
    </nav>
  );
};

export default FilltersBar;
