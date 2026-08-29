import { NavLink } from "react-router-dom";
import { socialLinks } from "./types";
export default function FooterDescription(){
    return(
        <div className="flex flex-col items-start gap-3 pb-3">
            <NavLink to="/"
                  className="text-[16px] leading-[24px] md:text-[30px] md:leading-[36px] tracking-tighter font-semibold">
             Salonify
            </NavLink>
            <p className="text-[14px] leading-[20px] font-normal">
                Salonify makes it simple to discover, compare, and book trusted beauty and wellness services. From haircuts and styling to nails, makeup, brows, tattoos, and more, find the right salon and service for your needs—all in one place.
            </p>
            <div className="flex justify-around gap-4">
            {socialLinks.map((socialLink) => {
                const Icon = socialLink.icon;
                return(
                    <div key={socialLink.path}>
                         <NavLink to={socialLink.path}
                               target="_blank">
                            <Icon />
                         </NavLink>
                          
                    </div>
                )
            })}
            </div>
        </div>
    )
}