const Loader = () => {
  return (
    <div
      className="
        fixed inset-0 z-[9999]

        flex items-center justify-center

        bg-[#fdf9f7]
      "
    >
      {/* SOFT GLOW */}
      <div
        className="
          absolute

          w-[280px]
          h-[280px]

          rounded-full

          bg-primaryColor/5

          blur-3xl
        "
      />

      {/* CONTENT */}
      <div className="relative flex flex-col items-center">
        {/* MINIMAL ICON */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          {/* OUTER RING */}
          <div
            className="
              absolute inset-0

              rounded-full

              border-3 border-primaryColor/20
            "
          />

          {/* ROTATING ACCENT */}
          <div
            className="
              absolute inset-0

              rounded-full

              border-t border-primaryColor

              animate-spinSlow
            "
          />

          {/* CENTER DOT */}
          <div
            className="
              w-2.5 h-2.5

              rounded-full

              bg-primaryColor
            "
          />
        </div>

        {/* BRAND NAME */}
        <div className="mt-8 text-center">
          <h2
            className="
              text-2xl
              md:text-3xl

              font-accent
uppercase
              text-primaryColor

              tracking-tight
            "
          >
            Makeup by Shreya
          </h2>

          {/* LOADING TEXT */}
          <p
            className="
              mt-2

              text-[10px]

              uppercase

              tracking-[0.35em]

              text-gray-400
            "
          >
            Luxury Beauty Experience
          </p>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .animate-spinSlow {
          animation: spinSlow 1.8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
