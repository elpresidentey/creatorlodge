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
              <button onClick={() => setFilter("all")} className={`min-h-[44px] px-4 py-2.5 rounded-full text-[13px] font-medium ${filter === "all" ? "bg-white text-[#1D1D1F]" : "bg-white/10 text-white"}`}>All outlets</button>
              {outlets.map((o) => (
                <button key={o.slug} onClick={() => setFilter(o.slug)} className={`min-h-[44px] px-4 py-2.5 rounded-full text-[13px] font-medium capitalize ${filter === o.slug ? "bg-brand-yellow text-[#1D1D1F]" : "bg-white/10 text-white hover:bg-white/20"}`}>{o.slug.replace("-", " ")}</button>
              ))}
            </div>
            <label htmlFor="spaces-search" className="sr-only">Search spaces</label>
            <input id="spaces-search" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search spaces…" className="sm:ml-auto w-full sm:w-64 h-[44px] rounded-full bg-white/10 border border-white/15 px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/30" />
          </div>
          <p className="text-white/40 text-xs mt-3">{filtered.length} result{filtered.length!==1?"s":""} {dq && `for "${dq}"`}</p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1312px] mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <div key={s.id} className="group photo-card">
              <img src={s.image} alt={s.name} />
              <div className="photo-gradient" />
              <span className="photo-price">{s.price}</span>
              <div className="photo-body overlay-text flex flex-1 flex-col justify-end">
                <p className="photo-meta">{s.capacity}</p>
                <h3 className="photo-title min-h-[50px]">{s.name}</h3>
                <p className="photo-desc">{s.desc}</p>
                <div className="photo-chip-row">
                  {s.amenities.slice(0, 3).map((a) => (
                    <span key={a} className="photo-chip">{a}</span>
                  ))}
                </div>
                <div className="photo-actions">
                  <Link to={`/book?space=${s.id}&outlet=${filter !== "all" ? filter : outlets[0].slug}`} className="photo-btn-primary">Book</Link>
                  <Link to="/outlets" className="photo-btn-secondary px-5">Houses</Link>
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
