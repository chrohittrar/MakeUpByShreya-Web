const RateList = () => {
  const pdfUrl = `${import.meta.env.BASE_URL}MakeUp-By-Shreya-Packages.pdf`;

  return (
    <section className="bg-[#FBF6F2] px-5 py-10 md:px-8 md:py-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden bg-primaryColor px-6 py-14 text-white shadow-[0_30px_80px_rgba(74,42,72,0.22)] sm:px-10 md:px-16 md:py-20">
        {/* Decorative details */}
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute bottom-8 left-8 hidden text-[10rem] font-accent leading-none text-white/[0.035] md:block">
          MBS
        </div>

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <p className="text-[10px] uppercase tracking-[0.38em] text-white sm:text-[11px]">
                Services &amp; Investment
              </p>
            </div>

            <h2 className="max-w-3xl font-accent text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
              Find the look that
              <span className="block font-cursive text-[30px] mt-10 text-[#E7C9B4]">
                feels like you.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Explore bridal, pre-bridal and occasion makeup packages, with
              complete pricing and service details in one beautifully curated guide.
            </p>
          </div>

          <div className="border border-white/15 bg-white/[0.07] p-3 backdrop-blur-sm">
            <div className="border border-white/15 px-6 py-8 sm:px-8 sm:py-10">
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                    The complete guide
                  </p>
                  <p className="mt-2 font-accent text-2xl text-white">
                    Rate List &amp; Packages
                  </p>
                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E7C9B4]/40 text-[#E7C9B4]">
                  PDF
                </span>
              </div>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-between bg-[#F8EEE7] px-5 py-4 text-sm font-medium text-[#3D273B] transition-all duration-300 hover:bg-white hover:shadow-2xl"
              >
                <span>View &amp; Download</span>
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.7}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17 17 7M7 7h10v10"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RateList;
