import { useStore } from "@/store/Store";
import { Skeleton } from "@/components/ui/skeleton";

export default function CategoriesSkeleton() {
  const theme = useStore((state) => state.theme);

  const skeletonColor =
    theme === "light" ? "bg-gray-200" : "bg-gray-700";

  const categories = [
    "Hair",
    "Makeup",
    "Nails",
    "Facial & Skincare",
    "Massage & Spa",
    "Foot Care",
    "Hair Removal",
  ];

  return (
    <div
      className={`w-full overflow-x-auto scrollbar-hide ${
        theme === "light"
          ? "bg-[#fafafa] text-black"
          : "bg-[#1B1B1B] text-white"
      }`}
    >
      <div className="flex w-max min-w-full items-center gap-1 md:justify-center">
        {categories.map((category) => (
          <div
            key={category}
            className={`shrink-0 rounded-full border px-2.5 py-1.5 ${
              theme === "light"
                ? "border-gray-300"
                : "border-gray-700"
            }`}
          >
            <Skeleton
              className={`h-[19px] ${skeletonColor} ${
                category === "Facial & Skincare"
                  ? "w-32"
                  : category === "Massage & Spa"
                    ? "w-28"
                    : category === "Hair Removal"
                      ? "w-28"
                      : "w-16"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

