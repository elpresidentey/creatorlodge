import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { supabase } from "@/lib/supabase";
import type { Session, User } from "@supabase/supabase-js";

type AuthCtx = { user: User | null; session: Session | null; loading: boolean; signOut: () => Promise<void> };
const Ctx = createContext<AuthCtx>({ user: null, session: null, loading: true, signOut: async () => {} });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!supabase) { setLoading(false); return; }
    // Initial session
    supabase.auth.getSession().then(({ data }) => setSession(data.session ?? null)).finally(()=> setLoading(false));
    // Listen for all auth events (SIGNED_IN, SIGNED_OUT, TOKEN_REFRESHED, USER_UPDATED)
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      setLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);
  const signOut = async () => {
    if (supabase) await supabase.auth.signOut();
    setSession(null);
  };
  return <Ctx.Provider value={{ user: session?.user ?? null, session, loading, signOut }}>{children}</Ctx.Provider>;
}
export const useAuth = () => useContext(Ctx);
