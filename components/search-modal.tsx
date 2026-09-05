"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem?: (query: string) => void;
}

const PRESET_SUGGESTIONS = [
  "Emerald Velvet Sofa",
  "Fluted Brass Coffee Table",
  "Curved Lounge Armchair",
  "Marble Dining Table",
  "King Velvet Bed",
  "Minimalist Pendant Chandelier",
];

const SEARCH_DATABASE = [
  {
    id: "prod-1",
    name: "Aura Emerald Velvet Curved Sofa",
    category: "Living Room",
    price: "$4,850",
    image: "/images/hero-wide.jpg",
  },
  {
    id: "prod-2",
    name: "Solstice Marble Fluted Coffee Table",
    category: "Living Room",
    price: "$2,100",
    image: "/images/hero-wide.jpg",
  },
  {
    id: "prod-3",
    name: "Verdant Royal Tufted King Bed",
    category: "Bedroom",
    price: "$5,400",
    image: "/images/collection-bedroom.jpg",
  },
  {
    id: "prod-4",
    name: "Atelier Grand Round Dining Table",
    category: "Dining Room",
    price: "$6,200",
    image: "/images/collection-dining.jpg",
  },
  {
    id: "prod-5",
    name: "Paloma Teak & Slatted Outdoor Lounge",
    category: "Outdoor",
    price: "$2,850",
    image: "/images/collection-outdoor.jpg",
  },
  {
    id: "prod-6",
    name: "Élégance Velvet Accent Armchair",
    category: "Living Room",
    price: "$2,290",
    image: "/images/promo-armchair.jpg",
  },
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const results = query.trim()
    ? SEARCH_DATABASE.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    )
    : SEARCH_DATABASE.slice(0, 4);

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 animate-in fade-in duration-200">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-2xl bg-[#0b1b14] border border-[#c9a24b]/30 rounded-2xl shadow-2xl overflow-hidden z-10 text-[#f5f0e8]">
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-[#183627] bg-[#07130e]">
          <Search className="w-5 h-5 text-[#c9a24b] mr-3" />
          <input
            type="text"
            autoFocus
            placeholder="Search luxury pieces, collections, materials..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm md:text-base text-[#f5f0e8] placeholder-[#576e62] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-[#657d70] hover:text-[#f5f0e8] mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#657d70] hover:text-[#f5f0e8] hover:bg-[#132c21] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestions */}
        <div className="p-6">
          <div className="mb-4">
            <span className="text-[11px] uppercase tracking-widest text-[#c9a24b] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Popular Searches
            </span>
            <div className="flex flex-wrap gap-2 mt-2">
              {PRESET_SUGGESTIONS.map((sug) => (
                <button
                  key={sug}
                  onClick={() => setQuery(sug)}
                  className="text-xs px-3 py-1 rounded-full bg-[#10291e] hover:bg-[#193d2c] text-[#d6e0db] border border-[#1b4330] transition-colors"
                >
                  {sug}
                </button>
              ))}
            </div>
          </div>

          {/* Results List */}
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#889d92] font-semibold">
              {query ? `Results (${results.length})` : "Curated Recommendations"}
            </span>

            <div className="mt-3 space-y-2 max-h-72 overflow-y-auto pr-1">
              {results.length === 0 ? (
                <p className="text-sm text-[#73887c] py-6 text-center">
                  No furniture pieces match &quot;{query}&quot;. Try searching for &quot;velvet&quot;, &quot;sofa&quot;, or &quot;marble&quot;.
                </p>
              ) : (
                results.map((item) => (
                  <div
                    key={item.id}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#0f241a] hover:bg-[#163526] border border-transparent hover:border-[#c9a24b]/30 cursor-pointer transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-[#07130e] flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-[#f5f0e8] group-hover:text-[#c9a24b] transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-xs text-[#7e9488]">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-[#c9a24b]">
                        {item.price}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#7e9488] group-hover:text-[#c9a24b] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
