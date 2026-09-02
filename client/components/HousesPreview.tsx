import { Link } from "react-router-dom";
import { outlets } from "@/lib/lounge-data";

export default function HousesPreview() {
  return (
    <section className="w-full bg-[#F5F5F7] px-6 md:px-10 lg:px-16 py-16 md:py-24">
      <div className="max-w-[1312px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[#6E6E73] text-xs font-semibold tracking-[0.18em] uppercase">The houses</p>
            <h2 className="font-cabin font-semibold text-[32px] tracking-[-0.03em] text-[#1D1D1F] mt-2 leading-none">Three doors, same key.</h2>
          </div>
          <Link to="/outlets" className="text-[#0071E3] text-[15px] font-medium hover:underline">View all houses →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {outlets.map((o) => (
            <Link key={o.slug} to={`/outlets/${o.slug}`} className="group surface-card">
              <div className="surface-media aspect-[4/2.8]">
                <img src={o.image} alt={o.name} loading="lazy" />
                <span className="surface-chip absolute top-3 left-3 z-10 bg-[#1D1D1F]/90 text-white backdrop-blur-sm border border-white/10">{o.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="font-cabin font-semibold text-[17px] text-[#1D1D1F] leading-tight">{o.name}</h3>
                <p className="text-[#424245] text-xs mt-1">{o.address} · {o.hours}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">{o.amenities.slice(0,3).map((a)=><span key={a} className="text-[11px] bg-[#F5F5F7] border border-black/5 px-2 py-1 rounded-full text-[#424245]">{a}</span>)}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
