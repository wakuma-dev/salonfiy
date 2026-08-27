import ServiceCategories from "../components/ServiceCategories";
import ServicesList from "../components/ServiceList";
import { useStore } from "@/store/Store";

export default function Services() {
    const theme = useStore((state) => state.theme);
  return (
    <section className={`w-full h-auto py-4 ${theme === "light" ? "bg-[#f7f7f7] text-black" : "bg-[#121212] text-white"}`}>
      <div className="mx-auto max-w-9/10">
      <ServiceCategories />
      <ServicesList />
      </div>
    </section>
  );
}