"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import FaqAccordion from "@/components/FaqAccordion";
import { Download, Award, ShieldCheck, Laptop, HelpCircle, Check } from "lucide-react";

export default function FranchisePage() {
  const [submitted, setSubmitted] = useState(false);

  const benefits = [
    {
      title: "Tech-Driven Ecosystem",
      desc: "Integrated POS system, central management, and mobile application.",
      icon: Laptop,
    },
    {
      title: "HQ Processing Support",
      desc: "We process bulk operations at the headquarters facility, lowering your shop floor requirements.",
      icon: ShieldCheck,
    },
    {
      title: "Established Since 1993",
      desc: "Leverage over 30 years of industry goodwill, standard operating procedures, and marketing power.",
      icon: Award,
    },
  ];

  const faqs = [
    {
      question: "What qualifications do I need to become a laundry franchisee?",
      answer: "We look for individuals who are motivated, have good business acumen, strong customer service skills, and are willing to follow our proven system and standards.",
    },
    {
      question: "How do I apply to become a franchisee?",
      answer: "To apply, simply submit the franchise inquiry form on this page or contact the designated business department listed in our brochure. They will guide you through current opportunities and licenses.",
    },
    {
      question: "What is the typical setup timeline for a franchise outlet?",
      answer: "Typically, starting a new franchise outlet takes between 2 to 3 months, which includes site inspection, renovation, equipment setup, POS configuration, and staff training.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-soft-bg">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-white pt-36 pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="space-y-6">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Franchise Program</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark-blue leading-tight">
              Tech-Driven Laundry Franchise in Malaysia
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Join the thriving laundry industry with our all-in-one franchise model. Don’t miss the opportunity to partner with Dobi Akasia, a trusted and technology-focused brand.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button href="#form" variant="primary">
                Apply Now
              </Button>
              <a
                href="/brochure.pdf"
                download
                className="inline-flex items-center gap-2 border border-gray-250 hover:border-primary text-dark-blue hover:text-primary font-bold text-sm px-6 py-3 rounded-full bg-white transition-all shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download Brochure
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gray-50 border border-gray-100">
            <img
              src="/img/welcome-2.png"
              alt="Franchise store model"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Franchise Benefits</span>
            <h2 className="text-3xl font-extrabold text-dark-blue mt-2">
              Why Invest In A Dobi Akasia Franchise?
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              We provide a complete turnkey business blueprint with extensive support mechanisms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="bg-soft-bg p-8 rounded-3xl border border-gray-100 hover:border-primary transition-all duration-300 shadow-sm"
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-dark-blue mb-3">{b.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Inquiry */}
      <section id="form" className="py-20 bg-soft-bg border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 space-y-8">
            <div className="text-center max-w-lg mx-auto">
              <h2 className="text-3xl font-extrabold text-dark-blue">Franchise Inquiry Form</h2>
              <p className="text-gray-500 text-sm mt-2">
                Begin your journey as a Dobi Akasia franchisee. Please fill out details and our business development representative will touch base.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-lime/10 border border-lime/20 rounded-2xl space-y-4">
                <Check className="w-12 h-12 text-lime mx-auto" />
                <h3 className="font-bold text-dark-blue text-xl">Application Received!</h3>
                <p className="text-gray-600 text-sm">
                  Thank you for applying. A franchise manager will review your profile and reach out via email or phone within 48 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-dark-blue block">Full Name</label>
                    <input type="text" required placeholder="e.g. Michael Tan" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-dark-blue block">Contact Phone Number</label>
                    <input type="tel" required placeholder="e.g. 017-1234567" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-dark-blue block">Email Address</label>
                    <input type="email" required placeholder="michael@gmail.com" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-dark-blue block">Proposed Outlet Location</label>
                    <input type="text" required placeholder="e.g. Puchong, Selangor" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-dark-blue block">Available Investment Capital</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary">
                    <option>RM 50,000 - RM 100,000</option>
                    <option>RM 100,000 - RM 150,000</option>
                    <option>RM 150,000 - RM 250,000</option>
                    <option>Above RM 250,000</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-dark-blue block">Business Background & Message</label>
                  <textarea rows={4} placeholder="Tell us briefly about your business experience..." className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary" />
                </div>

                <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-xl shadow-md transition-colors cursor-pointer text-sm">
                  Submit Franchise Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <HelpCircle className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-dark-blue">
              Franchise FAQ
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Common inquiries from our prospective business partners.
            </p>
          </div>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
