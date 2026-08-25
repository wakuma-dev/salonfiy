import { tabBars } from "./types";
import { NavLink } from "react-router-dom";
export default function Menu(){
    return(
     <div className="flex items-center py-4 justify-around w-full">
        {tabBars.map((tabBar) => {
            const Icon = tabBar.icon;
            return(
                <NavLink key={tabBar.path}
                         to={tabBar.path}
                         className={({isActive}) => `transition-colors duration-150 ${isActive ? "text-[#6d28d9]" : ""}`}>
                <Icon />
                </NavLink>
            )
        })}
     </div>
    )
}