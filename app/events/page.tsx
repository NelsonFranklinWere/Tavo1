import { Calendar, Users, MapPin, Phone, Mail, Clock, Star, Award } from "lucide-react";
import { restaurantInfo } from "@/lib/data";
import Image from "next/image";

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Header */}
      <section className="py-16 bg-gradient-modern relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/interior/setupambiance1.png"
            alt="TAVO Restaurant Events Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-brand-500">
            Events & Catering
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Transform your special moments into unforgettable experiences with TAVO&apos;s premium event services
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-brand-500">
            Our Services
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Private Dining */}
            <div className="group text-center p-4 sm:p-6 md:p-8 bg-primary-900 backdrop-blur-sm border border-accent-500/20 rounded-3xl hover:border-accent-500/50 transition-all duration-300 md:hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/10">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-accent-500 to-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 md:group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent-500/30">
                <Users className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">Private Dining</h3>
              <p className="text-sm sm:text-base text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed mb-4 sm:mb-6">
                Intimate dining experiences for 2-20 guests in our elegant private dining room
              </p>
              <ul className="text-xs sm:text-sm text-neutral-500 space-y-1 sm:space-y-2">
                <li>• Custom menu curation</li>
                <li>• Dedicated service staff</li>
                <li>• Wine pairing recommendations</li>
                <li>• Special occasion decorations</li>
              </ul>
            </div>

            {/* Corporate Events */}
            <div className="group text-center p-4 sm:p-6 md:p-8 bg-primary-900 backdrop-blur-sm border border-accent-500/20 rounded-3xl hover:border-accent-500/50 transition-all duration-300 md:hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/10">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-accent-500 to-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 md:group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent-500/30">
                <Award className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">Corporate Events</h3>
              <p className="text-sm sm:text-base text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed mb-4 sm:mb-6">
                Professional business meetings, client dinners, and corporate celebrations
              </p>
              <ul className="text-xs sm:text-sm text-neutral-500 space-y-1 sm:space-y-2">
                <li>• Executive lunch meetings</li>
                <li>• Client entertainment</li>
                <li>• Team building dinners</li>
                <li>• Presentation facilities</li>
              </ul>
            </div>

            {/* Special Celebrations */}
            <div className="group text-center p-4 sm:p-6 md:p-8 bg-primary-900 backdrop-blur-sm border border-accent-500/20 rounded-3xl hover:border-accent-500/50 transition-all duration-300 md:hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/10">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-accent-500 to-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 md:group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent-500/30">
                <Star className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">Special Celebrations</h3>
              <p className="text-sm sm:text-base text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed mb-4 sm:mb-6">
                Birthdays, anniversaries, engagements, and milestone celebrations
              </p>
              <ul className="text-xs sm:text-sm text-neutral-500 space-y-1 sm:space-y-2">
                <li>• Custom celebration menus</li>
                <li>• Special decorations</li>
                <li>• Photography coordination</li>
                <li>• Surprise arrangements</li>
              </ul>
            </div>

            {/* Off-Site Catering */}
            <div className="group text-center p-4 sm:p-6 md:p-8 bg-primary-900 backdrop-blur-sm border border-accent-500/20 rounded-3xl hover:border-accent-500/50 transition-all duration-300 md:hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/10">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-accent-500 to-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 md:group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent-500/30">
                <MapPin className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">Off-Site Catering</h3>
              <p className="text-sm sm:text-base text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed mb-4 sm:mb-6">
                Premium catering services for your home, office, or venue
              </p>
              <ul className="text-xs sm:text-sm text-neutral-500 space-y-1 sm:space-y-2">
                <li>• Full-service catering</li>
                <li>• Professional setup</li>
                <li>• Premium equipment</li>
                <li>• Cleanup services</li>
              </ul>
            </div>

            {/* Wedding Receptions */}
            <div className="group text-center p-4 sm:p-6 md:p-8 bg-primary-900 backdrop-blur-sm border border-accent-500/20 rounded-3xl hover:border-accent-500/50 transition-all duration-300 md:hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/10">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-accent-500 to-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 md:group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent-500/30">
                <Calendar className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">Wedding Receptions</h3>
              <p className="text-sm sm:text-base text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed mb-4 sm:mb-6">
                Elegant wedding receptions and rehearsal dinners
              </p>
              <ul className="text-xs sm:text-sm text-neutral-500 space-y-1 sm:space-y-2">
                <li>• Custom wedding menus</li>
                <li>• Tasting sessions</li>
                <li>• Coordination services</li>
                <li>• Special dietary options</li>
              </ul>
            </div>

            {/* Holiday Events */}
            <div className="group text-center p-4 sm:p-6 md:p-8 bg-primary-900 backdrop-blur-sm border border-accent-500/20 rounded-3xl hover:border-accent-500/50 transition-all duration-300 md:hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/10">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-accent-500 to-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 md:group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent-500/30">
                <Clock className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">Holiday Events</h3>
              <p className="text-sm sm:text-base text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed mb-4 sm:mb-6">
                Special holiday celebrations and seasonal events
              </p>
              <ul className="text-xs sm:text-sm text-neutral-500 space-y-1 sm:space-y-2">
                <li>• Holiday-themed menus</li>
                <li>• Seasonal decorations</li>
                <li>• Gift coordination</li>
                <li>• Extended hours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 bg-primary-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-brand-500">
            Our Process
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-accent-500 to-brand-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-base sm:text-lg md:text-xl font-bold mb-2 text-white">Consultation</h3>
              <p className="text-xs sm:text-sm md:text-base text-xs sm:text-sm md:text-base text-neutral-400">We discuss your vision, preferences, and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-accent-500 to-brand-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-white">Menu Planning</h3>
              <p className="text-xs sm:text-sm md:text-base text-neutral-400">Custom menu creation tailored to your event</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-accent-500 to-brand-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-white">Tasting</h3>
              <p className="text-xs sm:text-sm md:text-base text-neutral-400">Sample our proposed dishes and make adjustments</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-accent-500 to-brand-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-white">Execution</h3>
              <p className="text-xs sm:text-sm md:text-base text-neutral-400">Flawless event delivery with attention to every detail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gradient-to-r from-accent-500 to-brand-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Plan Your Event?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let us help you create an unforgettable experience
            </p>
            <div className="flex flex-col gap-4 items-center">
              <div className="flex flex-row gap-4 justify-center items-center">
                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary-900 text-accent-400 rounded-full font-bold hover:bg-primary-800 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
                <a
                  href={`https://wa.me/${restaurantInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white rounded-full font-bold hover:bg-green-500 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
              <a
                href={`mailto:${restaurantInfo.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary-700 text-white rounded-full font-bold hover:bg-primary-600 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
