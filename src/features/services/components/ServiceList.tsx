import ServiceCard from "./ServiceCard";
import type { Service } from "@/store/service.types";

interface ServiceListProps {
  services: Service[];
}

export default function ServiceList({
  services,
}: ServiceListProps) {
  return (
    <div className="flex gap-3 lg:gap-4">
      {services.map((service) => (
        <div
          key={service.id}
          className="
            w-[42vw]
            shrink-0
            sm:w-[35vw]
            md:w-[30%]
            lg:w-[calc((100%-4rem)/5)]
          "
        >
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
}