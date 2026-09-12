import { Link } from "react-router-dom";

export type Crumb = { label: string; to?: string };

/** Elite breadcrumb trail — always starts with an explicit back-to-home button. */
export default function Breadcrumb({ trail, className = "" }: { trail: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={`lounge-container pt-6 md:pt-8${className ? ` ${className}` : ""}`}>
      <ol className="animate-fade flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]">
        <li>
          <Link
            to="/"
            className="pressable inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/35 bg-white/[0.04] px-3.5 py-1.5 text-gold-soft transition hover:border-[#C6A15B]/65 hover:bg-white/[0.08] hover:text-white"
          >
            <span aria-hidden>←</span> Home
          </Link>
        </li>
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={c.label} className="flex items-center gap-2.5">
              <span aria-hidden className="text-[#C6A15B]/50">/</span>
              {c.to && !last ? (
                <Link to={c.to} className="text-white/55 transition hover:text-gold-soft">
                  {c.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className="text-white/40">
                  {c.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
