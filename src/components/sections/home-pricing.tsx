"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowUpRight, Check } from "lucide-react";
import { whatsappPlanHref } from "@/lib/routes";

interface PlanItem {
  name: string;
  price: string;
  period: string;
  tagline?: string;
  features: string[];
  recommended?: boolean;
}

const hdPlans: PlanItem[] = [
  {
    name: "1 month",
    price: "£12",
    period: "total",
    tagline: "Standard HD and Full HD.",
    features: ["20,000+ live channels", "Films and television series", "EPG on supported channels"],
  },
  {
    name: "3 months",
    price: "£20",
    period: "total",
    tagline: "Same core features.",
    features: ["20,000+ live channels", "Films and television series", "EPG on supported channels"],
  },
  {
    name: "6 months",
    price: "£35",
    period: "total",
    tagline: "Same core features.",
    features: ["20,000+ live channels", "Films and television series", "EPG on supported channels"],
  },
  {
    name: "12 months",
    price: "£45",
    period: "total",
    tagline: "Same core features.",
    recommended: true,
    features: ["20,000+ live channels", "Films and television series", "EPG on supported channels"],
  },
];

const premium4kPlans: PlanItem[] = [
  {
    name: "1 month",
    price: "£15",
    period: "total",
    features: ["HD, Full HD and available 4K", "20,000+ live channels", "Films and television series"],
  },
  {
    name: "3 months",
    price: "£30",
    period: "total",
    features: ["HD, Full HD and available 4K", "20,000+ live channels", "Films and television series"],
  },
  {
    name: "6 months",
    price: "£45",
    period: "total",
    features: ["HD, Full HD and available 4K", "20,000+ live channels", "Films and television series"],
  },
  {
    name: "12 months",
    price: "£60",
    period: "total",
    recommended: true,
    features: ["HD, Full HD and available 4K", "20,000+ live channels", "Films and television series"],
  },
];

function PricingCard({
  plan,
  packageType,
}: {
  plan: PlanItem;
  packageType: "Standard" | "Premium";
}) {
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
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-[10px] mb-4 shrink-0 ${
            plan.recommended ? "bg-red-50 text-[#E01E26]" : "bg-slate-50 text-slate-400"
          }`}
        >
          <Calendar className="h-5 w-5 stroke-[2]" />
        </div>

        <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-1">
          {plan.name}
        </h3>

        {plan.tagline && (
          <p className="text-xs text-slate-500 font-semibold mb-3">{plan.tagline}</p>
        )}

        <div className="flex items-baseline mb-6 mt-2">
          <span
            className={`font-heading text-[38px] leading-none sm:text-4xl font-extrabold tracking-tight ${
              plan.recommended ? "text-[#E01E26]" : "text-[#12141F]"
            }`}
          >
            {plan.price}
          </span>
          <span className="font-heading text-xs font-semibold text-slate-400 ml-1.5">
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
        <a
          href={whatsappPlanHref(plan.name, plan.price, packageType)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="primary"
            className="w-full justify-between rounded-[12px] font-bold text-xs py-3 px-4 flex items-center bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white hover:opacity-95 border-0"
          >
            <span>Order on WhatsApp</span>
            <ArrowUpRight className="h-4 w-4 shrink-0 stroke-[2.5]" />
          </Button>
        </a>
      </div>
    </div>
  );
}

export function HomePricingSection() {
  const [planType, setPlanType] = useState<"standard" | "premium">("standard");

  return (
    <section
      id="pricing"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Header & Subtitle */}
        <FadeIn className="w-full max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Firestick IPTV{" "}
            <span className="text-brand-gradient font-bold">Subscription Plans</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-semibold leading-relaxed max-w-2xl mx-auto">
            {planType === "standard"
              ? "Every duration within the same package includes the same core features. Choosing a longer subscription changes the expiry date and overall price—not the basic channel selection. Standard plans are suitable for everyday HD and Full HD viewing."
              : "Premium plans include access to the highest available stream quality, including supported 4K sources. Not every programme or channel is produced in 4K."}
          </p>
        </FadeIn>

        {/* Segmented Toggle */}
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
              Standard
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
              Premium
            </button>
          </div>
        </div>

        {/* Plan cards — both sets stay mounted so toggle never blanks out */}
        <div className="w-full" data-no-reveal>
          <div
            className={
              planType === "standard"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full"
                : "hidden"
            }
          >
            {hdPlans.map((plan, idx) => (
              <PricingCard key={`standard-${idx}`} plan={plan} packageType="Standard" />
            ))}
          </div>
          <div
            className={
              planType === "premium"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full"
                : "hidden"
            }
          >
            {premium4kPlans.map((plan, idx) => (
              <PricingCard key={`premium-${idx}`} plan={plan} packageType="Premium" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
