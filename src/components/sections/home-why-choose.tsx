"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Tv, MonitorPlay, KeyRound, Layers, AlertCircle } from "lucide-react";

const threeParts = [
  {
    label: "Fire TV Stick",
    body: "The physical device connected to your television",
    icon: Tv,
  },
  {
    label: "IPTV player",
    body: "The application that organises and displays the content",
    icon: MonitorPlay,
  },
  {
    label: "IPTV subscription",
    body: "The account that provides your live channels and on-demand library",
    icon: KeyRound,
  },
];

const simpleParts = [
  {
    step: "01",
    label: "Fire TV device",
    body: "Your Firestick or Fire TV connects to your television and internet.",
    icon: Tv,
  },
  {
    step: "02",
    label: "IPTV player",
    body: "The IPTV player displays your channels, movies, series, and programme information.",
    icon: MonitorPlay,
  },
  {
    step: "03",
    label: "IPTV subscription",
    body: "Your subscription provides the account and content access.",
    icon: KeyRound,
  },
];

export function HomeWhatIsSection() {
  return (
      <section
        id="what-is-firestick-iptv"
        className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn className="w-full max-w-4xl mb-8">
            <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
              What Is{" "}
              <span className="text-brand-gradient font-bold">Firestick IPTV?</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
              Firestick IPTV delivers television through your internet connection to an Amazon Fire TV Stick or another compatible streaming device. Instead of relying on a traditional television connection, the Firestick connects to your internet connection and uses a compatible IPTV player to display the service.
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
              Buying a Firestick does not automatically include an IPTV subscription. Installing a player app also does not provide channels by itself. Fire IPTV Hub supplies the subscription login and helps you connect it to a suitable player.
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
              People searching for IPTV Firestick, Fire Stick IPTV, or IPTV for Firestick are generally looking for this same setup.
            </p>
          </FadeIn>

          <FadeIn className="w-full">
            <p className="text-sm font-bold text-[#12141F] mb-4">
              Three separate parts are involved
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {threeParts.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-[12px] border border-slate-200 bg-white p-5 shadow-[0_8px_24px_-16px_rgba(18,20,31,0.35)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-red-50 text-[#E01E26] mb-4">
                      <Icon className="h-5 w-5 stroke-[2]" />
                    </div>
                    <p className="text-sm sm:text-base font-bold text-[#12141F] mb-1.5">{item.label}</p>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>
  );
}

export function HomeMadeSimpleSection() {
  return (
      <section
        id="iptv-for-firestick-made-simple"
        className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn className="w-full mb-8">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0">
                <Layers className="h-5 w-5 stroke-[2]" />
              </div>
              <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
                IPTV for Fire Stick{" "}
                <span className="text-brand-gradient font-bold">Made Simple</span>
              </h2>
            </div>
            <p className="max-w-4xl text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
              Using IPTV on a Firestick involves three separate things: your Amazon Fire TV device, an IPTV player, and an IPTV subscription.
            </p>
          </FadeIn>

          <FadeIn className="w-full mb-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {simpleParts.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="relative rounded-[12px] border border-slate-200 bg-white p-5 overflow-hidden shadow-[0_8px_24px_-16px_rgba(18,20,31,0.35)]"
                  >
                    <span className="absolute top-4 right-4 text-[11px] font-bold tracking-wider text-[#E01E26]">
                      {item.step}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-gradient-to-br from-[#E01E26] to-[#B5121A] text-white mb-4">
                      <Icon className="h-5 w-5 stroke-[2]" />
                    </div>
                    <p className="text-sm sm:text-base font-bold text-[#12141F] mb-1.5">{item.label}</p>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn className="w-full">
            <div className="rounded-[12px] border border-red-100 bg-white p-5 sm:p-6 mb-4 shadow-[inset_4px_0_0_0_#E01E26]">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-[#E01E26] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm sm:text-base text-slate-800 font-bold leading-relaxed">
                    That distinction matters.
                  </p>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
                    Buying a Fire TV Stick does not automatically give you an IPTV subscription. Likewise, downloading an IPTV player does not provide channels by itself.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-[12px] border border-slate-200 bg-white p-5">
                <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
                  Fire IPTV Hub provides the subscription login and setup guidance needed to connect the service to a suitable player.
                </p>
              </div>
              <div className="rounded-[12px] border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
                  Whether you searched for Fire Stick IPTV, Fire Stick IPTV UK, IPTV Firestick, or IPTV for Firestick, the basic setup is the same: a compatible Fire TV device, a suitable player, and an active IPTV subscription.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
  );
}
