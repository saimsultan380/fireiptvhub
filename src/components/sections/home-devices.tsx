"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Tv, CheckCircle2 } from "lucide-react";

const installationGuides = [
  "How to install IPTV Smarters Pro on Firestick",
  "How to use Downloader Codes for IPTV apps",
  "How to connect IPTV using Xtream Codes",
  "How to connect IPTV using an M3U Playlist",
  "Step-by-step Firestick IPTV installation",
  "Fire TV Stick remote setup",
  "Troubleshooting common issues",
  "Tips to improve streaming performance",
  "How to reduce buffering",
  "Updating IPTV apps",
  "Complete IPTV configuration for Firestick",
];

export function HomeDevicesSection() {
  return (
    <section
      id="device-compatibility"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Heading */}
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Stream on Every Device with Our{" "}
            <span className="text-brand-gradient font-bold">Firestick IPTV Service</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
            Getting started is quick—even if you&apos;ve never used IPTV before.
            Our detailed installation tutorials cover everything you need.
          </p>
        </FadeIn>

        {/* Installation Guides List */}
        <FadeIn className="w-full mb-10">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-6">
              Installation Guides Include:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {installationGuides.map((guide, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-[10px] bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {guide}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn className="w-full flex justify-center">
          <Link href="/contact/">
            <Button
              variant="primary"
              size="lg"
              className="rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-8 py-3.5 text-sm sm:text-base font-semibold shine-effect"
            >
              <Tv className="mr-2 h-5 w-5 stroke-[2.5]" />
              <span>Firestick IPTV Free Trial UK</span>
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
