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
    question: "What is Firestick IPTV?",
    answer:
      "Firestick IPTV is an internet-based television service that allows you to stream live TV channels, sports, movies, TV series, and Video on Demand directly on your Fire TV Stick and other compatible devices.",
  },
  {
    question: "Is my Fire TV Stick compatible?",
    answer:
      "Yes. Our service supports: Fire TV Stick Lite, Fire TV Stick HD, Fire TV Stick 4K, Fire TV Stick 4K Max, and Fire TV Cube. It also works on Smart TVs, Android devices, Windows PCs, Macs, smartphones, tablets, and MAG boxes.",
  },
  {
    question: "How do I install IPTV on Firestick?",
    answer:
      "You can install IPTV on Firestick using IPTV Smarters Pro with Xtream Codes API or an M3U Playlist. We also provide complete installation guides, Downloader codes, and step-by-step tutorials to make setup simple for every user.",
  },
  {
    question: "Does Firestick IPTV subscription include live sports?",
    answer:
      "Yes. Every subscription includes premium sports coverage featuring major competitions and channels, including Premier League, Champions League, Formula 1, UFC, Boxing, Cricket, Sky Sports, DAZN, BBC, and ITV.",
  },
  {
    question: "Can I use IPTV on multiple devices?",
    answer:
      "Yes. Your subscription is compatible with Fire TV devices, Smart TVs, Android devices, Windows PCs, Macs, smartphones, tablets, and MAG boxes, allowing you to enjoy your entertainment across all supported devices.",
  },
  {
    question: "What is included in the Video on Demand library?",
    answer:
      "You'll get access to a vast VOD library containing blockbuster movies, complete TV series, documentaries, family entertainment, children's content, and regularly updated releases.",
  },
  {
    question: "Do you offer a Firestick IPTV Reseller Panel?",
    answer:
      "Yes. Our reseller panel allows you to start your own IPTV business with wholesale credits, instant account activation, and an easy-to-use management dashboard.",
  },
  {
    question: "How quickly is my Firestick IPTV subscription activated?",
    answer:
      "Your account is activated within minutes after payment is successfully completed. Login credentials and setup instructions are delivered directly to your email so you can begin streaming almost immediately.",
  },
];

export function HomeFAQSection() {
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
        data-reveal
        data-delay={String((absoluteIndex % 4) * 50)}
        className="rounded-[12px] border border-slate-200 bg-white overflow-hidden transition-all duration-200 select-none"
      >
        <button
          onClick={() => toggleFAQ(absoluteIndex)}
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
            isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
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
    <section
      id="faq"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Heading */}
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
            Firestick IPTV UK FAQs –{" "}
            <span className="text-brand-gradient font-bold">Everything You Need to Know</span>
          </h2>
        </FadeIn>

        {/* 2-Column Accordion */}
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
