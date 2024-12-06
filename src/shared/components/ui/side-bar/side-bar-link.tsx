import Link from "next/link";
import React from "react";

type Props = {
  item: {
    title: string;
    link: string;
    icon: React.FC<any>;
  };
  handleClose: () => void;
};

const SideBarLink = ({ item, handleClose }: Props) => {
  return (
    <Link
      href={item.link}
      onClick={handleClose}
      className="flex items-center gap-[20px] p-[20px]  text-[16px] font-bold text-neitral hover:text-foreground hover:bg-secondary rounded-[10px]"
    >
      <item.icon className="w-[20px] h-[20px]" />
      <span>{item.title}</span>
    </Link>
  );
};

export default SideBarLink;
