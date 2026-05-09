import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { label: "Portfolio", path: "/portfolio" },
    { label: "About", path: "/about" },
    { label: "Appointments", path: "/book-appointment" },
    { label: "Classes", path: "/classes" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#FBF6F2] pt-24 pb-10">
      {/* ================= BACKGROUND GLOW ================= */}
      <div
        className="
          absolute
          top-0 left-1/2
          -translate-x-1/2

          w-[700px]
          h-[300px]

          bg-primaryColor/5

          blur-3xl
          rounded-full
        "
      />

      {/* ================= MAIN WRAPPER ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
          {/* ================= BRAND ================= */}
          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="Makeup by Shreya"
              className="h-10 mx-auto md:mx-0 mb-6 cursor-pointer"
              onClick={() => navigate("/")}
            />

            <p className="text-sm leading-relaxed text-gray-500 max-w-sm mx-auto md:mx-0">
              Enhancing natural beauty through timeless elegance,
              refined artistry, and luxurious makeup experiences
              designed for your most meaningful moments.
            </p>

            {/* MINI TAGLINE */}
            <p
              className="
                mt-6

                text-[11px]

                tracking-[0.3em]

                uppercase

                text-primaryColor/70
              "
            >
              Bridal • Editorial • Glam
            </p>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="text-center">
            <h4
              className="
                text-[11px]

                tracking-[0.35em]

                uppercase

                mb-7

                text-gray-400
              "
            >
              Quick Links
            </h4>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="
                    group

                    cursor-pointer

                    text-[15px]
                    text-gray-600

                    transition-all duration-300

                    hover:text-primaryColor
                  "
                >
                  <span
                    className="
                      relative

                      inline-block
                    "
                  >
                    {item.label}

                    <span
                      className="
                        absolute
                        left-0
                        -bottom-1

                        w-0
                        h-[1px]

                        bg-primaryColor

                        transition-all duration-300

                        group-hover:w-full
                      "
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONNECT ================= */}
          <div className="text-center md:text-right">
            <h4
              className="
                text-[11px]

                tracking-[0.35em]

                uppercase

                mb-7

                text-gray-400
              "
            >
              Connect
            </h4>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center md:justify-end gap-4">
              {/* YOUTUBE */}
              <a
                href="https://www.youtube.com/@Makeupby__shreya"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group

                  w-11 h-11

                  flex items-center justify-center

                  bg-white/70
                  backdrop-blur-xl

                  border border-white/50

                  shadow-sm

                  transition-all duration-300

                  hover:bg-primaryColor
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <svg
                  className="
                    w-5 h-5

                    fill-brandGray

                    group-hover:fill-white

                    transition
                  "
                  viewBox="0 0 24 24"
                >
                  <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C16.8 2.5 12 2.5 12 2.5h0s-4.8 0-8.6.3c-.4.1-1.3.1-2.1 1C.7 4.5.5 6.2.5 6.2S0 8.2 0 10.3v1.9c0 2.1.5 4.1.5 4.1s.2 1.7.8 2.4c.8.9 1.9.9 2.4 1 1.7.2 7.3.3 8.3.3s4.8 0 8.6-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.5-2 .5-4.1v-1.9c0-2.1-.5-4.1-.5-4.1ZM9.5 14.5v-5l5 2.5-5 2.5Z" />
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/makeupby__shreya"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group

                  w-11 h-11

                  flex items-center justify-center

                  bg-white/70
                  backdrop-blur-xl

                  border border-white/50

                  shadow-sm

                  transition-all duration-300

                  hover:bg-primaryColor
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <svg
                  className="
                    w-5 h-5

                    fill-brandGray

                    group-hover:fill-white

                    transition
                  "
                  viewBox="0 0 24 24"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10Zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5Zm0 7.5A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm4.8-7.9a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1Z" />
                </svg>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/917247874192"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group

                  w-11 h-11

                  flex items-center justify-center

                  bg-white/70
                  backdrop-blur-xl

                  border border-white/50

                  shadow-sm

                  transition-all duration-300

                  hover:bg-primaryColor
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <svg
                  className="
                    w-5 h-5

                    fill-brandGray

                    group-hover:fill-white

                    transition
                  "
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.5 14.6c-.2.6-1.2 1.1-1.7 1.2-.5.1-1.1.1-1.8-.1-.4-.1-.9-.3-1.6-.6-2.7-1.2-4.4-4-4.5-4.2-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-2 1-2.3.3-.3.7-.4 1-.4h.7c.2 0 .5-.1.7.5.2.6.8 2.1.9 2.2.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.3.4-.5.6-.2.2-.4.4-.2.8.2.4.9 1.5 2 2.4 1.4 1.1 2.6 1.4 3 .1.4-.3.6-.7.8-1 .2-.3.4-.3.7-.2.3.1 1.9.9 2.2 1.1.3.2.5.3.5.5 0 .2 0 .7-.2 1.3Z" />
                </svg>
              </a>
            </div>

            {/* CONTACT TEXT */}
            <div className="mt-7 space-y-2 text-sm text-gray-500">
              <p>Delhi, India</p>
              <p>+91 7247874192</p>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-14 border-t border-gray-200/80" />

        {/* ================= BOTTOM ================= */}
        <div className="text-center space-y-5">
          {/* POLICY LINKS */}
          <div
            className="
              flex items-center justify-center

              gap-4

              text-[11px]

              text-gray-400

              uppercase

              tracking-[0.2em]
            "
          >
            <Link
              to="/privacy-policy"
              className="hover:text-primaryColor transition"
            >
              Privacy Policy
            </Link>

            <span className="text-gray-300">•</span>

            <Link
              to="/terms-of-use"
              className="hover:text-primaryColor transition"
            >
              Terms of Use
            </Link>
          </div>

          {/* COPYRIGHT */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Makeup by Shreya.
            All rights reserved.
          </p>

          {/* DEVELOPER */}
          <p className="text-xs text-gray-400">
            Designed & Developed by{" "}
            <a
              href="https://sevendecoder.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-primaryColor

                transition-all duration-300

                hover:tracking-wide
                hover:underline
              "
            >
              Sevendecoder 🎧
            </a>
          </p>

          {/* VERSION */}
          <p
            className="
              text-[10px]

              tracking-[0.3em]

              uppercase

              text-gray-300
            "
          >
            Version 3.0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;