"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Plus, Minus, HelpCircle, Calendar, Tv } from "lucide-react";
import { ROUTES } from "@/lib/routes";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "Is Firestick IPTV the same as an IPTV player?",
    answer:
      "No. The player is the app used to display your content. The subscription supplies the account and channel access.",
  },
  {
    question: "Is IPTV legal in the UK?",
    answer:
      "IPTV is a method of delivering television over the internet and is not illegal by itself. Legality depends on content rights and how a particular service is supplied and used. Only access content you are legally entitled to watch.",
  },
  {
    question: "Can I try the service first?",
    answer:
      "A 24-hour trial may be available to eligible new customers. Trials are normally limited to one per customer, household or device.",
  },
  {
    question: "Does it work on every Firestick?",
    answer:
      "No single app can be guaranteed on every Fire TV generation. Compatibility depends on the model, operating system and available player.",
  },
  {
    question: "Can I watch in 4K?",
    answer:
      "Yes, where the original source is available in 4K and your package, television, Fire TV device and internet connection support it.",
  },
  {
    question: "Do I need a VPN?",
    answer:
      "A VPN is not normally required for a legitimate service. It may be used for general privacy, but it will not repair weak Wi-Fi and must not be used to bypass content or territorial rights.",
  },
  {
    question: "Can I use one login on two televisions?",
    answer:
      "Only if your order includes enough simultaneous connections. Ask support before streaming concurrently on several devices.",
  },
  {
    question: "When does the subscription begin?",
    answer:
      "The subscription begins when the account is activated unless a different start time has been agreed.",
  },
  {
    question: "Is Fire IPTV Hub part of Amazon?",
    answer:
      "No. Fire IPTV Hub is independent and is not affiliated with, endorsed by or sponsored by Amazon.",
  },
];

export function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const midIndex = Math.ceil(faqList.length / 2);
  const leftColFaqs = faqList.slice(0, midIndex);
  const rightColFaqs = faqList.slice(midIndex);

  const renderFaqItem = (item: FAQItem, absoluteIndex: number) => {
    const isOpen = openIndex === absoluteIndex;
    return (
      <div
        key={absoluteIndex}
        className="rounded-[12px] border border-slate-200 bg-white overflow-hidden transition-all duration-200 select-none"
      >
        <button
          type="button"
          onClick={() => setOpenIndex(isOpen ? null : absoluteIndex)}
          className="w-full flex items-center justify-between text-left p-5 gap-4 hover:bg-slate-50/50 transition-colors focus:outline-none"
        >
          <span className="text-sm sm:text-base font-bold text-[#12141F] leading-snug">
            {item.question}
          </span>
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
              isOpen ? "bg-red-50 text-[#E01E26]" : "bg-slate-50 text-slate-400"
            }`}
          >
            {isOpen ? (
              <Minus className="h-3.5 w-3.5 stroke-[2.5]" />
            ) : (
              <Plus className="h-3.5 w-3.5 stroke-[2.5]" />
            )}
          </span>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-5 pt-0 border-t border-slate-100/50 mt-1">
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section
        id="faq"
        className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn className="w-full max-w-4xl mb-12">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                <HelpCircle className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#E01E26]">
                Support Center
              </h3>
            </div>
            <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
              Firestick IPTV{" "}
              <span className="text-brand-gradient font-bold">FAQs</span>
            </h2>
          </FadeIn>

          <FadeIn className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start w-full">
              <div className="flex flex-col gap-4 w-full">
                {leftColFaqs.map((faq, idx) => renderFaqItem(faq, idx))}
              </div>
              <div className="flex flex-col gap-4 w-full">
                {rightColFaqs.map((faq, idx) => renderFaqItem(faq, idx + midIndex))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Ready to Use — final CTA block from content order */}
      <section
        id="ready-cta"
        className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-12 text-center flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#12141F] max-w-2xl font-heading mb-4">
              Ready to Use IPTV on Your{" "}
              <span className="text-brand-gradient font-bold">Firestick?</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-3xl mb-8">
              Tell us which Fire TV model you use, whether your television is HD or 4K and how many screens you want to watch at the same time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link href={ROUTES.subscription} className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-8 py-3.5 text-xs sm:text-sm font-semibold shine-effect"
                >
                  <Calendar className="mr-2 h-4 w-4 stroke-[2.5]" />
                  <span>View Plans from £12</span>
                </Button>
              </Link>
              <Link href={ROUTES.contact} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-8 py-3.5 text-xs sm:text-sm font-semibold hover:bg-red-50"
                >
                  <Tv className="mr-2 h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                  <span>Request Your Trial</span>
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
