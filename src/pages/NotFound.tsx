import { Link } from "react-router-dom";
import { useStore } from "@/store/Store";
export default function NotFound(){
    const theme = useStore((state) => state.theme);
    return(
     <div className={`flex flex-col items-center justify-center text-center gap-2 min-h-screen
         ${theme === "light" ? "bg-[#f5f5f5] text-[#111827]" : "bg-[#111827] text-[#f5f5f5]"}`}>
      <h1 className="text-[60px] leading-[68px] font-bold">404</h1>
      <p className="text-[24px] leading-[32px] font-semibold">Page Not Found</p>
      <span className="text-[16px] leading-[24px] font-normal">The page you are looking for does not exist or has been moved.</span>
      <Link to="/" className={`bg-[#7C3AED] text-[16px] leading-[24px] rounded-full px-4 py-2 ${theme === "light" ? "text-white" : "text-black"}`}>
      Back to Home
      </Link>
     </div>
    )
}