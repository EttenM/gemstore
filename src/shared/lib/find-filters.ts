import { prisma } from "@/prisma/prisma-client";

export const findFilters = async (slug: string) => {
  const products = await prisma.products.findMany({
    where: {
      category: {
        category: {
          slug: {
            equals: slug,
          },
        },
      },
    },
  });
  const subcategories = await prisma.subcategories.findMany({
    where: {
      category: {
        slug: {
          equals: slug,
        },
      },
    },
  });

  return {
    products,
    subcategories,
  };
};
