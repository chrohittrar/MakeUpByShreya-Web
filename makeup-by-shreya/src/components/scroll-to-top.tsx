import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation(); // 👈 important

  /* ---------------- SCROLL BUTTON VISIBILITY ---------------- */
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  /* ---------------- AUTO SCROLL ON ROUTE CHANGE ---------------- */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // 🔥 use "smooth" if you want animation
    });
  }, [pathname]);

  /* ---------------- MANUAL CLICK ---------------- */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
    fixed right-6 z-50
    bottom-20 md:bottom-6

    w-12 h-12
    rounded-full
    flex items-center justify-center

    bg-white/60 backdrop-blur-lg
    border border-white/40
    text-brandGray

    shadow-lg
    transition-all duration-500 ease-out

    hover:bg-brandGray
    hover:text-white
    hover:-translate-y-1

    ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
  `}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
