import { useState } from "react";

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

  return (
    <section id="faq" className="relative py-20">
      {/* Soft background */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-accent text-brandGray mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Everything you need to know before booking
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  bg-white/70 backdrop-blur-lg
                  rounded-2xl
                  border border-white/40
                  shadow-sm
                  overflow-hidden
                  transition-all duration-300
                "
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    w-full
                    flex items-center justify-between
                    px-6 py-5
                    text-left
                    text-brandGray
                    font-medium
                    focus:outline-none
                  "
                >
                  <span>{faq.question}</span>

                  {/* Icon */}
                  <span
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
