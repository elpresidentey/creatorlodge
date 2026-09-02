import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const scorePassword = (p: string) => {
  let s = 0;
  if (p.length >= 8) s++;
  if (/[A-Z]/.test(p)) s++;
  if (/[a-z]/.test(p)) s++;
  if (/[0-9]/.test(p)) s++;
  if (/[^A-Za-z0-9]/.test(p)) s++;
  return s;
};

export default function Auth() {
  const { user, signOut } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [resetSent, setResetSent] = useState(false);

  useEffect(() => { if (cooldown > 0) { const t = setTimeout(() => setCooldown(c => c - 1), 1000); return () => clearTimeout(t); } }, [cooldown]);

  // PKCE code exchange: Supabase PKCE sends ?code=xxx to redirectTo. Must exchange for session.
  useEffect(() => {
    const code = searchParams.get("code");
    const errDesc = searchParams.get("error_description");
    if (errDesc) toast({ title: "Link error", description: decodeURIComponent(errDesc) });
    if (code && supabase) {
      supabase.auth.exchangeCodeForSession(code).then(({ error }) => {
        if (error) toast({ title: "Session error", description: error.message });
        else toast({ title: "Verified!", description: "You are now signed in." });
        // clean URL
        navigate("/auth", { replace: true });
      });
    }
  }, [searchParams]);

  const emailErr = touched && !emailOk(email) ? "Enter a valid email" : "";
  const pwScore = scorePassword(password);
  const pwErr = touched && mode === "signup" && password.length > 0 && pwScore < 3 ? "Use 8+ chars with mix of upper/lower/number/symbol" : "";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!emailOk(email)) { toast({ title: "Check email", description: "Enter a valid email address." }); return; }
    if (password.length < 8) { toast({ title: "Password too short", description: "Minimum 8 characters." }); return; }
    if (cooldown > 0) return;
    if (!supabase) { toast({ title: "Auth not configured", description: "Set VITE_SUPABASE_ANON_KEY." }); return; }
    setLoading(true);
    try {
      if (mode === "signin") {
        const { data, error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
        if (error) throw error;
        // Session is set via onAuthStateChange; redirect param ?next=
        const next = searchParams.get("next") || "/book";
        toast({ title: "Welcome back!" });
        if (data.session) navigate(next, { replace: true });
      } else {
        if (pwScore < 3) { toast({ title: "Weak password", description: "Add uppercase, number or symbol." }); setLoading(false); return; }
        const { data, error } = await supabase.auth.signUp({ email: email.trim(), password, options: { emailRedirectTo: window.location.origin + "/auth" } });
        if (error) throw error;
        // If email confirmations are ON, user will be null and needs to verify; if OFF, session exists
        if (data.session) {
          toast({ title: "Account created", description: "You are now signed in." });
          navigate("/book", { replace: true });
        } else {
          toast({ title: "Check your email", description: "We sent a confirmation link. Click it to verify, then sign in." });
        }
      }
    } catch (err: any) {
      const msg = err.message || "Auth failed";
      const isRate = /rate|too many|429/i.test(msg);
      toast({ title: isRate ? "Too many attempts" : "Auth error", description: msg });
      if (isRate) setCooldown(60);
      else setCooldown(3);
    } finally { setLoading(false); }
  };

  const magic = async () => {
    if (!emailOk(email)) { toast({ title: "Enter a valid email first" }); return; }
    if (!supabase) { toast({ title: "Auth not configured" }); return; }
    if (cooldown > 0) return;
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: window.location.origin + "/auth", shouldCreateUser: true },
    });
    if (error) { toast({ title: "Error", description: error.message }); setCooldown(10); }
    else { toast({ title: "Magic link sent", description: "Check inbox (and spam). Link expires in 1 hour. PKCE code will auto-sign you in." }); setCooldown(30); }
  };

  const reset = async () => {
    if (!emailOk(email)) { toast({ title: "Enter your email above first" }); return; }
    if (!supabase) return;
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), { redirectTo: window.location.origin + "/update-password" });
    if (error) toast({ title: "Error", description: error.message });
    else { setResetSent(true); toast({ title: "Reset email sent", description: "Click the link to set a new password." }); }
  };

  if (user) {
    return (
      <div className="min-h-screen bg-brand-dark"><Navbar />
        <section className="px-6 md:px-10 lg:px-16 py-16"><div className="max-w-[480px] mx-auto bg-white rounded-[20px] border border-black/5 p-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          <p className="text-[#6E6E73] text-xs font-semibold tracking-widest uppercase">Signed in — secure session</p>
          <p className="font-cabin font-semibold text-xl text-[#1D1D1F] mt-2 break-all">{user.email}</p>
          <p className="text-[#6E6E73] text-xs mt-1">Verified: {user.email_confirmed_at ? "yes" : "check inbox"} · {new Date(user.created_at).toLocaleDateString()}</p>
          <p className="text-[#6E6E73] text-sm mt-3">Bookings & membership are tied to this email. Session stored httpOnly via Supabase (PKCE).</p>
          <div className="flex gap-3 mt-6">
            <Link to="/book" className="flex-1 inline-flex items-center justify-center h-[50px] rounded-[10px] bg-[#1D1D1F] text-white font-medium">Book a space</Link>
            <button onClick={signOut} className="flex-1 h-[50px] rounded-[10px] border border-[#D2D2D7] bg-white font-medium hover:bg-[#F5F5F7]">Sign out</button>
          </div>
        </div></section><Footer /></div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark"><Navbar />
      <section className="px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="max-w-[480px] mx-auto">
          <p className="text-brand-yellow text-xs font-semibold tracking-[0.2em] uppercase text-center">Secure account</p>
          <h1 className="font-cabin font-semibold text-3xl text-white text-center mt-3 tracking-[-0.03em]">{mode === "signin" ? "Welcome back" : "Create account"}</h1>
          <p className="text-white/60 text-sm text-center mt-2">Supabase Auth · PKCE · email verification · rate-limited.</p>

          <form onSubmit={submit} noValidate className="mt-8 bg-white rounded-[20px] border border-black/5 p-6 md:p-8 flex flex-col gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="auth-email" className="text-[#1D1D1F] font-semibold text-xs">Email *</label>
              <input id="auth-email" value={email} onChange={e=>setEmail(e.target.value)} onBlur={()=>setTouched(true)} type="email" autoComplete="email" inputMode="email" placeholder="ada@creatorslounge.com" aria-invalid={!!emailErr} aria-describedby="email-err" className={`border rounded-xl px-4 h-[48px] text-[15px] text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:ring-4 focus:ring-[#0071E3]/20 ${emailErr ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : "border-[#D2D2D7] focus:border-[#0071E3]"}`} required />
              {emailErr && <p id="email-err" className="text-red-600 text-xs">{emailErr}</p>}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label htmlFor="auth-pass" className="text-[#1D1D1F] font-semibold text-xs">Password *</label>
                <button type="button" onClick={()=>setShow(!show)} className="text-xs font-medium text-[#0071E3] hover:underline">{show ? "Hide" : "Show"}</button>
              </div>
              <input id="auth-pass" value={password} onChange={e=>setPassword(e.target.value)} onBlur={()=>setTouched(true)} type={show ? "text" : "password"} autoComplete={mode==="signin"?"current-password":"new-password"} placeholder={mode==="signin"?"••••••••":"Min 8 chars, mix Aa1!"} aria-invalid={!!pwErr} className={`border rounded-xl px-4 h-[48px] text-[15px] text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:ring-4 focus:ring-[#0071E3]/20 ${pwErr ? "border-red-400" : "border-[#D2D2D7] focus:border-[#0071E3]"}`} required />
              {mode==="signup" && password.length>0 && (
                <div className="flex gap-1.5 items-center">
                  <div className="flex-1 h-1.5 bg-[#F5F5F7] rounded-full overflow-hidden"><div className={`h-full transition-all ${pwScore<=2?"bg-red-500 w-1/3":pwScore===3?"bg-amber-500 w-2/3":pwScore>=4?"bg-[#34C759] w-full":""}`} /></div>
                  <span className="text-[11px] font-medium text-[#6E6E73]">{pwScore<=2?"Weak":pwScore===3?"Fair":pwScore>=4?"Strong":""}</span>
                </div>
              )}
              {pwErr && <p className="text-red-600 text-xs">{pwErr}</p>}
              {mode==="signin" && <button type="button" onClick={reset} className="self-start text-xs text-[#0071E3] hover:underline font-medium">{resetSent ? "Reset email sent ✓" : "Forgot password?"}</button>}
            </div>

            <button disabled={loading || cooldown>0} className="inline-flex items-center justify-center h-[50px] rounded-[10px] bg-[#1D1D1F] text-white font-medium hover:bg-black disabled:opacity-50 transition">
              {cooldown>0 ? `Wait ${cooldown}s` : loading ? "Please wait…" : mode==="signin"?"Sign in securely":"Create secure account"}
            </button>

            <div className="relative py-1"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-black/5" /></div><div className="relative flex justify-center"><span className="bg-white px-3 text-xs text-[#6E6E73]">or</span></div></div>

            <button type="button" onClick={magic} disabled={cooldown>0} className="h-[50px] rounded-[10px] border border-[#D2D2D7] bg-white font-medium text-sm hover:bg-[#F5F5F7] disabled:opacity-50 flex items-center justify-center gap-2">
              <span>✉️</span> Send magic link {cooldown>0 && `(${cooldown}s)`}
            </button>

            <p className="text-center text-sm text-[#6E6E73]">{mode==="signin" ? "No account? " : "Already have one? "}<button type="button" onClick={()=>{setMode(mode==="signin"?"signup":"signin"); setTouched(false);}} className="text-[#0071E3] font-medium hover:underline">{mode==="signin" ? "Sign up" : "Sign in"}</button></p>

            <p className="text-[11px] leading-relaxed text-[#86868B] text-center border-t border-black/5 pt-4">Protected by Supabase Auth (PKCE flow, hashed passwords, email verification). We never store plaintext passwords. {supabase ? "Session is httpOnly-secure, auto-refreshing." : "Set VITE_SUPABASE_ANON_KEY to enable."}</p>
          </form>
        </div>
      </section><Footer /></div>
  );
}
