import { useMemo } from "react";
import { useStore } from "@/store/Store";

const Categories = [
   "Hair",
  "Makeup",
  "Nails",
  "Facial & Skincare",
  "Massage & Spa",
  "Foot Care",
  "Hair Removal",
] as const;
export default function ServiceCategories(){
    const theme = useStore((state) => state.theme);
    const selectedCategory = useStore((state) => state.selectedCategory);
    const setSelectedCategory = useStore((state) => state.setSelectedCategory);
    const categoriesItems = useMemo(() => Categories, []);
    return(
    <div className={`w-full scrollbar-hide overflow-x-auto 
     ${theme === "light" ? "bg-[#0d0d0d] text-white" : "bg-[#ffffff] text-black"}`}>
        <div className="w-max min-w-full flex items-center md:justify-center gap-1">
        {categoriesItems.map((category) => {
            return(
                <button 
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`outline-none shrink-0 px-2.5 py-1.5 text-[14px] leading-[19px] cursor-pointer rounded-full 
                    border 
                    ${theme === "light" ? "border-gray-300" : "border-gray-700"}
                    ${selectedCategory === category ? "bg-[#0F172A] text-white" : ""}`}>
                        {category}
                    </button>
            )
        })}
        </div>
    </div>
    )
}