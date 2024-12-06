import { prisma } from "@/prisma/prisma-client";

export const findCategories = async () => {
  const categories = await prisma.category.findMany();

  return categories;
};
