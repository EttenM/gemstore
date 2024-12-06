import React from "react";
import InputField from "./form/InputField";
import AddressInputField from "./form/address-input-field";
import { Controller, useFormContext } from "react-hook-form";
import ErrorField from "./error-field";

type Props = {};

const AddressDataForm = (props: Props) => {
  const { control } = useFormContext();
  return (
    <>
      <div className="flex flex-col gap-[5px]">
        <div className="text-[20px] text-active font-semibold">
          Адрес
          <span className="text-red-400">*</span>
        </div>
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <>
              <AddressInputField onChange={field.onChange} />
              {fieldState.error?.message && (
                <ErrorField text={fieldState.error?.message} />
              )}
            </>
          )}
        />
      </div>

      <InputField
        title="Комментарий"
        type="text"
        id="comment"
        name={"comment"}
      />
    </>
  );
};

export default AddressDataForm;
