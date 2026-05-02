import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#FBF6F2] pt-24 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-12 text-brandGray">
          {/* BRAND */}
          <div>
            <img src={logo} className="h-8 mb-4" />
            <p className="text-sm leading-relaxed text-gray-600 max-w-xs">
              Enhancing natural beauty with elegant, long-lasting makeup
              tailored for your most meaningful moments.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-sm tracking-widest mb-4 text-gray-400">
              QUICK LINKS
            </h4>

            <ul className="space-y-3">
              <li
                onClick={() => navigate("/portfolio")}
                className="cursor-pointer hover:text-primaryColor transition"
              >
                Portfolio
              </li>
              <li
                onClick={() => navigate("/about")}
                className="cursor-pointer hover:text-primaryColor transition"
              >
                About
              </li>
              <li
                onClick={() => navigate("/book-appointment")}
                className="cursor-pointer hover:text-primaryColor transition"
              >
                Appointment
              </li>
              <li
                onClick={() => navigate("/classes")}
                className="cursor-pointer hover:text-primaryColor transition"
              >
                Classes
              </li>
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="text-sm tracking-widest mb-4 text-gray-400">
              CONNECT
            </h4>

            <div className="flex gap-5 text-brandGray">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@Makeupby__shreya"
                target="_blank"
                className="hover:text-primaryColor transition"
              >
                <svg className="w-5 h-5 fill-brandGray" viewBox="0 0 24 24">
                  <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C16.8 2.5 12 2.5 12 2.5h0s-4.8 0-8.6.3c-.4.1-1.3.1-2.1 1C.7 4.5.5 6.2.5 6.2S0 8.2 0 10.3v1.9c0 2.1.5 4.1.5 4.1s.2 1.7.8 2.4c.8.9 1.9.9 2.4 1 1.7.2 7.3.3 8.3.3s4.8 0 8.6-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.5-2 .5-4.1v-1.9c0-2.1-.5-4.1-.5-4.1ZM9.5 14.5v-5l5 2.5-5 2.5Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/makeupby__shreya"
                target="_blank"
                className="hover:text-primaryColor transition"
              >
                <svg className="w-5 h-5 fill-brandGray" viewBox="0 0 24 24">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10Zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5Zm0 7.5A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm4.8-7.9a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1Z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917247874192"
                target="_blank"
                className="hover:text-primaryColor transition"
              >
                <svg className="w-5 h-5 fill-brandGray" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.5 14.6c-.2.6-1.2 1.1-1.7 1.2-.5.1-1.1.1-1.8-.1-.4-.1-.9-.3-1.6-.6-2.7-1.2-4.4-4-4.5-4.2-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-2 1-2.3.3-.3.7-.4 1-.4h.7c.2 0 .5-.1.7.5.2.6.8 2.1.9 2.2.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.3.4-.5.6-.2.2-.4.4-.2.8.2.4.9 1.5 2 2.4 1.4 1.1 2.6 1.4 3 .1.4-.3.6-.7.8-1 .2-.3.4-.3.7-.2.3.1 1.9.9 2.2 1.1.3.2.5.3.5.5 0 .2 0 .7-.2 1.3Z" />
                </svg>
              </a>

              {/* Call */}
              <a
                href="tel:+917247874192"
                className="hover:text-primaryColor transition"
              >
                <svg className="w-5 h-5 fill-brandGray" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.5 3 4.1 5.6 7.1 7.1l2.4-2.4c.3-.3.7-.4 1.1-.2 1.2.5 2.5.8 3.8.8.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.5 22 2 13.5 2 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.3 2.6.8 3.8.1.4 0 .8-.2 1.1l-2.5 2.4Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 border-t border-gray-200" />

        {/* BOTTOM */}
        <div className="text-center text-sm text-gray-500 space-y-2">
          <p>
            © {new Date().getFullYear()} Make Up By Shreya. All rights reserved.
          </p>

          <p className="text-xs text-gray-400">
            Designed & Developed by{" "}
            <a
              href="https://sevendecoder.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryColor hover:underline transition"
            >
              7DECODER 🎧
            </a>
          </p>

          {/* VERSION */}
          <p className="text-[10px] text-gray-300 tracking-widest">
            VERSION 2.0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
