import { Link } from "react-router-dom";

const gallery = [
  { src: "/images/pexels-30987048.jpg", alt: "African dining table with cocktail" },
  { src: "/images/pexels-30689114.jpg", alt: "Creative team collaborating" },
  { src: "/images/pexels-37538487.jpg", alt: "Jollof rice and chicken" },
  { src: "/images/pexels-38942545.jpg", alt: "Guest viewing abstract art" },
];

export default function HeroSection() {
  return (
    <section className="relative h-[calc(100dvh-48px)] w-full overflow-hidden bg-[#0E0E0F] sm:h-[calc(100dvh-52px)]">
      <img
        src="/images/pexels-38942545.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-[0.18] scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0F]/70 via-[#0E0E0F]/85 to-[#0E0E0F]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#C6A15B]/25" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#C6A15B]/20" />

      {/* MOBILE */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center overflow-y-auto px-6 pt-16 pb-10 sm:px-10 md:px-16 lg:hidden">
        <div className="flex flex-col gap-3 sm:gap-4">
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

          <h1 className="animate-rise font-display text-[32px] font-medium leading-[1.04] tracking-[-0.015em] text-ivory min-[400px]:text-[38px] sm:text-[46px]" style={{ animationDelay: "160ms" }}>
            A private house
            <span className="block">to dine, create</span>
            <span className="block italic text-gold-soft">&amp; be seen.</span>
          </h1>

          <p className="animate-rise max-w-[400px] text-[14px] leading-[1.7] text-white/65 sm:text-[15px]" style={{ animationDelay: "280ms" }}>
            Eight houses, one circle — restaurant, bar, ateliers and gallery walls for Lagos&rsquo; patrons, artists and muses.
          </p>

          <div className="animate-rise flex flex-wrap items-center gap-3 pt-1" style={{ animationDelay: "400ms" }}>
            <Link to="/membership" className="btn-shine pressable inline-flex h-[46px] items-center justify-center rounded-[10px] border border-[#E8C77A]/40 bg-gradient-to-b from-[#E8C77A] to-[#C6A15B] px-6 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#171410] shadow-[0_12px_40px_rgba(212,168,75,0.45)] hover:brightness-110 sm:h-[50px]">
              Request invitation
            </Link>
            <Link to="/outlets" className="pressable inline-flex h-[46px] items-center justify-center rounded-[10px] border border-[#C6A15B]/40 bg-white/[0.10] px-6 text-[12px] font-medium uppercase tracking-[0.1em] text-ivory backdrop-blur-sm hover:border-[#C6A15B]/60 hover:bg-white/[0.18] sm:h-[50px]">
              Enter the houses
            </Link>
          </div>

          <div className="animate-fade flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-[#C6A15B]/20 pt-4 text-[10px] tracking-[0.08em] text-white/50 sm:gap-x-6 sm:text-[11px]" style={{ animationDelay: "560ms" }}>
            <span className="uppercase">Patronage from ₦15k / day</span>
            <span className="uppercase">Exhibitions monthly</span>
            <span className="uppercase">8am — 11pm</span>
          </div>
        </div>

        <div className="animate-scale-in mt-5 flex gap-2 sm:mt-7" style={{ animationDelay: "240ms" }}>
          {[0, 3, 2].map((i) => (
            <div key={i} className="relative h-20 flex-1 overflow-hidden rounded-[14px] border border-[#C6A15B]/25 shadow-[0_12px_32px_rgba(0,0,0,0.4)] sm:h-24">
              <img src={gallery[i].src} alt={gallery[i].alt} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {i === 2 && (
                <span className="absolute bottom-1.5 left-2 rounded-full border border-white/15 bg-black/55 px-2 py-0.5 font-cabin text-[8px] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
                  The Menu
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP */}
      <div className="absolute inset-0 z-10 hidden lg:flex lg:items-center">
        <div className="lounge-container flex w-full items-center gap-16 py-20">
          <div className="flex w-[48%] flex-col gap-6 py-4">
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

            <h1 className="animate-rise font-display text-[56px] font-medium leading-[1.02] tracking-[-0.015em] text-ivory xl:text-[68px]" style={{ animationDelay: "160ms" }}>
              A private house
              <span className="block">to dine, create</span>
              <span className="block italic text-gold-soft">&amp; be seen.</span>
            </h1>

            <p className="animate-rise max-w-[460px] text-[17px] leading-[1.75] text-white/65" style={{ animationDelay: "280ms" }}>
              Eight houses, one circle — restaurant, bar, ateliers and gallery walls for Lagos&rsquo; patrons, artists and muses.
            </p>

            <div className="animate-rise flex flex-wrap items-center gap-3 pt-2" style={{ animationDelay: "400ms" }}>
              <Link to="/membership" className="btn-shine pressable inline-flex h-[52px] items-center justify-center rounded-[10px] border border-[#E8C77A]/40 bg-gradient-to-b from-[#E8C77A] to-[#C6A15B] px-8 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#171410] shadow-[0_12px_40px_rgba(212,168,75,0.45),0_0_20px_rgba(212,168,75,0.2),inset_0_1px_0_rgba(255,255,255,0.5)] hover:brightness-110">
                Request invitation
              </Link>
              <Link to="/outlets" className="pressable inline-flex h-[52px] items-center justify-center rounded-[10px] border border-[#C6A15B]/40 bg-white/[0.10] px-8 text-[13px] font-medium uppercase tracking-[0.1em] text-ivory backdrop-blur-sm hover:border-[#C6A15B]/60 hover:bg-white/[0.18]">
                Enter the houses
              </Link>
            </div>

            <div className="animate-fade flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#C6A15B]/20 pt-5 text-[12px] tracking-[0.08em] text-white/50" style={{ animationDelay: "560ms" }}>
              <span className="uppercase">Patronage from ₦15k / day</span>
              <span className="h-3 w-px bg-white/15" />
              <span className="uppercase">Exhibitions monthly</span>
              <span className="h-3 w-px bg-white/15" />
              <span className="uppercase">8am — 11pm</span>
            </div>
          </div>

          <div className="animate-scale-in relative w-[52%] shrink-0" style={{ animationDelay: "240ms" }}>
            <div className="relative mx-auto h-[420px] w-full max-w-[520px] xl:h-[480px] xl:max-w-[560px]">
              <div className="hero-float absolute left-0 top-8 h-[78%] w-[58%] overflow-hidden rounded-[20px] border border-[#C6A15B]/30 shadow-[0_32px_80px_rgba(0,0,0,0.55)] ring-1 ring-black/40">
                <img src={gallery[0].src} alt={gallery[0].alt} className="h-full w-full object-cover" fetchPriority="high" />
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

              <div className="absolute bottom-8 right-5 z-20 h-[38%] w-[42%] overflow-hidden rounded-[18px] border border-[#C6A15B]/25 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img src={gallery[2].src} alt={gallery[2].alt} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 font-cabin text-[9px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-md">The Menu</span>
              </div>

              <div className="absolute -bottom-1 left-[8%] z-30 inline-flex items-center gap-2.5 rounded-full border border-[#C6A15B]/30 bg-[#121110]/90 py-2 pl-2 pr-4 shadow-[0_12px_32px_rgba(0,0,0,0.45)] backdrop-blur-md">
                <img src={gallery[3].src} alt="" className="h-7 w-7 rounded-full border border-[#C6A15B]/40 object-cover" />
                <span className="text-[11px] font-medium tracking-[0.06em] text-white/85">
                  Now showing · <span className="font-display italic text-gold-soft">Lagos in Gold</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
