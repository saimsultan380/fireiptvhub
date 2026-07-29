"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Coins, BookOpen } from "lucide-react";

const creditSteps = [
  "You buy credits from us (discounted bulk pricing)",
  "1 credit = 1 month subscription for your customer",
  "You decide your own retail price (e.g. sell £9.99 plans at £14.99 and keep profit)",
  "Use the reseller panel to activate accounts instantly",
];

export function ResCreditsWork() {
  return (
    <section
      id="credits-work"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                <Coins className="h-4 w-4 stroke-[2]" />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-[#12141F] leading-none font-heading">
                How Firestick IPTV Reseller Credits Work
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <ol className="space-y-4">
                  {creditSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 border border-red-100 text-[#E01E26] font-bold text-xs mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>

                <div className="mt-6">
                  <Link href="/b1g-player-installation-guide/">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-5 py-3 text-xs sm:text-sm font-semibold hover:bg-red-50"
                    >
                      <BookOpen className="mr-2 h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                      <span>Installation Guide</span>
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8">
                <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                  Firestick IPTV Reseller UK dashboard with IPTV reseller panel UK showing instant activation, reseller credits, account management, profit tracking and scalable business features for 2026.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
