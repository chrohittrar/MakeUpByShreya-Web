import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-[#FBF6F2] py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-24">
          <p className="text-xs tracking-widest text-gray-400 mb-3">
            GET IN TOUCH
          </p>

          <h2 className="text-5xl md:text-7xl font-accent text-primaryColor mb-4">
            Contact Me
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto">
            For bookings, collaborations, or inquiries — I’d love to hear from you.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-10">

            <div>
              <h3 className="text-2xl font-accent text-primaryColor mb-4">
                Let’s Connect
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Whether you’re planning your big day or looking to learn makeup professionally,
                feel free to reach out. I’ll get back to you as soon as possible.
              </p>
            </div>

            {/* CONTACT DETAILS */}
            <div className="space-y-6 text-gray-600 text-sm">

              <div>
                <p className="text-gray-400 text-xs mb-1">PHONE</p>
                <p>+91 7247874192</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs mb-1">EMAIL</p>
                <p>makeupbyshreya@email.com</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs mb-1">LOCATION</p>
                <p>Delhi, India</p>
              </div>

            </div>

            {/* SOCIAL */}
            <div className="flex gap-6 text-sm text-gray-500">
              <a
                href="https://www.instagram.com/makeupby__shreya"
                target="_blank"
                className="hover:text-primaryColor transition"
              >
                Instagram
              </a>

              <a
                href="https://wa.me/917247874192"
                target="_blank"
                className="hover:text-primaryColor transition"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form className="space-y-6">

            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="
                w-full px-4 py-3
                bg-white rounded-xl
                border border-gray-200
                outline-none
                focus:border-primaryColor
              "
            />

            <input
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="
                w-full px-4 py-3
                bg-white rounded-xl
                border border-gray-200
                outline-none
                focus:border-primaryColor
              "
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="
                w-full px-4 py-3
                bg-white rounded-xl
                border border-gray-200
                outline-none
                focus:border-primaryColor
              "
            />

            <button
              type="submit"
              className="
                w-full py-3
                bg-primaryColor text-white
                rounded-xl
                hover:opacity-90
                transition
              "
            >
              Send Message
            </button>
          </form>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 mb-4">
            Prefer quick response?
          </p>

          <a
            href="https://wa.me/917247874192"
            target="_blank"
            className="
              inline-block px-8 py-3
              border border-primaryColor
              text-primaryColor
              rounded-xl
              hover:bg-primaryColor hover:text-white
              transition
            "
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;