import { useEffect, useMemo, useRef, useState } from "react";
import ServiceList from "./ServiceList";
import services from "../data/services";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useStore } from "@/store/Store";
import { MoveRight } from "lucide-react";
interface ServiceProps {
  title: string;
  subTitle: string;
  tag: "recommend" | "new" | "trending";
  category: string;
}

export default function ServiceRow({
  title,
  subTitle,
  tag,
  category,
}: ServiceProps) {
  console.log("title", title);
  console.log("subTitle", subTitle)
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
    <div className="flex items-center justify-between w-full my-2">
    <div className="flex flex-col items-start gap-0.5">
    <h3 className="text-[20px] leading-[24px] md:text-[27px] leading-[32px] font-bold">{title}</h3>
    <p className="max-w-[200px] md:max-w-full text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] font-normal text-[#64748b]">
   {subTitle}
</p>
    </div>
    <div className={`flex items-center justify-center 
                    w-8 h-8 md:w-9 md:h-9 cursor-pointer bg-black rounded-full
                    ${theme === "light" ? "bg-white" : "bg-[#2A2A2A]"}`}>
    <MoveRight className="w-4  h-4 md:w-5 md:h-5"/>
    </div>
       </div>
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