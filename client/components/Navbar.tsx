import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useScrolled } from "@/hooks/useReveal";

export default function Navbar() {
  const { user, signOut } = useAuth();
  const scrolled = useScrolled(24);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const initial = user?.email?.[0]?.toUpperCase() || "•";
  const location = useLocation();
  const navigate = useNavigate();
  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <nav className={`sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-500 ${scrolled ? "border-[#C6A15B]/35 bg-[#0B0B0C]/95 shadow-[0_12px_40px_rgba(0,0,0,0.45)]" : "border-[#C6A15B]/20 bg-[#0E0E0F]/92 supports-[backdrop-filter]:bg-[#0E0E0F]/80"}`}>
      <div className="border-b border-white/[0.06]">
        <div className="lounge-container flex items-center justify-center px-4 py-1.5">
          <p className="truncate text-center text-[9px] font-medium uppercase tracking-[0.18em] text-[#C6A15B]/90 sm:text-[10px] sm:tracking-[0.28em]">Private members&rsquo; house — Lagos<span className="hidden min-[400px]:inline"> · Est. MMXIX</span></p>
        </div>
      </div>
      <div className="lounge-container flex items-center justify-between gap-3 py-3">
      {/* Logo — always an obvious way home */}
      <a href="/" onClick={goHome} aria-label="Creators Lounge — home" className="flex shrink-0 items-center gap-3 rounded-lg px-1 py-0.5 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]/50">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C6A15B]/60 bg-gradient-to-b from-white/[0.08] to-transparent shadow-[0_0_0_1px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.12)]">
          <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.66735 1.61182C5.23482 1.61182 1.6082 5.23844 1.6082 9.67098C1.6082 14.1035 5.23482 17.7301 9.66735 17.7301C14.0999 17.7301 17.7265 14.1035 17.7265 9.67098C17.7265 5.23844 14.0999 1.61182 9.66735 1.61182ZM13.0522 13.0558L8.86144 10.4769V5.6414H10.0703V9.83216L13.6969 12.0081L13.0522 13.0558Z"
              fill="#C6A15B"
              fillOpacity="0.95"
            />
          </svg>
        </div>
        <span className="flex flex-col leading-none">
          <span className="font-display text-[17px] font-medium tracking-[0.01em] text-ivory">
            Creators Lounge
          </span>
          <span className="mt-1 font-cabin text-[9px] font-medium uppercase tracking-[0.3em] text-white/45">
            Dine · Work · Exhibit
          </span>
        </span>
      </a>

      {/* Desktop Nav — 5 primary + More dropdown */}
      <div className="mx-3 hidden max-w-[620px] flex-1 items-center justify-center gap-1 lg:flex">
        <Link to="/" onClick={() => window.scrollTo({ top: 0 })} className="rounded-lg px-3 py-2 font-cabin text-[12px] font-medium uppercase tracking-[0.14em] text-white/75 transition-colors hover:bg-white/5 hover:text-gold-soft">
          Home
        </Link>
        <Link to="/spaces" className="rounded-lg px-3 py-2 font-cabin text-[12px] font-medium uppercase tracking-[0.14em] text-white/75 transition-colors hover:bg-white/5 hover:text-gold-soft">
          Salons
        </Link>
        <Link to="/outlets" className="rounded-lg px-3 py-2 font-cabin text-[12px] font-medium uppercase tracking-[0.14em] text-white/75 transition-colors hover:bg-white/5 hover:text-gold-soft">
          Houses
        </Link>
        <Link to="/membership" className="rounded-lg px-3 py-2 font-cabin text-[12px] font-medium uppercase tracking-[0.14em] text-white/75 transition-colors hover:bg-white/5 hover:text-gold-soft">
          Patronage
        </Link>
        <Link to="/contact" className="rounded-lg px-3 py-2 font-cabin text-[12px] font-medium uppercase tracking-[0.14em] text-white/75 transition-colors hover:bg-white/5 hover:text-gold-soft">
          Contact
        </Link>

        {/* More dropdown — click + hover with bridge, no flicker */}
        <div className="relative">
          <button onClick={() => setMoreOpen(!moreOpen)} onMouseEnter={() => setMoreOpen(true)} className="flex items-center gap-1.5 rounded-lg px-3 py-2 font-cabin text-[12px] font-medium uppercase tracking-[0.14em] text-white/60 transition-colors hover:bg-white/5 hover:text-white">
            Atelier <span className={`text-[9px] transition ${moreOpen ? "rotate-180" : ""}`}>▼</span>
          </button>
          {moreOpen && (
            <div onMouseLeave={() => setMoreOpen(false)} className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
              <div className="w-52 overflow-hidden rounded-2xl border border-[#C6A15B]/20 bg-[#141311] py-2 shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
                <Link to="/menu" onClick={() => setMoreOpen(false)} className="block px-5 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-gold-soft">Carte & Bar</Link>
                <Link to="/gallery" onClick={() => setMoreOpen(false)} className="block px-5 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-gold-soft">Gallery</Link>
                <Link to="/events" onClick={() => setMoreOpen(false)} className="block px-5 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-gold-soft">Calendar</Link>
                <Link to="/community" onClick={() => setMoreOpen(false)} className="block px-5 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-gold-soft">The Circle</Link>
                <Link to="/about" onClick={() => setMoreOpen(false)} className="block px-5 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-gold-soft">Maison</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop CTAs — compact 44px to keep nav slim and aligned */}
      <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
        {user ? (
          <>
            <Link to="/auth" className="inline-flex h-11 items-center gap-2 rounded-[10px] bg-white px-4 text-[13px] font-medium text-[#1D1D1F] transition hover:bg-ivory">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1D1D1F] text-xs font-bold text-white">{initial}</span>
              <span className="max-w-[14ch] truncate">{user.email}</span>
            </Link>
            <button onClick={signOut} className="inline-flex h-11 items-center justify-center rounded-[10px] border border-white/25 bg-white/[0.06] px-5 text-[13px] font-medium text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]/50">Sign out</button>
          </>
        ) : (
          <Link to="/auth" className="inline-flex h-11 items-center justify-center rounded-[10px] border border-white/15 bg-white/[0.06] px-5 text-[13px] font-medium text-white transition-colors hover:bg-white/10">
            Sign in
          </Link>
        )}
        <Link to="/book" className="btn-shine pressable inline-flex h-11 items-center justify-center rounded-[10px] bg-gradient-to-b from-[#DDBB7A] to-[#C6A15B] px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#171410] shadow-[0_8px_24px_rgba(198,161,91,0.28),inset_0_1px_0_rgba(255,255,255,0.4)] hover:brightness-105">
          Reserve
        </Link>
      </div>

      {/* Hamburger — visible below lg (1024) */}
      <button
        className="shrink-0 p-2.5 -mr-2 text-white lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          {menuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="animate-fade absolute left-0 right-0 top-full z-50 flex max-h-[80dvh] flex-col gap-4 overflow-auto border-t border-[#C6A15B]/20 bg-[#0E0E0F] p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-2xl lg:hidden">
          <Link to="/" className="text-white font-cabin font-medium text-[15px]" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/spaces" className="text-white font-cabin font-medium text-[15px]" onClick={() => setMenuOpen(false)}>Spaces</Link>
          <Link to="/outlets" className="text-white font-cabin font-medium text-[15px]" onClick={() => setMenuOpen(false)}>Outlets</Link>
          <Link to="/membership" className="text-white font-cabin font-medium text-[15px]" onClick={() => setMenuOpen(false)}>Membership</Link>
          <div className="h-px bg-white/10 my-1" />
          <p className="text-white/40 text-xs font-medium tracking-[0.18em] uppercase">More</p>
          <Link to="/menu" className="text-white/90 font-cabin font-medium text-[15px]" onClick={() => setMenuOpen(false)}>Menu</Link>
          <Link to="/gallery" className="text-white/90 font-cabin font-medium text-[15px]" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link to="/events" className="text-white/90 font-cabin font-medium text-[15px]" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link to="/community" className="text-white/90 font-cabin font-medium text-[15px]" onClick={() => setMenuOpen(false)}>Community</Link>
          <Link to="/about" className="text-white/90 font-cabin font-medium text-[15px]" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="text-white/90 font-cabin font-medium text-[15px]" onClick={() => setMenuOpen(false)}>Contact</Link>
          <div className="flex flex-col gap-3 pt-3 border-t border-white/10 mt-1">
            {user ? (
              <>
                <Link to="/auth" onClick={() => setMenuOpen(false)} className="inline-flex items-center justify-center gap-2 bg-white text-[#1D1D1F] font-medium text-[15px] h-[50px] px-6 rounded-[10px] text-center">
                  <span className="h-7 w-7 rounded-full bg-[#1D1D1F] text-white flex items-center justify-center text-xs font-bold">{initial}</span>
                  <span className="truncate">{user.email}</span>
                </Link>
                <button onClick={() => { signOut(); setMenuOpen(false); }} className="inline-flex items-center justify-center bg-white/[0.08] border border-white/40 text-white font-medium text-[15px] h-[50px] px-6 rounded-[10px] hover:bg-white/15 hover:border-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 transition-colors">Sign out</button>
              </>
            ) : (
              <Link to="/auth" onClick={() => setMenuOpen(false)} className="inline-flex items-center justify-center bg-white/10 border border-white/10 text-white font-semibold text-[15px] h-[50px] px-6 rounded-[10px] hover:bg-white/15 transition-colors text-center">
                Sign in
              </Link>
            )}
            <Link to="/book" onClick={() => setMenuOpen(false)} className="inline-flex items-center justify-center bg-brand-yellow text-[#1D1D1F] font-semibold text-[15px] h-[50px] px-6 rounded-[10px] hover:opacity-90 transition-opacity text-center">
              Book a space
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
