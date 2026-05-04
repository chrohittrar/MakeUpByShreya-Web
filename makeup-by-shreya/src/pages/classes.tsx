import { useState } from "react";
import classbg from "../assets/classbg.jpeg";

const Classes = () => {
  const [mode, setMode] = useState<"online" | "offline">("offline");

  return (
    <section className="bg-white">
      {/* ---------------- HERO ---------------- */}
      <div className="grid md:grid-cols-2 min-h-[90vh]">
        {/* IMAGE */}
        <div className="relative h-[60vh] md:h-full">
          <img
            src={classbg}
            alt="Makeup Class"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16">
          <p className="text-xs tracking-widest text-gray-400 mb-3">
            WITH SHREYA SINGH
          </p>

          <h1 className="text-4xl md:text-6xl font-accent text-primaryColor mb-6 leading-tight">
            Self One-on-One
            <span className="block">Makeup Class</span>
          </h1>

          <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
            Master the art of your own face with a personalized, live &
            interactive experience designed for every skill level.
          </p>

          {/* TOGGLE */}
          <div className="flex gap-6 mb-8 text-sm">
            <button
              onClick={() => setMode("offline")}
              className={`${
                mode === "offline"
                  ? "text-primaryColor border-b border-primaryColor"
                  : "text-gray-400"
              }`}
            >
              Offline
            </button>

            <button
              onClick={() => setMode("online")}
              className={`${
                mode === "online"
                  ? "text-primaryColor border-b border-primaryColor"
                  : "text-gray-400"
              }`}
            >
              Online
            </button>
          </div>

          <p className="text-sm text-gray-500">
            {mode === "offline"
              ? "In-person · Personalized · Hands-on"
              : "Live online · Interactive · Flexible"}
          </p>

          {/* WHAT YOU WILL LEARN */}
          <div className="mt-10 space-y-4 text-sm text-gray-600">
            <p className="text-xs tracking-widest text-gray-400 mb-2">
              WHAT YOU WILL LEARN
            </p>

            <ul className="space-y-2">
              <li>• Step-by-step full face routine</li>
              <li>• Two signature eye looks (day → glam)</li>
              <li>• Skin prep for flawless base</li>
              <li>• Product audit (what works for you)</li>
              <li>• Pro tips & mistake correction</li>
              <li>• Personalized product recommendations</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------- EXPERIENCE ---------------- */}
      <div className="py-24 bg-[#FBF6F2]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-accent text-primaryColor mb-12">
            Class Experience
          </h2>

          <div className="space-y-6 text-gray-600 text-sm max-w-2xl mx-auto">
            <p>• Theory + Practice — not just learning, but doing</p>
            <p>• Live guided session — practice in real time</p>
            <p>• Dedicated doubt solving — no question is too small</p>
          </div>
        </div>
      </div>

      {/* ---------------- PRICING ---------------- */}
      <div className="py-20 text-center">
        <p className="text-xs tracking-widest text-gray-400 mb-2">INVESTMENT</p>

        <h3 className="text-5xl md:text-6xl font-accent text-primaryColor mb-3">
          ₹{mode === "online" ? "1,999" : "10,000"}
        </h3>
        <p className="text-gray-500 mb-2 text-sm">
          All-inclusive for a personalized one-on-one session
        </p>

        <p className="italic text-primaryColor mb-6">Ready to Glow?</p>

        <button
          className="px-10 py-3 bg-primaryColor text-white rounded-xl hover:opacity-90 transition"
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
          Book Your Slot
        </button>

        {mode === "online" && (
          <p className="text-xs text-gray-400 mt-6 max-w-md mx-auto">
            Once you register, the meeting link and a small pre-class checklist
            will be shared with you via WhatsApp/Email.
          </p>
        )}
      </div>
    </section>
  );
};

export default Classes;
