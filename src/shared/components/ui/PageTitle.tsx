import React from "react";

type Props = {
  title: string;
  className?: string;
};

const PageTitle = ({ title, className }: Props) => {
  return (
    <h1 className={`text-[24px] font-semibold ${className ? className : ""}`}>
      {title}
    </h1>
  );
};

export default PageTitle;
