"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MonitorPlay, Wrench, Calendar, MessageCircle, Tv, KeyRound } from "lucide-react";
import { HOME_PRICING_HREF, ROUTES } from "@/lib/routes";

const playerParts = [
  {
    label: "Firestick",
    body: "The physical streaming device.",
    icon: Tv,
  },
  {
    label: "IPTV player",
    body: "The application that displays and organises your content.",
    icon: MonitorPlay,
  },
  {
    label: "IPTV subscription",
    body: "The account that provides your channels and on-demand content.",
    icon: KeyRound,
  },
];

const playerFeatures = [
  "EPG",
  "Favourites",
  "Search",
  "Multiple playlists",
  "Remote-friendly navigation",
];

const installHelp = [
  "Identify your Fire TV model",
  "Choose a compatible player",
  "Install the player",
  "Enter your login correctly",
  "Refresh channels and the EPG",
  "Diagnose common playback problems",
];

export function HomeDevicesSection() {
  return (
    <>
      <section
        id="iptv-player-firestick"
        className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn className="w-full max-w-4xl mb-8">
            <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
              IPTV Player Firestick:{" "}
              <span className="text-brand-gradient font-bold">How Does It Work?</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
              An IPTV Player Firestick setup uses an application to display the content provided through your IPTV subscription.
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-800 font-bold leading-relaxed">
              The player and subscription are separate.
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
              Think of it this way:
            </p>
          </FadeIn>

          <FadeIn className="w-full mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {playerParts.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-[12px] border border-slate-200 bg-white p-5 shadow-[0_8px_24px_-16px_rgba(18,20,31,0.35)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-red-50 text-[#E01E26] mb-4">
                      <Icon className="h-5 w-5 stroke-[2]" />
                    </div>
                    <p className="text-sm sm:text-base font-bold text-[#12141F] mb-1.5">{item.label}</p>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">{item.body}</p>
                  </div>
                );
              })}
            </div>
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 space-y-4 shadow-[0_8px_24px_-16px_rgba(18,20,31,0.35)]">
              <p className="text-sm text-slate-600 font-semibold leading-relaxed">
                Some players support login methods such as Xtream Codes and M3U playlists. Player features can include EPG, favourites, search, multiple playlists, and remote-friendly navigation.
              </p>
              <div className="flex flex-wrap gap-2">
                {playerFeatures.map((item) => (
                  <span key={item} className="text-xs font-bold text-[#E01E26] bg-red-50 px-3 py-1.5 rounded-full border border-red-100">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-600 font-semibold leading-relaxed">
                There is no single player that is ideal for every Firestick user. The right choice depends on your Fire TV model, operating system, login format, and the features you want to use.
              </p>
              <p className="text-sm text-slate-600 font-semibold leading-relaxed">
                Fire IPTV Hub can help you identify a suitable player for your device and explain the setup process.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link href={HOME_PRICING_HREF} className="w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-6 py-3 text-xs sm:text-sm font-semibold shine-effect"
                  >
                    <Calendar className="mr-2 h-4 w-4 stroke-[2.5]" />
                    View Firestick IPTV Plans
                  </Button>
                </Link>
                <Link href={ROUTES.contact} className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-6 py-3 text-xs sm:text-sm font-semibold hover:bg-red-50"
                  >
                    <MessageCircle className="mr-2 h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section
        id="installation-help-and-choosing"
        className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn className="w-full">
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
        </div>
      </section>
    </>
  );
}
