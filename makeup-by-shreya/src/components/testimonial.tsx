import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    occasion: "Bridal Makeup",
    message:
      "She made me feel confident, elegant, and truly myself on my big day. The makeup was flawless and lasted beautifully all night long.",
  },
  {
    id: 2,
    name: "Riya Mehta",
    occasion: "Engagement Makeup",
    message:
      "Absolutely loved the soft, natural finish. Everyone complimented my makeup and how radiant my skin looked in photographs.",
  },
  {
    id: 3,
    name: "Sneha Kapoor",
    occasion: "Party Glam",
    message:
      "Very professional and calming throughout the session. The final look was classy, modern, and exactly what I had envisioned.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 overflow-hidden bg-[#FBF6F2]"
    >
      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primaryColor/5 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.35em] uppercase text-[#5D5D5D]/50 mb-4">
            KIND WORDS
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-accent text-primaryColor tracking-tight mb-5">
            WHAT CLIENTS SAYS
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Every face tells a story — here’s what my beautiful clients
            shared after their experience.
          </p>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="relative flex items-center justify-center">

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="
              hidden md:flex
              absolute left-0 z-20

              w-14 h-14

              bg-white/90
              backdrop-blur-xl

              border border-white/40

              shadow-xl

              items-center justify-center

              text-primaryColor text-2xl

              transition-all duration-300

              hover:scale-110
              hover:bg-primaryColor
              hover:text-white
            "
          >
            ←
          </button>

          {/* CARD */}
          <div
            className="
              relative

              max-w-4xl
              w-full

              bg-white/70
              backdrop-blur-2xl

              border border-white/40

              px-8 py-12
              md:px-16 md:py-20

              shadow-[0_10px_50px_rgba(0,0,0,0.08)]

              overflow-hidden
            "
          >
            {/* TOP DECOR */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primaryColor/40 to-transparent" />

            {/* QUOTE ICON */}
            <div className="text-[80px] md:text-[110px] leading-none text-primaryColor/10 font-serif absolute top-6 left-8">
              “
            </div>

            {/* MESSAGE */}
            <div className="relative z-10 mt-6">
              <p
                className="
                  text-lg
                  md:text-2xl

                  text-brandGray

                  leading-relaxed
                  md:leading-[1.8]

                  text-center

                  max-w-3xl
                  mx-auto
                "
              >
                {testimonials[current].message}
              </p>

              {/* CLIENT */}
              <div className="mt-12 text-center">
                <div className="w-14 h-[1px] bg-primaryColor/30 mx-auto mb-5" />

                <h3 className="text-xl md:text-2xl font-accent font-medium text-primaryColor">
                  {testimonials[current].name}
                </h3>

                <p className="text-sm text-gray-400 mt-2">
                  {testimonials[current].occasion}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="
              hidden md:flex
              absolute right-0 z-20

              w-14 h-14
             

              bg-white/90
              backdrop-blur-xl

              border border-white/40

              shadow-xl

              items-center justify-center

              text-primaryColor text-2xl

              transition-all duration-300

              hover:scale-110
              hover:bg-primaryColor
              hover:text-white
            "
          >
            →
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="
              w-10 h-10 
              bg-white shadow-lg
              flex items-center justify-center
              text-primaryColor
            "
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="
              w-10 h-10 
              bg-white shadow-lg
              flex items-center justify-center
              text-primaryColor
            "
          >
            →
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-12 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                transition-all duration-500 rounded-full
                ${
                  current === index
                    ? "w-10 h-2 bg-primaryColor"
                    : "w-2 h-2 bg-gray-300 hover:bg-primaryColor/50"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;