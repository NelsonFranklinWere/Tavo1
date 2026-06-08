import { SectionHeading } from "@/components/section-heading";

export function PhilosophySection() {
  return (
    <section className="py-24 md:py-32 bg-charcoal-950 relative overflow-hidden section-red-accent">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <SectionHeading
          eyebrow="Our Philosophy"
          title="Where Delicacy Meets Nairobi"
          subtitle="In a city that demands excellence, TAVO answers with plates that speak softly and flavours that linger. Every ingredient is chosen with intention. Every service gesture, deliberate. This is dining for those who know the difference."
        />
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          {[
            { label: "Craft", value: "Chef-Led" },
            { label: "Setting", value: "Rosslyn Square" },
            { label: "Standard", value: "Five-Star" },
          ].map((stat) => (
            <div key={stat.label} className="border border-gold-500/20 py-8 px-4">
              <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-2">{stat.label}</p>
              <p className="font-display text-2xl md:text-3xl text-ivory">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
