import { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-50 h-16">
      {/* BLUR GRADIENT LAYER */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-lg pointer-events-none" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-2 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <img
          src={logo}
          alt="MyApp Logo"
          className="h-10 w-auto object-contain cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link
              to="/portfolio"
              className="hover:text-primaryColor transition"
            >
              Portfolio
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-primaryColor transition">
              About
            </Link>
          </li>

          <li>
            <Link
              to="/book-appointment"
              className="hover:text-primaryColor transition"
            >
              Appointments
            </Link>
          </li>

          {/* CLASSES WITH ARROW */}
          <li>
            <Link
              to="/classes"
              className="
        group flex items-center gap-1
        text-primaryColor
        font-medium
        transition
      "
            >
              Classes
              <svg
                className="
          w-4 h-4
          transition-transform duration-300 ease-out
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
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-zinc-700"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-60" : "max-h-0"
        } bg-white/60 backdrop-blur-lg`}
      >
        <ul className="flex flex-col items-center py-4 space-y-5 text-primaryColor font-medium">
          <li onClick={() => setOpen(false)}>
            <Link to="/portfolio">Portfolio</Link>
          </li>

          <li onClick={() => setOpen(false)}>
            <Link to="/about">About</Link>
          </li>

          <li onClick={() => setOpen(false)}>
            <Link to="/book-appointment">Appointments</Link>
          </li>

          {/* CLASSES WITH ARROW */}
          <li onClick={() => setOpen(false)}>
            <Link to="/classes" className="flex items-center gap-2">
              Classes
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
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
