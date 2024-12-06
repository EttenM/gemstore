import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import React from "react";

type Props = {
  className?: string;
};

const ButtonBack = ({ className }: Props) => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={`w-[32px] aspect-square bg-background shadow-md rounded-full flex justify-center items-center ${
        className ? className : ""
      }`}
    >
      <span className="opacity-70">
        <ChevronLeft size={24} />
      </span>
    </button>
  );
};

export default ButtonBack;
