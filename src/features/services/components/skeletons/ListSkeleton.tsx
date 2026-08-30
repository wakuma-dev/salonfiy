import { useStore } from "@/store/Store";
import CardSkeleton from "./CardSkeleton";
export default function ListSkeleton(){
    const theme = useStore((state) => state.theme);
    return(
    <div 
     className={`flex gap-2 lg:gap-4 ${theme === "light" ? "bg-[#ffffff]" : "bg-[#111111]"}`}>
        {Array.from({length: 5}).map((_, index) => {
            return(
                <div key={index}
                     className="w-[42vw] shrink-0 sm:w-[35vw] md:w-[30%] lg:w-[calc((100%-4rem)/5)]">
                    <CardSkeleton />
                </div>
            )
        })}
     </div>
    )
}