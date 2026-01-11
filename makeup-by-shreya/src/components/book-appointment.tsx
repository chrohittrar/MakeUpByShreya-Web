import { useState } from "react";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;        // OPTIONAL
  occasion: string;
  message: string;     // OPTIONAL
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
  const [snackbar, setSnackbar] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({
    show: false,
    message: "",
    type: "success",
  });

  /* ----------------- HANDLERS ----------------- */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // Phone: digits only
    if (name === "phone") {
      setFormData({ ...formData, phone: value.replace(/\D/g, "") });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  /* ----------------- VALIDATION ----------------- */

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim())
      newErrors.name = "Please enter your full name :/";

    if (!formData.email.trim())
      newErrors.email = "Please enter your email address :/";

    if (!formData.phone || formData.phone.length !== 10)
      newErrors.phone = "Enter a valid 10-digit mobile number :/";

    if (!formData.date)
      newErrors.date = "Please select a date :/";

    if (!formData.occasion)
      newErrors.occasion = "Please select an occasion :/";

    // ❌ time is OPTIONAL
    // ❌ message is OPTIONAL

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ----------------- SUBMIT ----------------- */

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const formattedPhone = `+91${formData.phone}`;

    // 1️⃣ Email to YOU
    emailjs
      .send(
        "service_tr6ui8b",
        "template_x8i6l49",
        {
          ...formData,
          phone: formattedPhone,
          time: formData.time || "Not specified",
          message: formData.message || "No additional message",
        },
        "rVMdZGNoP1slacwDZ"
      )
      .then(() => {
        // 2️⃣ Auto-reply to CLIENT
        return emailjs.send(
          "service_tr6ui8b",
          "template_auto_reply",
          {
            name: formData.name,
            email: formData.email,
            date: formData.date,
            time: formData.time || "To be discussed",
            occasion: formData.occasion,
          },
          "rVMdZGNoP1slacwDZ"
        );
      })
      .then(() => {
        setSnackbar({
          show: true,
          message: "Booking request sent! Confirmation email sent.",
          type: "success",
        });

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

        setTimeout(() => {
          setSnackbar((p) => ({ ...p, show: false }));
        }, 3000);
      })
      .catch(() => {
        setSnackbar({
          show: true,
          message: "Something went wrong. Please try again.",
          type: "error",
        });

        setTimeout(() => {
          setSnackbar((p) => ({ ...p, show: false }));
        }, 3000);
      });
  };

  /* ----------------- UI ----------------- */

  const inputBase =
    "w-full px-4 py-3 rounded-lg outline-none bg-neutral-50 transition";

  const errorText = "mt-1 text-sm text-rose-500 animate-fadeIn";

  return (
    <section id="book-appointment" className="relative py-20 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-accent text-brandGray mb-3">
            book your appointment
          </h2>
          <p className="text-gray-400">
            Let’s create a look that feels uniquely you
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="rounded-2xl p-8 space-y-6">
          
          {/* Name */}
          <div>
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className={`${inputBase} ${
                errors.name ? "border border-rose-400" : "focus:ring-black/20"
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
                errors.email ? "border border-rose-400" : "focus:ring-black/20"
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
                value={formData.date}
                onChange={handleChange}
                className={`${inputBase} ${
                  errors.date ? "border border-rose-400" : "focus:ring-black/20"
                }`}
              />
              {errors.date && <p className={errorText}>{errors.date}</p>}
            </div>

            {/* OPTIONAL Time */}
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
                errors.occasion ? "border border-rose-400" : "focus:ring-black/20"
              }`}
            >
              <option value="">Select Occasion</option>
              <option>Bridal Makeup</option>
              <option>Party Makeup</option>
              <option>Engagement</option>
              <option>Reception</option>
              <option>Photoshoot</option>
            </select>
            {errors.occasion && (
              <p className={errorText}>{errors.occasion}</p>
            )}
          </div>

          {/* OPTIONAL Message */}
          <textarea
            name="message"
            rows={4}
            placeholder="Tell me about your event (optional)"
            value={formData.message}
            onChange={handleChange}
            className={inputBase}
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-black text-white hover:bg-black/80 transition"
          >
            Book Appointment
          </button>
        </form>
      </div>

      {/* Snackbar */}
      {snackbar.show && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-6 py-4 rounded-xl shadow-lg ${
            snackbar.type === "success"
              ? "bg-white/80 text-[#5D5D5D]"
              : "bg-red-500/90 text-white"
          }`}
        >
          {snackbar.message}
        </div>
      )}
    </section>
  );
};

export default BookAppointment;
