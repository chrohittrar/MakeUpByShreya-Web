const events = [
  {
    title: "Bridal Makeup – Jaipur",
    date: "12 Oct 2026",
    location: "Jaipur, Rajasthan",
    description: "Luxury bridal makeup booking for a destination wedding.",
  },
  {
    title: "Engagement Glam",
    date: "25 Oct 2026",
    location: "Delhi NCR",
    description: "Soft glam look for an intimate engagement ceremony.",
  },
  {
    title: "Festive Makeup Special",
    date: "Diwali Season",
    location: "Mumbai",
    description: "Festive glam bookings for Diwali & pre-wedding functions.",
  },
  {
    title: "Editorial Photoshoot",
    date: "November 2026",
    location: "Studio Shoot",
    description: "Editorial makeup for a fashion photoshoot.",
  },
];

const UpcomingEvents = () => {
  return (
    <section id="events" className="relative py-32">
      {/* Soft background */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-accent text-brandGray tracking-wide mb-3">
            Upcoming Events
          </h2>
          <p className="text-gray-500">
            Where I’ll be creating magic next
          </p>
        </div>

        {/* Slider */}
        <div
          className="
            flex gap-6
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            pb-4
          "
        >
          {events.map((event, index) => (
            <div
              key={index}
              className="
                min-w-[280px] md:min-w-[340px]
                snap-center
                bg-white/70 backdrop-blur-lg
                rounded-2xl shadow-lg
                p-6
                transition-transform duration-500
                hover:-translate-y-2
              "
            >
              {/* Date */}
              <p className="text-sm text-brandGray/70 mb-2">
                {event.date}
              </p>

              {/* Title */}
              <h3 className="text-xl font-semibold text-brandGray mb-2">
                {event.title}
              </h3>

              {/* Location */}
              <p className="text-sm text-gray-500 mb-3">
                📍 {event.location}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        {/* Hint */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Swipe to see more →
        </p>
      </div>
    </section>
  );
};

export default UpcomingEvents;
