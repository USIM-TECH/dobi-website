"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, MessageSquare } from "lucide-react";

export default function TestimonialsPage() {
  const reviews = [
    {
      name: "Nursyazwani Azalan",
      text: "Really happy with the service here! The place is clean and comfortable. My clothes were clean and smelled fresh. Highly recommended!",
      rating: 5,
    },
    {
      name: "Siva Perumal",
      text: "My experience was extremely positive, and I would like to recognise the high standards maintained by your business. From the moment I entered the facility, I was impressed by how clean, organised, and welcoming the environment was. The staff members were friendly, respectful, and very helpful throughout my visit. I found the prices to be very affordable and would happily recommend Dobi Akasia to anyone looking for a reliable laundry service.",
      rating: 5,
    },
    {
      name: "thenmole moly",
      text: "Really impressed with Dobi Akasia! Clean and well-organised shop, good service and very convenient. The staff are friendly and helpful, and the overall experience was excellent. Highly recommended to anyone looking for a reliable laundry service in Nilai.",
      rating: 5,
    },
    {
      name: "shasha pillay",
      text: "Five-star service! Fast, friendly, and efficient. My clothes look pristine and smell amazing. Highly recommended!",
      rating: 5,
    },
    {
      name: "Darshan",
      text: "Good service and a clean place. Overall, a good dobi shop with affordable prices.",
      rating: 5,
    },
    {
      name: "Faziela Putri",
      text: "Good service 👍",
      rating: 5,
    },
    {
      name: "Adilah Ahmad",
      text: "Best service.",
      rating: 5,
    },
    {
      name: "Ammar Khairul",
      text: "My brother is very friendly and kind. Service 5 stars.",
      rating: 5,
      note: "Translated from Malay",
    },
    {
      name: "Muhammad Abdullah Al Akhyar",
      text: "Dobi Akasia offers excellent services from washing clothes to ironing clothes ✨",
      rating: 5,
      note: "Translated from Malay",
    },
    {
      name: "Qamarul Arshad",
      text: "Clothes smell good all day long, different from washing them yourself. Service is good, price is reasonable, and most importantly you don't have to fold them again!",
      rating: 5,
      note: "Translated from Malay",
    },
    {
      name: "Dharma Mira",
      text: "Good service! The clothes were clean, fragrant, and well-packaged. The service was fast and the staff was very friendly. Highly recommended!",
      rating: 5,
      note: "Translated from Indonesian",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-soft-bg">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-white pt-36 pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-primary font-bold text-lg tracking-widest uppercase">
            Testimonials
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-blue mt-2 mb-6">
            Hear From Our Happy Customers
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Read real feedback from our valued customers about our quality
            standards, convenience, and garment care.
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
                    <Star
                      key={sIdx}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-lg leading-relaxed italic">
                  &quot;{rev.text}&quot;
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-gray-55">
                <div
                  className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 text-primary font-extrabold flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  {rev.name.charAt(0).toUpperCase()}
                </div>
                <div className="text-left">
                  <h4 className="font-extrabold text-dark-blue text-lg leading-none">
                    {rev.name}
                  </h4>
                  <span className="text-[10px] font-semibold text-gray-400 block mt-1">
                    Customer {rev.note ? ` · ${rev.note}` : ""}
                  </span>
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
          <h3 className="text-xl font-bold text-dark-blue">
            Are You a Satisfied Customer?
          </h3>
          <p className="text-gray-500 text-lg leading-relaxed">
            Your reviews help us grow and help other customers find premium
            laundry solutions. Please consider leaving us a review on Google
            Maps.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
