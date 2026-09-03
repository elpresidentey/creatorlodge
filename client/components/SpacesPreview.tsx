import { Link } from "react-router-dom";
import { spaces, outlets } from "@/lib/lounge-data";

const featured = ["desk","office","meeting","studio-podcast"];

export default function SpacesPreview() {
  return (
    <section className="w-full bg-white px-6 md:px-10 lg:px-16 py-16 md:py-24">
      <div className="max-w-[1312px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[#6E6E73] text-xs font-semibold tracking-[0.18em] uppercase">Spaces</p>
            <h2 className="font-cabin font-semibold text-[32px] tracking-[-0.03em] text-[#1D1D1F] mt-2 leading-none">Work the way you want.</h2>
          </div>
          <Link to="/spaces" className="text-[#0071E3] text-[15px] font-medium hover:underline">Browse all spaces →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {spaces.filter(s=>featured.includes(s.id)).map((s)=>(
            <Link key={s.id} to={`/book?space=${s.id}&outlet=${outlets[0].slug}`} className="group surface-card bg-[#F5F5F7]">
              <div className="surface-media aspect-[4/3]">
                <img src={s.image} alt={s.name} loading="lazy" />
                <span className="absolute top-2.5 right-2.5 z-10 bg-white/95 text-[#1D1D1F] border border-black/5 text-[10px] font-semibold px-2 py-0.5 rounded-full leading-tight">{s.price}</span>
              </div>
              <div className="p-5">
                <h3 className="font-cabin font-semibold text-[17px] leading-tight text-[#1D1D1F]">{s.name}</h3>
                <p className="text-[#6E6E73] text-[15px] leading-relaxed mt-2">{s.desc}</p>
                <p className="text-[#86868B] text-[11px] mt-2">{s.capacity}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
