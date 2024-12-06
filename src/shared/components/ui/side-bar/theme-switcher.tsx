"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import ThemeSwitcherInput from "./theme-switcher-input";
import { Moon, Sun } from "lucide-react";
// import { cookies } from "next/headers";
import { GetServerSideProps } from "next";
import Cookies from "js-cookie";
type Props = {
  theme: string;
};

const ThemeSwitcher = () => {
  const [themeValue, setThemeValue] = useState("");

  useEffect(() => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "dark";

    setThemeValue(currentTheme);

    // localStorage.setItem("theme", themeValue);
  }, []);
  // useEffect(() => {
  //   "use server";
  //   const cookieStore = cookies();
  //   cookieStore.set("themeSwitch", themeValue);
  // }, [themeValue]);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setThemeValue(value);
    document.documentElement.setAttribute("data-theme", value);
    Cookies.set("themeSwitch", value);
  };
  return (
    <div className="w-fit mx-auto">
      <form action="">
        <div className="flex gap-[10px] rounded-[40px] bg-secondary p-[5px]">
          <ThemeSwitcherInput
            inputId={"theme-switcher-light"}
            label="Светлая"
            value={"light"}
            themeValue={themeValue}
            icon={<Sun className=" fill-current" />}
            onChange={handleThemeChange}
          />

          <ThemeSwitcherInput
            inputId={"theme-switcher-dark"}
            label="Темная"
            value={"dark"}
            icon={<Moon />}
            themeValue={themeValue}
            onChange={handleThemeChange}
          />
        </div>
      </form>
    </div>
  );
};

export default ThemeSwitcher;
