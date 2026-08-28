import ServiceCategories from "../components/ServiceCategories";
import ServiceRow from "../components/ServiceRow";
import { useStore } from "@/store/Store";

export default function Services() {
const theme = useStore((state) => state.theme);
const selectedCategory = useStore((state) => state.selectedCategory);

return (
<section
className={`w-full min-h-screen pb-10 ${
        theme === "light"
          ? "bg-[#f7f7f7] text-black"
          : "bg-[#121212] text-white"
      }`}
> <ServiceCategories />

  <div className="mx-auto max-w-9/10">
    <ServiceRow
      title="Recommended for You"
      tag="recommend"
      category={selectedCategory}
    />

    <ServiceRow
      title="Trending Now"
      tag="trending"
      category={selectedCategory}
    />

    <ServiceRow
      title="New Services"
      tag="new"
      category={selectedCategory}
    />
  </div>
</section>


);
}
