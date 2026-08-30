import { useStore } from "@/store/Store"
import { Skeleton } from "@/components/ui/skeleton"
import banner from "../../../assets/pmv-chamara-dMjkQJs58uo-unsplash.jpg";
export default function BannerSkeleton(){
    const theme = useStore((state) => state.theme);
    const skeletonColor = theme === "light" ? "bg-white/40" : "bg-white/20";
    return(
    <div className={`w-full py-6 
        ${theme === "light" ? "bg-[#ffffff] text-black" :
         "bg-[#111111] text-white"}`}>
      <div className="max-w-9/10 mx-auto flex flex-col items-start 
        gap-2.5 md:gap-4 rounded-3xl p-4 md:p-10"
        style={{backgroundImage: `linear-gradient(to right, rgba(92, 42, 167, 0.9), rgba(126, 96, 144, 0.75)), url(${banner})`,
                backgroundPosition: 'center'

        }}>
       <Skeleton className={`h-[64px] w-full max-w-md md:h-[92px] ${skeletonColor}`} />
       <Skeleton className={`h-[24px] w-3/4 md:h-[28px] ${skeletonColor}`} />
       <Skeleton className={`h-[39px] w-[150px] rounded-full ${skeletonColor}`} />
        </div>
    </div>
    )
}