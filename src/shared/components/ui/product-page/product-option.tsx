import React from "react";

type Props = {
  value: string | number;
  inActive?: boolean;
  setSize: (value: string) => void;
  size: string;
};

const ProductOption = ({ size, setSize, value, inActive }: Props) => {
  return (
    <div className="">
      <input
        type="radio"
        name="size_selector"
        id={`size_${value}`}
        value={value}
        onChange={(e) => {
          setSize(e.target.value);
        }}
        checked={size === value ? true : false}
        className="hidden peer"
      />

      <label
        htmlFor={`size_${value}`}
        className="w-[35px] aspect-square rounded-full bg-secondary flex justify-center items-center 
        hover:bg-active hover:text-neitral duration-150 peer-checked:bg-foreground peer-checked:text-background cursor-pointer"
      >
        {value}
      </label>
    </div>
  );
};

export default ProductOption;
