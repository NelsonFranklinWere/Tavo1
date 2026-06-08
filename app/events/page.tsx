import { AppButton } from "@/components/ui/app-button";
import {
  Calendar,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Award,
} from "lucide-react";
import { restaurantInfo } from "@/lib/data";
import { interiorImages } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { OptimizedImage } from "@/components/optimized-image";
import { eventOfferings, eventProcess } from "@/lib/pages-data";

const iconMap = {
  users: Users,
  award: Award,
  star: Star,
  calendar: Calendar,
  map: MapPin,
  clock: Clock,
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-charcoal-950">
      <PageHero
        image={interiorImages.ambiance1}
        imageAlt="TAVO private events and catering"
        eyebrow="Events & Catering"
        title="Occasions Worth Remembering"
        subtitle="From intimate anniversaries to board dinners that close deals — TAVO brings Nairobi hotel-standard event service to Rosslyn Square."
      />

      {/* Intro */}
      <section className="py-20 md:py-28 border-b border-gold-500/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-champagne/80 text-lg md:text-xl leading-relaxed">
            Nairobi&apos;s social calendar demands venues that understand discretion, excellence,
            and the unspoken art of hospitality. At TAVO, your event is not a booking — it is a
            collaboration. Our events team works alongside you from first conversation to final toast,
            ensuring every detail reflects the standards your guests expect.
          </p>
        </div>
      </section>

      {/* Event Offerings */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading
            eyebrow="What We Offer"
            title="Tailored for Every Occasion"
            subtitle="Six distinct event experiences — each delivered with the precision of a five-star hotel."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {eventOfferings.map((event) => {
              const Icon = iconMap[event.icon];
              return (
                <article
                  key={event.title}
                  className="group p-8 border border-gold-500/15 hover:border-gold-500/35 transition-all duration-500 hover:bg-gold-500/5"
                >
                  <div className="w-12 h-12 border border-gold-500/30 flex items-center justify-center mb-6 group-hover:border-gold-500/60 transition-colors">
                    <Icon className="w-5 h-5 text-gold-400" strokeWidth={1.5} />
                  </div>
                  <p className="text-gold-400 text-xs tracking-[0.2em] uppercase mb-2">{event.subtitle}</p>
                  <h3 className="font-display text-xl text-ivory mb-4">{event.title}</h3>
                  <p className="text-champagne/65 text-sm leading-relaxed mb-6">{event.description}</p>
                  <ul className="space-y-2">
                    {event.highlights.map((h) => (
                      <li key={h} className="text-champagne/50 text-xs flex items-start gap-2">
                        <span className="text-gold-500 mt-0.5">—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-20 bg-charcoal-900 border-y border-gold-500/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden border border-gold-500/20">
              <OptimizedImage
                src={interiorImages.ambiance2}
                alt="TAVO private dining setup"
                fill
                className="object-cover"
                variant="galleryThumb"
              />
            </div>
            <div>
              <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">Why TAVO Events</p>
              <h2 className="font-display text-3xl md:text-4xl text-ivory mb-6">
                The Venue Nairobi&apos;s Finest Choose
              </h2>
              <div className="space-y-4 text-champagne/75 text-sm leading-relaxed">
                <p>
                  Diplomatic dinners. C-suite board meetings. Engagement celebrations that
                  make the guest list jealous. TAVO has hosted them all — with the same
                  quiet confidence that defines Nairobi&apos;s best hotels.
                </p>
                <p>
                  Private suites away from the main dining room. Sommelier-led wine service.
                  Bespoke menus designed by our executive chef. And a team that anticipates
                  needs before they are spoken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading
            eyebrow="How It Works"
            title="From Vision to Celebration"
            subtitle="A seamless four-step journey — because planning an event should feel as refined as attending one."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {eventProcess.map((step) => (
              <div key={step.step} className="text-center">
                <p className="font-display text-4xl text-gold-500/30 mb-4">{step.step}</p>
                <h3 className="font-display text-xl text-ivory mb-3">{step.title}</h3>
                <p className="text-champagne/60 text-sm leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden border-t border-accent-500/20">
        <div className="absolute inset-0 bg-gradient-to-t from-accent-900/25 to-charcoal-900" />
        <div className="relative container mx-auto px-4 max-w-3xl text-center">
          <p className="text-accent-400 text-xs tracking-[0.35em] uppercase mb-6">Begin Planning</p>
          <h2 className="font-display text-3xl md:text-4xl text-ivory mb-6">
            Let&apos;s Design Your Evening
          </h2>
          <p className="text-champagne/70 mb-10 leading-relaxed">
            Our events team responds within 24 hours. Early booking recommended for
            weekends and holiday seasons.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <AppButton href={`tel:${restaurantInfo.phone}`} external variant="primary" icon={<Phone className="w-4 h-4" />}>
              Call Us
            </AppButton>
            <AppButton href={`mailto:${restaurantInfo.email}?subject=TAVO Event Enquiry`} external variant="outline" icon={<Mail className="w-4 h-4" />}>
              Email Events
            </AppButton>
            <AppButton href="/contact" variant="outline">
              Send a Message
            </AppButton>
          </div>
        </div>
      </section>
    </div>
  );
}
