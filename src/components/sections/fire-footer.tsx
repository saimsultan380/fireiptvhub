"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

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

export function FireFooter() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Top: Brand & Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-100">
          {/* Brand */}
          <div className="md:col-span-6 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center group">
              <div className="relative w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/logo.PNG"
                  alt="Fire IPTV Hub Logo"
                  width={64}
                  height={64}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-sm">
              Fire IPTV Hub UK provides premium Firestick IPTV subscriptions with 20,000+ live TV channels, 70,000+ movies and TV shows, and 24/7 customer support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
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

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#12141F] mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+447848177296"
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E01E26] font-semibold transition-colors"
                >
                  +44 (784) 817 7296
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@fireiptvhub.com"
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E01E26] font-semibold transition-colors"
                >
                  support@fireiptvhub.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-slate-400 font-semibold">
            Copyright © {new Date().getFullYear()} Fire IPTV Hub. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
