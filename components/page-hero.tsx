import { OptimizedImage } from "@/components/optimized-image";

type PageHeroProps = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function PageHero({ image, imageAlt, eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          variant="hero"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/90 via-charcoal-950/70 to-charcoal-950" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <p className="text-gold-400 text-xs tracking-[0.35em] uppercase mb-6">{eyebrow}</p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-ivory mb-6 leading-tight">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-12 bg-gold-500/50" />
          <span className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
          <span className="h-px w-12 bg-gold-500/50" />
        </div>
        <p className="text-champagne/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
