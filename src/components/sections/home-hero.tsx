"use client";

import React from "react";
import Link from "next/link";
import { MaskReveal } from "@/components/animation/mask-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { B1GHeroMockup } from "./b1g-hero-mockup";
import { Tv } from "lucide-react";

export function HomeHeroSection() {
  return (
    <div className="relative bg-white text-[#12141F] flex flex-col pb-8 sm:pb-12" data-hero>
      <div className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14">
        
        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="w-full" data-no-reveal>
              <MaskReveal
                trigger="mount"
                as="h1"
                className="text-h1-b1g leading-[1.15] font-bold tracking-tight"
                parts={[
                  { text: "#1 Firestick IPTV UK –" },
                  { text: "Premium IPTV Subscription", className: "text-brand-gradient font-bold" },
                  { text: "for Fire TV Stick in 2026" },
                ]}
              />
            </div>

            <FadeIn delay={0.22} duration={0.45} yOffset={14} className="w-full mt-4">
              <div className="hero-desc space-y-4 text-xs sm:text-sm lg:text-base text-black leading-relaxed">
                <p>
                  What if one subscription covered every match, every movie night, and every channel your family actually watches? That’s exactly what Fire IPTV Hub UK delivers. Our Firestick IPTV subscription brings 20,000+ live channels, a huge on-demand library, and complete sports coverage to every Fire TV device — with activation that takes minutes, not days.
                </p>

                <p>
                  You won’t need any technical know-how either. The service runs beautifully through IPTV Smarters Pro and supports Xtream Codes API, M3U playlists, a full EPG, and Video on Demand (VOD). Whether you’re adding IPTV to Firestick for the very first time or moving over from a provider that couldn’t handle match day, setup is quick and our team guides you through it.
                </p>

                <p>
                  From the Fire TV Stick Lite right up to the Fire TV Stick 4K Max and Fire TV Cube, every model is fully supported — along with Smart TVs, Android devices, and more. If you’ve been hunting for the best Firestick IPTV or a dependable Fire TV Stick IPTV provider in the UK, your search ends here.
                </p>
              </div>
            </FadeIn>

            {/* CTAs */}
            <div className="mt-8 w-full">
              <Link href="/contact/">
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-7 py-3.5 text-xs sm:text-sm font-semibold shine-effect"
                >
                  <Tv className="mr-2 h-4 w-4 stroke-[2.5]" />
                  <span>Free Firestick IPTV Trial UK</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column Image Mockup */}
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
                  { text: "#1 Firestick IPTV UK –" },
                  { text: "Premium IPTV Subscription", className: "text-brand-gradient font-bold" },
                  { text: "for Fire TV Stick in 2026" },
                ]}
              />
            </div>

            <FadeIn delay={0.22} duration={0.45} yOffset={14} className="w-full mt-3">
              <div className="hero-desc space-y-3 text-xs text-black leading-relaxed">
                <p>
                  What if one subscription covered every match, every movie night, and every channel your family actually watches? That’s exactly what Fire IPTV Hub UK delivers. Our Firestick IPTV subscription brings 20,000+ live channels, a huge on-demand library, and complete sports coverage to every Fire TV device — with activation that takes minutes, not days.
                </p>

                <p>
                  You won’t need any technical know-how either. The service runs beautifully through IPTV Smarters Pro and supports Xtream Codes API, M3U playlists, a full EPG, and Video on Demand (VOD). Whether you’re adding IPTV to Firestick for the very first time or moving over from a provider that couldn’t handle match day, setup is quick and our team guides you through it.
                </p>

                <p>
                  From the Fire TV Stick Lite right up to the Fire TV Stick 4K Max and Fire TV Cube, every model is fully supported — along with Smart TVs, Android devices, and more. If you’ve been hunting for the best Firestick IPTV or a dependable Fire TV Stick IPTV provider in the UK, your search ends here.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Hero Mockup Image on Mobile */}
          <div className="w-full my-1">
            <B1GHeroMockup />
          </div>

          {/* CTAs on Mobile */}
          <div className="w-full">
            <Link href="/contact/" className="w-full">
              <Button
                variant="primary"
                size="lg"
                className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white py-3.5 text-xs font-semibold shine-effect"
              >
                <Tv className="mr-2 h-4 w-4 stroke-[2.5]" />
                <span>Free Firestick IPTV Trial UK</span>
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
