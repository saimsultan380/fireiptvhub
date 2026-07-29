"use client";

import React from "react";
import {
  Monitor,
  Smartphone,
  Tablet,
  Tv,
  Flame,
  Cpu,
  Laptop,
  Box,
} from "lucide-react";

interface DeviceItem {
  name: string;
  icon: React.ElementType;
}

const devices: DeviceItem[] = [
  { name: "Desktop", icon: Monitor },
  { name: "Smartphone", icon: Smartphone },
  { name: "Tablet", icon: Tablet },
  { name: "Fire TV Stick", icon: Flame },
  { name: "Smart TV", icon: Tv },
  { name: "Android TV", icon: Cpu },
  { name: "Mac / Laptop", icon: Laptop },
  { name: "MAG Box", icon: Box },
];

export function DeviceMarquee() {
  const marqueeItems = [...devices, ...devices, ...devices];

  return (
    <div className="w-full py-6 sm:py-10 bg-white border-t border-b border-slate-100 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E01E26]">
          Supported Across All Platforms &amp; Devices
        </p>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Moving Track */}
        <div className="flex gap-6 sm:gap-10 animate-marquee w-max hover:[animation-play-state:paused] items-center">
          {marqueeItems.map((device, idx) => {
            const Icon = device.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-red-50/40 hover:border-red-100 transition-colors shrink-0 min-w-[110px] sm:min-w-[130px]"
              >
                {/* Minimal Icon Box */}
                <div className="flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-xl bg-red-50 text-[#E01E26] shrink-0">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 stroke-[2]" />
                </div>

                {/* Label below Icon */}
                <span className="text-slate-800 font-bold text-xs sm:text-sm text-center leading-tight">
                  {device.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
