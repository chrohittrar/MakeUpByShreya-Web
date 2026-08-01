// src/pages/terms-of-use.tsx

const TermsOfUse = () => {
  return (
    <section className="bg-[#FBF6F2] py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* HEADING */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-4">
            LEGAL
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-accent text-primaryColor tracking-tight mb-5">
            Terms of Use
          </h1>

          <p className="text-gray-500">
            Last updated — August 2026
          </p>
        </div>

        {/* CONTENT */}
        <div
          className="
            bg-white/70
            backdrop-blur-xl

            border border-white/40

            shadow-[0_10px_40px_rgba(0,0,0,0.04)]

            p-8 md:p-12

            space-y-12
          "
        >
          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-accent text-primaryColor mb-4">
              Acceptance of Terms
            </h2>

            <p className="text-gray-600 leading-relaxed">
              By using this website or booking services through
              Makeup by Shreya, you agree to comply with these
              Terms of Use.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-accent text-primaryColor mb-4">
              Booking Policy
            </h2>

            <div className="space-y-3 text-gray-600 leading-relaxed">
              <ul className="space-y-2 pl-5">
                <li>
                  • Appointments are subject to availability.
                </li>

                <li>
                  • Advance booking is recommended for bridal
                  and festive dates.
                </li>

                <li>
                  • Booking confirmations may require advance payment.
                </li>
              </ul>
            </div>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-accent text-primaryColor mb-4">
              Cancellation & Rescheduling
            </h2>

            <div className="space-y-3 text-gray-600 leading-relaxed">
              <ul className="space-y-2 pl-5">
                <li>
                  • Cancellations should be communicated in advance.
                </li>

                <li>
                  • Last-minute cancellations may result in partial
                  or full booking charges.
                </li>

                <li>
                  • Rescheduling is subject to availability.
                </li>
              </ul>
            </div>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-accent text-primaryColor mb-4">
              Travel & Destination Bookings
            </h2>

            <p className="text-gray-600 leading-relaxed">
              For destination or outstation bookings, travel,
              accommodation, and related expenses may be applicable
              and are to be discussed prior to confirmation.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-accent text-primaryColor mb-4">
              Intellectual Property
            </h2>

            <p className="text-gray-600 leading-relaxed">
              All website content, branding, images, and creative work
              displayed on this website remain the intellectual property
              of Makeup by Shreya unless otherwise stated.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-accent text-primaryColor mb-4">
              Limitation of Liability
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Makeup by Shreya shall not be held responsible for
              delays, technical interruptions, or circumstances
              beyond reasonable control affecting appointments
              or website functionality.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-accent text-primaryColor mb-4">
              Contact
            </h2>

            <p className="text-gray-600 leading-relaxed">
              For questions regarding these Terms of Use,
              please contact:
            </p>

            <div className="mt-4 text-gray-600 space-y-1">
              <p>Makeup by Shreya</p>
              <p>Email: makeupbyshreyasingh@gmail.com</p>
              <p>Phone: +91 7247874192</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;