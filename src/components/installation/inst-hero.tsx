"use client";

import React from "react";
import Link from "next/link";
import { B1GHeroMockup } from "@/components/sections/b1g-hero-mockup";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Tv } from "lucide-react";
import { MaskReveal } from "@/components/animation/mask-reveal";
import { ROUTES } from "@/lib/routes";

export function InstHero() {
  return (
    <div className="relative section-glass-hero text-[#12141F] flex flex-col pb-8 sm:pb-12" data-hero>
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14">
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="w-full" data-no-reveal>
              <MaskReveal
                trigger="mount"
                as="h1"
                className="text-h1-b1g leading-[1.15] font-bold tracking-tight"
                parts={[
                  { text: "How to Download and Install" },
                  { text: "IPTV on Firestick", className: "text-brand-gradient font-bold" },
                ]}
              />
            </div>

            <FadeIn delay={0.22} duration={0.45} yOffset={14}>
              <div className="hero-desc mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-black leading-relaxed">
                <p>
                  This guide explains how to identify your Fire TV operating system, install a compatible IPTV player and connect your Firestick IPTV subscription.
                </p>
                <p>
                  Allow approximately 10–15 minutes. You do not need to factory-reset the device or provide anyone with access to your Amazon account.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} duration={0.4} className="mt-8 w-full">
              <Link href={ROUTES.contact}>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm lg:text-base font-semibold shine-effect"
                >
                  <Tv className="mr-2 h-4 w-4 stroke-[2.5]" />
                  <span>Get Your Setup Details</span>
                </Button>
              </Link>
            </FadeIn>
          </div>

          <div className="lg:col-span-6">
            <B1GHeroMockup />
          </div>
        </div>

        <div className="flex lg:hidden flex-col items-center gap-6 text-left">
          <div className="w-full" data-no-reveal>
            <MaskReveal
              trigger="mount"
              as="h1"
              className="text-h1-b1g leading-[1.15] font-bold tracking-tight"
              parts={[
                { text: "How to Download and Install" },
                { text: "IPTV on Firestick", className: "text-brand-gradient font-bold" },
              ]}
            />
            <FadeIn delay={0.22} duration={0.45} yOffset={14} className="w-full mt-4">
              <div className="hero-desc space-y-3 text-xs sm:text-sm text-black leading-relaxed">
                <p>
                  This guide explains how to identify your Fire TV operating system, install a compatible IPTV player and connect your Firestick IPTV subscription.
                </p>
                <p>
                  Allow approximately 10–15 minutes. You do not need to factory-reset the device or provide anyone with access to your Amazon account.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="w-full my-2">
            <B1GHeroMockup />
          </div>

          <Link href={ROUTES.contact} className="w-full">
            <Button
              variant="primary"
              size="lg"
              className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white py-3.5 text-xs sm:text-sm font-semibold"
            >
              <Tv className="mr-2 h-4 w-4 stroke-[2.5]" />
              <span>Get Your Setup Details</span>
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
