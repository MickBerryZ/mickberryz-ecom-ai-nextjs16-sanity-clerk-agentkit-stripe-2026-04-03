import { sanityFetch } from "@/sanity/lib/live";

export default async function home() {
  const categoties = await sanityFetch({
    query: `*[_type == "category"]`,
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
