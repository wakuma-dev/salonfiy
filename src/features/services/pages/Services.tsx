import { Suspense, lazy } from "react";
import SectionSkeleton from "../components/skeletons/SectionSkeleton";
const ServiceSection = lazy(() => import("../components/ServiceSection"))
import { useStore } from "@/store/Store";

export default function Services() {
const theme = useStore((state) => state.theme);


return (
<section
className={`w-full min-h-screen py-6 ${
        theme === "light"
          ? "bg-[#fafafa] text-black"
          : "bg-[#1B1B1B] text-white"
      }`}
> 
<Suspense fallback={<SectionSkeleton />}>
<ServiceSection />
</Suspense>
</section>


);
}
