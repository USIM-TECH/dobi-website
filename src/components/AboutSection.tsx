"use client";

import React from "react";
import { Award, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Premium Quality Assurance",
      description: "Every garment passes a 5-point inspection before return.",
    },
    {
      icon: Zap,
      title: "Technology-Driven",
      description: "State-of-the-art European cleaning technology that protects fabrics.",
    },
    {
      icon: ShieldCheck,
      title: "Eco-Friendly Solvents",
      description: "Safe for your family and gentle on the environment.",
    },
    {
      icon: CheckCircle2,
      title: "Expert Care Team",
      description: "Staff with decades of fabric care experience.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Floating "Since 2008" Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
              
              {/* Main Store Image */}
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-gray-100">
                <img
                  src="/img/about-store-interior.png"
                  alt="Dobi-Akasia Premium Garment Care Outlet"
                  className="w-full h-[380px] sm:h-[460px] md:h-[500px] lg:h-[540px] object-cover"
                  onError={(e) => {
                    // Fallback image if local file fails to load
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
              </div>

              {/* Floating Badge Card at Bottom-Right */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-10 bg-white/95 backdrop-blur-md p-5 sm:p-6 md:p-7 rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100 max-w-[230px] sm:max-w-[270px]">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#0f1d38] tracking-tight mb-1">
                  Since 2008
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
                  Setting the standard for premium laundry in Malaysia.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Text & Features */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Category Tag */}
            <span className="text-brand-600 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3 block">
              ABOUT DOBI-AKASIA
            </span>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-brand-950 leading-[1.15] tracking-tight mb-6">
              Redefining Garment Care Through Innovation
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Dobi-Akasia is more than a laundry service—we are fabric care specialists. We combine the precision of modern tracking technology with the meticulous attention of traditional hand-finishing.
              </p>
              <p>
                Whether it&apos;s your daily corporate wear, delicate evening gowns, or heavy household linens, we treat every item as an investment worth preserving. Our mission is to give you back your time while keeping you looking impeccable.
              </p>
            </div>

            {/* 2x2 Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 pt-2">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-brand-50/20 hover:bg-white hover:border-brand-200 hover:shadow-lg hover:shadow-brand-950/5 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-white text-brand-600 flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100 mt-0.5">
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-brand-950 text-sm sm:text-base leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-normal mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>


          </div>

        </div>
      </div>
    </section>
  );
}
