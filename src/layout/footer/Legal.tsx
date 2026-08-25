import { NavLink } from "react-router-dom";
interface LegalProps {
    path: string;
    label: string;
}
const legals: LegalProps[] = [{
    path: "/terms",
    label: "Terms of Services"
},
   {
    path: "/policy",
    label: "Privacy Policy"
   },
   {
    path: "/partner",
    label: "Partner Terms"
   },
   {
    path: "/cookie",
    label: "Cookie Policy"
   }

]
export default function Legal(){
    return(
     <div className="flex flex-col items-start gap-3 pb-3" >
        <span  className="text-[16px] leading-[24px] font-semibold">Legal</span>
        <ul className="flex flex-col gap-2">
            {legals.map((legal) => {
                return(
                    <NavLink to={legal.path} key={legal.path}
                    className="text-[14px] leading-[20px] text-[#64748b] hover:text-[#7c3aed] font-normal transition-colors duration-150">
                        {legal.label}
                    </NavLink>
                )
            })}
        </ul>
     </div>
    )
}