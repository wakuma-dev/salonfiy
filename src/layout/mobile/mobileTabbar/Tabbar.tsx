import { useStore } from "@/store/Store"
import Menu from "./Menu";
export default function Tabbar(){
    const theme = useStore((state) => state.theme);
    return(
        <div className={`md:hidden block ${theme === "light" ? "bg-white text-black" : "text-white bg-black"}`}>
                <Menu />
            </div>
    )
}