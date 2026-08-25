"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Tv, CheckCircle2 } from "lucide-react";

const threeParts = [
  "Fire TV Stick: The physical device connected to your television",
  "IPTV player: The application that organises and displays the content",
  "IPTV subscription: The account that provides your live channels and on-demand library",
];

export function HomeWhyChooseSection() {
  return (
    <section
      id="what-is-firestick-iptv"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            What Is{" "}
            <span className="text-brand-gradient font-bold">Firestick IPTV?</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
            Firestick IPTV delivers television through your internet connection to an Amazon Fire TV Stick or another compatible streaming device. Instead of connecting a satellite dish or television aerial, you open a player app and use the subscription details supplied by your provider.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
            Buying a Firestick does not automatically include an IPTV subscription. Installing a player app also does not provide channels by itself. Fire IPTV Hub supplies the subscription login and helps you connect it to a suitable player.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
            People searching for IPTV Firestick, Fire Stick IPTV or IPTV for Firestick are generally looking for this same setup.
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0">
                <Tv className="h-5 w-5 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F]">
                Three separate parts are involved
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {threeParts.map((item) => (
                <div key={item} className="flex items-start gap-2 p-3 rounded-[10px] bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
