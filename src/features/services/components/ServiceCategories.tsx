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
     ${theme === "light" ? "bg-[#f7f7f7]" : "bg-[#121212] "}`}>
        <div className="max-w-9/10 mx-auto flex items-center justify-center gap-4 py-2">
        {categoriesItems.map((category) => {
            return(
                <button 
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`outline-none shrink-0 px-3 py-1.5 cursor-pointer flex items-center justify-center rounded-full border 
                    ${theme === "light" ? "border-gray-300" : "border-gray-700"}
                    ${selectedCategory === category ? "bg-[#0F172A] text-white" : "bg-[#E8EDF3]"}`}>
                        {category}
                    </button>
            )
        })}
        </div>
    </div>
    )
}