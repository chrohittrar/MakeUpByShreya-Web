import { useNavigate } from "react-router-dom";
// import homebgvideo from "../assets/homebgvideo.mp4";
import homebgimage from "../assets/homebgimage.jpeg";

const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative h-[100svh] overflow-hidden">
      {/* VIDEO */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="
          absolute inset-0
          w-full h-full
          object-cover
        "
      >
        <source src={homebgvideo} type="video/mp4" />
      </video> */}

      <img
  src={homebgimage}
  alt="Makeup by Shreya"
  className="
    absolute inset-0
    w-full h-full
    object-cover
  "
/>

      {/* DARK OVERLAY */}

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/70 to-transparent z-10" />

      {/* CONTENT OVER VIDEO */}
      <div
        className="
          relative z-20
          h-full
          flex flex-col
          items-center
          justify-center
          text-center
          px-6
        "
      >
        {/* LABEL */}
        {/* <p className="text-sm tracking-[0.35em] uppercase text-white/80 mb-16 mt-20">
          Professional Makeup Artist
        </p> */}

        {/* TITLE */}
        {/* <h1 className="text-3xl md:text-7xl font-cursive text-white mt-[25rem] leading-loose tracking-tight"> Makeup by shreya </h1> */}

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-[27rem] ">
          {/* PRIMARY */}

          {/* MEET ARTIST */}
          <button
            className="
              group

              px-8 py-3.5

              border border-white/20

              bg-white/10
              backdrop-blur-md

              text-white

              transition-all duration-500

              hover:bg-white
              hover:text-black
              hover:-translate-y-1
            "
            onClick={() => navigate("/about")}
          >
            <span className="flex items-center gap-2">
              Meet the Artist
              <svg
                className=" w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 "
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M7 7h10v10"
                />{" "}
              </svg>
            </span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default HomeHero;
