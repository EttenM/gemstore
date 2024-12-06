"use client";
import React from "react";
import ButtonBack from "../../ButtonBack";
import PageTitle from "../PageTitle";

type Props = {
  children: React.ReactNode;
  title: string;
  className?: string;
};

const LayoutWithBack = ({ children, title, className }: Props) => {
  return (
    <section className={`relative h-full ${className ? className : ""}`}>
      <div className="grid grid-cols-4 w-[85%] mx-auto">
        <ButtonBack className="" />
        <PageTitle
          title={title}
          className="col-span-2 text-center text-nowrap"
        />
      </div>

      {children}
    </section>
  );
};

export default LayoutWithBack;
