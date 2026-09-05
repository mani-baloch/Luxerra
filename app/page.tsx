"use client";

import React, { useState } from "react";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FeaturesStrip } from "@/components/features-strip";
import { Collections } from "@/components/collections";
import { PromoBanner } from "@/components/promo-banner";
import { Footer } from "@/components/footer";
import { CartDrawer, CartItem } from "@/components/cart-drawer";
import { SearchModal } from "@/components/search-modal";
import { VideoModal } from "@/components/video-modal";

const INITIAL_CART: CartItem[] = [
  {
    id: "item-1",
    name: "Aura Emerald Velvet Curved Sofa",
    category: "Living Room",
    price: 4850,
    originalPrice: 6200,
    quantity: 1,
    image: "/images/hero-wide.jpg",
  },
];

export default function LuxerraHomePage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast("Item removed from your bag");
  };

  const handleQuickAdd = (collectionTitle: string) => {
    const newItem: CartItem = {
      id: `item-${Date.now()}`,
      name: `${collectionTitle} Signature Curated Piece`,
      category: collectionTitle,
      price: 3450,
      originalPrice: 4200,
      quantity: 1,
      image:
        collectionTitle.includes("BEDROOM")
          ? "/images/collection-bedroom.jpg"
          : collectionTitle.includes("DINING")
          ? "/images/collection-dining.jpg"
          : collectionTitle.includes("OUTDOOR")
          ? "/images/collection-outdoor.jpg"
          : "/images/collection-living.jpg",
    };

    setCartItems((prev) => [newItem, ...prev]);
    showToast(`Added ${newItem.name} to your bag`);
    setIsCartOpen(true);
  };

  const handleShopSale = () => {
    const promoItem: CartItem = {
      id: `item-promo-${Date.now()}`,
      name: "Élégance Emerald Velvet Accent Armchair",
      category: "Living Room (Sale Edition)",
      price: 1950,
      originalPrice: 3250,
      quantity: 1,
      image: "/images/promo-armchair.jpg",
    };

    setCartItems((prev) => [promoItem, ...prev]);
    showToast("40% OFF Special Sale Piece Added to Bag!");
    setIsCartOpen(true);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <main className="min-h-screen flex flex-col bg-[#08140f] text-[#f5f0e8] overflow-x-hidden selection:bg-[#c9a24b] selection:text-[#08140f]">
      {/* 1 & 2. Unified Fixed Header (Announcement Bar + Navbar) */}
      <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
        <AnnouncementBar onShopClick={() => setIsCartOpen(true)} />
        <Navbar
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenCart={() => setIsCartOpen(true)}
          cartCount={totalCartCount}
        />
      </header>

      {/* 3. Hero Section (With proper top padding for fixed header) */}
      <Hero onWatchVideo={() => setIsVideoOpen(true)} />

      {/* 4. Features Strip (Centered 50/50 Overlap) */}
      <FeaturesStrip />

      {/* 5. Collections Section (Cream / Beige Theme) */}
      <Collections onQuickAdd={handleQuickAdd} />

      {/* 6. Promo Banner (40% OFF Dark Emerald Card) */}
      <PromoBanner onShopSale={handleShopSale} />

      {/* 7. Footer */}
      <Footer />

      {/* Interactive Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[120] px-5 py-3 rounded-xl bg-[#0c2419] border border-[#c9a24b]/50 text-[#f5f0e8] text-xs font-semibold shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#c9a24b] animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}
    </main>
  );
}
