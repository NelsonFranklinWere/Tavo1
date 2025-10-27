import Link from "next/link";
import Image from "next/image";
import { ArrowRight, UtensilsCrossed, Users, Award, MapPin, Star, Clock, Phone } from "lucide-react";
import { restaurantInfo } from "@/lib/data";

export default function Home() {
  return (
    <div id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-modern">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero/homepage.png"
            alt="TAVO Restaurant Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        </div>

        {/* Content - Centered */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-6xl">
          {/* Brand Name */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 tracking-wider">
              TAVO
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-brand-500 mx-auto mb-6"></div>
            <p className="text-2xl md:text-3xl text-brand-400 font-light tracking-widest">
              {restaurantInfo.tagline}
            </p>
          </div>
          
          {/* Subtext - Centered */}
          <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            {restaurantInfo.subtext}
          </p>
          
          {/* CTA Buttons - Centered */}
          <div className="flex flex-col items-center gap-6 animate-fade-in mb-16">
            {/* Top Row - View Menu and Order via Bolt */}
            <div className="flex flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link
                href="/menu"
                className="group px-8 sm:px-12 py-4 sm:py-5 border-2 border-accent-500/50 hover:border-accent-400 backdrop-blur-sm bg-black/20 hover:bg-accent-500/10 text-accent-400 hover:text-accent-300 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap"
              >
                View Menu
                <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
              </Link>
              <a
                href={restaurantInfo.social.bolt}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-400 hover:to-accent-400 text-white rounded-full font-bold text-base sm:text-lg transition-all duration-300 shadow-2xl shadow-brand-500/30 hover:shadow-2xl hover:shadow-brand-500/50 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap"
              >
                Order via Bolt
                <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
            
            {/* Bottom Row - Directions */}
            <a
              href={restaurantInfo.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all duration-300 hover:scale-105"
            >
              <MapPin className="w-5 h-5" />
              Directions
            </a>
          </div>
        </div>

      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-gradient-modern">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-brand-500">
            Why Choose TAVO?
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Feature 1 */}
            <div className="group text-center p-4 sm:p-6 md:p-8 glass-effect rounded-3xl hover:border-accent-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/10">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-accent-500 to-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent-500/30">
                <UtensilsCrossed className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">Culinary Excellence</h3>
              <p className="text-sm sm:text-base text-white leading-relaxed">
                Experience world-class fine dining with carefully crafted dishes using the finest ingredients and expert techniques.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group text-center p-4 sm:p-6 md:p-8 glass-effect rounded-3xl hover:border-accent-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/10">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-accent-500 to-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent-500/30">
                <Users className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">Elegant Ambience</h3>
              <p className="text-sm sm:text-base text-white leading-relaxed">
                Immerse yourself in our sophisticated atmosphere, perfect for intimate dinners, business meetings, and special celebrations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group text-center p-4 sm:p-6 md:p-8 glass-effect rounded-3xl hover:border-accent-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/10 col-span-2 lg:col-span-1">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-accent-500 to-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent-500/30">
                <Award className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">Exceptional Service</h3>
              <p className="text-sm sm:text-base text-white leading-relaxed">
                Our dedicated team ensures every moment of your dining experience is memorable, with attention to every detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-accent-500 to-brand-500">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-block p-4 bg-black/20 backdrop-blur-sm rounded-2xl mb-8">
            <MapPin className="w-16 h-16 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Visit Us in <br />
            <span className="text-black">Rosslyn Square</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Located in the heart of Nairobi&apos;s premier luxury dining destination
          </p>
        </div>
      </section>
    </div>
  );
}
