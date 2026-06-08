"use client";

import { useState, useEffect, useMemo } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { OptimizedImage } from "@/components/optimized-image";
import { PageHero } from "@/components/page-hero";
import { interiorImages, preloadImages } from "@/lib/images";
import { galleryCollection, galleryCategories, type GalleryCategory } from "@/lib/pages-data";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? galleryCollection
        : galleryCollection.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  const selectedIndex = filtered.findIndex((img) => img.id === selectedId);
  const selected = selectedIndex >= 0 ? filtered[selectedIndex] : null;

  useEffect(() => {
    preloadImages(galleryCollection.map((img) => img.src));
  }, []);

  const navigate = (dir: -1 | 1) => {
    if (selectedIndex < 0) return;
    const next = (selectedIndex + dir + filtered.length) % filtered.length;
    setSelectedId(filtered[next].id);
  };

  return (
    <div className="min-h-screen bg-charcoal-950">
      <PageHero
        image={interiorImages.ambiance2}
        imageAlt="TAVO gallery — cuisine and ambiance"
        eyebrow="Visual Journey"
        title="Curated Gallery"
        subtitle="A collection of moments — plated delicacies, refined interiors, and the evenings that define TAVO at Rosslyn Square."
      />

      {/* Category Filter */}
      <section className="sticky top-20 z-40 bg-charcoal-950/95 backdrop-blur-xl border-b border-gold-500/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide justify-center">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-xs tracking-[0.2em] uppercase whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-accent-600 to-accent-500 text-white font-semibold shadow-lg shadow-accent-500/30"
                    : "border border-gold-500/25 text-champagne/70 hover:text-accent-300 hover:border-accent-500/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-center text-champagne/50 text-sm mb-12 tracking-wide">
            {filtered.length} curated {activeCategory === "all" ? "moments" : `${activeCategory} pieces`}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
            {filtered.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelectedId(image.id)}
                className={`relative overflow-hidden group text-left ${image.span}`}
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  variant="galleryThumb"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-gold-400 text-xs tracking-[0.15em] uppercase mb-1">{image.category}</p>
                  <p className="text-ivory font-display text-sm md:text-base">{image.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-charcoal-950/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedId(null)}
        >
          <button
            onClick={() => setSelectedId(null)}
            className="absolute top-6 right-6 text-champagne/60 hover:text-gold-400 transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-4 md:left-8 text-champagne/60 hover:text-gold-400 transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-4 md:right-8 text-champagne/60 hover:text-gold-400 transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] overflow-hidden border border-gold-500/20">
              <OptimizedImage
                src={selected.src}
                alt={selected.alt}
                fill
                className="object-contain bg-charcoal-900"
                variant="galleryLightbox"
                priority
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-gold-400 text-xs tracking-[0.2em] uppercase mb-2">{selected.category}</p>
              <h3 className="font-display text-2xl text-ivory mb-2">{selected.title}</h3>
              <p className="text-champagne/70 text-sm max-w-lg mx-auto">{selected.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
