import { useNavigate } from "react-router-dom";

import bridal_12 from "../assets/portfolio-photos/bridal_12.jpeg";
import prebridalrituals1 from "../assets/portfolio-photos/prebridalrituals1.jpeg";
import showcase_2 from "../assets/portfolio-photos/showcase_2.jpeg";
import prebridal_12 from "../assets/portfolio-photos/prebridal_12.jpeg";

const showcaseImages = [
  {
    image: bridal_12,
    title: "Soft Bridal Glam",
    category: "Bridal",
  },
  {
    image: prebridalrituals1,
    title: "Elegant Cocktail",
    category: "Cocktail",
  },
  {
    image: showcase_2,
    title: "Engagement Elegance",
    category: "Engagement",
  },
  {
    image: prebridal_12,
    title: "Haldi Glow",
    category: "Haldi",
  },
];

const Showcase = () => {
  const navigate = useNavigate();

  return (
    <section
      id="showcase"
      className="py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-[#FBF6F2]"
    >
      <div className="max-w-[1600px] mx-auto">

        {/* HEADING */}
        <div className="text-center px-5 md:px-8 mb-14 md:mb-20">
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#5D5D5D]/50 mb-4">
            A SNEAK PEEK
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-accent text-primaryColor tracking-tighter">
            SIGNATURE LOOKS
          </h2>
        </div>

        {/* RESPONSIVE HORIZONTAL GALLERY */}
        <div
          className="
            flex gap-4 md:gap-6
            overflow-x-auto
            px-4 md:px-8
            pb-4
            snap-x snap-mandatory
            scrollbar-hide
          "
        >
          {showcaseImages.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                flex-shrink-0
                snap-center
                overflow-hidden
                bg-white
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                transition-all duration-500
                hover:-translate-y-2

                w-[78vw]
                sm:w-[58vw]
                md:w-[38vw]
                lg:w-[28vw]
                xl:w-[22vw]

                h-[460px]
                sm:h-[540px]
                md:h-[620px]
                lg:h-[700px]
              "
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="
                  w-full h-full
                  object-cover
                  transition-transform duration-700
                  group-hover:scale-[1.06]
                "
              />

              {/* CINEMATIC OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/75
                  via-black/15
                  to-transparent
                "
              />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 text-white">
                <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/70 mb-2">
                  {item.category}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14 md:mt-16 px-6">
          <button
            onClick={() => navigate("/portfolio")}
            className="
              group
              flex items-center gap-3

              px-7 md:px-8
              py-3.5 md:py-4

              bg-primaryColor
              text-white

              text-sm md:text-base

              transition-all duration-300
              hover:scale-[1.03]
              hover:shadow-xl
            "
          >
            Explore Full Portfolio

            <svg
              className="
                w-4 h-4
                transition-transform duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
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
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;