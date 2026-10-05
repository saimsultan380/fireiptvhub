"use client";

import React from "react";
import Link from "next/link";
import { B1GLogo } from "@/components/brand/b1g-logo";
import { ROUTES, WHATSAPP_TRIAL_HREF } from "@/lib/routes";

const linkClass =
  "text-xs sm:text-sm text-slate-500 hover:text-[#E01E26] font-semibold transition-colors";

const pageLinks = [
  { name: "Home", href: ROUTES.home },
  { name: "Subscription Plans", href: ROUTES.subscription },
  { name: "Installation Guide", href: ROUTES.installation },
  { name: "Apps and Devices", href: ROUTES.apps },
  { name: "Best IPTV for Firestick", href: ROUTES.best },
  { name: "Reseller Panel", href: ROUTES.reseller },
  { name: "Blog", href: ROUTES.blog },
];

const supportLinks = [
  { name: "Contact Us", href: ROUTES.contact, external: false },
  { name: "Request a 24-Hour Trial", href: WHATSAPP_TRIAL_HREF, external: true },
  { name: "About Us", href: ROUTES.about, external: false },
  { name: "Privacy Policy", href: ROUTES.privacy, external: false },
  { name: "Terms of Service", href: ROUTES.terms, external: false },
  { name: "Refund Policy", href: ROUTES.refund, external: false },
  { name: "Copyright Policy", href: ROUTES.copyright, external: false },
];

export function B1GFooter() {
  return (
    <footer className="w-full section-glass border-t border-white/50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-100">
          <div className="md:col-span-6 flex flex-col items-start gap-4">
            <Link href={ROUTES.home} aria-label="Fire IPTV Hub home">
              <B1GLogo size="md" />
            </Link>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-sm">
              Fire IPTV Hub provides Firestick IPTV subscriptions with 20,000+ live channels, films, series, EPG support and guided installation for compatible Fire TV devices.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#12141F] mb-4">
              Pages
            </h4>
            <ul className="space-y-3">
              {pageLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#12141F] mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className={linkClass}>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs text-slate-400 font-semibold">
              Copyright © {new Date().getFullYear()} Fire IPTV Hub. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-400 leading-relaxed max-w-4xl">
              <strong>Disclaimer:</strong> Fire IPTV Hub is independent and is not affiliated with, endorsed by or sponsored by Amazon. Fire IPTV Hub supplies subscription login details and setup help for compatible player apps.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
