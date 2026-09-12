import { Link } from "react-router-dom";
import { spaces, outlets } from "@/lib/lounge-data";
import { Reveal } from "@/hooks/useReveal";

const featured = ["desk","gallery-wall","studio-podcast","dine","office","meeting","fashion-atelier","celebration-hall"];

export default function SpacesPreview() {
  return (
    <section className="w-full bg-ivory">
      <div className="lounge-container section-pad">
        <Reveal className="section-head">
          <div className="section-head-copy">
            <p className="eyebrow eyebrow-rule text-[#9A7B3F]">Les Salons Privés</p>
            <h2 className="section-title text-[#171410]">Work the way <span className="italic text-[#9A7B3F]">you wish.</span></h2>
          </div>
          <Link to="/spaces" className="section-link pressable text-[#9A7B3F] hover:text-[#171410]">Browse all salons →</Link>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {spaces.filter(s=>featured.includes(s.id)).map((s, i)=>(
            <Reveal key={s.id} delay={(i % 4) * 90}>
            <Link to={`/book?space=${s.id}&outlet=${outlets[0].slug}`} className="group card-lift pressable relative block aspect-[3/4] overflow-hidden rounded-[20px] border border-[#C6A15B]/20 shadow-[0_24px_60px_rgba(23,20,16,0.25)] hover:border-[#C6A15B]/55 hover:shadow-[0_32px_80px_rgba(23,20,16,0.35)]">
              <img src={s.image} alt={s.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.06]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition group-hover:from-black/95" />
              <span className="absolute right-4 top-4 z-10 rounded-full border border-[#C6A15B]/40 bg-black/60 px-2.5 py-1 text-[11px] font-semibold leading-none text-gold-soft backdrop-blur-md">{s.price}</span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-[19px] font-medium leading-tight text-ivory">{s.name}</h3>
                <p className="mt-2 line-clamp-2 min-h-[42px] text-[13px] leading-relaxed text-white/70">{s.desc}</p>
                <p className="mt-3 border-t border-white/15 pt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-soft">{s.capacity}</p>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
