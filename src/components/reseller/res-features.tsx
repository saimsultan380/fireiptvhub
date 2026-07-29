"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { CreditCard, Tv, Smartphone, Download } from "lucide-react";

const worksOn = [
  {
    text: "Amazon Fire TV Stick & Firestick 4K Max",
    icon: Tv,
  },
  {
    text: "Android TVs, iOS devices, Mag boxes",
    icon: Smartphone,
  },
  {
    text: "IPTV Smarters Pro and other apps (via downloader codes)",
    icon: Download,
  },
];

const Tick = () => (
  <svg
    className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export function ResFeatures() {
  return (
    <section
      id="panel-features"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <FadeIn>
              <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading mb-4">
                Secure Firestick IPTV Service for{" "}
                <span className="text-brand-gradient font-bold">Your Clients</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed mb-6">
                Our Firestick IPTV service works on:
              </p>

              <ul className="space-y-3.5 mb-6 w-full">
                {worksOn.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                        <Icon className="h-3.5 w-3.5 stroke-[2]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug pt-1">
                        {item.text}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-6">
                Your clients will enjoy stable servers, zero buffering, and access to EPL, EFL, European IPTV channels, movies, and much more.
              </p>

              <Link href="/b1g-iptv-subscription/">
                <Button
                  variant="primary"
                  className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 py-3 text-xs sm:text-sm font-semibold"
                >
                  <CreditCard className="mr-2 h-4 w-4 stroke-[2.5]" />
                  <span>Get Firestick IPTV Subscription Plans</span>
                </Button>
              </Link>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 w-full">
            <FadeIn delay={0.1}>
              <div className="w-full rounded-[12px] border border-slate-200 bg-slate-50/50 p-6 flex flex-col justify-center min-h-[220px]">
                <div className="flex items-start gap-2 mb-3">
                  <Tick />
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    Secure Firestick IPTV UK streaming service with live TV, movies, sports and IPTV access across TV, laptop, tablet and mobile devices with instant activation in 2026.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
