"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import FaqAccordion from "@/components/FaqAccordion";

export default function FlatWorkIronerPage() {
  const title = "Flat Work Ironer Service (3-Roller)";
  const intro = "Industrial 3-roller flatwork ironer for bedsheets, tablecloths, curtains, and other large flat linens — pressed smooth and crease-free in a single continuous pass. Ideal for bulk and B2B orders.";

  const faqs: { question: string; answer: string }[] = [
    {
      question: "What items can go through the flatwork ironer?",
      answer: "Bedsheets, tablecloths, curtains, pillowcases, and other large flat linens without buttons or zippers.",
    },
    {
      question: "Do you offer this for bulk or business orders?",
      answer: "Yes, this service is ideal for hotels, restaurants, and institutions with large volumes of flat linen. Contact us for a bulk quote.",
    },
    {
      question: "How is this different from your regular Ironing service?",
      answer: "The flatwork ironer presses large flat linens through heated rollers, while our regular Ironing service uses hand pressing for shirts, pants, and garments with buttons or zippers.",
    },
    {
      question: "What's the turnaround time for flatwork ironing?",
      answer: "Standard turnaround is 2 to 4 working days depending on order volume; bulk B2B orders can be scheduled to your SLA.",
    },
  ];

  const steps: { title: string; desc: string }[] = [
    {
      title: "Sorting & Inspection",
      desc: "Flat linens are sorted by fabric type and checked for stains before ironing.",
    },
    {
      title: "Feeding Into Roller",
      desc: "Items are fed evenly into the 3-roller ironer for consistent heat and pressure.",
    },
    {
      title: "High-Speed Pressing",
      desc: "Heated rollers press out wrinkles in a single continuous pass, ideal for large flat items.",
    },
    {
      title: "Folding & Stacking",
      desc: "Pressed linens are neatly folded and stacked ready for collection or delivery.",
    },
    {
      title: "Quality Check",
      desc: "Final inspection ensures a smooth, crease-free finish before packing.",
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
              src="/assets/flat-work-ironer.jpg"
              alt="Flatwork ironer pressing a bedsheet"
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
              How We Process Your Linens
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
              Have questions about our {title.replace(" (3-Roller)", "")}? Check out our helpful answers.
            </p>
          </div>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="py-16 bg-primary text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Need Bulk Flatwork Ironing?
          </h2>
          <p className="text-blue-50 max-w-xl mx-auto text-lg leading-relaxed">
            Drop off your linens at our outlet, or text us via WhatsApp to arrange a professional pickup and get a bulk quote.
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
