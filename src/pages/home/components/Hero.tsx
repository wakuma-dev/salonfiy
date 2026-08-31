import { useStore } from "@/store/Store";
import { Sparkles } from "lucide-react";
export default function Hero(){
  const theme = useStore((state) => state.theme);
  return(
    <section className={`w-full h-auto py-2 md:py-4 
    ${theme === "dark" ? "bg-[#111111] text-white" :
     "bg-[#ffffff] text-black" }`}>
    <div className="flex flex-col items-center justify-center text-center gap-3 p-4">
      <div className={`inline-flex items-center border gap-2 py-2 px-4 text-[14px] leading-[18px] font-bold
       text-[#e06e49] rounded-full 
        ${theme === "light" ? "border-[#111111]" : "border-white"}`}>
        <Sparkles size={16} />
          YOUR BEAUTY, YOUR MOMENT
      </div>
     <h1 className={`text-[36px] leading-[38px] tracking-tight md:text-[60px] md:leading-[60px]
      font-bold ${theme === "light" ? "text-[#111111]" : "text-white"}`}>Feel Beauty Book Effortlessly.</h1>
     <p className={`max-w-4xl text-[14px] leading-[19px] md:text-[16px] md:leading-[24px] tracking-wide
      ${theme === "light" ? "text-[#949494]" : "text-[#737373]"}`}>Discover exceptional salons and beauty professionals near you.
            Explore services, choose your favorite, and book your next
            moment of self-care—all in one place.</p>
            <div className="flex flex-wrap items-center gap-3">
              <button className={`text-[16px] leading-[24px] font-medium border px-4 py-1.5 rounded-full cursor-pointer
                 ${theme === "light" ? "border-[#e06e49]" : "border-[#D3481B]"}`}>Explore Salons</button>
              <button
               className="text-[16px] leading-[24px] font-medium border border-transparent bg-gradient-to-r from-[#E27753] to-[#EBA284] 
                 px-4 py-1.5 cursor-pointer rounded-full"
               onClick={() => {
                document.getElementById("how-it-works")?.scrollIntoView({
                  behavior: "smooth"
                })
               }}>How it Works</button>
            </div>
    </div>
    </section>
  )
}