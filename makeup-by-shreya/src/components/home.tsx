import homebg from "../assets/homebg.png";

const HomeHero = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${homebg})` }}
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        
        {/* Small Accent */}
        <p className="text-sm tracking-widest uppercase text-[#5D5D5D]/70 mb-6">
          Professional Makeup Artist
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-7xl font-accent text-[#5D5D5D] mb-6 leading-tight">
          Make Up By Shreya
        </h1>

        {/* Divider */}
        <div className="w-24 h-[1px] bg-[#5D5D5D]/40 mx-auto mb-6" />

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#5D5D5D]/80 mb-10 leading-relaxed">
          Enhancing your natural beauty with
          <span className="block mt-1">
            luxury, elegance & timeless makeup artistry
          </span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          {/* Primary */}
          <button
            className="
              group
              px-8 py-3
              flex items-center justify-center gap-2
              text-white
              bg-[#5D5D5D]
              rounded-lg
              font-semibold

              transition-all duration-500 ease-out
              hover:bg-black
              hover:shadow-xl
              hover:-translate-y-1
              active:scale-95
            "
            onClick={() => {
              document
                .getElementById("book-appointment")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book an Appointment
            <svg
              className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
            </svg>
          </button>

          {/* Secondary */}
          <button
            className="
              px-8 py-3
              border border-[#5D5D5D]/40
              rounded-lg
              text-[#5D5D5D]
              font-medium
              transition
              hover:bg-[#5D5D5D]/10
            "
            onClick={() => {
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Portfolio
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-[#5D5D5D]/70">
          <span>✨ Bridal</span>
          <span>✨ Party</span>
          <span>✨ Editorial</span>
          <span>✨ HD Makeup</span>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
