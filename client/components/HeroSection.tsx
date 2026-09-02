const gallery = [
  {
    src: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Dining interior at Creators Lounge",
  },
  {
    src: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Workspace",
  },
  {
    src: "https://images.pexels.com/photos/29106106/pexels-photo-29106106.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Fine dining plate",
  },
  {
    src: "https://images.pexels.com/photos/4485379/pexels-photo-4485379.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Bar",
  },
];

export default function HeroSection() {
  return (
    <section className="relative bg-[#1D1D1F] w-full overflow-hidden lg:min-h-[calc(100vh-74px)] lg:flex lg:items-center">
      <img
        src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-[0.22] scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D1F] via-[#1D1D1F]/92 to-[#1D1D1F]/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1F] via-transparent to-[#1D1D1F]/50" />
      <div className="absolute top-0 inset-x-0 h-px bg-white/[0.08]" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08]" />

      <div className="relative max-w-[1312px] mx-auto w-full px-6 md:px-10 lg:px-16 py-16 md:py-24 lg:py-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:w-[46%] w-full lg:py-4">
            <div className="inline-flex items-center gap-2.5 self-start rounded-full border border-white/12 bg-white/[0.07] backdrop-blur-md px-3.5 py-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-[#34C759] animate-ping opacity-40" />
                <span className="relative h-2 w-2 rounded-full bg-[#34C759]" />
              </span>
              <span className="text-white/75 text-[11px] font-medium tracking-[0.18em]">VI · YABA · LEKKI</span>
              <span className="h-3 w-px bg-white/15" />
              <span className="text-white/50 text-[11px]">8am — 11pm daily</span>
            </div>

            <h1 className="font-cabin font-semibold text-[42px] sm:text-[52px] md:text-[64px] leading-[0.9] tracking-[-0.045em] text-white">
              A place to
              <span className="block font-semibold text-white">dine, work</span>
              <span className="block font-semibold text-brand-yellow">&amp; create.</span>
            </h1>

            <p className="text-white/65 text-[15px] md:text-[17px] leading-relaxed max-w-[440px] font-light">
              Three houses — one membership. Restaurant, bar, workspaces and studios for Lagos creators.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="/outlets"
                className="inline-flex items-center justify-center h-[50px] px-7 rounded-[12px] bg-brand-yellow text-[#1D1D1F] font-semibold text-[14px] hover:opacity-90 transition-opacity shadow-[0_8px_24px_rgba(254,212,64,0.22)]"
              >
                Explore houses
              </a>
              <a
                href="/spaces"
                className="inline-flex items-center justify-center h-[50px] px-7 rounded-[12px] border border-white/18 bg-white/[0.04] text-white font-medium text-[14px] hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                View spaces
              </a>
            </div>

            <p className="text-white/40 text-xs tracking-wide">Members from ₦15k/day · Day passes available</p>
          </div>

          <div className="lg:w-[52%] w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] h-[360px] sm:h-[420px] lg:h-[480px]">
              <div className="hero-float absolute left-0 top-8 sm:top-10 w-[58%] h-[78%] rounded-[28px] overflow-hidden border border-white/12 shadow-[0_24px_60px_rgba(0,0,0,0.45)] ring-1 ring-[#B79238]/35">
                <img
                  src={gallery[0].src}
                  alt={gallery[0].alt}
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
              </div>

              <div className="hero-float-delay absolute right-0 top-0 w-[46%] h-[48%] rounded-[22px] overflow-hidden border border-white/12 shadow-[0_16px_40px_rgba(0,0,0,0.4)] z-10">
                <img src={gallery[1].src} alt={gallery[1].alt} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/15" />
              </div>

              <div className="absolute right-3 sm:right-5 bottom-8 w-[42%] h-[38%] rounded-[22px] overflow-hidden border border-white/12 shadow-[0_16px_40px_rgba(0,0,0,0.4)] z-20">
                <img src={gallery[2].src} alt={gallery[2].alt} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="absolute left-[8%] -bottom-1 z-30 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#1D1D1F]/80 backdrop-blur-md px-3.5 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                <img src={gallery[3].src} alt="" className="h-6 w-6 rounded-full object-cover" />
                <span className="text-white/80 text-[11px] font-medium tracking-wide">Open now · kitchen &amp; desks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
