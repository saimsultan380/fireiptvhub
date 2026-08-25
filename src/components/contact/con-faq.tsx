"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqList = [
  {
    question: "Is the trial free?",
    answer: "An eligible 24-hour trial may be supplied without purchasing a plan.",
  },
  {
    question: "When does it begin?",
    answer: "It begins when activated. Choose a time when you are available to test it.",
  },
  {
    question: "Can I request another trial?",
    answer: "Trials are normally limited to one per customer, household or device.",
  },
  {
    question: "Does support need my Amazon password?",
    answer: "No. You should remain in control of your Amazon account.",
  },
  {
    question: "Can I renew before expiry?",
    answer: "Yes. Ask support to confirm the current and new expiry dates before paying.",
  },
  {
    question: "How do I report buffering?",
    answer: "Send the device, player, affected section, time and whether other channels work.",
  },
];

export function ConFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="contact-faq" className="w-full py-12 sm:py-20 section-glass border-t border-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <HelpCircle className="h-5 w-5 text-[#E01E26]" />
            <h2 className="text-h2 font-bold text-[#12141F]">Contact FAQs</h2>
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {faqList.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.question} className="rounded-[12px] border border-slate-200 bg-white overflow-hidden">
                  <button type="button" onClick={() => setOpenIndex(isOpen ? null : idx)} className="w-full flex justify-between text-left p-5 gap-4">
                    <span className="text-sm font-bold text-[#12141F]">{item.question}</span>
                    {isOpen ? <Minus className="h-4 w-4 shrink-0" /> : <Plus className="h-4 w-4 shrink-0" />}
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-5 text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">{item.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
