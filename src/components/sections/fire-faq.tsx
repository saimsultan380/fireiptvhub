"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqList: FAQItem[] = [
  {
    question: "How much does a Firestick subscription cost in the UK?",
    answer:
      "HD plans run from £12 for one month up to £45 for a full year, and 4K plans from £15 up to £60. The longer the plan, the lower your cost per month — the 12-month options are the best value we offer.",
  },
  {
    question: "What is the best IPTV subscription for Firestick?",
    answer:
      "The one that matches how you watch. HD plans suit everyday viewing on any Firestick model; 4K plans reward Fire TV Stick 4K and Max owners with sharper sport and movies. If you're unsure, start monthly and upgrade — or ask us on WhatsApp for a recommendation.",
  },
  {
    question: "Can I watch EPL and EFL games with my subscription?",
    answer:
      "Yes — every plan includes complete football coverage. Premier League, EFL Championship and European fixtures all stream through dedicated sports channels, in Full HD or 4K depending on your plan.",
  },
  {
    question: "How do I activate my subscription on Firestick?",
    answer: (
      <>
        Pay for your chosen plan and your login details arrive within minutes. Install IPTV Smarters Pro using our{" "}
        <Link
          href="/b1g-player-installation-guide/"
          className="text-[#E01E26] underline underline-offset-2 hover:opacity-80"
        >
          installation guide
        </Link>
        , enter your username, password and server URL, and your channels load straight away.
      </>
    ),
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. None of our plans carry contracts or automatic renewals — your plan simply runs to its end date, and renewing is always your choice.",
  },
];

export function FireFAQ() {
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
        data-no-reveal
      >
        <button
          type="button"
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
            isOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
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
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
              <HelpCircle className="h-4 w-4 stroke-[2]" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#E01E26]">
              FAQs
            </h3>
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading">
            Firestick IPTV Subscription Plans UK –{" "}
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
  );
}
