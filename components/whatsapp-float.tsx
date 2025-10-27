"use client";

import { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";
import { restaurantInfo } from "@/lib/data";

export function WhatsAppFloat() {
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show popup after button appears
    if (isVisible) {
      const popupTimer = setTimeout(() => {
        setShowPopup(true);
      }, 2000);

      // Hide popup after 5 seconds
      const hideTimer = setTimeout(() => {
        setShowPopup(false);
      }, 7000);

      return () => {
        clearTimeout(popupTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [isVisible]);

  const handleWhatsAppClick = () => {
    const phoneNumber = restaurantInfo.whatsapp.replace(/[^0-9]/g, '');
    const message = "Hi! I'd like to know more about TAVO Restaurant.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popup Message */}
      {showPopup && (
        <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-3 animate-fade-in border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-700 text-sm font-medium">
                Need help? Chat with us on WhatsApp!
              </p>
            </div>
            <button
              onClick={handleClosePopup}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          {/* Arrow pointing to button */}
          <div className="absolute bottom-[-8px] right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 animate-bounce"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      </button>
    </div>
  );
}
