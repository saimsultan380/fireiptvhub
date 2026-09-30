"use client";

import React from "react";
import Link from "next/link";
import { MaskReveal } from "@/components/animation/mask-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { B1GHeroMockup } from "./b1g-hero-mockup";
import { Calendar, Tv } from "lucide-react";
import { HOME_PRICING_HREF, WHATSAPP_TRIAL_HREF } from "@/lib/routes";

const heroTitle = [
  { text: "Firestick IPTV UK | IPTV on Firestick" },
  { text: "Get IPTV for Fire TV", className: "text-brand-gradient font-bold" },
];

const heroPoints = [
  "20,000+ Live Channels",
  "Movies & Series",
  "EPG Support",
  "HD & Full HD",
  "Available in 4K",
  "Guided Installation",
];

function HeroCopy({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`hero-desc space-y-3 text-xs text-black leading-relaxed ${compact ? "" : "sm:space-y-4 sm:text-sm lg:text-base"}`}>
      <p>
        Choose a Firestick IPTV subscription for live television and on-demand entertainment on a compatible Amazon Fire TV device. Get the best Fire stick IPTV UK service for Amazon Fire TV devices, with live TV, movies, series, EPG support, and guided setup.
      </p>
      <p>
        Get access to 20,000+ live channels, films, complete series, programme-guide support, and HD, Full HD, and available 4K streams.
      </p>
      <p>
        Plans start from £12, with a 24-hour trial available to eligible new customers and guided installation for supported Fire TV models.
      </p>
      <div className="flex flex-wrap gap-1.5 pt-1">
        {heroPoints.map((point) => (
          <span
            key={point}
            className="text-[11px] font-semibold text-slate-700 bg-white/80 border border-slate-200 px-2.5 py-1 rounded-md"
          >
            {point}
          </span>
        ))}
      </div>
    </div>
  );
}

export function HomeHeroSection() {
  return (
    <div className="relative section-glass-hero text-[#12141F] flex flex-col pb-8 sm:pb-12" data-hero>
      <div className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14">
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="w-full" data-no-reveal>
              <MaskReveal
                trigger="mount"
                as="h1"
                className="text-h1-b1g leading-[1.15] font-bold tracking-tight"
                parts={heroTitle}
              />
            </div>

            <FadeIn delay={0.22} duration={0.45} yOffset={14} className="w-full mt-4">
              <HeroCopy />
            </FadeIn>

            <div className="mt-8 w-full">
              <div className="flex flex-row items-center gap-2 sm:gap-4 w-full">
                <Link href={HOME_PRICING_HREF} className="flex-1 sm:flex-initial">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold shine-effect whitespace-nowrap"
                  >
                    <Calendar className="mr-2 h-4 w-4 stroke-[2.5]" />
                    <span>View Firestick IPTV Plans</span>
                  </Button>
                </Link>
                <a
                  href={WHATSAPP_TRIAL_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-5 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold whitespace-nowrap hover:bg-red-50"
                  >
                    <Tv className="mr-2 h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                    <span>Request a 24-hour Free Trial</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <B1GHeroMockup />
          </div>
        </div>

        <div className="flex lg:hidden flex-col items-center gap-5 text-left">
          <div className="w-full">
            <div className="w-full" data-no-reveal>
              <MaskReveal
                trigger="mount"
                as="h1"
                className="text-h1-b1g leading-[1.15] font-bold tracking-tight"
                parts={heroTitle}
              />
            </div>

            <FadeIn delay={0.22} duration={0.45} yOffset={14} className="w-full mt-3">
              <HeroCopy compact />
            </FadeIn>
          </div>

          <div className="w-full my-1">
            <B1GHeroMockup />
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-2.5 w-full">
              <Link href={HOME_PRICING_HREF} className="w-full">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white py-3.5 text-xs font-semibold shine-effect"
                >
                  <Calendar className="mr-2 h-4 w-4 stroke-[2.5]" />
                  <span>View Firestick IPTV Plans</span>
                </Button>
              </Link>
              <a
                href={WHATSAPP_TRIAL_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] py-3.5 text-xs font-semibold hover:bg-red-50"
                >
                  <Tv className="mr-2 h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                  <span>Request a 24-hour Free Trial</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
