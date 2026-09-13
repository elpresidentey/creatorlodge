import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const amounts = [
  { value: 15000, label: "₦15k" },
  { value: 25000, label: "₦25k" },
  { value: 50000, label: "₦50k" },
  { value: 100000, label: "₦100k" },
  { value: 200000, label: "₦200k" },
];

export default function GiftCards() {
  useTitle("Gift Cards — Creators Lounge");
  const [amount, setAmount] = useState(25000);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast({ title: "Missing info", description: "Name and email are required." });
      return;
    }
    toast({ title: "Gift card sent!", description: `₦${amount.toLocaleString()} gift card sent to ${email}.` });
    setName("");
    setEmail("");
    setNote("");
  };

  return (
    <div className="min-h-screen bg-[#1D1D1F]">
      <Navbar />
      <Breadcrumb trail={[{ label: "Gift Cards" }]} />

      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-[1312px] mx-auto">
          <p className="eyebrow text-white/50">Give the lounge</p>
          <h1 className="mt-4 font-cabin text-[40px] font-semibold leading-[0.95] tracking-[-0.035em] text-white sm:text-[56px]">
            Gift cards
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-white/65">Give someone a day at the lounge — dining, drinks, workspace or gallery. Delivered instantly by email.</p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[800px] mx-auto grid lg:grid-cols-2 gap-8">
          {/* Preview */}
          <div className="rounded-[24px] border border-[#C6A15B]/30 bg-gradient-to-br from-[#171510] to-[#0E0E0F] p-8 flex flex-col justify-between shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-soft">Creators Lounge</p>
              <p className="font-display text-[32px] font-medium text-ivory mt-4">₦{amount.toLocaleString()}</p>
              <p className="text-white/50 text-[15px] mt-2">Gift card</p>
            </div>
            <div className="mt-8 border-t border-white/10 pt-4">
              <p className="text-white/40 text-[13px]">Redeemable at all eight houses — dining, bar, workspace, gallery.</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="bg-white rounded-[20px] border border-black/5 p-6 md:p-8 flex flex-col gap-5 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <div>
              <label className="text-[#1D1D1F] font-semibold text-[13px]">Amount</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {amounts.map((a) => (
                  <button
                    key={a.value}
                    type="button"
                    onClick={() => setAmount(a.value)}
                    className={`min-h-[44px] px-4 py-2.5 rounded-full text-[13px] font-medium ${amount === a.value ? "bg-[#1D1D1F] text-white" : "bg-[#F5F5F7] text-[#424245] hover:bg-[#E8E8ED]"}`}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="gift-name" className="text-[#1D1D1F] font-semibold text-[13px]">Recipient name</label>
              <input id="gift-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ada Lovelace" required className="border border-[#D2D2D7] bg-white rounded-xl px-4 py-3 text-[15px] text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/20 transition" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="gift-email" className="text-[#1D1D1F] font-semibold text-[13px]">Recipient email</label>
              <input id="gift-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ada@example.com" required className="border border-[#D2D2D7] bg-white rounded-xl px-4 py-3 text-[15px] text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/20 transition" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="gift-note" className="text-[#1D1D1F] font-semibold text-[13px]">Personal note (optional)</label>
              <textarea id="gift-note" value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="Happy birthday! Enjoy a day at the lounge." className="border border-[#D2D2D7] bg-white rounded-xl px-4 py-3 text-[15px] text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/20 resize-none transition" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center h-[50px] rounded-[10px] bg-[#1D1D1F] text-white font-semibold text-[15px] hover:bg-black transition-colors">
              Send gift card
            </button>
            <p className="text-[#86868B] text-xs text-center">Delivered instantly by email. Valid for 12 months.</p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
