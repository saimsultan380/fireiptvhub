"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Package, ListChecks } from "lucide-react";

const whatYouNeed = [
  "Compatible Fire TV device",
  "Fire TV remote",
  "Original wall power adapter",
  "Stable internet connection",
  "Amazon account",
  "Exact player name",
  "Subscription username and password",
  "Complete server address or playlist link",
  "Phone or computer for reading the instructions",
];

const Tick = () => (
  <svg className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export function InstBeforeBegin() {
  return (
    <section id="before-begin" className="w-full py-12 sm:py-20 section-glass border-t border-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch w-full">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col h-full">
              <div className="flex items-start gap-2.5 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0 mt-0.5">
                  <Package className="h-4 w-4 stroke-[2]" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#12141F] font-heading leading-snug">
                  What You Need Before Starting
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-5">
                Have the following ready. Never provide your Amazon password, full card information or banking security code to an installer.
              </p>
              <ul className="space-y-3.5 flex-1">
                {whatYouNeed.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col h-full">
              <div className="flex items-start gap-2.5 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0 mt-0.5">
                  <ListChecks className="h-4 w-4 stroke-[2]" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#12141F] font-heading leading-snug">
                  Step 1: Identify Your Fire TV Model
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-4">
                Open Settings → My Fire TV → About and note the device name and software version.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-4">
                Most older models use Android-based Fire OS. The Fire TV Stick 4K Select uses Vega OS and requires compatible Vega or Fire TV applications. An ordinary Android APK should not be assumed to work on Vega OS.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                Step 2: Search the Amazon Appstore first. Installing the player from the Amazon Appstore is the preferred method. Avoid similarly named apps from unfamiliar developers.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
