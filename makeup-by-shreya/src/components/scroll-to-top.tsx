import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  /* ---------------- BUTTON VISIBILITY ---------------- */
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  /* ---------------- AUTO SCROLL ON PAGE CHANGE ---------------- */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [pathname]);

  /* ---------------- CLICK ACTION ---------------- */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        group

        fixed
        right-5
        bottom-8 
        z-[999]

        w-12 h-12

        overflow-hidden


        bg-white/70
        backdrop-blur-2xl

        border border-black/5

        flex items-center justify-center

        transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

        hover:bg-primaryColor
        hover:-translate-y-1

        active:scale-95

        ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-5 scale-90 pointer-events-none"
        }
      `}
    >

      {/* ICON */}
      <svg
        className="
          relative z-10

          w-5 h-5

          text-brandGray

          transition-all duration-500

          group-hover:text-white
          group-hover:-translate-y-[2px]
        "
        fill="none"
        stroke="currentColor"
        strokeWidth={2.4}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 15L12 9L18 15"
        />
      </svg>

      {/* BORDER GLOW */}
      <div
        className="
          absolute inset-0


          border border-white/40

          opacity-60
        "
      />
    </button>
  );
};

export default ScrollToTop;