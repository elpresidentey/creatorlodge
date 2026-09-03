import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 w-full px-6 md:px-10 lg:px-16 py-10">
      <div className="max-w-[1312px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        <Link to="/" onClick={() => window.scrollTo({ top: 0 })} className="flex items-center gap-2.5" aria-label="Back to home">
          <div className="w-8 h-8 rounded-full border border-[#B79238] flex items-center justify-center shrink-0">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M9.66735 1.61182C5.23482 1.61182 1.6082 5.23844 1.6082 9.67098C1.6082 14.1035 5.23482 17.7301 9.66735 17.7301C14.0999 17.7301 17.7265 14.1035 17.7265 9.67098C17.7265 5.23844 14.0999 1.61182 9.66735 1.61182ZM13.0522 13.0558L8.86144 10.4769V5.6414H10.0703V9.83216L13.6969 12.0081L13.0522 13.0558Z" fill="#B79238"/></svg>
          </div>
          <span className="text-white font-cabin font-semibold text-xs tracking-[0.16em] uppercase">Creators Lounge</span>
        </Link>

        <nav className="flex flex-wrap gap-5 md:gap-6 text-[15px]">
          <Link to="/spaces" className="text-white/50 hover:text-white transition">Spaces</Link>
          <Link to="/outlets" className="text-white/50 hover:text-white transition">Houses</Link>
          <Link to="/menu" className="text-white/50 hover:text-white transition">Menu</Link>
          <Link to="/events" className="text-white/50 hover:text-white transition">Events</Link>
          <Link to="/membership" className="text-white/50 hover:text-white transition">Membership</Link>
          <Link to="/contact" className="text-white/50 hover:text-white transition">Contact</Link>
        </nav>
      </div>

      <div className="max-w-[1312px] mx-auto border-t border-white/10 mt-6 pt-6 flex flex-col sm:flex-row justify-between gap-3">
        <p className="text-white/30 text-xs">© {new Date().getFullYear()} Creators Lounge · Lagos — 8am–11pm daily</p>
        <p className="text-white/30 text-xs">12a Creator Way, VI · hello@creatorslounge.com · +234 800 111 0000</p>
      </div>
    </footer>
  );
}
