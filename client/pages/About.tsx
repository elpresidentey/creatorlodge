import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const values = [
  { title: "Community First", desc: "A dome built for collaboration — where strangers become co-founders over coffee." },
  { title: "Craft & Quality", desc: "From our wood-fired kitchen to our acoustic booths, every detail is intentional." },
  { title: "Work-Life Blend", desc: "Fine dining, gym, bar and focus pods — all under one roof." },
];

const stats = [
  { value: "8", label: "Houses (Lagos & Abuja)" },
  { value: "12k+", label: "Creators hosted" },
  { value: "4.8★", label: "Avg. rating" },
  { value: "2019", label: "Since" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#1D1D1F]">
      <Navbar />
      <Breadcrumb trail={[{ label: "About" }]} />

      {/* Hero */}
      <section className="lounge-container pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex flex-col gap-5 lg:w-[55%]">
            <p className="eyebrow text-white/50">Our Story</p>
            <h1 className="font-cabin text-[40px] font-semibold leading-[0.95] tracking-[-0.035em] text-white sm:text-[56px]">
              Built for creators,<br />dreamers & doers.
            </h1>
            <p className="max-w-[560px] text-[15px] leading-[1.7] text-white/70 md:text-base">
              Creators Lounge began as a single dining room in Yaba where designers, writers and founders traded ideas between courses.
              Today it’s a network of houses — from VI to Yaba, Lekki to Ikoyi and Abuja — each blending restaurant, bar, atelier, gallery and workspace — designed to make your best work feel effortless.
            </p>
            <div className="flex flex-wrap gap-3 pt-3">
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
              src="/images/pexels-30689114.jpg"
              alt="Creative team collaborating in Lagos office"
              className="w-full h-[380px] md:h-[460px] object-cover rounded-[20px] border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="lounge-container pb-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-5">
          {stats.map((s) => (
            <div key={s.label} className="rounded-[16px] border border-white/10 bg-white/[0.06] p-6 text-center md:p-7">
              <p className="font-cabin text-[30px] font-semibold tabular-nums leading-none tracking-[-0.025em] text-brand-yellow">{s.value}</p>
              <p className="mt-2.5 text-xs font-medium uppercase tracking-[0.14em] text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="lounge-container section-pad">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-white/50">Values</p>
          <h2 className="section-title mt-3 text-white">Why we exist</h2>
        </div>
        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3 lg:gap-6">
          {values.map((v) => (
            <div key={v.title} className="surface-card flex flex-col gap-2.5 p-7 md:p-8">
              <h3 className="card-title text-[#1D1D1F]">{v.title}</h3>
              <p className="text-[15px] leading-[1.7] text-[#424245]">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="lounge-container pb-20 md:pb-28">
        <div className="flex flex-col justify-between gap-8 rounded-[24px] bg-brand-yellow p-8 md:flex-row md:items-center md:p-12">
          <div className="flex max-w-xl flex-col gap-3">
            <h2 className="section-title text-[#1D1D1F]">Ready to create with us?</h2>
            <p className="text-[15px] leading-[1.7] text-[#1D1D1F]/70">Book a desk, host your next dinner, or just drop in for coffee.</p>
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
