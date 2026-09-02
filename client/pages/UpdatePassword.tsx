import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export default function UpdatePassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle PKCE code exchange if user landed via recovery link ?code=
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const error = params.get("error_description");
    if (error) toast({ title: "Link error", description: decodeURIComponent(error) });
    if (code && supabase) {
      supabase.auth.exchangeCodeForSession(code).then(({ error }) => {
        if (error) toast({ title: "Session error", description: error.message });
        else toast({ title: "Verified", description: "Set your new password." });
        window.history.replaceState({}, "", "/update-password");
      });
    }
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) { toast({ title: "Too short", description: "Min 8 chars" }); return; }
    if (password !== confirm) { toast({ title: "Mismatch", description: "Passwords do not match" }); return; }
    if (!supabase) return;
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) toast({ title: "Error", description: error.message });
    else { toast({ title: "Password updated", description: "Sign in with new password." }); navigate("/auth"); }
  };

  return (
    <div className="min-h-screen bg-brand-dark"><Navbar />
      <section className="px-6 md:px-10 lg:px-16 py-16">
        <div className="max-w-[440px] mx-auto bg-white rounded-[20px] border border-black/5 p-6 md:p-8 flex flex-col gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          <h1 className="font-cabin font-semibold text-2xl text-[#1D1D1F] tracking-[-0.02em]">Set new password</h1>
          <p className="text-[#6E6E73] text-sm">You arrived via a recovery link. Choose a new password.</p>
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[#1D1D1F] font-semibold text-xs">New password</label>
              <input value={password} onChange={e=>setPassword(e.target.value)} type="password" autoComplete="new-password" placeholder="Min 8 chars, mix Aa1!" className="border border-[#D2D2D7] rounded-xl px-4 h-[48px] text-[15px] focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/20" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#1D1D1F] font-semibold text-xs">Confirm</label>
              <input value={confirm} onChange={e=>setConfirm(e.target.value)} type="password" autoComplete="new-password" placeholder="Repeat password" className="border border-[#D2D2D7] rounded-xl px-4 h-[48px] text-[15px] focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/20" required />
            </div>
            <button disabled={loading} className="h-[50px] rounded-[10px] bg-[#1D1D1F] text-white font-medium hover:bg-black disabled:opacity-50">{loading?"Saving…":"Update password"}</button>
          </form>
        </div>
      </section><Footer /></div>
  );
}
