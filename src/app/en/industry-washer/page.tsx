"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import FaqAccordion from "@/components/FaqAccordion";

export default function IndustryWasherPage() {
  const title = "Industry Washer Service (50kg Capacity)";
  const intro = "Heavy-duty 50kg industry washers for large-volume laundry — perfect for bulk linens, uniforms, and household items that need thorough, efficient cleaning.";

  const faqs: { question: string; answer: string }[] = [
    {
      question: "What items suit the industry washer?",
      answer: "Bulk laundry loads such as bedding sets, curtains, uniforms, and large household loads.",
    },
    {
      question: "Can I combine this with drying or ironing?",
      answer: "Yes, we can wash, dry, and press your items end-to-end — just let us know your requirements.",
    },
    {
      question: "How long does a wash cycle take?",
      answer: "A standard 50kg wash cycle takes about 30 to 45 minutes depending on soil level and fabric type.",
    },
    {
      question: "Can different fabric types be washed together in one load?",
      answer: "We sort items by fabric type and color first, then group compatible items into the same cycle for safe, even cleaning.",
    },
  ];

  const steps: { title: string; desc: string }[] = [
    {
      title: "Load Sorting",
      desc: "Items are sorted by fabric type and color before washing.",
    },
    {
      title: "Bulk Loading",
      desc: "Up to 50kg loaded per cycle for efficient high-volume washing.",
    },
    {
      title: "Deep Cleaning Wash",
      desc: "Industrial-grade detergents and wash cycles remove dirt and odors thoroughly.",
    },
    {
      title: "Extraction & Rinse",
      desc: "High-speed extraction removes excess water for faster drying.",
    },
    {
      title: "Handoff to Drying/Ironing",
      desc: "Washed items move directly to drying or flatwork ironing as needed.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-blue-50 to-white pt-36 pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="space-y-6">
            <span className="text-primary font-extrabold text-base tracking-widest uppercase bg-primary/10 px-3.5 py-1.5 rounded-full inline-block">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold text-dark-blue leading-tight tracking-tight">
              {title}
            </h1>
            <p className="text-gray-600 text-lg md:text-lg leading-relaxed">
              {intro}
            </p>
            <div className="flex flex-wrap gap-4 items-center pt-2">
              <span className="text-lg font-semibold text-gray-600 bg-gray-100/80 border border-gray-200/60 px-4 py-2 rounded-full">
                Bulk & B2B Friendly
              </span>
              <Button href="https://wa.me/601131404946" target="_blank" rel="noopener noreferrer" variant="lime">
                Request a Quote
              </Button>
            </div>
          </div>

          <div className="hidden lg:block relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-gray-50 border border-gray-100">
            <img
              src="/assets/industry-washer.jpg"
              alt="Row of large-capacity industrial washing machines"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Step by Step process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-primary font-extrabold text-base tracking-widest uppercase bg-primary/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Our Process
            </span>
            <h2 className="text-3xl font-semibold text-dark-blue tracking-tight">
              How We Wash Your Bulk Loads
            </h2>
            <p className="text-gray-500 text-lg mt-2">
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
                  <h3 className="font-extrabold text-dark-blue text-lg leading-snug mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-soft-bg border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-primary font-extrabold text-base tracking-widest uppercase bg-primary/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              FAQ
            </span>
            <h2 className="text-3xl font-semibold text-dark-blue tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg mt-2">
              Have questions about our industry washer service? Check out our helpful answers.
            </p>
          </div>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="py-16 bg-primary text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Need Bulk Washing Capacity?
          </h2>
          <p className="text-blue-50 max-w-xl mx-auto text-lg leading-relaxed">
            Drop off your items at our outlet, or text us via WhatsApp to arrange a professional pickup and get a bulk quote.
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
