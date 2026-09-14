import { Link } from "react-router-dom";
import { creators } from "@/lib/lounge-data";
import { Reveal } from "@/hooks/useReveal";

export default function CreatorsStrip() {
  return (
    <section className="w-full border-y border-[#C6A15B]/20 bg-ivory">
      <div className="lounge-container section-pad">
        <Reveal className="section-head">
          <div className="section-head-copy">
            <p className="eyebrow eyebrow-rule text-[#7D6333]">The Circle</p>
            <h2 className="section-title text-[#171410]">Made by <span className="italic text-[#7D6333]">our people.</span></h2>
          </div>
          <Link to="/community" className="section-link pressable text-[#7D6333] hover:text-[#171410]">The circle →</Link>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-5">
          {creators.map((c, i)=>(
            <Reveal key={c.name} delay={(i % 4) * 80}>
            <div className="card-lift flex items-center gap-3.5 rounded-[16px] border border-[#C6A15B]/25 bg-[#141310] p-5 shadow-[0_18px_45px_rgba(23,20,16,0.3)] hover:border-[#C6A15B]/55">
              <img src={c.image} alt={c.name} className="h-12 w-12 shrink-0 rounded-full border border-[#C6A15B]/40 object-cover shadow-sm transition duration-700 hover:scale-110" loading="lazy" />
              <div className="min-w-0"><p className="truncate font-display text-[15px] font-medium leading-tight text-ivory">{c.name}</p><p className="mt-1 truncate text-[12px] leading-snug text-white/70">{c.role} · {c.outlet}</p></div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
