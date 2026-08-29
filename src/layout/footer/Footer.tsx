import { useStore } from "@/store/Store"
import FooterBottom from "./FooterBottom";
import FooterDescription from "./FooterDescription";
import QuickLink from "./QuickLinks";
import Support from "./Support";
import Legal from "./Legal";
export default function Footer(){
    const theme = useStore((state) => state.theme);
    return(
         <footer className={`w-full h-auto ${theme === "light" ? "bg-[#ffffff] text-black" : 
         "text-[#aea691] bg-[#1F1F1F]"}`}>
          <div className="max-w-9/10 mx-auto py-4 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:pb-3 lg:gap-8">
            <FooterDescription />
            <QuickLink />
            <Support />
            <Legal />
          </div>
          <FooterBottom />
            
          </div>
         </footer>
    )
}