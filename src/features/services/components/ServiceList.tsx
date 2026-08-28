import ServiceCard from "./ServiceCard";
import type { Service } from "@/store/service.types";

interface ServiceListProps {
  services: Service[];
}

export default function ServiceList({
  services,
}: ServiceListProps) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">
      {services.map((service) => (
        <div key={service.id} className="min-w-0">
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
}