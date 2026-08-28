import { useEffect, useMemo, useRef, useState } from "react";
import ServiceList from "./ServiceList";
import services from "../data/services";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceProps {
  title: string;
  tag: "recommend" | "new" | "trending";
  category: string;
}

export default function ServiceRow({
  title,
  tag,
  category,
}: ServiceProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const filteredServices = useMemo(
    () =>
      services.filter(
        (service) =>
          service.category === category &&
          service.tags.includes(tag)
      ),
    [category, tag]
  );

  const checkScrollPosition = () => {
    const container = scrollRef.current;

    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setCanScrollLeft(scrollLeft > 1);

    setCanScrollRight(
      scrollLeft + clientWidth < scrollWidth - 1
    );
  };

  const scrollServices = (direction: "left" | "right") => {
    const container = scrollRef.current;

    if (!container) return;

    container.scrollBy({
      left: direction === "right" ? 300 : -300,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    checkScrollPosition();

    container.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      container.removeEventListener(
        "scroll",
        checkScrollPosition
      );

      window.removeEventListener(
        "resize",
        checkScrollPosition
      );
    };
  }, [filteredServices]);

  if (filteredServices.length === 0) {
    return null;
  }

  const groups = [];

  for (let i = 0; i < filteredServices.length; i += 5) {
    groups.push(filteredServices.slice(i, i + 5));
  }

  return (
    <section className="relative w-full">
      <h3 className="mb-4">{title}</h3>

      <div
        ref={scrollRef}
        className="
          w-full
          overflow-x-auto
          scroll-smooth
          snap-x
          snap-mandatory
          scrollbar-hide
          overscroll-x-contain
        "
      >
        <div className="flex w-full">
          {groups.map((group, index) => (
            <div
              key={index}
              className="
                min-w-full
                w-full
                shrink-0
                snap-start
                px-1
                sm:px-0
              "
            >
              <ServiceList services={group} />
            </div>
          ))}
        </div>
      </div>

      {/* Left */}
      {canScrollLeft && (
        <button
          type="button"
          aria-label="Previous services"
          onClick={() => scrollServices("left")}
          className="
            absolute
            left-2
            top-1/2
            z-10
            hidden
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white
            p-2
            shadow-md
            transition
            hover:scale-105
            md:flex
          "
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* Right */}
      {canScrollRight && (
        <button
          type="button"
          aria-label="Next services"
          onClick={() => scrollServices("right")}
          className="
            absolute
            right-2
            top-1/2
            z-10
            hidden
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white
            p-2
            shadow-md
            transition
            hover:scale-105
            md:flex
          "
        >
          <ChevronRight size={20} />
        </button>
      )}
    </section>
  );
}