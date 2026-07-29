"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { ShieldCheck, Zap, Clock } from "lucide-react";

export function FireInstantActivation() {
  return (
    <section
      id="instant-activation"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-12 text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#12141F] max-w-3xl font-heading mb-4">
            Pay Securely, Get Activated{" "}
            <span className="text-brand-gradient font-bold">Instantly</span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-500 font-semibold leading-relaxed max-w-3xl mb-8">
            Choose your Firestick IPTV subscription plan and check out through trusted, secure payment methods — your details stay protected and no surprise charges follow. The moment payment clears, activation begins: your login, password and setup guide are delivered within minutes, whatever the hour. Order at midnight, stream by ten past.
          </p>

          <div className="w-full border-t border-slate-100 pt-6 mt-2">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-400 font-bold">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                <span>Secure Payments</span>
              </div>
              <span className="hidden sm:inline text-slate-200 select-none">•</span>
              <div className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                <span>Instant Activation</span>
              </div>
              <span className="hidden sm:inline text-slate-200 select-none">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                <span>Setup Guide in Minutes</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
