import React from "react";
import InputField from "./form/InputField";
import PhoneInputField from "./form/phone-input-field";

type Props = {};

const UserDataForm = (props: Props) => {
  return (
    <>
      <InputField
        title="Имя"
        type="text"
        id="first_name"
        name={"firstName"}
        required={true}
      />
      <InputField
        title="Фамилия"
        type="text"
        id="last_name"
        name={"lastName"}
        required={true}
      />
      <PhoneInputField
        title="Номер телефона"
        placeholder="+70000000000"
        type="tel"
        id="phone"
        name={"phone"}
        required={true}
      />
      <InputField
        title="Email"
        type="email"
        id="email"
        name={"email"}
        required={true}
      />
    </>
  );
};

export default UserDataForm;
