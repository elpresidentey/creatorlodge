import { Link } from "react-router-dom";
import { tiers } from "@/lib/lounge-data";
import { Reveal } from "@/hooks/useReveal";

export default function MembershipPreview() {
  return (
    <section className="w-full bg-[#0E0E0F]">
      <div className="lounge-container section-pad">
        <Reveal className="flex max-w-2xl flex-col gap-4">
          <p className="eyebrow eyebrow-rule text-[#C6A15B]">Membership</p>
          <h2 className="section-title text-ivory">One key, <span className="italic text-gold-soft">three houses.</span></h2>
          <p className="max-w-xl text-[15px] leading-[1.7] text-white/60 md:text-base">Day pass or yearly member — same table, same circle, same exhibitions.</p>
        </Reveal>
        <div className="mt-10 grid items-stretch gap-5 md:mt-12 md:grid-cols-3 lg:gap-6">
          {tiers.map((t, i)=>(
            <Reveal key={t.name} delay={i * 120}>
            <div className={`card-lift flex h-full flex-col rounded-[20px] p-7 md:p-8 ${t.featured ? "border border-[#C6A15B]/45 bg-gradient-to-b from-[#1A1815] to-[#101010] shadow-[0_28px_70px_rgba(0,0,0,0.5),0_0_0_1px_rgba(198,161,91,0.12)]" : "border border-white/10 bg-white/[0.04]"}`}>
              <div className="flex items-center justify-between gap-3">
                <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${t.featured ? "text-gold-soft" : "text-white/50"}`}>{t.name}</p>
                {t.featured && <span className="surface-chip bg-gradient-to-b from-[#DDBB7A] to-[#C6A15B] text-[#171410]">Most coveted</span>}
              </div>
              <p className="mt-4 font-display text-[34px] font-medium leading-none tracking-[-0.01em] text-ivory">{t.price}<span className="ml-1.5 font-cabin text-sm font-normal tracking-normal text-white/65">{t.period}</span></p>
              <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-[#C6A15B]/20 pt-6">{t.perks.map((p)=><li key={p} className="flex gap-2.5 text-[14px] leading-relaxed text-white/85"><span aria-hidden className="text-gold-soft">✦</span>{p}</li>)}</ul>
              <Link to="/membership" className={`pressable mt-8 inline-flex h-[50px] items-center justify-center rounded-[12px] text-[13px] font-semibold uppercase tracking-[0.1em] transition ${t.featured ? "btn-shine border border-[#E8C77A]/40 bg-gradient-to-b from-[#E8C77A] to-[#C6A15B] text-[#171410] shadow-[0_12px_40px_rgba(212,168,75,0.45),0_0_20px_rgba(212,168,75,0.2),inset_0_1px_0_rgba(255,255,255,0.5)] hover:brightness-110" : "border border-white/20 bg-white/[0.06] text-white hover:border-[#C6A15B]/50 hover:bg-white/10"}`}>{t.cta}</Link>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
