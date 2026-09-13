import { Link } from "react-router-dom";

const gallery = [
  {
    src: "/images/pexels-30987048.jpg",
    alt: "African dining table with cocktail in Nairobi restaurant",
  },
  {
    src: "/images/pexels-30689114.jpg",
    alt: "Creative team collaborating in Lagos office",
  },
  {
    src: "/images/pexels-37538487.jpg",
    alt: "Jollof rice and chicken in Abuja café",
  },
  {
    src: "/images/pexels-38942545.jpg",
    alt: "Guest viewing abstract art in Lagos gallery",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0E0E0F] lg:flex lg:min-h-[calc(100vh-74px)] lg:items-center">
      <img
        src="/images/pexels-38942545.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-[0.18]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0F]/70 via-[#0E0E0F]/85 to-[#0E0E0F]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#C6A15B]/25" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#C6A15B]/20" />

      <div className="lounge-container relative w-full py-20 md:py-28 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-14 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex w-full flex-col gap-6 lg:w-[48%] lg:py-4">
            <div className="plaque animate-rise max-w-full flex-wrap self-start" style={{ animationDelay: "60ms" }}>
              <span className="font-cabin text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-soft">N°01 — Space · Gallery · House</span>
              <span className="h-3 w-px bg-[#C6A15B]/30" />
              <span className="flex items-center gap-1.5 text-[11px] text-white/60">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#34C759] opacity-40" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#34C759]" />
                </span>
                VI · Yaba · Lekki
              </span>
            </div>

            <h1 className="animate-rise font-display text-[40px] font-medium leading-[1.02] tracking-[-0.015em] text-ivory min-[400px]:text-[44px] sm:text-[56px] md:text-[68px]" style={{ animationDelay: "160ms" }}>
              A private house
              <span className="block">to dine, create</span>
              <span className="block italic text-gold-soft">&amp; be seen.</span>
            </h1>

            <p className="animate-rise max-w-[460px] text-[15px] font-normal leading-[1.75] text-white/65 md:text-[17px]" style={{ animationDelay: "280ms" }}>
              Eight houses, one circle — restaurant, bar, ateliers and gallery walls for Lagos&rsquo; patrons, artists and muses.
            </p>

            <div className="animate-rise flex flex-wrap items-center gap-3 pt-2" style={{ animationDelay: "400ms" }}>
              <Link
                to="/membership"
                className="btn-shine pressable inline-flex h-[52px] items-center justify-center rounded-[10px] border border-[#E8C77A]/40 bg-gradient-to-b from-[#E8C77A] to-[#C6A15B] px-8 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#171410] shadow-[0_12px_40px_rgba(212,168,75,0.45),0_0_20px_rgba(212,168,75,0.2),inset_0_1px_0_rgba(255,255,255,0.5)] hover:brightness-110"
              >
                Request invitation
              </Link>
              <Link
                to="/outlets"
                className="pressable inline-flex h-[52px] items-center justify-center rounded-[10px] border border-[#C6A15B]/40 bg-white/[0.10] px-8 text-[13px] font-medium uppercase tracking-[0.1em] text-ivory backdrop-blur-sm hover:border-[#C6A15B]/60 hover:bg-white/[0.18]"
              >
                Enter the houses
              </Link>
            </div>

            <div className="animate-fade flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#C6A15B]/20 pt-5 text-[12px] tracking-[0.08em] text-white/45" style={{ animationDelay: "560ms" }}>
              <span className="uppercase">Patronage from ₦15k / day</span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <span className="uppercase">Exhibitions monthly</span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <span className="uppercase">8am — 11pm</span>
            </div>
          </div>

          <div className="flex w-full justify-center lg:w-[52%] lg:justify-end">
            <div className="animate-scale-in relative h-[380px] w-full max-w-[560px] sm:h-[440px] lg:h-[520px]" style={{ animationDelay: "240ms" }}>
              <div className="hero-float absolute left-0 top-8 h-[78%] w-[58%] overflow-hidden rounded-[20px] border border-[#C6A15B]/30 shadow-[0_32px_80px_rgba(0,0,0,0.55)] ring-1 ring-black/40 sm:top-10">
                <img
                  src={gallery[0].src}
                  alt={gallery[0].alt}
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/15 bg-black/55 px-3 py-2 backdrop-blur-md">
                  <span className="font-cabin text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-soft">The Dining Salon</span>
                  <span className="font-display text-[11px] italic text-white/70">N°I</span>
                </div>
              </div>

              <div className="hero-float-delay absolute right-0 top-0 z-10 h-[48%] w-[46%] overflow-hidden rounded-[18px] border border-[#C6A15B]/25 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img src={gallery[1].src} alt={gallery[1].alt} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 font-cabin text-[9px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-md">Atelier</span>
              </div>

              <div className="absolute bottom-8 right-3 z-20 h-[38%] w-[42%] overflow-hidden rounded-[18px] border border-[#C6A15B]/25 shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:right-5">
                <img src={gallery[2].src} alt={gallery[2].alt} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 font-cabin text-[9px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-md">The Menu</span>
              </div>

              <div className="absolute -bottom-1 left-[8%] z-30 inline-flex items-center gap-2.5 rounded-full border border-[#C6A15B]/30 bg-[#121110]/90 py-2 pl-2 pr-4 shadow-[0_12px_32px_rgba(0,0,0,0.45)] backdrop-blur-md">
                <img src={gallery[3].src} alt="" className="h-7 w-7 rounded-full border border-[#C6A15B]/40 object-cover" />
                <span className="text-[11px] font-medium tracking-[0.06em] text-white/85">Now showing · <span className="font-display italic text-gold-soft">Lagos in Gold</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
