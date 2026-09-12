import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { events } from "@/lib/lounge-data";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export default function Events() {
  return (
    <div className="min-h-screen bg-[#1D1D1F]">
      <Navbar />
      <Breadcrumb trail={[{ label: "Calendar" }]} />

      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-[1312px] mx-auto">
          <p className="eyebrow text-white/50">Events</p>
          <h1 className="mt-4 font-cabin text-[40px] font-semibold leading-[0.95] tracking-[-0.035em] text-white sm:text-[56px]">
            Where ideas meet
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-white/65">Weekly dinners, jams and workshops — members first, guests welcome.</p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1312px] mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <div key={e.slug} className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[20px] border border-[#C6A15B]/20 shadow-[0_24px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1 hover:border-[#C6A15B]/55">
              <img src={e.image} alt={e.title} className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] group-hover:scale-[1.05]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 to-black/10" />
              <div className="absolute inset-x-0 top-0 flex flex-wrap gap-2 p-4">
                <span className="surface-chip border border-[#C6A15B]/30 bg-black/60 uppercase tracking-[0.14em] text-ivory backdrop-blur-md">{e.date} • {e.time}</span>
                <span className="surface-chip bg-gradient-to-b from-[#DDBB7A] to-[#C6A15B] text-[#171410]">{e.fee}</span>
              </div>
              <div className="relative flex flex-col p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-soft">{e.outlet}</p>
                <h3 className="mt-1.5 font-display text-[21px] font-medium leading-tight text-ivory">{e.title}</h3>
                <button
                  onClick={() => toast({ title: "RSVP sent", description: `You’re on the list for ${e.title} on ${e.date}.` })}
                  className="mt-4 inline-flex h-[46px] items-center justify-center rounded-[10px] border border-[#C6A15B]/40 bg-white/[0.06] text-[12px] font-semibold uppercase tracking-[0.12em] text-ivory backdrop-blur-sm transition hover:border-[#C6A15B]/70 hover:bg-white/10"
                >
                  RSVP
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-[1312px] mx-auto mt-8 bg-white/[0.06] border border-white/10 rounded-[20px] p-6 text-center">
          <p className="text-white font-semibold text-[15px]">Want to host?</p>
          <p className="text-white/60 text-[15px] mt-1">Pitch your workshop, launch or supper club — we handle space, food and promo.</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-[#1D1D1F] font-medium text-[15px] h-[50px] px-6 rounded-[10px] hover:bg-zinc-100">
              Propose an event
            </Link>
            <Link to="/gallery" className="inline-flex items-center justify-center border border-[#C6A15B]/40 text-gold-soft font-medium text-[15px] h-[50px] px-6 rounded-[10px] hover:bg-white/5">
              Browse La Galerie →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
