"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import FaqAccordion from "@/components/FaqAccordion";
import { GraduationCap, Award, Building, CheckCircle, HelpCircle } from "lucide-react";

export default function TrainingPage() {
  const highlights = [
    {
      title: "HRD Corp Claimable",
      desc: "Eligible Malaysian employers can claim up to 100% of training costs through the government HRD levy scheme.",
      icon: Award,
    },
    {
      title: "Real Laundry Environment",
      desc: "Train inside an actual operating facility, handling state-of-the-art washing and pressing machines, not a simulated lab.",
      icon: Building,
    },
    {
      title: "Small Group Focus",
      desc: "Each training program is limited to a maximum of 5 students to ensure highly focused, hands-on, group-based learning.",
      icon: GraduationCap,
    },
  ];

  const faqs = [
    {
      question: "What is the language we use for the training course?",
      answer: "We conduct our classes in English or Malay depending on student preferences.",
    },
    {
      question: "Do I get a certificate at the end of my training program?",
      answer: "Yes. Every student who completes the training syllabus successfully will receive a certified Certificate of Completion.",
    },
    {
      question: "Who can attend the training program?",
      answer: "Our training is designed for individuals new to the laundry industry, including employees, managers, and prospective business owners.",
    },
    {
      question: "Where is the training held?",
      answer: "Training sessions are conducted at our central Headquarters facility in Taman Shamelin Perkasa, Cheras, which is equipped with professional laundry equipment.",
    },
    {
      question: "Is there any prerequisite knowledge required?",
      answer: "No prior experience is necessary. Our training is designed to accommodate all levels of knowledge, starting from absolute basics.",
    },
    {
      question: "How do I register for the training program?",
      answer: "You can WhatsApp us directly for assistance, booking availability dates, and invoice inquiries.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-soft-bg">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-white pt-36 pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="space-y-6">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Academy & Training</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark-blue leading-tight">
              Professional Laundry Training Program
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Unlock the skills needed to succeed in the retail and commercial laundry industry. We offer claimable training programs inside an operating laundry facility.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button href="https://wa.me/60192225745" variant="primary">
                Register via WhatsApp
              </Button>
            </div>
          </div>

          <div className="hidden lg:block relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gray-50 border border-gray-100">
            <img
              src="/img/welcome-3.png"
              alt="Laundry masterclass class"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>
        </div>
      </section>

      {/* Core highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Highlights</span>
            <h2 className="text-3xl font-extrabold text-dark-blue mt-2">
              Learn From Industry Experts
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Upskill yourself or your laundry staff with hands-on practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((h, idx) => {
              const Icon = h.icon;
              return (
                <div
                  key={idx}
                  className="bg-soft-bg p-8 rounded-3xl border border-gray-100 hover:border-primary transition-all duration-300 shadow-sm"
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-dark-blue mb-3">{h.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{h.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program pricing cards */}
      <section className="py-20 bg-soft-bg border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Programs</span>
            <h2 className="text-3xl font-extrabold text-dark-blue mt-2">
              Select Your Learning Pathway
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Choose from intensive 1-day masterclasses or comprehensive 5-day certificate programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-md flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">1-Day Masterclass</span>
                <h3 className="text-xl font-bold text-dark-blue">Garment Inspection & Tagging</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Focused learning path covering fiber types, stain inspection, garment check protocols, and tagging. Ideal for laundry attendants.
                </p>
                <div className="pt-2 text-2xl font-extrabold text-primary">RM 800 <span className="text-xs text-gray-400 font-semibold">/ pax</span></div>
                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <div className="flex gap-2 items-center text-xs text-gray-500">
                    <CheckCircle className="w-4 h-4 text-lime" />
                    <span>100% HRD Corp claimable</span>
                  </div>
                  <div className="flex gap-2 items-center text-xs text-gray-500">
                    <CheckCircle className="w-4 h-4 text-lime" />
                    <span>Includes training manual & material</span>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <Button href="https://wa.me/60192225745" variant="primary" className="w-full justify-center">
                  Book Masterclass
                </Button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-md flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <span className="text-xs font-bold text-lime bg-lime/10 px-3 py-1 rounded-full uppercase">5-Day Professional Program</span>
                <h3 className="text-xl font-bold text-dark-blue">Laundry & Dry Cleaning Operations</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Comprehensive training covering dry cleaning solvents, washing cycles, stain removal chemistry, steam ironing, folding, packing, and shop floor management.
                </p>
                <div className="pt-2 text-2xl font-extrabold text-lime">RM 3,680 <span className="text-xs text-gray-400 font-semibold">/ pax</span></div>
                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <div className="flex gap-2 items-center text-xs text-gray-500">
                    <CheckCircle className="w-4 h-4 text-lime" />
                    <span>100% HRD Corp claimable</span>
                  </div>
                  <div className="flex gap-2 items-center text-xs text-gray-500">
                    <CheckCircle className="w-4 h-4 text-lime" />
                    <span>Hands-on practice on heavy machines</span>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <Button href="https://wa.me/60192225745" variant="lime" className="w-full justify-center">
                  Book Professional Program
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <HelpCircle className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-dark-blue">
              Training Academy FAQ
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Common questions answered about registration, certificates, and venues.
            </p>
          </div>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
