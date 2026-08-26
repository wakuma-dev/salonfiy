import { useStore } from "@/store/Store"
import Menu from "./Menu";
export default function Tabbar(){
    const theme = useStore((state) => state.theme);
    return(
        <div className={`md:hidden fixed bottom-0 left-0 w-full ${theme === "light" ? "bg-white text-black" : "text-white bg-black"}`}>
                <Menu />
            </div>
    )
}