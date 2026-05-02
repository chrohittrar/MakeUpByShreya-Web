import { useState } from "react";

/* ---------------- AUTO IMPORT IMAGES ---------------- */
// Make sure images are inside: /src/assets/portfolio-photos/
// and preferably in .webp format

const images = Object.values(
  import.meta.glob("../assets/portfolio-photos/*.{png,jpg,jpeg,webp}", {
    eager: true,
  })
).map((mod: any) => mod.default);

/* ---------------- TYPES ---------------- */

type Category =
  | "All"
  | "Bridal"
  | "Engagement"
  | "Party"
  | "Reception"
  | "Editorial";

const categories: Category[] = [
  "All",
  "Bridal",
  "Engagement",
  "Party",
  "Reception",
  "Editorial",
];

/* ---------------- AUTO GENERATE ITEMS ---------------- */

const portfolioItems = images.map((img, index) => {
  const catList = categories.slice(1); // remove "All"

  return {
    image: img,
    title: `Look ${index + 1}`,
    category: catList[index % catList.length],
    aspect: "tall",
  };
});

/* ---------------- GRID LAYOUT ---------------- */

const aspectClasses: Record<string, string> = {
  tall: "md:row-span-2",
  square: "md:row-span-1",
  wide: "md:col-span-2 md:row-span-1",
};

/* ---------------- COMPONENT ---------------- */

const Portfolio = () => {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section id="portfolio" className="py-32 bg-[#FBF6F2]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-24">
          <p className="text-xs tracking-widest text-gray-400 mb-3">
            SELECTED WORK
          </p>

          <h2 className="text-6xl md:text-8xl font-accent tracking-extreme text-primaryColor mb-4">
            Portfolio
          </h2>

          <p className="text-gray-500">
            A curated selection of my makeup artistry
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-8 mb-20 text-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                relative pb-1 transition
                ${
                  activeCategory === cat
                    ? "text-primaryColor"
                    : "text-gray-400 hover:text-primaryColor"
                }
              `}
            >
              {cat}

              {activeCategory === cat && (
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-primaryColor" />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
            gap-6 md:auto-rows-[220px]
          "
        >
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden rounded-2xl
                aspect-[3/4] md:aspect-auto
                ${aspectClasses[item.aspect]}
              `}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="
                  w-full h-full object-cover
                  transition-transform duration-700
                  group-hover:scale-[1.05]
                "
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent text-white">
                <h3 className="text-sm font-medium tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;