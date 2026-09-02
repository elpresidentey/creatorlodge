import { Link } from "react-router-dom";
import { tiers } from "@/lib/lounge-data";

export default function MembershipPreview() {
  return (
    <section className="w-full bg-[#F5F5F7] px-6 md:px-10 lg:px-16 py-16 md:py-24">
      <div className="max-w-[1312px] mx-auto">
        <p className="text-[#6E6E73] text-xs font-semibold tracking-[0.18em] uppercase">Membership</p>
        <h2 className="font-cabin font-semibold text-[32px] tracking-[-0.03em] text-[#1D1D1F] mt-2 leading-none">One key, three houses.</h2>
        <p className="text-[#424245] text-[15px] mt-3 max-w-xl">Day pass or monthly — same hospitality, same community.</p>
        <div className="grid md:grid-cols-3 gap-5 mt-8 items-stretch">
          {tiers.map((t)=>(
            <div key={t.name} className={`p-6 flex flex-col ${t.featured ? "surface-card-dark" : "surface-card"}`}>
              <div className="flex items-center justify-between gap-2">
                <p className={`text-xs font-semibold tracking-widest uppercase ${t.featured ? "text-white/60" : "text-[#6E6E73]"}`}>{t.name}</p>
                {t.featured && <span className="surface-chip bg-brand-yellow text-[#1D1D1F]">Most chosen</span>}
              </div>
              <p className={`font-cabin font-semibold text-[28px] tracking-[-0.03em] mt-2 ${t.featured ? "text-white" : "text-[#1D1D1F]"}`}>{t.price}<span className={`text-sm font-normal ${t.featured ? "text-white/60" : "text-[#6E6E73]"}`}>{t.period}</span></p>
              <ul className="mt-4 flex flex-col gap-2 flex-1">{t.perks.map((p)=><li key={p} className={`text-[15px] flex gap-2 ${t.featured ? "text-white/80" : "text-[#424245]"}`}><span className={t.featured ? "text-brand-yellow" : "text-[#0071E3]"}>✓</span>{p}</li>)}</ul>
              <Link to="/membership" className={`inline-flex items-center justify-center h-[50px] rounded-[12px] font-medium text-[15px] mt-6 transition-colors ${t.featured ? "bg-white text-[#1D1D1F] hover:bg-zinc-100" : "bg-[#1D1D1F] text-white hover:bg-black"}`}>{t.cta}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
