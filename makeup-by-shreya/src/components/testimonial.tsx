import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    occasion: "Bridal Makeup",
    message:
      "She made me feel confident, elegant, and truly myself on my big day. The makeup was flawless and lasted all night.",
  },
  {
    id: 2,
    name: "Riya Mehta",
    occasion: "Engagement",
    message:
      "Absolutely loved the soft, natural look. Everyone complimented my makeup and skin finish.",
  },
  {
    id: 3,
    name: "Sneha Kapoor",
    occasion: "Party Makeup",
    message:
      "Very professional and calm. The look was classy, fresh, and exactly what I wanted.",
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
    <section id="testimonials" className="py-14">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-5xl font-accent text-primaryColor mb-16">
          What Clients Say
        </h2>

        {/* CARD */}
        <div className="relative">

          {/* Main Card */}
          <div
            className="
              relative
              bg-white/70 backdrop-blur-xl
              rounded-3xl
              shadow-2xl
              px-10 py-14
              transition-all duration-700
            "
          >
            {/* Big Quote Icon */}
            <div className="text-6xl text-primaryColor/20 mb-6">
              “
            </div>

            {/* Message */}
            <p className="text-lg md:text-xl text-brandGray leading-relaxed mb-8 max-w-3xl mx-auto">
              {testimonials[current].message}
            </p>

            {/* Client */}
            <div>
              <p className="font-semibold text-brandGray text-lg">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-gray-400 tracking-wide">
                {testimonials[current].occasion}
              </p>
            </div>
          </div>

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="
              absolute left-[-20px] top-1/2 -translate-y-1/2
              w-10 h-10 rounded-full
              bg-white shadow-md
              flex items-center justify-center
              hover:scale-110 transition
            "
          >
            ‹
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="
              absolute right-[-20px] top-1/2 -translate-y-1/2
              w-10 h-10 rounded-full
              bg-white shadow-md
              flex items-center justify-center
              hover:scale-110 transition
            "
          >
            ›
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-10 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${
                  current === index
                    ? "w-8 bg-primaryColor"
                    : "w-2 bg-gray-300"
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