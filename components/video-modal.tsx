"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Play, Pause, Volume2, VolumeX, Sparkles } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-300">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-4xl bg-[#091610] border border-[#c9a24b]/40 rounded-3xl shadow-2xl overflow-hidden z-10 text-[#f5f0e8] flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#183627] bg-[#06100b]">
          <div className="flex items-center gap-2">
            <span className="text-[#c9a24b] text-sm">✦</span>
            <h3 className="font-display text-sm md:text-base tracking-wider text-[#f5f0e8] uppercase">
              The Art of Living — Craftsmanship Film
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#849a8f] hover:text-[#f5f0e8] hover:bg-[#142e22] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Presentation */}
        <div className="relative w-full aspect-video bg-[#000000] overflow-hidden group">
          <Image
            src="/images/hero-lifestyle.jpg"
            alt="Luxerra Craftsmanship Film"
            fill
            className="object-cover scale-105 filter brightness-90 animate-pulse duration-[8000ms]"
          />

          {/* Cinematic Ambient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#06100b] via-transparent to-black/40" />

          {/* Center Play Button Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-20 h-20 rounded-full bg-[#c9a24b]/90 text-[#07130e] hover:scale-110 transition-transform duration-300 flex items-center justify-center shadow-[0_0_30px_rgba(201,162,75,0.6)] cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 fill-current" />
              ) : (
                <Play className="w-8 h-8 fill-current ml-1" />
              )}
            </button>
            <p className="mt-4 font-display text-xl md:text-2xl text-[#f5f0e8] tracking-wide drop-shadow-md">
              Handcrafted in Florence & Milan
            </p>
            <p className="text-xs text-[#d3ded8] tracking-widest uppercase mt-1">
              Solid Italian Walnut • Brushed Brass • Royal Velvet
            </p>
          </div>

          {/* Bottom Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between text-xs text-[#c1d1c8]">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:text-[#c9a24b] transition-colors"
              >
                {isPlaying ? "PAUSE" : "PLAY"}
              </button>
              <span>01:42 / 03:30</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1 hover:text-[#c9a24b] transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
              <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider text-[#c9a24b] font-semibold border border-[#c9a24b]/40 px-2 py-0.5 rounded">
                4K HDR
              </span>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="p-4 sm:p-5 bg-[#07130e] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8ca095]">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <Sparkles className="w-3.5 h-3.5 text-[#c9a24b] flex-shrink-0" />
            Every piece is made-to-order with certified sustainable European timber and hand-finished brass.
          </p>
          <a
            href="#collections"
            onClick={onClose}
            className="text-[#c9a24b] font-semibold hover:underline flex-shrink-0"
          >
            Explore Collection →
          </a>
        </div>
      </div>
    </div>
  );
}
