import { Link } from "react-router-dom";
import { events } from "@/lib/lounge-data";

export default function EventsPreview() {
  return (
    <section className="w-full bg-[#1D1D1F] px-6 md:px-10 lg:px-16 py-16 md:py-24">
      <div className="max-w-[1312px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-white/50 text-xs font-semibold tracking-[0.18em] uppercase">This month</p>
            <h2 className="font-cabin font-semibold text-[32px] tracking-[-0.03em] text-white mt-2 leading-none">What’s on.</h2>
          </div>
          <Link to="/events" className="text-white text-[15px] font-medium hover:text-brand-yellow transition">See calendar →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {events.map((e)=>(
            <div key={e.slug} className="group surface-card flex flex-col">
              <div className="surface-media aspect-[16/10]">
                <img src={e.image} alt={e.title} loading="lazy" />
                <div className="absolute bottom-3 left-3 right-3 z-10 flex flex-wrap gap-2">
                  <span className="surface-chip bg-[#1D1D1F]/90 text-white backdrop-blur-sm border border-white/10">{e.date} · {e.time}</span>
                  <span className="surface-chip bg-brand-yellow text-[#1D1D1F]">{e.fee}</span>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h3 className="font-cabin font-semibold text-[17px] leading-tight text-[#1D1D1F]">{e.title}</h3>
                <p className="text-[#6E6E73] text-xs">{e.outlet}</p>
                <Link to="/events" className="inline-flex items-center justify-center h-[50px] mt-3 rounded-[12px] border border-black/10 text-[#1D1D1F] text-[15px] font-medium hover:bg-[#F5F5F7] transition">RSVP</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
