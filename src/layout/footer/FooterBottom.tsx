import { useStore } from "@/store/Store";
export default function FooterBottom() {
  const theme = useStore((state) => state.theme);
  const isLight = theme === "light";
return (
    <section
      className={`w-full ${
        isLight ? "bg-[#f7f7f7] text-black" : "bg-[#121212] text-white"
      }`}
    >
      <div className="">
        <div
          className={`w-full border-t py-3 md:py-6 ${
            isLight ? "border-gray-300" : "border-gray-700"
          }`}
        >
          <div className="flex flex-col items-start md:items-center justify-between gap-2 md:flex-row">
            <p className="text-[14px] leading-[20px] text-[#64748b] font-normal">
              © {new Date().getFullYear()} Salonify. All rights reserved.
            </p>

            <p className="text-[14px] leading-[20px] text-[#64748b]">
              Built by{" "}
              <span className="font-medium text-[#6d28d9]">
                Wakuma Hailu
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}