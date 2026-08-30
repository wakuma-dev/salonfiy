import { useStore } from "@/store/Store";
import { Skeleton } from "@/components/ui/skeleton";

export default function SalonVideoSkeleton() {
  const theme = useStore((state) => state.theme);

  const skeletonColor =
    theme === "light"
      ? "bg-gray-200"
      : "bg-gray-700";

  return (
    <section
      className={`relative aspect-[4/3] w-full overflow-hidden md:aspect-[21/9] ${
        theme === "light"
          ? "bg-white"
          : "bg-[#111111]"
      }`}
    >
      {/* Video Placeholder */}
      <Skeleton
        className={`absolute inset-0 h-full w-full rounded-none ${skeletonColor}`}
      />

      {/* Center Heading */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <Skeleton
          className={`h-[30px] w-64 rounded-md md:h-[39px] md:w-96 ${skeletonColor}`}
        />
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-0 z-10 flex w-full items-center justify-between px-4 md:px-6">
        {/* Play */}
        <Skeleton
          className={`h-10 w-10 rounded-full ${skeletonColor}`}
        />

        {/* Volume */}
        <Skeleton
          className={`h-10 w-10 rounded-full ${skeletonColor}`}
        />
      </div>
    </section>
  );
}

