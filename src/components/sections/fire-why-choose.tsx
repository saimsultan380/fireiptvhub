"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const whyChoosePoints = [
  "Plans starting from just £12 a month — and the price per month keeps dropping as your plan gets longer",
  "One account, every screen you own — Fire TV Stick, Fire TV Stick 4K, Fire TV Stick Max, Smart TVs, Android devices and more",
  "20,000+ live TV channels backed by 70,000+ movies and shows on demand, refreshed weekly",
  "Complete sports coverage — EPL IPTV, EFL IPTV, Sky Sports, BeIN Sports, DAZN UK, BBC and ITV, all under one iptv firestick subscription",
  "Instant setup after payment — your login details arrive in minutes, with 24/7 support standing behind them",
  "Nothing hidden, nothing locked in — no hidden fees, no long contracts, cancel anytime you like",
];

const Tick = () => (
  <svg
    className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-8 sm:mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading mb-4">
            What Makes Our Firestick IPTV Subscription Plans UK{" "}
            <span className="text-brand-gradient font-bold">Worth It in 2026?</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
            Great streaming shouldn’t demand a great budget — and it shouldn’t demand blind faith in marketing claims either. Here’s exactly what stands behind every iptv firestick plan we sell, whether it’s one month or twelve:
          </p>
        </FadeIn>

        <FadeIn className="w-full mb-8 sm:mb-10">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {whyChoosePoints.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 p-4 rounded-[12px] border border-slate-200 bg-white"
              >
                <Tick />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="w-full flex justify-start" data-no-reveal>
            <Link href="/contact/" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold shine-effect"
              >
                <MessageCircle className="mr-2 h-4 w-4 stroke-[2.5]" />
                <span>Chat with Support</span>
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
