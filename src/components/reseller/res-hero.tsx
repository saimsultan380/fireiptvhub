"use client";

import React from "react";
import Link from "next/link";
import { B1GHeroMockup } from "@/components/sections/b1g-hero-mockup";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import { MaskReveal } from "@/components/animation/mask-reveal";

export function ResHero() {
  return (
    <div className="relative section-glass-hero text-[#12141F] flex flex-col pb-8 sm:pb-12" data-hero>
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14">
        
        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex flex-col items-start text-left">
              <div className="w-full" data-no-reveal>
                <MaskReveal
                  trigger="mount"
                  as="h1"
                  className="text-h1-b1g leading-[1.15] font-bold tracking-tight"
                  parts={[
                    { text: "Start Your IPTV Business Today with the Best" },
                    { text: "IPTV Reseller Panels", className: "text-brand-gradient font-bold" },
                    { text: "in UK 2026" },
                  ]}
                />
              </div>

              <FadeIn delay={0.22} duration={0.45} yOffset={14}>
                <div className="hero-desc mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-black leading-relaxed">
                  <p>
                    Want to earn money by selling Firestick IPTV subscriptions UK? With Firestick IPTV reseller panels in the UK, you can easily start your own IPTV business today. Our reseller platform gives you everything you need — a powerful IPTV panel, instant activation credits, and full control to create and manage customer accounts.
                  </p>
                  <p>
                    Whether you’re in the UK, Europe, or anywhere worldwide, our IPTV reseller program offers high profit margins, reliable 4K streaming, and 24/7 support. It’s the fastest way to grow your income and build a long-term IPTV business.
                  </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.15} duration={0.4} className="mt-8 w-full">
              <div className="flex flex-row items-center gap-2 sm:gap-4 w-full">
                <Link href="#reseller-packages" className="flex-1 sm:flex-initial">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap shine-effect"
                  >
                    <TrendingUp className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-5 sm:w-5 shrink-0 stroke-[2.5]" />
                    <span>Start Selling IPTV Today</span>
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-6">
            <B1GHeroMockup />
          </div>
        </div>

        {/* MOBILE & TABLET LAYOUT */}
        <div className="flex lg:hidden flex-col items-center gap-6 text-left">
          <div className="flex flex-col items-start text-left w-full">
            <div className="w-full" data-no-reveal>
              <MaskReveal
                trigger="mount"
                as="h1"
                className="text-h1-b1g leading-[1.15] font-bold tracking-tight"
                parts={[
                  { text: "Start Your IPTV Business Today with the Best" },
                  { text: "IPTV Reseller Panels", className: "text-brand-gradient font-bold" },
                  { text: "in UK 2026" },
                ]}
              />
            </div>

            <FadeIn delay={0.22} duration={0.45} yOffset={14} className="w-full">
              <div className="hero-desc mt-4 space-y-3 text-xs sm:text-sm text-black leading-relaxed">
                <p>
                  Want to earn money by selling Firestick IPTV subscriptions UK? With Firestick IPTV reseller panels in the UK, you can easily start your own IPTV business today. Our reseller platform gives you everything you need — a powerful IPTV panel, instant activation credits, and full control to create and manage customer accounts.
                </p>
                <p>
                  Whether you’re in the UK, Europe, or anywhere worldwide, our IPTV reseller program offers high profit margins, reliable 4K streaming, and 24/7 support. It’s the fastest way to grow your income and build a long-term IPTV business.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="w-full my-2">
            <B1GHeroMockup />
          </div>

          <FadeIn delay={0.15} duration={0.35} className="w-full">
            <div className="flex flex-col gap-3 w-full">
              <Link href="#reseller-packages" className="w-full">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white py-3.5 text-xs sm:text-sm font-semibold"
                >
                  <TrendingUp className="mr-2 h-4 w-4 shrink-0 stroke-[2.5]" />
                  <span>Start Selling IPTV Today</span>
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>

      </main>
    </div>
  );
}
