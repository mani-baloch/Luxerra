import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12",
  };

  const titleSizes = {
    sm: "text-lg tracking-[0.2em]",
    md: "text-xl md:text-2xl tracking-[0.25em]",
    lg: "text-3xl tracking-[0.3em]",
  };

  const subSizes = {
    sm: "text-[8px] tracking-[0.3em]",
    md: "text-[9px] tracking-[0.35em]",
    lg: "text-[11px] tracking-[0.4em]",
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Luxury Diamond Monogram SVG */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#c9a24b] drop-shadow-[0_2px_8px_rgba(201,162,75,0.3)]"
        >
          {/* Outer Diamond */}
          <path
            d="M24 2L46 24L24 46L2 24L24 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner Geometric Monogram Lines */}
          <path
            d="M24 8L38 22L24 36L10 22L24 8Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeOpacity="0.6"
          />
          <path
            d="M24 13V35M13 24H35"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M19 19L29 29M29 19L19 29"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.75"
          />
          <circle cx="24" cy="24" r="2.5" fill="currentColor" />
        </svg>
      </div>

      {/* Brand Wordmark & Tagline */}
      <div className="flex flex-col">
        <span
          className={`font-display font-medium text-[#f5f0e8] leading-tight ${titleSizes[size]}`}
          style={{ letterSpacing: "0.22em" }}
        >
          LUXÈRRA
        </span>
        <span
          className={`font-sans font-semibold text-[#c9a24b] uppercase ${subSizes[size]}`}
          style={{ letterSpacing: "0.32em" }}
        >
          LIVE IN LUXURY
        </span>
      </div>
    </div>
  );
}
