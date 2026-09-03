import { Link } from "react-router-dom";

const outletSlug: Record<string, string> = { "VI Dome": "vi-dome", Foundry: "yaba-foundry", Garden: "lekki-garden" };

const team = [
  { name: "Leonard", role: "Executive Chef", outlet: "VI Dome", image: "https://images.pexels.com/photos/32224390/pexels-photo-32224390.jpeg?auto=compress&cs=tinysrgb&w=800", pos: "50% 18%" },
  { name: "Udoka", role: "Mixologist", outlet: "Foundry", image: "https://images.pexels.com/photos/31893698/pexels-photo-31893698.jpeg?auto=compress&cs=tinysrgb&w=800", pos: "50% 15%" },
  { name: "Kemi", role: "Community", outlet: "VI Dome", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800", pos: "50% 22%" },
  { name: "Aneeka", role: "Gym Lead", outlet: "VI Dome", image: "https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&w=800", pos: "50% 12%" },
  { name: "David", role: "Studio Producer", outlet: "Foundry", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800", pos: "50% 16%" },
  { name: "Loretta", role: "Housekeeping", outlet: "Garden", image: "https://images.pexels.com/photos/33871730/pexels-photo-33871730.jpeg?auto=compress&cs=tinysrgb&w=800", pos: "50% 10%" },
];

export default function TeamSection() {
  return (
    <section className="bg-[#F5F5F7] w-full px-6 md:px-10 lg:px-16 py-16 md:py-24">
      <div className="max-w-[1312px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[#6E6E73] text-xs font-semibold tracking-[0.18em] uppercase">The people</p>
            <h2 className="font-cabin font-semibold text-[32px] tracking-[-0.03em] text-[#1D1D1F] mt-2 leading-none">The team behind the dome</h2>
          </div>
          <p className="text-[#424245] text-[15px] max-w-md leading-relaxed">Faces you’ll actually meet — no stock, no dark filters.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((m) => (
              <Link key={m.name} to={`/outlets/${outletSlug[m.outlet] || "vi-dome"}`} className="group relative overflow-hidden rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.18)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 transition-all duration-300 aspect-[4/3.4]">
              <img src={m.image} alt={`${m.name} — ${m.role}`} style={{ objectPosition: (m as any).pos }} className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.04] transition duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/50 transition" />
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 border border-white/15">
                <span className="h-1.5 w-1.5 rounded-full bg-[#34C759]" />
                <span className="text-white text-[8px] font-semibold tracking-widest uppercase">{m.outlet}</span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5">
                <h3 className="font-cabin font-semibold text-[16px] tracking-[-0.02em] text-white leading-none">{m.name}</h3>
                <p className="text-white/80 text-xs font-medium tracking-wide mt-1.5">{m.role}</p>
                <p className="text-white/60 text-[11px] mt-1 flex items-center gap-1">View house <span>→</span></p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[16px] bg-white border border-black/5 px-6 py-5 shadow-sm">
          <p className="text-[#424245] text-sm">Want to join? <span className="text-[#1D1D1F] font-medium">We're hiring hosts & creatives.</span></p>
          <a href="/contact" className="inline-flex items-center justify-center h-[50px] px-6 rounded-[10px] bg-[#1D1D1F] text-white font-medium text-[14px] hover:bg-black transition-colors">View open roles</a>
        </div>
      </div>
    </section>
  );
}
