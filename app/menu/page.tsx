"use client";

import { useState } from "react";
import Image from "next/image";
import { menuItems } from "@/lib/data";
import { MenuCategory } from "@/lib/types";
import { UtensilsCrossed, Leaf, Flame, Star } from "lucide-react";
import { restaurantInfo } from "@/lib/data";

const categories: { id: MenuCategory; label: string }[] = [
  { id: "starters", label: "Starters" },
  { id: "mains", label: "Main Course" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("starters");

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  const formatPrice = (price: number) => {
    return `KES ${price.toLocaleString()}`;
  };

  const getSpiceLevelIcon = (level?: "mild" | "medium" | "hot") => {
    if (!level) return null;
    const intensity = level === "mild" ? 1 : level === "medium" ? 2 : 3;
    return (
      <div className="flex gap-1" title={level}>
        {Array.from({ length: intensity }).map((_, i) => (
          <Flame key={i} className="w-4 h-4 text-orange-500" />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-20 pb-20 bg-gradient-modern">
      {/* Header */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero/heroimagemenupage.png"
            alt="TAVO Restaurant Menu"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-brand-500">
              Our Menu
            </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed mb-8">
            Discover our carefully crafted selection of Indian fusion dishes
          </p>
          <a
            href={restaurantInfo.social.bolt}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-400 hover:to-accent-400 text-white rounded-full font-bold text-lg transition-all duration-300 shadow-2xl shadow-brand-500/30 hover:shadow-2xl hover:shadow-brand-500/50 hover:scale-105"
          >
            Order Now
            <UtensilsCrossed className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-20 z-40 bg-primary-900/80 backdrop-blur-lg border-b border-primary-800/50 shadow-lg">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-accent-500 to-brand-500 text-white shadow-lg shadow-primary-500/50 scale-105"
                    : "bg-neutral-800 text-white hover:bg-neutral-700 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-primary-900/50 backdrop-blur-sm rounded-3xl border border-primary-800/50 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-accent-500/50 hover:shadow-2xl hover:shadow-accent-500/10"
              >
                {/* Food Image */}
                <div className="relative h-56 overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="relative h-full bg-gradient-to-br from-accent-500/30 via-brand-500/30 to-brand-500/30 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="relative">
                            <UtensilsCrossed className="w-20 h-20 mx-auto mb-3 text-white/30" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-500/20 to-brand-500/20 blur-2xl" />
                            </div>
                          </div>
                          <p className="text-sm text-white font-medium mt-2">Photo coming soon</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Item Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl font-bold flex-1 text-white leading-tight">{item.name}</h3>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {item.isVegetarian && (
                        <span className="p-2 bg-green-500/20 rounded-lg border border-green-500/30" title="Vegetarian">
                          <Leaf className="w-5 h-5 text-green-400" />
                        </span>
                      )}
                      {item.isVegan && (
                        <span className="px-3 py-1 bg-blue-500/20 rounded-lg text-xs text-blue-400 font-semibold border border-blue-500/30">
                          VEGAN
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white text-sm leading-relaxed mb-4 line-clamp-2 min-h-[2.5rem]">
                    {item.description}
                  </p>

                  {/* Spice Level */}
                  {item.spiceLevel && (
                    <div className="mb-4 flex items-center gap-2">
                      {getSpiceLevelIcon(item.spiceLevel)}
                      <span className="text-xs text-neutral-500 capitalize">{item.spiceLevel}</span>
                    </div>
                  )}

                  {/* Price & Button */}
                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-primary-800/50">
                    <div>
                      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-400">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                    <button className="px-6 py-2.5 bg-gradient-to-r from-accent-500 to-brand-500 hover:from-accent-400 hover:to-brand-400 text-white rounded-full text-sm font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg shadow-accent-500/30">
                      Add to Order
                    </button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="inline-block p-1 bg-gradient-to-r from-accent-500 via-brand-500 to-brand-500 rounded-2xl">
              <div className="bg-primary-900 px-12 py-6 rounded-xl">
                <p className="text-2xl text-white mb-6">
                  Ready to taste the fusion experience?
                </p>
                <a
                  href="/reservations"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-accent-500 to-brand-500 hover:from-accent-400 hover:to-brand-400 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-accent-500/50 hover:scale-105"
                >
                  <UtensilsCrossed className="w-5 h-5" />
                  Reserve Your Table
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
