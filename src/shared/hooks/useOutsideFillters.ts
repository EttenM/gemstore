import { useEffect, useRef } from "react";

type Props = {
  filterbarState: boolean;
  toggleFilterBar: (by: boolean) => void;
  ref: any;
};

export const useOutsideFilters = ({
  filterbarState,
  toggleFilterBar,
  ref,
}: Props) => {
  // const ref = useRef<HTMLElement>(null);

  const handleOutSideClick = (event: any) => {
    const filterbar = document.querySelector(".filterbar");
    const body = document.querySelector("body");

    if (filterbarState && ref.current && !ref.current.contains(event.target)) {
      console.log("Outside Clicked. ");
      filterbar?.classList.remove("open");
      body?.classList.remove("darkened");
      console.log("Outside Clicked. " + filterbarState);
      toggleFilterBar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick);

    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  }, [ref, filterbarState]);

  return { ref };
};
