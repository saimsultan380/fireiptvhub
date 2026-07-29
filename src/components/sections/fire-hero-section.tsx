"use client";

import React from "react";
import Link from "next/link";
import { MaskReveal } from "@/components/animation/mask-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { B1GHeroMockup } from "./b1g-hero-mockup";
import { Tv, Calendar } from "lucide-react";

export function FireHeroSection() {
  return (
    <div className="relative bg-white text-[#12141F] flex flex-col pb-8 sm:pb-12" data-hero>
      <div className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14">
        
        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="w-full" data-no-reveal>
              <MaskReveal
                trigger="mount"
                as="h1"
                className="text-h1-b1g leading-[1.15] font-bold tracking-tight"
                parts={[
                  { text: "Firestick IPTV Subscription Plans UK 2026 –" },
                  { text: "Flexible, Affordable & Built for Every Viewer", className: "text-brand-gradient font-bold" },
                ]}
              />
            </div>

            <FadeIn delay={0.22} duration={0.45} yOffset={14} className="w-full mt-4">
              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-black leading-relaxed">
                <p>
                  Your entertainment shouldn’t be locked into someone else’s schedule — or someone else’s contract. At Fire IPTV Hub UK, every Firestick IPTV subscription UK plan puts you in charge: stream for a single month, half a year, or a full twelve months, and switch or stop whenever it suits you.
                </p>
                <p>
                  Every plan carries the complete package from day one — premium live channels, the latest on-demand films and box sets, and full sports coverage in up to 4K quality. There are no locked tiers, no “premium add-ons” appearing at checkout, and no buffering when the big match kicks off. You pick a length and a picture quality; we handle everything else.
                </p>
                <p>
                  And because we know choosing a provider online takes trust, you don’t have to take our word for any of it. Request a free trial, test the service on your own Firestick tonight, and only pay once you’ve seen the quality yourself.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} duration={0.4} className="mt-8 w-full">
              <div className="flex flex-row items-center gap-2 sm:gap-4 w-full">
                <Link href="/contact/" className="flex-1 sm:flex-initial">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold whitespace-nowrap shine-effect"
                  >
                    <Tv className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 stroke-[2.5]" />
                    <span>Request a free trial</span>
                  </Button>
                </Link>

                <Link href="#pricing" className="flex-1 sm:flex-initial">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold whitespace-nowrap hover:bg-red-50"
                  >
                    <Calendar className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#E01E26] shrink-0 stroke-[2.5]" />
                    <span>View Subscription Plans</span>
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-6">
            <B1GHeroMockup />
          </div>
        </div>

        {/* MOBILE LAYOUT */}
        <div className="flex lg:hidden flex-col items-center gap-5 text-left">
          <div className="w-full">
            <div className="w-full" data-no-reveal>
              <MaskReveal
                trigger="mount"
                as="h1"
                className="text-h1-b1g leading-[1.15] font-bold tracking-tight"
                parts={[
                  { text: "Firestick IPTV Subscription Plans UK 2026 –" },
                  { text: "Flexible, Affordable & Built for Every Viewer", className: "text-brand-gradient font-bold" },
                ]}
              />
            </div>

            <FadeIn delay={0.22} duration={0.45} yOffset={14} className="w-full mt-3">
              <div className="space-y-3 text-xs text-black leading-relaxed">
                <p>
                  Your entertainment shouldn’t be locked into someone else’s schedule — or someone else’s contract. At Fire IPTV Hub UK, every Firestick IPTV subscription UK plan puts you in charge: stream for a single month, half a year, or a full twelve months, and switch or stop whenever it suits you.
                </p>
                <p>
                  Every plan carries the complete package from day one — premium live channels, the latest on-demand films and box sets, and full sports coverage in up to 4K quality. There are no locked tiers, no “premium add-ons” appearing at checkout, and no buffering when the big match kicks off. You pick a length and a picture quality; we handle everything else.
                </p>
                <p>
                  And because we know choosing a provider online takes trust, you don’t have to take our word for any of it. Request a free trial, test the service on your own Firestick tonight, and only pay once you’ve seen the quality yourself.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="w-full my-1">
            <B1GHeroMockup />
          </div>

          <FadeIn delay={0.15} duration={0.35} className="w-full">
            <div className="flex flex-col gap-2.5 w-full">
              <Link href="/contact/" className="w-full">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white py-3.5 text-xs font-semibold shine-effect"
                >
                  <Tv className="mr-2 h-4 w-4 shrink-0 stroke-[2.5]" />
                  <span>Request a free trial</span>
                </Button>
              </Link>

              <Link href="#pricing" className="w-full">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] py-3.5 text-xs font-semibold hover:bg-red-50"
                >
                  <Calendar className="mr-2 h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                  <span>View Subscription Plans</span>
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  );
}
