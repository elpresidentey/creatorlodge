import { Link } from "react-router-dom";
import { creators } from "@/lib/lounge-data";

export default function CreatorsStrip() {
  return (
    <section className="w-full bg-white px-6 md:px-10 lg:px-16 py-16 md:py-24 border-y border-black/5">
      <div className="max-w-[1312px] mx-auto">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="font-cabin font-semibold text-[32px] tracking-[-0.03em] text-[#1D1D1F]">Made by our people.</h2>
          <Link to="/community" className="text-[#0071E3] text-[15px] font-medium hover:underline">Community →</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {creators.map((c)=>(
            <div key={c.name} className="surface-card rounded-[16px] bg-[#F5F5F7] p-4 flex gap-3 items-center">
              <img src={c.image} alt={c.name} className="h-12 w-12 rounded-full object-cover shrink-0 ring-2 ring-white shadow-sm" loading="lazy" />
              <div><p className="font-semibold text-[13px] text-[#1D1D1F] leading-none">{c.name}</p><p className="text-[#6E6E73] text-xs mt-1">{c.role} · {c.outlet}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
