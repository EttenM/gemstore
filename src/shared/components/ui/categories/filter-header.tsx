"use client";
import { getWordEnding } from "@/src/shared/lib/get-word-ening";
import { useSideBarOpen } from "@/src/shared/store/sidebar";
import { Products } from "@prisma/client";
import { ArrowLeftCircle } from "lucide-react";
import React from "react";

type Props = {
  products: Products[];
};

const FilterHeader = ({ products }: Props) => {
  const filterbarState = useSideBarOpen((state) => state.isOpenFilterBar);
  const toggleFilterBar = useSideBarOpen((state) => state.toggleFilterBar);

  const handleSideBar = () => {
    const sidebar = document.querySelector(".filterbar");
    const body = document.querySelector("body");
    if (!filterbarState) {
      sidebar?.classList.add("open");
      body?.classList.add("darkened");
      toggleFilterBar(true);
    }

    // else if (!sidebarOpen) {
    //   sidebar?.classList.remove("open");
    //   body?.classList.remove("darkened");
    // }
  };
  return (
    <div className="flex justify-between items-center mb-[30px]">
      <h2 className="text-[20px] font-semibold">
        Найдено {products.length} товар{getWordEnding(products.length)}
      </h2>
      <button
        className="text-[16px] py-[5px] px-[15px] border-2 border-neitral rounded-[30px] flex gap-[5px] items-center"
        onClick={handleSideBar}
      >
        Фильтры
        <ArrowLeftCircle size={16} />
      </button>
    </div>
  );
};

export default FilterHeader;
