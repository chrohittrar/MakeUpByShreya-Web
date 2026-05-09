import { useState } from "react";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  occasion: string;
  message: string;
};

const BookAppointment = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    occasion: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] =
    useState("Reserve Your Session");

  /* ================= INPUT HANDLER ================= */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setFormData({
        ...formData,
        phone: value.replace(/\D/g, ""),
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /* ================= VALIDATION ================= */

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim())
      newErrors.name = "Please enter your name";

    if (!formData.email.trim())
      newErrors.email = "Please enter your email";

    if (!formData.phone || formData.phone.length !== 10)
      newErrors.phone = "Please enter a valid number";

    if (!formData.date)
      newErrors.date = "Please select a date";

    if (!formData.occasion)
      newErrors.occasion = "Please select an occasion";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    setProgress(10);
    setLoadingText("Preparing your booking ✨");

    const formattedPhone = `+91${formData.phone}`;

    const steps = [
      {
        value: 35,
        text: "Finalizing your request 💄",
      },
      {
        value: 70,
        text: "Sending details 💌",
      },
      {
        value: 90,
        text: "Almost done ✨",
      },
    ];

    let index = 0;

    const interval = setInterval(() => {
      if (index < steps.length) {
        setProgress(steps[index].value);
        setLoadingText(steps[index].text);
        index++;
      }
    }, 700);

    try {
      await emailjs.send(
        "service_tr6ui8b",
        "template_x8i6l49",
        {
          ...formData,
          phone: formattedPhone,
          time: formData.time || "Not specified",
          message: formData.message || "No message",
        },
        "rVMdZGNoP1slacwDZ",
      );

      await emailjs.send(
        "service_ba9c3xa",
        "template_9rk82ga",
        {
          name: formData.name,
          email: formData.email,
          date: formData.date,
          time: formData.time || "To be discussed",
          occasion: formData.occasion,
        },
        "rVMdZGNoP1slacwDZ",
      );

      clearInterval(interval);

      setProgress(100);
      setLoadingText("Request Sent 💅");

      setTimeout(() => {
        setShowModal(true);

        setIsSubmitting(false);

        setProgress(0);

        setLoadingText("Reserve Your Session");

        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          occasion: "",
          message: "",
        });

        setErrors({});
      }, 900);
    } catch {
      clearInterval(interval);

      setIsSubmitting(false);

      setProgress(0);

      setLoadingText("Reserve Your Session");
    }
  };

  /* ================= CLEAR ================= */

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      occasion: "",
      message: "",
    });

    setErrors({});
  };

  /* ================= STYLES ================= */

  const inputBase = `
    w-full

    px-5 py-4

    bg-white/80
    backdrop-blur-xl

    border border-black/5

    text-gray-700

    outline-none

    placeholder:text-gray-300

    transition-all duration-300

    focus:border-primaryColor/30
    focus:ring-4 focus:ring-primaryColor/5
  `;

  const errorText = `
    mt-2
    text-sm
    text-rose-500
  `;

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <section
        className="
          relative
          overflow-hidden

          py-24 md:py-32

          bg-[#FBF6F2]
        "
      >
        {/* GLOW */}
        <div
          className="
            absolute
            top-10 left-1/2
            -translate-x-1/2

            w-[600px]
            h-[600px]

            rounded-full

            bg-primaryColor/5

            blur-3xl
          "
        />

        <div className="relative max-w-6xl mx-auto px-6">

          {/* ================= HEADING ================= */}
          <div className="text-center mb-20">
            <p className="text-[11px] tracking-[0.35em] uppercase text-gray-400 mb-4">
              MAKE A BOOKING
            </p>

            <h2
              className="
                text-4xl
                sm:text-5xl
                md:text-7xl
uppercase
                font-accent
                text-primaryColor

                tracking-tighter

                mb-5
              "
            >
              Reserve Your
              <span className="block">
                Beauty Session
              </span>
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Let’s create a timeless look tailored beautifully
              for your special occasion.
            </p>
          </div>

          {/* ================= MAIN CARD ================= */}
          <div
            className="
              grid lg:grid-cols-[0.42fr_0.58fr]

              overflow-hidden

              bg-white/60
              backdrop-blur-2xl

              border border-white/40

              shadow-[0_20px_60px_rgba(0,0,0,0.05)]
            "
          >
            {/* ================= LEFT PANEL ================= */}
            <div
              className="
                relative

                bg-primaryColor

                text-white

                p-10 md:p-14
              "
            >
              {/* GLOW */}
              <div
                className="
                  absolute
                  top-0 right-0

                  w-[250px]
                  h-[250px]

                  rounded-full

                  bg-white/10

                  blur-3xl
                "
              />

              <div className="relative z-10">

                <p className="text-[11px] tracking-[0.35em] uppercase text-white/60 mb-6">
                  BEAUTY EXPERIENCE
                </p>

                <h3
                  className="
                    text-4xl
                    md:text-5xl

                    font-accent

                    leading-tight

                    mb-8
                  "
                >
                  Let’s create
                  <span className="block">
                    your dream look.
                  </span>
                </h3>

                <p className="text-white/80 leading-relaxed mb-12">
                  Bridal glam, editorial artistry, elegant party looks,
                  and timeless makeup tailored beautifully for you.
                </p>

                {/* FEATURES */}
                <div className="space-y-5 text-sm">

                  {[
                    "Luxury skin-focused makeup",
                    "Personalized beauty consultation",
                    "Long-lasting premium products",
                    "Bridal & occasion artistry",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <div
                        className="
                          w-2 h-2

                          rounded-full

                          bg-white
                        "
                      />

                      <p className="text-white/80">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ================= FORM ================= */}
            <form
              onSubmit={handleSubmit}
              className="
                p-8 md:p-12

                space-y-7
              "
            >
              {/* NAME */}
              <div>
                <label className="text-xs tracking-[0.25em] uppercase text-gray-400 block mb-3">
                  Full Name
                </label>

                <input
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${inputBase} ${
                    errors.name
                      ? "border-rose-400"
                      : ""
                  }`}
                />

                {errors.name && (
                  <p className={errorText}>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-xs tracking-[0.25em] uppercase text-gray-400 block mb-3">
                  Email Address
                </label>

                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputBase} ${
                    errors.email
                      ? "border-rose-400"
                      : ""
                  }`}
                />

                {errors.email && (
                  <p className={errorText}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* PHONE */}
              <div>
                <label className="text-xs tracking-[0.25em] uppercase text-gray-400 block mb-3">
                  Mobile Number
                </label>

                <div
                  className={`
                    flex overflow-hidden

                    bg-white/80

                    border

                    ${
                      errors.phone
                        ? "border-rose-400"
                        : "border-black/5"
                    }
                  `}
                >
                  <span
                    className="
                      px-5

                      flex items-center

                      text-gray-400

                      border-r border-black/5
                    "
                  >
                    +91
                  </span>

                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    placeholder="9876543210"
                    className="
                      w-full

                      px-5 py-4

                      bg-transparent

                      outline-none
                    "
                  />
                </div>

                {errors.phone && (
                  <p className={errorText}>
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* DATE + TIME */}
              <div className="grid md:grid-cols-2 gap-5">

                {/* DATE */}
                <div>
                  <label className="text-xs tracking-[0.25em] uppercase text-gray-400 block mb-3">
                    Preferred Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    min={today}
                    value={formData.date}
                    onChange={handleChange}
                    className={`${inputBase} ${
                      errors.date
                        ? "border-rose-400"
                        : ""
                    }`}
                  />

                  {errors.date && (
                    <p className={errorText}>
                      {errors.date}
                    </p>
                  )}
                </div>

                {/* TIME */}
                <div>
                  <label className="text-xs tracking-[0.25em] uppercase text-gray-400 block mb-3">
                    Preferred Time
                  </label>

                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>
              </div>

              {/* OCCASION */}
              <div>
                <label className="text-xs tracking-[0.25em] uppercase text-gray-400 block mb-3">
                  Occasion
                </label>

                <select
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  className={`${inputBase} ${
                    errors.occasion
                      ? "border-rose-400"
                      : ""
                  }`}
                >
                  <option value="">
                    Select Occasion
                  </option>

                  <option>Party Glam</option>
                  <option>Engagement Edit</option>
                  <option>Cocktail Couture</option>
                  <option>Roka Edit</option>
                  <option>Haldi Lumière</option>
                  <option>Mehndi Reverie</option>
                  <option>The Bridal Signature</option>
                  <option>Reception Grandeur</option>
                  <option>Arté de Creative</option>
                </select>

                {errors.occasion && (
                  <p className={errorText}>
                    {errors.occasion}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-xs tracking-[0.25em] uppercase text-gray-400 block mb-3">
                  Additional Notes
                </label>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell me about your event..."
                  value={formData.message}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 pt-2">

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    relative

                    overflow-hidden

                    w-[85%]
                    h-14

                    bg-primaryColor
                    text-white

                    transition-all duration-500

                    hover:-translate-y-1
                    hover:shadow-[0_20px_40px_rgba(115,74,113,0.25)]
                  "
                >
                  {/* PROGRESS */}
                  {isSubmitting && (
                    <span
                      className="
                        absolute
                        inset-y-0 left-0

                        bg-black/20

                        transition-all duration-500
                      "
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  )}

                  <span className="relative z-10">
                    {loadingText}
                  </span>
                </button>

                {/* CLEAR */}
                <button
                  type="button"
                  onClick={handleClear}
                  className="
                    w-[15%]
                    h-14

                    border border-black/5

                    bg-white

                    text-xl

                    hover:bg-[#FBF6F2]

                    transition-all duration-300
                  "
                >
                  ✦
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div
          className="
            fixed inset-0 z-[9999]

            flex items-center justify-center

            px-6
          "
        >
          {/* BACKDROP */}
          <div
            className="
              absolute inset-0

              bg-black/40
              backdrop-blur-sm
            "
            onClick={() => setShowModal(false)}
          />

          {/* MODAL */}
          <div
            className="
              relative

              w-full max-w-md

              bg-white/80
              backdrop-blur-2xl

              p-10

              shadow-2xl

              text-center
            "
          >
            {/* ICON */}
            <div
              className="
                w-16 h-16

                mx-auto mb-6

                rounded-full

                bg-primaryColor/10

                flex items-center justify-center

                text-3xl
              "
            >
              ✨
            </div>

            <h3
              className="
                text-3xl

                font-accent
                text-primaryColor

                mb-4
              "
            >
              Booking Sent
            </h3>

            <p className="text-gray-500 leading-relaxed mb-8">
              Your appointment request has been submitted successfully.
              A confirmation email has been sent to you.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="
                w-full

                py-4

                bg-primaryColor
                text-white

                hover:opacity-90

                transition-all duration-300
              "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookAppointment;