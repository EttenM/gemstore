import React from "react";

type Props = {
  text: string;
};

const ErrorField = ({ text }: Props) => {
  return <div className="text-red-400">{text}</div>;
};

export default ErrorField;
