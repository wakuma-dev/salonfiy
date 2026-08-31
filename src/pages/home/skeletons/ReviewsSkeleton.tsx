import { useStore } from "@/store/Store";

export default function ReviewsSkeleton() {
  const theme = useStore((state) => state.theme);

  const skeletonReviews = Array.from({ length: 6 });

  const skeletonColor =
    theme === "light"
      ? "bg-gray-200"
      : "bg-gray-700";

  return (
    <section
      className={`w-full overflow-hidden py-4 ${
        theme === "light"
          ? "bg-white text-black"
          : "bg-[#111111] text-white"
      }`}
    >
      {/* Header */}
      <div className="mx-auto mb-6 w-[90%]">
        <div className="flex flex-col items-start gap-1.5">
          {/* Reviews title */}
          <div
            className={`h-6 w-20 animate-pulse rounded-md md:h-9 md:w-32 ${skeletonColor}`}
          />

          {/* Subtitle */}
          <div
            className={`h-5 w-64 animate-pulse rounded-md ${skeletonColor}`}
          />
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden">

        {/* Left fade */}
        <div
          className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r ${
            theme === "light"
              ? "from-white"
              : "from-[#111111]"
          } to-transparent`}
        />

        {/* Right fade */}
        <div
          className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l ${
            theme === "light"
              ? "from-white"
              : "from-[#111111]"
          } to-transparent`}
        />

        {/* Skeleton track */}
        <div className="flex w-max gap-3 md:gap-5">
          {skeletonReviews.map((_, index) => (
            <article
              key={index}
              className={`flex h-[350px] w-[300px] shrink-0 animate-pulse flex-col justify-between rounded-2xl border p-3 md:w-[350px] ${
                theme === "light"
                  ? "border-gray-200 bg-[#fafafa]"
                  : "border-white/10 bg-[#1b1b1b]"
              }`}
            >
              {/* Content */}
              <div className="flex flex-col items-start gap-2">

                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <div
                      key={starIndex}
                      className={`h-4 w-4 rounded-sm ${skeletonColor}`}
                    />
                  ))}
                </div>

                {/* Title */}
                <div
                  className={`h-6 w-44 rounded-md ${skeletonColor}`}
                />

                {/* Review lines */}
                <div className="mt-1 flex w-full flex-col gap-2">
                  <div
                    className={`h-4 w-full rounded-md ${skeletonColor}`}
                  />

                  <div
                    className={`h-4 w-[92%] rounded-md ${skeletonColor}`}
                  />

                  <div
                    className={`h-4 w-[75%] rounded-md ${skeletonColor}`}
                  />
                </div>
              </div>

              {/* User */}
              <div className="flex items-center gap-2">

                {/* Avatar */}
                <div
                  className={`h-10 w-10 shrink-0 rounded-full ${skeletonColor}`}
                />

                {/* User information */}
                <div className="flex flex-col gap-2">
                  <div
                    className={`h-5 w-32 rounded-md ${skeletonColor}`}
                  />

                  <div
                    className={`h-4 w-24 rounded-md ${skeletonColor}`}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

