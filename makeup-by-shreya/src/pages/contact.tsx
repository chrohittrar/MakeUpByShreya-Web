const Contact = () => {

  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[#FBF6F2]

        py-24 md:py-32
      "
    >
      {/* SOFT BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-20 left-1/2
          -translate-x-1/2

          w-[500px]
          h-[500px]

          rounded-full

          bg-primaryColor/5

          blur-3xl
        "
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ================= MAIN GRID ================= */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16">
          {/* ================= LEFT PANEL ================= */}
          <div
            className="
              relative

              bg-white/70
              backdrop-blur-xl

              border border-white/40

              shadow-[0_10px_40px_rgba(0,0,0,0.04)]

              p-8 md:p-10
            "
          >
            {/* SMALL LABEL */}
            <p className="text-[11px] tracking-[0.3em] uppercase text-gray-400 mb-5">
              LET’S CONNECT
            </p>

            {/* TITLE */}
            <h3
              className="
                text-3xl
                md:text-4xl

                font-accent
                text-primaryColor

                leading-tight

                mb-6
              "
            >
              Beauty begins
              <span className="block">with conversation.</span>
            </h3>

            {/* TEXT */}
            <p className="text-gray-600 leading-relaxed mb-10">
              Whether you’re preparing for your special day, booking a glam
              session, or joining a personalized makeup class — feel free to
              reach out anytime.
            </p>

            {/* CONTACT ITEMS */}
            <div className="space-y-8">
              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-11 h-11

                    bg-primaryColor/10

                    flex items-center justify-center

                    text-primaryColor
                  "
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.2a1 1 0 01.98.804l.74 3.7a1 1 0 01-.27.92l-1.62 1.62a16 16 0 006.36 6.36l1.62-1.62a1 1 0 01.92-.27l3.7.74A1 1 0 0121 15.8V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 mb-1">
                    Phone
                  </p>

                  <a
                    href="tel:+917247874192"
                    className="text-gray-700 hover:text-primaryColor transition"
                  >
                    +91 72478 74192
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-11 h-11

                    bg-primaryColor/10

                    flex items-center justify-center

                    text-primaryColor
                  "
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12H8m8-4H8m-2 8h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 mb-1">
                    Email
                  </p>

                  <p className="text-gray-700">makeupbyshreyasingh@gmail.com</p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-11 h-11

                    bg-primaryColor/10

                    flex items-center justify-center

                    text-primaryColor
                  "
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 mb-1">
                    Location
                  </p>

                  <p className="text-gray-700">Delhi, India</p>
                </div>
              </div>

              {/* INSTAGRAM */}
              <div className="flex items-start gap-4">
                <div
                  className="
      w-11 h-11
      bg-primaryColor/10
      flex items-center justify-center
      text-primaryColor
    "
                >
                  {/* Instagram Icon */}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 mb-1">
                    Instagram
                  </p>

                  <a
                    href="https://www.instagram.com/artistryby__shreya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
        inline-flex
        items-center
        gap-2

        text-gray-700
        hover:text-primaryColor

        transition-colors
        duration-300
      "
                  >
                    <span>
                      @artistryby_shreya
                    </span>

                    {/* Arrow Icon */}
                    <svg
                      className="w-4 h-4"
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="text-center mt-20">
          <p className="text-gray-500 mb-5">Prefer a quicker response?</p>

          <a
            href="https://wa.me/917247874192"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3

              px-8 py-4

              border border-primaryColor

              text-primaryColor

              hover:bg-primaryColor
              hover:text-white

              transition-all duration-300
            "
          >
            Chat on WhatsApp
            <svg
              className="w-4 h-4"
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
