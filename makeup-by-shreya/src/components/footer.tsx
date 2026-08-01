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
    <footer className="relative overflow-hidden bg-[#f3eee9] pt-12 pb-10">
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

          
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-10 border-t border-gray-200/80" />

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

              text-gray-400
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