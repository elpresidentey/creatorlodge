import Navbar from "@/components/Navbar";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { outlets } from "@/lib/lounge-data";

export default function Outlets() {
  return (
    <div className="min-h-screen bg-[#1D1D1F]">
      <Navbar />

      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-[1312px] mx-auto">
          <p className="eyebrow text-white/50">Outlets</p>
          <h1 className="mt-4 font-cabin text-[40px] font-semibold leading-[0.95] tracking-[-0.035em] text-white sm:text-[56px]">
            Find your dome
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-white/65">Three locations, one vibe. Each outlet blends dining, bar and focused work.</p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-8">
        <div className="max-w-[1312px] mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {outlets.map((o) => (
            <div key={o.slug} className="group relative flex min-h-[440px] flex-col justify-end overflow-hidden rounded-[20px] border border-[#C6A15B]/20 shadow-[0_24px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#C6A15B]/55">
              <img src={o.image} alt={o.name} className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] group-hover:scale-[1.06]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 to-black/10" />
              <span className="surface-chip absolute left-4 top-4 z-10 border border-[#C6A15B]/40 bg-black/60 uppercase tracking-[0.14em] text-gold-soft backdrop-blur-md">
                {o.tag}
              </span>
              <div className="relative flex flex-1 flex-col justify-end p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-soft">{o.area}</p>
                <h3 className="mt-1.5 font-display text-[20px] font-medium leading-tight text-ivory">{o.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/70">{o.address}</p>
                <p className="mt-1 text-[12px] text-white/50">{o.hours} • {o.phone}</p>
                <div className="mt-4 flex gap-2.5">
                  <Link to={`/outlets/${o.slug}`} className="inline-flex h-[46px] flex-1 items-center justify-center rounded-[10px] border border-white/20 bg-white/10 text-[13px] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition hover:border-[#C6A15B]/60 hover:bg-white/15">
                    View
                  </Link>
                  <Link to={`/book?outlet=${o.slug}`} className="inline-flex h-[46px] flex-1 items-center justify-center rounded-[10px] bg-gradient-to-b from-[#DDBB7A] to-[#C6A15B] text-[13px] font-semibold uppercase tracking-[0.08em] text-[#171410] transition hover:brightness-105">
                    Book
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1312px] mx-auto bg-white/[0.06] border border-white/10 rounded-[20px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-cabin font-semibold text-[17px]">Looking for something private?</h3>
            <p className="text-white/60 text-[15px] mt-1">Host launches, dinners or team offsites — we handle catering, AV and more.</p>
          </div>
          <Link to="/book" className="inline-flex bg-brand-yellow text-[#1D1D1F] font-semibold px-8 rounded-[10px] hover:opacity-90 shrink-0 h-[50px] items-center justify-center">
            Book a space
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
