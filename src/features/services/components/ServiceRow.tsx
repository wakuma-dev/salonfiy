import { useEffect, useMemo, useRef, useState } from "react";
import ServiceList from "./ServiceList";
import services from "../data/services";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useStore } from "@/store/Store";
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
  const theme = useStore((state) => state.theme)
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

  return (
    <section className="relative w-full">
      <h3 className="mb-4">{title}</h3>

      <div
        ref={scrollRef}
        className="w-full overflow-x-auto scroll-smooth scrollbar-hide"
      >
        <ServiceList services={filteredServices} />
      </div>

      {canScrollLeft && (
        <button
          type="button"
          aria-label="Scroll services left"
          onClick={() => scrollServices("left")}
          className={`
            absolute
            -left-5
            top-1/2
            z-10
            hidden
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            p-2
            shadow-md
            cursor-pointer
            md:flex
             ${theme === "light"
      ? "bg-white text-black hover:bg-gray-100"
      : "bg-[#1e1e1e] text-white hover:bg-[#2a2a2a]"
  }
          `}
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {canScrollRight && (
        <button
          type="button"
          aria-label="Scroll services right"
          onClick={() => scrollServices("right")}
          className={`
            absolute
            -right-4
            top-1/2
            z-10
            hidden
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            p-2
            shadow-md
            cursor-pointer
            md:flex
            ${theme === "light"
      ? "bg-white text-black hover:bg-gray-100"
      : "bg-[#1e1e1e] text-white hover:bg-[#2a2a2a]"
  }
          `}
        >
          <ChevronRight size={20} />
        </button>
      )}
    </section>
  );
}