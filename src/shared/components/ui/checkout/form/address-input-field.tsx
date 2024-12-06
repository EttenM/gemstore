import React from "react";
import { useFormContext } from "react-hook-form";
import ErrorField from "../error-field";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import InputField from "./InputField";
type Props = {
  onChange: (value?: string) => void;
};

const AddressInputField = ({ onChange }: Props) => {
  return (
    <AddressSuggestions
      token="0470576b32b0d10a135fbd53e222ce371c0412a0"
      onChange={(data) => {
        onChange(data?.value);
      }}
      delay={250}
    />
  );
};

export default AddressInputField;
