import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useStore } from "@/store/Store";
import services from "@/features/services/data/services";
import { Heart } from "lucide-react";
export default function ServiceDetails(){
    const theme = useStore((state) => state.theme);
    const { serviceId } = useParams();
    const service = services.find((service) => service.id === serviceId);
    if(!service){
        return(
        <main className={`w-full flex flex-col gap-2 items-center justify-start pt-16 min-h-screen h-auto ${theme === "light" ?
             "bg-[#f7f7f7] text-black" : "bg-[#121212] text-white"}`}>
        <h1 className="text-[24px] leading-[32px] font-bold">Service not found</h1>
        <p className="text-[16px] leading-[24px] font-normal text-[#64748b]">Service not found or an error occurred</p>
        <Link to="/services" 
              className="bg-[#6D28D9] p-2 rounded-xl outline-none font-medium text-[16px] leading-[24px]">
                Browse Service
              </Link>
        </main>
        );
    }
    return(
    <main className={`w-full min-h-screen h-auto lg:border-b
        ${theme === "light" ? "bg-[#f7f7f7] text-black border-gray-300" : "bg-[#121212] text-white border-gray-700"}`}>
    <Helmet>
        <title>{`Salonify | ${service.name}/${service.id}`}</title>
        <meta 
        name="description" 
        content={`${service.info}`}/>
    </Helmet>
    <div className="max-w-9/10  mx-auto grid grid-cols-1 md:grid-cols-[60%_40%] h-auto">
    <div className={`py-4 flex flex-col items-start gap-2.5 lg:pr-4 lg:border-r 
        ${theme === "light" ? "border-gray-300" : "border-gray-700"}`}>
        <div className="w-full flex items-center justify-between">
        <h1 className="text-[30px] leading-[34px] md:text-[36px] md:leading-[40px] font-bold">{service.name}</h1>
        <button type="button"
                aria-label="Add to wishlist">
        <Heart />
        </button>
        </div>
        <img src={service.image} 
             alt={service.name}
             loading="eager"
             decoding="async"
             className="w-full object-cover object-center rounded-3xl aspect-[4/3] md:aspect-[16/10]"
        />
        <div className="flex flex-col gap-2">
         <div className="flex flex-col gap-1">
        <span className="text-[20px] leading-[28px] font-bold">About</span>
        <p className="text-[14px] md:text-[15px] leading-[19px] md:leading-[20px] font-normal text-[#64748b]">{service.info}</p>
        </div>
        <div className="flex flex-col gap-1">
        <span className="text-[20px] leading-[28px] font-bold">Price</span>
        <p className="text-[15px] leading-[20px] font-normal text-[#64748b]">{service.price} ETB</p>
        </div>
        </div>
    </div>
    </div>
    </main>
    )
}