"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  DollarSign,
  Server,
  Wifi,
  TrendingUp,
  Headphones,
} from "lucide-react";

interface BenefitCard {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const benefitsList: BenefitCard[] = [
  {
    title: "Low investment, high profits",
    desc: "buy credits in bulk and sell subscriptions at your price",
    icon: DollarSign,
  },
  {
    title: "No technical setup required",
    desc: "we manage servers, you manage customers",
    icon: Server,
  },
  {
    title: "Work from anywhere",
    desc: "all you need is an internet connection",
    icon: Wifi,
  },
  {
    title: "Scalable business",
    desc: "start small and grow into hundreds of customers",
    icon: TrendingUp,
  },
  {
    title: "24/7 support",
    desc: "we support you so you can support your clients",
    icon: Headphones,
  },
];

export function ResBenefits() {
  return (
    <section
      id="benefits"
      className="w-full py-12 sm:py-20 bg-slate-50/50 border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading">
            Why Become Firestick IPTV{" "}
            <span className="text-brand-gradient font-bold">Reseller?</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
            {benefitsList.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full transition-colors hover:border-slate-300"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                        <Icon className="h-4 w-4 stroke-[2]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-snug font-heading">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mt-2">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
