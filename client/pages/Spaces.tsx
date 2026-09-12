import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { spaces, outlets } from "@/lib/lounge-data";

export default function Spaces() {
  useTitle("Spaces — Work the way you want");
  const [filter, setFilter] = useState<string>("all");
  const [q, setQ] = useState("");
  const [dq, setDq] = useState("");
  useEffect(() => { const t = setTimeout(() => setDq(q), 300); return () => clearTimeout(t); }, [q]);
  const filtered = (() => {
    let r = filter === "all" ? spaces : spaces.filter((s) => s.outletSlugs.includes(filter));
    if (dq) {
      const qq = dq.toLowerCase();
      r = r.filter(s => `${s.name} ${s.desc} ${s.amenities.join(" ")}`.toLowerCase().includes(qq));
    }
    return r;
  })();

  return (
    <div className="min-h-screen bg-[#1D1D1F]">
      <Navbar />
      <Breadcrumb trail={[{ label: "Salons" }]} />
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-[1312px] mx-auto">
          <p className="eyebrow text-white/50">Spaces</p>
          <h1 className="mt-4 font-cabin text-[40px] font-semibold leading-[0.95] tracking-[-0.035em] text-white sm:text-[56px]">Work. Create. Celebrate.</h1>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-white/65">From hot desks to podcast booths — every space is designed for focus and flow.</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setFilter("all")} className={`px-4 py-2 rounded-full text-[13px] font-medium ${filter === "all" ? "bg-white text-[#1D1D1F]" : "bg-white/10 text-white"}`}>All outlets</button>
              {outlets.map((o) => (
                <button key={o.slug} onClick={() => setFilter(o.slug)} className={`px-4 py-2 rounded-full text-[13px] font-medium capitalize ${filter === o.slug ? "bg-brand-yellow text-[#1D1D1F]" : "bg-white/10 text-white hover:bg-white/20"}`}>{o.slug.replace("-", " ")}</button>
              ))}
            </div>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search spaces…" className="sm:ml-auto w-full sm:w-64 h-[44px] rounded-full bg-white/10 border border-white/15 px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/30" />
          </div>
          <p className="text-white/40 text-xs mt-3">{filtered.length} result{filtered.length!==1?"s":""} {dq && `for "${dq}"`}</p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1312px] mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <div key={s.id} className="group relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[20px] border border-[#C6A15B]/20 shadow-[0_24px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1 hover:border-[#C6A15B]/55">
              <img src={s.image} alt={s.name} className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.05]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-black/10" />
              <span className="absolute right-4 top-4 z-10 rounded-full border border-[#C6A15B]/40 bg-black/60 px-2.5 py-1 text-[11px] font-semibold leading-none text-gold-soft backdrop-blur-md">{s.price}</span>
              <div className="relative flex flex-1 flex-col justify-end p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-soft">{s.capacity}</p>
                <h3 className="mt-1.5 font-display text-[20px] font-medium leading-tight text-ivory">{s.name}</h3>
                <p className="mt-2 line-clamp-2 min-h-[42px] text-[13px] leading-relaxed text-white/70">{s.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {s.amenities.slice(0, 3).map((a) => (
                    <span key={a} className="rounded-full border border-white/15 bg-white/10 px-2 py-1 text-[11px] leading-none text-white/80 backdrop-blur-sm">{a}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-2.5">
                  <Link to={`/book?space=${s.id}&outlet=${filter !== "all" ? filter : outlets[0].slug}`} className="inline-flex h-[46px] flex-1 items-center justify-center rounded-[10px] bg-gradient-to-b from-[#DDBB7A] to-[#C6A15B] text-[13px] font-semibold uppercase tracking-[0.08em] text-[#171410] transition hover:brightness-105">Book</Link>
                  <Link to="/outlets" className="inline-flex h-[46px] items-center justify-center rounded-[10px] border border-white/20 bg-white/10 px-5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition hover:bg-white/15">Houses</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
