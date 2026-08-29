import { NavLink } from "react-router-dom";
import { useStore } from "@/store/Store";
interface QuickLinkProps {
    path: string;
    label: string;
}
const quickLinks: QuickLinkProps[] = [
    {
        path: "/",
        label: "Home"
    },
    {
        path: "/about",
        label: "About"
    },
    {
        path: "/contact",
        label: "Contact"
    }
  
]
export default function QuickLink(){
    const theme = useStore((state) => state.theme)
    return(
     <div className="flex flex-col items-start gap-3 pb-3">
        <span className={`text-[16px] leading-[24px] font-semibold
            ${theme === "light" ? "text-black" : "text-white"}`}>Quick Links</span>
        <ul className="flex flex-col gap-2">
        {quickLinks.map((link) => {
            return(
                 <NavLink to={link.path}
                          key={link.path}
                          className={`text-[14px] leading-[20px]
                             hover:text-[#7c3aed] font-normal
                              transition-colors duration-150
                              ${theme === "light" ? "text-[#3e3529] hover:text-black" : "text-[#aea691] hover:text-white"}`}>
                            {link.label}
                          </NavLink>
            )
        })}
        </ul>
     </div>
    )
}