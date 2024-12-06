import Container from "@/src/shared/components/ui/Container";
import LayoutWithBack from "@/src/shared/components/ui/layouts/layout-with-back";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Container>
      <div className="flex flex-col gap-[30px]">
        <div className="flex justify-between">
          <div className="h-[30px] w-[25%] bg-active animate-pulse rounded-[15px]"></div>
          <div className="h-[25px] w-[15%] bg-active animate-pulse rounded-[15px]"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-[10px] md:gap-[20px] justify-between">
          <div className="">
            <div className="flex flex-col gap-[15px]">
              <div className="w-full rounded-[15px] bg-active animate-pulse h-[280px]"></div>
              <div className="w-full rounded-[15px] bg-active animate-pulse h-[20px]"></div>
              <div className="w-[70%] rounded-[15px] bg-active animate-pulse h-[20px]"></div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-[15px]">
              <div className="w-full rounded-[15px] bg-active animate-pulse h-[280px]"></div>
              <div className="w-full rounded-[15px] bg-active animate-pulse h-[20px]"></div>
              <div className="w-[70%] rounded-[15px] bg-active animate-pulse h-[20px]"></div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-[15px]">
              <div className="w-full rounded-[15px] bg-active animate-pulse h-[280px]"></div>
              <div className="w-full rounded-[15px] bg-active animate-pulse h-[20px]"></div>
              <div className="w-[70%] rounded-[15px] bg-active animate-pulse h-[20px]"></div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-[15px]">
              <div className="w-full rounded-[15px] bg-active animate-pulse h-[280px]"></div>
              <div className="w-full rounded-[15px] bg-active animate-pulse h-[20px]"></div>
              <div className="w-[70%] rounded-[15px] bg-active animate-pulse h-[20px]"></div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-[15px]">
              <div className="w-full rounded-[15px] bg-active animate-pulse h-[280px]"></div>
              <div className="w-full rounded-[15px] bg-active animate-pulse h-[20px]"></div>
              <div className="w-[70%] rounded-[15px] bg-active animate-pulse h-[20px]"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
