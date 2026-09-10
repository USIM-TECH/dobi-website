"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import FaqAccordion from "@/components/FaqAccordion";

export default function IroningPage() {
  const title = "Professional Ironing Service";
  const intro = "Crisp, wrinkle-free clothes for a sharp professional look. We handle shirt, trouser, and dress pressing with industrial steam irons that protect fabric fibers.";
  const startPrice = "Starts From RM5";
  
  const prices: { item: string; price: string }[] = [
  {
    "item": "Shirt & Pants Ironing",
    "price": "Starts From RM5"
  }
];
  const faqs: { question: string; answer: string }[] = [
  {
    "question": "Do you offer same-day ironing?",
    "answer": "Same-day pressing is available upon request subject to workload."
  },
  {
    "question": "Can I specify hanger or folded?",
    "answer": "Yes, you can choose whether you prefer clothes on hangers or neatly folded."
  }
];
  const steps: { title: string; desc: string }[] = [
  {
    "title": "Garment Sorting",
    "desc": "Clothes are sorted by heat tolerance (cotton, linen, wool, synthetics)."
  },
  {
    "title": "Steam Pressing",
    "desc": "Industrial steam table pressing to remove tough wrinkles without shine marks."
  },
  {
    "title": "Collar & Cuff Detail",
    "desc": "Manual hand iron touch-up for crisp collars, cuffs, and button plackets."
  },
  {
    "title": "Hanger Mounting",
    "desc": "Placed on sturdy ergonomic hangers to maintain freshly pressed shape."
  },
  {
    "title": "Protective Wrapping",
    "desc": "Covered in clear poly-bags to protect against dust during transport."
  }
];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-blue-50 to-white pt-36 pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="space-y-6">
            <span className="text-primary font-extrabold text-xs tracking-widest uppercase bg-primary/10 px-3.5 py-1.5 rounded-full inline-block">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold text-dark-blue leading-tight tracking-tight">
              {title}
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {intro}
            </p>
            <div className="flex flex-wrap gap-4 items-center pt-2">
              <span className="text-sm font-semibold text-gray-600 bg-gray-100/80 border border-gray-200/60 px-4 py-2 rounded-full">
                Price: <strong className="text-primary font-semibold">{startPrice}</strong>
              </span>
              <Button href="https://wa.me/601131404946" target="_blank" rel="noopener noreferrer" variant="lime">
                WhatsApp Us
              </Button>
            </div>
          </div>

          <div className="hidden lg:block relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-gray-50 border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&w=1000&q=80"
              alt={title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      {prices.length > 0 && (
        <section className="py-20 bg-soft-bg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-primary font-extrabold text-xs tracking-widest uppercase bg-primary/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Price List
              </span>
              <h2 className="text-3xl font-semibold text-dark-blue tracking-tight">
                {title} Price Guide
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Simple, transparent pricing. No hidden fees. Check our standard rates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {prices.map((p, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-primary hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <h3 className="font-extrabold text-dark-blue text-base mb-4">{p.item}</h3>
                  <div className="text-right pt-4 border-t border-gray-50">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Standard Rate</span>
                    <span className="text-xl font-semibold text-primary">{p.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Step by Step cleaning process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-primary font-extrabold text-xs tracking-widest uppercase bg-primary/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Our Process
            </span>
            <h2 className="text-3xl font-semibold text-dark-blue tracking-tight">
              How We Clean Your Items
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Our professional cleaning facility operates under strict hygienic standards and procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-soft-bg p-6 rounded-3xl border border-gray-100 flex flex-col justify-between space-y-4 relative group hover:border-primary hover:shadow-md transition-all duration-300">
                <div>
                  <div className="text-4xl font-semibold text-gray-200 group-hover:text-primary transition-colors mb-3">
                    0{index + 1}
                  </div>
                  <h3 className="font-extrabold text-dark-blue text-base leading-snug mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      {faqs.length > 0 && (
        <section className="py-20 bg-soft-bg border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-primary font-extrabold text-xs tracking-widest uppercase bg-primary/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
                FAQ
              </span>
              <h2 className="text-3xl font-semibold text-dark-blue tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Have questions about our {title} service? Check out our helpful answers.
              </p>
            </div>

            <FaqAccordion items={faqs} />
          </div>
        </section>
      )}

      {/* Dynamic CTA */}
      <section className="py-16 bg-primary text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Ready to Experience Freshly Cleaned Garments?
          </h2>
          <p className="text-blue-50 max-w-xl mx-auto text-sm leading-relaxed">
            Drop off your items at any outlet, or text us via WhatsApp to arrange a professional pickup.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="https://wa.me/601131404946" target="_blank" rel="noopener noreferrer" variant="white">
              WhatsApp Us Now
            </Button>
            <Button href="/en/service-centres" variant="outline-white">
              Find Service Centres
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
