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
    question: "How do I set up my Fire TV Stick for the first time?",
    answer:
      "Insert the Firestick into your TV's HDMI port, power it from a wall socket, pair the remote by holding the Home button, join your WiFi network, and sign in with your Amazon account. The on-screen setup walks you through the rest in a few minutes.",
  },
  {
    question: "Can I install IPTV apps on Firestick?",
    answer:
      "Yes — every Firestick model supports IPTV apps. Enable Apps from Unknown Sources, install the free Downloader app, and use a downloader code to add IPTV Firestick players like IPTV Smarters Pro. The full steps are in Step 2 of the guide above.",
  },
  {
    question: "How do I reset my Fire TV Stick remote?",
    answer:
      "Hold the Home button for 10 seconds to force a re-pair. If that fails, remove the batteries for 60 seconds, put them back, and hold Home again while close to the TV. Persistent problems are usually solved by fresh batteries.",
  },
  {
    question: "Do I need a subscription for Firestick?",
    answer: (
      <>
        The Firestick itself only needs a free account. To watch live IPTV channels, sport and on-demand movies, you&apos;ll need a Firestick IPTV subscription — that&apos;s where your username and password come from. See our{" "}
        <Link
          href="/b1g-iptv-subscription/"
          className="text-[#E01E26] underline underline-offset-2 hover:opacity-80"
        >
          Subscription Plans
        </Link>{" "}
        page for current options and a free trial.
      </>
    ),
  },
  {
    question: "Why is my Firestick buffering or running slow?",
    answer:
      "Usually it's WiFi speed, low storage, or too many apps running in the background. Restart the stick, confirm your connection is 25 Mbps or faster, and clear your IPTV app's cache (Settings → Applications → Manage Installed Applications). If buffering continues, message our support team and we'll check your setup.",
  },
];

export function InstFAQ() {
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
              Most Popular Questions
            </h3>
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Fire TV Stick Installation FAQs –{" "}
            <span className="text-brand-gradient font-bold">Most Popular Questions</span>
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
