"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, MessageSquare } from "lucide-react";

export default function TestimonialsPage() {
  const reviews = [
    {
      name: "Shirley Liew",
      text: "Outstanding service! My wedding gown was stained with wine, but Dobi Akasia removed it completely. It looks brand new! Their attention to detail and care is unmatched.",
      rating: 5,
      avatar: "/img/image45.png",
    },
    {
      name: "Clarence Ma",
      text: "Good service and dry clean in 3 days is good. Staff is friendly and do provide professional knowledge in better handling diff type of materials. Operating hours 8am-8pm, close on Sunday.",
      rating: 5,
      avatar: "/img/image13.png",
    },
    {
      name: "Faris Daniel",
      text: "Great experience using their pickup service. Super convenient to hand over bedding and pick it up fresh after 3 days. Highly recommended for busy folks!",
      rating: 5,
      avatar: "/img/image48.png",
    },
    {
      name: "Amanda Yap",
      text: "Their carpet cleaning is top notch. They extracted so much dust and dirt, and the smell is wonderfully fresh. Very professional staff and fast turnaround time.",
      rating: 5,
      avatar: "/img/image34.png",
    },
    {
      name: "Hsiung Jian",
      text: "Very good service. Gave them 3 pairs of sneakers and all were clean so well.",
      rating: 5,
      avatar: "/img/image42.png",
    },
    {
      name: "Pua Luo Suen",
      text: "Amazing customer service and very clean.",
      rating: 5,
      avatar: "/img/image52.png",
    },
    {
      name: "Siew Li Khong",
      text: "Positive: Professionalism, Quality, Value. Good customer service. Very responsible and fast response. Trusted laundry shop.",
      rating: 5,
      avatar: "/img/image17.png",
    },
    {
      name: "Cheng Tao Kor",
      text: "My white shoes look back white again.",
      rating: 5,
      avatar: "/img/image59.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-soft-bg">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-white pt-36 pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-primary font-bold text-sm tracking-widest uppercase">Testimonials</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-blue mt-2 mb-6">
            Hear From Our Happy Customers
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Read real feedback from our verified Google Maps reviews and valued customers about our quality standards, convenience, and garment care.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-md flex flex-col justify-between hover:shadow-lg hover:border-primary transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex gap-1">
                  {Array.from({ length: rev.rating }).map((_, sIdx) => (
                    <Star key={sIdx} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  &quot;{rev.text}&quot;
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-gray-55">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border border-primary/20 bg-gray-50"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/img/google.png";
                  }}
                />
                <div className="text-left">
                  <h4 className="font-extrabold text-dark-blue text-sm leading-none">{rev.name}</h4>
                  <span className="text-[10px] font-semibold text-gray-400 block mt-1">Verified Reviewer</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Write a review section */}
      <section className="py-16 bg-white border-t border-gray-100 text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-4">
          <MessageSquare className="w-10 h-10 text-primary mx-auto mb-2" />
          <h3 className="text-xl font-bold text-dark-blue">Are You a Satisfied Customer?</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Your reviews help us grow and help other customers find premium laundry solutions. Please consider leaving us a review on Google Maps.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
