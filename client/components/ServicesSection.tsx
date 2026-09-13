import { Link } from "react-router-dom";
import { Reveal } from "@/hooks/useReveal";

const services = [
  { no: "I", title: "The Kitchen", desc: "Jollof, suya & garden plates.", image: "/images/pexels-37538487.jpg", href: "/menu" },
  { no: "II", title: "The Bar", desc: "Flamed cocktails, Lagos nights.", image: "/images/pexels-37461041.jpg", href: "/menu" },
  { no: "III", title: "The Workspace", desc: "Desks, studios & quiet rooms.", image: "/images/pexels-30688907.jpg", href: "/spaces" },
  { no: "IV", title: "The Gallery", desc: "Monthly shows, private views.", image: "/images/pexels-38942545.jpg", href: "/gallery" },
  { no: "V", title: "The Garden", desc: "Brunch, beats & celebration halls.", image: "/images/pexels-35730164.jpg", href: "/spaces" },
  { no: "VI", title: "The Stage", desc: "Jazz, drums & runway shows.", image: "/images/pexels-37572315.jpg", href: "/events" },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#0E0E0F]">
      <div className="lounge-container section-pad">
        <Reveal className="section-head">
          <div className="section-head-copy">
            <p className="eyebrow eyebrow-rule text-[#C6A15B]">The Spaces</p>
            <h2 className="section-title text-ivory">Six spaces, <span className="italic text-gold-soft">one roof.</span></h2>
          </div>
          <p className="section-lede pb-1 text-white/60">Restaurant, bar, workspace and gallery — composed for lingering, not rushing.</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 110}>
            <Link to={s.href} className="group card-lift pressable relative block aspect-[4/4.1] overflow-hidden">
              <img src={s.image} alt={s.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]" loading="lazy" />
              <div className="photo-gradient transition group-hover:from-black/90" />
              <span className="absolute left-5 top-5 font-display text-[13px] italic tracking-[0.1em] text-gold-soft/90">{s.no}</span>
              <span className="absolute right-5 top-5 h-px w-8 bg-[#C6A15B]/50" />
              <div className="overlay-text absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-[20px] font-medium leading-tight text-ivory line-clamp-2 min-h-[50px]">{s.title}</h3>
                <p className="photo-desc">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-soft transition-all group-hover:gap-3">Enter <span aria-hidden>→</span></span>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
