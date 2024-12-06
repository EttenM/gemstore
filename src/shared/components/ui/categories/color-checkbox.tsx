import { colors } from "@/src/constants/colors";
import React from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  value: string;
  name: string;
};

const ColorCheckBox = ({ value, name }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <input
        type="checkbox"
        id={value}
        value={value}
        className="hidden peer"
        {...register(name)}
      />
      <label
        htmlFor={value}
        className="flex items-center justify-center w-[40px] aspect-square rounded-full bg-background  cursor-pointer peer-checked:border peer-checked:shadow-xl shadow-foreground relative"
      >
        <div
          className="block w-[30px] h-[30px] rounded-full border peer"
          style={{ backgroundColor: colors.get(value)?.color }}
        ></div>
        <div className="absolute bottom-[-40px] left-[50%] translate-x-[-50%] bg-background text-foreground border p-[5px] rounded-[15px] hidden peer-hover:block duration-150 z-[2]">
          {colors.get(value)?.name}
        </div>
      </label>
    </div>
  );
};

export default ColorCheckBox;
