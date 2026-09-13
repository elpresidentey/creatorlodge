import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTitle } from "@/hooks/useTitle";

const NotFound = () => {
  const location = useLocation();
  useTitle("Lost in the house — 404");

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-[#0E0E0F]">
      <Navbar />
      <div className="lounge-container flex flex-1 flex-col items-center justify-center py-20 text-center md:py-28">
        <p className="eyebrow eyebrow-rule text-[#C6A15B]">N°404 — Wrong corridor</p>
        <h1 className="mt-4 font-display text-[64px] font-medium leading-none text-ivory sm:text-[96px]">
          Lost<span className="italic text-gold-soft">?</span>
        </h1>
        <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-white/60">
          This page doesn&rsquo;t exist — but the house has many doors. Let us walk you back.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="btn-shine pressable inline-flex h-[52px] items-center justify-center gap-2 rounded-[10px] bg-gradient-to-b from-[#DDBB7A] to-[#C6A15B] px-8 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#171410] shadow-[0_12px_32px_rgba(198,161,91,0.3)] hover:brightness-105"
          >
            <span aria-hidden>←</span> Back to home
          </Link>
          <Link
            to="/outlets"
            className="pressable inline-flex h-[52px] items-center justify-center rounded-[10px] border border-[#C6A15B]/30 px-8 text-[13px] font-medium uppercase tracking-[0.1em] text-ivory hover:border-[#C6A15B]/60 hover:bg-white/5"
          >
            Explore the houses
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
