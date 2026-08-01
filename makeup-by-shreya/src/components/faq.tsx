import { useState } from "react";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "How far in advance should I book my makeup?",
    answer:
      "I recommend booking at least 2–3 months in advance, especially during wedding and festive seasons, to ensure availability.",
  },
  {
    question: "Do you offer bridal trials?",
    answer:
      "Yes, bridal trials are available upon request. This helps us finalize the look and products best suited to your skin and occasion.",
  },
  {
    question: "Which makeup brands do you use?",
    answer:
      "I use a curated selection of luxury and professional brands that are skin-safe, long-lasting, and camera-friendly.",
  },
  {
    question: "Do you travel for outstation bookings?",
    answer:
      "Yes, I do travel for destination weddings and events. Travel and stay arrangements are to be covered by the client.",
  },
  {
    question: "How long does a makeup session take?",
    answer:
      "A typical makeup session takes around 60–90 minutes, depending on the look and occasion.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const navigate = useNavigate();

  return (
    <section
      id="faq"
      className="
        relative
        py-12 md:py-16
        bg-[#FBF6F2]
        overflow-hidden
      "
    >
      {/* SOFT BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-20 left-1/2
          -translate-x-1/2

          w-[500px]
          h-[500px]

          rounded-full
          bg-primaryColor/5

          blur-3xl
        "
      />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-20">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gray-400 mb-4">
            NEED HELP?
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
uppercase
              font-accent
              text-primaryColor

              tracking-tight

              
            "
          >
            Frequently Asked
          </h2>
        </div>

        {/* FAQ ITEMS */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  group

                  bg-white/70
                  backdrop-blur-xl

                  border border-white/40

                  shadow-[0_10px_40px_rgba(0,0,0,0.04)]

                  overflow-hidden

                  transition-all duration-500

                  hover:shadow-[0_20px_50px_rgba(115,74,113,0.08)]
                "
              >
                {/* BUTTON */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="
                    w-full

                    flex items-center justify-between

                    gap-5

                    px-6 md:px-8
                    py-6

                    text-left
                  "
                >
                  {/* LEFT */}
                  <div className="flex items-start gap-5">
                    {/* NUMBER */}
                    <span
                      className="
                        text-xs
                        tracking-[0.2em]

                        text-primaryColor/60

                        mt-1
                      "
                    >
                      0{index + 1}
                    </span>

                    {/* QUESTION */}
                    <span
                      className="
                        text-base
                        md:text-xl

                        text-brandGray

                        font-medium

                        leading-relaxed

                        group-hover:text-primaryColor

                        transition
                      "
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* ICON */}
                  <div
                    className={`
                      relative

                      w-10 h-10

                      flex items-center justify-center



                      transition-all duration-500

                      ${
                        isOpen
                          ? "rotate-45 text-primaryColor"
                          : "text-primaryColor"
                      }
                    `}
                  >
                    <span className="text-xl leading-none">+</span>
                  </div>
                </button>

                {/* ANSWER */}
                <div
                  className={`
                    grid transition-all duration-500 ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-16 pb-8">
                      <p
                        className="
                          text-gray-600

                          leading-relaxed

                          text-sm md:text-base
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-500 mb-5">Still have questions?</p>

          <button
            className="
              group

              inline-flex items-center gap-3

              px-8 py-4

              bg-primaryColor
              text-white

              transition-all duration-500

              hover:-translate-y-1
              hover:shadow-[0_15px_35px_rgba(115,74,113,0.25)]
            "
            onClick={() => navigate("/contact")}
          >
            Contact Me
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

export default FAQ;
