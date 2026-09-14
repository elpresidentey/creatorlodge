import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  { q: "What is Creators Lounge?", a: "Creators Lounge is a private members' house in Lagos — a network of eight houses blending restaurant, bar, co-working, gallery walls and salons. Each house is designed for creators, founders and patrons who want to work, dine and exhibit under one roof." },
  { q: "How do I become a member?", a: "Choose a tier on our Membership page — Day Pass, Creator or Founder. Sign up online, verify your email and your membership activates instantly. Cancel anytime." },
  { q: "Can I book a space without being a member?", a: "Yes. Day passes start from ₦15k/day. You can book a desk, studio, gallery wall or event hall directly from the Book page. Members get priority access and discounted rates." },
  { q: "What are the opening hours?", a: "Hours vary by house. Most are open 8am–11pm daily. Check the specific house page for exact hours. Members get 24/7 access to co-working spaces." },
  { q: "Where are the houses located?", a: "Eight houses across Lagos and Abuja — Victoria Island, Yaba, Lekki, Festac, Surulere, Egbeda, Ikoyi and Abuja. Each house has a distinct character but shares the same standard of service." },
  { q: "How do I book a gallery wall for my exhibition?", a: "Visit the Gallery page and click 'Book a private view' or contact our concierge. We offer monthly exhibition slots, private views and collector dinners. Gallery walls seat 40–120 depending on the house." },
  { q: "Do you host private events?", a: "Absolutely. We handle launches, dinners, team offsites and celebrations — catering, AV, florals and concierge included. Book through the Contact page or call your house directly." },
  { q: "What payment methods do you accept?", a: "Paystack (card, bank transfer, USSD) for online bookings. Cash, card and transfer at venue. Pay on arrival or pay online — your choice." },
  { q: "Can I cancel or modify a booking?", a: "Free cancellation up to 24 hours before your reservation. Modify or cancel from your profile page or contact us directly." },
  { q: "Is there parking?", a: "Yes, each house has dedicated parking. VI Dome has underground parking for 60 cars. Lekki Garden has open-air lot. Check the specific house page for details." },
];

export default function Faq() {
  useTitle("FAQ — Creators Lounge");
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#1D1D1F]">
      <Navbar />
      <Breadcrumb trail={[{ label: "FAQ" }]} />

      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-[1312px] mx-auto">
          <p className="eyebrow text-white/50">Help</p>
          <h1 className="mt-4 font-cabin text-[40px] font-semibold leading-[0.95] tracking-[-0.035em] text-white sm:text-[56px]">
            Frequently asked
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-white/65">Everything you need to know about membership, booking and the houses.</p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[800px] mx-auto flex flex-col gap-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-[16px] border border-white/20 bg-white/[0.04] overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-cabin font-semibold text-[15px] text-white">{f.q}</span>
                <span className={`shrink-0 text-white/55 text-lg transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-[15px] leading-[1.7] text-white/65">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[800px] mx-auto bg-white/[0.06] border border-white/20 rounded-[20px] p-8 text-center">
          <h2 className="font-cabin font-semibold text-[20px] text-white">Still have questions?</h2>
          <p className="text-white/60 text-[15px] mt-2">Our concierge team replies within a few hours.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-[#1D1D1F] font-medium text-[15px] h-[50px] px-6 rounded-[10px] hover:bg-zinc-100">
              Contact us
            </Link>
            <Link to="/book" className="inline-flex items-center justify-center bg-brand-yellow text-[#1D1D1F] font-semibold text-[15px] h-[50px] px-6 rounded-[10px] hover:opacity-90">
              Book a space
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
