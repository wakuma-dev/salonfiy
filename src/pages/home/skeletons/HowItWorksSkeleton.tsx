import { useStore } from "@/store/Store";
import { Skeleton } from "@/components/ui/skeleton";

export default function HowItWorksSkeleton(){
const theme = useStore((state) => state.theme)
const skeletonColor = theme === "light" ? "bg-gray-200" :  "bg-gray-700";
    return(
    <section className={`w-full h-auto 
        ${theme === "light" ? "bg-[#ffffff] text-black" : "text-white bg-[#1111111]"}`}>
        <div className="max-w-9/10 mx-auto flex flex-col items-center justify-center text-center gap-2 py-4">
        <Skeleton className={`h-[18px] w-24 ${skeletonColor}`} />
        <Skeleton className={`h-[40px] w-52 ${skeletonColor}`} />
        <Skeleton className={`h-[28px] w-full max-w-md ${skeletonColor}`} />
        <div className="mt-5 grid grid-cols-1 w-full gap-3 md:grid-cols-3 lg:gap-5">
            {[1,2,3].map((item) => {
                return(
                    <div key={item} 
                         className={`w-full flex flex-col items-start gap-3 rounded-xl border
                            border-[#D3481B] P-6 ${theme === "light" ? "bg-[#fafafa]" : "bg-[#1b1b1b]"}`}>
                                <Skeleton className={`h-12 w-12 rounded-xl ${skeletonColor}`} />
                                <Skeleton className={`h-[28px] w-3/4 ${skeletonColor}`} />
                                <div className="w-full flex flex-col gap-2">
                                    <Skeleton className={`h-[18px] w-full ${skeletonColor}`} />
                                    <Skeleton className={`h-[18px] w-5/6 ${skeletonColor}`} />
                                    <Skeleton className={`h-[18px] w-2/3 ${skeletonColor}`} />
                                </div>
                    </div>
                )
            })}
        </div>
        </div>
        </section>
    )
}