import React from "react";
import { Gem, ShieldCheck, Truck, Headphones } from "lucide-react";

export function FeaturesStrip() {
  const features = [
    {
      icon: Gem,
      title: "Premium Quality",
      description: "Finest materials for lasting durability.",
    },
    {
      icon: ShieldCheck,
      title: "5 Years Warranty",
      description: "Peace of mind with our extended warranty.",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Complimentary delivery on all orders.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "We are here to assist you anytime.",
    },
  ];

  return (
    <section
      id="features"
      className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -my-14 sm:-my-16 md:-my-18 lg:-my-20"
    >
      <div className="bg-[#081811] border border-[#c9a24b]/30 rounded-2xl md:rounded-3xl p-6 sm:p-7 lg:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-[#183627]">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-start sm:items-center gap-4 group transition-all duration-300 ${
                  index > 0 ? "pt-4 sm:pt-0 lg:pl-6" : ""
                }`}
              >
                {/* Clean Luminous Gold Icon */}
                <div className="text-[#c9a24b] group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(201,162,75,0.7)] transition-all duration-300 flex-shrink-0">
                  <IconComponent className="w-8 h-8 md:w-9 md:h-9 stroke-[1.25]" />
                </div>

                {/* Text Details */}
                <div>
                  <h4 className="font-sans text-sm sm:text-base font-semibold text-[#f5f0e8] tracking-wide group-hover:text-[#c9a24b] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#a2b5ab] mt-0.5 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
