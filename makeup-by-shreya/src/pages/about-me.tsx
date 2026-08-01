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
        <div className="text-center mb-10 md:mb-28">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gray-400 mb-4">
            BEHIND THE ARTISTRY
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-accent text-primaryColor tracking-tight ">
            ABOUT ME
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-14 md:gap-24 items-center">
          {/* IMAGE SIDE */}
          <div className="relative group">
            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
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
            {/* MAIN INTRO */}
            <h3
              className="
                text-3xl
                md:text-5xl

                font-accent
                leading-tight

                text-black

                mb-8
              "
            >
              Creating beauty that
              <span className="block text-blac">feels timeless.</span>
            </h3>

            {/* PARAGRAPHS */}
            <div className="space-y-6 text-gray-600 leading-[1.9] text-[15px] md:text-base">
              <p>
                Beauty has always been more than a profession to me—it's an art
                form, a language, and a way of helping people see themselves
                with newfound confidence.
              </p>

              <p>
                I'm{"  "}
                <span className="font-bold font-accent text-black">
                   Shreya
                </span>{" "}
                a professional makeup artist dedicated to creating timeless,
                refined looks that enhance rather than transform. My philosophy
                is simple: the most beautiful makeup is the kind that still
                feels like you—only more confident, radiant, and unforgettable.
              </p>

              <p>
                Every face tells a different story, which is why I approach each
                client with intention, precision, and a deep appreciation for
                individuality. Whether it's the emotion of a bridal morning, an
                editorial shoot, or a special celebration, I believe makeup
                should never overpower your features—it should elevate them.
              </p>
            </div>

            {/* QUOTE */}
            <div className="mt-10">
              <div className="w-20 h-[1px] bg-primaryColor/30 mb-6" />

              <p
                className="
                  text-lg
                  md:text-xl

                  font-accent
                  

                  text-primaryColor

                  leading-relaxed
                "
              >
                “Luxury isn't created with expensive products—it's created through intention, artistry, 
                and attention to every detail."”
              </p>
            </div>

            {/* SIGNATURE */}
            <p className="mt-4 text-sm tracking-[0.3em] uppercase text-gray-400">
              — Shreya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
