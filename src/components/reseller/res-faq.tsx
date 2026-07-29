"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "What is an IPTV reseller panel and how does it work?",
    answer:
      "An IPTV reseller panel is a dashboard that lets you create and manage IPTV accounts for customers. You buy credits, convert them into subscriptions, and sell them at your own price.",
  },
  {
    question: "How much can I earn as an IPTV reseller?",
    answer:
      "Our IPTV reseller program offers high profit margins. You decide your own retail price (e.g. sell £9.99 plans at £14.99 and keep profit).",
  },
  {
    question: "Do I need technical knowledge to run an IPTV reseller business?",
    answer:
      "No technical setup required – we manage servers, you manage customers. All you need is an internet connection.",
  },
  {
    question: "What is the best IPTV reseller panel for Firestick and Smart TVs?",
    answer:
      "With Firestick IPTV reseller panels in the UK, you get a powerful IPTV panel, instant activation credits, and full control to create and manage customer accounts — plus reliable 4K streaming and 24/7 support.",
  },
  {
    question: "Can I offer free trials to my customers as a reseller?",
    answer:
      "Yes. Our reseller panels give you control over account creation (trial, monthly, yearly plans).",
  },
];

export function ResFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          onClick={() => toggleFAQ(absoluteIndex)}
          className="w-full flex items-center justify-between text-left p-5 gap-4 hover:bg-slate-50/50 transition-colors focus:outline-none"
        >
          <span className="text-sm sm:text-base font-bold text-[#12141F] leading-snug font-heading">
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
            isOpen ? "max-h-[280px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-5 pt-0 border-t border-slate-100/50 mt-1">
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
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
              FAQ
            </h3>
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Frequently Asked Questions{" "}
            <span className="text-brand-gradient font-bold">(FAQs)</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start w-full">
            <div className="flex flex-col gap-4 w-full">
              {leftColFaqs.map((faq, idx) => renderFaqItem(faq, idx))}
            </div>
            <div className="flex flex-col gap-4 w-full">
              {rightColFaqs.map((faq, idx) =>
                renderFaqItem(faq, idx + midIndex)
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
