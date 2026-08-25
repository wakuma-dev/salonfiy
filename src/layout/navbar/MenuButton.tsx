import { Menu as MenuIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { useStore } from "@/store/Store"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger, PopoverHeader, PopoverTitle } from "@/components/ui/popover"
import ThemeToggle from "./ThemeToggle"
export default function MenuButton(){
    const theme = useStore((state) => state.theme)
    return(
        <Popover aria-label="Open menu">
            <PopoverTrigger render={<Button variant="outline" 
            className={`border transition-colors
            ${theme === "light" ? "border-[#DDDDDD] bg-white hover:bg-[#f7f7f7]" : 
            "border-[#444444] bg-[#1e1e1e] text-[#f5f5f5] hover:bg-[#292929]"}`}><MenuIcon /></Button>} />
            <PopoverContent align="end" className={`${theme === "light" ? "bg-[#ffffff] text-black" : "bg-[#1e1e1e] text-white"}`} >
                <PopoverHeader>
                    <PopoverTitle>For Customers</PopoverTitle>
                </PopoverHeader>
                <ThemeToggle />
                <Link to="/login"
                 className={`p-1.5 rounded-md text-[14px] leading-[18px] ${theme === "light" ? "bg-[#222222] text-white hover:bg-[#333333]" : "text-black bg-[#f5f5f5] hover:bg-[#e0e0e0]"}`}>
                 Sign in
                </Link>
                <Link to="/signup"
                className={`p-1.5 border rounded-md text-[14px] leading-[18px] ${theme === "light" ?
                 "border-[#dddddd] bg-white text-[#222222]" : "border-[#444444] bg-[#1e1e1e] text-[#f5f5f5] hover:bg-[#292929]"}`}>
                 Sign up
                </Link>
            </PopoverContent>
        </Popover>
    
    )
}