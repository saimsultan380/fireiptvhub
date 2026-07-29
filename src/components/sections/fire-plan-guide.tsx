"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Tv } from "lucide-react";

const planRecommendations = [
  {
    plan: "1-Month Plan",
    label: "Testing the waters?",
    description:
      "The 1-Month Plan lets you judge the service properly — full channels, full library — with zero commitment.",
  },
  {
    plan: "3-Month Plan",
    label: "Watch a few evenings a week?",
    description:
      "The 3-Month Plan trims your monthly cost nicely without tying you down.",
  },
  {
    plan: "6-Month Premium Plan",
    label: "Live for the football?",
    description:
      "Sports fans wanting EPL IPTV, EFL IPTV and premium channels should pick the 6-Month Premium Plan — it covers a full half-season on our fastest servers.",
  },
  {
    plan: "12-Month Plan",
    label: "Want the best deal, full stop?",
    description:
      "The 12-Month Plan is the cheapest per month by a distance and covers you for the whole year — set it and forget it.",
  },
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
            Which IPTV Firestick Subscription UK Plan Is{" "}
            <span className="text-brand-gradient font-bold">Right for You?</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
            Not sure which IPTV Firestick subscription plan fits you best in 2026? Here’s the honest advice we give every customer who asks:
          </p>
        </FadeIn>

        <FadeIn className="w-full mb-8 sm:mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
            {planRecommendations.map((item, idx) => (
              <div
                key={idx}
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

        <FadeIn className="w-full">
          <div className="w-full flex justify-start" data-no-reveal>
            <Link href="/contact/" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold shine-effect"
              >
                <Tv className="mr-2 h-4 w-4 stroke-[2.5]" />
                <span>Get Free Firestick IPTV</span>
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
