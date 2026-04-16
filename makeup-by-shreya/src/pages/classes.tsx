import { useState } from "react";
import { Calendar, Clock, Users, Award, Sparkles, Monitor, MapPin, CheckCircle2, Star, PlayCircle, Download, MessageCircle } from "lucide-react";

const Classes = () => {
  const [mode, setMode] = useState<"online" | "offline">("offline");

  const features = {
    offline: [
      { icon: MapPin, text: "In-person training at our studio" },
      { icon: Users, text: "Small batches (max 8 students)" },
      { icon: Calendar, text: "2-day intensive workshop" },
      { icon: Award, text: "Hands-on practice with live models" },
    ],
    online: [
      { icon: Monitor, text: "Live interactive sessions" },
      { icon: PlayCircle, text: "Lifetime access to recordings" },
      { icon: MessageCircle, text: "Direct mentor support via WhatsApp" },
      { icon: Download, text: "Downloadable workbooks & guides" },
    ]
  };

  const curriculum = {
    offline: [
      { day: "Day 01", title: "Foundation & Fundamentals", topics: ["Skin prep & analysis", "Base perfection techniques", "Product knowledge", "Eye structure & blending"] },
      { day: "Day 02", title: "Professional Application", topics: ["Bridal & editorial looks", "Corrections & contouring", "Client workflow", "Portfolio building"] }
    ],
    online: [
      { module: "Module 01", title: "Theory & Techniques", topics: ["Skin science", "Color theory", "Product selection", "Tool mastery"] },
      { module: "Module 02", title: "Live Demonstrations", topics: ["Natural to glam transformations", "Eye techniques deep dive", "Bridal specials", "Q&A sessions"] },
      { module: "Module 03", title: "Business & Career", topics: ["Client acquisition", "Pricing strategies", "Portfolio creation", "Social media growth"] }
    ]
  };

  return (
    <section className="bg-gradient-to-b from-white to-[#FBF6F2]">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 py-2 rounded-full mb-6">
              <span className="text-xs tracking-widest text-primaryColor uppercase">
                Professional Makeup Education
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-accent text-primaryColor leading-tight mb-6">
              Become a
              <span className="block mt-2">
                Successful Makeup Artist
              </span>
            </h1>
            
            <p className="text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              A thoughtfully curated learning experience designed to elevate your artistry, 
              refine your technique, and build a strong professional foundation.
            </p>

            {/* Mode Toggle - Modern Switch Design */}
            <div className="inline-flex bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100/10 mb-8">
              <button
                onClick={() => setMode("offline")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  mode === "offline"
                    ? "bg-primaryColor text-white shadow-lg shadow-primaryColor/20"
                    : "text-gray-600 hover:text-primaryColor"
                }`}
              >
                <MapPin className="w-4 h-4" />
                Offline Class
              </button>
              <button
                onClick={() => setMode("online")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  mode === "online"
                    ? "bg-primaryColor text-white shadow-lg shadow-primaryColor/20"
                    : "text-gray-600 hover:text-primaryColor"
                }`}
              >
                <Monitor className="w-4 h-4" />
                Online Class
              </button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {features[mode].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
                  <feature.icon className="w-3.5 h-3.5 text-primaryColor" />
                  <span className="text-xs text-gray-600">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primaryColor/20 to-transparent rounded-3xl blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
              alt="Masterclass"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[400px] lg:h-[500px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Star className="w-5 h-5 text-green-600 fill-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold">4.9 Rating</p>
                  <p className="text-xs text-gray-500">500+ students trained</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHAT YOU'LL LEARN - Minimalist Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest text-primaryColor mb-3 uppercase">
            THE SIGNATURE OUTCOME
          </p>
          <h2 className="text-3xl sm:text-4xl font-accent text-primaryColor">
            What You Will Learn
          </h2>
          <div className="w-20 h-1 bg-primaryColor/30 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Card */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2"
              alt="Signature look"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Learning Points */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              This class focuses on creating timeless, skin-focused makeup looks
              with attention to detail, texture, and finish.
            </p>
            <div className="space-y-3">
              {[
                "Skin prep & flawless base",
                "Eye structure & blending mastery",
                "Bridal & editorial techniques",
                "Client handling & hygiene"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primaryColor/10 flex items-center justify-center mt-0.5 group-hover:bg-primaryColor/20 transition">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primaryColor" />
                  </div>
                  <span className="text-gray-700">• {item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PROGRAM FLOW - Modern Cards */}
      <div className="bg-[#4A2F2A] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-accent mb-3">
              {mode === "offline" ? "2-Day Masterclass Flow" : "Online Program Flow"}
            </h2>
            <p className="text-white/70 text-sm">
              {mode === "offline" 
                ? "Immersive hands-on learning experience" 
                : "Self-paced with live mentorship"}
            </p>
          </div>

          <div className={`grid ${mode === "online" ? "md:grid-cols-3" : "md:grid-cols-2"} gap-6`}>
            {curriculum[mode].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-lg font-bold">{idx + 1}</span>
                  </div>
                  <div>
                    <p className="text-xs text-white/70">
                      {mode === "offline" ? (item as any).day : (item as any).module}
                    </p>
                    <h3 className="text-xl font-accent">{item.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {item.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} className="text-white/80 text-sm flex items-start gap-2">
                      <span className="text-white/50">•</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHO SHOULD ATTEND - Minimalist */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-widest text-primaryColor mb-3 uppercase">
              PERFECT FOR
            </p>
            <h2 className="text-3xl sm:text-4xl font-accent text-primaryColor mb-6">
              Who Should Attend
            </h2>
            <div className="space-y-3">
              {[
                "Aspiring makeup artists",
                "Artists looking to upskill professionally",
                "Bridal / editorial focused learners",
                "Anyone serious about makeup as a career"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primaryColor/10 flex items-center justify-center group-hover:bg-primaryColor/20 transition">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primaryColor" />
                  </div>
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primaryColor/5 to-transparent rounded-2xl p-8 border border-primaryColor/10">
            <div className="text-center">
              <p className="text-sm text-primaryColor font-semibold mb-2">What You'll Get</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-center">
                  <Award className="w-8 h-8 text-primaryColor mx-auto mb-2" />
                  <p className="text-sm font-semibold">Certificate</p>
                  <p className="text-xs text-gray-500">Upon completion</p>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-primaryColor mx-auto mb-2" />
                  <p className="text-sm font-semibold">Flexible</p>
                  <p className="text-xs text-gray-500">Learning schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRICING SECTION - Clean & Modern */}
      <div className="bg-[#F3E8E2] py-20 md:py-24">
        <div className="max-w-md mx-auto text-center px-4 sm:px-6">
          <p className="text-xs tracking-widest text-gray-400 mb-2 uppercase">
            CLASS FEES
          </p>
          
          <h3 className="text-5xl font-accent text-primaryColor mb-6">
            ₹{mode === "offline" ? "25,000" : "12,000"}
          </h3>
          
          <div className="space-y-3 max-w-sm mx-auto mb-8">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Inclusive of learning materials</span>
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Certification included</span>
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                {mode === "offline" ? "Professional kit provided" : "Lifetime access"}
              </span>
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            </div>
          </div>

          <button className="w-full py-4 rounded-xl bg-primaryColor text-white font-semibold hover:opacity-90 transition-all duration-300 transform hover:-translate-y-0.5">
            Enroll Now
          </button>
          
          <p className="text-xs text-gray-400 mt-4">
            Limited seats available • Early bird discount available
          </p>
        </div>
      </div>
    </section>
  );
};

export default Classes;