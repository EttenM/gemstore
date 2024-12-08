import Image from "next/image";
import Container from "../shared/components/ui/Container";
import Header from "../shared/components/ui/header/Header";
import Banner from "../shared/components/ui/Banner";
import CategoryNav from "../shared/components/ui/categories/category-nav";
import { findCategories } from "../shared/lib/find-categories";

export default async function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-[30px]">
        <Banner />
        <CategoryNav />
      </div>
    </Container>
  );
}
