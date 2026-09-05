"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Armchair,
  Bed,
  UtensilsCrossed,
  Trees,
  ArrowRight,
  Plus,
  Sparkles,
} from "lucide-react";

interface CollectionsProps {
  onQuickAdd?: (collectionName: string) => void;
}

export function Collections({ onQuickAdd }: CollectionsProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const collections = [
    {
      id: "living-room",
      title: "LIVING ROOM",
      subtitle: "Comfort meets style.",
      image: "/images/collection-living.jpg",
      icon: Armchair,
      itemCount: "42 Pieces",
    },
    {
      id: "bedroom",
      title: "BEDROOM",
      subtitle: "Rest in luxury.",
      image: "/images/collection-bedroom.jpg",
      icon: Bed,
      itemCount: "28 Pieces",
    },
    {
      id: "dining-room",
      title: "DINING ROOM",
      subtitle: "Gather in elegance.",
      image: "/images/collection-dining.jpg",
      icon: UtensilsCrossed,
      itemCount: "35 Pieces",
    },
    {
      id: "outdoor",
      title: "OUTDOOR",
      subtitle: "Beauty beyond walls.",
      image: "/images/collection-outdoor.jpg",
      icon: Trees,
      itemCount: "19 Pieces",
    },
  ];

  return (
    <section
      id="collections"
      className="bg-[#ebe3d5] text-[#1a2620] pt-24 sm:pt-28 md:pt-32 pb-20 md:pb-28 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-[#665538] mb-3">
            — SHOP BY COLLECTION —
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[44px] text-[#0d1f17] font-normal tracking-tight">
            Designed for Every Space
          </h2>
          <p className="text-sm sm:text-base text-[#526359] mt-3 font-normal">
            Explore our handpicked collections for your home.
          </p>
        </div>

        {/* 4-Column Grid of Collection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {collections.map((item, index) => {
            const IconComponent = item.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative h-[420px] sm:h-[460px] rounded-2xl overflow-hidden shadow-lg border border-[#0d1f17]/10 bg-[#0d1f17] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Background Image with Next/Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Dark Gradient Overlay for optimal readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300 group-hover:via-black/45" />

                {/* Top Badge (Piece Count) */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-wider text-[#f5f0e8] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.itemCount}
                </div>

                {/* Bottom Content Card Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end text-white">
                  <div className="flex items-center gap-3.5 mb-1.5">
                    {/* Category Icon */}
                    <div className="w-8 h-8 rounded-lg bg-[#c9a24b]/20 backdrop-blur-sm border border-[#c9a24b]/40 flex items-center justify-center text-[#c9a24b] group-hover:bg-[#c9a24b] group-hover:text-[#0d1f17] transition-all duration-300 flex-shrink-0">
                      <IconComponent className="w-4 h-4 stroke-[1.75]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-sans font-bold text-sm md:text-base tracking-[0.14em] uppercase text-[#f5f0e8] group-hover:text-[#e5c378] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Subtitle */}
                  <p className="text-xs text-[#c0d0c7] font-light pl-11">
                    {item.subtitle}
                  </p>

                  {/* Hover Reveal Action Bar */}
                  <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-xs text-[#c9a24b] font-medium flex items-center gap-1">
                      Explore Catalog <ArrowRight className="w-3 h-3" />
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickAdd?.(item.title);
                      }}
                      className="p-1.5 rounded-full bg-[#c9a24b] text-[#07130e] hover:scale-110 transition-transform shadow-md"
                      title="Quick Add to Bag"
                    >
                      <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Collections Button */}
        <div className="mt-12 md:mt-16 text-center">
          <a
            href="#promo"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md border-2 border-[#1c2e24] text-xs font-bold uppercase tracking-[0.15em] text-[#0d1f17] hover:bg-[#0d1f17] hover:text-[#f5f0e8] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span>VIEW ALL COLLECTIONS</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
