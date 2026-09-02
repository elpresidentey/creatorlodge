import Navbar from "@/components/Navbar";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { tiers } from "@/lib/lounge-data";

export default function Membership() {
  return (
    <div className="min-h-screen bg-[#1D1D1F]">
      <Navbar />
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24 text-center">
        <div className="max-w-[1312px] mx-auto">
        <p className="text-white/50 font-semibold tracking-[0.18em] text-xs uppercase">Membership</p>
        <h1 className="font-cabin font-semibold text-[56px] leading-[0.92] tracking-[-0.04em] text-white mt-3">
          Belong to the lounge
        </h1>
        <p className="text-white/60 text-[15px] mt-3 max-w-2xl mx-auto">Day pass to founder's office — work, dine and create with a community that gets it. Cancel anytime.</p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-8">
        <div className="max-w-[1312px] mx-auto grid md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div key={t.name} className={`p-8 flex flex-col ${t.featured ? "surface-card-dark" : "surface-card text-[#1D1D1F]"}`}>
              <div className="flex items-center justify-between gap-2">
                <p className={`font-semibold tracking-widest uppercase text-xs ${t.featured ? "text-white/60" : "text-[#6E6E73]"}`}>{t.name}</p>
                {t.featured && <span className="surface-chip bg-brand-yellow text-[#1D1D1F]">Most chosen</span>}
              </div>
              <div className="flex items-baseline gap-1 mt-3">
                <span className="font-cabin font-semibold text-[32px] tracking-[-0.03em]">{t.price}</span>
                <span className={`text-[15px] ${t.featured ? "text-white/60" : "text-[#6E6E73]"}`}>{t.period}</span>
              </div>
              <ul className="flex flex-col gap-2.5 mt-6 flex-1">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-2 text-[15px]">
                    <span className={`mt-0.5 ${t.featured ? "text-brand-yellow" : "text-[#0071E3]"}`}>✓</span>
                    <span className={t.featured ? "text-white/80" : "text-[#424245]"}>{p}</span>
                  </li>
                ))}
              </ul>
              <Link to={`/book?space=desk`} className={`mt-6 inline-flex items-center justify-center h-[50px] rounded-[10px] text-[15px] font-medium ${t.featured ? "bg-white text-[#1D1D1F] hover:bg-zinc-100" : "bg-[#1D1D1F] text-white hover:bg-black"}`}>
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1312px] mx-auto bg-white/[0.06] border border-white/10 rounded-[16px] p-6 grid md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-brand-yellow font-cabin font-semibold text-[32px] tracking-[-0.03em]">120+</p>
            <p className="text-white/60 text-xs uppercase tracking-widest">Events / year</p>
          </div>
          <div>
            <p className="text-white font-cabin font-semibold text-[32px] tracking-[-0.03em]">24/7</p>
            <p className="text-white/60 text-xs uppercase tracking-widest">Access for members</p>
          </div>
          <div>
            <p className="text-white font-cabin font-semibold text-[32px] tracking-[-0.03em]">3</p>
            <p className="text-white/60 text-xs uppercase tracking-widest">Outlets included</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
