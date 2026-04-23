import { useState } from "react";
import classimg from "../assets/classimg.png";

const Classes = () => {
  const [mode, setMode] = useState<"online" | "offline">("offline");

  const curriculum = {
    offline: [
      {
        label: "Day 01",
        title: "Foundation",
        topics: ["Skin prep", "Base", "Blending", "Color theory"],
      },
      {
        label: "Day 02",
        title: "Application",
        topics: ["Bridal look", "Contouring", "Client work", "Portfolio"],
      },
    ],
    online: [
      {
        label: "Module 01",
        title: "Theory",
        topics: ["Skin science", "Tools", "Product selection"],
      },
      {
        label: "Module 02",
        title: "Demo",
        topics: ["Looks creation", "Eye mastery", "Q&A"],
      },
      {
        label: "Module 03",
        title: "Career",
        topics: ["Clients", "Pricing", "Growth"],
      },
    ],
  };

  return (
    <section className="bg-white ">
      {/* HERO SPLIT */}
      <div className="grid md:grid-cols-2 min-h-[90vh]">
        {/* LEFT IMAGE */}
        <div className="relative h-[60vh] md:h-full">
          <img src={classimg} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16">
          <p className="text-xs tracking-widest text-gray-400 mb-3">
            MASTERCLASS
          </p>

          <h1 className="text-4xl md:text-6xl font-accent text-primaryColor mb-6 leading-tight">
            Learn the Art of
            <span className="block">Makeup</span>
          </h1>

          <p className="text-gray-500 mb-8 max-w-md">
            A refined program designed to elevate your artistry and build a
            confident professional journey.
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
              ? "In-person · 2 days · Hands-on"
              : "Online · Flexible · Lifetime access"}
          </p>
        </div>
      </div>

      {/* FLOW SECTION (EDITORIAL STRIP) */}
      <div className="py-24 bg-[#FBF6F2]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-accent text-primaryColor mb-16 text-center">
            {mode === "offline" ? "2-Day Flow" : "Program Flow"}
          </h2>

          <div className="space-y-16">
            {curriculum[mode].map((item, idx) => (
              <div key={idx} className="grid md:grid-cols-2 gap-8 items-center">
                {/* LEFT TITLE */}
                <div className="text-center md:text-left">
                  <p className="text-xs text-gray-400 mb-2">{item.label}</p>

                  <h3 className="text-2xl md:text-3xl font-accent text-primaryColor">
                    {item.title}
                  </h3>
                </div>

                {/* RIGHT CONTENT */}
                <ul className="text-gray-600 space-y-2 text-center md:text-left">
                  {item.topics.map((t, i) => (
                    <li key={i}>• {t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRICING STRIP */}
      <div className="py-20 text-center">
        <p className="text-xs tracking-widest text-gray-400 mb-2">INVESTMENT</p>

        <h3 className="text-5xl md:text-6xl font-accent text-primaryColor mb-4">
          ₹{mode === "offline" ? "25,000" : "12,000"}
        </h3>

        <p className="text-gray-500 mb-8 text-sm">
          Certification · Materials · Guided training
        </p>

        <button
          className="px-10 py-3 bg-primaryColor text-white rounded-xl"
          onClick={() =>
            window.open(
              "https://wa.me/917247874192?text=" +
                encodeURIComponent(
                  "Hi, I want to enroll for your makeup class.",
                ),
              "_blank",
            )
          }
        >
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default Classes;
