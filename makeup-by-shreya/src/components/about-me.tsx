import aboutme from "../assets/aboutme.png"; // your photo

const AboutMe = () => {
  return (
    <section id="about-me" className="relative py-5">
      {/* Soft background overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
          {/* Text Section (Left) */}
          <div>
            <h2 className="text-4xl md:text-5xl font-accent text-[#5D5D5D] mb-6">
              About me
            </h2>

            <p className="text-[#5D5D5D] leading-relaxed mb-4">
              Hi, I’m <span className="font-bold">Shreya Singh Kalakoti</span>, a
              professional makeup artist passionate about enhancing natural
              beauty and creating elegant, timeless looks.
            </p>

            <p className="text-[#5D5D5D] leading-relaxed mb-4">
              With years of experience in bridal, party, and editorial makeup, I
              focus on skin-like finishes, soft glam, and personalized looks
              that make you feel confident and radiant.
            </p>

            <p className="text-[#5D5D5D] leading-relaxed mb-8">
              Every face is unique, and my goal is to bring out the best version
              of you for your special moments.
            </p>
          </div>

          {/* Image Section (Right) */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Circular Image */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border border-white/40">
                <img
                  src={aboutme}
                  alt="Makeup Artist Shreya"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-3 -right-3 w-70 h-70 md:w-82 md:h-82 rounded-full border border-white/90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
