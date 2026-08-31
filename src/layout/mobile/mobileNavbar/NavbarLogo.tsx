import { NavLink } from "react-router-dom";
import { useStore } from "@/store/Store";
export default function NavbarLogo(){
    const theme = useStore((state) => state.theme);
    return(
    <div className={`w-full md:hidden flex items-center justify-center pt-3 ${theme === "light" ? 
    "bg-[#ffffff] text-[#222222]" : "bg-[#000000] text-white"}`}>
        <NavLink to="/"
                className="text-[30px] leading-[36px] font-bold tracking-tight">
         Salonfiy
        </NavLink>
    </div>
   
    )
}