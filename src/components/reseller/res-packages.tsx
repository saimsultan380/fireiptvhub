"use client";

import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/animation/fade-in";

interface ResellerPanel {
  id: string;
  name: string;
  apps?: string[];
  image: string;
  codes: string[];
  credits: string[];
  minimum: string;
}

const panelsList: ResellerPanel[] = [
  {
    id: "8k-premium",
    name: "8K PREMIUM",
    apps: ["8K PREMIUM", "8K PLAYER VIP", "STRONG 8K PLAYER"],
    image: "/8k.jpg",
    codes: ["439873", "851720", "1240465", "1050263", "5811661"],
    credits: [
      "1 Credit = 1 Month",
      "3 Credit = 3 Months",
      "6 Credit = 6 Months",
      "12 Credit = 12 Months",
    ],
    minimum: "Minimum 120 Credit",
  },
  {
    id: "b1g-iptv",
    name: "B1G IPTV",
    apps: ["B1G IPTV", "B1G Player"],
    image: "/b1g.jpg",
    codes: ["4464458", "5060514"],
    credits: [
      "1 Credit = 1 Month",
      "3 Credit = 3 Months",
      "6 Credit = 6 Months",
      "12 Credit = 12 Months",
    ],
    minimum: "Minimum 100 Credit",
  },
  {
    id: "infinity-tv",
    name: "INFINITY TV UK",
    image: "/infinity.jpg",
    codes: ["6551793", "464482", "1364392"],
    credits: [
      "1 Credit = 1 Month",
      "3 Credit = 3 Months",
      "6 Credit = 6 Months",
      "12 Credit = 12 Months",
    ],
    minimum: "Minimum 100 Credit",
  },
  {
    id: "lion-ott",
    name: "LION OTT",
    image: "/lion.jpg",
    codes: ["150797"],
    credits: [
      "0.1 Credit = 1 Month",
      "0.3 Credit = 3 Months",
      "0.6 Credit = 6 Months",
      "1 Credit = 12 Months",
    ],
    minimum: "Minimum 10 Yearly Credit",
  },
  {
    id: "ultra-8k",
    name: "ULTRA 8K OTT",
    image: "/ultra-8k.png",
    codes: ["7114846", "4719136"],
    credits: [
      "1 Credit = 1 Month",
      "3 Credit = 3 Months",
      "6 Credit = 6 Months",
      "12 Credit = 12 Months",
    ],
    minimum: "Minimum 120 Credit",
  },
  {
    id: "t-rex",
    name: "T-REX OFFICIAL",
    image: "/iptv-trex.jpg",
    codes: ["2599771", "9216452", "2892546", "496164"],
    credits: [
      "1 Credit = 1 Month",
      "3 Credit = 3 Months",
      "6 Credit = 6 Months",
      "12 Credit = 12 Months",
    ],
    minimum: "Minimum 120 Credit",
  },
  {
    id: "gtv-sky-glass",
    name: "GTV SKY GLASS",
    image: "/skyglass.jpg",
    codes: ["721889", "407342", "231740"],
    credits: [
      "1 Credit = 1 Month",
      "3 Credit = 3 Months",
      "6 Credit = 6 Months",
      "12 Credit = 12 Months",
    ],
    minimum: "Minimum 120 Credit",
  },
  {
    id: "crystal",
    name: "CRYSTAL",
    image: "/crystal.jpg",
    codes: ["601344"],
    credits: [
      "0.1 Credit = 1 Month",
      "0.3 Credit = 3 Months",
      "0.6 Credit = 6 Months",
      "1 Credit = 12 Months",
    ],
    minimum: "Minimum 10 Yearly Credit",
  },
  {
    id: "max-ott",
    name: "MAX OTT",
    image: "/max-ott.jpg",
    codes: ["583349"],
    credits: [
      "3 Credit = 1 Month",
      "6 Credit = 3 Months",
      "9 Credit = 6 Months",
      "12 Credit = 12 Months",
    ],
    minimum: "Minimum 120 Yearly Credit",
  },
  {
    id: "golden-ott",
    name: "GOLDEN OTT",
    image: "/golden-ott.jpg",
    codes: ["8381615", "2257663", "9105073"],
    credits: [
      "0.1 Credit = 1 Month",
      "0.3 Credit = 3 Months",
      "0.6 Credit = 6 Months",
      "1 Credit = 12 Months",
    ],
    minimum: "Minimum 10 Yearly Credit",
  },
  {
    id: "extra-ott",
    name: "EXTRA OTT",
    image: "/extra-ott.jpg",
    codes: ["WILL BE UPDATED SOON"],
    credits: [
      "0.1 Credit = 1 Month",
      "0.3 Credit = 3 Months",
      "0.6 Credit = 6 Months",
      "1 Credit = 12 Months",
    ],
    minimum: "Minimum 10 Yearly Credit",
  },
  {
    id: "mega-ott",
    name: "MEGA OTT",
    image: "/mega-ott.jpg",
    codes: ["6712600"],
    credits: [
      "0.1 Credit = 1 Month",
      "0.3 Credit = 3 Months",
      "0.6 Credit = 6 Months",
      "1 Credit = 12 Months",
    ],
    minimum: "Minimum 10 Yearly Credit",
  },
  {
    id: "starshare",
    name: "STARSHARE",
    image: "/starshare.jpg",
    codes: ["4732470", "9575361"],
    credits: [
      "1 Credit = 1 Month",
      "3 Credit = 3 Months",
      "5 Credit = 6 Months",
      "10 Credit = 12 Months",
    ],
    minimum: "Minimum 10 Yearly Credit",
  },
  {
    id: "5g-live",
    name: "5G LIVE IPTV",
    image: "/5g-live.jpg",
    codes: ["481538"],
    credits: [
      "1 Credit = 1 Month",
      "3 Credit = 3 Months",
      "6 Credit = 6 Months",
      "12 Credit = 12 Months",
    ],
    minimum: "Minimum 120 Credit",
  },
  {
    id: "opplex",
    name: "OPPLEX",
    image: "/opplex-tv.jpg",
    codes: ["9083676"],
    credits: [
      "1 Credit = 1 Month",
      "3 Credit = 3 Months",
      "5 Credit = 6 Months",
      "10 Credit = 12 Months",
    ],
    minimum: "Minimum 10 Yearly Credit",
  },
  {
    id: "dream-4k",
    name: "DREAM 4K",
    image: "/dream-4k.jpg",
    codes: ["2548862"],
    credits: [
      "1 Credit = 1 Month",
      "3 Credit = 3 Months",
      "6 Credit = 6 Months",
      "12 Credit = 12 Months",
    ],
    minimum: "Minimum 120 Credit",
  },
  {
    id: "geo-iptv",
    name: "GEO IPTV",
    image: "/geo-iptv.jpg",
    codes: ["WILL BE UPDATED SOON"],
    credits: [
      "1 Credit = 1 Month",
      "3 Credit = 3 Months",
      "5 Credit = 6 Months",
      "10 Credit = 12 Months",
    ],
    minimum: "Minimum 10 Yearly Credit",
  },
  {
    id: "nexon-ott",
    name: "NEXON OTT",
    image: "/nexon.png",
    codes: ["978885", "798870"],
    credits: [
      "1 Credit = 1 Month",
      "3 Credit = 3 Months",
      "6 Credit = 6 Months",
      "12 Credit = 12 Months",
    ],
    minimum: "Minimum 120 Credit",
  },
  {
    id: "dino-4k",
    name: "DINO 4K",
    image: "/dyno.jpg",
    codes: ["8374888"],
    credits: [
      "1 Credit = 1 Month",
      "3 Credit = 3 Months",
      "6 Credit = 6 Months",
      "12 Credit = 12 Months",
    ],
    minimum: "Minimum 120 Credit",
  },
  {
    id: "magnum-ott",
    name: "MAGNUM OTT",
    image: "/magnum-ott.jpg",
    codes: ["8381615"],
    credits: [
      "0.1 Credit = 1 Month",
      "0.3 Credit = 3 Months",
      "0.6 Credit = 6 Months",
      "1 Credit = 12 Months",
    ],
    minimum: "Minimum 10 Yearly Credit",
  },
  {
    id: "platinum-ott",
    name: "Platinum OTT",
    image: "/platimun-ott.jpg",
    codes: ["7952708"],
    credits: [
      "0.1 Credit = 1 Month",
      "0.3 Credit = 3 Months",
      "0.6 Credit = 6 Months",
      "1 Credit = 12 Months",
    ],
    minimum: "Minimum 10 Yearly Credit",
  },
  {
    id: "4k-ott-pro-max",
    name: "4K OTT | PRO MAX",
    image: "/4k-ott.jpg",
    codes: ["936335"],
    credits: [
      "1 Credit = 1 Month",
      "3 Credit = 3 Months",
      "6 Credit = 6 Months",
      "12 Credit = 12 Months",
    ],
    minimum: "Minimum 120 Credit",
  },
  {
    id: "storm-ott",
    name: "STORM OTT",
    image: "/strom-iptv.webp",
    codes: ["5903011", "5152383"],
    credits: [
      "1 Credit = 1 Month",
      "3 Credit = 3 Months",
      "5 Credit = 6 Months",
      "10 Credit = 12 Months",
    ],
    minimum: "Minimum 120 Credit",
  },
  {
    id: "zum-tv",
    name: "ZUM TV",
    image: "/zum-tv.jpg",
    codes: ["7997525", "5481690", "6293347"],
    credits: [
      "1 Credit = 1 Month",
      "3 Credit = 3 Months",
      "5 Credit = 6 Months",
      "10 Credit = 12 Months",
    ],
    minimum: "Minimum 120 Credit",
  },
];

