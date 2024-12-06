import Image from "next/image";
import React from "react";
import hero_banner from "@/public/hero_banner.jpg";

type Props = {};

const Banner = (props: Props) => {
  return (
    <section className="relative w-full xl:w-[70%] aspect-[16/9] mx-auto">
      <Image
        src={hero_banner}
        className="w-full h-auto rounded-[15px]"
        alt="hero_banner"
      />
      <h1 className="absolute top-[20%] translate-y-[-20%] right-[5%] translate-x-[-5%] text-[22px] md:text-[3.5vw] text-white font-bold">
        Весенняя <br />
        Коллекция
        <br />
        2024
      </h1>
    </section>
  );
};

export default Banner;
