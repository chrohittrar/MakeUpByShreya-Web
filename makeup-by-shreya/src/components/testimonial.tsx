import { useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ayushi",
    occasion: "Engagement Makeup",
    message:
      "It was amazing Shreya. I loved the look and everyone around me loved it too. You are extremely talented and sweet. Keep shining!",
  },
  {
    id: 2,
    name: "Anjali",
    occasion: "Party Glam",
    message:
      "The makeup was beautiful—subtle, polished and never cakey. Thank you for not letting me down. For my engagement, bridal makeup or any future look, I will contact you only.",
  },
  {
    id: 3,
    name: "Rakhi",
    occasion: "Party Glam",
    message:
      "You made me feel so comfortable, and the look turned out exactly how I wanted. It stayed fresh for hours and I received so many compliments. I cannot wait to book with you again!",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<{ x: number; scrollLeft: number } | null>(null);

  const updateCurrentSlide = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;
    const slides = Array.from(slider.children) as HTMLElement[];
    const closestIndex = slides.reduce((closest, slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const closestSlide = slides[closest];
      const closestCenter = closestSlide.offsetLeft + closestSlide.offsetWidth / 2;

      return Math.abs(slideCenter - sliderCenter) <
        Math.abs(closestCenter - sliderCenter)
        ? index
        : closest;
    }, 0);

    setCurrent(closestIndex);
  };

  const startDragging = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    dragStart.current = {
      x: event.clientX,
      scrollLeft: event.currentTarget.scrollLeft,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const dragSlider = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStart.current) return;
    event.currentTarget.scrollLeft =
      dragStart.current.scrollLeft - (event.clientX - dragStart.current.x);
  };

  const stopDragging = () => {
    dragStart.current = null;
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#F4EBE5] py-20 md:py-28"
    >
      <div className="relative mx-auto max-w-[1500px]">
        <div className="mb-12 px-6 text-center md:mb-16">
          <div className="mb-5 flex items-center justify-center gap-4">
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#5D5D5D]/50 ">
              Love Notes
            </p>
          </div>

          <h2 className="font-accent text-4xl tracking-tight text-primaryColor sm:text-5xl md:text-7xl">
            WORDS FROM MY CLIENTS
          </h2>
        </div>

        <div
          ref={sliderRef}
          onScroll={updateCurrentSlide}
          onPointerDown={startDragging}
          onPointerMove={dragSlider}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onPointerLeave={stopDragging}
          className="scrollbar-hide flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto px-[6vw] pb-10 active:cursor-grabbing md:gap-8 md:px-[14vw]"
          aria-label="Client testimonials"
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className="relative flex min-h-[440px] w-[88vw] flex-none snap-center flex-col justify-between overflow-hidden border border-white/70 bg-[#FFFCFA] px-7 py-10 shadow-[0_24px_70px_rgba(79,45,75,0.10)] sm:px-12 md:min-h-[480px] md:w-[68vw] md:max-w-4xl md:px-16 md:py-14"
            >
              <div className="absolute right-6 top-3 font-serif text-[8rem] leading-none text-primaryColor/[0.06] md:right-10 md:text-[11rem]">
                “
              </div>
              <div className="absolute left-0 top-0 h-full w-1 bg-primaryColor" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.32em] text-primaryColor/45">
                    Client Story
                  </span>
                  <span className="font-accent text-sm text-primaryColor/35">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-12 max-w-3xl font-accent text-xl leading-[1.5] text-[#3D2C38] sm:text-3xl md:text-[2.15rem] md:leading-[1.55]">
                  “{testimonial.message}”
                </p>
              </div>

              <div className="relative mt-10 flex items-end justify-between border-t border-primaryColor/10 pt-7">
                <div>
                  <h3 className="font-accent text-2xl text-primaryColor md:text-3xl">
                    {testimonial.name}
                  </h3>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-[#6E5C68]/55">
                    {testimonial.occasion}
                  </p>
                </div>
                <div className="text-sm tracking-[0.2em] text-[#B68B72]" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3" aria-hidden="true">
          {testimonials.map((testimonial, index) => (
            <span
              key={testimonial.id}
              className={`h-px transition-all duration-500 ${
                current === index
                  ? "w-12 bg-primaryColor"
                  : "w-5 bg-primaryColor/20"
              }`}
            />
          ))}
        </div>

        <p className="mt-5 text-center text-[9px] uppercase tracking-[0.3em] text-primaryColor/35">
          Swipe or drag to explore
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
