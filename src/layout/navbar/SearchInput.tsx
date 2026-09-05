import { useState, useEffect, useDeferredValue } from "react";
import { useStore } from "@/store/Store";
import { Search } from "lucide-react";
export default function SearchInput(){
    const  searchQuery  = useStore((state) => state.searchQuery)
    const setSearchQuery  = useStore((state) => state.setSearchQuery);
    const executeSearch = useStore((state) => state.executeSearch)
     const [displayedValue, setDisplayedValue] = useState(searchQuery);
     const deferredQuery = useDeferredValue(displayedValue);
     const theme = useStore((state) => state.theme);
     useEffect(() => {
      setSearchQuery(deferredQuery);

      const timer = setTimeout(() => {
        executeSearch()
      }, 400);
      return () => clearTimeout(timer);
     }, [deferredQuery, setSearchQuery, executeSearch]);
    return(
     <div className="md:block min-w-[800px] relative">
     <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60" />
      <input 
        type="search"
        value={displayedValue}
        onChange={(e) => setDisplayedValue(e.target.value)}
        placeholder="Search your style"
        className={`w-full py-2 pl-10 rounded-full text-[15px] leading-[20px] placeholder:text-[15px] leading-[20px] outline-none border
         focus:ring-2 focus:ring-[#D3481B] 
          ${theme === "light" ? "bg-[#F5F5F5] text-black": "bg-[#2a2a2a] text-white"}`}
         />
     </div>
    )
}