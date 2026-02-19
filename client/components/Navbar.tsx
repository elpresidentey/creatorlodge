import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-brand-dark px-6 md:px-10 py-4 flex items-center justify-between relative z-50">
      {/* Logo */}
      <Link to="/" className="flex flex-col items-center gap-1 min-w-[80px]">
        <div className="w-12 h-12 rounded-full border-2 border-[#B79238] flex items-center justify-center bg-transparent">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.66735 1.61182C5.23482 1.61182 1.6082 5.23844 1.6082 9.67098C1.6082 14.1035 5.23482 17.7301 9.66735 17.7301C14.0999 17.7301 17.7265 14.1035 17.7265 9.67098C17.7265 5.23844 14.0999 1.61182 9.66735 1.61182ZM13.0522 13.0558L8.86144 10.4769V5.6414H10.0703V9.83216L13.6969 12.0081L13.0522 13.0558Z"
              fill="#B79238"
              fillOpacity="0.9"
            />
          </svg>
        </div>
        <span className="text-white font-bold text-[9px] tracking-wider font-times text-center leading-tight uppercase" style={{ fontFamily: "Times, serif" }}>
          CREATORS LOUNGE
        </span>
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-white font-bold text-lg hover:text-brand-yellow transition-colors">
          Home
        </Link>
        <Link to="/about" className="text-white font-bold text-lg hover:text-brand-yellow transition-colors">
          About
        </Link>
        <Link to="/contact" className="text-white font-bold text-lg hover:text-brand-yellow transition-colors">
          Contact
        </Link>
        <Link to="/outlets" className="text-white font-bold text-lg hover:text-brand-yellow transition-colors">
          Outlets
        </Link>
      </div>

      {/* Desktop CTA Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <button className="bg-brand-blue text-white font-bold text-base px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity">
          Sign in
        </button>
        <button className="bg-brand-pink text-[#0D261B] font-bold text-base px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity">
          Book a space
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white p-2"
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
        <div className="absolute top-full left-0 right-0 bg-brand-dark border-t border-white/10 flex flex-col p-6 gap-4 md:hidden">
          <Link to="/" className="text-white font-bold text-lg" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="text-white font-bold text-lg" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="text-white font-bold text-lg" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/outlets" className="text-white font-bold text-lg" onClick={() => setMenuOpen(false)}>Outlets</Link>
          <div className="flex flex-col gap-3 pt-2">
            <button className="bg-brand-blue text-white font-bold text-base px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity">
              Sign in
            </button>
            <button className="bg-brand-pink text-[#0D261B] font-bold text-base px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity">
              Book a space
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
