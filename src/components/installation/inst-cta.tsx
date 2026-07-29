"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

export function InstCTA() {
  return (
    <section
      id="cta"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-12 text-center flex flex-col items-center">
          <span className="text-[11px] font-bold text-[#E01E26] uppercase tracking-wider mb-3">
            Enjoy Your Streaming
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#12141F] max-w-3xl font-heading mb-4">
            You&apos;re All Set – Start Streaming{" "}
            <span className="text-brand-gradient font-bold">Firestick IPTV</span>{" "}
            on Your Fire TV
          </h2>

          <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-slate-500 font-semibold leading-relaxed max-w-3xl mb-8">
            <p>
              That’s the complete installation done. Your Fire TV is now ready for live television, films, series, and even games — all controlled from one remote.
            </p>
            <p>
              With your Firestick IPTV UK subscription activated, thousands of channels are waiting: EPL IPTV and EFL IPTV for the football, Sky Sports, BeIN Sports and DAZN UK for everything else in sport, plus BBC, ITV and a full range of UK and international entertainment. Movie nights, match days, and kids’ TV — one device, one subscription. That’s IPTV for Fire TV done properly.
            </p>
          </div>

          <Link href="/b1g-iptv-subscription/" className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-8 py-3.5 text-xs sm:text-sm font-semibold shine-effect"
            >
              <CreditCard className="mr-2 h-4 w-4 stroke-[2.5]" />
              <span>Get Firestick IPTV Subscription</span>
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
