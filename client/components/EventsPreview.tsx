import { Link } from "react-router-dom";
import { events } from "@/lib/lounge-data";
import { Reveal } from "@/hooks/useReveal";

export default function EventsPreview() {
  return (
    <section className="w-full bg-[#0E0E0F]">
      <div className="lounge-container section-pad">
        <Reveal className="section-head">
          <div className="section-head-copy">
            <p className="eyebrow eyebrow-rule text-[#C6A15B]">Vernissage · Ce Mois</p>
            <h2 className="section-title text-ivory">What&rsquo;s <span className="italic text-gold-soft">on.</span></h2>
          </div>
          <Link to="/events" className="section-link pressable text-gold-soft transition hover:text-white">See calendar →</Link>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
          {events.slice(0, 6).map((e, i)=>(
            <Reveal key={e.slug} delay={(i % 3) * 110}>
            <div className="group card-lift relative aspect-[3/3.8] overflow-hidden rounded-[20px] border border-[#C6A15B]/20 shadow-[0_24px_60px_rgba(0,0,0,0.45)] hover:border-[#C6A15B]/50">
              <img src={e.image} alt={e.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.06]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />
              <div className="absolute inset-x-0 top-0 flex flex-wrap gap-2 p-4">
                <span className="surface-chip border border-[#C6A15B]/30 bg-black/60 text-ivory backdrop-blur-md">{e.date} · {e.time}</span>
                <span className="surface-chip bg-gradient-to-b from-[#DDBB7A] to-[#C6A15B] text-[#171410]">{e.fee}</span>
              </div>
              <div className="overlay-text absolute inset-x-0 bottom-0 flex flex-col p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-soft">{e.outlet}</p>
                <h3 className="mt-1.5 line-clamp-2 min-h-[52px] font-display text-[21px] font-medium leading-tight text-ivory">{e.title}</h3>
                <Link to="/events" className="pressable mt-4 inline-flex h-[46px] items-center justify-center rounded-[12px] border border-[#C6A15B]/40 bg-white/[0.06] text-[12px] font-semibold uppercase tracking-[0.12em] text-ivory backdrop-blur-sm transition hover:border-[#C6A15B]/70 hover:bg-white/10">RSVP</Link>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
