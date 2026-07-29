"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Phone, Mail, Headphones } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "#pricing" },
  { name: "IPTV Reseller Panel", href: "/b1g-player-reseller/" },
  { name: "Downloader Codes", href: "/b1g-player-installation-guide/" },
  { name: "Support", href: "/contact/" },
  { name: "Installation Guide", href: "/b1g-player-installation-guide/" },
  { name: "IPTV Smarters Pro Installation Guide", href: "/b1g-player-installation-guide/" },
  { name: "Contact Us", href: "/contact/" },
  { name: "Privacy Policy", href: "/contact/" },
];

export function FireContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10">
            {/* Contact Info */}
            <div className="md:col-span-5 flex flex-col gap-6">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <Headphones className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#E01E26]">
                  24/7 Premium Support
                </h3>
              </div>

              <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
                <span className="text-brand-gradient font-bold">Contact</span>
              </h2>

              <div className="flex flex-col gap-4">
                <a
                  href="tel:+447848177296"
                  className="flex items-center gap-3 p-4 rounded-[12px] border border-slate-100 bg-white hover:border-[#E01E26]/30 transition-colors"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Phone className="h-4 w-4 stroke-[2]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    +44 (784) 817 7296
                  </span>
                </a>

                <a
                  href="mailto:support@fireiptvhub.com"
                  className="flex items-center gap-3 p-4 rounded-[12px] border border-slate-100 bg-white hover:border-[#E01E26]/30 transition-colors"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Mail className="h-4 w-4 stroke-[2]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    support@fireiptvhub.com
                  </span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-4 md:col-start-7">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#12141F] mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-slate-500 hover:text-[#E01E26] font-semibold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
