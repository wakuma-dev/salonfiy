import { Skeleton } from "@/components/ui/skeleton";
import { useStore } from "@/store/Store";

export default function CardSkeleton(){
    const theme = useStore((state) => state.theme);
    const skeletonColor = theme === "light" ? "bg-gray-200" : "bg-gray-700";
    return(
    <article
     className={`w-full overflow-hidden rounded-4xl
         ${theme === "light" ? "bg-white text-black" : "bg-[#1e1e1e] text-white"}`}>
            <Skeleton
             className={`aspect-square w-full rounded-none md:aspect-[4/3] ${skeletonColor}`}
             />
             <div className="w-full flex flex-col items-start gap-1 px-4 py-2">
                <Skeleton className={`h-[19px] w-3/4 ${skeletonColor}`} />
                <Skeleton className={`w-1/3 h-[19px] ${skeletonColor}`} />
             </div>
         </article>
    );
}