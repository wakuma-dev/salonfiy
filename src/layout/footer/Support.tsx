import { NavLink } from "react-router-dom"

interface SupportProps {
    path: string;
    label: string;
}
const supports: SupportProps[] = [{
    path: "/help",
    label: "Help Center"
}, 
    {
    path: "/faq",
    label: "Faq"
    },
    {
    path: "/blog",
    label: "Blog"
    },
    {
    path: "/alternative",
    label: "Alternative"
    }
]
export default function Support(){
    return(
        <div className="flex flex-col items-start gap-3 pb-3">
            <span className="text-[16px] leading-[24px] font-semibold">Support</span>
            <ul className="flex flex-col gap-2">
                {supports.map((support) => {
                    return(
                        <NavLink to={support.path} key={support.path}
                            className="text-[14px] leading-[20px]  hover:text-[#7c3aed] font-normal transition-colors duration-150">
                            {support.label}
                        </NavLink>
                    )
                })}
            </ul>
        </div>
    )
}