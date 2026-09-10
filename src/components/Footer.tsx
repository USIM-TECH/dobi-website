"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#152956] text-[#b9c6d6] pt-20 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Decorative ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -right-24 size-80 rounded-full bg-blue-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-1/3 size-72 rounded-full bg-blue-400/5 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-12 relative z-10">
        {/* Brand Description & Credentials */}
        <div className="space-y-6">
          <Link href="/en" className="flex items-center">
            <span className="font-extrabold text-3xl tracking-tight text-white">
              Dobi<span className="text-[#1d6ff0]">Akasia</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-300">
            Established in 2012 and based in Nilai, Negeri Sembilan, Dobi Akasia is a premier laundry and dry cleaning provider. We combine advanced technology and eco-friendly practices to care for your garments and the planet.
          </p>
        </div>

        {/* Link Column 1: Services */}
        <div className="space-y-5">
          <h3 className="text-base font-bold text-white uppercase tracking-wider">Services</h3>
          <ul className="space-y-3 text-sm font-semibold">
            {[
              { name: "Dry Cleaning", href: "/en/dry-cleaning" },
              { name: "Laundry", href: "/en/laundry" },
              { name: "Special Care", href: "/en/special-care" },
              { name: "Bedding Cleaning", href: "/en/bedding-cleaning" },
              { name: "Curtains & Carpets", href: "/en/curtain-cleaning" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Link Column 2: Information */}
        <div className="space-y-5">
          <h3 className="text-base font-bold text-white uppercase tracking-wider">Company</h3>
          <ul className="space-y-3 text-sm font-semibold">
            {[
              { name: "About Quality", href: "/en/#core-values" },
              { name: "Exceptional Service", href: "/en/service" },
              { name: "Commercial Laundry", href: "/en/commercial-laundry" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Download & Social Column */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Contact & Socials</h3>
            <ul className="space-y-3 text-sm font-semibold">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4.5 h-4.5 text-[#1d6ff0] shrink-0 mt-0.5" />
                <address className="not-italic text-slate-300">
                  Operational Headquarters: B8-G, Ground Floor, Acacia Avenue, Jalan Jati 9, 71800 Nilai, Negeri Sembilan
                </address>
              </li>
              <li>
                <a href="tel:+60111404946" className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <Phone className="w-4.5 h-4.5 text-[#1d6ff0]" />
                  <span>011-3140 4946 / 016-440 4636</span>
                </a>
              </li>
              <li>
                <a href="mailto:dobiakasia@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <Mail className="w-4.5 h-4.5 text-[#1d6ff0]" />
                  <span>dobiakasia@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1d6ff0]">Follow Our Community</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/DobiAkasiaNilai/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-[#1d6ff0] hover:border-blue-500 hover:scale-105 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/dobiakasianilai"
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-[#1d6ff0] hover:border-blue-500 hover:scale-105 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://wa.me/601131404946"
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-[#25D366] hover:border-green-500 hover:scale-105 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4.5 h-4.5 fill-current" />
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Copyright Area */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>© {currentYear} Dobi Akasia. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

