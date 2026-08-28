import { useStore } from "@/store/Store";
import ServiceCategories from "./ServiceCategories";
import ServiceRow from "./ServiceRow";

export default function ServiceSection() {
  const selectedCategory = useStore(
    (state) => state.selectedCategory
  );

  return (
    <section className="w-full">
      <ServiceCategories />

      <div className="mx-auto max-w-7xl px-4 py-8">
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
          title="New Arrivals"
          tag="new"
          category={selectedCategory}
        />
      </div>
    </section>
  );
}