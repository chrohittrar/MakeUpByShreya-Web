import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
          onClick={() => {
            document
              .getElementById("home")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-zinc-700 font-medium">
          <li className="cursor-pointer hover:text-black transition">
            Portfolio
          </li>
          <li
            className="cursor-pointer hover:text-black transition"
            onClick={() => {
              document
                .getElementById("about-me")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About Me
          </li>
          <li
            className="cursor-pointer hover:text-black transition"
            onClick={() => {
              document
                .getElementById("testimonials")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            From Clients
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
        <ul className="flex flex-col items-center py-4 space-y-4 text-zinc-700 font-medium">
          <li onClick={() => setOpen(false)}>Portfolio</li>
          <li
            className="cursor-pointer hover:text-black transition"
            onClick={() => {
              document
                .getElementById("about-me")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About Me
          </li>
          <li
            className="cursor-pointer hover:text-black transition"
            onClick={() => {
              document
                .getElementById("testimonials")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            From Clients
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
