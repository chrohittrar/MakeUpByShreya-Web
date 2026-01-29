import aboutme from "../assets/aboutme.png";

const AboutMe = () => {
  return (
    <section id="about-me" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading (CENTERED like Portfolio) */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-accent font-semibold tracking-extreme text-primaryColor mb-4">
            ABOUT ME
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Behind the artistry — my journey, passion, and philosophy
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
                <img
                  src={aboutme}
                  alt="Makeup Artist Shreya"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Soft ring */}
              <div className="absolute inset-0 rounded-full border border-white/70 scale-110" />
            </div>
          </div>

          {/* Text */}
          <div className="text-brandGray leading-relaxed">
            <p className="mb-5">
              Hi, I’m{" "}
              <span className="font-medium">
                Shreya Singh Kalakoti
              </span>
              , a professional makeup artist with a deep passion for creating
              refined, skin-focused looks that enhance natural beauty rather
              than mask it.
            </p>

            <p className="mb-5">
              My journey in makeup artistry has been shaped by years of hands-on
              experience in bridal, party, and editorial makeup — working with
              diverse faces, skin tones, and styles. I believe makeup should
              feel effortless, elegant, and timeless.
            </p>

            <p className="mb-5">
              Whether it’s a bride’s most cherished day, an intimate celebration,
              or a creative photoshoot, my approach remains personal and detail-driven.
              Every look is thoughtfully curated to reflect your personality
              and vision.
            </p>

            <p>
              For me, makeup is more than just beauty — it’s confidence,
              self-expression, and the art of making you feel like the best
              version of yourself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
