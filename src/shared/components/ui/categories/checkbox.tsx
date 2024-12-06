import { colors } from "@/src/constants/colors";
import React from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  value: string;
  id: string;
  name: string;
  text: string;
};

const CheckBox = ({ value, id, name, text }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="group flex gap-[10px] items-center">
      <input
        type="checkbox"
        id={id}
        value={value}
        className="hidden peer"
        {...register(name)}
      />
      <label
        htmlFor={id}
        className=" flex items-center justify-center w-[30px] aspect-square rounded-[8px] border-2"
      >
        <div className="w-[20px] aspect-square rounded-[8px] group-has-[:checked]:bg-active"></div>
      </label>
      <label htmlFor={id} className="">
        {text}
      </label>
    </div>
  );
};

export default CheckBox;
