"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Clock, Phone, Map } from "lucide-react";

export default function OutletsPage() {
  const locations = [
    {
      type: "outlet",
      name: "Taman Shamelin Perkasa (HQ)",
      address: "81, Jalan 10/91, Taman Shamelin Perkasa, 56100 Cheras, Wilayah Persekutuan Kuala Lumpur",
      hours: "8am - 8pm\nClosed on Sunday",
      phone: "03-9282 5745",
      img: "/img/laundry_boutique_interior.png",
    },
    {
      type: "outlet",
      name: "Putrajaya",
      address: "No. 102, Nadi 15, P15, Jln Diplomatik, Presint 15, 62050 Wilayah Persekutuan Putrajaya",
      hours: "9am - 7pm\nClosed on Saturday & Sunday",
      phone: "012-762 7080",
      img: "/img/about-store-interior.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-soft-bg">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-blue-50 to-white pt-36 pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-primary font-bold text-sm tracking-widest uppercase">Service Locator</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-blue mt-2 mb-4">
            Find a Dobi Akasia Outlet Near You
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Visit our physical outlets for our full range of professional laundry, dry cleaning, and fabric care services.
          </p>
        </div>
      </section>

      {/* Grid of Locations */}
      <section className="py-16 max-w-5xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Top Banner Image / Type */}
              <div className="relative h-56 bg-gray-100 overflow-hidden">
                <img
                  src={loc.img}
                  alt={loc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <span className="absolute top-4 right-4 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm bg-primary text-white">
                  Outlet
                </span>
              </div>

              {/* Body details */}
              <div className="p-6 flex-grow space-y-4">
                <h3 className="text-xl font-bold text-dark-blue group-hover:text-primary transition-colors">
                  {loc.name}
                </h3>

                <div className="space-y-3 pt-2 text-sm text-gray-600">
                  <div className="flex gap-3 items-start">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{loc.address}</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="whitespace-pre-line leading-relaxed">{loc.hours}</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{loc.phone}</p>
                  </div>
                </div>
              </div>

              {/* Footer map link */}
              <div className="p-6 pt-0">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    "Dobi Akasia " + loc.name + " " + loc.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gray-50 border border-gray-150 py-3 rounded-xl font-bold text-xs text-dark-blue hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  <Map className="w-4 h-4" />
                  Get Google Maps Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
