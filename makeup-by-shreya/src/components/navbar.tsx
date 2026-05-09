import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);

  /* ---------------- CLOSE MENU ON ROUTE CHANGE ---------------- */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* ---------------- PREVENT BODY SCROLL ---------------- */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "PORTFOLIO", path: "/portfolio" },
    { label: "ABOUT", path: "/about" },
    { label: "APPOINTMENTS", path: "/book-appointment" },
    { label: "CLASSES", path: "/classes" },
    { label: "CONTACT", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-[999] h-16">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-xl " />

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* ---------------- MOBILE MENU BUTTON ---------------- */}
          <button
            onClick={() => setOpen(true)}
            className="
    md:hidden
    w-11 h-11
    flex items-center justify-center
    active:scale-95
    transition
  "
          >
            {/* BLACK HAMBURGER ICON */}
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="4" width="24" height="2.8" rx="1.4" fill="black" />
              <rect y="10.5" width="24" height="2.8" rx="1.4" fill="black" />
              <rect y="17" width="24" height="2.8" rx="1.4" fill="black" />
            </svg>
          </button>

          {/* ---------------- MOBILE CENTER LOGO ---------------- */}
          <div className="md:hidden absolute left-1/2 -translate-x-1/2">
            <img
              src={logo}
              alt="Logo"
              className="h-10 cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          {/* ---------------- DESKTOP LOGO ---------------- */}
          <img
            src={logo}
            alt="Logo"
            className="hidden md:block h-10 cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* ---------------- DESKTOP MENU ---------------- */}
          <ul className="hidden md:flex items-center gap-10 text-sm tracking-wide">
            {navItems.slice(1).map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    relative
                    transition-all duration-300

                    ${
                      isActive(item.path)
                        ? "text-primaryColor"
                        : "text-brandGray hover:text-primaryColor"
                    }
                  `}
                >
                  {item.label.toUpperCase()}

                  {/* UNDERLINE */}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[1px]
                      bg-primaryColor
                      transition-all duration-300

                      ${
                        isActive(item.path)
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* ---------------- RIGHT EMPTY SPACE ---------------- */}
          <div className="md:hidden w-11" />
        </div>
      </nav>

      {/* ================= FULLSCREEN MOBILE MENU ================= */}
      <div
        className={`
          md:hidden

          fixed inset-0 z-[1000]

          transition-all duration-500

          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setOpen(false)}
          className="
            absolute inset-0
            bg-black/40
            backdrop-blur-lg
          "
        />

        {/* MENU PANEL */}
        <div
          className={`
            absolute top-0 left-0

            w-full h-full

            bg-[#FBF6F2]

            flex flex-col

            transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]

            ${open ? "translate-y-0" : "-translate-y-full"}
          `}
        >
          {/* TOP BAR */}
          <div className="h-16 px-5 flex items-center justify-between border-b border-black/5">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="
                w-11 h-11

                flex items-center justify-center

                active:scale-95
                transition
              "
            >
              <svg
                className="w-5 h-5 text-brandGray"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6L18 18M18 6L6 18"
                />
              </svg>
            </button>

            {/* LOGO */}
            <img
              src={logo}
              alt="Logo"
              className="h-10 cursor-pointer"
              onClick={() => {
                navigate("/");
                setOpen(false);
              }}
            />

            {/* EMPTY */}
            <div className="w-11" />
          </div>

          {/* MENU ITEMS */}
          <div className="flex-1 flex flex-col justify-center px-8">
            <div className="space-y-7">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`
                    group

                    flex items-center justify-between

                    py-2

                    border-b border-black/5

                    transition-all duration-500

                    ${
                      isActive(item.path)
                        ? "text-primaryColor"
                        : "text-brandGray"
                    }
                  `}
                  style={{
                    transitionDelay: `${index * 60}ms`,
                  }}
                >
                  {/* TEXT */}
                  <span
                    className="
                      text-1xl
                      font-accent
                      tracking-tight
                    "
                  >
                    {item.label}
                  </span>

                  {/* ARROW */}
                  <svg
                    className="
                      w-5 h-5

                      transition-all duration-300

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
                </Link>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <div className="pb-3 text-center">
            <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase">
              Makeup by Shreya
            </p>
          </div>


          {/* BOTTOM */}
          <div className="text-center space-y-3 mb-6">
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

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
