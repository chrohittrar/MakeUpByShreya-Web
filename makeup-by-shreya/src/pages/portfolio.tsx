import { useState } from "react";

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

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    title: "Bridal Glow",
    category: "Bridal",
    aspect: "tall",
  },
  {
    image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6",
    title: "Engagement Elegance",
    category: "Engagement",
    aspect: "square",
  },
  {
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
    title: "Party Glam",
    category: "Party",
    aspect: "wide",
  },
  {
    image: "https://images.unsplash.com/photo-1524255684952-d7185b509571",
    title: "Reception Royal",
    category: "Reception",
    aspect: "tall",
  },
  {
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2",
    title: "Editorial Muse",
    category: "Editorial",
    aspect: "square",
  },
  {
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
    title: "Minimal Beauty",
    category: "Editorial",
    aspect: "wide",
  },
];

// Masonry ONLY from md+
const aspectClasses: Record<string, string> = {
  tall: "md:row-span-2",
  square: "md:row-span-1",
  wide: "md:col-span-2 md:row-span-1",
};

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
    <section id="portfolio" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-accent font-semibold tracking-extreme text-primaryColor mb-4">
            PORTFOLIO
          </h2>
          <p className="text-gray-500">
            A curated selection of my makeup artistry
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-6 py-2 rounded-full text-sm transition
                ${
                  activeCategory === cat
                    ? "bg-primaryColor text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-6
            md:auto-rows-[220px]
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
                src={`${item.image}?auto=format&fit=crop&w=900&q=80`}
                alt={item.title}
                className="
                  w-full h-full object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/60 via-black/20 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                "
              />

              {/* Caption */}
              <div
                className="
                  absolute bottom-0 left-0 right-0 p-5
                  text-white
                  translate-y-6 opacity-0
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-500
                "
              >
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80">
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
