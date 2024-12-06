"use client";
import React, { useEffect, useRef } from "react";
import { navigation, others } from "../../../../constants/sidebar-data";
import Link from "next/link";
import Image from "next/image";
import Avatar from "./Avatar";
import SideBarLink from "./side-bar-link";
import ThemeSwitcher from "./theme-switcher";
import { useOutside } from "@/src/shared/hooks/useOutside";
import { useSideBarOpen } from "@/src/shared/store/sidebar";

type Props = {};

const SideBar = (props: Props) => {
  const sidebarState = useSideBarOpen((state) => state.isOpenSideBar);
  const toggleSideBar = useSideBarOpen((state) => state.toggleSideBar);
  const ref = useRef<HTMLElement>(null);

  const handleOutSideClick = (event: any) => {
    const sidebar = document.querySelector(".sidebar");
    const body = document.querySelector("body");

    if (sidebarState && ref.current && !ref.current.contains(event.target)) {
      console.log("Outside Clicked. ");
      sidebar?.classList.remove("open");
      body?.classList.remove("darkened");
      console.log("Outside Clicked. " + sidebarState);
      toggleSideBar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick);

    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  }, [ref, sidebarState]);

  const handleClose = () => {
    const sidebar = document.querySelector(".sidebar");
    const body = document.querySelector("body");
    sidebar?.classList.remove("open");
    body?.classList.remove("darkened");
    toggleSideBar(false);
  };

  return (
    <nav
      className="sidebar w-[80%] md:w-[40%] xl:w-[30%] h-screen rounded-r-[15px] fixed top-0 left-0 bg-background z-[100] px-[15px] py-[70px] flex flex-col gap-[70px] overflow-y-auto overscroll-y-none"
      ref={ref}
      // ref={ref}
    >
      <Avatar />
      <div className="flex flex-col gap-[25px]">
        <ul className="flex flex-col ">
          {navigation.map((item, index) => (
            <li key={index} className="w-full ">
              <SideBarLink item={item} handleClose={handleClose} />
            </li>
          ))}
        </ul>
        <h2 className=" uppercase font-bold px-[20px]">Другое</h2>
        <ul className="flex flex-col">
          {others.map((item, index) => (
            <li key={index} className="w-full ">
              <SideBarLink item={item} handleClose={handleClose} />
            </li>
          ))}
        </ul>
      </div>
      <ThemeSwitcher />
    </nav>
  );
};

export default SideBar;
