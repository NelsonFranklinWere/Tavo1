import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";
import { OptimizedImage } from "@/components/optimized-image";
import { interiorImages } from "@/lib/images";
import { restaurantInfo } from "@/lib/data";

export function NairobiPrestige() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={interiorImages.interior}
          alt="TAVO at Rosslyn Square, Nairobi"
          fill
          className="object-cover"
          variant="hero"
        />
        <div className="absolute inset-0 bg-charcoal-950/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold-400 text-xs tracking-[0.35em] uppercase mb-4">Nairobi&apos;s Address</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6 leading-tight">
              Rosslyn Square,<br />
              <span className="text-gold-300 italic">Redhill Road</span>
            </h2>
            <p className="text-champagne/80 text-lg leading-relaxed mb-8">
              Positioned within Nairobi&apos;s premier luxury mall — alongside the city&apos;s
              most distinguished residences and hotels. TAVO is where discerning Nairobi
              gathers for an evening worth remembering.
            </p>
            <Link
              href={restaurantInfo.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gold-500 hover:bg-gold-400 text-charcoal-950 text-sm tracking-[0.15em] uppercase font-semibold transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </Link>
          </div>

          <div className="space-y-6 border border-gold-500/20 p-8 md:p-10 bg-charcoal-950/60 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-ivory font-medium">{restaurantInfo.address.street}</p>
                <p className="text-champagne/60 text-sm">{restaurantInfo.address.city}, {restaurantInfo.address.country}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <div className="text-champagne/70 text-sm">
                <p>{restaurantInfo.hours.mon_thu}</p>
                <p>{restaurantInfo.hours.fri_sun}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <a href={`tel:${restaurantInfo.phone}`} className="text-gold-300 hover:text-gold-200 transition-colors">
                {restaurantInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
