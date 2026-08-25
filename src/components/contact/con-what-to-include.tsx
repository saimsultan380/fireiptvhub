"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { CheckCircle2 } from "lucide-react";

const requiredInfo = [
  "First name",
  "Email or WhatsApp number",
  "Country",
  "Fire TV model",
  "Fire OS or Vega OS, if known",
  "Installed player, if any",
  "HD or 4K television",
  "Preferred start time",
  "Categories you want to test",
  "Required number of connections",
];

const existingSupport = [
  "Order reference",
  "Device model",
  "Player name",
  "Error message",
  "Affected channel or section",
  "Approximate time",
  "Whether other channels work",
  "Photograph with private details hidden",
];

export function ConWhatToInclude() {
  return (
    <section id="head-office" className="w-full py-12 sm:py-20 section-glass border-t border-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-h2 font-bold text-[#12141F] mb-4">
                Information Required for a Trial
              </h2>
              <ul className="space-y-2">
                {requiredInfo.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-h2 font-bold text-[#12141F] mb-4">
                Existing Customer Support
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4">
                Send the following details. Never send your Amazon password, full card number or banking verification code.
              </p>
              <ul className="space-y-2">
                {existingSupport.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
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
