import Navbar from "@/components/Navbar";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Missing fields", description: "Please fill all fields." });
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 800));
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", message: "" });
    setSending(false);
  };

  return (
    <div className="min-h-screen bg-[#1D1D1F]">
      <Navbar />

      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-[1312px] mx-auto">
          <p className="text-white/50 font-semibold tracking-[0.18em] text-xs uppercase">Contact</p>
          <h1 className="font-cabin font-semibold text-[56px] leading-[0.92] tracking-[-0.04em] text-white mt-3">
            Talk to us
          </h1>
          <p className="text-white/60 text-[15px] leading-relaxed mt-3 max-w-xl">Questions, collaborations or reservations — drop us a line.</p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1312px] mx-auto grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="bg-white/[0.06] border border-white/10 rounded-[16px] p-6">
              <p className="text-white font-semibold text-[13px] uppercase tracking-widest">Visit</p>
              <p className="text-white/70 text-[15px] mt-3 leading-relaxed">
                12a Creator Way, Victoria Island<br />
                Lagos, Nigeria
              </p>
              <p className="text-white/70 text-[15px] mt-4">+234 800 000 0000<br />hello@creatorslodge.com</p>
              <p className="text-white/50 text-xs mt-4">Open daily 8am – 11pm</p>
            </div>
            <div className="bg-white rounded-[16px] p-6 border border-black/5">
              <p className="font-semibold text-[#1D1D1F] text-[15px]">Need a space today?</p>
              <p className="text-[#424245] text-[15px] mt-2">Our concierge can confirm availability in minutes.</p>
              <a href="/book" className="inline-flex items-center justify-center mt-4 bg-[#1D1D1F] text-white font-medium text-[15px] h-[50px] px-6 rounded-[10px] hover:bg-black">
                Book now
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden h-[200px] bg-white/10 border border-white/10">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Map placeholder"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>

          {/* Form — high contrast, Apple polish */}
          <form onSubmit={onSubmit} className="lg:col-span-3 bg-white rounded-[20px] border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-6 md:p-8 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[#1D1D1F] font-semibold text-[13px] tracking-[-0.01em]">Your name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Ada Lovelace"
                className="border border-[#D2D2D7] bg-white rounded-xl px-4 py-3 text-[15px] text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/20 transition"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#1D1D1F] font-semibold text-[13px] tracking-[-0.01em]">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="ada@creatorslodge.com"
                className="border border-[#D2D2D7] bg-white rounded-xl px-4 py-3 text-[15px] text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/20 transition"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#1D1D1F] font-semibold text-[13px] tracking-[-0.01em]">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us what you need..."
                rows={5}
                className="border border-[#D2D2D7] bg-white rounded-xl px-4 py-3 text-[15px] text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/20 resize-none transition"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex bg-[#1D1D1F] text-white font-semibold text-[15px] rounded-[10px] hover:bg-black disabled:opacity-50 transition-colors h-[50px] items-center justify-center"
            >
              {sending ? "Sending..." : "Send message"}
            </button>
            <p className="text-[#6E6E73] text-xs text-center">We usually reply within a few hours.</p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
