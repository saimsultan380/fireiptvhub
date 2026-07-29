"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { MapPin, Mail, Phone } from "lucide-react";

const officeDetails = [
  {
    title: "Head office",
    value: "85 Burges Rd., London E6 2BJ",
    href: "https://maps.google.com/?q=85+Burges+Rd.,+London+E6+2BJ",
    icon: MapPin,
    external: true,
  },
  {
    title: "Email Support",
    value: "support@fireiptvhub.com",
    href: "mailto:support@fireiptvhub.com",
    icon: Mail,
    external: false,
  },
  {
    title: "Let's Talk",
    value: "+44 (784) 817 7296",
    href: "tel:+447848177296",
    icon: Phone,
    external: false,
  },
];

export function ConWhatToInclude() {
  return (
    <section
      id="head-office"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading">
            Head{" "}
            <span className="text-brand-gradient font-bold">office</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-500 font-semibold leading-relaxed">
            85 Burges Rd., London E6 2BJ
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch w-full">
            {officeDetails.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col h-full hover:border-[#E01E26]/30 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <Icon className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none font-heading">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed break-all">
                    {item.value}
                  </p>
                </a>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
