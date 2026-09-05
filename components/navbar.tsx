"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  User,
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { Logo } from "./logo";

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export function Navbar({ onOpenSearch, onOpenCart, cartCount }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "SHOP", href: "#collections" },
    { name: "COLLECTIONS", href: "#collections" },
    { name: "ABOUT US", href: "#features" },
    { name: "INSPIRATION", href: "#promo" },
    { name: "CONTACT", href: "#footer" },
  ];

  return (
    <>
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#06120c]/95 backdrop-blur-md py-3 shadow-2xl border-b border-[#c9a24b]/20"
            : "bg-[#08140f]/90 backdrop-blur-sm py-4 md:py-5 border-b border-[#c9a24b]/15"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex-shrink-0 group">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`relative text-xs tracking-[0.16em] uppercase font-medium transition-all duration-200 py-1 ${
                    isActive
                      ? "text-[#ffffff] font-semibold"
                      : "text-[#c3d1cb] hover:text-[#c9a24b]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c9a24b] rounded-full shadow-[0_0_8px_rgba(201,162,75,0.8)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Button */}
          <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-5">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              className="p-2 rounded-full text-[#d0ded7] hover:text-[#c9a24b] hover:bg-[#122b1f] transition-all duration-200 cursor-pointer"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
            </button>

            {/* User / Account Icon */}
            <button
              aria-label="Account"
              onClick={onOpenCart}
              className="hidden sm:inline-flex p-2 rounded-full text-[#d0ded7] hover:text-[#c9a24b] hover:bg-[#122b1f] transition-all duration-200 cursor-pointer"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
            </button>

            {/* Shopping Bag with Badge */}
            <button
              onClick={onOpenCart}
              aria-label="Shopping Cart"
              className="relative p-2 rounded-full text-[#d0ded7] hover:text-[#c9a24b] hover:bg-[#122b1f] transition-all duration-200 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-[#e3bf73] to-[#c9a24b] text-[#07130e] text-[10px] font-bold flex items-center justify-center shadow-md">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Gold "SHOP NOW" Button */}
            <a
              href="#collections"
              className="hidden md:inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-md btn-gold-primary text-xs font-semibold tracking-wider uppercase transition-all duration-300"
            >
              SHOP NOW
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#d0ded7] hover:text-[#c9a24b] hover:bg-[#122b1f]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer (Sheet style) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden animate-in fade-in duration-200">
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          <div className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-[#0a1812] border-l border-[#c9a24b]/20 p-6 flex flex-col justify-between shadow-2xl z-10">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#183627]">
                <Logo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-[#8fa79c] hover:text-[#f5f0e8]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.name);
                      setMobileMenuOpen(false);
                    }}
                    className={`block text-sm tracking-[0.18em] uppercase font-medium py-2 px-3 rounded-lg transition-colors ${
                      activeLink === link.name
                        ? "bg-[#142f22] text-[#c9a24b] font-semibold border-l-2 border-[#c9a24b]"
                        : "text-[#c3d1cb] hover:text-[#f5f0e8] hover:bg-[#0f241a]"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#183627] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#10271c] hover:bg-[#183928] text-xs font-medium text-[#d0ded7] flex items-center justify-center gap-2 border border-[#1e4330]"
              >
                <Search className="w-4 h-4 text-[#c9a24b]" />
                <span>Search Luxury Catalog</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full py-3 rounded-full btn-gold-primary text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>View Bag ({cartCount})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
