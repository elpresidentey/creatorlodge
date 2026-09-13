import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const roles = [
  { title: "Executive Chef", house: "VI Dome", type: "Full-time", desc: "Lead the kitchen at our flagship — wood-fired, suya, jollof and garden plates for 120 covers." },
  { title: "Mixologist", house: "Yaba Foundry", type: "Full-time", desc: "Craft cocktails and Lagos-night signatures for our after-work and weekend bar programme." },
  { title: "Community Manager", house: "VI Dome", type: "Full-time", desc: "Own the member experience — events, onboarding, partnerships and the creator circle." },
  { title: "Gallery Curator", house: "Ikoyi Atelier", type: "Contract", desc: "Select and install monthly exhibitions across our gallery walls. Open-call management." },
  { title: "Studio Producer", house: "Yaba Foundry", type: "Part-time", desc: "Run our podcast and recording booths — booking, setup, basic engineering." },
  { title: "Gym Instructor", house: "VI Dome", type: "Part-time", desc: "Morning and evening sessions for members — strength, HIIT, yoga." },
];

export default function Careers() {
  useTitle("Careers — Creators Lounge");
  return (
    <div className="min-h-screen bg-[#1D1D1F]">
      <Navbar />
      <Breadcrumb trail={[{ label: "Careers" }]} />

      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-[1312px] mx-auto">
          <p className="eyebrow text-white/50">Join the house</p>
          <h1 className="mt-4 font-cabin text-[40px] font-semibold leading-[0.95] tracking-[-0.035em] text-white sm:text-[56px]">
            Build with us
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-white/65">We're looking for hosts, chefs, curators and creatives who care about craft and community.</p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1312px] mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <div key={r.title} className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6 flex flex-col gap-3 hover:border-[#C6A15B]/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-soft">{r.house}</span>
                <span className="text-[11px] font-medium text-white/40">{r.type}</span>
              </div>
              <h3 className="font-cabin font-semibold text-[17px] text-white">{r.title}</h3>
              <p className="text-[15px] leading-[1.7] text-white/65 flex-1">{r.desc}</p>
              <Link to="/contact" className="inline-flex items-center justify-center h-[46px] rounded-[10px] border border-white/25 bg-white/[0.10] text-[13px] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition hover:bg-white/20 mt-2">
                Apply now
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1312px] mx-auto bg-white/[0.06] border border-white/10 rounded-[20px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-cabin font-semibold text-[20px] text-white">Don't see your role?</h2>
            <p className="text-white/60 text-[15px] mt-2">We're always open to exceptional people. Send us a note.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center bg-brand-yellow text-[#1D1D1F] font-semibold text-[15px] h-[50px] px-8 rounded-[10px] hover:opacity-90 shrink-0">
            Get in touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
