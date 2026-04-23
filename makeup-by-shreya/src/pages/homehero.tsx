import { useNavigate } from "react-router-dom";
import homebg from "../assets/homebg.jpg";

const HomeHero = () => {
  const typeOfMakeup = ["Bridal", "Party", "Editorial", "HD Makeup"];
  const navigate = useNavigate();

  return (
    <section id="home" className="relative pt-16">
      {/* FULL WIDTH HERO IMAGE */}
      <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        <img
          src={homebg}
          alt="Makeup Hero"
          className="
    w-full h-full
    object-cover
    object-[center_15%]
  "
        />

        {/* Soft overlay */}
        <div className="absolute bottom-0 left-0 w-full h-28 md:h-36 bg-gradient-to-t from-white via-white/70 to-transparent" />
      </div>

      {/* CONTENT BELOW IMAGE */}
      <div className="max-w-4xl mx-auto px-6 text-center py-16">
        {/* Small Accent */}
        <p className="text-sm tracking-widest uppercase text-[#5D5D5D]/70 mb-20">
          Professional Makeup Artist
        </p>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-cursive text-primaryColor mb-6 leading-loose tracking-tight">
          Makeup by shreya
        </h1>

        {/* Divider */}
        <div className="w-24 h-[1px] mx-auto mb-10" />

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
              text-white bg-primaryColor
              rounded-lg font-semibold

              transition-all duration-500
              hover:bg-secondaryColor hover:-translate-y-1
              active:scale-95
            "
            onClick={() => navigate("/book-appointment")}
          >
            Book an Appointment
            <svg
              className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
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
            onClick={() => navigate("/portfolio")}
          >
            View Portfolio
          </button>
        </div>

        {/* Tags */}
        <div className="mt-14 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-[#5D5D5D]/70">
          {typeOfMakeup.map((item, index) => (
            <span
              key={index}
              className="hover:text-gray-700 transition cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
