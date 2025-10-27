"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const galleryImages = [
  { id: 1, src: "/food/elegantlyfriedfood1.png", alt: "Elegantly Fried Food" },
  { id: 2, src: "/food/elegantlyfriedfood2.png", alt: "Elegantly Fried Food" },
  { id: 3, src: "/food/superservedlunch.png", alt: "Super Served Lunch" },
  { id: 4, src: "/interior/insideinteriortavo.png", alt: "TAVO Restaurant Interior" },
  { id: 5, src: "/interior/interior.png", alt: "Restaurant Interior" },
  { id: 6, src: "/interior/setupambiance1.png", alt: "Restaurant Ambiance Setup" },
  { id: 7, src: "/interior/setupambiance2.png", alt: "Restaurant Ambiance Setup" },
  { id: 8, src: "/interior/aboutuscarousel.png", alt: "About Us Carousel" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Header */}
      <section className="py-16 bg-gradient-modern">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-brand-500">
            Our Gallery
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Moments from Tavo—food, ambiance, and unforgettable experiences
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group hover:shadow-glow transition-all duration-300"
                onClick={() => openLightbox(image.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold">{image.alt}</p>
                  </div>
                </div>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-accent-500 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh]">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={galleryImages.find(img => img.id === selectedImage)?.src || ""}
                alt={galleryImages.find(img => img.id === selectedImage)?.alt || ""}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
