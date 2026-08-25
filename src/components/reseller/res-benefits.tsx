"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { CheckCircle2, XCircle } from "lucide-react";

const shouldApply = [
  "Understand common Firestick players",
  "Can explain Fire OS and Vega OS differences",
  "Can help customers enter login details",
  "Keep clear payment and expiry records",
  "Respond to support requests",
  "Market services lawfully",
  "Protect customer information",
  "Avoid misleading promises",
];

const shouldNotApply = [
  "Expect guaranteed earnings",
  "Plan to send unsolicited messages",
  "Intend to use fake reviews",
  "Cannot provide first-line support",
  "Want to impersonate Amazon or another business",
  "Plan to advertise zero buffering",
  "Intend to resell beyond permitted rights or territories",
];

export function ResBenefits() {
  return (
    <section id="benefits" className="w-full py-12 sm:py-20 section-glass border-t border-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-bold text-[#12141F] mb-4">Who Should Apply?</h2>
              <ul className="space-y-2">
                {shouldApply.map((item) => (
                  <li key={item} className="flex gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-[#E01E26] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[12px] border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-bold text-[#12141F] mb-4">Who Should Not Apply?</h2>
              <ul className="space-y-2">
                {shouldNotApply.map((item) => (
                  <li key={item} className="flex gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                    <XCircle className="h-4 w-4 text-red-500 shrink-0" />
                    {item}
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
