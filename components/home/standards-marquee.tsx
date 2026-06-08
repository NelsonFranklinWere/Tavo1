import { luxuryStandards } from "@/lib/home-data";

export function StandardsMarquee() {
  const items = [...luxuryStandards, ...luxuryStandards];

  return (
    <div className="border-y border-accent-500/25 bg-gradient-to-r from-charcoal-950 via-accent-900/15 to-charcoal-950 py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center mx-8 text-sm tracking-[0.2em] uppercase text-gold-400/90 font-body">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-4 shadow-red-glow" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
