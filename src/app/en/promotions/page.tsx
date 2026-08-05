"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { Tag, ShieldCheck } from "lucide-react";

export default function PromotionsPage() {
  const promos = [
    {
      title: "New Customer Walk-in Promo",
      desc: "First time trying Dobi Akasia? Enjoy special introductory rates on laundry and dry cleaning when you walk in to any of our physical service centers.",
      terms: ["Walk-in customers only", "Klang Valley outlets only", "Cannot stack with other promos"],
      badge: "Save More",
      color: "border-primary",
      iconColor: "text-primary",
      bgLight: "bg-primary/5",
    },
    {
      title: "Bedding Cleaning Combos",
      desc: "Perfect timing to refresh your bedroom. Bring in your comforters, blankets, pillows, and mattress protectors. Standard price starts from RM30/pc.",
      terms: ["Comforter/Blanket/Pillow: RM30/pc", "Mattress Protector: RM20/kg", "Get combo rates when washing multiple items"],
      badge: "Bedding Combo",
      color: "border-lime",
      iconColor: "text-lime",
      bgLight: "bg-lime/5",
    },
    {
      title: "Baby Gear Cleaning Combos",
      desc: "Mix and match any 2 baby items for RM149, or any 3 items for RM199. Includes strollers, cots, carriers, and baby rockers.",
      terms: ["2 Items for RM149 (Save up to RM51)", "3 Items for RM199 (Save up to RM101)", "Single items priced at RM100"],
      badge: "Stroller Bundle",
      color: "border-orange",
      iconColor: "text-orange",
      bgLight: "bg-orange/5",
    },
    {
      title: "Luggage Cleaning Bundle",
      desc: "Keep your suitcases clean before and after holidays. Clean luggage bodies, handles, and wheels manually.",
      terms: ["2 Luggages for RM119", "3 Luggages for RM159", "Single luggage at RM60 (Save up to RM21)"],
      badge: "Travel Special",
      color: "border-primary-dark",
      iconColor: "text-primary-dark",
      bgLight: "bg-primary-dark/5",
    },
    {
      title: "Soft Toys Combo Special",
      desc: "Sanitize your kids' plushies to ensure a hygienic playtime. Standard individual toy cleaning is RM15.",
      terms: ["3 Toys Combo: RM39", "5 Toys Combo: RM59 (Save up to RM16)", "Applies to soft toys up to 50cm height"],
      badge: "Kids & Toys",
      color: "border-purple-500",
      iconColor: "text-purple-500",
      bgLight: "bg-purple-500/5",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-soft-bg">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-white pt-36 pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-primary font-bold text-sm tracking-widest uppercase">Promotions</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-blue mt-2 mb-6">
            Enjoy Exceptional Services at Combo Prices
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Discover our bundle packages and seasonal savings that help you reduce laundry costs by up to 51% while maintaining premium quality.
          </p>
        </div>
      </section>

      {/* Promo list */}
      <section className="py-16 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promos.map((promo, idx) => (
            <div
              key={idx}
              className={`bg-white border-2 ${promo.color} rounded-3xl p-8 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
            >
              {/* Decorative background shape */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${promo.bgLight} rounded-bl-full -z-10`} />

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full ${promo.bgLight} ${promo.iconColor}`}>
                    {promo.badge}
                  </span>
                  <Tag className={`w-5 h-5 ${promo.iconColor}`} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-dark-blue">{promo.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{promo.desc}</p>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="font-bold text-dark-blue text-xs uppercase tracking-wider">Promotion Terms:</h4>
                  <ul className="space-y-1.5">
                    {promo.terms.map((t, tIdx) => (
                      <li key={tIdx} className="flex gap-2 items-start text-xs text-gray-500">
                        <span className={`mt-0.5 font-bold ${promo.iconColor}`}>•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 flex gap-4">
                <Button href="https://wa.me/60192225745" variant="primary" className="flex-grow justify-center">
                  Claim Promotion
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust elements */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-4xl">
          <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-dark-blue mb-2">Our Quality Commitment</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Even at discounted combo rates, every item is processed under our standard operational procedures, ensuring deep fabric cleaning, careful hand finishing, and strict quality checks.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
