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
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section id="faq" className="py-14 bg-[#FBF6F2]">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-widest text-gray-400 mb-3">
            NEED HELP?
          </p>

          <h2 className="text-5xl font-accent text-primaryColor mb-4">
            Frequently Asked
          </h2>

          <p className="text-gray-500">
            Everything you need to know before booking
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-6">

                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    w-full flex items-center justify-between
                    text-left group
                  "
                >
                  <span className="text-lg md:text-xl text-brandGray font-medium group-hover:text-primaryColor transition">
                    {faq.question}
                  </span>

                  {/* PLUS ICON */}
                  <span
                    className={`
                      text-2xl text-primaryColor
                      transition-transform duration-300
                      ${isOpen ? "rotate-45" : ""}
                    `}
                  >
                    +
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`
                    overflow-hidden transition-all duration-500
                    ${
                      isOpen
                        ? "max-h-40 opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <p className="text-gray-600 leading-relaxed pr-10">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA (very premium touch) */}
        <div className="text-center mt-10">
          <p className="text-gray-500 mb-4">
            Still have questions?
          </p>

          <button
            className="
              px-8 py-3
              bg-primaryColor text-white
              rounded-xl
              hover:opacity-90
              transition
            "
            onClick={() => navigate("/contact")}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;