const items = [
  "Dine",
  "Exhibit",
  "Belong",
  "The Kitchen",
  "The Bar",
  "The Workspace",
  "The Gallery",
  "Exhibition Nightly",
  "VI · Yaba · Lekki · Festac · Surulere · Egbeda · Ikoyi · Abuja",
];

export default function GoldTicker() {
  const row = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden border-y border-[#C6A15B]/25 bg-[#0B0B0C] py-3.5" aria-hidden>
      <div className="marquee-track flex w-max items-center gap-8 pr-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-cabin text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-soft/90">
              {t}
            </span>
            <span className="text-[11px] text-[#C6A15B]/60">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0B0B0C] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0B0B0C] to-transparent" />
    </div>
  );
}
