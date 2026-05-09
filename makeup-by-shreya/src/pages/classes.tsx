import { useState } from "react";
import classbg from "../assets/classbg.jpeg";

const Classes = () => {
  const [mode, setMode] = useState<"online" | "offline">("offline");

  const learnItems = [
    "Step-by-step full face routine",
    "Two signature eye looks",
    "Skin prep & flawless base",
    "Product audit & recommendations",
    "Professional tips & corrections",
    "Personalized makeup guidance",
  ];

  const experienceItems = [
    {
      title: "Theory + Practice",
      text: "A balanced experience combining deep understanding with practical application.",
    },
    {
      title: "Live Guided Session",
      text: "Practice in real-time with personal guidance and corrections throughout.",
    },
    {
      title: "Dedicated Doubt Solving",
      text: "Every question matters — get one-on-one support during the class.",
    },
  ];

  return (
    <section className="bg-white overflow-hidden">
      {/* ================= HERO ================= */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* IMAGE SIDE */}
        <div className="relative h-[55vh] sm:h-[65vh] lg:h-auto">
          {/* IMAGE */}
          <img
            src={classbg}
            alt="Makeup Class"
            className="
              w-full h-full
              object-cover
              object-center
            "
          />

          {/* OVERLAY */}
          <div
            className="
              absolute inset-0

              bg-gradient-to-t
              from-black/20
              via-transparent
              to-transparent
            "
          />

          {/* FLOATING CARD */}
          <div
            className="
              hidden lg:block

              absolute bottom-10 left-10

              bg-white/80
              backdrop-blur-2xl

              border border-white/40

              shadow-[0_15px_40px_rgba(0,0,0,0.08)]

              px-6 py-5

              max-w-[280px]
            "
          >
            <p className="text-[11px] tracking-[0.25em] uppercase text-gray-400 mb-3">
              CLASS EXPERIENCE
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              A personalized one-on-one learning experience designed to help you
              confidently master makeup techniques for yourself.
            </p>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div
          className="
            relative

            flex flex-col justify-center

            px-6 sm:px-10 md:px-16
            py-20
          "
        >
          {/* SOFT GLOW */}
          <div
            className="
              absolute
              top-20 right-0

              w-[350px] h-[350px]

              bg-primaryColor/5
              blur-3xl
              rounded-full
            "
          />

          <div className="relative z-10">
            {/* LABEL */}
            <p className="text-[11px] tracking-[0.35em] uppercase text-gray-400 mb-8">
              WITH SHREYA SINGH
            </p>

            {/* HEADING */}
            <h1
              className="
    text-3xl
    sm:text-4xl
    md:text-5xl
    font-cursive
    text-primaryColor
    leading-[1.05]
    mb-5
  "
            >
              Maison de Beauté
              <span className="block mt-2 text-4xl font-accent tracking-tighter">
                PRIVATE MAKEUP SESSION
              </span>
            </h1>
            {/* SUBTITLE */}
            <p
              className="
                text-gray-600

                leading-relaxed

                max-w-xl

                mb-10
              "
            >
              Master the art of your own face through a refined, personalized,
              and interactive learning experience tailored for every skill
              level.
            </p>

            {/* TOGGLE */}
            <div className="flex items-center gap-3 mb-10">
              <button
                onClick={() => setMode("offline")}
                className={`
                  px-5 py-2.5

                  border

                  transition-all duration-300

                  ${
                    mode === "offline"
                      ? `
                        bg-primaryColor
                        text-white
                        border-primaryColor
                      `
                      : `
                        border-gray-200
                        text-gray-500
                        hover:border-primaryColor/30
                      `
                  }
                `}
              >
                Offline
              </button>

              <button
                onClick={() => setMode("online")}
                className={`
                  px-5 py-2.5

                  border

                  transition-all duration-300

                  ${
                    mode === "online"
                      ? `
                        bg-primaryColor
                        text-white
                        border-primaryColor
                      `
                      : `
                        border-gray-200
                        text-gray-500
                        hover:border-primaryColor/30
                      `
                  }
                `}
              >
                Online
              </button>
            </div>

            {/* INFO STRIP */}
            <div
              className="
                flex flex-wrap gap-3

                mb-12
              "
            >
              {[
                mode === "offline"
                  ? "In-person Training"
                  : "Live Interactive Session",

                "Personalized Guidance",

                mode === "offline" ? "Hands-on Learning" : "Flexible Access",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    px-4 py-2

                    bg-[#FBF6F2]

                    border border-black/5

                    text-sm text-gray-600
                  "
                >
                  {item}
                </div>
              ))}
            </div>

            {/* WHAT YOU WILL LEARN */}
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-gray-400 mb-6">
                WHAT YOU WILL LEARN
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {learnItems.map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex items-start gap-3

                      p-4

                      bg-[#FBF6F2]/60

                      border border-black/5

                      hover:border-primaryColor/20

                      transition-all duration-300
                    "
                  >
                    <div
                      className="
                        w-2 h-2
                        rounded-full

                        bg-primaryColor

                        mt-2
                        flex-shrink-0
                      "
                    />

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= EXPERIENCE SECTION ================= */}
      <div className="py-24 bg-[#FBF6F2]">
        <div className="max-w-6xl mx-auto px-6">
          {/* HEADING */}
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.35em] uppercase text-gray-400 mb-4">
              THE EXPERIENCE
            </p>

            <h2 className="text-4xl md:text-5xl font-accent uppercase tracking-tighter text-primaryColor">
              A Thoughtfully Designed Session
            </h2>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-6">
            {experienceItems.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white

                  p-8

                  border border-black/5

                  hover:-translate-y-1

                  transition-all duration-500

                  shadow-sm
                "
              >
                <div
                  className="
                    w-10 h-10

                    flex items-center justify-center

                    bg-primaryColor/10

                    text-primaryColor

                    text-sm font-semibold

                    mb-6
                  "
                >
                  0{index + 1}
                </div>

                <h3
                  className="
                    text-xl
                    font-accent
                    text-primaryColor

                    mb-4
                  "
                >
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= PRICING ================= */}
      <div className="relative py-24 overflow-hidden">
        {/* GLOW */}
        <div
          className="
            absolute
            left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2

            w-[500px] h-[500px]

            bg-primaryColor/5
            blur-3xl
            rounded-full
          "
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gray-400 mb-4">
            INVESTMENT
          </p>

          <h3
            className="
              text-5xl
              md:text-7xl

              font-accent
              text-primaryColor

              mb-4
            "
          >
            ₹{mode === "online" ? " 1,999" : " 10,000"}
          </h3>

          <p className="text-gray-500 mb-3 text-sm">
            All-inclusive for a personalized one-on-one experience
          </p>

          <p className="font-cursive text-primaryColor mb-10 mt-10 text-l">
            ready to glow?
          </p>

          {/* CTA */}
          <button
            className="
              group

              px-10 py-4

              bg-primaryColor
              text-white

              hover:opacity-90

              transition-all duration-500

              hover:-translate-y-1

              shadow-[0_15px_35px_rgba(115,74,113,0.25)]
            "
            onClick={() =>
              window.open(
                "https://wa.me/917247874192?text=" +
                  encodeURIComponent(
                    `Hi, I want to enroll for your self makeup class in ${mode} mode`,
                  ),
                "_blank",
              )
            }
          >
            <span className="flex items-center gap-3">
              Book Your Slot
              <svg
                className="
                  w-4 h-4

                  transition-transform duration-300

                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
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
            </span>
          </button>

          {/* NOTE */}
          {mode === "online" && (
            <p className="text-xs text-gray-400 mt-8 leading-relaxed max-w-md mx-auto">
              Once you register, the meeting link and a small pre-class
              checklist will be shared with you via WhatsApp or Email.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Classes;
