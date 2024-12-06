import { useEffect, useState } from "react";
import { useSet } from "react-use";

export const useFilters = () => {
  const [colors, { toggle: toggleColors }] = useSet(new Set<string>([]));
  const [subcategories, { toggle: toggleSubcategories }] = useSet(
    new Set<string>([])
  );

  return { colors, toggleColors, subcategories, toggleSubcategories };
};
