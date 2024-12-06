import React from "react";
import {
  CheckCircle2,
  CreditCard,
  Dot,
  MapPin,
  User,
  UserCheck,
} from "lucide-react";

type Props = {
  step: number;
};

const ProgressBar = ({ step }: Props) => {
  return (
    <div className="flex justify-evenly items-center">
      <User size={32} />

      <Dot />
      <Dot />
      <Dot />
      <div className={`${step >= 2 ? "opacity-100" : "opacity-30"}`}>
        <MapPin size={32} />
      </div>
      <Dot />
      <Dot />
      <Dot />
      <div className={`${step >= 3 ? "opacity-100" : "opacity-30"}`}>
        <CreditCard size={32} />
      </div>
      <Dot />
      <Dot />
      <Dot />
      <div className={`${step >= 4 ? "opacity-100" : "opacity-30"}`}>
        <CheckCircle2 size={32} />
      </div>
    </div>
  );
};

export default ProgressBar;
