"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";

const panelFeatures = [
  "Create trials",
  "Create paid subscriptions",
  "Choose available durations",
  "Extend existing accounts",
  "View account expiry",
  "Track prepaid credits",
  "Manage customer records",
  "Disable accounts where necessary",
  "Receive service notices",
  "Escalate technical problems",
];

export function ResIntro() {
  return (
    <section id="programme-intro" className="w-full py-12 sm:py-20 section-glass border-t border-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn>
          <h2 className="text-h2 font-bold text-[#12141F] mb-4">
            What the Panel <span className="text-brand-gradient font-bold">Can Do</span>
          </h2>
          <p className="text-sm text-slate-500 font-semibold mb-6">
            Depending on the approved package, resellers may be able to:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {panelFeatures.map((item) => (
              <li key={item} className="text-xs sm:text-sm font-semibold text-slate-800 bg-white border border-slate-200 rounded-[10px] px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold">
            Panel features can change as the service is updated.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
