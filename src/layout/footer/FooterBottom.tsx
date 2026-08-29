import { useStore } from "@/store/Store";
export default function FooterBottom() {
  const theme = useStore((state) => state.theme);
  const isLight = theme === "light";
return (
    <section
      className={`w-full pb-10 md:pb-0 ${
        isLight ? "bg-[#ffffff] text-black" : "bg-[#0D0D0D] text-white"
      }`}
    >
      <div className="mx-auto">
        <div
          className={`w-full border-t py-3 md:py-6 ${
            isLight ? "border-gray-300" : "border-gray-700"
          }`}
        >
          <div className="flex flex-col it items-center justify-between gap-2 md:flex-row">
            <p className="text-[14px] leading-[20px]  font-normal">
              © {new Date().getFullYear()} Salonify. All rights reserved.
            </p>

            <p className="text-[14px] leading-[20px] ">
              Built by{" "}
              <span className="font-medium text-[#00E062]">
                Wakuma Hailu
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}