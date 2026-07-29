"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  Tv,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Cpu,
  Flame,
} from "lucide-react";

const supportedDevices = [
  { name: "Fire TV Stick", icon: Flame },
  { name: "Fire TV Stick 4K", icon: Flame },
  { name: "Fire TV Stick Max", icon: Flame },
  { name: "Smart TVs", icon: Tv },
  { name: "Android Phones & Tablets", icon: Smartphone },
  { name: "Windows PC", icon: Monitor },
  { name: "Mac", icon: Laptop },
  { name: "Laptop", icon: Laptop },
  { name: "MAG Box", icon: Cpu },
];

export function FireDevices() {
  return (
    <section
      id="compatible-devices"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Heading */}
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Device{" "}
            <span className="text-brand-gradient font-bold">Compatibility</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            Supported Devices:
          </p>
        </FadeIn>

        {/* Devices Grid */}
        <FadeIn className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
            {supportedDevices.map((device, idx) => {
              const Icon = device.icon;
              return (
                <div
                  key={idx}
                  data-reveal
                  data-delay={String((idx % 4) * 50)}
                  className="flex items-center gap-3 p-4 rounded-[12px] border border-slate-100 bg-white"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Icon className="h-4 w-4 stroke-[2]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {device.name}
                  </span>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
