import { sanityFetch } from "@/sanity/lib/live";
import { ALL_CATEGORIES_QUERY } from "@/sanity/queries/categoties";

export default async function home() {
  // Fetch categories for gilter sidebar
  const { data: categoties } = await sanityFetch({
    query: ALL_CATEGORIES_QUERY,
  });

  console.log("Categories:", categoties);

  return (
    <div className="">
      {/* Featrured Products Carousel */}

      {/* Page Banner */}

      {/* Category Tiles */}

      {/* Products Section */}

      <h1>Hello World</h1>
    </div>
  );
}