export function ResPackages() {
  return (
    <section
      id="reseller-packages"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-4">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading">
            IPTV PANELS &{" "}
            <span className="text-brand-gradient font-bold">APPLICATIONS</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full mb-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="text-[11px] font-bold text-[#E01E26] uppercase tracking-wider">
              DOWNLOADER CODES:
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-500">
              IPTV RESEELER PANEL CREDIT PLANS
            </span>
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch w-full">
            {panelsList.map((panel) => (
              <div
                key={panel.id}
                className="rounded-[12px] border border-slate-200 bg-white p-4 flex flex-col h-full transition-colors hover:border-slate-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-slate-100 bg-slate-50">
                    <Image
                      src={panel.image}
                      alt={panel.name}
                      fill
                      sizes="44px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-[#12141F] leading-snug font-heading truncate">
                      {panel.name}
                    </h3>
                    {panel.apps && panel.apps.length > 1 && (
                      <p className="text-[10px] text-slate-400 font-semibold leading-tight mt-0.5 truncate">
                        {panel.apps.join(" · ")}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Downloader Codes
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {panel.codes.map((code) => (
                      <span
                        key={code}
                        className={`inline-block px-1.5 py-0.5 rounded-md text-[10px] sm:text-xs font-bold leading-none ${
                          code === "WILL BE UPDATED SOON"
                            ? "bg-amber-50 text-amber-700 border border-amber-100"
                            : "bg-red-50 text-[#E01E26] border border-red-100"
                        }`}
                      >
                        {code}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-1 mb-3 flex-1">
                  {panel.credits.map((line) => (
                    <li
                      key={line}
                      className="text-[11px] sm:text-xs font-semibold text-slate-600 leading-snug"
                    >
                      {line}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-100 pt-2 mt-auto">
                  <span className="text-[11px] sm:text-xs font-bold text-[#12141F]">
                    {panel.minimum}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
