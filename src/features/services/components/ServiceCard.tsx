import type { Service } from "@/store/service.types";
import { useStore } from "@/store/Store";

interface ServiceCardProps {
  service: Service;
}
export default function ServiceCard({service}: ServiceCardProps){
  const theme = useStore((state) => state.theme);
  return(
  <article 
    className={`w-full overflow-hidden rounded-4xl  
       ${theme === "light" ? "bg-white text-black" : "bg-[#1e1e1e] text-white"}`}>
   <img src={service.image}
        alt={service.name}
        loading="lazy"
        decoding="async"  
        className="aspect-square md:aspect-[4/3] w-full object-cover"
        />
        <div className="flex flex-col items-start gap-1 py-2 px-4 w-full">
          <span className="text-[14px] leading-[19px] hover:text-[#6d28d9] font-semibold">{service.name}</span>
          <p className="text-[13px] leading-[19px] font-normal text-[#64748b]">{service.price} ETB</p>
        </div>
  </article>
  )
}