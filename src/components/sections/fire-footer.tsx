"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/lib/routes";
import { SUPPORT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_HREF } from "@/lib/routes";

const quickLinks = [
  { name: "Home", href: ROUTES.home },
  { name: "Subscription Plans", href: ROUTES.subscription },
  { name: "Installation Guide", href: ROUTES.installation },
  { name: "Apps and Devices", href: ROUTES.apps },
  { name: "Best IPTV for Firestick", href: ROUTES.best },
  { name: "Reseller Panel", href: ROUTES.reseller },
  { name: "Contact Us", href: ROUTES.contact },
  { name: "About Us", href: ROUTES.about },
  { name: "Privacy Policy", href: ROUTES.privacy },
  { name: "Terms of Service", href: ROUTES.terms },
  { name: "Refund Policy", href: ROUTES.refund },
  { name: "Copyright Policy", href: ROUTES.copyright },
];

export function FireFooter() {
  return (
    <footer className="w-full section-glass border-t border-white/50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-100">
          <div className="md:col-span-6 flex flex-col items-start gap-4">
            <Link href={ROUTES.home} className="flex items-center group">
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
              Fire IPTV Hub provides Firestick IPTV subscriptions with 20,000+ live channels, films, series, EPG support and guided installation for compatible Fire TV devices.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#12141F] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
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

          <div className="md:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#12141F] mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_HREF}
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E01E26] font-semibold transition-colors"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E01E26] font-semibold transition-colors"
                >
                  {SUPPORT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-slate-400 font-semibold">
            Copyright © {new Date().getFullYear()} Fire IPTV Hub. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
