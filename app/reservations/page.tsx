"use client";

import Image from "next/image";
import { Calendar, Clock, Users, Phone, Mail, MessageSquare, CheckCircle, Star, MapPin } from "lucide-react";
import { restaurantInfo } from "@/lib/data";
import { ReservationFormSimple } from "@/components/reservation-form-simple";

export default function ReservationsPage() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Header */}
      <section className="py-16 bg-gradient-modern relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero/heroimageresevation page.png"
            alt="TAVO Restaurant Reservations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-brand-500">
            Reserve Your Table
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Experience Nairobi&apos;s most refined dining at TAVO
          </p>
        </div>
      </section>

      {/* Quick Booking Options */}
      <section className="py-8 bg-primary-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-row gap-4 justify-center items-center">
            <a
              href={`https://wa.me/${restaurantInfo.whatsapp.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-full font-bold transition-all duration-300 md:hover:scale-105"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp to Book
            </a>
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="flex items-center gap-3 px-8 py-4 bg-accent-600 hover:bg-accent-500 text-white rounded-full font-bold transition-all duration-300 md:hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Us to Book
            </a>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <ReservationFormSimple />
        </div>
      </section>

      {/* Restaurant Info */}
      <section className="py-12 bg-primary-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-primary-800/30 rounded-2xl border border-accent-500/20">
              <Clock className="w-12 h-12 text-accent-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Opening Hours</h3>
              <p className="text-white">{restaurantInfo.hours.mon_thu}</p>
              <p className="text-white">{restaurantInfo.hours.fri_sun}</p>
            </div>
            <div className="text-center p-6 bg-primary-800/30 rounded-2xl border border-accent-500/20">
              <MapPin className="w-12 h-12 text-accent-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Location</h3>
              <p className="text-white">{restaurantInfo.address.street}</p>
              <p className="text-white">{restaurantInfo.address.city}</p>
            </div>
            <div className="text-center p-6 bg-primary-800/30 rounded-2xl border border-accent-500/20 col-span-2 md:col-span-1">
              <Star className="w-12 h-12 text-accent-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Special Requests</h3>
              <p className="text-white">Dietary restrictions, celebrations, or special occasions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-gradient-to-r from-accent-500 to-brand-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Need Immediate Assistance?</h2>
          <p className="text-white/90 mb-8">Our team is ready to help you with your reservation</p>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="px-8 py-4 bg-primary-900 hover:bg-primary-800 text-accent-400 rounded-full font-bold transition-all duration-300 md:hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
              <a
                href={`https://wa.me/${restaurantInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-full font-bold transition-all duration-300 md:hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
            <a
              href={`mailto:${restaurantInfo.email}`}
              className="px-8 py-4 bg-primary-700 hover:bg-primary-600 text-white rounded-full font-bold transition-all duration-300 md:hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
