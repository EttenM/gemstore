import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function up() {
  await prisma.category.create({
    data: {
      slug: "for-mens",
      name: "Мужчины",
      subcategories: {
        create: [
          {
            name: "Рубашка",
            products: {
              create: [
                {
                  name: "Классическая рубашка",
                  description:
                    "Отличная рубашка из премильных материалов собственного производства.",
                  price: 1500,
                  oldPrice: 1800,
                  color: "black",
                  imageUrl:
                    "https://smartcasuals.ru/wp-content/uploads/2023/08/IMG_5039-510x831.jpg",
                  productSkus: {
                    create: [
                      { type: "size", name: "размер", value: "S", quantity: 2 },
                      {
                        type: "size",
                        name: "размер",
                        value: "M",
                        quantity: 10,
                      },
                      { type: "size", name: "размер", value: "L", quantity: 0 },
                      {
                        type: "size",
                        name: "размер",
                        value: "XL",
                        quantity: 3,
                      },
                    ],
                  },
                },
                {
                  name: "Льняная коричневая рубашка",
                  description:
                    "Отличная рубашка из премильных материалов собственного производства.",
                  price: 1500,
                  oldPrice: 1800,
                  color: "brown",
                  imageUrl:
                    "https://smartcasuals.ru/wp-content/uploads/2024/07/C95994D5-1B75-4557-9F3E-E9C906074B3A-510x767.jpeg",
                  productSkus: {
                    create: [
                      { type: "size", name: "размер", value: "S", quantity: 2 },
                      {
                        type: "size",
                        name: "размер",
                        value: "M",
                        quantity: 10,
                      },
                      { type: "size", name: "размер", value: "L", quantity: 0 },
                      {
                        type: "size",
                        name: "размер",
                        value: "XL",
                        quantity: 3,
                      },
                    ],
                  },
                },
                {
                  name: "Зеленая хлопковая рубашка",
                  description:
                    "Отличная рубашка из премильных материалов собственного производства.",
                  price: 1500,
                  oldPrice: 1800,
                  color: "green",
                  imageUrl:
                    "https://smartcasuals.ru/wp-content/uploads/2024/07/32FDC4B6-E885-476F-A9AD-08BA63A0C971-510x767.jpeg",
                  productSkus: {
                    create: [
                      { type: "size", name: "размер", value: "S", quantity: 2 },
                      {
                        type: "size",
                        name: "размер",
                        value: "M",
                        quantity: 10,
                      },
                      { type: "size", name: "размер", value: "L", quantity: 0 },
                      {
                        type: "size",
                        name: "размер",
                        value: "XL",
                        quantity: 3,
                      },
                    ],
                  },
                },
                {
                  name: "Классическая рубашка",
                  description:
                    "Отличная рубашка из премильных материалов собственного производства.",
                  price: 1300,
                  oldPrice: 1900,
                  color: "white",
                  imageUrl:
                    "https://smartcasuals.ru/wp-content/uploads/2024/07/C1BB0785-DB59-41E1-A703-0304295959D6.jpeg",
                  productSkus: {
                    create: [
                      { type: "size", name: "размер", value: "S", quantity: 2 },
                      {
                        type: "size",
                        name: "размер",
                        value: "M",
                        quantity: 10,
                      },
                      { type: "size", name: "размер", value: "L", quantity: 0 },
                      {
                        type: "size",
                        name: "размер",
                        value: "XL",
                        quantity: 3,
                      },
                    ],
                  },
                },
                {
                  name: "Голубая мужская рубашка",
                  description:
                    "Отличная рубашка из премильных материалов собственного производства.",
                  price: 1300,
                  oldPrice: 1900,
                  color: "sky-blue",
                  imageUrl:
                    "https://smartcasuals.ru/wp-content/uploads/2022/08/2022-07-26-15-28-31-75-510x680.jpeg",
                  productSkus: {
                    create: [
                      { type: "size", name: "размер", value: "S", quantity: 2 },
                      {
                        type: "size",
                        name: "размер",
                        value: "M",
                        quantity: 10,
                      },
                      { type: "size", name: "размер", value: "L", quantity: 0 },
                      {
                        type: "size",
                        name: "размер",
                        value: "XL",
                        quantity: 3,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Брюки",
            products: {
              create: [
                {
                  name: "Мужские брюки темно-синего цвета ",
                  description:
                    "Стильные мужские брюки зауженного кроя. Модель зауженного силуэта со стрелкой по всей длине, имеют два боковых кармана, два прорезных кармана в рамку сзади. Отлично впишутся как в повседневный, так и в торжественный образ.",
                  price: 3500,
                  oldPrice: 3800,
                  color: "blue",
                  imageUrl:
                    "https://smartcasuals.ru/wp-content/uploads/2024/05/DSC_2653-510x767.jpg",
                  productSkus: {
                    create: [
                      { type: "size", name: "размер", value: "S", quantity: 2 },
                      {
                        type: "size",
                        name: "размер",
                        value: "M",
                        quantity: 10,
                      },
                      { type: "size", name: "размер", value: "L", quantity: 0 },
                      {
                        type: "size",
                        name: "размер",
                        value: "XL",
                        quantity: 3,
                      },
                    ],
                  },
                },
                {
                  name: "Мужские брюки синего цвета",
                  description:
                    "Стильные мужские брюки зауженного кроя. Модель зауженного силуэта со стрелкой по всей длине, имеют два боковых кармана, два прорезных кармана в рамку сзади. Отлично впишутся как в повседневный, так и в торжественный образ.",
                  price: 3500,
                  oldPrice: 3800,
                  color: "blue",
                  imageUrl:
                    "https://smartcasuals.ru/wp-content/uploads/2024/08/IMG_2756-510x767.jpg",
                  productSkus: {
                    create: [
                      { type: "size", name: "размер", value: "S", quantity: 2 },
                      {
                        type: "size",
                        name: "размер",
                        value: "M",
                        quantity: 10,
                      },
                      { type: "size", name: "размер", value: "L", quantity: 0 },
                      {
                        type: "size",
                        name: "размер",
                        value: "XL",
                        quantity: 3,
                      },
                    ],
                  },
                },
                {
                  name: "Мужские бежевые брюки с защипами",
                  description:
                    "Стильные мужские брюки зауженного кроя. Модель зауженного силуэта со стрелкой по всей длине, имеют два боковых кармана, два прорезных кармана в рамку сзади. Отлично впишутся как в повседневный, так и в торжественный образ.",
                  price: 4500,
                  oldPrice: 5000,
                  color: "cream",
                  imageUrl:
                    "https://smartcasuals.ru/wp-content/uploads/2024/04/DSC_8730-510x767.jpg",
                  productSkus: {
                    create: [
                      { type: "size", name: "размер", value: "S", quantity: 2 },
                      {
                        type: "size",
                        name: "размер",
                        value: "M",
                        quantity: 10,
                      },
                      { type: "size", name: "размер", value: "L", quantity: 0 },
                      {
                        type: "size",
                        name: "размер",
                        value: "XL",
                        quantity: 3,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Пальто",
            products: {
              create: [
                {
                  name: "Коричневое приталенное пальто",
                  description:
                    "Однобортная модель, имеет классический отложной воротник с лацканами, по переду два косых боковых кармана с листочкой и один нагрудный с листочкой.",
                  price: 6500,
                  oldPrice: 6800,
                  color: "brown",
                  imageUrl:
                    "https://smartcasuals.ru/wp-content/uploads/2024/11/Img2864-510x767.jpg",
                  productSkus: {
                    create: [
                      { type: "size", name: "размер", value: "S", quantity: 2 },
                      {
                        type: "size",
                        name: "размер",
                        value: "M",
                        quantity: 10,
                      },
                      { type: "size", name: "размер", value: "L", quantity: 0 },
                      {
                        type: "size",
                        name: "размер",
                        value: "XL",
                        quantity: 3,
                      },
                    ],
                  },
                },
                {
                  name: "Светло-серое пальто в “елочку”",
                  description:
                    "Однобортная модель, имеет классический отложной воротник с лацканами, по переду два косых боковых кармана с листочкой и один нагрудный с листочкой.",
                  price: 6500,
                  oldPrice: 6800,
                  color: "grey",
                  imageUrl:
                    "https://smartcasuals.ru/wp-content/uploads/2024/10/IMG_1505-1-510x765.jpg",
                  productSkus: {
                    create: [
                      { type: "size", name: "размер", value: "S", quantity: 2 },
                      {
                        type: "size",
                        name: "размер",
                        value: "M",
                        quantity: 10,
                      },
                      { type: "size", name: "размер", value: "L", quantity: 0 },
                      {
                        type: "size",
                        name: "размер",
                        value: "XL",
                        quantity: 3,
                      },
                    ],
                  },
                },
                {
                  name: "Синее пальто в клетку с воротником-стойкой",
                  description:
                    "Однобортная модель, имеет классический отложной воротник с лацканами, по переду два косых боковых кармана с листочкой и один нагрудный с листочкой.",
                  price: 10500,
                  oldPrice: 12800,
                  color: "blue",
                  imageUrl:
                    "https://smartcasuals.ru/wp-content/uploads/2024/10/IMG_1076-510x680.jpg",
                  productSkus: {
                    create: [
                      { type: "size", name: "размер", value: "S", quantity: 2 },
                      {
                        type: "size",
                        name: "размер",
                        value: "M",
                        quantity: 10,
                      },
                      { type: "size", name: "размер", value: "L", quantity: 0 },
                      {
                        type: "size",
                        name: "размер",
                        value: "XL",
                        quantity: 3,
                      },
                    ],
                  },
                },
                {
                  name: "Бежевое пальто с воротником-стойкой",
                  description:
                    "Однобортная модель, имеет классический отложной воротник с лацканами, по переду два косых боковых кармана с листочкой и один нагрудный с листочкой.",
                  price: 10500,
                  oldPrice: 12800,
                  color: "cream",
                  imageUrl:
                    "https://smartcasuals.ru/wp-content/uploads/2024/09/Img2333-510x767.jpg",
                  productSkus: {
                    create: [
                      { type: "size", name: "размер", value: "S", quantity: 2 },
                      {
                        type: "size",
                        name: "размер",
                        value: "M",
                        quantity: 10,
                      },
                      { type: "size", name: "размер", value: "L", quantity: 0 },
                      {
                        type: "size",
                        name: "размер",
                        value: "XL",
                        quantity: 3,
                      },
                    ],
                  },
                },
                {
                  name: "Темно-серое приталенное пальто",
                  description:
                    "Однобортная модель, имеет классический отложной воротник с лацканами, по переду два косых боковых кармана с листочкой и один нагрудный с листочкой.",
                  price: 10500,
                  oldPrice: 12800,
                  color: "black",
                  imageUrl:
                    "https://smartcasuals.ru/wp-content/uploads/2024/10/IMG_1175-510x765.jpg",
                  productSkus: {
                    create: [
                      { type: "size", name: "размер", value: "S", quantity: 2 },
                      {
                        type: "size",
                        name: "размер",
                        value: "M",
                        quantity: 10,
                      },
                      { type: "size", name: "размер", value: "L", quantity: 0 },
                      {
                        type: "size",
                        name: "размер",
                        value: "XL",
                        quantity: 3,
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
  //   data: {
  //     slug: "for-womans",
  //     name: "Женщины",
  //     subcategories: {
  //       create: [
  //         {
  //           name: "Рубашка",
  //           products: {
  //             create: [
  //               {
  //                 name: "Классическая рубашка",
  //                 description:
  //                   "Отличная рубашка из премильных материалов собственного производства.",
  //                 productSkus: {
  //                   create: [
  //                     {
  //                       price: 1500,
  //                       quantity: 10,
  //                       imageUrl:
  //                         "https://smartcasuals.ru/wp-content/uploads/2024/07/C1BB0785-DB59-41E1-A703-0304295959D6.jpeg",
  //                       size_attribute: {
  //                         create: [
  //                           {
  //                             type: "size",
  //                             value: "XL",
  //                           },
  //                         ],
  //                       },
  //                       color_attribute: {
  //                         create: [
  //                           {
  //                             type: "color",
  //                             value: "#fff",
  //                           },
  //                         ],
  //                       },
  //                     },
  //                     {
  //                       price: 1600,
  //                       quantity: 3,
  //                       imageUrl:
  //                         "https://smartcasuals.ru/wp-content/uploads/2024/07/C1BB0785-DB59-41E1-A703-0304295959D6.jpeg",
  //                       size_attribute: {
  //                         create: [
  //                           {
  //                             type: "size",
  //                             value: "L",
  //                           },
  //                         ],
  //                       },
  //                       color_attribute: {
  //                         create: [
  //                           {
  //                             type: "color",
  //                             value: "#fff",
  //                           },
  //                         ],
  //                       },
  //                     },
  //                     {
  //                       price: 1300,
  //                       quantity: 1,
  //                       imageUrl:
  //                         "https://smartcasuals.ru/wp-content/uploads/2024/07/C1BB0785-DB59-41E1-A703-0304295959D6.jpeg",
  //                       size_attribute: {
  //                         create: [
  //                           {
  //                             type: "size",
  //                             value: "XS",
  //                           },
  //                         ],
  //                       },
  //                       color_attribute: {
  //                         create: [
  //                           {
  //                             type: "color",
  //                             value: "#fff",
  //                           },
  //                         ],
  //                       },
  //                     },
  //                   ],
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.category.create({
  //   data: {
  //     slug: "acessories",
  //     name: "Аксессуары",
  //     subcategories: {
  //       create: [
  //         {
  //           name: "Рубашка",
  //           products: {
  //             create: [
  //               {
  //                 name: "Классическая рубашка",
  //                 description:
  //                   "Отличная рубашка из премильных материалов собственного производства.",
  //                 productSkus: {
  //                   create: [
  //                     {
  //                       price: 1500,
  //                       quantity: 10,
  //                       imageUrl:
  //                         "https://smartcasuals.ru/wp-content/uploads/2024/07/C1BB0785-DB59-41E1-A703-0304295959D6.jpeg",
  //                       size_attribute: {
  //                         create: [
  //                           {
  //                             type: "size",
  //                             value: "XL",
  //                           },
  //                         ],
  //                       },
  //                       color_attribute: {
  //                         create: [
  //                           {
  //                             type: "color",
  //                             value: "#fff",
  //                           },
  //                         ],
  //                       },
  //                     },
  //                     {
  //                       price: 1600,
  //                       quantity: 3,
  //                       imageUrl:
  //                         "https://smartcasuals.ru/wp-content/uploads/2024/07/C1BB0785-DB59-41E1-A703-0304295959D6.jpeg",
  //                       size_attribute: {
  //                         create: [
  //                           {
  //                             type: "size",
  //                             value: "L",
  //                           },
  //                         ],
  //                       },
  //                       color_attribute: {
  //                         create: [
  //                           {
  //                             type: "color",
  //                             value: "#fff",
  //                           },
  //                         ],
  //                       },
  //                     },
  //                     {
  //                       price: 1300,
  //                       quantity: 1,
  //                       imageUrl:
  //                         "https://smartcasuals.ru/wp-content/uploads/2024/07/C1BB0785-DB59-41E1-A703-0304295959D6.jpeg",
  //                       size_attribute: {
  //                         create: [
  //                           {
  //                             type: "size",
  //                             value: "XS",
  //                           },
  //                         ],
  //                       },
  //                       color_attribute: {
  //                         create: [
  //                           {
  //                             type: "color",
  //                             value: "#fff",
  //                           },
  //                         ],
  //                       },
  //                     },
  //                   ],
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Subcategories" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Products" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductsSkus" RESTART IDENTITY CASCADE`;
  // await prisma.$executeRaw`TRUNCATE TABLE "SizeAttributes" RESTART IDENTITY CASCADE`;
  // await prisma.$executeRaw`TRUNCATE TABLE "ColorAttributes" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
