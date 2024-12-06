import { prisma } from "@/prisma/prisma-client";

export interface GetSearchParams {
  query?: string;
  sortBy?: string;
  colors?: string;
  subcategories?: string;
  prices?: string;
}
const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 20000;

export const findProducts = async (params: GetSearchParams) => {
  const colors = params.colors?.split(",").map(String);
  const subcategories = params.subcategories?.split(",").map(String);
  const prices = params.prices?.split(",").map(String);

  const minPrice = Number(prices ? prices[0] : undefined) || DEFAULT_MIN_PRICE;

  const maxPrice = Number(prices ? prices[1] : undefined) || DEFAULT_MAX_PRICE;

  const products = await prisma.products.findMany({
    where: {
      color: colors
        ? {
            in: colors,
          }
        : undefined,
      categoryId: subcategories ? { in: subcategories } : undefined,
      price: {
        gte: minPrice, // >=
        lte: maxPrice, // <=
      },
    },
  });

  return products;
};

// export const findPizzas = async (params: GetSearchParams) => {
//   const sizes = params.sizes?.split(',').map(Number);
//   const pizzaTypes = params.pizzaTypes?.split(',').map(Number);
//   const ingredientsIdArr = params.ingredients?.split(',').map(Number);

//   const minPrice = Number(params.priceFrom) || DEFAULT_MIN_PRICE;
//   const maxPrice = Number(params.priceTo) || DEFAULT_MAX_PRICE;

//   const categories = await prisma.subcategories.findMany({
//     include: {
//       products: {
//         orderBy: {
//           id: 'desc',
//         },
//         where: {
//           col: ingredientsIdArr
//             ? {
//                 some: {
//                   id: {
//                     in: ingredientsIdArr,
//                   },
//                 },
//               }
//             : undefined,
//           items: {
//             some: {
//               size: {
//                 in: sizes,
//               },
//               pizzaType: {
//                 in: pizzaTypes,
//               },
//               price: {
//                 gte: minPrice, // >=
//                 lte: maxPrice, // <=
//               },
//             },
//           },
//         },
//         include: {
//           ingredients: true,
//           items: {
//             where: {
//               price: {
//                 gte: minPrice,
//                 lte: maxPrice,
//               },
//             },
//             orderBy: {
//               price: 'asc',
//             },
//           },
//         },
//       },
//     },
//   });

//   return categories;
// };
