import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="backdrop-blur-lg bg-gray-100">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-brandGray">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="MyApp Logo"
              className="h-7 w-auto object-contain"
            />
            <p className="text-sm leading-relaxed">
              Enhancing natural beauty with elegant, long-lasting makeup
              tailored for your special moments.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-black cursor-pointer">Portfolio</li>
              <li className="hover:text-black cursor-pointer">About</li>
              <li className="hover:text-black cursor-pointer">Appointment</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="flex space-x-4">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@Makeupby__shreya"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-white transition"
              >
                <svg className="w-5 h-5 fill-brandGray" viewBox="0 0 24 24">
                  <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C16.8 2.5 12 2.5 12 2.5h0s-4.8 0-8.6.3c-.4.1-1.3.1-2.1 1C.7 4.5.5 6.2.5 6.2S0 8.2 0 10.3v1.9c0 2.1.5 4.1.5 4.1s.2 1.7.8 2.4c.8.9 1.9.9 2.4 1 1.7.2 7.3.3 8.3.3s4.8 0 8.6-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.5-2 .5-4.1v-1.9c0-2.1-.5-4.1-.5-4.1ZM9.5 14.5v-5l5 2.5-5 2.5Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/makeupby__shreya"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-white transition"
              >
                <svg className="w-5 h-5 fill-brandGray" viewBox="0 0 24 24">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10Zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5Zm0 7.5A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm4.8-7.9a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1Z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917247874192"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-white transition"
              >
                <svg className="w-5 h-5 fill-brandGray" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.5 14.6c-.2.6-1.2 1.1-1.7 1.2-.5.1-1.1.1-1.8-.1-.4-.1-.9-.3-1.6-.6-2.7-1.2-4.4-4-4.5-4.2-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-2 1-2.3.3-.3.7-.4 1-.4h.7c.2 0 .5-.1.7.5.2.6.8 2.1.9 2.2.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.3.4-.5.6-.2.2-.4.4-.2.8.2.4.9 1.5 2 2.4 1.4 1.1 2.6 1.4 3 .1.4-.3.6-.7.8-1 .2-.3.4-.3.7-.2.3.1 1.9.9 2.2 1.1.3.2.5.3.5.5 0 .2 0 .7-.2 1.3Z" />
                </svg>
              </a>

              {/* Call */}
              <a
                href="tel:+917247874192"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-white transition"
              >
                <svg className="w-5 h-5 fill-brandGray" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.5 3 4.1 5.6 7.1 7.1l2.4-2.4c.3-.3.7-.4 1.1-.2 1.2.5 2.5.8 3.8.8.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.5 22 2 13.5 2 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.3 2.6.8 3.8.1.4 0 .8-.2 1.1l-2.5 2.4Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 pt-4 border-t border-white/30 text-center text-sm text-brandGray">
          © {new Date().getFullYear()} Make Up By Shreya. All rights reserved.
        </div>
        <div className="mt-1 pt-4 border-t border-white/30 text-center text-sm text-brandGray">
          Designed & Developed by 7DECODER 🛠
        </div>
      </div>
    </footer>
  );
};

export default Footer;
