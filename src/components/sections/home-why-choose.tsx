"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import {
  Tv,
  Film,
  MonitorSmartphone,
  Sliders,
  Zap,
  Clock,
  ShieldCheck,
  Headphones,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

const entertainmentList = [
  "Blockbuster Movies",
  "Complete TV Series",
  "Documentaries",
  "Children's Channels",
  "International Networks",
  "Family Entertainment",
];

const devicesList = [
  "Fire TV Stick",
  "Fire TV Stick Lite",
  "Fire TV Stick HD",
  "Fire TV Stick 4K",
  "Fire TV Stick 4K Max",
  "Fire TV Cube",
  "Android TV",
  "Smart TVs",
  "MAG Boxes",
  "Windows",
  "Mac",
  "Smartphones",
  "Tablets",
];

const setupMethods = [
  "IPTV Smarters Pro",
  "Downloader App",
  "Xtream Codes API",
  "M3U Playlist",
];

export function HomeWhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Heading */}
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Why Thousands of UK Users Choose Our{" "}
            <span className="text-brand-gradient font-bold">Firestick IPTV Service in 2026</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
            Join thousands of satisfied users enjoying premium entertainment with reliable streaming and professional support.
          </p>
        </FadeIn>

        {/* 9 Feature Cards Grid */}
        <FadeIn className="w-full mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
            
            {/* Card 1 */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0">
                <Tv className="h-5 w-5 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F]">
                20,000+ Live TV Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Watch over <strong>20,000 live TV channels</strong> alongside a huge Video on Demand library with <strong>tens of thousands of movies and TV shows</strong>.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0">
                <Film className="h-5 w-5 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F]">
                Entertainment for Everyone
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-1">
                Enjoy unlimited access to:
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {entertainmentList.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#E01E26] shrink-0" />
                    <span className="text-xs font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0">
                <MonitorSmartphone className="h-5 w-5 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F]">
                Compatible with Every Device
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-1">
                Watch on all your favourite devices:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {devicesList.map((dev, idx) => (
                  <span key={idx} className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                    {dev}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0">
                <Sliders className="h-5 w-5 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F]">
                Easy Setup
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Whether you use an IPTV app or connect through a playlist, setup is quick and beginner-friendly.
              </p>
              <p className="text-xs font-bold text-slate-900 mt-1">Choose your preferred installation method:</p>
              <div className="grid grid-cols-2 gap-1.5">
                {setupMethods.map((method, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#E01E26] shrink-0" />
                    <span className="text-xs font-semibold text-slate-800">{method}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 5 */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0">
                <Zap className="h-5 w-5 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F]">
                High-Speed Streaming
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Enjoy smooth playback with powerful servers delivering <strong>99.9% uptime</strong>, even during major sporting events.
              </p>
            </div>

            {/* Card 6 */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0">
                <Clock className="h-5 w-5 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F]">
                Instant Activation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Receive your IPTV login credentials within minutes after completing your payment.
              </p>
            </div>

            {/* Card 7 */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0">
                <ShieldCheck className="h-5 w-5 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F]">
                Secure Payments
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Trusted checkout with secure payment methods and absolutely no hidden charges.
              </p>
            </div>

            {/* Card 8 */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0">
                <Headphones className="h-5 w-5 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F]">
                24/7 UK Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Need assistance? Our dedicated UK support team is available <strong>24 hours a day, 7 days a week</strong>.
              </p>
            </div>

            {/* Card 9 */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0">
                <Briefcase className="h-5 w-5 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F]">
                IPTV Reseller Opportunity
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Start your own IPTV business with our <strong>Firestick IPTV Reseller Panel</strong> and grow your income with wholesale reseller access.
              </p>
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
