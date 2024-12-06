import React from "react";
import "./style.scss";
type Props = {
  inputId: string;
  label: string;
  value: string;
  icon: React.ReactElement;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  themeValue: string;
};

const ThemeSwitcherInput = ({
  inputId,
  value,
  label,
  onChange,
  icon,
  themeValue,
}: Props) => {
  return (
    <div className="theme_switcher">
      <input
        type="radio"
        id={inputId}
        name="theme-switcher"
        value={value}
        checked={themeValue === value ? true : false}
        className="hidden peer"
        onChange={onChange}
      />

      <label
        htmlFor={inputId}
        className="flex gap-[5px] items-center px-[20px] py-[5px] peer-checked:bg-neitral2 rounded-[30px] duration-150 cursor-pointer"
      >
        {icon}
        <span>{label}</span>
      </label>
    </div>
  );
};

export default ThemeSwitcherInput;
