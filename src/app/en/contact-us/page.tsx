"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { Mail, Phone, MapPin, CheckCircle, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-soft-bg">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-white pt-36 pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-primary font-bold text-sm tracking-widest uppercase">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-blue mt-2 mb-6">
            Get in Touch with Us Today
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Have questions about our laundry, dry cleaning, or bulk B2B services? Send us a message or find our head office details below.
          </p>
        </div>
      </section>

      {/* Main Content Info + Form */}
      <section className="py-16 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left info cards */}
        <div className="space-y-8">
          <h2 className="text-3xl font-extrabold text-dark-blue leading-tight">
            We’re Ready To Serve You
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Whether you want to locate an outlet, verify dry cleaning rates, or book a service, our customer support team is happy to help.
          </p>

          <div className="space-y-4 pt-4">
            {/* Address */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex gap-4 items-start hover:border-primary transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-dark-blue text-sm uppercase tracking-wider mb-1">Headquarters Address</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  B8-G, Ground Floor, Acacia Avenue, Jalan Jati 9, 71800 Nilai, Negeri Sembilan
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex gap-4 items-start hover:border-primary transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-dark-blue text-sm uppercase tracking-wider mb-1">Email Address</h4>
                <p className="text-gray-500 text-sm font-semibold">dobiakasia@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex gap-4 items-start hover:border-primary transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-dark-blue text-sm uppercase tracking-wider mb-1">Telephone Contact</h4>
                <p className="text-gray-500 text-sm font-semibold">011-3140 4946 / 016-440 4636</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right inquiry form */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-dark-blue">Send An Inquiry</h3>
            <p className="text-gray-500 text-xs mt-1">Please enter your request details below.</p>
          </div>

          {submitted ? (
            <div className="p-8 text-center bg-lime/10 border border-lime/20 rounded-2xl space-y-3">
              <CheckCircle className="w-12 h-12 text-lime mx-auto" />
              <h4 className="font-bold text-dark-blue text-lg">Message Sent!</h4>
              <p className="text-gray-600 text-sm">Thank you for contacting us. We will get back to you within 1 business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-dark-blue block">Your Name</label>
                <input type="text" required placeholder="e.g. Rachel Tan" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-dark-blue block">Email Address</label>
                  <input type="email" required placeholder="rachel@gmail.com" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-dark-blue block">Phone Number</label>
                  <input type="tel" required placeholder="e.g. 016-1234567" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-dark-blue block">Inquiry Type</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary">
                  <option>General Customer Support</option>
                  <option>Pickup & Delivery Order</option>
                  <option>Bulk Commercial Laundry (B2B)</option>
                  <option>Franchise Opportunity</option>
                  <option>Academy & Training Courses</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-dark-blue block">Message Content</label>
                <textarea rows={4} required placeholder="Write down details here..." className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary" />
              </div>

              <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-xl shadow-md transition-colors cursor-pointer text-sm">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* WhatsApp Floating Section */}
      <section className="py-16 bg-white border-t border-gray-100 text-center">
        <div className="max-w-xl mx-auto px-6 space-y-4">
          <MessageCircle className="w-12 h-12 text-lime mx-auto mb-2 animate-bounce" />
          <h3 className="text-2xl font-extrabold text-dark-blue">Prefer Instant Chat?</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Skip the forms! Talk directly to our customer support executives via WhatsApp for immediate bookings or quick quotations.
          </p>
          <div className="pt-2">
            <Button href="https://wa.me/601131404946" variant="lime" target="_blank" rel="noopener noreferrer">
              WhatsApp Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
