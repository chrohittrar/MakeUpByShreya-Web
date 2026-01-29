const productCategories = [
  {
    category: "Face",
    accent: "Complexion",
    brands: [
      "MAC Cosmetics",
      "Estée Lauder",
      "Charlotte Tilbury",
      "Dior Beauty",
      "Bobbi Brown",
    ],
  },
  {
    category: "Eyes",
    accent: "Definition",
    brands: [
      "Huda Beauty",
      "Anastasia Beverly Hills",
      "Urban Decay",
      "Too Faced",
    ],
  },
  {
    category: "Lips",
    accent: "Tone",
    brands: [
      "MAC Cosmetics",
      "Huda Beauty",
      "Charlotte Tilbury",
      "Fenty Beauty",
    ],
  },
  {
    category: "Professional / HD",
    accent: "Precision",
    brands: [
      "Kryolan",
      "Make Up For Ever",
      "PAC Cosmetics",
    ],
  },
];

const ProductsUsed = () => {
  return (
    <section id="products" className="relative py-20">
      {/* Soft background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Centered Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-accent text-primaryColor mb-6">
            The Products I Use
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Every product is carefully chosen to deliver flawless results,
            long-lasting wear, and skin-safe performance.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
          {productCategories.map((item, index) => (
            <div key={index} className="text-center md:text-left">
              
              {/* Accent */}
              <p className="uppercase tracking-[0.35em] text-sm text-primaryColor/50 mb-3">
                {item.accent}
              </p>

              {/* Category */}
              <h3 className="text-2xl font-regular text-brandGray mb-6">
                {item.category}
              </h3>

              {/* Divider */}
              <div className="w-16 h-[1px] bg-brandGray/30 mb-8 mx-auto md:mx-0" />

              {/* Brands */}
              <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
                {item.brands.map((brand, i) => (
                  <span
                    key={i}
                    className="
                      text-brandGray
                      text-lg
                      font-medium
                      relative
                      transition-all duration-300
                      hover:text-black
                      after:absolute
                      after:left-0
                      after:-bottom-1
                      after:w-0
                      after:h-[1px]
                      after:bg-black
                      after:transition-all
                      after:duration-300
                      hover:after:w-full
                    "
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            *Products are selected based on skin type, lighting, occasion,
            and individual preferences to ensure a refined and lasting finish.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsUsed;
