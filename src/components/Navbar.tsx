"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, MessageCircle, MapPin, Clock, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPct = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolledPct);
      setIsScrolled(winScroll > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveAccordion(null);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleAccordion = (name: string) => {
    setActiveAccordion(activeAccordion === name ? null : name);
  };

  const services = [
    { name: "Dry Cleaning", href: "/en/dry-cleaning" },
    { name: "Laundry", href: "/en/laundry" },
    { name: "Special Care", href: "/en/special-care" },
    { name: "Bedding Cleaning", href: "/en/bedding-cleaning" },
    { name: "Ironing", href: "/en/ironing" },
    { name: "Shoe Cleaning", href: "/en/shoe-cleaning" },
    { name: "Toy Cleaning", href: "/en/toy-cleaning" },
    { name: "Baby Stroller & Car Seat Cleaning", href: "/en/baby-stroller-car-seat-cleaning" },
    { name: "Luggage Cleaning", href: "/en/luggage-cleaning" },
    { name: "Wedding Gown Cleaning", href: "/en/wedding-gown-cleaning" },
    { name: "Stain Removal", href: "/en/stain-removal" },
  ];

  const forBusiness = [
    { name: "Commercial Laundry", href: "/en/commercial-laundry" },
    { name: "Franchise Opportunity", href: "/en/franchise" },
    { name: "Academy & Training", href: "/en/training" },
  ];

  const sidebarVariants = {
    closed: { x: "100%", transition: { type: "tween", duration: 0.3 } },
    open: { x: 0, transition: { type: "tween", duration: 0.3 } },
  } as const;

  return (
    <>
      {/* Scrollbar progress indicator */}
      <div className="mil-progress-track">
        <div className="mil-progress" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Main glass navigation bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3.5"
            : "bg-white/90 backdrop-blur-md py-4 border-b border-slate-100/60 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
          {/* Logo */}
          <Link href="/en" className="flex min-w-0 items-center gap-3 group">
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-2xl tracking-tight text-[#152956] group-hover:opacity-90 transition-opacity">
                Dobi<span className="text-[#1d6ff0]">Akasia</span>
              </span>
              <span className="text-[9px] font-bold tracking-widest text-[#9ac936] uppercase mt-0.5">
                Green Certified Laundry
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Desktop primary">
            <Link
              href="/en"
              className="rounded-full px-3.5 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-[#1d6ff0] transition-all"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
                aria-expanded={activeDropdown === "services"}
                aria-haspopup="menu"
                className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-[#1d6ff0] transition-all cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180 text-[#1d6ff0]" : ""}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-0 top-full pt-2 z-50 w-72"
                  >
                    <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-2xl">
                      <div className="grid grid-cols-1 gap-1 max-h-[420px] overflow-y-auto pr-1">
                        {services.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="rounded-xl px-3.5 py-2 text-xs font-bold text-slate-600 hover:bg-brand-50 hover:text-[#1d6ff0] transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/en/promotions"
              className="rounded-full px-3.5 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-[#1d6ff0] transition-all"
            >
              Promotions
            </Link>

            {/* Business Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("business")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === "business" ? null : "business")}
                aria-expanded={activeDropdown === "business"}
                aria-haspopup="menu"
                className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-[#1d6ff0] transition-all cursor-pointer"
              >
                <span>For Business</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${activeDropdown === "business" ? "rotate-180 text-[#1d6ff0]" : ""}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === "business" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-0 top-full pt-2 z-50 w-56"
                  >
                    <div className="rounded-2xl border border-slate-100 bg-white p-2.5 shadow-2xl">
                      {forBusiness.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block rounded-xl px-3.5 py-2 text-xs font-bold text-slate-600 hover:bg-brand-50 hover:text-[#1d6ff0] transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/en/service-centres"
              className="rounded-full px-3.5 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-[#1d6ff0] transition-all"
            >
              Outlets
            </Link>

            <Link
              href="/en/testimonial"
              className="rounded-full px-3.5 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-[#1d6ff0] transition-all"
            >
              Testimonials
            </Link>

            <Link
              href="/en/contact-us"
              className="rounded-full px-3.5 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-[#1d6ff0] transition-all"
            >
              Contact
            </Link>
          </nav>

          {/* Right Area Action Items */}
          <div className="flex shrink-0 items-center gap-2 lg:gap-3">
            {/* Language Switcher Dropdown */}
            <div className="relative hidden lg:block">
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold text-slate-700 transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-[#1d6ff0] shadow-2xs cursor-pointer"
              >
                <Globe className="w-4 h-4 text-[#1d6ff0]" />
                <span>EN</span>
                <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {langMenuOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setLangMenuOpen(false)} />
                  <div className="absolute right-0 mt-2 z-20 w-44 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl">
                    <button
                      type="button"
                      onClick={() => setLangMenuOpen(false)}
                      className="flex w-full items-center justify-between rounded-xl bg-brand-50 px-3.5 py-2 text-xs font-bold text-brand-700"
                    >
                      <span>English</span>
                      <span>✓</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setLangMenuOpen(false)}
                      className="flex w-full items-center justify-between rounded-xl px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                    >
                      <span>Bahasa Malaysia</span>
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Direct Header WhatsApp CTA */}
            <a
              href="https://wa.me/60192225745"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-[#1d6ff0] hover:bg-[#1255cc] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 lg:inline-flex"
            >
              <MessageCircle className="w-4 h-4 fill-white/10" />
              <span>WhatsApp Us</span>
            </a>

            {/* Hamburger drawer toggler */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-xl text-[#152956] hover:text-[#1d6ff0] hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 lg:hidden border border-slate-200 bg-slate-50"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="w-5 h-5 text-[#1d6ff0]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#152956] z-40 backdrop-blur-xs"
            />

            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-white z-40 shadow-2xl overflow-y-auto pt-24 pb-8 px-6 sm:px-8 flex flex-col justify-between"
            >
              <nav className="space-y-3">
                <Link
                  href="/en"
                  className="block text-lg font-bold text-[#152956] hover:text-[#1d6ff0] transition-colors py-2 border-b border-slate-100"
                >
                  Home
                </Link>

                {/* Services Dropdown in Drawer */}
                <div className="border-b border-slate-100 pb-2">
                  <button
                    onClick={() => toggleAccordion("services")}
                    className="w-full flex items-center justify-between text-lg font-bold text-[#152956] hover:text-[#1d6ff0] transition-colors py-2 text-left focus:outline-none cursor-pointer"
                  >
                    <span>Laundry Services</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeAccordion === "services" ? "rotate-180 text-[#1d6ff0]" : "text-gray-400"
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {activeAccordion === "services" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden bg-slate-50 rounded-2xl my-2 px-4 py-2 space-y-1 border border-slate-100"
                      >
                        {services.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="block py-1.5 text-xs font-bold text-slate-600 hover:text-[#1d6ff0] transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/en/promotions"
                  className="block text-lg font-bold text-[#152956] hover:text-[#1d6ff0] transition-colors py-2 border-b border-slate-100"
                >
                  Promotions
                </Link>

                {/* Business Dropdown in Drawer */}
                <div className="border-b border-slate-100 pb-2">
                  <button
                    onClick={() => toggleAccordion("business")}
                    className="w-full flex items-center justify-between text-lg font-bold text-[#152956] hover:text-[#1d6ff0] transition-colors py-2 text-left focus:outline-none cursor-pointer"
                  >
                    <span>For Business</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeAccordion === "business" ? "rotate-180 text-[#1d6ff0]" : "text-gray-400"
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {activeAccordion === "business" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden bg-slate-50 rounded-2xl my-2 px-4 py-2 space-y-1 border border-slate-100"
                      >
                        {forBusiness.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="block py-1.5 text-xs font-bold text-slate-600 hover:text-[#1d6ff0] transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/en/service-centres"
                  className="block text-lg font-bold text-[#152956] hover:text-[#1d6ff0] transition-colors py-2 border-b border-slate-100"
                >
                  Our Outlets
                </Link>

                <Link
                  href="/en/testimonial"
                  className="block text-lg font-bold text-[#152956] hover:text-[#1d6ff0] transition-colors py-2 border-b border-slate-100"
                >
                  Testimonials
                </Link>

                <Link
                  href="/en/contact-us"
                  className="block text-lg font-bold text-[#152956] hover:text-[#1d6ff0] transition-colors py-2 border-b border-slate-100"
                >
                  Contact Us
                </Link>
              </nav>

              <div className="pt-6 border-t border-slate-100 text-center space-y-2">
                <p className="text-xs font-bold text-[#152956]">Dobi Akasia Headquarters</p>
                <p className="text-xs text-gray-500">Taman Akasia, Kajang, Selangor</p>
                <a
                  href="https://wa.me/60192225745"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-md mt-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

