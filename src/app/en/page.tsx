"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import BeforeAfter from "@/components/BeforeAfter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import {
  ShieldCheck,
  CheckCircle,
  Award,
  Star,
  ArrowRight,
  Zap,
  MessageCircle,
  MapPin,
  Sparkles,
  Clock,
  PackageCheck,
} from "lucide-react";
import Link from "next/link";

export default function EnglishHomePage() {
  const [showAllServices, setShowAllServices] = React.useState(false);

  const serviceCards = [
    {
      title: "Dry Cleaning",
      description: "Preserve delicate fabrics and formal suits with premium eco-solvents.",
      img: "/img/dry.png",
      href: "/en/dry-cleaning",
      badge: "Popular",
    },
    {
      title: "Laundry",
      description: "Freshly cleaned, perfectly folded, and pressed everyday clothing.",
      img: "/img/wet.png",
      href: "/en/laundry",
      badge: "Everyday",
    },
    {
      title: "Special Care",
      description: "Dedicated routines for leather, silk, cashmere, and luxury garments.",
      img: "/img/special.png",
      href: "/en/special-care",
      badge: "Luxury",
    },
    {
      title: "Bedding Cleaning",
      description: "Deep sanitization for comforters, blankets, pillows, and bolsters.",
      img: "/img/service-1.png",
      href: "/en/bedding-cleaning",
      badge: "Hygiene",
    },
    {
      title: "Curtains",
      description: "Curtain washing with free removal and installation assistance.",
      img: "/img/curtains.png",
      href: "/en/curtain-cleaning",
      badge: "Full Care",
    },
    {
      title: "Carpets",
      description: "Deep clean extraction removing dust mites, dirt, and stubborn spots.",
      img: "/img/carpets.png",
      href: "/en/carpet-cleaning",
      badge: "Deep Clean",
    },
    {
      title: "Ironing",
      description: "Professional pressing for crisp, wrinkle-free business wear.",
      img: "/img/service-2.png",
      href: "/en/ironing",
      badge: "Wrinkle-Free",
    },
    {
      title: "Shoe Cleaning",
      description: "Manual cleaning and revival of sneakers, suede, and leather shoes.",
      img: "/img/service-3.png",
      href: "/en/shoe-cleaning",
      badge: "Combo Savings",
    },
    {
      title: "Toy Cleaning",
      description: "Non-toxic, child-safe sanitization for your kids' plush toys.",
      img: "/img/service-4.png",
      href: "/en/toy-cleaning",
      badge: "Child Safe",
    },
    {
      title: "Baby Gear Cleaning",
      description: "Sanitization treatment for baby strollers, car seats, and cots.",
      img: "/img/welcome-1.png",
      href: "/en/baby-stroller-car-seat-cleaning",
      badge: "Baby Safe",
    },
    {
      title: "Luggage Cleaning",
      description: "Exterior and interior sanitization to restore travel suitcases.",
      img: "/img/welcome-2.png",
      href: "/en/luggage-cleaning",
      badge: "Travel",
    },
    {
      title: "Wedding Gowns",
      description: "Meticulous hand care to preserve your gown and special memories.",
      img: "/img/welcome-3.png",
      href: "/en/wedding-gown-cleaning",
      badge: "Specialist",
    },
  ];

  const testimonials = [
    {
      name: "Shirley Liew",
      text: "Outstanding service! My wedding gown was stained with wine, but Dobi Akasia removed it completely. It looks brand new! Their attention to detail and care is unmatched.",
      avatar: "/img/image45.png",
      stars: 5,
      role: "Verified Google Reviewer",
    },
    {
      name: "Faris Daniel",
      text: "Great experience using their pickup service. Super convenient to hand over bedding and pick it up fresh after 3 days. Highly recommended for busy folks!",
      avatar: "/img/image48.png",
      stars: 5,
      role: "Pickup Customer",
    },
    {
      name: "Amanda Yap",
      text: "Their carpet cleaning is top notch. They extracted so much dust and dirt, and the smell is wonderfully fresh. Very professional staff and fast turnaround time.",
      avatar: "/img/image34.png",
      stars: 5,
      role: "Homeowner",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Original fresh-care hero */}
      <section className="fresh-hero relative isolate overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-32 lg:min-h-[640px] xl:min-h-[700px] flex items-center">
        <div className="fresh-bubbles" aria-hidden="true">
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={index} className={`fresh-bubble fresh-bubble-${index + 1}`} />
          ))}
        </div>

        {/* Desktop Hero Image: absolute positioning on the right, large, borderless, fading left to merge with UI */}
        <div className="absolute right-0 top-0 bottom-0 w-[45vw] xl:w-[48vw] hidden lg:block z-0 pointer-events-none">
          <div className="relative h-full w-full">
            <Image
              src="/img/hero-care-v1.webp"
              alt="A laundry care specialist returning freshly cleaned garments to a customer"
              fill
              priority
              className="object-cover object-[62%_center]"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 35%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 35%)",
              }}
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
             

              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-dark-blue sm:text-5xl lg:text-6xl xl:text-[68px]">
                Laundry cared for.
                <span className="block text-[#1d6ff0]">Time given back.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base font-medium leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Book a pickup or visit a nearby outlet. We make professional garment care simple, transparent, and easy to fit into your day.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="https://wa.me/60192225745?text=Hi%20Dobi%20Akasia%2C%20I%27d%20like%20to%20book%20a%20laundry%20pickup."
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#1d6ff0] px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-[#1255cc] hover:shadow-blue-500/30 focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                  <MessageCircle className="h-5 w-5" />
                  Book via WhatsApp
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#services"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white/80 px-7 py-4 text-sm font-extrabold text-dark-blue shadow-sm backdrop-blur transition hover:border-[#1d6ff0] hover:text-[#1d6ff0] focus:outline-none focus:ring-4 focus:ring-blue-100"
                >
                  View services & prices
                </a>
              </div>

             

              
            </div>

            {/* Mobile/Tablet Hero Image: relative below text, borderless, fading bottom to merge with UI */}
            <div className="relative col-span-1 lg:hidden w-full max-w-[620px] mx-auto mt-4 overflow-hidden">
              <Image
                src="/img/hero-care-v1.webp"
                alt="A laundry care specialist returning freshly cleaned garments to a customer"
                width="1536"
                height="1024"
                priority
                className="w-full aspect-[4/3] object-cover object-[62%_center]"
                style={{
                  maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick process strip */}
      <section className="relative z-20 -mt-1 border-y border-sky-100/80 bg-white/90 py-6 shadow-[0_18px_50px_-40px_rgba(21,41,86,0.5)] backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 sm:grid-cols-3 sm:gap-0">
          {[
            { icon: MessageCircle, title: "Choose your service", text: "Message us or select an outlet" },
            { icon: Sparkles, title: "We clean with care", text: "Fabric-specific treatment and checks" },
            { icon: Clock, title: "Collect on your schedule", text: "Outlet or doorstep pickup" },
          ].map((step, index) => (
            <div key={step.title} className={`flex items-center gap-4 py-3 sm:px-6 ${index > 0 ? "sm:border-l sm:border-sky-100" : ""}`}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-[#1d6ff0]"><step.icon className="h-5 w-5" /></span>
              <div><h2 className="text-sm font-semibold text-dark-blue">{step.title}</h2><p className="mt-0.5 text-xs font-semibold text-slate-500">{step.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden" id="about-us">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 items-center gap-16">
          
          {/* Left Column - Image & Floating Badge */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            {/* Decorative background shape for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 to-emerald-50 rounded-[32px] transform translate-x-4 translate-y-4 -z-10" />
            <div className="relative w-full max-w-lg aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border border-slate-100/50 group bg-white">
              <img
                src="/img/dry.png"
                alt="A Dobi Akasia specialist operating professional garment-care equipment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              
              {/* Floating Eco-Friendly Glassmorphic Badge */}
              
            </div>
          </div>

          {/* Right Column - Text & 3 Key Cards */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-xs tracking-widest uppercase block">
                About Dobi-Akasia
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-dark-blue leading-tight tracking-tight">
                Redefining Garment Care Through Innovation
              </h2>
            </div>

            <div className="space-y-4 text-gray-650 text-sm md:text-base font-medium leading-relaxed max-w-2xl">
              <p>
                Dobi-Akasia combines the precision of modern tracking technology with the meticulous care of traditional hand-finishing. Whether it&apos;s corporate wear or delicate luxury garments, we treat every item as an investment worth preserving.
              </p>
            </div>

            {/* 3 Modern Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-8 border-t border-slate-100">
              {[
                {
                  icon: ShieldCheck,
                  title: "Certified Care",
                  text: "5-point quality inspection on every garment.",
                  bg: "bg-blue-50/50",
                  textCol: "text-blue-600"
                },
                {
                  icon: Zap,
                  title: "Modern Tech",
                  text: "European cleaning systems protecting fabrics.",
                  bg: "bg-sky-50/50",
                  textCol: "text-sky-600"
                },
                {
                  icon: Sparkles,
                  title: "Eco Solvents",
                  text: "Non-toxic, family-safe fabric treatments.",
                  bg: "bg-emerald-50/50",
                  textCol: "text-emerald-600"
                }
              ].map((item, idx) => (
                <div key={idx} className="group flex flex-col gap-3 p-5 rounded-2xl border border-slate-100/80 bg-slate-50/20 hover:bg-white hover:shadow-lg hover:border-slate-100 transition-all duration-300">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.bg} ${item.textCol} transition-transform group-hover:scale-110 duration-300`}>
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-bold text-dark-blue text-sm tracking-tight">{item.title}</h4>
                    <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* 12 Services Catalog Grid with proper spacing */}
      <section id="services" className="scroll-mt-28 py-24 bg-soft-bg border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-extrabold text-xs tracking-widest uppercase bg-primary/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-dark-blue tracking-tight">
              Everything you need, cared for properly
            </h2>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              We process everyday garments, luxury attire, home items, and special care cleaning with strict quality controls.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-4">
            {(showAllServices ? serviceCards : serviceCards.slice(0, 6)).map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <div className="h-48 overflow-hidden relative bg-gray-100">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-[#152956] border border-slate-200/80 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                      {service.badge}
                    </span>
                  </div>
                  {/* Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-extrabold text-dark-blue mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <div className="flex items-center justify-between text-xs font-bold text-primary pt-3 border-t border-gray-100 group-hover:text-primary-dark">
                    <span>View Pricing & FAQs</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllServices((current) => !current)}
              aria-expanded={showAllServices}
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#1d6ff0] bg-white px-7 py-3 text-sm font-extrabold text-[#1d6ff0] transition hover:bg-[#1d6ff0] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-100"
            >
              {showAllServices ? "Show fewer services" : "View all 12 services"}
            </button>
          </div>
        </div>
      </section>

      {/* Before/After split comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <span className="text-primary font-extrabold text-xs tracking-widest uppercase bg-primary/10 px-3.5 py-1.5 rounded-full inline-block">
              Real Result. Real Difference.
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-dark-blue leading-tight tracking-tight max-w-md">
              Witness Our Expert Stain Removal Capabilities
            </h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-lg">
              Coffee, wine, grease, or dirt stains—our specialized treatment formulations break down blemishes without weakening garment threads or stripping colors. Drag the slider to compare.
            </p>
            <div className="pt-2">
              <Button href="/en/stain-removal" variant="outline">
                Stain Removal Details
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <BeforeAfter
              beforeImage="/img/dry-cleaning-2.png"
              afterImage="/img/dry-cleaning-3.png"
              beforeAlt="Collar stain before cleaning"
              afterAlt="Collar stain after cleaning"
            />
          </div>
        </div>
      </section>

      {/* Outlets Locator Preview */}
      <section className="py-20 bg-dark-blue text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="space-y-4 text-center lg:text-left max-w-2xl">
            <span className="text-primary font-bold text-xs tracking-widest uppercase">Laundry Outlets</span>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Locate Our Physical Outlets Near You
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Visit our physical service centers for easy drop-offs and expert fabric care.
            </p>
          </div>
          <div className="flex-shrink-0 flex gap-4">
            <Button href="/en/service-centres" variant="white">
              View Service Centres
            </Button>
            <Button href="/en/contact-us" variant="outline-white">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-24 bg-soft-bg" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-primary font-extrabold text-xs tracking-widest uppercase bg-primary/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Testimonials
          </span>
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-semibold text-dark-blue mb-12 tracking-tight">
            What Our Customers Say About Us
          </h2>

          <div className="max-w-3xl mx-auto">
            <Swiper
              modules={[Autoplay, Pagination, A11y]}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              pagination={{ clickable: true, el: ".testimonial-swiper-pagination" }}
              loop={true}
              a11y={{
                paginationBulletMessage: "Go to testimonial review {{index}}",
              }}
              className="w-full pb-2"
            >
              {testimonials.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-white p-8 md:p-12 rounded-3xl shadow-md border border-gray-100 text-center space-y-6">
                    <div className="flex justify-center gap-1" aria-label={`Rating: ${item.stars} out of 5 stars`}>
                      {Array.from({ length: item.stars }).map((_, sIdx) => (
                        <Star key={sIdx} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    <p className="text-gray-700 text-base md:text-lg font-medium italic leading-relaxed">
                      &quot;{item.text}&quot;
                    </p>

                    <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-50">
                      <img
                        src={item.avatar}
                        alt={`Photo of ${item.name}`}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/img/google.png";
                        }}
                      />
                      <div className="text-left">
                        <h3 className="font-extrabold text-dark-blue text-base leading-none">
                          {item.name}
                        </h3>
                        <span className="text-xs font-semibold text-slate-500 block mt-1">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Dedicated Pagination Dots for Testimonials */}
            <div className="testimonial-swiper-pagination flex justify-center gap-2 mt-6" />

            <div className="mt-8 flex justify-center">
              <Link href="/en/testimonial" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline">
                Read All 25+ Customer Reviews <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
