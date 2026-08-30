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
          title="New Arrivals"
          subTitle="Explore the latest services added to our collection"
          tag="new"
          category={selectedCategory}
        />
      </div>
    </section>
  );
}