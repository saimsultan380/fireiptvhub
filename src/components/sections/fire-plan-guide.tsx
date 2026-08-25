"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Tv } from "lucide-react";
import { ROUTES } from "@/lib/routes";

const planRecommendations = [
  {
    plan: "24-Hour Trial",
    label: "Start here",
    description:
      "Start here if you have not tested the service. Check compatibility, picture quality, navigation, programme information and performance during your usual viewing hours.",
  },
  {
    plan: "One Month",
    label: "Shortest paid commitment",
    description:
      "The one-month Firestick subscription provides the shortest paid commitment. It suits first-time customers who want more time after completing a trial.",
  },
  {
    plan: "Three Months",
    label: "Better monthly value",
    description:
      "This option offers better monthly value while keeping the commitment relatively short.",
  },
  {
    plan: "Six Months",
    label: "Regular viewers",
    description:
      "Suitable for regular viewers who have already confirmed that the service works well on their device and connection.",
  },
  {
    plan: "Twelve Months",
    label: "Lowest average monthly price",
    description:
      "The annual plan provides the lowest average monthly price. Choose it only after completing a trial or shorter subscription.",
  },
];

const freeMeans = [
  "A free player app",
  "A legitimate advertising-supported service",
  "A limited provider trial",
  "A public playlist",
  "An unauthorised login shared online",
];

const paidShouldProvide = [
  "A defined subscription period",
  "Individual login details",
  "A compatible installation method",
  "Clear connection limits",
  "A current channel check",
  "Customer support",
  "Cancellation and refund information",
  "A trial or short plan before a long commitment",
];

const Tick = () => (
  <svg
    className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export function FirePlanGuide() {
  return (
    <section
      id="plan-guide"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-8 sm:mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading mb-4">
            Which Duration Should{" "}
            <span className="text-brand-gradient font-bold">You Choose?</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
            {planRecommendations.map((item) => (
              <div
                key={item.plan}
                className="rounded-[12px] border border-slate-200 bg-white p-5 sm:p-6 flex flex-col gap-3 h-full"
              >
                <div className="flex items-start gap-2.5">
                  <Tick />
                  <div>
                    <p className="text-[11px] font-bold text-[#E01E26] uppercase tracking-wider mb-1.5">
                      {item.label}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-snug font-heading mb-2">
                      {item.plan}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="w-full mb-8">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-3">
              Free IPTV or a Paid Firestick TV Subscription?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-3">
              Free IPTV can refer to:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {freeMeans.map((item) => (
                <li key={item} className="text-xs sm:text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-4">
              These are very different products. A free player app does not normally include channels. Public playlists may stop working, contain unsafe links or offer no support when something fails.
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#12141F] mb-3">
              The best paid IPTV for Firestick should provide:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {paidShouldProvide.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <Tick />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="w-full flex justify-start" data-no-reveal>
            <Link href={ROUTES.contact} className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold shine-effect"
              >
                <Tv className="mr-2 h-4 w-4 stroke-[2.5]" />
                <span>Check Compatibility First</span>
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
