"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Plus, Minus } from "lucide-react";

const faqList = [
  {
    question: "Is income guaranteed?",
    answer: "No. Results depend on your pricing, marketing, costs and customer service.",
  },
  {
    question: "Do you provide customers?",
    answer: "No. Resellers obtain their own customers through lawful marketing.",
  },
  {
    question: "Can I create unlimited trials?",
    answer: "No. Trials are subject to panel limits and anti-abuse controls.",
  },
  {
    question: "Can unused credits be refunded?",
    answer: "The terms are supplied before purchase. Used credits cannot normally be reversed unless deducted incorrectly or legal rights require a remedy.",
  },
  {
    question: "Is technical experience required?",
    answer: "You should understand player installation, login errors, device compatibility and basic buffering checks.",
  },
  {
    question: "Can I use the Fire IPTV Hub name?",
    answer: "Only as expressly permitted. Reseller status does not make you an employee, agent or official branch.",
  },
];

export function ResFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full py-12 sm:py-20 section-glass border-t border-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="mb-10">
          <h2 className="text-h2 font-bold text-[#12141F]">Reseller FAQs</h2>
        </FadeIn>
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {faqList.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.question} className="rounded-[12px] border border-slate-200 bg-white overflow-hidden">
                  <button type="button" onClick={() => setOpenIndex(isOpen ? null : idx)} className="w-full flex justify-between text-left p-5 gap-4">
                    <span className="text-sm font-bold text-[#12141F]">{item.question}</span>
                    {isOpen ? <Minus className="h-4 w-4 shrink-0" /> : <Plus className="h-4 w-4 shrink-0" />}
                  </button>
                  {isOpen && <p className="px-5 pb-5 text-xs sm:text-sm text-slate-500 font-semibold">{item.answer}</p>}
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
