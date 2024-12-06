import { ChevronDownCircleIcon } from "lucide-react";
import React from "react";

type Props = {
  text: string;
};

const ProductDescription = ({ text }: Props) => {
  return (
    <div className="accordion_pannel text-[16px] ">
      <div className="flex justify-between items-center">
        <h2>Описание</h2>{" "}
        <span className="arrow_down duration-200">
          <ChevronDownCircleIcon />
        </span>
      </div>
      <div className="accordion_content">
        <div className="overflow-hidden">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
