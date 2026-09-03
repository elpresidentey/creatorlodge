import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const { user, signOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const initial = user?.email?.[0]?.toUpperCase() || "•";

  return (
    <nav className="sticky top-0 w-full bg-[#1D1D1F]/95 backdrop-blur-xl supports-[backdrop-filter]:bg-[#1D1D1F]/80 border-b border-white/10 px-6 md:px-10 lg:px-16 py-2.5 flex items-center justify-between z-50 gap-3">
      {/* Logo */}
      <Link to="/" className="flex flex-col items-center gap-1 shrink-0">
        <div className="w-11 h-11 rounded-full border-2 border-[#B79238] flex items-center justify-center bg-transparent">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.66735 1.61182C5.23482 1.61182 1.6082 5.23844 1.6082 9.67098C1.6082 14.1035 5.23482 17.7301 9.66735 17.7301C14.0999 17.7301 17.7265 14.1035 17.7265 9.67098C17.7265 5.23844 14.0999 1.61182 9.66735 1.61182ZM13.0522 13.0558L8.86144 10.4769V5.6414H10.0703V9.83216L13.6969 12.0081L13.0522 13.0558Z"
              fill="#B79238"
              fillOpacity="0.9"
            />
          </svg>
        </div>
        <span className="text-white font-bold text-[8px] tracking-widest font-times text-center leading-none uppercase" style={{ fontFamily: "Times, serif" }}>
          CREATORS LOUNGE
        </span>
      </Link>

      {/* Desktop Nav — 5 primary + More dropdown */}
      <div className="hidden lg:flex items-center gap-1 flex-1 justify-center max-w-[580px] mx-3">
        <Link to="/" className="text-white font-bold text-[12px] tracking-wide hover:text-brand-yellow transition-colors px-2 py-1.5 rounded-lg hover:bg-white/5">
          Home
        </Link>
        <Link to="/spaces" className="text-white font-bold text-[12px] tracking-wide hover:text-brand-yellow transition-colors px-2 py-1.5 rounded-lg hover:bg-white/5">
          Spaces
        </Link>
        <Link to="/outlets" className="text-white font-bold text-[12px] tracking-wide hover:text-brand-yellow transition-colors px-2 py-1.5 rounded-lg hover:bg-white/5">
          Outlets
        </Link>
        <Link to="/membership" className="text-white font-bold text-[12px] tracking-wide hover:text-brand-yellow transition-colors px-2 py-1.5 rounded-lg hover:bg-white/5">
          Membership
        </Link>
        <Link to="/contact" className="text-white font-bold text-[12px] tracking-wide hover:text-brand-yellow transition-colors px-2 py-1.5 rounded-lg hover:bg-white/5">
          Contact
        </Link>

        {/* More dropdown — click + hover with bridge, no flicker */}
        <div className="relative">
          <button onClick={() => setMoreOpen(!moreOpen)} onMouseEnter={() => setMoreOpen(true)} className="text-white/80 font-bold text-[12px] tracking-wide hover:text-white transition-colors px-2 py-1.5 rounded-lg hover:bg-white/5 flex items-center gap-1">
            More <span className={`text-[9px] transition ${moreOpen ? "rotate-180" : ""}`}>▼</span>
          </button>
          {moreOpen && (
            <div onMouseLeave={() => setMoreOpen(false)} className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
              <div className="w-44 bg-white rounded-xl shadow-xl border border-black/10 overflow-hidden py-1">
                <Link to="/menu" onClick={() => setMoreOpen(false)} className="block px-4 py-2.5 text-sm font-bold text-[#1D1D1F] hover:bg-black/5">Menu</Link>
                <Link to="/events" onClick={() => setMoreOpen(false)} className="block px-4 py-2.5 text-sm font-bold text-[#1D1D1F] hover:bg-black/5">Events</Link>
                <Link to="/community" onClick={() => setMoreOpen(false)} className="block px-4 py-2.5 text-sm font-bold text-[#1D1D1F] hover:bg-black/5">Community</Link>
                <Link to="/about" onClick={() => setMoreOpen(false)} className="block px-4 py-2.5 text-sm font-bold text-[#1D1D1F] hover:bg-black/5">About</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop CTAs — 50px (auth-aware) */}
      <div className="hidden lg:flex items-center gap-2 shrink-0">
        {user ? (
          <>
            <Link to="/auth" className="inline-flex items-center gap-2 bg-white text-[#1D1D1F] font-medium text-[13px] h-[50px] px-4 rounded-[10px] hover:bg-zinc-100 transition">
              <span className="h-7 w-7 rounded-full bg-[#1D1D1F] text-white flex items-center justify-center text-xs font-bold">{initial}</span>
              <span className="max-w-[14ch] truncate">{user.email}</span>
            </Link>
            <button onClick={signOut} className="inline-flex items-center justify-center bg-white/[0.08] border border-white/40 text-white font-medium text-[13px] h-[50px] px-5 rounded-[10px] hover:bg-white/15 hover:border-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 transition-colors">Sign out</button>
          </>
        ) : (
          <Link to="/auth" className="inline-flex items-center justify-center bg-white/10 border border-white/10 text-white font-semibold text-[13px] h-[50px] px-5 rounded-[10px] hover:bg-white/15 transition-colors">
            Sign in
          </Link>
        )}
        <Link to="/book" className="inline-flex items-center justify-center bg-brand-yellow text-[#1D1D1F] font-semibold text-[13px] h-[50px] px-6 rounded-[10px] hover:opacity-90 transition-opacity">
          Book a space
        </Link>
      </div>

      {/* Hamburger — visible below lg (1024) */}
      <button
        className="lg:hidden text-white p-2 -mr-1 shrink-0"
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-brand-dark border-t border-white/10 flex flex-col p-6 gap-4 lg:hidden max-h-[75vh] overflow-auto shadow-2xl z-50">
          <Link to="/" className="text-white font-bold text-base" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/spaces" className="text-white font-bold text-base" onClick={() => setMenuOpen(false)}>Spaces</Link>
          <Link to="/outlets" className="text-white font-bold text-base" onClick={() => setMenuOpen(false)}>Outlets</Link>
          <Link to="/membership" className="text-white font-bold text-base" onClick={() => setMenuOpen(false)}>Membership</Link>
          <div className="h-px bg-white/10 my-1" />
          <p className="text-white/40 text-xs font-bold tracking-widest uppercase">More</p>
          <Link to="/menu" className="text-white/90 font-bold text-base" onClick={() => setMenuOpen(false)}>Menu</Link>
          <Link to="/events" className="text-white/90 font-bold text-base" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link to="/community" className="text-white/90 font-bold text-base" onClick={() => setMenuOpen(false)}>Community</Link>
          <Link to="/about" className="text-white/90 font-bold text-base" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="text-white/90 font-bold text-base" onClick={() => setMenuOpen(false)}>Contact</Link>
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
