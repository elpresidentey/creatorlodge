const team = [
  {
    name: "Leonard",
    role: "Our Chef",
    image: "https://images.pexels.com/photos/32224390/pexels-photo-32224390.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Udoka",
    role: "Our Mixologist",
    image: "https://images.pexels.com/photos/31893698/pexels-photo-31893698.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Aneeka",
    role: "Our Gym Instructor",
    image: "https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Loretta",
    role: "Our House Keeper",
    image: "https://images.pexels.com/photos/33871730/pexels-photo-33871730.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-brand-dark w-full px-6 md:px-10 lg:px-16 py-16 md:py-20">
      {/* Section Header */}
      <div className="flex items-center justify-center mb-12 md:mb-16">
        <h2 className="text-brand-yellow font-black text-2xl sm:text-3xl md:text-4xl tracking-widest uppercase">
          THE TEAM
        </h2>
      </div>

      {/* Team Grid */}
      <div className="max-w-[1312px] mx-auto flex flex-wrap justify-center gap-6 md:gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            {/* Photo */}
            <div className="w-[140px] h-[160px] sm:w-[160px] sm:h-[180px] md:w-[190px] md:h-[215px] bg-white rounded overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Name & Role */}
            <div className="text-center mt-1">
              <p className="text-white font-bold text-sm md:text-base">{member.name}</p>
              <p className="text-white/70 text-xs md:text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
