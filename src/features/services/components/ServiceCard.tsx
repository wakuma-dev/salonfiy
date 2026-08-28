import type { Service } from "@/store/service.types";
import { useStore } from "@/store/Store";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const theme = useStore((state) => state.theme);

  return (
    <article
      className={`w-full overflow-hidden rounded-4xl ${
        theme === "light"
          ? "bg-white text-black"
          : "bg-[#1e1e1e] text-white"
      }`}
    >
      <Link
        to={`/service/${service.id}`}
        className="block w-full"
      >
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          decoding="async"
          className="aspect-square w-full object-cover md:aspect-[4/3]"
        />

        <div className="flex w-full flex-col items-start gap-1 px-4 py-2">
          <span className="text-[14px] font-semibold leading-[19px] hover:text-[#6d28d9]">
            {service.name}
          </span>

          <p className="text-[13px] font-normal leading-[19px] text-[#64748b]">
            {service.price} ETB
          </p>
        </div>
      </Link>
    </article>
  );
}