"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";

const panelGivesYou = [
  "Control over account creation (trial, monthly, yearly plans)",
  "Add or remove clients in seconds",
  "Full stats & control (user activity, expiry dates, device connections)",
  "Safe and stable IPTV service with 20,000+ channels and 70,000+ movies",
  "Live sports: EPL IPTV, EFL IPTV, Sky Sports, DAZN, BeIN Sports, BBC, ITV",
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

export function ResIntro() {
  return (
    <section
      id="programme-intro"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <FadeIn>
              <h2 className="text-h2 font-bold tracking-tight text-[#12141F] mb-4 font-heading">
                What is Firestick IPTV{" "}
                <span className="text-brand-gradient font-bold">Reseller Panel?</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed mb-4">
                An IPTV reseller panel is a special dashboard that allows you to create, sell, and manage IPTV subscriptions for your own customers. Instead of building servers or buying expensive systems, you simply purchase reseller credits and use them to generate accounts.
              </p>
              <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed mb-6">
                With Fire IPTV Hub UK, our reseller panels give you:
              </p>

              <ul className="grid grid-cols-1 gap-3 w-full mb-6">
                {panelGivesYou.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href="/contact/">
                <Button
                  variant="primary"
                  className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 py-3 text-xs sm:text-sm font-semibold"
                >
                  <Headphones className="mr-2 h-4 w-4 stroke-[2.5]" />
                  <span>Contact Us Our Support Team</span>
                </Button>
              </Link>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 w-full">
            <FadeIn delay={0.1}>
              <div className="w-full rounded-[12px] border border-slate-200 bg-slate-50/50 p-6 flex flex-col justify-center min-h-[220px]">
                <p className="text-[11px] font-bold text-[#E01E26] uppercase tracking-wider mb-2">
                  Firestick iptv reseller panel UK 2026
                </p>
                <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                  Firestick IPTV Reseller UK dashboard with IPTV reseller panel UK interface showing client growth, subscriptions, profits, scalable business tools, and reseller features for 2026.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
