"use client";

import React from "react";

interface AnnouncementBarProps {
  onShopClick?: () => void;
}

export function AnnouncementBar({ onShopClick }: AnnouncementBarProps) {
  return (
    <aside
      aria-label="Announcement"
      className="relative z-50 bg-[#06100c] text-[#f5f0e8] border-b border-[#c9a24b]/15 px-4 py-2 text-xs font-medium"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap text-center">
        {/* Centered Star + Sale Announcement */}
        <div className="flex items-center gap-2">
          <span className="text-[#c9a24b] text-sm animate-pulse">✦</span>
          <p className="tracking-[0.14em] uppercase text-[10px] sm:text-[11px] md:text-xs text-[#e8dfd1] font-medium">
            <span className="text-[#c9a24b] font-semibold">SUMMER SALE:</span>{" "}
            UP TO 40% OFF ON PREMIUM COLLECTION
          </p>
        </div>

        {/* Centered Pill Button */}
        <button
          onClick={onShopClick}
          className="inline-flex items-center justify-center px-4 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#dfb76c] via-[#c9a24b] to-[#b89138] text-[#06100c] hover:brightness-110 hover:shadow-[0_0_15px_rgba(201,162,75,0.45)] transition-all duration-200 cursor-pointer"
        >
          SHOP NOW
        </button>
      </div>
    </aside>
  );
}
