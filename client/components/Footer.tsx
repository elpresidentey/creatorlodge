import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#C6A15B]/20 bg-[#080808]">
      <div className="lounge-container flex flex-col justify-between gap-10 py-14 md:flex-row md:items-start md:py-16">
        <div className="flex max-w-sm flex-col gap-4">
          <Link to="/" onClick={() => window.scrollTo({ top: 0 })} className="flex items-center gap-3" aria-label="Back to home">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C6A15B]/50 bg-gradient-to-b from-white/[0.08] to-transparent">
              <svg width="15" height="15" viewBox="0 0 20 20" fill="none"><path d="M9.66735 1.61182C5.23482 1.61182 1.6082 5.23844 1.6082 9.67098C1.6082 14.1035 5.23482 17.7301 9.66735 17.7301C14.0999 17.7301 17.7265 14.1035 17.7265 9.67098C17.7265 5.23844 14.0999 1.61182 9.66735 1.61182ZM13.0522 13.0558L8.86144 10.4769V5.6414H10.0703V9.83216L13.6969 12.0081L13.0522 13.0558Z" fill="#C6A15B"/></svg>
            </div>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[19px] font-medium text-ivory">Creators Lounge</span>
              <span className="mt-1.5 font-cabin text-[9px] font-medium uppercase tracking-[0.3em] text-white/40">Maison · Galerie · Salon</span>
            </span>
          </Link>
          <p className="font-display text-[15px] italic leading-relaxed text-white/45">“Where Lagos dines, creates &amp; is seen.”</p>
        </div>

        <nav className="grid grid-cols-2 gap-x-12 gap-y-3 text-[13px] font-medium sm:grid-cols-3">
          <Link to="/spaces" className="text-white/55 transition hover:text-gold-soft">Salons</Link>
          <Link to="/outlets" className="text-white/55 transition hover:text-gold-soft">Houses</Link>
          <Link to="/menu" className="text-white/55 transition hover:text-gold-soft">Carte</Link>
          <Link to="/gallery" className="text-white/55 transition hover:text-gold-soft">Gallery</Link>
          <Link to="/membership" className="text-white/55 transition hover:text-gold-soft">Patronage</Link>
          <Link to="/contact" className="text-white/55 transition hover:text-gold-soft">Contact</Link>
        </nav>
      </div>

      <div className="lounge-container flex flex-col justify-between gap-2 border-t border-white/[0.07] py-6 sm:flex-row sm:items-center">
        <p className="text-[12px] tracking-[0.06em] text-white/30">© {new Date().getFullYear()} Creators Lounge · Lagos — 8am–11pm daily</p>
        <p className="text-[12px] tracking-[0.06em] text-white/30">12a Creator Way, VI · hello@creatorslounge.com · +234 800 111 0000</p>
      </div>
    </footer>
  );
}
