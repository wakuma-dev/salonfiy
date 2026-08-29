import { Link } from "react-router-dom"
import { useStore } from "@/store/Store"
export default function Logo(){
    const theme = useStore((state) => state.theme);
    return(
    <Link to="/" className={`text-[30px] leading-[36px] tracking-tighter font-bold ${theme === "light" ? "text-[#222222]" : "text-[#f5f5f5]"}`}>
        Salonify
    </Link>
    )
}