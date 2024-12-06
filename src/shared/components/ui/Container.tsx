import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

const Container = ({ className, children }: Props) => {
  return (
    <div className={`w-[85%] mx-auto ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default Container;
