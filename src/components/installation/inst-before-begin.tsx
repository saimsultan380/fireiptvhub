"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Package, ListChecks } from "lucide-react";

const boxContents = [
  "Your Fire TV Stick — the streaming device itself",
  "The Fire TV Stick remote, with batteries already included",
  "A USB power cable and wall adapter — always power from the wall, not the TV",
  "An HDMI extender — a small but useful cable for when your TV’s HDMI port sits in a tight or awkward spot",
];

const whatYouNeed = [
  "Any Amazon Fire TV Stick model — Lite, HD, 4K, or 4K Max",
  "A TV with a free HDMI port — any modern television qualifies",
  "A working WiFi connection — 25 Mbps or faster keeps HD streaming smooth",
  "An Amazon account — the free version is all you need; you can create one during setup",
  "The USB power adapter from the box — TV USB ports often can’t supply enough power, causing random restarts",
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

export function InstBeforeBegin() {
  return (
    <section
      id="before-begin"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch w-full">
            {/* Card 1 — What's Inside the Box */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col h-full transition-colors hover:border-slate-300">
              <div className="flex items-start gap-2.5 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0 mt-0.5">
                  <Package className="h-4 w-4 stroke-[2]" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#12141F] font-heading leading-snug">
                  What&apos;s Inside the Box –{" "}
                  <span className="text-brand-gradient font-bold">Fire TV Stick Unboxing</span>
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-5">
                Open your Fire TV Stick box and you’ll find everything needed for installation — no extra purchases required:
              </p>

              <ul className="space-y-3.5 mb-5 w-full flex-1">
                {boxContents.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed pt-4 border-t border-slate-100">
                One tip most guides miss: keep the HDMI extender even if your port has plenty of room. Moving the stick a few inches away from the TV’s body can noticeably improve its WiFi reception.
              </p>
            </div>

            {/* Card 2 — What You'll Need */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col h-full transition-colors hover:border-slate-300">
              <div className="flex items-start gap-2.5 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0 mt-0.5">
                  <ListChecks className="h-4 w-4 stroke-[2]" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#12141F] font-heading leading-snug">
                  What You&apos;ll Need Before Setting Up Your{" "}
                  <span className="text-brand-gradient font-bold">Firestick</span>
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-5">
                Have these five things ready and the whole Fire TV Stick installation will run without a single pause:
              </p>

              <ul className="space-y-3.5 w-full flex-1">
                {whatYouNeed.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
