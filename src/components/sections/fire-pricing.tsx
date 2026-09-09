"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowUpRight, Check } from "lucide-react";
import { whatsappPlanHref } from "@/lib/routes";

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
    audience: "£12.00 per month",
    name: "1 month",
    price: "£12",
    period: "total",
    features: ["Total price £12", "Standard HD and Full HD"],
  },
  {
    id: "hd-3-months",
    audience: "£6.67 per month",
    name: "3 months",
    price: "£20",
    period: "total",
    features: ["Total price £20", "Same core features"],
  },
  {
    id: "hd-6-months",
    audience: "£5.83 per month",
    name: "6 months",
    price: "£35",
    period: "total",
    features: ["Total price £35", "Same core features"],
  },
  {
    id: "hd-12-months",
    audience: "£3.75 per month",
    name: "12 months",
    price: "£45",
    period: "total",
    recommended: true,
    features: ["Total price £45", "Same core features"],
  },
];

const premium4KPlans: PricingPlan[] = [
  {
    id: "4k-1-month",
    audience: "£15.00 per month",
    name: "1 month",
    price: "£15",
    period: "total",
    features: ["Total price £15", "Premium 4K-ready"],
  },
  {
    id: "4k-3-months",
    audience: "£10.00 per month",
    name: "3 months",
    price: "£30",
    period: "total",
    features: ["Total price £30", "Available 4K sources"],
  },
  {
    id: "4k-6-months",
    audience: "£7.50 per month",
    name: "6 months",
    price: "£45",
    period: "total",
    features: ["Total price £45", "Available 4K sources"],
  },
  {
    id: "4k-12-months",
    audience: "£5.00 per month",
    name: "12 months",
    price: "£60",
    period: "total",
    recommended: true,
    features: ["Total price £60", "Available 4K sources"],
  },
];

function PricingCard({
  plan,
  packageType,
}: {
  plan: PricingPlan;
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
                Standard HD and Full HD Plans –{" "}
                <span className="text-brand-gradient font-bold">Everyday Viewing</span>
              </>
            ) : (
              <>
                Premium 4K-Ready Plans –{" "}
                <span className="text-brand-gradient font-bold">Highest Available Quality</span>
              </>
            )}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-3xl mx-auto">
            {planType === "standard"
              ? "Standard plans are suitable for everyday viewing on HD and Full HD televisions. The listed amount is the total prepaid price for the chosen duration."
              : "Premium plans include access to the highest available stream quality, including supported 4K sources. Not every programme or channel is produced in 4K."}
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
              <PricingCard key={plan.id} plan={plan} packageType="Standard" />
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
              <PricingCard key={plan.id} plan={plan} packageType="Premium" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
