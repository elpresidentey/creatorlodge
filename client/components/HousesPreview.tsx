import { Link } from "react-router-dom";
import { outlets } from "@/lib/lounge-data";
import { Reveal } from "@/hooks/useReveal";

export default function HousesPreview() {
  return (
    <section className="w-full bg-ivory">
      <div className="lounge-container section-pad">
        <Reveal className="section-head">
          <div className="section-head-copy">
            <p className="eyebrow eyebrow-rule text-[#7D6333]">The Houses</p>
            <h2 className="section-title text-[#171410]">Eight doors, <span className="italic text-[#7D6333]">one key.</span></h2>
          </div>
          <Link to="/outlets" className="section-link pressable text-[#7D6333] hover:text-[#171410]">View all houses →</Link>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {outlets.map((o, i) => (
            <Reveal key={o.slug} delay={(i % 4) * 90}>
            <Link to={`/outlets/${o.slug}`} className="group card-lift pressable relative block aspect-[3/4] overflow-hidden">
              <img src={o.image} alt={o.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition group-hover:from-black/95" />
              <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
                <span className="surface-chip border border-[#C6A15B]/40 bg-black/60 text-gold-soft backdrop-blur-md">{o.tag}</span>
                <span className="font-display text-[12px] italic text-white/85">N°{["I", "II", "III", "IV", "V", "VI", "VII", "VIII"][i] ?? i + 1}</span>
              </div>
              <div className="overlay-text absolute inset-x-0 bottom-0 p-5">
                <h3 className="line-clamp-2 min-h-[50px] font-display text-[20px] font-medium leading-tight text-ivory">{o.name}</h3>
                <p className="mt-1.5 truncate font-display text-[12px] italic leading-snug text-gold-soft">{o.address}</p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">{o.hours}</p>
                <div className="mt-3 flex flex-wrap gap-1.5 border-t border-white/20 pt-3">{o.amenities.slice(0,3).map((a)=><span key={a} className="photo-chip">{a}</span>)}</div>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
