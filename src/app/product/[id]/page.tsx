import { prisma } from "@/prisma/prisma-client";
import Container from "@/src/shared/components/ui/Container";
import ProductPage from "@/src/shared/components/ui/product-page/product-page";
import { notFound } from "next/navigation";
import React from "react";

type Props = {};

const ProductHome = async ({ params }: { params: Promise<{ id: string }> }) => {
  const slug = (await params).id;
  const product = await prisma.products.findFirst({
    where: {
      id: slug,
    },

    include: {
      productSkus: {},
    },
  });

  if (!product) {
    notFound();
  }
  //   where: {
  //     category: {
  //       category: {
  //         slug: {
  //           equals: slug,
  //         },
  //       },
  //     },
  //   },
  //   include: {
  //     productSkus: true,
  //   },
  // });
  console.log(product + "in page");
  return (
    <Container className="w-full">
      <ProductPage product={product} />
    </Container>
  );
};

export default ProductHome;
