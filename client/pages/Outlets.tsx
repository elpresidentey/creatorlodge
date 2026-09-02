import Navbar from "@/components/Navbar";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { outlets } from "@/lib/lounge-data";

export default function Outlets() {
  return (
    <div className="min-h-screen bg-[#1D1D1F]">
      <Navbar />

      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-[1312px] mx-auto">
          <p className="text-white/50 font-semibold tracking-[0.18em] text-xs uppercase">Outlets</p>
          <h1 className="font-cabin font-semibold text-[56px] leading-[0.92] tracking-[-0.04em] text-white mt-3">
            Find your dome
          </h1>
          <p className="text-white/60 text-[15px] leading-relaxed mt-3 max-w-xl">Three locations, one vibe. Each outlet blends dining, bar and focused work.</p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-8">
        <div className="max-w-[1312px] mx-auto grid md:grid-cols-3 gap-5">
          {outlets.map((o) => (
            <div key={o.slug} className="group surface-card flex flex-col">
              <div className="surface-media h-[200px]">
                <img src={o.image} alt={o.name} />
                <span className="surface-chip absolute top-3 left-3 z-10 bg-[#1D1D1F]/90 text-white backdrop-blur-sm border border-white/10 tracking-widest uppercase">
                  {o.tag}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-1">
                <h3 className="font-cabin font-semibold text-[17px] leading-tight text-[#1D1D1F]">{o.name}</h3>
                <p className="text-[#6E6E73] text-xs tracking-widest uppercase">{o.area}</p>
                <p className="text-[#424245] text-[15px]">{o.address}</p>
                <p className="text-[#86868B] text-xs">{o.hours} • {o.phone}</p>
                <div className="flex gap-3 mt-4">
                  <Link to={`/outlets/${o.slug}`} className="flex-1 inline-flex items-center justify-center bg-white border border-black/10 text-[#1D1D1F] text-[15px] font-medium h-[50px] rounded-[10px] text-center hover:bg-[#F5F5F7]">
                    View
                  </Link>
                  <Link to={`/book?outlet=${o.slug}`} className="inline-flex flex-1 bg-[#1D1D1F] text-white text-[15px] font-medium rounded-[10px] text-center hover:bg-black h-[50px] items-center justify-center">
                    Book
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1312px] mx-auto bg-white/[0.06] border border-white/10 rounded-[20px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-cabin font-semibold text-[17px]">Looking for something private?</h3>
            <p className="text-white/60 text-[15px] mt-1">Host launches, dinners or team offsites — we handle catering, AV and more.</p>
          </div>
          <Link to="/book" className="inline-flex bg-brand-yellow text-[#1D1D1F] font-semibold px-8 rounded-[10px] hover:opacity-90 shrink-0 h-[50px] items-center justify-center">
            Book a space
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
