import { Link } from "react-router-dom";

export default function HighlightsBar() {
  return (
    <section className="relative bg-[#1E1E1E] border-y border-white/10">
      <div className="max-w-[1312px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-center gap-6 py-5 md:py-6">
          {/* Stats */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8 flex-1 justify-center md:justify-start">
            <div className="flex items-center gap-3">
              <span className="h-9 w-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white text-sm">◉</span>
              <div>
                <p className="text-white font-black text-sm leading-none">3 outlets</p>
                <p className="text-white/50 text-xs">VI • Yaba • Lekki</p>
              </div>
              <span className="hidden md:block h-8 w-px bg-white/10 ml-2" />
            </div>
            <div className="flex items-center gap-3">
              <span className="h-9 w-9 rounded-full bg-brand-yellow text-brand-dark font-black flex items-center justify-center text-xs">★</span>
              <div>
                <p className="text-white font-black text-sm leading-none">4.8/5 • 2,341</p>
                <p className="text-white/50 text-xs">Average rating</p>
              </div>
              <span className="hidden md:block h-8 w-px bg-white/10 ml-2" />
            </div>
            <div className="flex items-center gap-3">
              <span className="h-9 w-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white text-xs">⚡</span>
              <div>
                <p className="text-white font-black text-sm leading-none">12k+ creators</p>
                <p className="text-white/50 text-xs">Hosted since 2019</p>
              </div>
              <span className="hidden md:block h-8 w-px bg-white/10 ml-2" />
            </div>
            <div className="flex items-center gap-2 text-white/60 text-xs">
              <span className="hidden lg:inline">Featured in</span>
              <span className="font-bold tracking-widest text-white/80 text-xs">GUARDIAN</span>
              <span className="text-white/30">•</span>
              <span className="font-bold tracking-widest text-white/80 text-xs">TECHCABAL</span>
              <span className="text-white/30">•</span>
              <span className="font-bold tracking-widest text-white/80 text-xs">NATIVE</span>
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/events"
            className="inline-flex items-center gap-2 bg-white text-brand-dark font-bold text-sm px-5 rounded-[10px] hover:bg-brand-yellow transition-colors shrink-0 h-[50px] justify-center"
          >
            This week: Founders' Dinner
            <span className="h-6 w-6 rounded-full bg-brand-dark text-white flex items-center justify-center text-xs">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
