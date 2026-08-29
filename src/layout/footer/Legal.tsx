import { NavLink } from "react-router-dom";
import { useStore } from "@/store/Store";
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
    const theme = useStore((state) => state.theme)
    return(
     <div className="flex flex-col items-start gap-3 pb-3" >
        <span  className={`text-[16px] leading-[24px] font-semibold
             ${theme === "light" ? "text-black" : "text-white"}`}>Legal</span>
        <ul className="flex flex-col gap-2">
            {legals.map((legal) => {
                return(
                    <NavLink to={legal.path} key={legal.path}
                    className={`text-[14px] leading-[20px]
                         font-normal transition-colors duration-150
                         ${theme === "light" ?  "text-[#3e3529] hover:text-black" : "text-[#aea691] hover:text-white"}`}>
                        {legal.label}
                    </NavLink>
                )
            })}
        </ul>
     </div>
    )
}