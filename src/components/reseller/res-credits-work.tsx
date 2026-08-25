"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";

const creditInfo = [
  "Credits are purchased in advance and added to the reseller panel.",
  "Creating or extending a subscription deducts the required number of credits.",
];

const beforePayment = [
  "Current credit price",
  "Minimum opening purchase",
  "Credits required for each duration",
  "Connection options",
  "Any credit-expiry terms",
  "Panel conditions",
  "Reseller refund rules",
  "Available support",
];

export function ResCreditsWork() {
  return (
    <section id="credits-work" className="w-full py-12 sm:py-20 section-glass border-t border-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-h2 font-bold text-[#12141F] mb-4">
            How Credits <span className="text-brand-gradient font-bold">Work</span>
          </h2>
          <ul className="space-y-3 mb-6">
            {creditInfo.map((item) => (
              <li key={item} className="text-xs sm:text-sm font-semibold text-slate-700">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs sm:text-sm font-bold text-[#12141F] mb-3">
            Before payment, the reseller should receive:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {beforePayment.map((item) => (
              <li key={item} className="text-xs sm:text-sm font-semibold text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
