"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import {
  KeyRound,
  ListX,
  WifiOff,
  Tv,
  BookOpen,
  Download,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

const problems = [
  {
    title: "Invalid Login",
    text: "Check spelling, capital letters, symbols, spaces and the complete server address. Type the details manually once.",
    icon: KeyRound,
  },
  {
    title: "No Channels Loading",
    text: "Refresh the playlist, check the account expiry and confirm that the Firestick is online.",
    icon: ListX,
  },
  {
    title: "Every Channel Buffers",
    text: "Run a speed test on the Firestick, restart the router, reduce Wi-Fi distance and test a lower-resolution stream.",
    icon: WifiOff,
  },
  {
    title: "One Channel Is Not Working",
    text: "Try another channel in the same category. Report the affected channel, programme and exact time if the others work.",
    icon: Tv,
  },
  {
    title: "Empty Programme Guide",
    text: "Refresh the EPG from the player settings. Programme information may take several minutes and is not available for every source.",
    icon: BookOpen,
  },
  {
    title: "Downloader Cannot Install the File",
    text: "Confirm the device uses Fire OS, Downloader installation permission is enabled, enough storage is available, the code destination is working and the file is compatible with the operating system.",
    icon: Download,
    href: ROUTES.contact,
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
              Common Setup{" "}
              <span className="text-brand-gradient font-bold">Problems</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch w-full">
            {problems.map((item) => {
              const Icon = item.icon;
              const card = (
                <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-[#E01E26] mb-4 shrink-0">
                    <Icon className="h-5 w-5 stroke-[2]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#12141F] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600 leading-snug">
                    {item.text}
                  </p>
                </div>
              );

              if (item.href) {
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E01E26]/40 rounded-[12px]"
                    data-no-reveal
                  >
                    {card}
                  </Link>
                );
              }

              return (
                <div key={item.title} className="h-full">
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
