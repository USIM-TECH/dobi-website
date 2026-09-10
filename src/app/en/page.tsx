"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
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
  Leaf,
  MonitorSmartphone,
  Shirt,
  WashingMachine,
  Gem,
  BedDouble,
  Blinds,
  Sofa,
} from "lucide-react";
import Link from "next/link";

export default function EnglishHomePage() {
  const [showAllServices, setShowAllServices] = React.useState(false);

  const serviceCards = [
    {
      title: "Dry Cleaning",
      description:
        "Preserve delicate fabrics and formal suits with premium eco-solvents.",
      icon: Shirt,
      href: "/en/dry-cleaning",
      badge: "Popular",
      bg: "from-blue-50 to-blue-100/40",
      glow: "bg-blue-200/50",
      iconColor: "text-blue-600",
    },
    {
      title: "Laundry",
      description:
        "Freshly cleaned, perfectly folded, and pressed everyday clothing.",
      icon: WashingMachine,
      href: "/en/laundry",
      badge: "Everyday",
      bg: "from-sky-50 to-sky-100/40",
      glow: "bg-sky-200/50",
      iconColor: "text-sky-600",
    },
    {
      title: "Special Care",
      description:
        "Dedicated routines for leather, silk, cashmere, and luxury garments.",
      icon: Gem,
      href: "/en/special-care",
      badge: "Luxury",
      bg: "from-purple-50 to-purple-100/40",
      glow: "bg-purple-200/50",
      iconColor: "text-purple-600",
    },
    {
      title: "Bedding Cleaning",
      description:
        "Deep sanitization for comforters, blankets, pillows, and bolsters.",
      icon: BedDouble,
      href: "/en/bedding-cleaning",
      badge: "Hygiene",
      bg: "from-rose-50 to-rose-100/40",
      glow: "bg-rose-200/50",
      iconColor: "text-rose-500",
    },
    {
      title: "Curtains",
      description:
        "Curtain washing with free removal and installation assistance.",
      icon: Blinds,
      href: "/en/curtain-cleaning",
      badge: "Full Care",
      bg: "from-amber-50 to-amber-100/40",
      glow: "bg-amber-200/50",
      iconColor: "text-amber-600",
    },
    {
      title: "Carpets",
      description:
        "Deep clean extraction removing dust mites, dirt, and stubborn spots.",
      icon: Sofa,
      href: "/en/carpet-cleaning",
      badge: "Deep Clean",
      bg: "from-emerald-50 to-emerald-100/40",
      glow: "bg-emerald-200/50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Ironing",
      description:
        "Professional pressing for crisp, wrinkle-free business wear.",
      icon: Zap,
      href: "/en/ironing",
      badge: "Wrinkle-Free",
      bg: "from-indigo-50 to-indigo-100/40",
      glow: "bg-indigo-200/50",
      iconColor: "text-indigo-600",
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
            <span
              key={index}
              className={`fresh-bubble fresh-bubble-${index + 1}`}
            />
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
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 35%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 35%)",
              }}
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-dark-blue sm:text-5xl lg:text-6xl xl:text-[68px]">
                Laundry cared for.
              </h1>

              <p className="mt-6 max-w-xl text-base font-medium leading-7 text-slate-600 sm:text-lg sm:leading-8">
                We make professional garment care simple, transparent, and easy
                to fit into your day.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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
                  maskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
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
            {
              icon: MessageCircle,
              title: "Drop off or WhatsApp us",
              text: "Drop off at any outlet, or message us to arrange pickup",
            },
            {
              icon: Sparkles,
              title: "We clean with care",
              text: "Fabric-specific treatment and checks",
            },
            {
              icon: Clock,
              title: "Ready for pickup",
              text: "Collect your freshly cleaned items at your chosen outlet",
            },
          ].map((step, index) => (
            <div
              key={step.title}
              className={`flex items-center gap-4 py-3 sm:px-6 ${index > 0 ? "sm:border-l sm:border-sky-100" : ""}`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-[#1d6ff0]">
                <step.icon className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-sm font-semibold text-dark-blue">
                  {step.title}
                </h2>
                <p className="mt-0.5 text-xs font-semibold text-slate-500">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-24 bg-white relative overflow-hidden"
        id="about-us"
      >
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
                Established in 2012, Dobi Akasia has grown to become a premier
                laundry service provider specializing in comprehensive,
                high-capacity care solutions. Based in Nilai, Negeri Sembilan,
                we deliver an uncompromised standard of fabric care through our
                advanced technical setup, premium eco-friendly detergents, and
                highly experienced staff.
              </p>
              <p>
                Our business is engineered to support both large-scale
                commercial clients and premium retail requirements, offering
                custom bulk contracts that prioritize prompt turnaround times,
                hygienic outcomes, and competitive cost efficiency. As a
                trusted partner for regional institutions, we understand the
                logistical requirements of institutional hygiene and linen
                maintenance.
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
                  textCol: "text-blue-600",
                },
                {
                  icon: Zap,
                  title: "Modern Tech",
                  text: "European cleaning systems protecting fabrics.",
                  bg: "bg-sky-50/50",
                  textCol: "text-sky-600",
                },
                {
                  icon: Sparkles,
                  title: "Eco Solvents",
                  text: "Non-toxic, family-safe fabric treatments.",
                  bg: "bg-emerald-50/50",
                  textCol: "text-emerald-600",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col gap-3 p-5 rounded-2xl border border-slate-100/80 bg-slate-50/20 hover:bg-white hover:shadow-lg hover:border-slate-100 transition-all duration-300"
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.bg} ${item.textCol} transition-transform group-hover:scale-110 duration-300`}
                  >
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-bold text-dark-blue text-sm tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12 Services Catalog Grid with proper spacing */}
      <section
        id="services"
        className="scroll-mt-28 py-24 bg-soft-bg border-t border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-extrabold text-xs tracking-widest uppercase bg-primary/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-dark-blue tracking-tight">
              Everything you need, cared for properly
            </h2>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              We process everyday garments, luxury attire, home items, and
              special care cleaning with strict quality controls.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-4">
            {(showAllServices ? serviceCards : serviceCards.slice(0, 4)).map(
              (service, idx) => (
                <Link
                  key={idx}
                  href={service.href}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
                >
                  <div>
                    {/* Icon */}
                    <div className={`h-40 flex items-center justify-center relative overflow-hidden bg-gradient-to-br ${service.bg}`}>
                      <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full ${service.glow} blur-2xl`} />
                      <div className={`absolute -left-10 -bottom-10 w-28 h-28 rounded-full ${service.glow} blur-2xl opacity-70`} />
                      <div className="relative w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <service.icon className={`w-9 h-9 ${service.iconColor}`} strokeWidth={1.75} />
                      </div>
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
              ),
            )}
          </div>
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllServices((current) => !current)}
              aria-expanded={showAllServices}
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#1d6ff0] bg-white px-7 py-3 text-sm font-extrabold text-[#1d6ff0] transition hover:bg-[#1d6ff0] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-100"
            >
              {showAllServices ? "Show fewer services" : "View all 7 services"}
            </button>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-extrabold text-xs tracking-widest uppercase bg-primary/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Our Commitment to Sustainability
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-dark-blue tracking-tight">
              Smarter Laundry. Greener Future.
            </h2>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              At Dobi Akasia, sustainability is integrated into the way we
              operate. Through technology and responsible practices, we
              strive to reduce our environmental impact while delivering
              efficient and transparent laundry services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4 p-8 rounded-3xl border border-gray-200/60 bg-soft-bg hover:shadow-lg transition-all duration-300">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                <MonitorSmartphone className="w-6 h-6" />
              </span>
              <h3 className="text-lg font-extrabold text-dark-blue">
                Paperless by Design
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our in-house web and mobile system makes our laundry
                operations paperless from start to finish — from checking
                items received, tracking every service, confirming completed
                laundry and generating digital invoices. Less paper, less
                waste, and a smarter customer experience.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-8 rounded-3xl border border-gray-200/60 bg-soft-bg hover:shadow-lg transition-all duration-300">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Leaf className="w-6 h-6" />
              </span>
              <h3 className="text-lg font-extrabold text-dark-blue">
                Eco-Friendly Cleaning
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We use eco-friendly cleaning chemicals as part of our
                commitment to more responsible and sustainable laundry
                practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section
        className="py-24 bg-soft-bg"
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-primary font-extrabold text-xs tracking-widest uppercase bg-primary/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Testimonials
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-semibold text-dark-blue mb-12 tracking-tight"
          >
            What Our Customers Say About Us
          </h2>

          <div className="max-w-3xl mx-auto">
            <Swiper
              modules={[Autoplay, Pagination, A11y]}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              pagination={{
                clickable: true,
                el: ".testimonial-swiper-pagination",
              }}
              loop={true}
              a11y={{
                paginationBulletMessage: "Go to testimonial review {{index}}",
              }}
              className="w-full pb-2"
            >
              {testimonials.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-white p-8 md:p-12 rounded-3xl shadow-md border border-gray-100 text-center space-y-6">
                    <div
                      className="flex justify-center gap-1"
                      aria-label={`Rating: ${item.stars} out of 5 stars`}
                    >
                      {Array.from({ length: item.stars }).map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          className="w-5 h-5 fill-primary text-primary"
                        />
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
                          (e.target as HTMLImageElement).src =
                            "/img/google.png";
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
              <Link
                href="/en/testimonial"
                className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
              >
                Read All 25+ Customer Reviews{" "}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
