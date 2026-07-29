"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowUpRight, Check } from "lucide-react";

interface PricingPlan {
  id: string;
  audience: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

const hdPlans: PricingPlan[] = [
  {
    id: "hd-1-month",
    audience: "First-time users",
    name: "Monthly Subscription",
    price: "£12",
    period: "/mo",
    features: ["20,000+ channels + VOD library"],
  },
  {
    id: "hd-3-months",
    audience: "Frequent streamers",
    name: "3 Months Subscription",
    price: "£20",
    period: "/3mo",
    features: ["Same content, better quality & extra European channels"],
  },
  {
    id: "hd-6-months",
    audience: "Sports lovers",
    name: "6 Months Subscription",
    price: "£35",
    period: "/6mo",
    features: ["Full HD / UHD, fastest servers, all sports & premium channels"],
  },
  {
    id: "hd-12-months",
    audience: "Long-term users",
    name: "12 Months Subscription",
    price: "£45",
    period: "/12mo",
    recommended: true,
    features: ["All features included"],
  },
];

const premium4KPlans: PricingPlan[] = [
  {
    id: "4k-1-month",
    audience: "First-time users",
    name: "Monthly Subscription",
    price: "£15",
    period: "/mo",
    features: ["20,000+ channels + VOD library"],
  },
  {
    id: "4k-3-months",
    audience: "Frequent streamers",
    name: "3 Months Subscription",
    price: "£30",
    period: "/3mo",
    features: ["Same content, better quality & extra European channels"],
  },
  {
    id: "4k-6-months",
    audience: "Sports lovers",
    name: "6 Months Subscription",
    price: "£45",
    period: "/6mo",
    features: ["Full HD / UHD, fastest servers, all sports & premium channels"],
  },
  {
    id: "4k-12-months",
    audience: "Long-term users",
    name: "12 Months Subscription",
    price: "£60",
    period: "/12mo",
    recommended: true,
    features: ["All features included"],
  },
];

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={`rounded-[12px] border bg-white p-6 flex flex-col justify-between h-full relative transition-all duration-200 hover:shadow-lg ${
        plan.recommended ? "border-[#E01E26] shadow-sm" : "border-slate-200"
      }`}
    >
      {plan.recommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border border-[#E01E26] text-[#E01E26] px-3.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase select-none shadow-xs">
          Recommended
        </span>
      )}

      <div>
        <p className="text-[11px] font-bold text-[#E01E26] uppercase tracking-wider mb-3">
          {plan.audience}
        </p>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-[10px] mb-4 shrink-0 ${
            plan.recommended ? "bg-red-50 text-[#E01E26]" : "bg-slate-50 text-slate-400"
          }`}
        >
          <Calendar className="h-5 w-5 stroke-[2]" />
        </div>

        <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-1 font-heading">
          {plan.name}
        </h3>

        <div className="flex items-baseline mb-6 mt-2">
          <span
            className={`font-heading text-[42px] leading-none sm:text-4xl font-extrabold tracking-tight ${
              plan.recommended ? "text-[#E01E26]" : "text-[#12141F]"
            }`}
          >
            {plan.price}
          </span>
          <span className="font-heading text-[10px] sm:text-[11px] font-semibold text-slate-400 ml-1.5">
            {plan.period}
          </span>
        </div>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                  plan.recommended ? "bg-[#E01E26] text-white" : "bg-red-50 text-[#E01E26]"
                }`}
              >
                <Check className="h-3 w-3 stroke-[3]" />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <Link href="/contact/">
          <Button
            variant="primary"
            className="w-full justify-between rounded-[12px] font-bold text-xs py-3 px-4 flex items-center bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white hover:opacity-95 border-0"
          >
            <span>Choose Plan</span>
            <ArrowUpRight className="h-4 w-4 shrink-0 stroke-[2.5]" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export function FirePricing() {
  const [planType, setPlanType] = useState<"standard" | "premium">("standard");

  return (
    <section
      id="pricing"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading">
            {planType === "standard" ? (
              <>
                Standard HD Plans – Affordable Firestick IPTV Subscription for{" "}
                <span className="text-brand-gradient font-bold">Everyday Viewing</span>
              </>
            ) : (
              <>
                Premium 4K Plans – Ultra HD Firestick IPTV Subscription for{" "}
                <span className="text-brand-gradient font-bold">Big Screens</span>
              </>
            )}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-3xl mx-auto">
            {planType === "standard"
              ? "Our HD range is where most viewers land, and for good reason: crisp Full HD streams, the complete channel list, and pricing that stays friendly whether you commit for a month or a year. These dependable Firestick IPTV subscription UK plans suit everyone from first-time streamers testing the waters to football fans who never miss a Saturday fixture — and they run smoothly on every Firestick device, including older models."
              : "Own a Fire TV Stick 4K or 4K Max and a television worth showing off? This is our IPTV Firestick subscription UK service at full power: ultra-fast dedicated servers, the complete sports lineup in razor-sharp detail, and thousands of channels in Ultra HD. Built for long-term users, movie lovers, and anyone who wants match day to look the way it does in the stadium."}
          </p>
        </FadeIn>

        <div className="w-full flex justify-center mb-12" data-no-reveal data-toggle>
          <div className="inline-flex items-center p-1.5 rounded-full bg-slate-100 border border-slate-200/90 shadow-inner select-none gap-2">
            <button
              type="button"
              onClick={() => setPlanType("standard")}
              aria-pressed={planType === "standard"}
              className={`px-7 sm:px-10 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${
                planType === "standard"
                  ? "bg-[#E01E26] text-white shadow-md"
                  : "bg-white text-slate-800 border border-slate-200/80 hover:text-[#E01E26]"
              }`}
            >
              Standard HD
            </button>

            <button
              type="button"
              onClick={() => setPlanType("premium")}
              aria-pressed={planType === "premium"}
              className={`px-7 sm:px-10 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${
                planType === "premium"
                  ? "bg-[#E01E26] text-white shadow-md"
                  : "bg-white text-slate-800 border border-slate-200/80 hover:text-[#E01E26]"
              }`}
            >
              Premium 4K
            </button>
          </div>
        </div>

        <div className="w-full" data-no-reveal>
          <div
            className={
              planType === "standard"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full"
                : "hidden"
            }
          >
            {hdPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
          <div
            className={
              planType === "premium"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full"
                : "hidden"
            }
          >
            {premium4KPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
