import React, { useEffect, useState } from "react";
import ColorCheckBox from "./color-checkbox";
import { Products, Subcategories } from "@prisma/client";
import { useFilters } from "@/src/shared/hooks/useFilters";
import qs from "qs";
import { useRouter } from "next/navigation";
import CheckBox from "./checkbox";
import { Slider } from "./range-slider";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  subcategories: Subcategories[];
  products: Products[];
  colorArray: string[];
};

const FiltersForm = ({ subcategories, products, colorArray }: Props) => {
  const { control, getValues } = useFormContext();

  const [range, setRange] = useState([100, 20000]);

  return (
    <>
      <div className="text-[18px] flex flex-col gap-[10px] pb-[15px]">
        Цена
        <Controller
          control={control}
          name="prices"
          render={({ field, fieldState }) => (
            <>
              <Slider
                max={20000}
                min={100}
                step={100}
                value={range}
                onValueChange={field.onChange}
              />
            </>
          )}
        />
      </div>
      <hr />
      <div className="flex flex-col gap-[15px]">
        <h3 className="text-[18px]">Цвет</h3>
        <div className="flex flex-wrap gap-[10px]">
          {colorArray.map((value) => (
            <ColorCheckBox value={value} name="color" key={value} />
          ))}
        </div>
      </div>

      <hr />
      <div className="flex flex-col gap-[15px]">
        <h3 className="text-[18px]">Категория</h3>
        <div className="flex flex-col gap-[5px]">
          {subcategories.map((subcategory) => (
            <CheckBox
              value={subcategory.id}
              text={subcategory.name}
              name="subcategory"
              id={subcategory.id}
              key={subcategory.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FiltersForm;
