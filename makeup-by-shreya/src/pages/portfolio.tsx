import { useMemo, useState } from "react";
import { FaInstagram } from "react-icons/fa";
/* ================= IMPORT IMAGES ================= */

const modules = import.meta.glob(
  "../assets/portfolio-photos/*.{png,jpg,jpeg,webp}",
  { eager: true },
);

/* ================= TYPES ================= */

const categories: Category[] = ["All", "Bridal", "Pre-Bridal"];

/* ================= CATEGORY DETECTOR ================= */

type Category = "All" | "Bridal" | "Pre-Bridal";

const getCategoryFromPath = (path: string): Category => {
  const fileName = path.split("/").pop()?.toLowerCase().trim() ?? "";

  if (/pre[\s_-]*bridal/.test(fileName)) return "Pre-Bridal";
  if (/bridal/.test(fileName)) return "Bridal";

  return "All";
};
/* ================= CREATE ITEMS ================= */

const portfolioItems = Object.entries(modules).map(
  ([path, mod]: any, index) => {
    const category = getCategoryFromPath(path);

    /* DIFFERENT HEIGHTS */
    const aspectOptions = ["tall"];

    return {
      image: mod.default,
      title: category,
      category,
      aspect: aspectOptions[index % aspectOptions.length],
    };
  },
);

/* ================= GRID STYLES ================= */

const aspectClasses: Record<string, string> = {
  tall: "md:row-span-2",
  square: "md:row-span-1",
  wide: "md:col-span-2 md:row-span-1",
};

/* ================= COMPONENT ================= */

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Bridal");

  /* SORT FOR BETTER VISUAL BALANCE */
  const filteredItems = useMemo(() => {
    const items =
      activeCategory === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeCategory);

    return items;
  }, [activeCategory]);

  return (
    <section
      id="portfolio"
      className="
        relative
        overflow-hidden

        bg-[#FBF6F2]

        py-24 md:py-32
      "
    >
      {/* SOFT GLOW */}
      <div
        className="
          absolute
          top-20 left-1/2
          -translate-x-1/2

          w-[600px]
          h-[600px]

          rounded-full

          bg-primaryColor/5

          blur-3xl
        "
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-6">
        {/* ================= HEADING ================= */}
        <div className="text-center mb-20 md:mb-24">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gray-400 mb-4">
            SELECTED WORK
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
uppercase
              font-accent
              text-primaryColor

              tracking-tighter

            "
          >
            Portfolio
          </h2>
        </div>

        {/* ================= INSTAGRAM LINK ================= */}
        <div className="flex justify-center -mt-12 mb-14 md:-mt-16 md:mb-16">
          <a
            href="https://www.instagram.com/artistryby__shreya"
            target="_blank"
            rel="noopener noreferrer"
            className="
    group
    inline-flex
    items-center
    gap-2
    text-sm
    text-gray-500
    transition-all
    duration-300
    hover:text-primaryColor
  "
          >
            <span className="border-b border-gray-300 pb-0.5 group-hover:border-primaryColor">
              Explore more work on Instagram
            </span>

            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M7 7h10v10"
              />
            </svg>
          </a>
        </div>

        {/* ================= FILTERS ================= */}
        <div
          className="
            flex items-center justify-start

            gap-3 md:gap-4

            overflow-x-auto

            scrollbar-hide

            pb-3 mb-14 md:mb-20
          "
        >
          {categories.map((cat) => {
            const active = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  whitespace-nowrap

                  px-5 py-2.5

                  text-sm

                  border

                  transition-all duration-300

                  ${
                    active
                      ? `
                        bg-primaryColor
                        text-white
                        border-primaryColor

                        shadow-[0_10px_30px_rgba(115,74,113,0.18)]
                      `
                      : `
                        bg-white/70
                        backdrop-blur-xl

                        border-black/5

                        text-gray-500

                        hover:border-primaryColor/20
                        hover:text-primaryColor
                      `
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ================= GRID ================= */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3

            gap-5 md:gap-6

            md:auto-rows-[260px]
          "
        >
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`
                group
                relative

                overflow-hidden

                bg-white
                border-2px
                border-bg-gray

                shadow-[0_10px_40px_rgba(0,0,0,0.05)]

                aspect-[3/4]
                md:aspect-auto

                transition-all duration-700

                hover:-translate-y-1  

                ${aspectClasses[item.aspect]}
              `}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="
                  w-full h-full

                  object-cover

                  transition-transform duration-[1200ms]

                  group-hover:scale-[1.06]
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0

                  bg-gradient-to-t
                  from-black/70
                  via-black/10
                  to-transparent

                  opacity-90
                "
              />

              {/* TOP TAG */}
              {activeCategory !== "All" && (
                <div className="absolute top-4 left-4">
                  <span
                    className="
        px-3 py-1.5
        text-[10px]
        tracking-[0.25em]
        uppercase
        bg-white/10
        backdrop-blur-md
        border border-white/10
        text-white
      "
                  >
                    {item.category}
                  </span>
                </div>
              )}

              {/* HOVER GLOW */}
              <div
                className="
                  absolute inset-0

                  border border-white/0

                  group-hover:border-white/20

                  transition-all duration-500
                "
              />
            </div>
          ))}
        </div>

        {/* ================= BOTTOM NOTE ================= */}
        <div className="text-center mt-20">
          <p
            className="
              text-sm
              text-gray-400

              tracking-wide
            "
          >
            More looks & transformations coming soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
