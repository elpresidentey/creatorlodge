import { Link } from "react-router-dom";
import { Reveal } from "@/hooks/useReveal";
export default function ClosingCTA() {
  return (
    <section className="w-full bg-[#0E0E0F]">
      <div className="lounge-container section-pad">
        <Reveal y={30}>
        <div className="relative flex flex-col justify-between gap-8 overflow-hidden rounded-[24px] border border-[#C6A15B]/30 bg-gradient-to-br from-[#171510] via-[#121110] to-[#0C0C0D] p-8 shadow-[0_32px_80px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-[#C6A15B]/50 md:flex-row md:items-center md:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C6A15B]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-[#C6A15B]/10 blur-3xl" />
          <div className="relative flex max-w-xl flex-col gap-4">
            <p className="eyebrow text-[#C6A15B]">An Invitation</p>
            <h2 className="section-title text-ivory">Come for a day.<br /><span className="italic text-gold-soft">Stay for the circle.</span></h2>
            <p className="text-[15px] leading-[1.7] text-white/60">Reserve a table, a space or a wall — the house receives daily, 8am to 11pm.</p>
          </div>
          <div className="relative flex shrink-0 flex-wrap items-center gap-3">
            <Link to="/book" className="btn-shine pressable inline-flex h-[52px] items-center justify-center rounded-[10px] bg-gradient-to-b from-[#DDBB7A] to-[#C6A15B] px-8 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#171410] shadow-[0_12px_32px_rgba(198,161,91,0.3)] hover:brightness-105">Reserve a space</Link>
            <Link to="/contact" className="pressable inline-flex h-[52px] items-center justify-center rounded-[10px] border border-[#C6A15B]/30 px-8 text-[13px] font-medium uppercase tracking-[0.1em] text-ivory transition hover:border-[#C6A15B]/60 hover:bg-white/5">Speak to us</Link>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
