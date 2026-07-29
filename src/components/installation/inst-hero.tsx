"use client";

import React from "react";
import Link from "next/link";
import { B1GHeroMockup } from "@/components/sections/b1g-hero-mockup";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Tv } from "lucide-react";
import { MaskReveal } from "@/components/animation/mask-reveal";

export function InstHero() {
  return (
    <div className="relative section-glass-hero text-[#12141F] flex flex-col pb-8 sm:pb-12" data-hero>
      {/* Hero Section Main Container */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14">
        
        {/* DESKTOP LAYOUT (lg:grid lg:grid-cols-12) */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          
          {/* Left Column (Headline + Paragraphs + CTAs) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex flex-col items-start text-left">
              {/* Main H1 Headline with Skew Reveal — outside FadeIn */}
              <div className="w-full" data-no-reveal>
                <MaskReveal
                  trigger="mount"
                  as="h1"
                  className="text-h1-b1g leading-[1.15] font-bold tracking-tight"
                  parts={[
                    { text: "Fire TV Stick Installation Guide –" },
                    { text: "Easy Setup for All Firestick Models", className: "text-brand-gradient font-bold" },
                    { text: "(2026)" },
                  ]}
                />
              </div>

              {/* Body Copy */}
              <FadeIn delay={0.22} duration={0.45} yOffset={14}>
                <div className="hero-desc mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-black leading-relaxed">
                  <p>
                    Just unboxed a new Fire TV Stick and not sure where to start? You’re in exactly the right place. This Fire TV Stick installation guide takes you from the sealed box to your first live stream in around fifteen minutes — written in plain English, with no jargon and no steps skipped.
                  </p>
                  <p>
                    Everything below applies to every Firestick model: the Fire TV Stick Lite, Fire TV Stick HD, Fire TV Stick 4K, and Fire TV Stick 4K Max. Whether this is your first streaming device or you’re replacing an old one, the process is identical — connect the hardware, get online, and load your apps.
                  </p>
                  <p>
                    By the end of this guide, your Fire TV Stick setup will be complete, your Firestick IPTV apps installed through Downloader codes, and thousands of live channels ready to watch. And if you hit a snag at any point, our support team is one WhatsApp message away.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* CTAs */}
            <FadeIn delay={0.15} duration={0.4} className="mt-8 w-full">
              <div className="flex flex-row items-center gap-2 sm:gap-4 w-full">
                <Link href="/contact/" className="flex-1 sm:flex-initial">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap shine-effect"
                  >
                    <Tv className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-5 sm:w-5 shrink-0 stroke-[2.5]" />
                    <span>Free Firestick IPTV Trial UK</span>
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Column (App Preview Mockup Image) — no entrance animation */}
          <div className="lg:col-span-6">
            <B1GHeroMockup />
          </div>
        </div>

        {/* MOBILE & TABLET LAYOUT (< lg breakpoint, matching Mobile Reference exactly) */}
        <div className="flex lg:hidden flex-col items-center gap-6 text-left">
          
          {/* 1. Headline + Body Copy */}
          <div className="flex flex-col items-start text-left w-full">
            {/* Main H1 Headline with Skew Reveal — outside FadeIn */}
            <div className="w-full" data-no-reveal>
              <MaskReveal
                trigger="mount"
                as="h1"
                className="text-h1-b1g leading-[1.15] font-bold tracking-tight"
                parts={[
                  { text: "Fire TV Stick Installation Guide –" },
                  { text: "Easy Setup for All Firestick Models", className: "text-brand-gradient font-bold" },
                  { text: "(2026)" },
                ]}
              />
            </div>

            <FadeIn delay={0.22} duration={0.45} yOffset={14} className="w-full">
              <div className="hero-desc mt-4 space-y-3 text-xs sm:text-sm text-black leading-relaxed">
                <p>
                  Just unboxed a new Fire TV Stick and not sure where to start? You’re in exactly the right place. This Fire TV Stick installation guide takes you from the sealed box to your first live stream in around fifteen minutes — written in plain English, with no jargon and no steps skipped.
                </p>
                <p>
                  Everything below applies to every Firestick model: the Fire TV Stick Lite, Fire TV Stick HD, Fire TV Stick 4K, and Fire TV Stick 4K Max. Whether this is your first streaming device or you’re replacing an old one, the process is identical — connect the hardware, get online, and load your apps.
                </p>
                <p>
                  By the end of this guide, your Fire TV Stick setup will be complete, your Firestick IPTV apps installed through Downloader codes, and thousands of live channels ready to watch. And if you hit a snag at any point, our support team is one WhatsApp message away.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* 2. App Preview Mockup Image — visible on load */}
          <div className="w-full my-2">
            <B1GHeroMockup />
          </div>

          {/* 3. Stacked Full-Width CTA Buttons */}
          <FadeIn delay={0.15} duration={0.35} className="w-full">
            <div className="flex flex-col gap-3 w-full">
              <Link href="/contact/" className="w-full">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white py-3.5 text-xs sm:text-sm font-semibold"
                >
                  <Tv className="mr-2 h-4 w-4 shrink-0 stroke-[2.5]" />
                  <span>Free Firestick IPTV Trial UK</span>
                </Button>
              </Link>
            </div>
          </FadeIn>

        </div>

      </main>
    </div>
  );
}
