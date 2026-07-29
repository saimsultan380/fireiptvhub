"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Plug, Gamepad2, Headphones } from "lucide-react";

const fixes = [
  {
    text: "Try unplugging your Firestick for 10 seconds.",
    icon: Plug,
  },
  {
    text: "Reset or re-pair your Firestick remote if it’s not working.",
    icon: Gamepad2,
  },
  {
    text: "Or simply contact our support team for help.",
    icon: Headphones,
    href: "/contact/",
  },
];

export function InstQuickFixes() {
  return (
    <section
      id="quick-fixes"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading mb-4">
              Firestick Troubleshooting –{" "}
              <span className="text-brand-gradient font-bold">
                Quick Fixes for Common Problems
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Even a perfect Fire TV Stick setup hits the occasional bump. Before anything else, try these three fixes — they solve the vast majority of Firestick problems:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-stretch w-full">
            {fixes.map((item, idx) => {
              const Icon = item.icon;
              const card = (
                <div className="rounded-[12px] border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col items-center text-center h-full transition-colors hover:border-slate-300">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-b from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white shadow-sm mb-5 shrink-0">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 stroke-[2]" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#12141F] leading-snug">
                    {item.text}
                  </p>
                </div>
              );

              if (item.href) {
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E01E26]/40 rounded-[12px]"
                    data-no-reveal
                  >
                    {card}
                  </Link>
                );
              }

              return (
                <div key={idx} className="h-full">
                  {card}
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
