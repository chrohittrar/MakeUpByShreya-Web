import { useState } from "react";
import classbg from "../assets/classbg.png";

const Classes = () => {
  const [mode, setMode] = useState<"online" | "offline">("offline");
  const [showDetails, setShowDetails] = useState(false);

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

  const sessionDetails = [
    mode === "offline" ? "In-person training" : "Live interactive session",
    "One-to-one guidance",
    mode === "offline" ? "Hands-on learning" : "Flexible access",
  ];

  const classPrice = mode === "online" ? "1,999" : "10,000";

  return (
    <section className="overflow-hidden bg-[#FCF8F5] font-sans text-[#2B1E14]">
      <div className="bg-[#FCF8F5]">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 sm:px-10 md:pb-28 lg:px-16 lg:pt-32">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div className="order-1 max-w-xl">
              <p className="mb-14 flex items-center gap-3 text-[10px] uppercase tracking-[0.34em] text-[#867A74]">
                <span className="h-px w-8 bg-[#C98963]" />
                With Shreya Singh
              </p>

              <h1 className="font-cursive text-3xl leading-[0.96] text-[#2B1E14] sm:text-5xl md:text-6xl">
                A little ritual
              </h1>
                <span className="mt-1 block text-3xl tracking-tight text-[#C98963] font-accent sm:text-4xl md:text-5xl">
                  in self expression.
                </span>

              <p className="mt-8 max-w-lg text-[15px] leading-8 text-[#867A74] md:text-base">
                A private makeup lesson designed around your features, your style,
                and the routines you will genuinely love to return to.
              </p>

              <div className="mt-10 border-y border-[#8C8478]/20 py-5">
                <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#867A74]">
                  Choose your setting
                </p>
                <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm">
                  {(["offline", "online"] as const).map((option) => {
                    const isSelected = mode === option;

                    return (
                      <button
                        key={option}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => setMode(option)}
                        className={`border px-4 py-2 transition-colors duration-300 ${
                          isSelected
                            ? "border-[#C98963] bg-[#C98963] text-[#FCF8F5]"
                            : "border-[#8C8478] text-[#2B1E14] hover:border-[#C98963]"
                        }`}
                      >
                        {option === "offline" ? "Offline" : "Online"}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {sessionDetails.map((detail) => (
                  <p
                    key={detail}
                    className="border-l border-[#C98963] pl-3 text-s leading-5 text-[#867A74]"
                  >
                    {detail}
                  </p>
                ))}
              </div>

              <div className="mt-9 flex items-end justify-between border-t border-[#8C8478]/20 pt-5">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.28em] text-[#867A74]">
                    Private lesson
                  </p>
                  <p className="mt-1 text-xs text-[#867A74]">
                    {mode === "online" ? "Online Class" : "Offline Class"}
                  </p>
                </div>
                <p className="font-accent text-3xl text-[#2B1E14]">₹{classPrice}</p>
              </div>
            </div>
                  <img
                    src={classbg}
                    alt="Shreya Singh"
                    className="h-full w-full object-contain object-bottom p-0"
                  />
          </div>
        </div>
      </div>

      <div className="bg-[#F3ECE7]">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center sm:px-10 md:py-16">
          <p className="text-[10px] uppercase tracking-[0.34em] text-[#867A74]">
            Thinking of joining?
          </p>
          <h2 className="mt-4 font-accent text-3xl leading-tight text-[#2B1E14] sm:text-4xl">
            See exactly what your private class includes.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#867A74]">
            Explore the techniques, guidance, and support that make the session
            personal to you.
          </p>
          <button
            type="button"
            aria-expanded={showDetails}
            aria-controls="class-details"
            onClick={() => setShowDetails((current) => !current)}
            className="mt-7 inline-flex items-center gap-3 border border-[#C98963] px-6 py-3 text-sm font-medium text-[#2B1E14] transition duration-300 hover:bg-[#C98963] hover:text-[#FCF8F5]"
          >
            {showDetails ? "Done Exploring" : "Explore"}
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${
                showDetails ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>

      {showDetails && (
        <div id="class-details" className="bg-[#FCF8F5]">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-24 lg:px-16">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-[#867A74]">
                  The class edit
                </p>
                <h2 className="max-w-sm font-accent text-4xl leading-[0.95] tracking-tight text-[#2B1E14] sm:text-5xl">
                  The techniques that make a difference.
                </h2>
              </div>

              <div className="grid gap-x-12 border-t border-[#8C8478]/35 sm:grid-cols-2">
                {learnItems.map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-5 border-b border-[#8C8478]/35 py-5"
                  >
                    <span className="pt-0.5 font-accent text-lg text-[#C98963]">
                      0{index + 1}.
                    </span>
                    <p className="max-w-[220px] text-s leading-6 text-[#867A74]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#F3ECE7]">
            <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-28 lg:px-16">
              <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                <div className="lg:pt-3">
                  <p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-[#867A74]">
                    A considered experience
                  </p>
                  <h2 className="max-w-sm font-accent text-4xl leading-[0.95] tracking-tight text-[#2B1E14] sm:text-5xl">
                  Learn slowly, wear it beautifully.
                </h2>
                </div>

                <div className="divide-y divide-[#8C8478]/35 border-y border-[#8C8478]/35">
                  {experienceItems.map((item, index) => (
                    <article
                      key={item.title}
                      className="grid gap-3 py-7 sm:grid-cols-[64px_1fr_1.25fr] sm:gap-6"
                    >
                      <span className="font-accent text-2xl text-[#C98963]">
                        0{index + 1}.
                      </span>
                      <h3 className="font-accent text-2xl leading-tight text-[#2B1E14]">
                        {item.title}
                      </h3>
                      <p className="max-w-sm text-s leading-6 text-[#867A74]">
                        {item.text}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-[#F0DED2] px-6 py-20 text-[#2B1E14] sm:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-5xl items-end gap-12 lg:grid-cols-[1fr_auto] lg:gap-24">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-[#867A74]">
              Your private session
            </p>
            <h2 className="font-accent text-4xl leading-none sm:text-5xl">
              Ready to make it yours?
            </h2>
            <p className="mt-5 max-w-md text-s leading-7 text-[#867A74]">
              A personalized one-on-one experience, made to leave you feeling
              confident in every brushstroke.
            </p>
            {mode === "online" && (
              <p className="mt-5 max-w-md border-l border-[#8C8478] pl-4 text-xs leading-5 text-[#867A74]">
                Your meeting link and a simple pre-class checklist will be
                shared via WhatsApp or email after registration.
              </p>
            )}
          </div>

          <div className="lg:text-right">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#867A74]">
              {mode === "online" ? "Online class" : "Offline class"}
            </p>
            <p className="mt-2 font-accent text-5xl tracking-tight sm:text-6xl">₹{classPrice}</p>
            <p className="mt-2 text-xs text-[#867A74]">All-inclusive private lesson</p>
            <button
              type="button"
              className="group mt-7 inline-flex items-center gap-3 bg-[#2B1E14] px-7 py-3.5 text-sm font-medium text-[#FCF8F5] transition duration-300 hover:bg-[#C98963]"
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
              Book your slot
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M7 7h10v10" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
