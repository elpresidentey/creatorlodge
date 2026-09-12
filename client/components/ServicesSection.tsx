import { Link } from "react-router-dom";
import { Reveal } from "@/hooks/useReveal";

const services = [
  { no: "I", title: "La Table", desc: "Jollof, suya & garden plates.", image: "https://images.pexels.com/photos/37538487/pexels-photo-37538487.jpeg?auto=compress&cs=tinysrgb&w=1200", href: "/menu" },
  { no: "II", title: "Le Bar", desc: "Flamed cocktails, Lagos nights.", image: "https://images.pexels.com/photos/37461041/pexels-photo-37461041.jpeg?auto=compress&cs=tinysrgb&w=1200", href: "/menu" },
  { no: "III", title: "L’Atelier", desc: "Desks, studios & quiet salons.", image: "https://images.pexels.com/photos/30688907/pexels-photo-30688907.jpeg?auto=compress&cs=tinysrgb&w=1200", href: "/spaces" },
  { no: "IV", title: "La Galerie", desc: "Monthly shows, private views.", image: "https://images.pexels.com/photos/38942545/pexels-photo-38942545.jpeg?auto=compress&cs=tinysrgb&w=1200", href: "/gallery" },
  { no: "V", title: "Le Jardin", desc: "Brunch, beats & celebration halls.", image: "https://images.pexels.com/photos/35730164/pexels-photo-35730164.jpeg?auto=compress&cs=tinysrgb&w=1200", href: "/spaces" },
  { no: "VI", title: "La Scène", desc: "Jazz, drums & runway salons.", image: "https://images.pexels.com/photos/37572315/pexels-photo-37572315.jpeg?auto=compress&cs=tinysrgb&w=1200", href: "/events" },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#0E0E0F]">
      <div className="lounge-container section-pad">
        <Reveal className="section-head">
          <div className="section-head-copy">
            <p className="eyebrow eyebrow-rule text-[#C6A15B]">Les Salons</p>
            <h2 className="section-title text-ivory">Six salons, <span className="italic text-gold-soft">one roof.</span></h2>
          </div>
          <p className="section-lede pb-1 text-white/60">Restaurant, bar, atelier and galerie — composed for lingering, not rushing.</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 110}>
            <Link to={s.href} className="group card-lift pressable relative block aspect-[4/4.1] overflow-hidden rounded-[20px] border border-[#C6A15B]/20 shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:border-[#C6A15B]/45 hover:shadow-[0_28px_70px_rgba(0,0,0,0.5)]">
              <img src={s.image} alt={s.title} className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] group-hover:scale-[1.06]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition group-hover:from-black/90" />
              <span className="absolute left-5 top-5 font-display text-[13px] italic tracking-[0.1em] text-gold-soft/90">{s.no}</span>
              <span className="absolute right-5 top-5 h-px w-8 bg-[#C6A15B]/50" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-[22px] font-medium leading-tight text-ivory">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/65">{s.desc}</p>
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
