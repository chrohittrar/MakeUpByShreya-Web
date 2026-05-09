import aboutme from "../assets/aboutme.png";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="relative overflow-hidden py-24 md:py-32 bg-[#FBF6F2]"
    >
      {/* SOFT GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primaryColor/5 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-20 md:mb-28">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gray-400 mb-4">
            BEHIND THE ARTISTRY
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-accent text-primaryColor tracking-tight mb-5">
            ABOUT ME
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            My philosophy, journey, and the artistry behind every timeless look.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-14 md:gap-24 items-center">

          {/* IMAGE SIDE */}
          <div className="relative group">

            {/* BACK SHAPE */}
            <div
              className="
                absolute
                -top-6
                -left-6

                w-full
                h-full

                border border-primaryColor/10

                rounded-[40px]

                transition-all duration-500

                group-hover:translate-x-2
                group-hover:translate-y-2
              "
            />

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <img
                src={aboutme}
                alt="Shreya Singh"
                className="
                  w-full
                  h-[500px]
                  md:h-[680px]

                  object-cover

                  transition-transform duration-700
                  group-hover:scale-[1.03]
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="relative">

            {/* SMALL TAG */}
            <div
              className="
                inline-flex
                items-center
                gap-2

                px-4 py-2

                rounded-full

                bg-white/70
                backdrop-blur-xl

                border border-white/50

                shadow-sm

                mb-8
              "
            >
              <div className="w-2 h-2 rounded-full bg-primaryColor" />

              <span className="text-xs tracking-[0.25em] uppercase text-primaryColor">
                Makeup Artist
              </span>
              
            </div>

            {/* MAIN INTRO */}
            <h3
              className="
                text-3xl
                md:text-5xl

                font-accent
                leading-tight

                text-primaryColor

                mb-8
              "
            >
              Creating beauty that
              <span className="block italic text-primaryColor/80">
                feels timeless.
              </span>
            </h3>

            {/* PARAGRAPHS */}
            <div className="space-y-6 text-gray-600 leading-[1.9] text-[15px] md:text-base">

              <p>
                Hi, I’m{" "}
                <span className="font-semibold font-accent text-primaryColor">
                  Shreya Singh Kalakoti
                </span>{" "}
                — a professional makeup artist passionate about creating
                elegant, skin-focused looks that enhance natural beauty
                rather than mask it.
              </p>

              <p>
                Over the years, my journey has evolved through bridal,
                editorial, party, and occasion makeup — working with
                diverse faces, personalities, and styles to craft looks
                that feel deeply personal and refined.
              </p>

              <p>
                My approach is rooted in softness, balance, and timelessness.
                I believe makeup should feel effortless in person,
                luxurious on camera, and most importantly —
                still feel like you.
              </p>

              <p>
                Whether it’s your wedding day, a celebration, or a creative
                shoot, every detail is thoughtfully curated to bring out
                confidence, individuality, and grace.
              </p>
            </div>

            {/* QUOTE */}
            <div className="mt-10">

              <div className="w-20 h-[1px] bg-primaryColor/30 mb-6" />

              <p
                className="
                  text-lg
                  md:text-xl

                  italic

                  text-primaryColor

                  leading-relaxed
                "
              >
                “Makeup isn’t about transformation —
                it’s about refinement, confidence,
                and celebrating who you already are.”
              </p>
            </div>

            {/* SIGNATURE */}
            <p className="mt-8 text-sm tracking-[0.3em] uppercase text-gray-400">
              — Shreya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;