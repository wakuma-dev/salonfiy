
import { Skeleton } from "@/components/ui/skeleton";
import { useStore } from "@/store/Store";

export default function HeroSkeleton() {
  const theme = useStore((state) => state.theme);

  const skeletonColor =
    theme === "light" ? "bg-gray-200" : "bg-gray-700";

  return (
    <section
      className={`w-full h-auto py-4 ${
        theme === "dark"
          ? "bg-[#111111] text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-3 p-4 text-center">
        
        {/* Beauty Badge */}
        <Skeleton
          className={`h-[38px] w-[250px] rounded-full ${skeletonColor}`}
        />

        {/* Heading */}
        <div className="flex w-full flex-col items-center gap-2">
          <Skeleton
            className={`hidden h-[60px] w-[700px] max-w-full md:block ${skeletonColor}`}
          />

          {/* Mobile heading lines */}
          <Skeleton
            className={`h-[38px] w-4/5 md:hidden ${skeletonColor}`}
          />
          <Skeleton
            className={`h-[38px] w-2/3 md:hidden ${skeletonColor}`}
          />
        </div>

        {/* Description */}
        <div className="flex w-full max-w-4xl flex-col items-center gap-2">
          <Skeleton className={`h-[19px] w-full ${skeletonColor}`} />
          <Skeleton className={`h-[19px] w-5/6 ${skeletonColor}`} />
          
          <Skeleton
            className={`h-[24px] w-full md:hidden ${skeletonColor}`}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Skeleton
            className={`h-[36px] w-[140px] rounded-full ${skeletonColor}`}
          />
          <Skeleton
            className={`h-[36px] w-[130px] rounded-full ${skeletonColor}`}
          />
        </div>
      </div>
    </section>
  );
}

