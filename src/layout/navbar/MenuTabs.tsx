import { useState, useRef, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useStore } from "@/store/Store";
export default function MenuTabs(){
  
    const theme = useStore((state) => state.theme);
    const [activeTab, setActiveTab] = useState("treatment");
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const handleTabClick = (tabValue: string) => {
        if(activeTab === tabValue){
        setIsOpen((prev) => !prev)
        }else{
            setActiveTab(tabValue);
            setIsOpen(true);
        }
    }
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if(containerRef.current && !containerRef.current.contains(event.target as Node)){
            setIsOpen(false);
        }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return()=> {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, []);
    return(
    <div ref={containerRef}
         className="inline-block relative">
    <Tabs value={isOpen ? activeTab : ""}
          className="hidden min-w-[800px] md:block">
    <TabsList className={`${theme === "light" ? "border-[#dddddd] bg-white" : "border-[#333333] bg-[#1e1e1e]"}`}>
        <TabsTrigger
          value="treatment"
          onClick={() => handleTabClick("treatment")}
          className={`flex items-center pl-4 ${theme === "light" ? 
          "text-[#6B6B6B] data-[state=active]:bg-[#F7F7F7] data-[state=active]:text-[#222222]" 
          : "text-[#A3A3A3] data-[state=active]:bg-[#2A2A2A] data-[state=active]:text-[#F5F5F5]"}`}>
           <span>All treatment</span>
          </TabsTrigger>
          <TabsTrigger
           value="location"
           onClick={() => handleTabClick("location")}
           className={`flex items-center pl-4 ${theme === "light" ?
             "text-[#6B6B6B] data-[state=active]:bg-[#F7F7F7] data-[state=active]:text-[#222222]" : 
             "text-[#A3A3A3] data-[state=active]:bg-[#2A2A2A] data-[state=active]:text-[#F5F5F5]"}`}>
            <span>Current location</span>
           </TabsTrigger>
           <TabsTrigger
           value="time"
           onClick={() => handleTabClick("time")}
           className={`flex items-center pl-4 ${theme === "light" ? "text-[#6B6B6B] data-[state=active]:bg-[#F7F7F7] data-[state=active]:text-[#222222]" : "text-[#A3A3A3] data-[state=active]:bg-[#2A2A2A] data-[state=active]:text-[#F5F5F5]"}`}>
            <span>Any time</span>
           </TabsTrigger>
    </TabsList>
    </Tabs>
    </div>
    )
}