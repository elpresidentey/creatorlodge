import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { exhibitions, creators } from "@/lib/lounge-data";
import { Reveal } from "@/hooks/useReveal";

const exhibiting = creators.filter((c) =>
  ["Funmi D.", "Emeka O.", "Adaeze N.", "Kwame S."].includes(c.name)
);

export default function Gallery() {
  useTitle("La Galerie — Exhibitions in Lagos");
  const now = exhibitions.find((e) => e.status === "now") ?? exhibitions[0];
  const upcoming = exhibitions.filter((e) => e.status === "upcoming");
  const past = exhibitions.filter((e) => e.status === "past");

  return (
    <div className="min-h-screen bg-[#0E0E0F]">
      <Navbar />
      <Breadcrumb trail={[{ label: "La Galerie" }]} />

      {/* Hero */}
      <section className="lounge-container pb-12 pt-16 md:pb-16 md:pt-24">
        <Reveal className="max-w-3xl">
          <p className="eyebrow eyebrow-rule text-[#C6A15B]">La Galerie</p>
          <h1 className="mt-4 font-display text-[40px] font-medium leading-[0.98] tracking-[-0.015em] text-ivory sm:text-[56px]">
            Where Lagos hangs <span className="italic text-gold-soft">its heart.</span>
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-white/65">
            Monthly exhibitions, private views and resident artists — across the Ikoyi Atelier, VI Dome and Lekki Garden walls.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/book?space=gallery-wall"
              className="btn-shine pressable inline-flex h-[52px] items-center justify-center rounded-[10px] bg-gradient-to-b from-[#DDBB7A] to-[#C6A15B] px-8 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#171410] shadow-[0_12px_32px_rgba(198,161,91,0.3)] hover:brightness-105"
            >
              Book a private view
            </Link>
            <Link
              to="/community"
              className="pressable inline-flex h-[52px] items-center justify-center rounded-[10px] border border-[#C6A15B]/30 px-8 text-[13px] font-medium uppercase tracking-[0.1em] text-ivory hover:border-[#C6A15B]/60 hover:bg-white/5"
            >
              Meet the artists
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Now showing */}
      <section className="lounge-container pb-16 md:pb-24">
        <Reveal y={30}>
          <div className="group relative flex min-h-[480px] flex-col justify-end overflow-hidden rounded-[24px] border border-[#C6A15B]/30 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
            <img
              src={now.image}
              alt={now.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 to-black/10" />
            <div className="absolute inset-x-0 top-0 flex flex-wrap items-center gap-2 p-5 md:p-8">
              <span className="surface-chip bg-gradient-to-b from-[#DDBB7A] to-[#C6A15B] text-[#171410]">Now showing</span>
              <span className="surface-chip border border-[#C6A15B]/30 bg-black/60 text-ivory backdrop-blur-md">{now.dates}</span>
              <span className="surface-chip border border-white/15 bg-white/10 text-white/85 backdrop-blur-md">{now.venue} · {now.fee}</span>
            </div>
            <div className="relative max-w-2xl p-6 md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-soft">{now.edition}</p>
              <h2 className="mt-2 font-display text-[34px] font-medium leading-[1.05] text-ivory md:text-[48px]">{now.title}</h2>
              <p className="mt-3 max-w-xl text-[15px] leading-[1.7] text-white/70">{now.blurb}</p>
              <Link
                to="/book?space=gallery-wall"
                className="pressable mt-6 inline-flex h-[50px] items-center justify-center rounded-[10px] border border-[#C6A15B]/50 bg-black/50 px-8 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory backdrop-blur-md transition hover:bg-black/70"
              >
                Reserve vernissage seats
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Upcoming */}
      <section className="lounge-container pb-16 md:pb-24">
        <Reveal className="section-head">
          <div className="section-head-copy">
            <p className="eyebrow eyebrow-rule text-[#C6A15B]">Next on the walls</p>
            <h2 className="section-title text-ivory">Coming <span className="italic text-gold-soft">soon.</span></h2>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {upcoming.map((e, i) => (
            <Reveal key={e.slug} delay={(i % 2) * 110}>
              <div className="group card-lift relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-[20px] border border-[#C6A15B]/20 shadow-[0_24px_60px_rgba(0,0,0,0.45)] hover:border-[#C6A15B]/50">
                <img src={e.image} alt={e.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 to-black/10" />
                <div className="absolute inset-x-0 top-0 flex flex-wrap gap-2 p-4">
                  <span className="surface-chip border border-[#C6A15B]/30 bg-black/60 text-ivory backdrop-blur-md">{e.dates}</span>
                  <span className="surface-chip bg-gradient-to-b from-[#DDBB7A] to-[#C6A15B] text-[#171410]">{e.fee}</span>
                </div>
                <div className="relative p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-soft">{e.edition} · {e.venue}</p>
                  <h3 className="mt-1.5 font-display text-[26px] font-medium leading-tight text-ivory">{e.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/65">{e.blurb}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Archive */}
      <section className="w-full border-y border-[#C6A15B]/20 bg-ivory">
        <div className="lounge-container section-pad">
          <Reveal className="section-head">
            <div className="section-head-copy">
              <p className="eyebrow eyebrow-rule text-[#9A7B3F]">The archive</p>
              <h2 className="section-title text-[#171410]">Past <span className="italic text-[#9A7B3F]">hangs.</span></h2>
            </div>
            <p className="section-lede pb-1 text-[#6B6355]">Sold-out walls live on here — and with their collectors.</p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {past.map((e, i) => (
              <Reveal key={e.slug} delay={(i % 3) * 100}>
                <div className="group card-lift relative aspect-[3/3.6] overflow-hidden rounded-[20px] border border-[#171410]/10 shadow-[0_20px_55px_rgba(23,20,16,0.18)] hover:border-[#C6A15B]/50">
                  <img src={e.image} alt={e.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover saturate-[0.85] transition duration-[1200ms] group-hover:scale-[1.06] group-hover:saturate-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur-md">Archive · {e.dates}</span>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-soft">{e.edition}</p>
                    <h3 className="mt-1 font-display text-[22px] font-medium leading-tight text-ivory">{e.title}</h3>
                    <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-white/65">{e.blurb}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Artists */}
      <section className="lounge-container section-pad">
        <Reveal className="section-head">
          <div className="section-head-copy">
            <p className="eyebrow eyebrow-rule text-[#C6A15B]">In residence</p>
            <h2 className="section-title text-ivory">Artists of <span className="italic text-gold-soft">the house.</span></h2>
          </div>
          <Link to="/community" className="section-link pressable text-gold-soft transition hover:text-white">The full circle →</Link>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-5">
          {exhibiting.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 80}>
              <div className="card-lift flex items-center gap-3.5 rounded-[16px] border border-[#C6A15B]/25 bg-white/[0.04] p-5 hover:border-[#C6A15B]/55">
                <img src={c.image} alt={c.name} loading="lazy" className="h-12 w-12 shrink-0 rounded-full border border-[#C6A15B]/40 object-cover" />
                <div className="min-w-0">
                  <p className="truncate font-display text-[15px] font-medium leading-tight text-ivory">{c.name}</p>
                  <p className="mt-1 text-[12px] leading-snug text-white/55">{c.role} · {c.outlet}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 flex flex-col gap-5 rounded-[20px] border border-white/10 bg-white/[0.04] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
          <div>
            <p className="font-display text-[20px] font-medium text-ivory">Exhibit with us.</p>
            <p className="mt-1 text-[14px] text-white/60">Open call every quarter — painters, photographers, textile and light artists.</p>
          </div>
          <Link to="/contact" className="btn-shine pressable inline-flex h-[50px] shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-b from-[#DDBB7A] to-[#C6A15B] px-8 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#171410] hover:brightness-105">
            Submit portfolio
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
