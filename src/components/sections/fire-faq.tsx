"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { ROUTES } from "@/lib/routes";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqList: FAQItem[] = [
  {
    question: "Does a longer plan include more channels?",
    answer:
      "No. Durations within the same package include the same core service. Only the expiry date and price change.",
  },
  {
    question: "Are the prices monthly payments?",
    answer:
      "No. The listed amount is the total prepaid price for the chosen duration.",
  },
  {
    question: "Is there a contract?",
    answer:
      "The subscription lasts for the selected prepaid period. There is no continuing commitment unless recurring billing is clearly agreed.",
  },
  {
    question: "Is the player included?",
    answer:
      "Setup guidance and compatible login details are included. A third-party player may charge a separate application licence.",
  },
  {
    question: "How quickly will I receive the account?",
    answer:
      "Activation begins after successful payment confirmation and compatibility checks. The details are then sent to the contact method used for the order.",
  },
  {
    question: "Can I upgrade from Standard to Premium?",
    answer:
      "Contact support. Any available upgrade and additional price will be explained before payment.",
  },
  {
    question: "Can I share my subscription?",
    answer:
      "No. Credentials must not be publicly shared or used beyond the purchased connection allowance.",
  },
  {
    question: "What happens at expiry?",
    answer:
      "The player app may remain installed, but subscription content stops loading until the account is renewed.",
  },
  {
    question: "How do I activate my subscription on Firestick?",
    answer: (
      <>
        Pay for your chosen plan and your login details arrive after activation. Install a compatible player using our{" "}
        <Link
          href={ROUTES.installation}
          className="text-[#E01E26] underline underline-offset-2 hover:opacity-80"
        >
          installation guide
        </Link>
        , enter your username, password and server address, and your channels load after the first update.
      </>
    ),
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
            isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
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
              FAQs
            </h3>
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading">
            Subscription{" "}
            <span className="text-brand-gradient font-bold">FAQs</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full mb-10">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ROUTES.contact}
              className="inline-flex items-center justify-center rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-6 py-3 text-xs sm:text-sm font-semibold"
            >
              Choose Your Plan
            </Link>
            <Link
              href={ROUTES.contact}
              className="inline-flex items-center justify-center rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-6 py-3 text-xs sm:text-sm font-semibold hover:bg-red-50"
            >
              Check Compatibility First
            </Link>
          </div>
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
