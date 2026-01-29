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

  // Loading button states
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Book Appointment");

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setFormData({ ...formData, phone: value.replace(/\D/g, "") });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  /* ---------------- VALIDATION ---------------- */

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Please enter your full name";

    if (!formData.email.trim())
      newErrors.email = "Please enter your email address";

    if (!formData.phone || formData.phone.length !== 10)
      newErrors.phone = "Enter a valid 10-digit mobile number";

    if (!formData.date) newErrors.date = "Please select a date";

    if (!formData.occasion) newErrors.occasion = "Please select an occasion";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ---------------- SUBMIT ---------------- */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setProgress(10);
    setLoadingText("💄 Preparing your look...");

    const formattedPhone = `+91${formData.phone}`;

    // Fake progress animation (UX polish)
    const steps = [
      { value: 30, text: "✨ Final touches :)" },
      { value: 60, text: "📩 Sending request :D" },
      { value: 85, text: "💌 Almost done XD" },
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < steps.length) {
        setProgress(steps[index].value);
        setLoadingText(steps[index].text);
        index++;
      }
    }, 600);

    try {
      // Email to YOU
      await emailjs.send(
        "service_tr6ui8b",
        "template_x8i6l49",
        {
          ...formData,
          phone: formattedPhone,
          time: formData.time || "Not specified",
          message: formData.message || "No additional message",
        },
        "rVMdZGNoP1slacwDZ"
      );

      // Auto-reply to CLIENT
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
        "rVMdZGNoP1slacwDZ"
      );

      clearInterval(interval);
      setProgress(100);
      setLoadingText("Request sent 💅");

      setTimeout(() => {
        setShowModal(true);
        setIsSubmitting(false);
        setProgress(0);
        setLoadingText("Book Appointment");
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
      }, 700);
    } catch {
      clearInterval(interval);
      setIsSubmitting(false);
      setProgress(0);
      setLoadingText("Book Appointment");
    }
  };

  /* ---------------- UI ---------------- */

  const inputBase =
    "w-full px-4 py-3 rounded-lg outline-none bg-neutral-50 transition";
  const errorText = "mt-1 text-sm text-rose-500 animate-fadeIn";
  const today = new Date().toISOString().split("T")[0];

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

  return (
    <>
      <section id="book-appointment" className="relative py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-6xl md:text-7xl font-accent font-semibold tracking-extreme text-primaryColor mb-3">
              BOOK YOUR APPOINTMENT
            </h2>
            <p className="text-gray-400">
              Let’s create a look that feels uniquely you
            </p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl p-8 space-y-6">
            {/* Name */}
            <div>
              <input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`${inputBase} ${
                  errors.name ? "border border-rose-400" : ""
                }`}
              />
              {errors.name && <p className={errorText}>{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`${inputBase} ${
                  errors.email ? "border border-rose-400" : ""
                }`}
              />
              {errors.email && <p className={errorText}>{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <div
                className={`flex rounded-lg overflow-hidden ${
                  errors.phone ? "border border-rose-400" : ""
                }`}
              >
                <span className="px-4 py-3 bg-gray-100 text-gray-500">+91</span>
                <input
                  name="phone"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  className="w-full px-4 py-3 bg-neutral-50 outline-none"
                />
              </div>
              {errors.phone && <p className={errorText}>{errors.phone}</p>}
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input
                  type="date"
                  name="date"
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  className={`${inputBase} ${
                    errors.date ? "border border-rose-400" : ""
                  }`}
                />
                {errors.date && <p className={errorText}>{errors.date}</p>}
              </div>

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={inputBase}
              />
            </div>

            {/* Occasion */}
            <div>
              <select
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className={`${inputBase} ${
                  errors.occasion ? "border border-rose-400" : ""
                }`}
              >
                <option value="">Select Your Occasion</option>
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
                <p className={errorText}>{errors.occasion}</p>
              )}
            </div>

            {/* Message */}
            <textarea
              name="message"
              rows={4}
              placeholder="Tell me about your event (optional)"
              value={formData.message}
              onChange={handleChange}
              className={inputBase}
            />

            {/* Loading Button */}
            <div className="flex gap-3">
              {/* SUBMIT – 80% */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
      relative
      w-[80%] h-12
      overflow-hidden
      rounded-xl
      bg-primaryColor
      text-white
      font-medium
      hover:bg-primaryColor/80
      transition
    "
              >
                {isSubmitting && (
                  <span
                    className="absolute inset-y-0 left-0 bg-black/20 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                )}
                <span className="relative z-10 flex justify-center">
                  {loadingText}
                </span>
              </button>

              {/* CLEAR – 20% */}
              <button
                type="button"
                onClick={handleClear}
                className="
      w-[20%] h-12
      flex items-center justify-center
      rounded-xl
      border border-gray-300
      text-gray-500
      hover:bg-gray-100
      hover:text-gray-700
      transition
    "
                title="Clear form"
              >
                {/* Clear Icon */}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6h18M9 6V4h6v2M8 6l1 14h6l1-14"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-6 shadow-2xl animate-fadeIn">
            <h3 className="text-2xl font-regular text-brandGray mb-4 text-center">
              Booking Request Sent 🎀
            </h3>
            <p className="text-gray-500 text-center mb-6">
              A confirmation email has been sent to you.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3 rounded-xl bg-primaryColor text-white hover:bg-black/80 transition"
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
