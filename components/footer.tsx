"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, Check, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  return (
    <footer id="footer" className="bg-[#06100b] text-[#f5f0e8] border-t border-[#c9a24b]/20">
      {/* VIP Newsletter Bar */}
      <div className="border-b border-[#132c21] bg-gradient-to-b from-[#091812] to-[#06100b] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#c9a24b]">
                THE LUXÈRRA PRIVATE CIRCLE
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-[#f5f0e8]">
              Receive Private Previews & Exclusive Curation
            </h3>
            <p className="text-xs sm:text-sm text-[#9db2a7]">
              Join our distinguished clientele to receive bespoke catalogs, interior styling insights, and invitation-only private sales.
            </p>
          </div>

          <div className="lg:col-span-6">
            {isSubscribed ? (
              <div className="p-4 rounded-xl bg-[#10271c] border border-[#c9a24b]/40 flex items-center gap-3 text-[#55c786]">
                <Check className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium text-[#f5f0e8]">
                  Welcome to the Luxerra Private Circle. Your digital lookbook is on its way.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-[#0c1f17] border border-[#1d402f] rounded-lg px-4 py-3 text-sm text-[#f5f0e8] placeholder-[#5d776a] focus:outline-none focus:border-[#c9a24b]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg btn-gold-primary text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 flex-shrink-0"
                >
                  <span>JOIN CIRCLE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" />
            <p className="text-xs sm:text-sm text-[#9db2a7] leading-relaxed max-w-sm pt-2">
              Luxerra crafts timeless luxury furniture for discerning homes worldwide. Each bespoke creation marries traditional European craftsmanship with modern architectural silhouettes.
            </p>
            <div className="pt-2 flex items-center gap-3 text-[#c9a24b]">
              {/* Instagram Icon */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-[#c9a24b]/30 flex items-center justify-center hover:bg-[#c9a24b] hover:text-[#06100b] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Pinterest Icon */}
              <a
                href="#"
                aria-label="Pinterest"
                className="w-8 h-8 rounded-full border border-[#c9a24b]/30 flex items-center justify-center hover:bg-[#c9a24b] hover:text-[#06100b] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.057.235-.188.285-.434.172-1.622-.754-2.636-3.12-2.636-5.021 0-4.088 2.97-7.842 8.566-7.842 4.499 0 8 3.206 8 7.494 0 4.47-2.818 8.067-6.729 8.067-1.314 0-2.549-.683-2.973-1.491l-.81 3.088c-.293 1.121-1.087 2.527-1.618 3.393 1.174.363 2.427.561 3.727.561 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>

              {/* Twitter / X Icon */}
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded-full border border-[#c9a24b]/30 flex items-center justify-center hover:bg-[#c9a24b] hover:text-[#06100b] transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Collections Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a24b]">
              COLLECTIONS
            </h4>
            <ul className="space-y-2 text-xs text-[#a2b5ab]">
              <li><a href="#collections" className="hover:text-[#ffffff] transition-colors">Curved Velvet Sofas</a></li>
              <li><a href="#collections" className="hover:text-[#ffffff] transition-colors">Master Bedroom Suites</a></li>
              <li><a href="#collections" className="hover:text-[#ffffff] transition-colors">Marble & Walnut Dining</a></li>
              <li><a href="#collections" className="hover:text-[#ffffff] transition-colors">Outdoor Patio & Terraces</a></li>
              <li><a href="#collections" className="hover:text-[#ffffff] transition-colors">Architectural Brass Lighting</a></li>
              <li><a href="#collections" className="hover:text-[#ffffff] transition-colors">Limited Edition Pieces</a></li>
            </ul>
          </div>

          {/* Client Concierge */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a24b]">
              CONCIERGE & CARE
            </h4>
            <ul className="space-y-2 text-xs text-[#a2b5ab]">
              <li><a href="#" className="hover:text-[#ffffff] transition-colors">Complimentary White-Glove Delivery</a></li>
              <li><a href="#" className="hover:text-[#ffffff] transition-colors">Bespoke Interior Consulting</a></li>
              <li><a href="#" className="hover:text-[#ffffff] transition-colors">5-Year Structural Guarantee</a></li>
              <li><a href="#" className="hover:text-[#ffffff] transition-colors">Material & Fabric Swatches</a></li>
              <li><a href="#" className="hover:text-[#ffffff] transition-colors">Flagship Showrooms</a></li>
              <li><a href="#" className="hover:text-[#ffffff] transition-colors">Trade & Architect Program</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a24b]">
              FLAGSHIP ATELIER
            </h4>
            <div className="space-y-2.5 text-xs text-[#a2b5ab]">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c9a24b] mt-0.5 flex-shrink-0" />
                <span>450 Madison Avenue, New York, NY</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c9a24b] flex-shrink-0" />
                <span>+1 (800) 589-3772</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c9a24b] flex-shrink-0" />
                <span>concierge@luxerra.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="mt-14 pt-8 border-t border-[#132c21] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6e8579]">
          <p>© {new Date().getFullYear()} LUXÈRRA INC. ALL RIGHTS RESERVED. "LIVE IN LUXURY".</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#c9a24b] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#c9a24b] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#c9a24b] transition-colors">Sustainability Charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
