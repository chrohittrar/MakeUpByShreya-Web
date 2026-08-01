// src/pages/privacy-policy.tsx

const PrivacyPolicy = () => {
  return (
    <section className="bg-[#FBF6F2] py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* HEADING */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-4">
            LEGAL
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-accent text-primaryColor tracking-tight mb-5">
            Privacy Policy
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
              Introduction
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Makeup by Shreya respects your privacy and is committed
              to protecting your personal information. This policy
              explains how your information is collected, used,
              and stored when you interact with this website.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-accent text-primaryColor mb-4">
              Information Collected
            </h2>

            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p>
                The following information may be collected through
                booking or contact forms:
              </p>

              <ul className="space-y-2 pl-5">
                <li>• Full name</li>
                <li>• Email address</li>
                <li>• Phone number</li>
                <li>• Appointment preferences</li>
                <li>• Messages or inquiries</li>
              </ul>
            </div>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-accent text-primaryColor mb-4">
              How Your Information Is Used
            </h2>

            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p>Your information may be used to:</p>

              <ul className="space-y-2 pl-5">
                <li>• Respond to inquiries</li>
                <li>• Confirm appointments</li>
                <li>• Send booking updates</li>
                <li>• Improve user experience</li>
                <li>• Provide customer support</li>
              </ul>
            </div>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-accent text-primaryColor mb-4">
              Third-Party Services
            </h2>

            <p className="text-gray-600 leading-relaxed">
              This website may use trusted third-party services such as
              EmailJS for appointment communication and message delivery.
              These services may process limited information required
              to complete booking-related functionality.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-accent text-primaryColor mb-4">
              Data Protection
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Reasonable measures are taken to protect your information
              against unauthorized access, misuse, or disclosure.
              However, no online transmission can be guaranteed
              completely secure.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-accent text-primaryColor mb-4">
              Contact
            </h2>

            <p className="text-gray-600 leading-relaxed">
              For any questions regarding this Privacy Policy,
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

export default PrivacyPolicy;