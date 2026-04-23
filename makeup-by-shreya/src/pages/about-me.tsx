import aboutme from "../assets/aboutme.png";

const AboutMe = () => {
  return (
    <section id="about-me" className="py-32 bg-[#FBF6F2]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-24">
          <p className="text-xs tracking-widest text-gray-400 mb-3">
            BEHIND THE ARTISTRY
          </p>

          <h2 className="text-6xl md:text-8xl font-accent tracking-extreme text-primaryColor mb-4">
            About Me
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto">
            My journey, philosophy, and approach to beauty
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* IMAGE (RECTANGLE, NOT CIRCLE) */}
          <div className="relative">
            <img
              src={aboutme}
              alt="Shreya Makeup Artist"
              className="
                w-full
                max-h-[520px]
                object-cover
                rounded-20xl
                shadow-2xl
              "
            />

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-2xl" />
          </div>

          {/* TEXT */}
          <div className="text-brandGray">

            {/* Intro */}
            <p className="text-lg leading-relaxed mb-6">
              Hi, I’m{" "}
              <span className="font-semibold text-primaryColor">
                Shreya Singh Kalakoti
              </span>{" "}
              — a professional makeup artist dedicated to creating refined,
              skin-focused looks that enhance your natural beauty.
            </p>

            {/* Divider */}
            <div className="w-16 h-[1px] bg-primaryColor/40 mb-6" />

            {/* Content */}
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                My journey in makeup artistry has been shaped by years of
                experience in bridal, party, and editorial makeup — working
                across diverse faces, skin tones, and personal styles.
              </p>

              <p>
                I believe makeup should feel effortless, elegant, and timeless.
                It should elevate your features while still feeling like you.
              </p>

              <p>
                Whether it’s a bride’s most cherished day, an intimate
                celebration, or a creative shoot — every look is thoughtfully
                designed to reflect your personality.
              </p>
            </div>

            {/* Signature Line */}
            <p className="mt-8 italic text-primaryColor">
              “Makeup is not about transformation — it’s about refinement.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;