import { useStore } from "@/store/Store";
import CategoriesSkeleton from "./CategoriesSkeleton";
import RowSkeleton from "./RowSkeleton";

export default function SectionSkeleton(){
    const theme = useStore((state) => state.theme);
    return(
    <section
     className={`w-full 
        ${theme === "light" ? "bg-[#fafafa] text-black" : "bg-[#1b1b1b] text-white"}`}>
            <CategoriesSkeleton />
            <div className="mx-auto max-w-9/10">
            <RowSkeleton />
            <RowSkeleton />
            <RowSkeleton />
            </div>
        </section>
    )
}