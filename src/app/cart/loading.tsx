import Container from "@/src/shared/components/ui/Container";
import LayoutWithBack from "@/src/shared/components/ui/layouts/layout-with-back";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <LayoutWithBack title="Ваша корзина">
      <Container className="xl:w-[600px]">
        <div className="flex flex-col gap-[25px] mt-[25px]">
          <div className="flex gap-[10px] shadow-md rounded-[20px]  overflow-hidden relative bg-active animate-pulse h-[120px]"></div>
          <div className="flex gap-[10px] shadow-md rounded-[20px]  overflow-hidden relative bg-active animate-pulse h-[120px]"></div>
          <div className="flex gap-[10px] shadow-md rounded-[20px]  overflow-hidden relative bg-active animate-pulse h-[120px]"></div>
        </div>
      </Container>
    </LayoutWithBack>
  );
}
