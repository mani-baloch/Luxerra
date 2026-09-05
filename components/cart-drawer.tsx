"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) {
  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = (subtotal * discountPercent) / 100;
  const finalTotal = subtotal - discountAmount;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "LUXE40" || promoCode.trim().toUpperCase() === "SUMMER40") {
      setDiscountPercent(40);
      setPromoError("");
    } else if (promoCode.trim().toUpperCase() === "LUXERRA10") {
      setDiscountPercent(10);
      setPromoError("");
    } else {
      setPromoError("Invalid code. Try 'LUXE40' for 40% off.");
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsOrderComplete(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#c9a24b", "#dfb76c", "#142e23", "#ffffff"],
        });
      } catch {
        // Confetti fallback
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-[#0a1712] border-l border-[#c9a24b]/20 text-[#f5f0e8] h-full flex flex-col shadow-2xl z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#c9a24b]/15 bg-[#07100c]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#c9a24b]/15 border border-[#c9a24b]/30 flex items-center justify-center text-[#c9a24b]">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display text-lg tracking-wide text-[#f5f0e8]">
                Your Shopping Bag
              </h3>
              <p className="text-xs text-[#a3b3aa]">
                {items.length} {items.length === 1 ? "item" : "items"} selected
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#a3b3aa] hover:text-[#f5f0e8] hover:bg-[#13281e] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isOrderComplete ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#c9a24b]/20 border border-[#c9a24b] flex items-center justify-center text-[#c9a24b] mb-4 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-display text-2xl text-[#f5f0e8] mb-2">
              Thank You for Your Order
            </h4>
            <p className="text-sm text-[#b8c9c0] mb-6 leading-relaxed max-w-xs">
              Our white-glove concierge is preparing your handcrafted luxury pieces for complimentary delivery.
            </p>
            <button
              onClick={() => {
                setIsOrderComplete(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full btn-gold-primary text-xs font-semibold uppercase tracking-wider"
            >
              Continue Exploring
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <ShoppingBag className="w-12 h-12 text-[#465a50] mb-3 stroke-[1.2]" />
            <h4 className="font-display text-lg text-[#f5f0e8] mb-1">
              Your bag is currently empty
            </h4>
            <p className="text-xs text-[#8c9e94] mb-6 max-w-xs">
              Explore our curated collections of handcrafted luxury furniture and timeless designs.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full btn-gold-primary text-xs font-semibold uppercase tracking-wider"
            >
              Explore Collections
            </button>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-[#183124]">
              {items.map((item) => (
                <div key={item.id} className="pt-4 first:pt-0 flex gap-4">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#10241b] border border-[#c9a24b]/20 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[10px] tracking-widest text-[#c9a24b] uppercase font-semibold">
                            {item.category}
                          </span>
                          <h4 className="text-sm font-medium text-[#f5f0e8] line-clamp-1">
                            {item.name}
                          </h4>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[#647b6f] hover:text-[#e06c6c] transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-sm font-semibold text-[#f5f0e8]">
                          ${item.price.toLocaleString()}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs text-[#6e8579] line-through">
                            ${item.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-[#1f3d2f] rounded-lg bg-[#0e2118]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1.5 text-[#a3b3aa] hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1.5 text-[#a3b3aa] hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer / Summary */}
            <div className="p-6 border-t border-[#c9a24b]/15 bg-[#07100c] space-y-4">
              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (e.g. LUXE40)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-[#0f241a] border border-[#1e3c2c] rounded-lg px-3 py-1.5 text-xs text-[#f5f0e8] placeholder-[#576e62] focus:outline-none focus:border-[#c9a24b]"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg border border-[#c9a24b]/40 text-xs font-semibold text-[#c9a24b] hover:bg-[#c9a24b]/10 transition-colors"
                >
                  Apply
                </button>
              </form>
              {promoError && (
                <p className="text-[11px] text-[#e06c6c]">{promoError}</p>
              )}
              {discountPercent > 0 && (
                <p className="text-[11px] text-[#55c786]">
                  ✓ {discountPercent}% Luxury Discount Applied!
                </p>
              )}

              {/* Price Calculation */}
              <div className="space-y-1.5 text-xs text-[#a3b3aa]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#f5f0e8]">${subtotal.toLocaleString()}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-[#c9a24b]">
                    <span>Discount ({discountPercent}%)</span>
                    <span>-${discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>White Glove Delivery</span>
                  <span className="text-[#55c786] font-medium">COMPLIMENTARY</span>
                </div>
                <div className="border-t border-[#1a3829] pt-2 flex justify-between text-sm font-semibold text-[#f5f0e8]">
                  <span>Total</span>
                  <span className="text-base text-gold-gradient">
                    ${finalTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-3 rounded-full btn-gold-primary text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                {isCheckingOut ? (
                  <span className="animate-pulse">Securing Reservation...</span>
                ) : (
                  <>
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
