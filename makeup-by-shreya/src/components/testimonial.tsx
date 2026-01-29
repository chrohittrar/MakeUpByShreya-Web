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

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="testimonials" className="relative py-20 scroll-mt-20">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-accent text-primaryColor mb-10">
            What my clients say
          </h2>

          {/* Slider */}
          <div className="bg-gray-200 backdrop-blur-lg rounded-2xl shadow-xl p-10 min-h-[220px] flex flex-col justify-center transition-all duration-700">
            <p className="text-lg text-brandGray italic mb-6">
              “ {testimonials[current].message} ”
            </p>

            <div>
              <p className="font-semibold text-brandGray">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-gray-500">
                {testimonials[current].occasion}
              </p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition ${
                  current === index
                    ? "bg-black"
                    : "bg-gray-200 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
