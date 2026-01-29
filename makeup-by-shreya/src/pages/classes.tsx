import { useState } from "react";

const Classes = () => {
  const [mode, setMode] = useState<"online" | "offline">("offline");

  return (
    <section className="bg-[#FBF6F2]">
      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-xs tracking-widest text-gray-400 mb-4">
            PROFESSIONAL MAKEUP EDUCATION
          </p>

          <h1 className="text-5xl md:text-6xl font-accent text-primaryColor leading-tight mb-6">
            How to Become a
            <br />
            Successful Makeup Artist
          </h1>

          <p className="text-gray-600 leading-relaxed mb-8">
            A thoughtfully curated learning experience designed to elevate your
            artistry, refine your technique, and build a strong professional
            foundation in makeup.
          </p>

          {/* Toggle */}
          <div className="flex gap-4">
            <button
              onClick={() => setMode("offline")}
              className={`px-6 py-3 rounded-full text-sm transition ${
                mode === "offline"
                  ? "bg-primaryColor text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              Offline Class
            </button>

            <button
              onClick={() => setMode("online")}
              className={`px-6 py-3 rounded-full text-sm transition ${
                mode === "online"
                  ? "bg-primaryColor text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              Online Class
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
            alt="Masterclass"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* SIGNATURE LOOK */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-center text-xs tracking-widest text-gray-400 mb-4">
          THE SIGNATURE OUTCOME
        </p>

        <h2 className="text-center text-4xl font-accent text-primaryColor mb-12">
          What You Will Learn
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2"
            alt="Signature look"
            className="rounded-xl"
          />

          <div className="space-y-4 text-gray-600">
            <p>
              This class focuses on creating timeless, skin-focused makeup looks
              with attention to detail, texture, and finish.
            </p>
            <ul className="space-y-2">
              <li>• Skin prep & flawless base</li>
              <li>• Eye structure & blending mastery</li>
              <li>• Bridal & editorial techniques</li>
              <li>• Client handling & hygiene</li>
            </ul>
          </div>
        </div>
      </div>

      {/* MASTERCLASS FLOW */}
      <div className="bg-[#4A2F2A] text-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-4xl font-accent mb-16">
            {mode === "offline" ? "2-Day Masterclass Flow" : "Online Program Flow"}
          </h2>

          {mode === "offline" ? (
            <div className="space-y-10">
              <div>
                <h3 className="text-xl mb-2">Day 1</h3>
                <p className="text-white/80">
                  Skin preparation, base perfection, product knowledge, eye
                  fundamentals, face structure.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-2">Day 2</h3>
                <p className="text-white/80">
                  Bridal glam, editorial looks, corrections, client workflow,
                  portfolio guidance.
                </p>
              </div>
            </div>
          ) : (
            <p className="text-center text-white/80 max-w-xl mx-auto">
              Live guided online sessions covering techniques, demos, Q&A, and
              guided practice with lifetime access to recordings.
            </p>
          )}
        </div>
      </div>

      {/* WHO SHOULD ATTEND */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-center text-4xl font-accent text-primaryColor mb-10">
          Who Should Attend
        </h2>

        <ul className="max-w-3xl mx-auto space-y-3 text-gray-600">
          <li>• Aspiring makeup artists</li>
          <li>• Artists looking to upskill professionally</li>
          <li>• Bridal / editorial focused learners</li>
          <li>• Anyone serious about makeup as a career</li>
        </ul>
      </div>

      {/* FEES */}
      <div className="bg-[#F3E8E2] py-24">
        <div className="max-w-md mx-auto text-center px-6">
          <p className="text-xs tracking-widest text-gray-400 mb-2">
            CLASS FEES
          </p>

          <h3 className="text-5xl font-accent text-primaryColor mb-6">
            ₹{mode === "offline" ? "25,000" : "12,000"}
          </h3>

          <p className="text-gray-600 mb-8">
            Inclusive of learning materials and certification.
          </p>

          <button className="w-full py-4 rounded-xl bg-primaryColor text-white hover:opacity-90 transition">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Classes;
