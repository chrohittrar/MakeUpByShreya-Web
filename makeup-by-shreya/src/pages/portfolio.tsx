import { useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/portfolio-photos/img2.png";
import img3 from "../assets/portfolio-photos/img2.png";
import img4 from "../assets/portfolio-photos/img2.png";

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
    image: img2,
    title: "Bridal Glow",
    category: "Bridal",
    aspect: "tall",
  },
  {
    image: img3,
    title: "Engagement Elegance",
    category: "Engagement",
    aspect: "square",
  },
  {
    image: img1,
    title: "Party Glam",
    category: "Party",
    aspect: "square",
  },
  {
    image: img4,
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

        {/* Filters (EDITORIAL STYLE) */}
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

              {/* Underline */}
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
                src={`${item.image}?auto=format&fit=crop&w=900&q=80`}
                alt={item.title}
                className="
                  w-full h-full object-cover
                  transition-transform duration-700
                  group-hover:scale-[1.05]
                "
              />

              {/* Soft Caption (BOTTOM, ALWAYS VISIBLE) */}
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