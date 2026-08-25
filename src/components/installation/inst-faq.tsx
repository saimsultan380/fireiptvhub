"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqList = [
  {
    question: "Can I download IPTV on Firestick for free?",
    answer:
      "You can download free player apps and legitimate free streaming applications. A free player does not automatically include a paid channel subscription.",
  },
  {
    question: "Do I need Downloader?",
    answer:
      "Not if the correct player is available in the Amazon Appstore.",
  },
  {
    question: "What is the best IPTV Downloader code?",
    answer:
      "The safest code is one controlled by the app developer or subscription provider and checked regularly. Random permanent lists can become outdated.",
  },
  {
    question: "Can support install it remotely?",
    answer:
      "Support can guide you, but you should remain in control of the device. Never disclose your Amazon password.",
  },
  {
    question: "Can I use the same setup on two Firesticks?",
    answer:
      "You can install the player on both, but simultaneous viewing depends on your purchased connection allowance.",
  },
  {
    question: "Should I enable ADB debugging?",
    answer:
      "It is not normally necessary for an ordinary consumer player installation.",
  },
];

export function InstFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full py-12 sm:py-20 section-glass border-t border-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
              <HelpCircle className="h-4 w-4 stroke-[2]" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#E01E26]">
              Installation FAQs
            </h3>
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Common Setup{" "}
            <span className="text-brand-gradient font-bold">Questions</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start w-full">
            {faqList.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.question} className="rounded-[12px] border border-slate-200 bg-white overflow-hidden" data-no-reveal>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left p-5 gap-4 hover:bg-slate-50/50"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#12141F] leading-snug font-heading">
                      {item.question}
                    </span>
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isOpen ? "bg-red-50 text-[#E01E26]" : "bg-slate-50 text-slate-400"}`}>
                      {isOpen ? <Minus className="h-3.5 w-3.5 stroke-[2.5]" /> : <Plus className="h-3.5 w-3.5 stroke-[2.5]" />}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="px-5 pb-5 text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">{item.answer}</p>
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
