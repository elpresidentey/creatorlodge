import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const press = [
  { outlet: "TechCabal", headline: "Inside Lagos' most ambitious creator house", date: "Mar 2025", type: "Feature" },
  { outlet: "BellaNaija", headline: "Creators Lounge opens eighth house — this time in Abuja", date: "Jan 2025", type: "News" },
  { outlet: "Pulse Nigeria", headline: "Where Lagos dines, works and is seen", date: "Nov 2024", type: "Review" },
  { outlet: "Guardian Life", headline: "The new wave of Lagos co-working spaces", date: "Sep 2024", type: "Feature" },
  { outlet: "Culture Custodian", headline: "Art on the wall, suya on the grill — a new gallery house model", date: "Jul 2024", type: "Feature" },
  { outlet: "ThisDay Style", headline: "Five Lagos spots every creative should know", date: "May 2024", type: "List" },
];

export default function Press() {
  useTitle("Press — Creators Lounge");
  return (
    <div className="min-h-screen bg-[#1D1D1F]">
      <Navbar />
      <Breadcrumb trail={[{ label: "Press" }]} />

      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-[1312px] mx-auto">
          <p className="eyebrow text-white/50">In the media</p>
          <h1 className="mt-4 font-cabin text-[40px] font-semibold leading-[0.95] tracking-[-0.035em] text-white sm:text-[56px]">
            Press
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-white/65">What they're saying about the houses, the food and the circle.</p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1312px] mx-auto flex flex-col gap-4">
          {press.map((p, i) => (
            <div key={i} className="rounded-[16px] border border-white/20 bg-white/[0.04] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#C6A15B]/40 transition-colors">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <span className="font-cabin font-semibold text-[15px] text-white">{p.outlet}</span>
                  <span className="text-[11px] font-medium text-white/30">·</span>
                  <span className="text-[11px] font-medium text-white/55">{p.type}</span>
                </div>
                <p className="text-[15px] leading-[1.7] text-white/65">{p.headline}</p>
              </div>
              <span className="text-[12px] text-white/55 shrink-0">{p.date}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1312px] mx-auto bg-white/[0.06] border border-white/20 rounded-[20px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-cabin font-semibold text-[20px] text-white">Press enquiries</h2>
            <p className="text-white/60 text-[15px] mt-2">High-res images, interviews and media kits — we're happy to help.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center bg-brand-yellow text-[#1D1D1F] font-semibold text-[15px] h-[50px] px-8 rounded-[10px] hover:opacity-90 shrink-0">
            Contact us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
