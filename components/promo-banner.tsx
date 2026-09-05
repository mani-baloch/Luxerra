"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface PromoBannerProps {
  onShopSale: () => void;
}

export function PromoBanner({ onShopSale }: PromoBannerProps) {
  return (
    <section id="promo" className="bg-[#ebe3d5] pb-20 md:pb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Full-width Rounded Dark Green Card */}
        <div className="relative overflow-hidden rounded-3xl bg-[#091b14] border border-[#c9a24b]/30 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
          {/* Ambient Lighting Accents */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#c9a24b]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#163828]/50 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            {/* Left Column: Offer Details */}
            <div className="lg:col-span-6 p-8 sm:p-12 md:p-16 lg:p-16 flex flex-col items-start justify-center space-y-6 text-left z-10">
              {/* Limited Time Offer Label */}
              <div className="inline-flex items-center gap-2">
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a24b]">
                  LIMITED TIME OFFER
                </span>
              </div>

              {/* Big Serif Heading */}
              <div className="space-y-1">
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[62px] text-[#f5f0e8] leading-[1.08] font-normal tracking-tight">
                  Up to{" "}
                  <span className="text-gold-gradient font-semibold">
                    40%
                  </span>{" "}
                  OFF
                </h2>
                <p className="font-display text-2xl sm:text-3xl md:text-4xl text-[#f5f0e8] font-light">
                  On Premium Collection
                </p>
              </div>

              {/* Small Divider Line with Diamond */}
              <div className="w-full max-w-sm pt-2 pb-1">
                <div className="flex items-center gap-3">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-[#c9a24b]/40 to-[#c9a24b]/10" />
                  <div className="flex items-center gap-1.5 text-[10px] tracking-[0.25em] font-semibold text-[#c9a24b] uppercase">
                    <span>◆</span>
                    <span>LIMITED STOCK AVAILABLE</span>
                  </div>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-[#c9a24b]/40 to-[#c9a24b]/10" />
                </div>
              </div>

              {/* Gold Button */}
              <button
                onClick={onShopSale}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md btn-gold-primary text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300"
              >
                <span>SHOP THE SALE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column: Armchair Lifestyle Image (Seamless, No Center Border Line) */}
            <div className="lg:col-span-6 relative h-[360px] sm:h-[460px] lg:h-[540px] w-full">
              <Image
                src="/images/promo-armchair.jpg"
                alt="Luxerra Green Velvet Armchair with Gold Fluted Side Table and Hanging Pendants"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Soft Gradient blend on the left for seamless card integration */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#091b14] via-[#091b14]/70 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
