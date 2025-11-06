"use client";

import Image from "next/image";
import { Quote, MapPin, Award, Heart, Star, Users, UtensilsCrossed } from "lucide-react";
import { restaurantInfo } from "@/lib/data";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const testimonials = [
    {
      id: 1,
      name: "Executive Chef, TAVO",
      quote: "At TAVO, we don't just create meals—we craft experiences that linger in memory long after the last bite.",
      role: "Executive Chef, TAVO"
    },
    {
      id: 2,
      name: "SK Macharia",
      quote: "The culinary experience at TAVO is simply extraordinary. Every dish tells a story of passion and excellence.",
      role: "Valued Customer"
    },
    {
      id: 3,
      name: "Robert Johns",
      quote: "TAVO has redefined fine dining in Nairobi. The ambiance and service are unmatched in the city.",
      role: "Regular Customer"
    },
    {
      id: 4,
      name: "Shantel Waigera",
      quote: "From the moment you step in, TAVO transports you to a world of luxury and exceptional hospitality.",
      role: "Frequent Guest"
    },
    {
      id: 5,
      name: "John Kamau",
      quote: "The attention to detail and exceptional service at TAVO makes every visit a memorable experience.",
      role: "Valued Customer"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Header */}
      <section className="py-16 bg-gradient-modern relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/interior/insideinteriortavo.png"
            alt="TAVO Restaurant About Us Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-brand-500">
            Crafted with Passion,<br />
            Served with Style
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            {restaurantInfo.description}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-20 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-800 p-8 sm:p-12 rounded-3xl border border-primary-700/50 shadow-2xl">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg sm:text-xl text-white leading-relaxed mb-6">
                  TAVO was born from a vision to create Nairobi&apos;s most refined dining experience. Inspired by the 
                  modern Nairobi lifestyle and global culinary excellence, we&apos;ve crafted a space where every detail 
                  speaks to sophistication and taste.
                </p>
                <p className="text-lg sm:text-xl text-white leading-relaxed mb-6">
                  Our culinary philosophy centers on premium ingredients, expert techniques, and an unwavering 
                  commitment to excellence. Every dish is a masterpiece, every service interaction is memorable, 
                  and every visit leaves a lasting impression.
                </p>
                <p className="text-lg sm:text-xl text-white leading-relaxed">
                  At TAVO, we believe that fine dining is not just about the food it&apos;s about the entire experience. 
                  From the moment you enter our elegant space, you&apos;re transported to a world of luxury, comfort, 
                  and exceptional hospitality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-12 bg-primary-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center p-8 sm:p-12 bg-primary-900 rounded-2xl border border-primary-800/50 relative overflow-hidden">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-accent-500" />
              
              {/* Testimonial Content */}
              <div className="min-h-[200px] flex items-center justify-center">
                <div key={testimonials[currentTestimonial].id} className="animate-fade-in">
                  <blockquote className="text-xl sm:text-2xl md:text-3xl font-display italic text-white mb-4 sm:mb-6">
                    &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                  </blockquote>
                  <p className="text-base sm:text-lg text-accent-400">
                    — {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-sm sm:text-base text-neutral-400 mt-2">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-accent-500 w-8"
                        : "bg-neutral-600 hover:bg-neutral-500"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-brand-500">
            Our Values
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center p-4 sm:p-6 md:p-8 bg-primary-900 rounded-2xl border border-primary-800/50 md:hover:border-accent-500/50 transition-colors duration-200">
              <UtensilsCrossed className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4 text-accent-500" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">Taste</h3>
              <p className="text-xs sm:text-sm text-neutral-300">
                Every dish is a celebration of flavor, crafted with the finest ingredients and expert techniques
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 md:p-8 bg-primary-900 rounded-2xl border border-primary-800/50 md:hover:border-accent-500/50 transition-colors duration-200">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4 text-accent-500" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">Ambience</h3>
              <p className="text-xs sm:text-sm text-neutral-300">
                Our elegant space creates the perfect atmosphere for intimate dinners and special celebrations
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 md:p-8 bg-primary-900 rounded-2xl border border-primary-800/50 md:hover:border-accent-500/50 transition-colors duration-200 col-span-2 lg:col-span-1 transform-gpu">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4 text-accent-500" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">Quality</h3>
              <p className="text-xs sm:text-sm text-neutral-300">
                Uncompromising standards in every aspect of our service, from ingredients to presentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 bg-gradient-to-r from-accent-500 to-brand-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-4xl font-bold mb-4 text-white">
              Visit Us at Rosslyn Square
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Rosslyn Square Luxury Mall, Redhill Road, Nairobi, Kenya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-primary-900 text-accent-400 rounded-full font-bold hover:bg-primary-800 transition-all duration-300"
              >
                Get Directions
              </a>
              <a
                href={`https://wa.me/${restaurantInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                className="inline-block px-8 py-4 bg-green-600 text-white rounded-full font-bold hover:bg-green-500 transition-all duration-300"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
