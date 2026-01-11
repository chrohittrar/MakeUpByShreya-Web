const productCategories = [
  {
    category: "Face",
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
    brands: [
      "Huda Beauty",
      "Anastasia Beverly Hills",
      "Urban Decay",
      "Too Faced",
    ],
  },
  {
    category: "Lips",
    brands: [
      "MAC Cosmetics",
      "Huda Beauty",
      "Charlotte Tilbury",
      "Fenty Beauty",
    ],
  },
  {
    category: "Professional / HD",
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
      {/* Soft glass background */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-accent text-brandGray tracking-wide mb-3">
            Products I Use
          </h2>
          <p className="text-gray-500">
            Premium, skin-safe products trusted by professionals
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {productCategories.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/70 backdrop-blur-lg
                rounded-2xl shadow-lg
                p-8
              "
            >
              <h3 className="text-xl font-semibold text-brandGray mb-5">
                {item.category}
              </h3>

              <ul className="space-y-3 text-gray-600">
                {item.brands.map((brand, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {/* Bullet */}
                    <span className="w-2 h-2 rounded-full bg-brandGray/60" />
                    <span>{brand}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsUsed;
