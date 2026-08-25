"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Film, MonitorSmartphone, Wrench } from "lucide-react";
import { ROUTES } from "@/lib/routes";

const installHelp = [
  "Identify your Fire TV model",
  "Choose a compatible player",
  "Install the player",
  "Enter your login correctly",
  "Refresh channels and the EPG",
  "Diagnose common playback problems",
];

const compareChecks = [
  "Compatibility with your exact Fire TV model",
  "Trial availability",
  "Current channel selection",
  "Player-app requirements",
  "Connection allowance",
  "Programme-guide coverage",
  "Picture quality",
  "Subscription duration",
  "Cancellation information",
  "Customer support",
];

const playerSections = [
  "Live television",
  "Films",
  "Series",
  "Favourites",
  "Recently watched channels",
  "Search",
  "Programme guide",
  "Parental controls",
];

export function HomeDevicesSection() {
  return (
    <section
      id="installation-help-and-choosing"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Firestick Installation Help */}
        <FadeIn className="w-full mb-12">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0">
                <Wrench className="h-5 w-5 stroke-[2]" />
              </div>
              <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
                Firestick Installation{" "}
                <span className="text-brand-gradient font-bold">Help</span>
              </h2>
            </div>
            <p className="text-sm text-slate-600 font-semibold leading-relaxed mb-5">
              You receive setup instructions with your activation details. Support can help you:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {installHelp.map((item) => (
                <div key={item} className="flex items-start gap-2 p-3 rounded-[10px] bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
            <Link href={ROUTES.installation}>
              <Button
                variant="outline"
                className="rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-6 py-3 text-sm font-semibold hover:bg-red-50"
              >
                Open Installation Guide
              </Button>
            </Link>
          </div>
        </FadeIn>

        {/* Choosing the Best + Why People Use */}
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0">
                  <Film className="h-5 w-5 stroke-[2]" />
                </div>
                <h2 className="text-base sm:text-lg font-bold text-[#12141F]">
                  Choosing the Best Firestick IPTV for Your Home
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                The best Firestick IPTV service is not necessarily the one displaying the largest channel number. It should work on your particular device, cover the categories you watch and provide clear help when something does not work.
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#12141F] mb-3">
                When comparing IPTV for Firestick, check:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                {compareChecks.map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#E01E26] shrink-0" />
                    <span className="text-xs font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mt-auto">
                A trial on your own Firestick and broadband connection is more useful than a performance claim based on somebody else’s equipment.
              </p>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0">
                  <MonitorSmartphone className="h-5 w-5 stroke-[2]" />
                </div>
                <h2 className="text-base sm:text-lg font-bold text-[#12141F]">
                  Why People Use IPTV on Firestick
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                A Fire TV Stick is compact and works with almost any television containing an available HDMI port. It can be moved between televisions and controlled with a familiar remote.
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#12141F] mb-3">
                A suitable IPTV player can organise a large library into clear sections, including:
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {playerSections.map((item) => (
                  <span key={item} className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mt-auto">
                Available player features vary between applications.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
