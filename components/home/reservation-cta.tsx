import Link from "next/link";

export function ReservationCta() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-charcoal-900 to-charcoal-950 border-t border-gold-500/20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <p className="text-gold-400 text-xs tracking-[0.35em] uppercase mb-6">Your Table Awaits</p>
        <h2 className="font-display text-4xl md:text-5xl text-ivory mb-6">
          Reserve an Evening of Delicacies
        </h2>
        <p className="text-champagne/70 text-lg mb-10 leading-relaxed">
          Join Nairobi&apos;s finest for an evening where every detail has been considered.
          Limited seating — we recommend booking in advance.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/reservations"
            className="px-12 py-4 bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-500 hover:shadow-gold-lg"
          >
            Book Now
          </Link>
          <Link
            href="/contact"
            className="px-12 py-4 border border-gold-500/40 text-gold-300 hover:text-gold-200 text-sm tracking-[0.15em] uppercase transition-colors"
          >
            Enquire
          </Link>
        </div>
      </div>
    </section>
  );
}
