"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Globe, Flame, Briefcase, Download, Calendar, CheckCircle2 } from "lucide-react";
import { ROUTES } from "@/lib/routes";

const channelCats = [
  "Entertainment",
  "News",
  "Sport",
  "Factual",
  "Children’s",
  "Lifestyle",
];
const formatsList = ["HD", "Full HD", "Available 4K"];
const qualityDepends = [
  "The original source quality",
  "Your selected package",
  "Your Fire TV model",
  "Your television",
  "Available broadband speed",
  "Wi-Fi stability",
];

export function HomeFeaturesSection() {
  return (
    <section
      id="what-is-included"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            What Is{" "}
            <span className="text-brand-gradient font-bold">Included?</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-stretch">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0 mb-4">
                <Globe className="h-5 w-5 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-2">
                20,000+ Live Channels
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-600 mb-3">
                Browse live television from the UK and other countries across entertainment, news, sport, factual, children’s and lifestyle categories.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {channelCats.map((loc) => (
                  <span key={loc} className="text-xs font-medium text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md">
                    {loc}
                  </span>
                ))}
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-600">
                The available lineup can change. If one particular channel matters to you, ask support to confirm its current availability before purchasing.
              </p>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0 mb-4">
                <Flame className="h-5 w-5 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-2">
                Films and Television Series
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-600">
                Your subscription also includes an on-demand library containing films, complete series, box sets, family viewing and other popular categories. New titles may be added and older titles may be removed as the library changes.
              </p>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0 mb-4">
                <Briefcase className="h-5 w-5 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-2">
                Electronic Programme Guide
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-600">
                An EPG is provided for supported channels, helping you see what is currently showing and what is scheduled next. Programme information depends on the original source and may not appear on every channel.
              </p>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0 mb-4">
                <Download className="h-5 w-5 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-2">
                HD, Full HD and Available 4K
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                Streams are offered in different resolutions. The picture displayed on your television depends on:
              </p>
              <div className="space-y-1.5 mb-4">
                {qualityDepends.map((m) => (
                  <div key={m} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#E01E26] shrink-0" />
                    <span className="text-xs font-semibold text-slate-800">{m}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {formatsList.map((fmt) => (
                  <span key={fmt} className="text-xs font-bold text-[#E01E26] bg-red-50 px-3 py-1 rounded-full border border-red-100">
                    {fmt}
                  </span>
                ))}
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#12141F]">
                A 4K television cannot turn an HD source into genuine 4K.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="w-full flex justify-center">
          <Link href={ROUTES.subscription}>
            <Button
              variant="primary"
              size="lg"
              className="rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-8 py-3.5 text-sm sm:text-base font-semibold shine-effect"
            >
              <Calendar className="mr-2 h-5 w-5 stroke-[2.5]" />
              <span>Compare All Subscription Plans</span>
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
