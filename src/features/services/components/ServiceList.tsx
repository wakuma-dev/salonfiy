import { useMemo } from "react";
import { useStore } from "@/store/Store";
import services from "../data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesList() {
  const selectedCategory = useStore(
    (state) => state.selectedCategory
  );

  const categoryServices = useMemo(
    () =>
      services.filter(
        (service) => service.category === selectedCategory
      ),
    [selectedCategory]
  );

  return (
    <div
      className="
        grid
        grid-cols-5
        gap-4

        max-lg:grid-cols-4
        max-md:grid-cols-3

        max-sm:flex
        max-sm:gap-4
        max-sm:overflow-x-auto
        max-sm:pb-3
        max-sm:snap-x
        max-sm:snap-mandatory
        scrollbar-hide
      "
    >
      {categoryServices.map((service) => (
        <div
          key={service.id}
          className="
            max-sm:w-[75%]
            max-sm:min-w-[75%]
            max-sm:snap-start
          "
        >
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
}