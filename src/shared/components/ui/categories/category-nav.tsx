import React from "react";
import category_1 from "@/public/category_1.png";
import category_2 from "@/public/category_2.png";
import category_3 from "@/public/category_3.png";
import category_4 from "@/public/category_4.png";
import Image from "next/image";
import Link from "next/link";
import { findCategories } from "@/src/shared/lib/find-categories";

const CategoryNav = async () => {
  const category = await findCategories();
  const categories_params = new Map([
    // {
    //   title: "Женщины",
    //   image: category_1,
    //   backgroundColor: "#A3A798",
    //   accentColor: "#C2C7B5",
    //   link: "/",
    // },
    ["title", "Мужчинам"],
    ["image", "/category_2.png"],
    ["backgroundColor", "#44565C"],
    ["accentColor", "#5B7178"],

    // {
    //   title: "Аксессуары",
    //   image: category_3,
    //   accentColor: "#898280",
    //   backgroundColor: "#9C9492",
    //   link: "/",
    // },
    // {
    //   title: "Красота",
    //   image: category_4,
    //   accentColor: "#B9AEB2",
    //   backgroundColor: "#D1CACD",
    //   link: "/",
    // },
  ]);
  return (
    <section className="grid auto-rows-[minmax(0,_125px)] xl:auto-rows-[minmax(0,_250px)] gap-[10px] w-full xl:w-[60%] mx-auto mb-[30px]">
      {category.map((categories, index) => (
        <Link
          key={categories.id}
          href={`/${categories.slug}`}
          className="w-full flex justify-between items-center rounded-[15px] relative overflow-hidden  hover:brightness-110 peer duration-200"
          style={{ backgroundColor: categories_params.get("backgroundColor") }}
        >
          <h3 className="text-[16px] xl:text-[2vw] text-white font-bold ml-[20px] uppercase">
            {categories.name}
          </h3>
          <Image
            // @ts-expect-error
            src={categories_params.get("image")}
            alt={categories.name}
            width={200}
            height={200}
            className="h-full w-auto peer-hover:scale-110"
          />
        </Link>
      ))}
    </section>
  );
};

export default CategoryNav;
