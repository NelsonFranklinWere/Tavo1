type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="text-gold-400 text-xs md:text-sm font-body tracking-[0.35em] uppercase mb-4">
        {eyebrow}
      </p>
      <h2
        className={`font-display text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 ${
          light ? "text-ivory" : "text-ivory"
        }`}
      >
        {title}
      </h2>
      <div
        className={`flex items-center gap-4 mb-6 ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <span className="h-px w-12 bg-gold-500/60" />
        <span className="w-2 h-2 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 shadow-red-glow" />
        <span className="h-px w-12 bg-gold-500/60" />
      </div>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } text-champagne/80`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
