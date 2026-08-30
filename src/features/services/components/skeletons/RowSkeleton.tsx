import { useStore } from "@/store/Store"
import CardSkeleton from "./CardSkeleton"
import { Skeleton } from "@/components/ui/skeleton";
export default function RowSkeleton(){
    const theme = useStore((state) => state.theme);
    const skeletonColor = theme === "light" ? "bg-gray-200" : "bg-gray-700";
    return(
    <section className="relative w-full">
        <div className="my-2 flex w-full items-center justify-between"> 
        <div className="flex flex-col items-start gap-1">
        <Skeleton className={`h-[24px] w-48 md:h-[32px] md:w-64 ${skeletonColor}`} />
        <Skeleton className={`h-[19px] w-52 md:h-[24px] md:w-80 ${skeletonColor}`} /> 
        </div> 
         <Skeleton className={`h-8 w-8 rounded-full md:h-9 md:w-9 ${skeletonColor}`} /> 
         </div> 
         <div className="w-full overflow-hidden"> 
            <div className="flex gap-2 lg:gap-4"> 
                {Array.from({ length: 5 }).map((_, index) => ( 
                    <div key={index} 
                    className=" w-[42vw] shrink-0 sm:w-[35vw] md:w-[30%] lg:w-[calc((100%-4rem)/5)] "> 
                    <CardSkeleton /> </div> ))} 
                </div> 
                </div> 
         </section>
    )
}