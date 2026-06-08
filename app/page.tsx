import { HeroSection } from "@/components/home/hero-section";
import { StandardsMarquee } from "@/components/home/standards-marquee";
import { PhilosophySection } from "@/components/home/philosophy-section";
import { SignatureDelicacies } from "@/components/home/signature-delicacies";
import { ExperienceSection } from "@/components/home/experience-section";
import { AmbianceDisplay } from "@/components/home/ambiance-display";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { NairobiPrestige } from "@/components/home/nairobi-prestige";
import { ReservationCta } from "@/components/home/reservation-cta";

export default function Home() {
  return (
    <div id="main-content" className="min-h-screen bg-charcoal-950">
      <HeroSection />
      <StandardsMarquee />
      <PhilosophySection />
      <SignatureDelicacies />
      <ExperienceSection />
      <AmbianceDisplay />
      <TestimonialsSection />
      <NairobiPrestige />
      <ReservationCta />
    </div>
  );
}
