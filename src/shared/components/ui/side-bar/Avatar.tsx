import Image from "next/image";
import React from "react";
import avatar from "@/public/avatar.png";
type Props = {};

const Avatar = (props: Props) => {
  return (
    <div className="mx-auto w-fit flex gap-[20px] items-center">
      <Image src={avatar} alt="avatar" className=" rounded-full" />
      <div className="flex flex-col gap-[5px]">
        <p className="text-[16px] font-bold">Sunie Pham</p>
        <p className="text-[12px] ">sunieux@gmail.com</p>
      </div>
    </div>
  );
};

export default Avatar;
