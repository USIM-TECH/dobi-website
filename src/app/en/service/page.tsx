"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { Sparkles, Recycle, HeartHandshake, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ExceptionalServicePage() {
  const standards = [
    {
      title: "Beyond the ordinary laundry standard",
      desc: "Our team undergoes extensive training to deliver exceptional service throughout every step of your laundry process, ensuring a top-notch experience from start to finish.",
      icon: Sparkles,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "Reclean for free, no questions asked",
      desc: "We are committed to every detail of the laundry process, ensuring nothing is overlooked. If you're unsatisfied with the cleanliness of your items, just let us know, and we'll gladly re-clean them at no additional charge.",
      icon: HeartHandshake,
      color: "text-lime",
      bg: "bg-lime/10",
    },
    {
      title: "Going the extra mile for you",
      desc: "From personalized garment care recommendations to complimentary services and special treatments, we strive to exceed customer expectations at every single turn.",
      icon: CheckCircle2,
      color: "text-orange",
      bg: "bg-orange/10",
    },
    {
      title: "Eco-friendly laundry solutions",
      desc: "Our commitment to environmental sustainability is reflected in the cleaning chemicals we use, which are certified by SIRIM as eco-friendly, ensuring that our laundry practices are environmentally responsible.",
      icon: Recycle,
      color: "text-primary-dark",
      bg: "bg-primary-dark/10",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-soft-bg">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-white pt-36 pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-4xl">
          <span className="text-primary font-bold text-sm tracking-widest uppercase">Core Values</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-blue mt-2 mb-6">
            Delivering The Difference In Service Excellence
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Experience the best service standards. Our team is here to ensure that your laundry experience exceeds expectations, combining expert training with organic green chemicals.
          </p>
        </div>
      </section>

      {/* Standards List */}
      <section className="py-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {standards.map((std, idx) => {
            const Icon = std.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-md flex gap-6 items-start hover:border-primary hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 ${std.bg} ${std.color} flex items-center justify-center rounded-2xl flex-shrink-0`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-dark-blue">{std.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{std.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Explore other values */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-primary font-bold text-sm tracking-widest uppercase font-semibold">Values</span>
            <h2 className="text-3xl font-extrabold text-dark-blue mt-2">
              Explore Our Other Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Value 1 */}
            <div className="bg-soft-bg p-8 rounded-3xl border border-gray-100 flex flex-col justify-between shadow-sm hover:border-primary transition-colors">
              <div>
                <h3 className="text-lg font-bold text-dark-blue mb-2">Unwavering Quality</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Discover how we ingrain quality into our laundry service. You can trust that your garments are in the best hands, receiving the highest level of cleaning care and quality check prior to delivery.
                </p>
              </div>
              <div className="pt-6">
                <Link href="/en/#core-values" className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                  Read Quality Details
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Value 2 */}
            <div className="bg-soft-bg p-8 rounded-3xl border border-gray-100 flex flex-col justify-between shadow-sm hover:border-primary transition-colors">
              <div>
                <h3 className="text-lg font-bold text-dark-blue mb-2">Ultimate Convenience</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Learn how we make life a little bit easier for our customers. Whether tracking your order, dropping off, or collecting your clothes, our commitment to convenience ensures a seamless workflow.
                </p>
              </div>
              <div className="pt-6">
                <Link href="/en/#core-values" className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                  Read Convenience Details
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-lime text-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Enjoy Better Service While Saving More
          </h2>
          <p className="text-lime-50 max-w-xl mx-auto text-sm leading-relaxed">
            Enjoy significant cost savings of up to 51% while enjoying the best service. Different laundry combo packages are available for your specific needs.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/en/promotions" variant="white">
              View Combos & Promotions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
