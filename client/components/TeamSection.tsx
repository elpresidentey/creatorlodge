import { Link } from "react-router-dom";
import { Reveal } from "@/hooks/useReveal";

const outletSlug: Record<string, string> = { "VI Dome": "vi-dome", Foundry: "yaba-foundry", Garden: "lekki-garden" };

const team = [
  { name: "Leonard", role: "Executive Chef", outlet: "VI Dome", image: "https://images.pexels.com/photos/36838303/pexels-photo-36838303.jpeg?auto=compress&cs=tinysrgb&w=800", pos: "50% 18%" },
  { name: "Udoka", role: "Mixologist", outlet: "Foundry", image: "https://images.pexels.com/photos/37461041/pexels-photo-37461041.jpeg?auto=compress&cs=tinysrgb&w=800", pos: "50% 15%" },
  { name: "Kemi", role: "Community", outlet: "VI Dome", image: "https://images.pexels.com/photos/36245744/pexels-photo-36245744.jpeg?auto=compress&cs=tinysrgb&w=800", pos: "50% 22%" },
  { name: "Aneeka", role: "Gym Lead", outlet: "VI Dome", image: "https://images.pexels.com/photos/27593743/pexels-photo-27593743.jpeg?auto=compress&cs=tinysrgb&w=800", pos: "50% 12%" },
  { name: "David", role: "Studio Producer", outlet: "Foundry", image: "https://images.pexels.com/photos/20695302/pexels-photo-20695302.jpeg?auto=compress&cs=tinysrgb&w=800", pos: "50% 16%" },
  { name: "Loretta", role: "Housekeeping", outlet: "Garden", image: "https://images.pexels.com/photos/38909243/pexels-photo-38909243.jpeg?auto=compress&cs=tinysrgb&w=800", pos: "50% 10%" },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-[#0E0E0F]">
      <div className="lounge-container section-pad">
        <Reveal className="section-head">
          <div className="section-head-copy">
            <p className="eyebrow eyebrow-rule text-[#C6A15B]">Les Hôtes</p>
            <h2 className="section-title text-ivory">The hands behind <span className="italic text-gold-soft">the house</span></h2>
          </div>
          <p className="section-lede pb-1 text-white/60">Faces you&rsquo;ll actually meet — chefs, sommeliers, ateliers, muses.</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 110}>
              <Link to={`/outlets/${outletSlug[m.outlet] || "vi-dome"}`} className="group card-lift pressable relative block aspect-[4/3.4] overflow-hidden rounded-[20px] border border-[#C6A15B]/15 shadow-[0_8px_32px_rgba(0,0,0,0.18)] hover:border-[#C6A15B]/45 hover:shadow-[0_12px_40px_rgba(0,0,0,0.22)]">
              <img src={m.image} alt={`${m.name} — ${m.role}`} style={{ objectPosition: (m as any).pos }} className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.06]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition group-hover:from-black/80" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-[#C6A15B]/30 bg-black/55 px-3 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#34C759]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white">{m.outlet}</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="card-title text-white">{m.name}</h3>
                <p className="mt-1.5 text-[13px] font-medium tracking-wide text-white/80">{m.role}</p>
                <p className="mt-2 flex items-center gap-1.5 text-[12px] text-gold-soft/80 transition-all group-hover:gap-3">View house <span aria-hidden>→</span></p>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 flex flex-col gap-5 rounded-[20px] border border-[#C6A15B]/25 bg-gradient-to-br from-[#171510] to-[#101010] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.4)] sm:flex-row sm:items-center sm:justify-between md:p-8">
          <p className="text-[15px] leading-relaxed text-white/70">Want to join? <span className="font-medium text-ivory">We’re hiring hosts & creatives.</span></p>
          <a href="/contact" className="btn-shine pressable inline-flex h-[48px] shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-b from-[#DDBB7A] to-[#C6A15B] px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#171410] hover:brightness-105">View open roles</a>
        </Reveal>
      </div>
    </section>
  );
}
