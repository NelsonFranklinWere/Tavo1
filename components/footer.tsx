import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";
import { restaurantInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white border-t-4 border-accent-500 relative z-50">
      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-brand-500 mb-4">
              TAVO
            </h3>
            <p className="text-neutral-300 mb-4 max-w-md">
              {restaurantInfo.description}
            </p>
            <div className="flex gap-4">
              <a
                href={restaurantInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-800 hover:bg-accent-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href={restaurantInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-800 hover:bg-accent-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="/" className="text-neutral-300 hover:text-accent-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-300 hover:text-accent-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-neutral-300 hover:text-accent-400 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-neutral-300 hover:text-accent-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-neutral-300 hover:text-accent-400 transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-accent-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href={restaurantInfo.social.bolt} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-accent-400 transition-colors"
                >
                  Order Food
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent-500" />
                <span className="text-sm text-neutral-300">
                  {restaurantInfo.address.street}
                  <br />
                  {restaurantInfo.address.city}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-accent-500" />
                <a href={`tel:${restaurantInfo.phone}`} className="text-neutral-300 hover:text-accent-400 transition-colors">
                  {restaurantInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-accent-500" />
                <a href={`mailto:${restaurantInfo.email}`} className="text-neutral-300 hover:text-accent-400 transition-colors">
                  {restaurantInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent-500" />
                <div className="text-sm text-neutral-300">
                  <p>{restaurantInfo.hours.mon_thu}</p>
                  <p>{restaurantInfo.hours.fri_sun}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} TAVO Restaurant. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-neutral-400 hover:text-accent-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral-400 hover:text-accent-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
