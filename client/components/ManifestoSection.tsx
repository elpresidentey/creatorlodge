import { Reveal } from "@/hooks/useReveal";

export default function ManifestoSection() {
  return (
    <section className="w-full border-y border-[#C6A15B]/20 bg-ivory">
      <div className="lounge-container section-pad">
        <div className="grid items-start gap-10 md:grid-cols-12 md:gap-12">
          <Reveal className="flex flex-col gap-4 md:col-span-5">
            <p className="eyebrow eyebrow-rule text-[#9A7B3F]">The Maison</p>
            <h2 className="section-title text-[#171410]">
              A house for the<br />people who <span className="italic text-[#9A7B3F]">make &amp; muse.</span>
            </h2>
          </Reveal>
          <Reveal delay={140} className="flex flex-col gap-8 md:col-span-7">
            <p className="max-w-[560px] font-display text-[19px] font-normal italic leading-[1.6] text-[#3A352C] md:text-[21px]">
              “Not a hotel, not a co-work, not a restaurant — a salon where Lagos&rsquo; finest dine, exhibit and belong.”
            </p>
            <p className="max-w-[560px] text-[15px] leading-[1.7] text-[#6B6355]">
              Calibrated for focus, hospitality and creative energy across VI, Yaba and Lekki — with gallery walls, quiet ateliers and long tables.
            </p>
            <div className="grid grid-cols-3 gap-8 border-t border-[#9A7B3F]/25 pt-8">
              <div><p className="font-display text-[28px] font-medium tabular-nums text-[#171410]">08</p><p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#9A7B3F]">Houses</p></div>
              <div><p className="font-display text-[28px] font-medium tabular-nums text-[#171410]">11</p><p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#9A7B3F]">Salons</p></div>
              <div><p className="font-display text-[28px] font-medium tabular-nums text-[#171410]">XII</p><p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#9A7B3F]">Shows / yr</p></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
