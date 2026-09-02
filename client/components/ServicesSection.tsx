import { Link } from "react-router-dom";

const services = [
  { title: "Dine", desc: "Wood-fired plates, garden-led menu.", image: "https://images.pexels.com/photos/29106106/pexels-photo-29106106.jpeg?auto=compress&cs=tinysrgb&w=1200", href: "/menu" },
  { title: "Bar", desc: "Palm wine, low-ABV, long pours.", image: "https://images.pexels.com/photos/4485379/pexels-photo-4485379.jpeg?auto=compress&cs=tinysrgb&w=1200", href: "/menu" },
  { title: "Gym", desc: "HIIT, mobility, quiet strength. Tap for workouts →", image: "https://images.pexels.com/photos/4464780/pexels-photo-4464780.jpeg?auto=compress&cs=tinysrgb&w=1200", href: "/book?space=gym" },
  { title: "Work", desc: "Desks, offices, studios.", image: "https://images.pexels.com/photos/6805154/pexels-photo-6805154.jpeg?auto=compress&cs=tinysrgb&w=1200", href: "/spaces" },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#F5F5F7]">
      <div className="max-w-[1312px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[#6E6E73] text-xs font-medium tracking-[0.18em] uppercase">What we do</p>
            <h2 className="font-cabin font-semibold text-[32px] tracking-[-0.03em] text-[#1D1D1F] mt-2 leading-none">Four houses, one roof.</h2>
          </div>
          <p className="text-[#424245] text-[15px] max-w-sm leading-relaxed">Restaurant, bar, gym and workspaces — calibrated for focus and ease.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <Link key={s.title} to={s.href} className="group relative overflow-hidden rounded-[20px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 transition-all duration-300 aspect-[4/3.4]">
              <img src={s.image} alt={s.title} className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.04] transition duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-3 inset-x-3 rounded-[16px] bg-white/[0.12] backdrop-blur-xl border border-white/20 p-4 shadow-[0_4px_24px_rgba(0,0,0,0.15)]">
                <h3 className="font-cabin font-semibold text-[17px] tracking-[-0.02em] text-white leading-none drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)]">{s.title}</h3>
                <p className="text-white/80 text-xs leading-relaxed mt-1 drop-shadow-sm">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-white text-xs font-medium mt-2 drop-shadow-sm group-hover:gap-1.5 transition-all">Explore <span>→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
