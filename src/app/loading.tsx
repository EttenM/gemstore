import Container from "@/src/shared/components/ui/Container";
import { LoaderCircle } from "lucide-react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full h-full flex justify-center items-center">
      {" "}
      <div className=" animate-spin">
        <LoaderCircle size={64} />
      </div>
    </div>
  );
}
