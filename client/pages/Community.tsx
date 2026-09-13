import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { creators } from "@/lib/lounge-data";
import { Link } from "react-router-dom";

export default function Community() {
  return (
    <div className="min-h-screen bg-[#1D1D1F]">
      <Navbar />
      <Breadcrumb trail={[{ label: "Community" }]} />
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24 text-center">
        <div className="max-w-[1312px] mx-auto">
        <p className="eyebrow text-white/50">Community</p>
        <h1 className="mt-4 font-cabin text-[40px] font-semibold leading-[0.95] tracking-[-0.035em] text-white sm:text-[56px]">
          Built by creators
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.7] text-white/65">Meet members who call the lounge home — founders, filmmakers, designers, podcasters.</p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-8">
        <div className="max-w-[1312px] mx-auto grid grid-cols-2 gap-5 md:grid-cols-4">
          {creators.map((c) => (
            <div key={c.name} className="group photo-card text-center">
              <img src={c.image} alt={c.name} />
              <div className="photo-gradient" />
              <div className="overlay-text absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-[20px] font-medium leading-tight text-ivory line-clamp-2 min-h-[50px]">{c.name}</p>
                <p className="mt-1 font-display text-[13px] italic text-gold-soft">{c.role}</p>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">{c.outlet}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1312px] mx-auto bg-[#F5F5F7] rounded-[24px] p-8 md:p-12 text-center border border-black/5">
          <h2 className="section-title text-[#1D1D1F]">Want in?</h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-[1.7] text-[#424245]">Apply for membership — we review within 48 hours. No gatekeeping, just good fit.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link to="/membership" className="inline-flex bg-[#1D1D1F] text-white font-medium text-[15px] px-7 rounded-[10px] h-[50px] items-center justify-center hover:bg-black">
              View membership
            </Link>
            <Link to="/contact" className="inline-flex bg-white text-[#1D1D1F] font-medium text-[15px] px-7 rounded-[10px] border border-black/10 h-[50px] items-center justify-center hover:bg-zinc-50">
              Say hello
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
