import Navbar from "@/components/Navbar";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const values = [
  { title: "Community First", desc: "A dome built for collaboration — where strangers become co-founders over coffee." },
  { title: "Craft & Quality", desc: "From our wood-fired kitchen to our acoustic booths, every detail is intentional." },
  { title: "Work-Life Blend", desc: "Fine dining, gym, bar and focus pods — all under one roof." },
];

const stats = [
  { value: "3", label: "Outlets (Lagos)" },
  { value: "12k+", label: "Creators hosted" },
  { value: "4.8★", label: "Avg. rating" },
  { value: "2019", label: "Since" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#1D1D1F]">
      <Navbar />

      {/* Hero */}
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-[1312px] mx-auto flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-[55%] flex flex-col gap-6">
            <p className="text-white/50 font-semibold tracking-[0.18em] text-xs uppercase">Our Story</p>
            <h1 className="font-cabin font-semibold text-[56px] leading-[0.92] tracking-[-0.04em] text-white">
              Built for creators,<br />dreamers & doers.
            </h1>
            <p className="text-white/70 text-[15px] leading-relaxed max-w-[560px]">
              Creators Lodge began as a single dining room in Yaba where designers, writers and founders traded ideas between courses.
              Today it's a network of domes — each blending restaurant, bar, gym and workspace — designed to make your best work feel effortless.
            </p>
            <div className="flex gap-3 pt-2">
              <Link to="/outlets" className="inline-flex bg-white text-[#1D1D1F] font-medium text-[15px] px-8 rounded-[10px] hover:bg-zinc-100 transition-colors h-[50px] items-center justify-center">
                Explore outlets
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center border border-white/20 text-white font-medium text-[15px] px-8 rounded-[10px] hover:bg-white/10 transition-colors h-[50px]">
                Say hello
              </Link>
            </div>
          </div>
          <div className="lg:w-[45%] w-full">
            <img
              src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Team collaborating"
              className="w-full h-[380px] md:h-[460px] object-cover rounded-[20px] border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-10 lg:px-16 py-8">
        <div className="max-w-[1312px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/[0.06] border border-white/10 rounded-[16px] p-6 text-center">
              <p className="text-brand-yellow font-cabin font-semibold text-[32px] tracking-[-0.03em]">{s.value}</p>
              <p className="text-white/60 text-xs tracking-widest uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-[1312px] mx-auto">
          <h2 className="text-white font-cabin font-semibold text-[32px] tracking-[-0.03em] text-center mb-12">Why we exist</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="surface-card p-8 flex flex-col gap-3">
                <h3 className="text-[#1D1D1F] font-cabin font-semibold text-[17px] tracking-[-0.02em]">{v.title}</h3>
                <p className="text-[#424245] text-[15px] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1312px] mx-auto bg-brand-yellow rounded-[20px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[#1D1D1F] font-cabin font-semibold text-[32px] tracking-[-0.03em]">Ready to create with us?</h3>
            <p className="text-[#1D1D1F]/70 text-[15px] mt-2">Book a desk, host your next dinner, or just drop in for coffee.</p>
          </div>
          <Link to="/book" className="inline-flex items-center justify-center bg-[#1D1D1F] text-white font-medium text-[15px] px-8 rounded-[10px] hover:bg-black shrink-0 h-[50px]">
            Book a space
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
