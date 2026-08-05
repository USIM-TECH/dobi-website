"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { CheckCircle2, Building, Ship, ShieldCheck, Mail, Phone, Users } from "lucide-react";

export default function CommercialPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sectors = [
    {
      title: "Hotels & Airbnb",
      desc: "Fresh bed sheets, towels, and pillowcases cleaned and pressed to premium hospitality standards.",
    },
    {
      title: "Spas & Salons",
      desc: "Deep oil stain and scent removal treatment for cotton towels and treatment bed covers.",
    },
    {
      title: "F&B & Catering",
      desc: "Stubborn grease and wine stain removal for napkins, tablecloths, and chef uniforms.",
    },
    {
      title: "Medical & Clinics",
      desc: "Hygienic washing and high-temperature disinfection of uniforms, scrubs, and linen sheets.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-soft-bg">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-white pt-36 pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="space-y-6">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">B2B Laundry</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark-blue leading-tight">
              Premium Commercial Laundry Solutions
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              We provide professional bulk laundry and linen cleaning services for salons, spas, hotels, Airbnb operators, and corporate clinics across Klang Valley.
            </p>
            <div className="pt-2">
              <Button href="#inquiry" variant="primary">
                Get a Quote
              </Button>
            </div>
          </div>

          <div className="hidden lg:block relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gray-50 border border-gray-100">
            <img
              src="/img/welcome-1.png"
              alt="Commercial laundry process"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Sectors We Serve</span>
            <h2 className="text-3xl font-extrabold text-dark-blue mt-2">
              Tailored Garment Care for Businesses
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              We understand that every business has distinct hygiene guidelines. Check our customized treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sec, idx) => (
              <div
                key={idx}
                className="bg-soft-bg p-8 rounded-2xl border border-gray-100 hover:border-primary transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl mb-6">
                    <Building className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-dark-blue mb-3">{sec.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{sec.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Features */}
      <section className="py-20 bg-soft-bg">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className="space-y-6">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Features</span>
            <h2 className="text-3xl font-extrabold text-dark-blue leading-tight">
              Why Partner with Dobi Akasia B2B?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We own and operate a large central processing facility equipped with heavy-duty washer extractors and flatwork ironers to handle large volumes daily.
            </p>

            <ul className="space-y-4 pt-2">
              {[
                "SIRIM certified eco-friendly biodegradable detergents",
                "Dedicated B2B account managers for coordination",
                "Flexible bulk pick-up and delivery schedules",
                "High-temperature disinfection protocols for hygiene",
                "Transparent invoicing and competitive wholesale pricing",
              ].map((f, i) => (
                <li key={i} className="flex gap-3 items-center text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-lime flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form Inquiry */}
          <div id="inquiry" className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-extrabold text-dark-blue">Request B2B Quotation</h3>
              <p className="text-gray-500 text-xs mt-1">Submit details and receive a customized contract proposal within 24 hours.</p>
            </div>

            {formSubmitted ? (
              <div className="p-8 text-center bg-lime/10 border border-lime/20 rounded-2xl space-y-3">
                <CheckCircle2 className="w-12 h-12 text-lime mx-auto" />
                <h4 className="font-bold text-dark-blue text-lg">Thank You!</h4>
                <p className="text-gray-600 text-sm">Your corporate inquiry has been logged. A B2B executive will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-dark-blue block">Company Name</label>
                    <input type="text" required placeholder="e.g. Acme Hotel" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-dark-blue block">Contact Person</label>
                    <input type="text" required placeholder="e.g. John Doe" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-dark-blue block">Work Email</label>
                    <input type="email" required placeholder="john@company.com" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-dark-blue block">Phone Number</label>
                    <input type="tel" required placeholder="e.g. 012-3456789" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-dark-blue block">Business Sector</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary">
                    <option>Hotel & Airbnb</option>
                    <option>Spa & Wellness Salon</option>
                    <option>Restaurant & F&B</option>
                    <option>Medical & Clinics</option>
                    <option>Corporate Uniforms</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-dark-blue block">Estimated Monthly Volume</label>
                  <textarea rows={3} required placeholder="e.g. Washing about 200kg towels per week" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary" />
                </div>

                <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl shadow-md transition-colors cursor-pointer text-sm">
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
