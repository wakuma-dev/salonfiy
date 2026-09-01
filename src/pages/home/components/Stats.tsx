import { useEffect, useRef, useState } from "react";
import { useStore } from "@/store/Store";
import useCount from "../hooks/useCount";

const stats = [
  {
    value: 10000,
    label: "salon services booked",
    featured: true,
  },
  {
    value: 5000,
    label: "stylists & beauty professionals",
  },
  {
    value: 1000,
    label: "salons & beauty professionals",
  },
  {
    value: 20,
    label: "cities using Salonify",
  },
];

interface StatItemProps {
  value: number;
  label: string;
  featured?: boolean;
  start: boolean;
}

function StatItem({
  value,
  label,
  featured = false,
  start,
}: StatItemProps) {
  const count = useCount({
    end: value,
    start,
    duration: 2000,
  });

  return (
    <div className="text-center">
      <h3
        className={
          featured
            ? `
              bg-gradient-to-r
              from-[#E95EB4]
              to-[#F28AAD]
              bg-clip-text
              text-6xl
              font-extrabold
              leading-none
              tracking-tight
              text-transparent
              sm:text-7xl
              md:text-8xl
              lg:text-9xl
            `
            : `
              text-4xl
              font-semibold
              leading-tight
              tracking-tight
              sm:text-5xl
            `
        }
      >
        {count.toLocaleString()}+
      </h3>

      <p
        className={
          featured
            ? "mt-4 text-base opacity-70 sm:text-lg md:text-xl"
            : "mx-auto mt-2 max-w-xs text-base leading-relaxed opacity-70 sm:text-lg"
        }
      >
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  const theme = useStore((state) => state.theme);

  const isLight = theme === "light";

  const sectionRef = useRef<HTMLElement | null>(
    null
  );

  const [isVisible, setIsVisible] =
    useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="stats-heading"
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
          max-w-[90%]
          flex-col
          items-center
          gap-20
          py-20
          md:gap-24
          md:py-28
          lg:py-32
        "
      >
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="stats-heading"
            className="
              text-3xl
              font-semibold
              leading-tight
              tracking-tight
              sm:text-4xl
              md:text-5xl
            "
          >
            The modern destination for salon
            self-care
          </h2>

          <p
            className="
              mt-4
              text-base
              leading-relaxed
              opacity-70
              sm:text-lg
              md:text-xl
            "
          >
            One place to discover, book, and manage
            your salon experience.
          </p>
        </header>

        {/* Featured statistic */}
        <StatItem
          value={stats[0].value}
          label={stats[0].label}
          featured={stats[0].featured}
          start={isVisible}
        />

        {/* Secondary statistics */}
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
          {stats.slice(1).map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              start={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}