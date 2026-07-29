"use client";

import React from "react";
import Link from "next/link";
import { B1GHeroMockup } from "@/components/sections/b1g-hero-mockup";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { MessageSquare, Wifi, Smartphone, Tv, Heart } from "lucide-react";
import { MaskReveal } from "@/components/animation/mask-reveal";

const stats = [
  { value: "8,705", label: "Connection", sub: "Provided", icon: Wifi },
  { value: "480", label: "Phone", sub: "Users", icon: Smartphone },
  { value: "626", label: "TV", sub: "Channels", icon: Tv },
  { value: "9,114", label: "Happy", sub: "Customers", icon: Heart },
];

export function ConHero() {
  return (
    <div className="relative bg-white text-[#12141F] flex flex-col pb-8 sm:pb-12" data-hero>
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
                    { text: "Contact Firestick IPTV" },
                    { text: "Support", className: "text-brand-gradient font-bold" },
                  ]}
                />
              </div>

              <FadeIn delay={0.22} duration={0.45} yOffset={14}>
                <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-black leading-relaxed">
                  <p>
                    Have questions about your Firestick IPTV subscription, installation, or reseller panel? Our support team is here to help you 24/7.
                  </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.15} duration={0.4} className="mt-8 w-full">
              <div className="flex flex-row items-center gap-2 sm:gap-4 w-full">
                <Link href="#stay-in-touch" className="flex-1 sm:flex-initial">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap shine-effect"
                  >
                    <MessageSquare className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-5 sm:w-5 shrink-0 stroke-[2.5]" />
                    <span>Stay in Touch with Fire IPTV Hub</span>
                  </Button>
                </Link>
              </div>
            </FadeIn>

            {/* Stats Row — same trust-row arrangement, 4 stats from content */}
            <FadeIn delay={0.25} duration={0.4} className="mt-10 w-full max-w-xl">
              <div className="w-full rounded-2xl border border-slate-200 bg-white p-3 sm:p-4">
                <div className="grid grid-cols-4 divide-x divide-slate-200/90 text-center items-center">
                  {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.value}
                        className="flex flex-col items-center justify-center gap-1 px-1 sm:px-2"
                      >
                        <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26]">
                          <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.5]" />
                        </div>
                        <span className="text-xs lg:text-sm font-extrabold text-[#12141F] tracking-tight leading-none">
                          {stat.value}
                        </span>
                        <span className="text-[10px] lg:text-xs font-semibold text-slate-500 tracking-tight leading-tight">
                          {stat.label}
                          <br />
                          {stat.sub}
                        </span>
                      </div>
                    );
                  })}
                </div>
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
                  { text: "Contact Firestick IPTV" },
                  { text: "Support", className: "text-brand-gradient font-bold" },
                ]}
              />
            </div>

            <FadeIn delay={0.22} duration={0.45} yOffset={14} className="w-full">
              <div className="mt-4 space-y-3 text-xs sm:text-sm text-black leading-relaxed">
                <p>
                  Have questions about your Firestick IPTV subscription, installation, or reseller panel? Our support team is here to help you 24/7.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="w-full my-2">
            <B1GHeroMockup />
          </div>

          <FadeIn delay={0.15} duration={0.35} className="w-full">
            <div className="flex flex-col gap-3 w-full">
              <Link href="#stay-in-touch" className="w-full">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white py-3.5 text-xs sm:text-sm font-semibold"
                >
                  <MessageSquare className="mr-2 h-4 w-4 shrink-0 stroke-[2.5]" />
                  <span>Stay in Touch with Fire IPTV Hub</span>
                </Button>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} duration={0.35} className="w-full mt-2">
            <div className="w-full rounded-2xl border border-slate-200 bg-white p-3">
              <div className="grid grid-cols-2 gap-3 text-center items-center sm:grid-cols-4 sm:divide-x sm:divide-slate-200/90 sm:gap-0">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.value}
                      className="flex flex-col items-center justify-center gap-1 py-1"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26]">
                        <Icon className="h-3.5 w-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-xs font-extrabold text-[#12141F] tracking-tight leading-none">
                        {stat.value}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500 tracking-tight leading-tight">
                        {stat.label} {stat.sub}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>

      </main>
    </div>
  );
}
