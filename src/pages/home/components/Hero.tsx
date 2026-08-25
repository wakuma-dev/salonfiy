import { useStore } from "@/store/Store";
import { Sparkles } from "lucide-react";
export default function Hero(){
  const theme = useStore((state) => state.theme);
  return(
    <section className={`w-full h-auto ${theme === "light" ? "bg-[#f7f7f7] text-black" : "bg-[#121212] text-white" }`}>
    <div className="flex flex-col items-center justify-center text-center gap-2.5 p-4">
      <div className={`inline-flex items-center border gap-2 py-2 px-4 text-[14px] leading-[18px] font-bold text-[#6d28d9] rounded-full 
        ${theme === "light" ? "border-black" : "border-white"}`}>
        <Sparkles size={16} />
          YOUR BEAUTY, YOUR MOMENT
      </div>
     <h1 className="text-[36px] leading-[38px] md:text-[60px] md:leading-[60px] font-bold">Feel Beauty Book Effortlessly.</h1>
     <p className="max-w-2xl text-[16px] leading-[] text-[#64748b]">Discover exceptional salons and beauty professionals near you.
            Explore services, choose your favorite, and book your next
            moment of self-care—all in one place.</p>
            <div className="flex flex-wrap items-center gap-3">
              <button className={`text-[16px] leading-[24px] font-medium border px-4 py-1.5 rounded-full cursor-pointer
                 ${theme === "light" ? "border-black" : "border-white"}`}>Explore Salons</button>
              <button
               className="text-[16px] leading-[24px] font-medium bg-[#722DDF] px-4 py-1.5 cursor-pointer rounded-full"
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