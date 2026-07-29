"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Zap,
  Headphones,
  CheckCircle2,
  MessageSquare,
  Mail,
  PhoneCall,
} from "lucide-react";

const weProvide = [
  { title: "Secure Payment Methods", icon: ShieldCheck },
  { title: "Fast Account Activation", icon: Zap },
  { title: "Professional Technical Support", icon: Headphones },
];

const needHelpWith = [
  "Installing IPTV on Firestick",
  "Configuring Fire TV Stick IPTV",
  "Subscription Renewal",
  "IPTV Reseller Panel",
];

const supportChannels = [
  { name: "Live Chat", icon: MessageSquare },
  { name: "Email", icon: Mail },
  { name: "WhatsApp", icon: PhoneCall },
];

export function HomePaymentsSupportSection() {
  return (
    <section
      id="payments-support"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Heading */}
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Secure Payments, Instant Activation &amp;{" "}
            <span className="text-brand-gradient font-bold">24/7 IPTV Support</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 font-bold leading-relaxed">
            Your privacy and security are always protected.
          </p>
        </FadeIn>

        {/* Content Box */}
        <FadeIn className="w-full mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-stretch">
            
            {/* Box 1: We Provide */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-4">
                  We provide:
                </h3>
                <div className="space-y-4">
                  {weProvide.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-[10px] bg-slate-50 border border-slate-100">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                          <Icon className="h-4 w-4 stroke-[2]" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">
                          {item.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Box 2: Need help with */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-4">
                  Need help with:
                </h3>
                <div className="space-y-3">
                  {needHelpWith.map((help, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#E01E26] shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {help}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Box 3: Support Availability */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-2">
                  24/7 Availability
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-4">
                  Our support team is available <strong>24/7</strong> through:
                </p>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {supportChannels.map((channel, idx) => {
                    const Icon = channel.icon;
                    return (
                      <div key={idx} className="flex flex-col items-center gap-1.5 p-3 rounded-[10px] bg-red-50/50 border border-red-100 text-center">
                        <Icon className="h-4 w-4 text-[#E01E26]" />
                        <span className="text-[11px] font-bold text-slate-800">{channel.name}</span>
                      </div>
                    );
                  })}
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed border-t border-slate-100 pt-3">
                  From installation to troubleshooting, we&apos;re committed to delivering uninterrupted entertainment every day.
                </p>
              </div>
            </div>

          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn className="w-full flex justify-center">
          <Link href="/contact/">
            <Button
              variant="primary"
              size="lg"
              className="rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-8 py-3.5 text-sm sm:text-base font-semibold shine-effect"
            >
              <Headphones className="mr-2 h-5 w-5 stroke-[2.5]" />
              <span>Contact Us</span>
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
