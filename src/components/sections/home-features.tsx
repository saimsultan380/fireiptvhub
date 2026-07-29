"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Flame,
  Briefcase,
  Download,
  Trophy,
  Calendar,
  CheckCircle2,
} from "lucide-react";

const channelsLocations = ["United Kingdom", "USA", "Canada", "Europe", "International Networks"];
const formatsList = ["HD", "Full HD", "4K"];

const fireDevicesList = [
  "Fire TV Stick Lite",
  "Fire TV Stick HD",
  "Fire TV Stick 4K",
  "Fire TV Stick 4K Max",
  "Fire TV Cube",
  "Smart TVs",
  "Android TV",
  "Windows",
  "Mac",
  "Mobile Devices",
];

const resellerBenefits = [
  "Wholesale Credits",
  "Instant Customer Activations",
  "Easy-to-Use Dashboard",
  "Account Management Tools",
];

const easyInstallMethods = [
  "IPTV Smarters Pro",
  "Downloader Codes",
  "Xtream Codes API",
  "M3U Playlist",
];

const sportsList = [
  "Premier League",
  "UEFA Champions League",
  "Formula 1",
  "UFC",
  "Boxing",
  "Cricket",
  "Sky Sports",
  "DAZN",
  "BBC",
  "ITV",
];

export function HomeFeaturesSection() {
  return (
    <section
      id="features"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Heading */}
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Everything Included with Your{" "}
            <span className="text-brand-gradient font-bold">Firestick IPTV Subscription</span>
          </h2>
        </FadeIn>

        {/* 5 Features Cards Grid */}
        <FadeIn className="w-full mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
            
            {/* Feature 1 */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0 mb-4">
                  <Globe className="h-5 w-5 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-2">
                  20,000+ Live TV Channels Worldwide
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                  Watch channels from:
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {channelsLocations.map((loc, idx) => (
                    <span key={idx} className="text-xs font-medium text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md">
                      {loc}
                    </span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                  Available in:
                </p>
                <div className="flex gap-2">
                  {formatsList.map((fmt, idx) => (
                    <span key={idx} className="text-xs font-bold text-[#E01E26] bg-red-50 px-3 py-1 rounded-full border border-red-100">
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0 mb-4">
                  <Flame className="h-5 w-5 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-2">
                  Compatible with Every Fire TV Device
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                  Supports:
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {fireDevicesList.map((dev, idx) => (
                    <span key={idx} className="text-[11px] font-medium text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md">
                      {dev}
                    </span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#12141F]">
                  One account works across your entire entertainment setup.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0 mb-4">
                  <Briefcase className="h-5 w-5 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-2">
                  Firestick IPTV Reseller Panel
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-600 mb-3">
                  Launch your own IPTV business with our professional reseller platform.
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-900 mb-2">
                  Benefits include:
                </p>
                <div className="space-y-1.5">
                  {resellerBenefits.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#E01E26] shrink-0" />
                      <span className="text-xs font-semibold text-slate-800">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0 mb-4">
                  <Download className="h-5 w-5 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-2">
                  Easy Installation
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                  Install your subscription using:
                </p>
                <div className="grid grid-cols-2 gap-1.5 mb-4">
                  {easyInstallMethods.map((m, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#E01E26] shrink-0" />
                      <span className="text-xs font-semibold text-slate-800">{m}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#12141F]">
                  Most users are streaming within <strong>10 minutes</strong>.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between lg:col-span-2">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0 mb-4">
                  <Trophy className="h-5 w-5 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-2">
                  Premium Sports, Movies &amp; Entertainment
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                  Watch all your favourites, including:
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {sportsList.map((s, idx) => (
                    <span key={idx} className="text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#12141F]">
                  Plus thousands of movies and complete TV box sets.
                </p>
              </div>
            </div>

          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn className="w-full flex justify-center">
          <Link href="#pricing">
            <Button
              variant="primary"
              size="lg"
              className="rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-8 py-3.5 text-sm sm:text-base font-semibold shine-effect"
            >
              <Calendar className="mr-2 h-5 w-5 stroke-[2.5]" />
              <span>Get Subscription Plans</span>
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
