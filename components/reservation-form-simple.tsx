"use client";

import { useState } from "react";
import { Mail, Phone, User, Calendar, Clock, Users } from "lucide-react";

interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
}

export function ReservationFormSimple() {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create mailto link with pre-filled reservation content
      const subject = encodeURIComponent(`Reservation Request - ${formData.date} at ${formData.time}`);
      const body = encodeURIComponent(`
RESERVATION REQUEST

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Reservation Details:
Date: ${formData.date}
Time: ${formData.time}
Number of Guests: ${formData.guests}

Special Requests:
${formData.message}

---
Sent from TAVO Restaurant Reservation Form
      `);
      
      const mailtoLink = `mailto:strivego4@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get tomorrow's date for minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="glass-effect p-8 md:p-12 rounded-2xl border border-accent-500/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent-500" />
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 bg-primary-800 border border-accent-500/20 rounded-lg focus:outline-none focus:border-accent-500 transition-colors text-white"
              placeholder="Your Name"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent-500" />
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 bg-primary-800 border border-accent-500/20 rounded-lg focus:outline-none focus:border-accent-500 transition-colors text-white"
              placeholder="youremail@gmail.com"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-white">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent-500" />
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 bg-primary-800 border border-accent-500/20 rounded-lg focus:outline-none focus:border-accent-500 transition-colors text-white"
              placeholder="Your Phone Number"
            />
          </div>
        </div>

        {/* Number of Guests */}
        <div>
          <label htmlFor="guests" className="block text-sm font-semibold mb-2 text-white">
            Number of Guests *
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent-500" />
            <select
              id="guests"
              name="guests"
              required
              value={formData.guests}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 bg-primary-800 border border-accent-500/20 rounded-lg focus:outline-none focus:border-accent-500 transition-colors text-white appearance-none"
            >
              <option value="">Select guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
              <option value="7">7 Guests</option>
              <option value="8">8 Guests</option>
              <option value="9+">9+ Guests</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-semibold mb-2 text-white">
            Preferred Date *
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent-500" />
            <input
              id="date"
              name="date"
              type="date"
              required
              min={minDate}
              value={formData.date}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 bg-primary-800 border border-accent-500/20 rounded-lg focus:outline-none focus:border-accent-500 transition-colors text-white"
            />
          </div>
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className="block text-sm font-semibold mb-2 text-white">
            Preferred Time *
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent-500" />
            <select
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 bg-primary-800 border border-accent-500/20 rounded-lg focus:outline-none focus:border-accent-500 transition-colors text-white appearance-none"
            >
              <option value="">Select time</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="12:30 PM">12:30 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="1:30 PM">1:30 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="2:30 PM">2:30 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="3:30 PM">3:30 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="4:30 PM">4:30 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="5:30 PM">5:30 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="6:30 PM">6:30 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="7:30 PM">7:30 PM</option>
              <option value="8:00 PM">8:00 PM</option>
              <option value="8:30 PM">8:30 PM</option>
              <option value="9:00 PM">9:00 PM</option>
              <option value="9:30 PM">9:30 PM</option>
              <option value="10:00 PM">10:00 PM</option>
            </select>
          </div>
        </div>
      </div>

      {/* Special Requests */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white">
          Special Requests or Notes
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-primary-800 border border-accent-500/20 rounded-lg focus:outline-none focus:border-accent-500 transition-colors text-white resize-none"
          placeholder="Any special dietary requirements, occasion details, or preferences..."
        />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-4 bg-gradient-to-r from-accent-500 to-brand-500 hover:from-accent-400 hover:to-brand-400 disabled:from-gray-500 disabled:to-gray-600 text-white rounded-full font-bold transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3 mx-auto"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Opening Email...
            </>
          ) : (
            <>
              <Calendar className="w-5 h-5" />
              Send Reservation Request
            </>
          )}
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-center">
          <p className="text-green-400 font-medium">
            ✅ Your email client should open with a pre-filled reservation request. Please send the email to confirm your booking.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-center">
          <p className="text-red-400 font-medium">
            ❌ There was an error. Please try again or call us directly at +254 700 000 000.
          </p>
        </div>
      )}
    </form>
  );
}
