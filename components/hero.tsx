"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  onWatchVideo: () => void;
}

export function Hero({ onWatchVideo }: HeroProps) {
  return (
    <section className="relative min-h-[700px] sm:min-h-[760px] md:min-h-[820px] lg:min-h-[880px] xl:min-h-[920px] flex items-center overflow-hidden bg-[#06120c]">
      {/* 1. Full-Bleed Exact Lifestyle Scene Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-wide.jpg"
          alt="Luxerra Luxury Green Velvet Curved Sofa, Marble Coffee Table, and Arc Floor Lamp"
          fill
          priority
          className="object-cover object-center lg:object-[68%_center] xl:object-[62%_center] filter brightness-[0.98] contrast-[1.02]"
          sizes="100vw"
        />

        {/* Soft Vignette / Dark Atmospheric Gradient on the left for maximum typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06120c]/95 via-[#06120c]/80 via-40% md:via-48% lg:via-[#06120c]/50 lg:via-55% to-transparent pointer-events-none" />

        {/* Top ambient blend underneath fixed header */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#06120c]/90 via-[#06120c]/40 to-transparent pointer-events-none" />

        {/* Bottom subtle blend into features strip */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#06120c]/95 via-[#06120c]/60 to-transparent pointer-events-none" />
      </div>

      {/* 2. Foreground Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-24 sm:pb-28 md:pb-32 lg:pb-36">
        <div className="max-w-lg lg:max-w-xl xl:max-w-2xl flex flex-col items-start text-left space-y-6 md:space-y-7">
          {/* Small Label */}
          <div className="inline-flex items-center gap-2">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a24b] drop-shadow-sm">
              PREMIUM COLLECTION —
            </span>
          </div>

          {/* Large Serif Heading (3 Lines, Exact Styling) */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[82px] font-normal leading-[1.04] tracking-tight text-[#f5f0e8] drop-shadow-md">
            <span className="block text-white">Redefine</span>
            <span className="block text-gold-gradient font-medium">
              Luxury.
            </span>
            <span className="block text-white">Live Better.</span>
          </h1>

          {/* Subtext Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-[#c3d1cb] font-light leading-relaxed max-w-md drop-shadow-sm">
            Timeless designs. Unmatched comfort.
            <br />
            Crafted for a life of elegance.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2 w-full sm:w-auto">
            {/* Gold Filled Button */}
            <a
              href="#collections"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md btn-gold-primary text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 shadow-[0_4px_25px_rgba(201,162,75,0.4)]"
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Outline / Watch Video Button */}
            <button
              onClick={onWatchVideo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md border border-[#c9a24b]/60 bg-[#06120c]/50 backdrop-blur-md text-xs font-semibold uppercase tracking-[0.14em] text-[#f5f0e8] hover:text-[#c9a24b] hover:border-[#c9a24b] hover:bg-[#c9a24b]/15 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>WATCH VIDEO</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
