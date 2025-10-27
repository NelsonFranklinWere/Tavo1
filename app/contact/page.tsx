import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation, Star } from "lucide-react";
import { restaurantInfo } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { ContactFormSimple } from "@/components/contact-form-simple";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Header */}
      <section className="py-16 bg-gradient-modern relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/interior/insideinteriortavo.png"
            alt="TAVO Restaurant Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-brand-500">
            Get in Touch
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Visit us at Rosslyn Square or reach out anytime for reservations and inquiries
          </p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-primary-900 p-4 sm:p-6 rounded-2xl border border-primary-800/50">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-accent-500 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Address</h3>
                <p className="text-neutral-300 leading-relaxed text-xs sm:text-sm">
                  {restaurantInfo.address.street}
                  <br />
                  {restaurantInfo.address.city}
                  <br />
                  {restaurantInfo.address.country}
                </p>
                <a
                  href={restaurantInfo.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-3 py-2 sm:px-4 sm:py-2 bg-accent-600 hover:bg-accent-500 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </div>

              <div className="bg-primary-900 p-4 sm:p-6 rounded-2xl border border-primary-800/50">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-accent-500 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Phone</h3>
                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="text-accent-400 hover:text-accent-300 transition-colors text-sm sm:text-lg"
                >
                  {restaurantInfo.phone}
                </a>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2">Call for reservations and inquiries</p>
              </div>

              <div className="bg-primary-900 p-4 sm:p-6 rounded-2xl border border-primary-800/50">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-accent-500 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Email</h3>
                <a
                  href={`mailto:${restaurantInfo.email}`}
                  className="text-accent-400 hover:text-accent-300 transition-colors text-xs sm:text-sm"
                >
                  {restaurantInfo.email}
                </a>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2">For special requests and events</p>
              </div>

              <div className="bg-primary-900 p-4 sm:p-6 rounded-2xl border border-primary-800/50">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-accent-500 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Opening Hours</h3>
                <p className="text-neutral-300 text-xs sm:text-sm">
                  {restaurantInfo.hours.mon_thu}
                  <br />
                  {restaurantInfo.hours.fri_sun}
                </p>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2">We recommend making reservations in advance</p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-primary-900 p-4 rounded-2xl border border-primary-800/50">
              <div className="aspect-square bg-neutral-800 rounded-lg overflow-hidden">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d36.8125!3d-1.2278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0b8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sRosslyn%20Square%20Luxury%20Mall%2C%20Redhill%20Road%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a
                  href={restaurantInfo.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-600 hover:bg-accent-500 text-white rounded-full font-medium transition-all duration-300 hover:scale-105"
                >
                  <Navigation className="w-4 h-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-brand-500">
                Send Us a Message
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Have a question or special request? We&apos;d love to hear from you. Send us a message and we&apos;ll get back to you as soon as possible.
              </p>
            </div>
            <ContactFormSimple />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-primary-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Quick Actions</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <Link
                href="/reservations"
                className="group p-4 sm:p-6 bg-primary-900 rounded-2xl text-center hover:shadow-2xl hover:shadow-accent-500/20 transition-all duration-300 hover:scale-105 border border-primary-800/50 hover:border-accent-500/50"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-600 to-accent-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2 text-white text-sm sm:text-base">Reserve Table</h3>
                <p className="text-xs sm:text-sm text-neutral-400">Book your dining experience</p>
              </Link>

              <a
                href={`https://wa.me/${restaurantInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 sm:p-6 bg-primary-900 rounded-2xl text-center hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-105 border border-primary-800/50 hover:border-green-500/50"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2 text-white text-sm sm:text-base">WhatsApp Us</h3>
                <p className="text-xs sm:text-sm text-neutral-400">Instant chat support</p>
              </a>

              <a
                href={`tel:${restaurantInfo.phone}`}
                className="group p-4 sm:p-6 bg-primary-900 rounded-2xl text-center hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 border border-primary-800/50 hover:border-blue-500/50 col-span-2 lg:col-span-1"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2 text-white text-sm sm:text-base">Call Us</h3>
                <p className="text-xs sm:text-sm text-neutral-400">Speak with our team</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-12 bg-gradient-to-r from-accent-500 to-brand-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Visit TAVO at Rosslyn Square, Nairobi
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Located in the heart of Nairobi&apos;s premier luxury dining destination, TAVO offers an unparalleled fine dining experience. 
              Our restaurant in Rosslyn Square combines elegant ambiance with world-class cuisine, making it the perfect destination 
              for special occasions, business meetings, and intimate dinners.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-left">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Why Choose TAVO?</h3>
                <ul className="space-y-1 sm:space-y-2 text-white/90 text-sm sm:text-base">
                  <li>• Premium fine dining experience</li>
                  <li>• Expertly crafted cuisine</li>
                  <li>• Elegant atmosphere</li>
                  <li>• Exceptional service</li>
                  <li>• Convenient Rosslyn Square location</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Perfect For</h3>
                <ul className="space-y-1 sm:space-y-2 text-white/90 text-sm sm:text-base">
                  <li>• Business dinners</li>
                  <li>• Anniversary celebrations</li>
                  <li>• Special occasions</li>
                  <li>• Intimate dates</li>
                  <li>• Corporate events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
