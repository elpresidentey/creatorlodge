const services = [
  {
    title: "FINE DINING",
    subtitle: "Where Every Bite Tells a Story, and Every Moment Becomes a Memory.",
    image: "https://images.pexels.com/photos/29106106/pexels-photo-29106106.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "THE BAR EXPERIENCE",
    subtitle: "Where Every Sip Unveils a Legacy, and Every Bottle Holds a Timeless Journey.",
    image: "https://images.pexels.com/photos/4485379/pexels-photo-4485379.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "THE GYM FACILITY",
    subtitle: "Where Every Rep Writes Resilience, and Every Sweat Etches a Stronger You.",
    image: "https://images.pexels.com/photos/4464780/pexels-photo-4464780.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "WORKSPACES",
    subtitle: "Where Every Breath Fuels Focus, and Every Space Cultivates Clarity.",
    image: "https://images.pexels.com/photos/6805154/pexels-photo-6805154.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full">
      {/* Section Header */}
      <div className="bg-brand-dark w-full py-10 flex items-center justify-center">
        <h2 className="text-brand-yellow font-black text-2xl sm:text-3xl md:text-4xl tracking-widest uppercase">
          OUR SERVICES
        </h2>
      </div>

      {/* Service Panels */}
      <div className="flex flex-col">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative w-full min-h-[200px] sm:min-h-[240px] md:min-h-[280px] flex items-center justify-center overflow-hidden"
          >
            {/* Background Image */}
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 py-12">
              <h3 className="text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase mb-3">
                {service.title}
              </h3>
              <p className="text-white text-sm sm:text-base md:text-lg max-w-md mx-auto leading-relaxed opacity-90">
                {service.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
