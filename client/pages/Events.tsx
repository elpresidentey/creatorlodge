import Navbar from "@/components/Navbar";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { events } from "@/lib/lounge-data";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export default function Events() {
  return (
    <div className="min-h-screen bg-[#1D1D1F]">
      <Navbar />
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-[1312px] mx-auto">
          <p className="text-white/50 font-semibold tracking-[0.18em] text-xs uppercase">Events</p>
          <h1 className="font-cabin font-semibold text-[56px] leading-[0.92] tracking-[-0.04em] text-white mt-3">
            Where ideas meet
          </h1>
          <p className="text-white/60 text-[15px] leading-relaxed mt-3 max-w-xl">Weekly dinners, jams and workshops — members first, guests welcome.</p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1312px] mx-auto grid md:grid-cols-3 gap-5">
          {events.map((e) => (
            <div key={e.slug} className="group surface-card flex flex-col">
              <div className="surface-media aspect-[16/10]">
                <img src={e.image} alt={e.title} />
                <div className="absolute bottom-3 left-3 right-3 z-10 flex flex-wrap gap-2">
                  <span className="surface-chip bg-[#1D1D1F]/90 text-white backdrop-blur-sm border border-white/10 tracking-widest uppercase">{e.date} • {e.time}</span>
                  <span className="surface-chip bg-brand-yellow text-[#1D1D1F]">{e.fee}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-1">
                <h3 className="font-cabin font-semibold text-[17px] leading-tight text-[#1D1D1F]">{e.title}</h3>
                <p className="text-[#6E6E73] text-xs uppercase tracking-widest">{e.outlet}</p>
                <button
                  onClick={() => toast({ title: "RSVP sent", description: `You’re on the list for ${e.title} on ${e.date}.` })}
                  className="inline-flex mt-4 bg-[#1D1D1F] text-white font-medium text-[15px] rounded-[10px] hover:bg-black h-[50px] items-center justify-center"
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
          <Link to="/contact" className="inline-flex items-center justify-center mt-4 bg-white text-[#1D1D1F] font-medium text-[15px] h-[50px] px-6 rounded-[10px] hover:bg-zinc-100">
            Propose an event
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
