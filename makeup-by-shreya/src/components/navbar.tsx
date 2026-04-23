import logo from "../assets/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (path: string) =>
    pathname === path ? "text-primaryColor font-semibold" : "text-brandGray";

  return (
    <nav className="fixed top-0 w-full z-50 h-16">
      <div className="absolute inset-0 bg-white/20 backdrop-blur-lg border-b border-white/20" />

      {/* Wrapper */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">

        {/* -------- MOBILE (CENTERED LOGO) -------- */}
        <div className="md:hidden absolute left-1/2 -translate-x-1/2">
          <img
            src={logo}
            alt="Logo"
            className="h-10 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* -------- DESKTOP LOGO -------- */}
        <img
          src={logo}
          alt="Logo"
          className="hidden md:block h-10 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* -------- DESKTOP MENU -------- */}
        <ul className="hidden md:flex space-x-10 text-sm tracking-wide">
          {[
            { label: "PORTFOLIO", path: "/portfolio" },
            { label: "ABOUT", path: "/about" },
            { label: "APPOINTMENTS", path: "/book-appointment" },
            { label: "CLASSES", path: "/classes" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`relative group transition ${isActive(item.path)}`}
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-primaryColor transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* -------- EMPTY RIGHT SPACE (FOR BALANCE) -------- */}
        <div className="md:hidden w-10" />
      </div>
    </nav>
  );
};

export default Navbar;