import Navbar from "@/components/Navbar";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { creators } from "@/lib/lounge-data";
import { Link } from "react-router-dom";

export default function Community() {
  return (
    <div className="min-h-screen bg-[#1D1D1F]">
      <Navbar />
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24 text-center">
        <div className="max-w-[1312px] mx-auto">
        <p className="text-white/50 font-semibold tracking-[0.18em] text-xs uppercase">Community</p>
        <h1 className="font-cabin font-semibold text-[40px] sm:text-[56px] leading-[0.92] tracking-[-0.04em] text-white mt-3">
          Built by creators
        </h1>
        <p className="text-white/60 text-[15px] mt-3 max-w-2xl mx-auto">Meet members who call the lounge home — founders, filmmakers, designers, podcasters.</p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-8">
        <div className="max-w-[1312px] mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {creators.map((c) => (
            <div key={c.name} className="group surface-card text-center">
              <div className="surface-media h-[180px]">
                <img src={c.image} alt={c.name} />
              </div>
              <div className="p-4">
                <p className="font-cabin font-semibold text-[17px] text-[#1D1D1F]">{c.name}</p>
                <p className="text-[#424245] text-[15px]">{c.role}</p>
                <p className="text-[#6E6E73] text-[11px] tracking-widest uppercase mt-1">{c.outlet}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1312px] mx-auto bg-[#F5F5F7] rounded-[20px] p-8 md:p-10 text-center border border-black/5">
          <h3 className="font-cabin font-semibold text-[32px] tracking-[-0.03em] text-[#1D1D1F]">Want in?</h3>
          <p className="text-[#424245] text-[15px] mt-2">Apply for membership — we review within 48 hours. No gatekeeping, just good fit.</p>
          <div className="flex justify-center gap-3 mt-6">
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
