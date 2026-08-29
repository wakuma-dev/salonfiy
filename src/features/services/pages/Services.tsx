import ServiceCategories from "../components/ServiceCategories";
import ServiceRow from "../components/ServiceRow";
import { useStore } from "@/store/Store";

export default function Services() {
const theme = useStore((state) => state.theme);
const selectedCategory = useStore((state) => state.selectedCategory);

return (
<section
className={`w-full min-h-screen py-6 ${
        theme === "light"
          ? "bg-[#fafafa] text-black"
          : "bg-[#1B1B1B] text-white"
      }`}
> <ServiceCategories />

  <div className="mx-auto max-w-9/10">
    <ServiceRow
      title="Recommended for You"
      subTitle="Handpicked services based on what you love"
      tag="recommend"
      category={selectedCategory}
    />

    <ServiceRow
      title="Trending Now"
      subTitle="Discover the services everyone is loving right now"
      tag="trending"
      category={selectedCategory}
    />

    <ServiceRow
      title="New Services"
      subTitle="Explore the latest services added to our collection"
      tag="new"
      category={selectedCategory}
    />
  </div>
</section>


);
}
