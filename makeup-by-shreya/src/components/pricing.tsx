const pricingPlans = [
  {
    title: "Bridal Makeup",
    price: "₹18,000",
    description: "For your most special day",
    features: [
      "HD / Airbrush Makeup",
      "Lashes Included",
      "Premium Products",
      "Long-lasting Finish",
      "Touch-up Support",
    ],
  },
  {
    title: "Party Makeup",
    price: "₹4,000",
    description: "Perfect for parties & events",
    features: [
      "Soft / Glam Look",
      "Skin Prep Included",
      "Lashes Optional",
      "Light Hairstyling",
    ],
  },
  {
    title: "Engagement / Reception",
    price: "₹8,000",
    description: "Elegant & timeless glam",
    features: [
      "HD Makeup",
      "Custom Look",
      "Lashes Included",
      "Long Wear Finish",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-10">
      {/* Soft background */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-accent text-brandGray tracking-wide mb-3">
            Pricing
          </h2>
          <p className="text-gray-500">
            Transparent pricing tailored for every occasion
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="
                bg-white/70 backdrop-blur-lg
                rounded-2xl shadow-xl
                p-8
                text-center
                transition-transform duration-500
                hover:-translate-y-2
              "
            >
              <h3 className="text-xl font-semibold text-brandGray mb-2">
                {plan.title}
              </h3>

              <p className="text-sm text-gray-400 mb-4">
                {plan.description}
              </p>

              <p className="text-3xl font-semibold text-brandGray mb-6">
                {plan.price}
              </p>

              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>

              <button
                className="
                  px-6 py-2
                  border border-brandGray/40
                  rounded-lg
                  text-brandGray
                  hover:bg-brandGray
                  hover:text-white
                  transition
                "
                onClick={() => {
                  document
                    .getElementById("book-appointment")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Download Brochure */}
        <div className="mt-16 text-center">
          <a
            href="/MakeUp-By-Shreya-Packages.pdf"
            download
            className="
              inline-flex items-center gap-2
              text-brandGray
              font-medium
              hover:underline
            "
          >
            Download Full Brochure
            <svg
              className="w-4 h-4"
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
          </a>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
