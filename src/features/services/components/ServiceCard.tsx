import type { Service } from "@/store/service.types";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  return (
    <article className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="truncate text-base font-semibold">
          {service.name}
        </h3>

        <p className="mt-1 line-clamp-2 text-sm text-gray-500">
          {service.info}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="font-semibold">
            {service.price} ETB
          </span>

          <span className="text-sm text-gray-500">
            {service.duration} min
          </span>
        </div>
      </div>
    </article>
  );
}