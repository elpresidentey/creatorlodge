import Navbar from "@/components/Navbar";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { spaces, outlets } from "@/lib/lounge-data";

export default function Spaces() {
  const [filter, setFilter] = useState<string>("all");
  const filtered = filter === "all" ? spaces : spaces.filter((s) => s.outletSlugs.includes(filter));

  return (
    <div className="min-h-screen bg-[#1D1D1F]">
      <Navbar />
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-[1312px] mx-auto">
          <p className="text-[#6E6E73] md:text-white/50 font-semibold tracking-[0.18em] text-xs uppercase">Spaces</p>
          <h1 className="font-cabin font-semibold text-[56px] leading-[0.92] tracking-[-0.04em] text-white mt-3">
            Work. Create. Celebrate.
          </h1>
          <p className="text-white/60 text-[15px] leading-relaxed mt-3 max-w-xl">From hot desks to podcast booths — every space is designed for focus and flow.</p>

          <div className="flex flex-wrap gap-2 mt-6">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase ${filter === "all" ? "bg-white text-brand-dark" : "bg-white/10 text-white"}`}
            >
              All outlets
            </button>
            {outlets.map((o) => (
              <button
                key={o.slug}
                onClick={() => setFilter(o.slug)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase ${filter === o.slug ? "bg-brand-yellow text-brand-dark" : "bg-white/10 text-white hover:bg-white/20"}`}
              >
                {o.slug.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1312px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((s) => (
            <div key={s.id} className="group surface-card flex flex-col">
              <div className="surface-media h-[180px]">
                <img src={s.image} alt={s.name} />
                <span className="surface-chip absolute top-3 right-3 z-10 bg-brand-yellow text-[#1D1D1F]">{s.price}</span>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-1">
                <h3 className="font-cabin font-semibold text-[17px] leading-tight text-[#1D1D1F]">{s.name}</h3>
                <p className="text-[#6E6E73] text-xs uppercase tracking-widest">{s.capacity}</p>
                <p className="text-[#424245] text-[15px] leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {s.amenities.map((a) => (
                    <span key={a} className="bg-[#F5F5F7] border border-black/5 text-[#424245] text-[11px] px-2 py-1 rounded-full">
                      {a}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <Link to={`/book?space=${s.id}&outlet=${filter !== "all" ? filter : outlets[0].slug}`} className="inline-flex flex-1 bg-[#1D1D1F] text-white text-[15px] font-medium rounded-[10px] text-center hover:bg-black h-[50px] items-center justify-center">
                    Book
                  </Link>
                  <Link to="/outlets" className="inline-flex items-center justify-center px-4 border border-black/10 text-[#1D1D1F] text-[15px] font-medium h-[50px] rounded-[10px] hover:bg-[#F5F5F7]">
                    Outlets
                  </Link>
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
