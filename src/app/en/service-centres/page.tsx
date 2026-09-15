"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Clock, Phone, Map } from "lucide-react";

const GOOGLE_MAPS_URL = "https://www.google.com/maps?cid=14488143292147049191";

export default function OutletPage() {
  const location = {
    name: "Dobi Akasia (Nilai HQ)",
    address: "B8-G, Ground Floor, Acacia Avenue, Jalan Jati 9, 71800 Nilai, Negeri Sembilan",
    hours: "9am - 7pm\nOpen Daily",
    phone: "011-3140 4946 / 016-440 4636",
    img: "/assets/dobiImage.webp",
  };

  return (
    <div className="flex flex-col min-h-screen bg-soft-bg">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-blue-50 to-white pt-36 pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-primary font-bold text-lg tracking-widest uppercase">Service Locator</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-blue mt-2 mb-4">
            Visit Our Outlet
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We currently operate from a single outlet in Nilai, Negeri Sembilan, offering our full range of professional laundry, dry cleaning, and fabric care services.
          </p>
        </div>
      </section>

      {/* Single Outlet Card */}
      <section className="py-16 max-w-3xl mx-auto px-6 w-full">
        <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
          {/* Top Banner Image */}
          <div className="relative h-64 bg-gray-100 overflow-hidden">
            <img
              src={location.img}
              alt={location.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            <span className="absolute top-4 right-4 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm bg-primary text-white">
              Headquarters
            </span>
          </div>

          {/* Body details */}
          <div className="p-8 space-y-4">
            <h3 className="text-xl font-bold text-dark-blue">
              {location.name}
            </h3>

            <div className="space-y-3 pt-2 text-lg text-gray-600">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">{location.address}</p>
              </div>
              <div className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="whitespace-pre-line leading-relaxed">{location.hours}</p>
              </div>
              <div className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">{location.phone}</p>
              </div>
            </div>
          </div>

          {/* Embedded map */}
          <iframe
            title={location.name}
            src={`${GOOGLE_MAPS_URL}&output=embed`}
            className="w-full h-72 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Footer map link */}
          <div className="p-6 pt-4">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-gray-50 border border-gray-150 py-3 rounded-xl font-bold text-base text-dark-blue hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <Map className="w-4 h-4" />
              Get Google Maps Directions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
