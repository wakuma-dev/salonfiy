import { useStore } from "@/store/Store";
import { Moon, Sun } from "lucide-react";
export default function ThemeToggle(){
    const toggleTheme = useStore((state) => state.toggleTheme);
    const theme = useStore((state) => state.theme);
    return(
    <article className="flex justify-between">
        <span>Dark Mode</span>
        <button onClick={toggleTheme}>
        {theme === "light" ? <Moon size={18}/> : <Sun size={18}/>}
        </button>
    </article>
    )
}