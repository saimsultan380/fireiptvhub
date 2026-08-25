"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { CheckCircle2 } from "lucide-react";

const responsibilities = [
  "Be at least 18",
  "Follow applicable consumer and privacy laws",
  "Use truthful prices",
  "Explain app and subscription charges separately",
  "Describe 4K as available where supported",
  "Protect customer credentials",
  "Obtain marketing consent",
  "Explain refunds and cancellations",
  "Avoid unauthorised logos",
  "Avoid public credential sharing",
  "Support only permitted customer accounts",
];

export function ResFeatures() {
  return (
    <section id="panel-features" className="w-full py-12 sm:py-20 section-glass border-t border-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-h2 font-bold text-[#12141F] mb-4">
            Reseller <span className="text-brand-gradient font-bold">Responsibilities</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-5">
            Approved resellers must:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {responsibilities.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
