import { useStore } from "@/store/Store";
export default function StatsSkeleton() {
  const theme = useStore((state) => state.theme);

  const isLight = theme === "light";

  const skeletonColor = isLight
    ? "bg-gray-200"
    : "bg-gray-700";

  return (
    <section
      aria-hidden="true"
      className={`
        w-full
        ${
          isLight
            ? "bg-[#fafafa] text-black"
            : "bg-[#1b1b1b] text-white"
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          w-[90%]
          max-w-7xl
          flex-col
          items-center
          gap-20
          py-20
          md:gap-24
          md:py-28
          lg:py-32
        "
      >
        {/* Header Skeleton */}
        <div className="flex w-full max-w-3xl flex-col items-center gap-4">
          {/* Heading */}
          <div
            className={`
              h-10
              w-[85%]
              animate-pulse
              rounded-md
              sm:h-11
              md:h-14
            `}
          >
            <div
              className={`h-full w-full rounded-md ${skeletonColor}`}
            />
          </div>

          {/* Description */}
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              gap-2
            "
          >
            <div
              className={`
                h-5
                w-[75%]
                animate-pulse
                rounded-md
                sm:h-6
                md:w-[65%]
              `}
            >
              <div
                className={`h-full w-full rounded-md ${skeletonColor}`}
              />
            </div>

            <div
              className={`
                hidden
                h-5
                w-[45%]
                animate-pulse
                rounded-md
                md:block
              `}
            >
              <div
                className={`h-full w-full rounded-md ${skeletonColor}`}
              />
            </div>
          </div>
        </div>

        {/* Featured Statistic Skeleton */}
        <div className="flex flex-col items-center gap-4">
          <div
            className={`
              h-20
              w-56
              animate-pulse
              rounded-md
              sm:h-24
              sm:w-64
              md:h-28
              md:w-80
              lg:h-32
              lg:w-96
              ${skeletonColor}
            `}
          />

          <div
            className={`
              h-5
              w-48
              animate-pulse
              rounded-md
              sm:h-6
              sm:w-56
              ${skeletonColor}
            `}
          />
        </div>

        {/* Secondary Statistics Skeleton */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-12
            md:grid-cols-3
            md:gap-8
          "
        >
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex flex-col items-center gap-3"
            >
              {/* Number */}
              <div
                className={`
                  h-12
                  w-32
                  animate-pulse
                  rounded-md
                  sm:h-14
                  sm:w-36
                  ${skeletonColor}
                `}
              />

              {/* Label */}
              <div
                className="
                  flex
                  w-full
                  max-w-xs
                  flex-col
                  items-center
                  gap-2
                "
              >
                <div
                  className={`
                    h-5
                    w-[80%]
                    animate-pulse
                    rounded-md
                    ${skeletonColor}
                  `}
                />

                <div
                  className={`
                    h-5
                    w-[55%]
                    animate-pulse
                    rounded-md
                    ${skeletonColor}
                  `}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}