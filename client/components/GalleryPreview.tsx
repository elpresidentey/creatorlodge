import { Link } from "react-router-dom";
import { exhibitions } from "@/lib/lounge-data";
import { Reveal } from "@/hooks/useReveal";

export default function GalleryPreview() {
  const now = exhibitions.find((e) => e.status === "now") ?? exhibitions[0];
  const next = exhibitions.filter((e) => e.status === "upcoming").slice(0, 2);

  return (
    <section className="w-full bg-ivory">
      <div className="lounge-container section-pad">
        <Reveal className="section-head">
          <div className="section-head-copy">
            <p className="eyebrow eyebrow-rule text-[#9A7B3F]">La Galerie</p>
            <h2 className="section-title text-[#171410]">
              Now showing <span className="italic text-[#9A7B3F]">&amp; soon.</span>
            </h2>
          </div>
          <Link to="/gallery" className="section-link pressable text-[#9A7B3F] hover:text-[#171410]">
            Enter the gallery →
          </Link>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <Reveal>
            <Link
              to="/gallery"
              className="group card-lift pressable relative block min-h-[420px] overflow-hidden rounded-[20px] border border-[#C6A15B]/25 shadow-[0_24px_60px_rgba(23,20,16,0.25)] hover:border-[#C6A15B]/55 lg:min-h-full"
            >
              <img
                src={now.image}
                alt={now.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 to-black/10" />
              <div className="absolute inset-x-0 top-0 flex flex-wrap gap-2 p-5">
                <span className="surface-chip bg-gradient-to-b from-[#DDBB7A] to-[#C6A15B] text-[#171410]">Now showing</span>
                <span className="surface-chip border border-[#C6A15B]/30 bg-black/60 text-ivory backdrop-blur-md">{now.dates}</span>
              </div>
              <div className="overlay-text absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-soft">{now.edition} · {now.venue}</p>
                <h3 className="mt-2 font-display text-[30px] font-medium leading-[1.05] text-ivory md:text-[36px]">{now.title}</h3>
                <p className="mt-2 max-w-md text-[14px] leading-relaxed text-white/70">{now.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-soft transition-all group-hover:gap-3">
                  Enter <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="grid gap-5">
            {next.map((e, i) => (
              <Reveal key={e.slug} delay={i * 110}>
                <Link
                  to="/gallery"
                  className="group card-lift pressable relative block min-h-[200px] overflow-hidden rounded-[20px] border border-[#C6A15B]/25 shadow-[0_20px_55px_rgba(23,20,16,0.22)] hover:border-[#C6A15B]/55"
                >
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/15" />
                  <div className="overlay-text relative flex h-full min-h-[200px] flex-col justify-center p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-soft">{e.dates} · {e.venue}</p>
                    <h3 className="mt-1.5 font-display text-[24px] font-medium leading-tight text-ivory">{e.title}</h3>
                    <p className="mt-1 line-clamp-1 text-[13px] text-white/65">{e.blurb}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
