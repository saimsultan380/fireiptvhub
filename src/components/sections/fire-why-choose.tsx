"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { CheckCircle2 } from "lucide-react";

const standardIncludes = [
  "20,000+ live channels",
  "Films and television series",
  "HD and Full HD sources where available",
  "EPG on supported channels",
  "Compatible subscription login",
  "Installation instructions",
  "Activation support",
  "Help with common account and playback problems",
  "Access for the complete selected duration",
];

const premiumIncludes = [
  "20,000+ live channels",
  "Films and television series",
  "HD, Full HD and available 4K sources",
  "EPG on supported channels",
  "Compatible subscription login",
  "Firestick setup instructions",
  "Activation and account support",
  "Access for the complete selected duration",
];

/** Placed after pricing tables — matches content order: includes follow each plan set */
export function WhyChooseSection() {
  return (
    <section
      id="plan-includes"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-8 sm:mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading mb-4">
            Included with Every{" "}
            <span className="text-brand-gradient font-bold">Standard and Premium Plan</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
            Not every source is produced in 4K. Your television, Fire TV device, HDMI connection and broadband must also support 4K playback.
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6">
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-4">
                Included with Every Standard Plan
              </h3>
              <ul className="space-y-2">
                {standardIncludes.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[12px] border border-slate-200 bg-white p-6">
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-4">
                Included with Every Premium Plan
              </h3>
              <ul className="space-y-2">
                {premiumIncludes.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{point}</span>
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
