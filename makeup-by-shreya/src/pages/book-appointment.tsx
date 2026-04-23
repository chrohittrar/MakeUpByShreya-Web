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

    if (!formData.name.trim()) newErrors.name = "Enter your full name";
    if (!formData.email.trim()) newErrors.email = "Enter your email";
    if (!formData.phone || formData.phone.length !== 10)
      newErrors.phone = "Enter valid mobile number";
    if (!formData.date) newErrors.date = "Select a date";
    if (!formData.occasion) newErrors.occasion = "Select occasion";

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

    const steps = [
      { value: 30, text: "✨ Final touches" },
      { value: 60, text: "📩 Sending request" },
      { value: 85, text: "💌 Almost done" },
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
      await emailjs.send(
        "service_tr6ui8b",
        "template_x8i6l49",
        {
          ...formData,
          phone: formattedPhone,
          time: formData.time || "Not specified",
          message: formData.message || "No message",
        },
        "rVMdZGNoP1slacwDZ"
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

  /* ---------------- UI ---------------- */

  const inputBase =
    "w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 outline-none transition focus:border-primaryColor focus:ring-2 focus:ring-primaryColor/10";

  const errorText = "mt-1 text-sm text-rose-500";

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <section className="py-32 bg-[#FBF6F2]">
        <div className="max-w-3xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-5xl md:text-7xl font-accent tracking-extreme text-primaryColor mb-3">
              Book Appointment
            </h2>
            <p className="text-gray-400">
              Let’s create something beautiful together
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl p-10 space-y-8 bg-white/60 backdrop-blur-xl"
          >

            {/* NAME */}
            <div>
              <input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`${inputBase} ${errors.name ? "border-rose-400" : ""}`}
              />
              {errors.name && <p className={errorText}>{errors.name}</p>}
            </div>

            {/* EMAIL */}
            <div>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`${inputBase} ${errors.email ? "border-rose-400" : ""}`}
              />
              {errors.email && <p className={errorText}>{errors.email}</p>}
            </div>

            <div className="border-t border-gray-200" />

            {/* PHONE */}
            <div>
              <div className={`flex rounded-xl overflow-hidden ${errors.phone ? "border border-rose-400" : ""}`}>
                <span className="px-4 py-3 bg-gray-100 text-gray-500">+91</span>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 bg-white/70 outline-none"
                />
              </div>
              {errors.phone && <p className={errorText}>{errors.phone}</p>}
            </div>

            {/* DATE + TIME */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <input
                  type="date"
                  name="date"
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  className={`${inputBase} ${errors.date ? "border-rose-400" : ""}`}
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

            {/* OCCASION */}
            <div>
              <select
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className={`${inputBase} ${errors.occasion ? "border-rose-400" : ""}`}
              >
                <option value="">Select Occasion</option>
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
              {errors.occasion && <p className={errorText}>{errors.occasion}</p>}
            </div>

            {/* MESSAGE */}
            <textarea
              name="message"
              rows={4}
              placeholder="Tell me about your event (optional)"
              value={formData.message}
              onChange={handleChange}
              className={inputBase}
            />

            {/* BUTTONS */}
            <div className="flex gap-3">
              
              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative w-[80%] h-12 rounded-xl bg-primaryColor text-white font-semibold hover:shadow-lg transition"
              >
                {isSubmitting && (
                  <span
                    className="absolute inset-y-0 left-0 bg-black/20"
                    style={{ width: `${progress}%` }}
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
                className="w-[20%] h-12 flex items-center justify-center rounded-xl border border-gray-200 text-gray-400 hover:text-primaryColor transition"
              >
                🧹
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl">
            <h3 className="text-xl text-center mb-4">
              Booking Request Sent 🎀
            </h3>
            <p className="text-gray-500 text-center mb-6">
              Confirmation email sent successfully
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3 bg-primaryColor text-white rounded-xl"
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