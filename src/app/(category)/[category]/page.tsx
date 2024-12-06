import { findProducts, GetSearchParams } from "@/src/shared/lib/find-products";
import Container from "@/src/shared/components/ui/Container";
import ProducCard from "@/src/shared/components/ui/product-card/product-card";
import React, { Suspense } from "react";
import Loading from "./loading";
import FilterHeader from "@/src/shared/components/ui/categories/filter-header";
import FilltersBar from "@/src/shared/components/ui/categories/fillters-bar";
import { findFilters } from "@/src/shared/lib/find-filters";

type Props = {};

const CategoryPage = async ({
  searchParams,
  params,
}: {
  searchParams: GetSearchParams;
  params: Promise<{ category: string }>;
}) => {
  const slug = (await params).category;
  const products = await findProducts(searchParams);
  const filters = await findFilters(slug);

  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <FilterHeader products={products} />
        <FilltersBar
          products={filters.products}
          subcategories={filters.subcategories}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-[10px] md:gap-[20px] justify-between">
          {products.map((product) => (
            <ProducCard product={product} key={product.id} />
          ))}
        </div>{" "}
      </Container>
    </Suspense>
  );
};

export default CategoryPage;
