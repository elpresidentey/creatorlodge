import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { outlets, spaces, menu } from "@/lib/lounge-data";

export default function Admin() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<any[]>([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    if (!loading && !user) navigate(`/auth?next=${encodeURIComponent("/admin")}`);
  }, [user, loading]);

  useEffect(() => {
    if (!user) return;
    supabase?.auth.getSession().then(({ data }) => {
      const t = data.session?.access_token;
      fetch("/api/bookings", { headers: t ? { Authorization: `Bearer ${t}` } : {} })
        .then(r => r.json()).then(d => setBookings(d.bookings || [])).catch(()=>{});
    });
  }, [user]);

  const filtered = bookings.filter(b => !q || `${b.outletSlug} ${b.spaceId} ${b.name} ${b.email}`.toLowerCase().includes(q.toLowerCase()));

  if (loading) return <div className="min-h-screen bg-[#1D1D1F] flex items-center justify-center text-white/60">Loading…</div>;
  if (!user) return null;

  const isAdmin = user.email?.endsWith("@creatorslounge.com") || user.email === "ekene@example.com";
  if (!isAdmin) {
    return <div className="min-h-screen bg-[#1D1D1F]"><Navbar /><div className="max-w-[640px] mx-auto px-6 py-24 text-center"><h1 className="font-cabin font-semibold text-2xl text-white">Admin only</h1><p className="text-white/60 text-sm mt-2">Your email {user.email} isn’t admin. Add it to ADMIN_EMAILS.</p><Link to="/" className="inline-flex h-[50px] px-6 rounded-[10px] bg-white text-[#1D1D1F] font-medium mt-6">Home</Link></div><Footer /></div>;
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <Navbar />
      <section className="px-6 md:px-10 lg:px-16 py-8">
        <div className="max-w-[1312px] mx-auto">
          <p className="text-[#6E6E73] text-xs font-semibold tracking-[0.18em] uppercase">Admin</p>
          <h1 className="font-cabin font-semibold text-[32px] tracking-[-0.03em] text-[#1D1D1F] mt-2">Bookings · {bookings.length}</h1>
          <div className="flex gap-2 mt-4">
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search outlet, space, name, email" className="flex-1 max-w-md h-[44px] rounded-xl border border-black/10 bg-white px-4 text-sm placeholder:text-[#86868B] focus:outline-none focus:border-[#0071E3]" />
            <span className="text-xs text-[#6E6E73] py-3">{filtered.length} shown</span>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-8">
        <div className="max-w-[1312px] mx-auto bg-white rounded-[16px] border border-black/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#F5F5F7] text-[#6E6E73] text-xs uppercase tracking-widest"><tr><th className="text-left px-4 py-3">ID</th><th className="text-left px-4 py-3">Outlet · Space</th><th className="text-left px-4 py-3">Date</th><th className="text-left px-4 py-3">Guest</th><th className="text-left px-4 py-3">Status</th></tr></thead>
              <tbody>
                {filtered.map(b=>(
                  <tr key={b.id} className="border-t border-black/5 hover:bg-[#F5F5F7]/50">
                    <td className="px-4 py-3 font-mono text-xs">{b.id}</td>
                    <td className="px-4 py-3"><span className="font-semibold text-[#1D1D1F]">{b.spaceId}</span><span className="text-[#6E6E73]"> · {b.outletSlug}</span></td>
                    <td className="px-4 py-3 text-xs">{b.date} {b.time}</td>
                    <td className="px-4 py-3"><span className="font-medium text-[#1D1D1F]">{b.name}</span><span className="text-[#6E6E73] text-xs block">{b.email} · {b.guests}g</span></td>
                    <td className="px-4 py-3"><span className={`text-xs font-semibold px-2 py-1 rounded-full ${b.paid ? "bg-[#34C759] text-white" : b.amount===0 ? "bg-white border border-black/10 text-[#6E6E73]" : "bg-amber-100 text-amber-800"}`}>{b.paid ? "Paid" : b.amount===0 ? "Free" : "Unpaid"}</span></td>
                  </tr>
                ))}
                {filtered.length===0 && <tr><td colSpan={5} className="px-4 py-12 text-center text-[#6E6E73] text-sm">No bookings found</td></tr>}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-16">
        <div className="max-w-[1312px] mx-auto grid md:grid-cols-3 gap-5">
          <div className="bg-white rounded-[16px] border border-black/5 p-5">
            <h3 className="font-cabin font-semibold text-sm text-[#1D1D1F]">Outlets ({outlets.length})</h3>
            <ul className="mt-3 space-y-1 text-sm text-[#424245]">{outlets.map(o=><li key={o.slug} className="flex justify-between"><span>{o.name}</span><span className="text-[#6E6E73] text-xs">{o.slug}</span></li>)}</ul>
            <p className="text-xs text-[#86868B] mt-3">Edit in <code>lounge-data.ts</code> → push → redeploy.</p>
          </div>
          <div className="bg-white rounded-[16px] border border-black/5 p-5">
            <h3 className="font-cabin font-semibold text-sm text-[#1D1D1F]">Spaces ({spaces.length})</h3>
            <ul className="mt-3 space-y-1 text-sm text-[#424245]">{spaces.map(s=><li key={s.id} className="flex justify-between"><span>{s.name}</span><span className="text-[#6E6E73] text-xs">{s.price}</span></li>)}</ul>
          </div>
          <div className="bg-white rounded-[16px] border border-black/5 p-5">
            <h3 className="font-cabin font-semibold text-sm text-[#1D1D1F]">Menu sections ({menu.length})</h3>
            <ul className="mt-3 space-y-1 text-sm text-[#424245]">{menu.map(m=><li key={m.title} className="flex justify-between"><span>{m.title}</span><span className="text-[#6E6E73] text-xs">{m.items.length} items</span></li>)}</ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
