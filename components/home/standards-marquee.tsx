import { luxuryStandards } from "@/lib/home-data";

export function StandardsMarquee() {
  const items = [...luxuryStandards, ...luxuryStandards];

  return (
    <div className="border-y border-gold-500/20 bg-charcoal-950 py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center mx-8 text-sm tracking-[0.2em] uppercase text-gold-400/90 font-body">
            <span className="w-1 h-1 rounded-full bg-gold-500 mr-4" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
