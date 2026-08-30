import { useStore } from "@/store/Store";
import { Skeleton } from "@/components/ui/skeleton";

export default function FaqSkeleton(){
    const theme = useStore((state) => state.theme);
    const skeletonColor = theme === "light" ? "bg-gray-200" : "bg-gray-700";
    return(
    <section className={`w-full min-h-auto p-4
        ${theme === "light" ? "bg-[#fafafa] text-black" : "bg-[#1b1b1b] text-white"}`}>
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-2 px-4 text-center">
        <Skeleton className={`h-[18px] w-12 ${skeletonColor}`} />
        <Skeleton className={`h-[36px] w-72 max-w-full md:h-[40px] md:w-96 ${skeletonColor}`} />
    </div>
    <div className="w-full mx-auto p-4 max-w-3xl rounded-xl my-3">
        {Array.from({length: 7}).map((_, index) => {
            return(
                <div key={index} 
                     className="flex min-h-[56px] items-center justify-between border-b">
                    <Skeleton className={`w-3/4 h-[24px] ${skeletonColor}`} />
                    <Skeleton className={`h-5 w-5 ${skeletonColor}`} />
                </div>
            )
        })}
    </div>
    </section>
    )
}