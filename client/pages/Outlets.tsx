import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { outlets } from "@/lib/lounge-data";

export default function Outlets() {
  return (
    <div className="min-h-screen bg-[#1D1D1F]">
      <Navbar />
      <Breadcrumb trail={[{ label: "Houses" }]} />

      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-[1312px] mx-auto">
          <p className="eyebrow text-white/50">Outlets</p>
          <h1 className="mt-4 font-cabin text-[40px] font-semibold leading-[0.95] tracking-[-0.035em] text-white sm:text-[56px]">
            Find your dome
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-white/65">Eight houses, one circle. Each blends dining, bar, atelier, gallery and focused work.</p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-8">
        <div className="max-w-[1312px] mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {outlets.map((o) => (
            <div key={o.slug} className="group photo-card">
              <img src={o.image} alt={o.name} />
              <div className="photo-gradient" />
              <span className="photo-badge uppercase tracking-[0.14em]">{o.tag}</span>
              <div className="photo-body overlay-text flex flex-1 flex-col justify-end">
                <p className="photo-meta">{o.area}</p>
                <h3 className="photo-title">{o.name}</h3>
                <p className="mt-2 truncate text-[13px] leading-relaxed text-white/70">{o.address}</p>
                <p className="mt-1 text-[12px] text-white/65">{o.hours} • {o.phone}</p>
                <div className="photo-actions">
                  <Link to={`/outlets/${o.slug}`} className="photo-btn-secondary">View</Link>
                  <Link to={`/book?outlet=${o.slug}`} className="photo-btn-primary">Book</Link>
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
