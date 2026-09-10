"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { CheckCircle2, Building, ShieldCheck, Mail, Phone, Users, GraduationCap, Building2, Droplets, Wind, Shirt, Flame, Wallet } from "lucide-react";

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

  const corporatePackages = [
    {
      title: "Universities & Academies",
      icon: GraduationCap,
      items: [
        "Student Residential Halls Linen",
        "Academic Staff Convocation Attire",
        "Sports Facility & Lab Wear Bundles",
      ],
    },
    {
      title: "Corporate Sector",
      icon: Building2,
      items: [
        "Hotel & Boutique Hotel Linens",
        "Restaurant Tablecloths & Napkins",
        "Premium Golf Club Uniforms & Towels",
      ],
    },
  ];

  const whyChooseUs = [
    {
      title: "Commercial Laundry",
      icon: Droplets,
      desc: "Tailored contracts for Hotels, Homestays, Restaurants, and Golf Clubs. High-capacity processing ensures large linen pools are returned clean, crisp, and on schedule.",
    },
    {
      title: "Dry Cleaning",
      icon: Wind,
      desc: "Premium non-aqueous treatment for delicate uniforms, corporate suits, formal attire, and specialty fabrics sensitive to traditional water cycles.",
    },
    {
      title: "Wash & Fold",
      icon: Shirt,
      desc: "Efficient and systematic volume washing utilizing professional-grade, fiber-safe detergents for uniform bundles and everyday textiles.",
    },
    {
      title: "Ironing & Pressing",
      icon: Flame,
      desc: "State-of-the-art steam ironing machinery engineered to achieve immaculate finish lines for hospitality uniforms and crisp bed linens.",
    },
  ];

  const valueProps = [
    {
      title: "Hygienic Washing",
      icon: ShieldCheck,
      desc: "Sanitized thermal and chemical wash cycles eliminating bacteria and viruses completely.",
    },
    {
      title: "Affordable Pricing",
      icon: Wallet,
      desc: "Optimized cost-structures ensuring superior fabric care without straining institutional budgets.",
    },
    {
      title: "Experienced Staff",
      icon: Users,
      desc: "Over a decade of industry expertise handling diverse fabric compositions safely.",
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
              src="/img/wet.png"
              alt="Commercial laundry process"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-soft-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark-blue leading-tight">
              Why <span className="text-primary">choose us</span>
            </h2>
            <p className="text-gray-500 text-base mt-4 leading-relaxed">
              We provide specialized fabric and linen maintenance designed to fulfill stringent commercial and hospitality industry criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-dashed border-primary/40 hover:border-primary transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-dark-blue mb-3 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
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

      {/* Corporate Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Corporate Packages</span>
            <h2 className="text-3xl font-extrabold text-dark-blue mt-2">
              Custom SLAs Built Around Your Usage Cycles
            </h2>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Dobi Akasia offers custom Service Level Agreements (SLAs) tailored around your usage cycles. Our corporate client system incorporates scheduled pickups, prompt processing, structured billing accounts, and dedicated account supervision to secure flawless supply chain continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corporatePackages.map((pkg, idx) => {
              const Icon = pkg.icon;
              return (
                <div
                  key={idx}
                  className="bg-soft-bg p-8 rounded-2xl border border-gray-100 hover:border-primary transition-all duration-300 shadow-sm"
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-blue mb-4">{pkg.title}</h3>
                  <div className="w-full h-px bg-gray-200 mb-4" />
                  <ul className="space-y-3">
                    {pkg.items.map((item, i) => (
                      <li key={i} className="flex gap-3 items-start text-sm text-gray-600">
                        <CheckCircle2 className="w-4.5 h-4.5 text-lime flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className="space-y-10">
            <div>
              <span className="text-primary font-bold text-sm tracking-widest uppercase">Value Proposition</span>
              <h2 className="text-3xl font-extrabold text-dark-blue mt-2 leading-tight">
                Why Businesses Trust Dobi Akasia
              </h2>
            </div>

            <div className="space-y-8">
              {valueProps.map((vp, idx) => {
                const Icon = vp.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="w-11 h-11 bg-primary/10 text-primary flex items-center justify-center rounded-xl shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dark-blue mb-1">{vp.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{vp.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-dark-blue p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -right-16 size-56 rounded-full bg-primary/20 blur-3xl"
            />
            <span className="text-primary font-bold text-sm tracking-widest uppercase relative">Trusted Partner</span>
            <p className="text-white text-2xl font-extrabold leading-snug mt-3 relative">
              Over a decade of proven fabric care, built for institutional scale.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10 relative">
              <div>
                <div className="text-3xl font-extrabold text-white">10+</div>
                <div className="text-xs text-slate-300 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">100%</div>
                <div className="text-xs text-slate-300 mt-1">Sanitized Cycles</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">24h</div>
                <div className="text-xs text-slate-300 mt-1">Turnaround Ready</div>
              </div>
            </div>
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
