"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Film,
  Globe,
  MonitorSmartphone,
  Settings,
  BookOpen,
} from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "All Major Sports",
    description:
      "Premier League (EPL), EFL Championship, Sky Sports, DAZN and BeIN Sports — every big fixture, every competition, covered live. Sports fans on the 4Kiptv firestick subscription plans get it all in Ultra HD.",
  },
  {
    icon: Film,
    title: "Movies & TV Shows On Demand",
    description:
      'The newest cinema releases land in the library shortly after launch, joined by complete box sets and family favourites. With 70,000+ titles and weekly updates, the "nothing to watch" problem disappears.',
  },
  {
    icon: Globe,
    title: "Worldwide Channels",
    description:
      "Networks from the UK, USA, Europe, Asia, the Middle East and beyond — international news, entertainment and sport, all organised in one clean guide.",
  },
  {
    icon: MonitorSmartphone,
    title: "Multi-Device Support",
    description:
      "Your subscription isn't chained to one screen. Watch on your Firestick and Fire TV at home, then pick up on Smart TVs and mobile apps wherever you are.",
  },
  {
    icon: Settings,
    title: "Simple Setup",
    description:
      "A complete beginner-friendly walkthrough for installing IPTV Smarters Pro and using downloader codes — most customers go from payment to watching in about fifteen minutes.",
  },
];

export function FireFeatures() {
  return (
    <section
      id="features"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading">
            Every Firestick IPTV Subscription UK Comes{" "}
            <span className="text-brand-gradient font-bold">Fully Loaded</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col gap-4 h-full"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0">
                    <Icon className="h-5 w-5 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-snug font-heading">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="w-full flex justify-start" data-no-reveal>
            <Link href="/b1g-player-installation-guide/" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold shine-effect"
              >
                <BookOpen className="mr-2 h-4 w-4 stroke-[2.5]" />
                <span>View Installation Guide</span>
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
