const Loader = () => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white">
      
      <div className="flex flex-col items-center gap-6">
        
        {/* SVG LOADER */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          className="animate-draw drop-shadow-[0_0_8px_#734A71]"
          fill="none"
          stroke="#734A71"
          strokeWidth="1.5"
        >
          {/* Lipstick shape */}
          <path d="M8 2h8v6l-4 4-4-4V2Z" />
          <rect x="7" y="12" width="10" height="6" rx="1" />
          <rect x="6" y="18" width="12" height="2" rx="1" />
        </svg>

        {/* Text */}
        <p className="text-sm tracking-widest text-gray-500 animate-pulse">
          Loading beauty...
        </p>

      </div>
    </div>
  );
};

export default Loader;