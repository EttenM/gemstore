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

const PhoneInputField = ({
  id,
  title,
  type,
  name,
  required,
  placeholder,
}: Props) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const errorText = errors[name]?.message as string;

  return (
    <div className="flex flex-col gap-[5px]">
      <label htmlFor={id} className="text-[20px] text-active font-semibold">
        {title}
        {required && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder ? placeholder : title}
        className="checkout border-b-[2px] border-neitral"
        {...register(name)}
        // pattern="^((\+7|8)+([0-9]){10})$"
      />
      {errorText && <ErrorField text={errorText} />}
    </div>
  );
};
export default PhoneInputField;
