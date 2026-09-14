"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { Mail, Phone, MapPin, CheckCircle, MessageCircle, Star } from "lucide-react";

const GOOGLE_MAPS_URL = "https://www.google.com/maps?cid=14488143292147049191";

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
          <span className="text-primary font-bold text-base tracking-widest uppercase">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-blue mt-2 mb-6">
            Get in Touch with Us Today
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Have questions about our laundry, dry cleaning, or bulk B2B services? Send us a message or find our head office details below.
          </p>
        </div>
      </section>

      {/* Main Content Info + Form */}
      <section className="py-16 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
        {/* Left info cards */}
        <div className="flex flex-col space-y-8">
          <h2 className="text-3xl font-extrabold text-dark-blue leading-tight">
            We’re Ready To Serve You
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Whether you want to locate an outlet, verify dry cleaning rates, or book a service, our customer support team is happy to help.
          </p>

          {/* Map with contact info overlay */}
          <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex-1 flex flex-col min-h-[420px]">
            <iframe
              title="Dobi Akasia Location"
              src={`${GOOGLE_MAPS_URL}&output=embed`}
              className="w-full flex-1 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute top-5 left-5 w-[calc(100%-2.5rem)] sm:w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-5 space-y-4">
              {/* Address */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-dark-blue text-xs uppercase tracking-wider mb-0.5">Headquarters Address</h4>
                  <p className="text-gray-500 text-sm leading-snug">
                    B8-G, Ground Floor, Acacia Avenue, Jalan Jati 9, 71800 Nilai, Negeri Sembilan
                  </p>
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Email */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-dark-blue text-xs uppercase tracking-wider mb-0.5">Email Address</h4>
                  <p className="text-gray-500 text-sm font-semibold">dobiakasia@gmail.com</p>
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Phone */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-dark-blue text-xs uppercase tracking-wider mb-0.5">Telephone Contact</h4>
                  <p className="text-gray-500 text-sm font-semibold">011-3140 4946 / 016-440 4636</p>
                </div>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between gap-4 bg-white border-t border-gray-200">
              <p className="text-gray-500 text-sm">Find us on Google Maps</p>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold text-sm hover:text-primary-dark transition-colors whitespace-nowrap"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>

        {/* Right inquiry form */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 space-y-6 h-fit">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-dark-blue">Send An Inquiry</h3>
            <p className="text-gray-500 text-sm mt-1">Please enter your request details below.</p>
          </div>

          {submitted ? (
            <div className="p-8 text-center bg-lime/10 border border-lime/20 rounded-2xl space-y-3">
              <CheckCircle className="w-12 h-12 text-lime mx-auto" />
              <h4 className="font-bold text-dark-blue text-lg">Message Sent!</h4>
              <p className="text-gray-600 text-base">Thank you for contacting us. We will get back to you within 1 business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-bold text-dark-blue block">Your Name</label>
                <input type="text" required placeholder="e.g. Rachel Tan" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-base focus:outline-none focus:border-primary" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-bold text-dark-blue block">Email Address</label>
                  <input type="email" required placeholder="rachel@gmail.com" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-base focus:outline-none focus:border-primary" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-bold text-dark-blue block">Phone Number</label>
                  <input type="tel" required placeholder="e.g. 016-1234567" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-base focus:outline-none focus:border-primary" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-dark-blue block">Inquiry Type</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-base focus:outline-none focus:border-primary">
                  <option>General Customer Support</option>
                  <option>Pickup & Delivery Order</option>
                  <option>Bulk Commercial Laundry (B2B)</option>
                  <option>Franchise Opportunity</option>
                  <option>Academy & Training Courses</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-dark-blue block">Message Content</label>
                <textarea rows={4} required placeholder="Write down details here..." className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-base focus:outline-none focus:border-primary" />
              </div>

              <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-xl shadow-md transition-colors cursor-pointer text-base">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* WhatsApp + Google Reviews Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center items-stretch">
          <div className="flex flex-col items-center">
            <div className="h-12 flex items-center justify-center mb-2">
              <MessageCircle className="w-12 h-12 text-lime animate-bounce" />
            </div>
            <h3 className="text-2xl font-extrabold text-dark-blue mb-4">Prefer Instant Chat?</h3>
            <p className="text-gray-500 text-base leading-relaxed">
              Skip the forms! Talk directly to our customer support executives via WhatsApp for immediate bookings or quick quotations.
            </p>
            <div className="pt-6 mt-auto">
              <Button href="https://wa.me/601131404946" variant="lime" target="_blank" rel="noopener noreferrer">
                WhatsApp Support
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-12 flex items-center justify-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-8 h-8 text-orange fill-orange" />
              ))}
            </div>
            <h3 className="text-2xl font-extrabold text-dark-blue mb-4">Happy With Our Service?</h3>
            <p className="text-gray-500 text-base leading-relaxed">
              Your feedback helps us grow. Share your experience with us on Google to let others know what to expect.
            </p>
            <div className="pt-6 mt-auto">
              <Button href={GOOGLE_MAPS_URL} variant="primary" target="_blank" rel="noopener noreferrer">
                Leave a Google Review
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
