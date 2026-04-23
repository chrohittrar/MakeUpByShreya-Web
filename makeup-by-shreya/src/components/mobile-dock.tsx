import { useLocation, useNavigate } from "react-router-dom";

const MobileDock = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const items = [
    { label: "Home", path: "/" },
    { label: "Work", path: "/portfolio" },
    { label: "About", path: "/about" },
    { label: "Book", path: "/book-appointment" },
    { label: "Classes", path: "/classes" },
  ];

  return (
    <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 backdrop-blur-xl shadow-lg border border-white/40">
        {items.map((item) => {
          const active = pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`
                px-3 py-2 text-xs rounded-full transition
                ${
                  active
                    ? "bg-primaryColor text-white"
                    : "text-brandGray hover:bg-gray-100"
                }
              `}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileDock;
