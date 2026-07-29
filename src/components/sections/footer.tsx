"use client";

import React from "react";
import Link from "next/link";
import { B1GLogo } from "@/components/brand/b1g-logo";

export function B1GFooter() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top half: Logo & Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-100">
          
          {/* Brand block (spans 6 cols on desktop) */}
          <div className="md:col-span-6 flex flex-col items-start gap-4">
            <B1GLogo size="md" />
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-sm">
              Fire IPTV Hub UK provides premium Firestick IPTV subscriptions with 20,000+ live TV channels, 70,000+ movies and TV shows, and 24/7 customer support.
            </p>
          </div>

          {/* Links Block 1: Navigation (spans 3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#12141F] mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E01E26] font-semibold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/b1g-iptv-subscription/"
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E01E26] font-semibold transition-colors"
                >
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/b1g-player-installation-guide/"
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E01E26] font-semibold transition-colors"
                >
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/#compatible-devices"
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E01E26] font-semibold transition-colors"
                >
                  Supported Devices
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Block 2: Support & Resellers (spans 3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#12141F] mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact/"
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E01E26] font-semibold transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/"
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E01E26] font-semibold transition-colors"
                >
                  Request a Free Trial
                </Link>
              </li>
              <li>
                <Link
                  href="/b1g-player-reseller/"
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E01E26] font-semibold transition-colors"
                >
                  Reseller Panel
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom half: Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs text-slate-400 font-semibold">
              Copyright © {new Date().getFullYear()} Fire IPTV Player, All rights reserved.
            </p>
            <p className="text-[11px] text-slate-400 leading-relaxed max-w-4xl">
              <strong>Disclaimer:</strong> Fire IPTV Hub is an IPTV subscription service. Users must use compatible player apps and login credentials supplied after activation to stream content.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
