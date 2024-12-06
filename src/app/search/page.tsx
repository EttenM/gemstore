"use client";
import { getSearchProducts } from "@/src/services/search";
import Container from "@/src/shared/components/ui/Container";
import { Products } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDebounce } from "react-use";

type Props = {};

const SearchPage = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Products[]>([]);

  useDebounce(
    async () => {
      if (searchQuery !== "") {
        try {
          const response = await getSearchProducts(searchQuery);
          setProducts(response);
        } catch (error) {
          console.log(error);
        }
      }
    },
    250,
    [searchQuery]
  );
  return (
    <Container>
      <input
        type="search"
        placeholder="Поиск товаров"
        className="w-full border  p-[10px] my-[20px] rounded-[8px] "
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {products.length > 0 &&
        searchQuery !== "" &&
        products.map((product) => (
          <Link
            href={`product/${product.id}`}
            key={product.id}
            className="flex items-center justify-between gap-[10px] mb-[20px] text-[16px] font-semibold rounded-[15px] pr-[15px] hover:bg-slate-200 duration-200"
          >
            <div className="flex items-center gap-[10px] ">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={100}
                height={175}
                className="rounded-[15px] w-[100px] aspect-[3/4.5]"
              />
              <h3>{product.name}</h3>
            </div>
            <p>{product.price} ₽</p>
          </Link>
        ))}
    </Container>
  );
};

export default SearchPage;
