import Link from "next/link";
import { ChevronDown, MapPin } from "lucide-react";
import { OptimizedImage } from "@/components/optimized-image";
import { heroImages } from "@/lib/images";
import { restaurantInfo } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={heroImages.home}
          alt="TAVO — Fine dining at Rosslyn Square, Nairobi"
          fill
          className="object-cover scale-105"
          variant="hero"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/90 via-charcoal-950/50 to-charcoal-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/40 via-transparent to-charcoal-950/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl pt-24">
        <p className="text-gold-400 text-xs md:text-sm tracking-[0.4em] uppercase mb-6 animate-fade-in font-body">
          Rosslyn Square · Nairobi · Est. Fine Dining
        </p>

        <h1 className="font-display text-7xl md:text-8xl lg:text-[10rem] font-semibold text-ivory mb-4 tracking-[0.15em] animate-fade-in leading-none">
          TAVO
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <span className="h-px w-16 md:w-24 bg-gold-500/50" />
          <p className="text-lg md:text-2xl text-gold-300 font-display italic tracking-wide">
            {restaurantInfo.tagline}
          </p>
          <span className="h-px w-16 md:w-24 bg-gold-500/50" />
        </div>

        <p className="text-base md:text-xl text-champagne/90 mb-12 max-w-2xl mx-auto leading-relaxed font-body animate-fade-in">
          Nairobi&apos;s address for delicacies — where world-class cuisine, refined ambience,
          and white-glove service meet the standards of the city&apos;s finest hotels.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in">
          <Link
            href="/reservations"
            className="group px-10 py-4 bg-gold-500 hover:bg-gold-400 text-charcoal-950 rounded-sm font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-500 hover:shadow-gold-lg"
          >
            Reserve Your Table
          </Link>
          <Link
            href="/menu"
            className="group px-10 py-4 border border-gold-500/50 hover:border-gold-400 text-gold-300 hover:text-gold-200 rounded-sm font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-500 backdrop-blur-sm"
          >
            Explore Delicacies
          </Link>
        </div>

        <a
          href={restaurantInfo.social.google}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-10 text-champagne/60 hover:text-gold-400 text-sm tracking-wide transition-colors"
        >
          <MapPin className="w-4 h-4" />
          Rosslyn Square Luxury Mall, Redhill Road
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow text-gold-500/60">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
