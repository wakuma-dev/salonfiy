import { useStore } from "@/store/Store"
import banner from "../../../assets/pmv-chamara-dMjkQJs58uo-unsplash.jpg";
export default function Banner(){
    const theme = useStore((state) => state.theme);
    return(
    <div className={`w-full py-6 ${theme === "light" ? "bg-[#ffffff] text-black" : 
    "bg-[#111111] text-white"}`}>
        <div className="max-w-9/10 mx-auto flex flex-col items-start 
        gap-2.5 md:gap-4 rounded-3xl p-4 md:p-10"
        style={{backgroundImage: `linear-gradient(to right, rgba(92, 42, 167, 0.9), rgba(126, 96, 144, 0.75)), url(${banner})`,
                backgroundPosition: 'center'

        }}>
            <h2 className={`md:max-w-md font-bold tracking-tight text-[27px] leading-[32px] md:text-[44px] md:leading-[46px]
                ${theme === "light" ? "text-[#7c7464]" : "text-[#aea691]"}`}>Your Next Beauty Appointment Awaits</h2>
            <p className="text-[16px] tracking-wide italic md:text-[18px] leading-[24px] md:leading-[28px] font-normal">Discover and book beauty services you'll love.</p>
            <button className={`py-2 px-5 text-[15px] leading-[23px] rounded-full cursor-pointer ${theme === "light" ? "bg-white" : "bg-black text-white"}`}>
                Explore Services
            </button>
        </div>
    </div>
    )
}