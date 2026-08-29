import { useStore } from "@/store/Store"
import { Search, CalendarDays, Sparkles, type LucideIcon } from "lucide-react";
interface ItemProps {
    icon: LucideIcon,
    title: string;
    desc: string;
    iconColor: string;
    iconBg: string;
}
const items: ItemProps[] = [
  {
    icon: Search,
    title: "Choose a Service",
    desc: "Explore our range of beauty services and choose the treatment that best suits your needs.",
    iconColor: "text-violet-600",
    iconBg: "bg-violet-100"
  },
  {
    icon: CalendarDays,
    title: "Book Your Appointment",
    desc: "Select your preferred date and time, then book your appointment quickly and easily.",
    iconColor: "text-pink-600",
    iconBg: "bg-pink-100"
  },
  {
    icon: Sparkles,
    title: "Enjoy Your Experience",
    desc: "Visit our salon, relax, and enjoy a personalized beauty experience with our professionals.",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100"
  },
];
export default function HowItWorks(){
  const theme = useStore((state) => state.theme);
  return(
      <section id="how-it-works" className={`w-full  h-auto
       ${theme === "light" ? "bg-[#ffffff] text-black" : "bg-[#111111] text-white"}`}>
        <div className="max-w-9/10 mx-auto flex flex-col items-center justify-center text-center gap-2 py-4">
            <h3 className={`text-[12px] font-bold leading-[18px] tracking-wider 
              ${theme === "light" ? "text-[#5f1a06]" : "text-[#e06e49]"}`}>How it works</h3>
            <span className={`text-[30px] font-semibold leading-[36px] tracking-tight
             md:text-[36px] md:leading-[40px]
             ${theme === "light" ? "text-[#111111]" : "text-[#ffffff]"}`}>How It Works</span>
            <p className={`text-[18px] leading-[28px] font-normal
              tracking-wide ${theme === "light" ? "text-[#949494]" : "text-[#737373]"}`}>Book your next beauty appointment in 3 simple steps</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-5 mt-5 w-full">
                {items.map((item) => {
                    const Icon = item.icon;
                    return(
                        <div key={item.title} className={`flex flex-col items-start text-left gap-2 p-6
                             rounded-xl w-full border outline-none border-[#D3481B] ${theme === "light" ?
                              "bg-[#FAFAFA] " : "bg-[#1B1B1B]"}`}>
                                <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${item.iconBg}`}>
                                 <Icon className={`h-6 w-6 ${item.iconColor}`}/>
                                </div>
                         
                         <h5 className="text-[18px] leading-[28px] font-bold">{item.title}</h5>
                         <p className="text-[14px] leading-[18px] font-normal]">{item.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
      </section>
    )
}