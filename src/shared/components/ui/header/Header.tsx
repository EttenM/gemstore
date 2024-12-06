"use client";
import { BellDot, Menu, ShoppingBag } from "lucide-react";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSideBarOpen } from "@/src/shared/store/sidebar";
import Link from "next/link";
import { useCart } from "@/src/shared/hooks/use-cart";
type Props = {};

const Header = (props: Props) => {
  const sidebarState = useSideBarOpen((state) => state.isOpenSideBar);
  const toggleSideBar = useSideBarOpen((state) => state.toggleSideBar);
  const { items, totalQuantity } = useCart();

  const handleSideBar = () => {
    const sidebar = document.querySelector(".sidebar");
    const body = document.querySelector("body");
    if (!sidebarState) {
      sidebar?.classList.add("open");
      body?.classList.add("darkened");
      toggleSideBar(true);
    }

    // else if (!sidebarOpen) {
    //   sidebar?.classList.remove("open");
    //   body?.classList.remove("darkened");
    // }
  };
  return (
    <Container className="w-full sticky top-0 left-0 bg-background z-[98]">
      <header className="w-[85%] mx-auto flex justify-between items-center py-[30px]">
        <button
          className=""
          onClick={() => {
            handleSideBar();
            console.log(sidebarState);
          }}
        >
          <Menu size={26} />
        </button>
        <Link href="/" className="text-[20px] font-bold">
          Gemstore
        </Link>
        <Link href="/cart" className="relative">
          <ShoppingBag size={26} />
          <div className="absolute bottom-[-12px] right-[-12px] w-[24px] aspect-square rounded-full bg-red-500 text-white flex justify-center items-center">
            {totalQuantity}
          </div>
        </Link>
      </header>
    </Container>
  );
};

export default Header;
