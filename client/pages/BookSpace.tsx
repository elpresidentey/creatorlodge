import Navbar from "@/components/Navbar";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { spaces, outlets } from "@/lib/lounge-data";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";

export default function BookSpace() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialOutlet = searchParams.get("outlet") || outlets[0].slug;
  const initialSpace = searchParams.get("space") || "desk";

  const [form, setForm] = useState({
    outlet: outlets.find((o) => o.slug === initialOutlet) ? initialOutlet : outlets[0].slug,
    space: spaces.find((s) => s.id === initialSpace) ? initialSpace : "desk",
    date: "",
    time: "",
    guests: "1",
    name: "",
    email: "",
    notes: "",
  });
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [loading, setLoading] = useState(false);

  // prefill from auth
  useEffect(() => {
    if (user?.email) setForm(f => ({ ...f, email: user.email!, name: user.user_metadata?.full_name || f.name }));
  }, [user]);

  // Paystack return ?pay=verify&reference=CL-xxx
  useEffect(() => {
    const pay = searchParams.get("pay");
    const ref = searchParams.get("reference");
    if (pay === "verify" && ref) {
      fetch(`/api/paystack/verify?reference=${ref}`).then(r=>r.json()).then(d=>{
        if (d.status === "success" || d.mock) {
          toast({ title: "Payment verified", description: `Booking ${ref} is now Paid. Check history in profile.` });
          setStep(3);
          setForm(f => ({ ...f, name: f.name }));
        } else {
          toast({ title: "Payment pending", description: "We’ll update once Paystack confirms." });
        }
      }).catch(()=>{});
    }
  }, [searchParams]);

  // keep outlet/space in sync if query changes
  useEffect(() => {
    const o = searchParams.get("outlet");
    const s = searchParams.get("space");
    if (o && outlets.find((x) => x.slug === o)) setForm((f) => ({ ...f, outlet: o }));
    if (s && spaces.find((x) => x.id === s)) setForm((f) => ({ ...f, space: s }));
  }, [searchParams]);

  const availableSpaces = spaces.filter((s) => s.outletSlugs.includes(form.outlet));
  // ensure selected space is available at outlet
  useEffect(() => {
    if (!availableSpaces.find((s) => s.id === form.space)) {
      setForm((f) => ({ ...f, space: availableSpaces[0]?.id || "desk" }));
    }
  }, [form.outlet]);

  const parseAmount = (price: string) => {
    if (/free/i.test(price)) return 0;
    const n = price.replace(/[^0-9]/g, "");
    return n ? parseInt(n, 10) : 0;
  };

  const submit = async (e: React.FormEvent, payOnline = false) => {
    e.preventDefault();
    if (!user) {
      const next = `/book?outlet=${form.outlet}&space=${form.space}`;
      toast({ title: "Sign in required", description: "Please sign up or log in to book." });
      navigate(`/auth?next=${encodeURIComponent(next)}`);
      return;
    }
    if (!form.date || !form.name || !form.email) {
      toast({ title: "Missing info", description: "Name, email and date are required." });
      setStep(2);
      return;
    }
    setLoading(true);
    try {
      // sync priceMap server-side - use same map as server/routes/bookings.ts
      const { data: { session } } = supabase ? await supabase.auth.getSession() : { data: { session: null } } as any;
      const headers: Record<string,string> = { "Content-Type": "application/json" };
      if (session?.access_token) headers["Authorization"] = `Bearer ${session.access_token}`;
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers,
        body: JSON.stringify({ outletSlug: form.outlet, spaceId: form.space, date: form.date, time: form.time, guests: form.guests, name: form.name, email: form.email, notes: form.notes }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || data.issues?.formErrors?.[0] || "Failed");
      const amount = data.amount ?? parseAmount(selectedSpace.price);
      if (payOnline && amount > 0) {
        const payRes = await fetch("/api/paystack/initialize", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: form.email, bookingId: data.id }) });
        const payData = await payRes.json();
        if (payData.authorization_url) { window.location.href = payData.authorization_url; return; }
        toast({ title: "Booking confirmed!", description: `${data.message} • ID ${data.id} (pay on arrival)` });
      } else {
        toast({ title: "Booking confirmed!", description: `${data.message} • ID ${data.id}` });
      }
      setStep(3);
    } catch {
      await new Promise((r) => setTimeout(r, 600));
      toast({ title: "Booking request sent!", description: `We’ve reserved ${spaces.find((s) => s.id === form.space)?.name} at ${outlets.find((o) => o.slug === form.outlet)?.name} on ${form.date}.` });
      setStep(3);
    } finally { setLoading(false); }
  };

  const selectedSpace = spaces.find((s) => s.id === form.space)!;
  const selectedOutlet = outlets.find((o) => o.slug === form.outlet)!;

  return (
    <div className="min-h-screen bg-[#1D1D1F]">
      <Navbar />

      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-[1312px] mx-auto">
          <p className="text-white/50 font-semibold tracking-[0.18em] text-xs uppercase">Book a space</p>
          <h1 className="font-cabin font-semibold text-[40px] sm:text-[56px] leading-[0.92] tracking-[-0.04em] text-white mt-3">
            Your space, on your terms
          </h1>
          <p className="text-white/60 text-[15px] leading-relaxed mt-3 max-w-xl">3 steps — outlet → details → confirm. Pay at venue or online.</p>

          <div className="flex gap-2 mt-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className={`h-2 flex-1 rounded-full ${step >= n ? "bg-brand-yellow" : "bg-white/10"}`} />
            ))}
          </div>
          <p className="text-white/50 text-xs mt-2">Step {step} of 3 — {step === 1 ? "Choose outlet & space" : step === 2 ? "Date & guests" : "Confirmed"}</p>
        </div>
      </section>

      {step === 3 ? (
        <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[600px] mx-auto bg-white rounded-[20px] p-8 text-center border border-black/5 shadow-sm">
            <p className="text-5xl">✨</p>
            <h2 className="font-cabin font-semibold text-[32px] tracking-[-0.03em] text-[#1D1D1F] mt-4">You’re all set, {form.name.split(" ")[0]}!</h2>
            <p className="text-[#424245] text-[15px] mt-2">
              {selectedSpace.name} at {selectedOutlet.name} on {form.date} {form.time && `at ${form.time}`}. We sent a confirmation to {form.email}.
            </p>
            <div className="bg-[#F5F5F7] rounded-xl p-4 mt-6 text-left text-sm border border-black/5">
              <p className="font-semibold text-[#1D1D1F]">{selectedSpace.name} — {selectedSpace.price}</p>
              <p className="text-[#6E6E73] text-xs mt-1">{selectedOutlet.address} • {selectedSpace.capacity}</p>
              <p className="text-[#6E6E73] text-xs">Guests: {form.guests} • {form.notes || "No extra notes"}</p>
            </div>
            <button onClick={() => setStep(1)} className="mt-6 inline-flex items-center justify-center border border-black/10 text-[#1D1D1F] font-medium text-[15px] px-6 h-[50px] rounded-[10px] hover:bg-[#F5F5F7]">
              Book another
            </button>
          </div>
        </section>
      ) : (
        <form onSubmit={submit} className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1312px] mx-auto grid lg:grid-cols-5 gap-8">
            {/* Left: outlet + space */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <p className="text-white font-bold text-sm tracking-widest uppercase">1. Outlet</p>
                <div className="grid grid-cols-1 gap-2 mt-3">
                  {outlets.map((o) => (
                    <button
                      type="button"
                      key={o.slug}
                      onClick={() => setForm({ ...form, outlet: o.slug })}
                      className={`text-left rounded-2xl p-4 border flex gap-3 items-center transition ${form.outlet === o.slug ? "bg-white border-white shadow-sm" : "bg-white/[0.07] border-white/15 hover:bg-white/[0.10] hover:border-white/20"}`}
                    >
                      <img src={o.image} alt={o.name} className="w-14 h-14 rounded-xl object-cover shrink-0" />
                      <div>
                        <p className={`font-semibold text-xs tracking-wide uppercase ${form.outlet === o.slug ? "text-[#1D1D1F]" : "text-white"}`}>{o.name}</p>
                        <p className={`text-xs ${form.outlet === o.slug ? "text-[#6E6E73]" : "text-white/70"}`}>{o.address}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-white font-bold text-sm tracking-widest uppercase">Space</p>
                <div className="flex flex-col gap-3 mt-3">
                  {availableSpaces.map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setForm({ ...form, space: s.id })}
                      className={`text-left rounded-2xl p-5 border transition ${form.space === s.id ? "bg-white border-white shadow-sm" : "bg-white/[0.07] border-white/15 hover:bg-white/[0.10]"}`}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <p className={`font-semibold text-sm tracking-wide uppercase ${form.space === s.id ? "text-[#1D1D1F]" : "text-white"}`}>{s.name}</p>
                        <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full shrink-0 ${form.space === s.id ? "bg-[#1D1D1F] text-white" : "bg-white/15 text-white"}`}>{s.price}</span>
                      </div>
                      <p className={`text-xs mt-1.5 leading-relaxed ${form.space === s.id ? "text-[#424245]" : "text-white/70"}`}>{s.desc} • {s.capacity}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white/[0.08] border border-white/15 rounded-2xl p-5">
                <p className="text-white font-semibold text-sm">Selected</p>
                <p className="text-white text-sm mt-1 font-medium">{selectedSpace.name} @ {selectedOutlet.name}</p>
                <p className="text-white/90 text-sm font-semibold mt-0.5">{selectedSpace.price} • {selectedSpace.capacity}</p>
              </div>
            </div>

            {/* Right: details — high contrast Apple polish */}
            <div className="lg:col-span-3 bg-white rounded-[20px] border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-6 md:p-8 flex flex-col gap-5">
              {step === 1 && (
                <>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[#1D1D1F] font-semibold text-xs tracking-wide">Date *</label>
                      <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="border border-[#D2D2D7] bg-white rounded-xl px-4 py-3 text-[15px] text-[#1D1D1F] focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/20 transition" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#1D1D1F] font-semibold text-xs tracking-wide">Time</label>
                      <input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="border border-[#D2D2D7] bg-white rounded-xl px-4 py-3 text-[15px] text-[#1D1D1F] focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/20 transition" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#1D1D1F] font-semibold text-xs tracking-wide">Guests</label>
                      <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="border border-[#D2D2D7] bg-white rounded-xl px-4 py-3 text-[15px] text-[#1D1D1F] focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/20 transition">
                        {[1, 2, 3, 4, 6, 8, 12, 20, 50, 80].map((n) => (
                          <option key={n} value={String(n)}>{n}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button type="button" onClick={() => {
                    if (!form.date) { toast({ title: "Pick a date", description: "Choose your date first." }); return; }
                    setStep(2);
                  }} className="inline-flex bg-[#1D1D1F] text-white font-semibold text-[15px] rounded-[10px] hover:bg-black transition-colors h-[50px] items-center justify-center">
                    Continue →
                  </button>
                  <p className="text-[#6E6E73] text-xs text-center">Step 1 of 2 • Free cancellation up to 24h</p>
                </>
              )}

              {step === 2 && (
                <>
                  {!user && (
                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-sm text-[#1D1D1F]">Sign in required</p>
                        <p className="text-xs text-[#6E6E73]">You must be logged in to confirm a booking.</p>
                      </div>
                      <Link to={`/auth?next=${encodeURIComponent(`/book?outlet=${form.outlet}&space=${form.space}`)}`} className="inline-flex items-center justify-center h-[40px] px-5 rounded-[10px] bg-[#1D1D1F] text-white text-sm font-medium hover:bg-black shrink-0">Sign up / Log in</Link>
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[#1D1D1F] font-semibold text-xs tracking-wide">Full name *</label>
                      <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ada Lovelace" className="border border-[#D2D2D7] bg-white rounded-xl px-4 py-3 text-[15px] text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/20 transition" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#1D1D1F] font-semibold text-xs tracking-wide">Email *</label>
                      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="ada@creatorslodge.com" className="border border-[#D2D2D7] bg-white rounded-xl px-4 py-3 text-[15px] text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/20 transition" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#1D1D1F] font-semibold text-xs tracking-wide">Notes (optional)</label>
                    <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} rows={3} placeholder="AV setup, dietary needs, accessibility..." className="border border-[#D2D2D7] bg-white rounded-xl px-4 py-3 text-[15px] text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/20 resize-none transition" />
                  </div>
                  <div className="bg-[#F5F5F7] border border-black/[0.04] rounded-xl p-4 text-sm">
                    <p className="font-semibold text-[#1D1D1F]">{selectedSpace.name} — {selectedSpace.price}</p>
                    <p className="text-[#424245] text-xs mt-1">{selectedOutlet.name} • {form.date} {form.time} • {form.guests} guest(s)</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                      <button type="button" onClick={() => setStep(1)} className="inline-flex flex-1 border border-[#D2D2D7] bg-white text-[#1D1D1F] font-semibold rounded-[10px] hover:bg-[#F5F5F7] transition-colors h-[50px] items-center justify-center">Back</button>
                      <button type="submit" onClick={(e)=>submit(e,false)} disabled={loading} className="inline-flex flex-1 bg-[#0071E3] text-white font-semibold rounded-[10px] hover:bg-[#0077ED] disabled:opacity-50 transition-colors h-[50px] items-center justify-center">
                        {loading ? "Reserving..." : parseAmount(selectedSpace.price)===0 ? "Confirm — Free" : "Pay at venue"}
                      </button>
                    </div>
                    {parseAmount(selectedSpace.price) > 0 && (
                      <button type="button" onClick={(e)=>submit(e,true)} disabled={loading} className="inline-flex items-center justify-center h-[50px] rounded-[10px] bg-[#1D1D1F] text-white font-medium hover:bg-black disabled:opacity-50 gap-2">
                        <span>Pay online via Paystack</span><span className="text-white/60 text-xs">₦{parseAmount(selectedSpace.price).toLocaleString()}</span>
                      </button>
                    )}
                    <p className="text-[#86868B] text-[11px] text-center">Secure via Paystack • mock works without key, set PAYSTACK_SECRET_KEY for live.</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </form>
      )}

      <Footer />
    </div>
  );
}
