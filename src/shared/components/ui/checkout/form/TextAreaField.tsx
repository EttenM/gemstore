import React from "react";
import { useFormContext } from "react-hook-form";
import ErrorField from "../error-field";

type Props = {
  id: string;
  title: string;
  type: string;
  name: string;
  required?: boolean;
  placeholder?: string;
};

const InputField = ({ id, title, type, name, placeholder }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorText = errors[name]?.message as string;

  return (
    <div className="flex flex-col gap-[5px]">
      <label htmlFor={id} className="text-[20px] text-active font-semibold">
        {title}
      </label>
      <textarea
        id={id}
        placeholder={placeholder ? placeholder : title}
        {...register(name)}
        className="flex min-h-[80px] w-full rounded-md border-b-[2px] border-neitralbg-background px-3 py-2 text-md ring-offset-background 
          placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
          disabled:cursor-not-allowed disabled:opacity-50"
      />
      {errorText && <ErrorField text={errorText} />}
    </div>
  );
};

export default InputField;
