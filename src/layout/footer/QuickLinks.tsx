import { NavLink } from "react-router-dom";

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
    return(
     <div className="flex flex-col items-start gap-3 pb-3">
        <span className="text-[16px] leading-[24px] font-semibold">Quick Links</span>
        <ul className="flex flex-col gap-2">
        {quickLinks.map((link) => {
            return(
                 <NavLink to={link.path}
                          key={link.path}
                          className="text-[14px] leading-[20px] text-[#64748b] hover:text-[#7c3aed] font-normal transition-colors duration-150">
                            {link.label}
                          </NavLink>
            )
        })}
        </ul>
     </div>
    )
}