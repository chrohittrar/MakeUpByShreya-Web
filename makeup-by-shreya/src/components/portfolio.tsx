const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    title: "Bridal Makeup",
    subtitle: "Soft glam with radiant finish",
  },
  {
    image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6",
    title: "Engagement Look",
    subtitle: "Elegant & timeless",
  },
  {
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
    title: "Party Makeup",
    subtitle: "Bold eyes, flawless skin",
  },
  {
    image: "https://images.unsplash.com/photo-1524255684952-d7185b509571",
    title: "Reception Glam",
    subtitle: "Classic with modern touch",
  },
  {
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2",
    title: "Photoshoot",
    subtitle: "Editorial beauty look",
  },
  {
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
    title: "Minimal Makeup",
    subtitle: "Natural & skin-like finish",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-20">
      {/* Soft glass background */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-accent text-brandGray tracking-wide mb-3">
            Portfolio
          </h2>
          <p className="text-gray-500">
            A glimpse of my recent makeup work
          </p>
        </div>

        {/* Slider */}
        <div
          className="
            flex gap-6
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            pb-4
          "
        >
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="
                min-w-[260px] sm:min-w-[300px] md:min-w-[340px]
                snap-center
                group relative overflow-hidden rounded-2xl shadow-lg
              "
            >
              {/* Image */}
              <img
                src={`${item.image}?auto=format&fit=crop&w=600&q=80`}
                alt={item.title}
                className="
                  w-full h-[420px] object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
              />

              {/* Gradient Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t from-black/60 via-black/20 to-transparent
                "
              />

              {/* Title */}
              <div
                className="
                  absolute bottom-0 left-0 right-0 p-5
                  text-white
                  transition-all duration-500
                  group-hover:translate-y-0
                "
              >
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hint */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Swipe to explore →
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
