"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Plus, Minus, HelpCircle, Calendar, Tv } from "lucide-react";
import { HOME_PRICING_HREF, WHATSAPP_TRIAL_HREF } from "@/lib/routes";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "Is Firestick IPTV the same as an IPTV player?",
    answer:
      "No. Firestick IPTV refers to using an IPTV service on a compatible Fire TV device, while an IPTV player is the app used to display the service.\n\nYour setup normally has three separate parts: the Firestick, an IPTV player, and an IPTV subscription. The player displays the content, while the subscription provides the account and content access.",
  },
  {
    question: "Does IPTV work on every Firestick?",
    answer:
      "Not necessarily. Compatibility depends on the exact Fire TV model, operating system, and IPTV player you want to use.\n\nMost older Fire TV devices use Fire OS, while newer models such as the Fire TV Stick 4K Select use Vega OS and may require a different compatible application. If you are unsure about your device, check Settings → My Fire TV → About or contact support before ordering.",
  },
  {
    question: "Can I try the service before buying a subscription?",
    answer:
      "Yes. A 24-hour trial may be available to eligible new customers.\n\nThe trial lets you test the service on your own Firestick, television, IPTV player, and internet connection. This can be more useful than relying on someone else's device or connection when deciding whether the service suits you.",
  },
  {
    question: "When does my IPTV subscription begin?",
    answer:
      "The subscription begins when your account is activated after payment has been confirmed and any required compatibility information has been supplied.\n\nYour access details can include a username, password, server address, M3U playlist or EPG information, depending on the setup provided.",
  },
  {
    question: "Can I use one IPTV login on two televisions?",
    answer:
      "It depends on the simultaneous connection allowance included with your subscription.\n\nInstalling the same account on two Firesticks does not automatically mean you can stream on both at the same time. If you want to watch on multiple televisions simultaneously, confirm the required connection allowance with support before ordering.",
  },
  {
    question: "Do I need a VPN for IPTV on Firestick?",
    answer:
      "A VPN is not normally required for a legitimate IPTV service.\n\nSome users choose to use a VPN for general privacy, while others report trying one when they experience ISP-related access or buffering problems. However, a VPN cannot fix weak Wi-Fi, an overloaded device, or every streaming problem. Recent Reddit discussions show mixed experiences, with some users finding a VPN helpful and others finding that changing VPN servers or disabling the VPN made no difference.\n\nA VPN should also not be used to bypass copyright or territorial restrictions.",
  },
  {
    question: "Why is IPTV buffering on my Firestick even when my internet is fast?",
    answer:
      "A high internet speed does not automatically guarantee smooth IPTV playback.\n\nBuffering can involve several factors, including:\nWi-Fi signal strength\nNetwork congestion\nFirestick performance\nDevice storage\nIPTV player issues\nStream-specific problems\nRouter performance\nVPN performance, if one is being used\nProblems with the particular stream\n\nRecent Firestick discussions include users reporting buffering despite very high broadband speeds, which is why it is useful to check the Firestick, player and network rather than looking only at the headline internet speed.",
  },
  {
    question: "Can I watch IPTV in 4K?",
    answer:
      "Yes, where a 4K source is available and your subscription, Fire TV device, television, HDMI connection, and internet connection support 4K playback.\n\nFire IPTV Hub's Premium plans include available 4K sources. Not every channel or programme is produced in 4K, so having a 4K Firestick does not mean every stream will automatically play in 4K.",
  },
  {
    question: "What IPTV player should I use on Firestick?",
    answer:
      "The suitable player depends on your Fire TV model, operating system and the login method supported by your subscription.\n\nSome IPTV players support M3U playlists, while others can use Xtream Codes or other login methods. Player choice can also affect features such as EPG, favourites, search and playback controls.\n\nFire IPTV Hub can provide setup guidance based on your compatible device and subscription.",
  },
  {
    question: "What is the difference between M3U and Xtream Codes?",
    answer:
      "Both can be used to connect an IPTV subscription to a compatible player, but they use different setup methods.\n\nAn M3U playlist is normally added through a playlist URL.\n\nXtream Codes generally uses a username, password, and server address.\n\nThe method you should use depends on the player and the login details supplied with your subscription.",
  },
  {
    question: "Why is my IPTV EPG not showing or updating?",
    answer:
      "The EPG, or electronic programme guide, provides programme information for supported channels.\n\nIf it is not updating, first try refreshing the EPG inside your IPTV player. You can also restart the player, check your subscription details, and allow time for the programme information to load.\n\nEPG availability depends on the underlying source, so programme information may not be available for every channel.",
  },
  {
    question: "Is IPTV legal in the UK?",
    answer:
      "IPTV is a technology used to deliver television and video over the internet. The technology itself is not illegal.\n\nThe important issue is whether the particular content and service are properly authorised. UK government guidance distinguishes legitimate streaming from accessing copyrighted content without the necessary permission. Users should therefore make sure they have the right to access the content they watch.",
  },
  {
    question: "Is Fire IPTV Hub part of Amazon?",
    answer:
      "No. Fire IPTV Hub is an independent service and is not affiliated with, sponsored by, or endorsed by Amazon.\n\nAmazon Fire TV and Firestick are trademarks of Amazon and are used only to describe device compatibility.",
  },
  {
    question: "Do I need to install an IPTV app before buying a subscription?",
    answer:
      "Not necessarily.\n\nYou can first check your Firestick model and then choose a compatible player. After your subscription is activated, you can install the recommended player and enter the supplied login details.\n\nIf you are unsure which player is compatible with your Fire TV device, check with support before installation.",
  },
  {
    question: "Can I install my IPTV subscription on more than one Firestick?",
    answer:
      "You may be able to install the account on more than one compatible device, but installation and simultaneous streaming are not the same thing.\n\nYour connection allowance determines how many devices can use the account at the same time. Check the allowance before setting up multiple televisions.",
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
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed whitespace-pre-line">
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
              Frequently Asked{" "}
              <span className="text-brand-gradient font-bold">Questions</span>
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
              Find the Right IPTV Plan for Your{" "}
              <span className="text-brand-gradient font-bold">Firestick</span>
            </h2>
            <div className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-3xl mb-8 space-y-3">
              <p>If you want IPTV for your Amazon Fire TV device, start by checking your exact Firestick model.</p>
              <p>Then choose whether you want to test the service with an eligible 24-hour trial or select a subscription plan.</p>
              <p>You can get help with player selection, activation, and compatible Firestick setup.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link href={HOME_PRICING_HREF} className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-8 py-3.5 text-xs sm:text-sm font-semibold shine-effect"
                >
                  <Calendar className="mr-2 h-4 w-4 stroke-[2.5]" />
                  <span>View IPTV Plans</span>
                </Button>
              </Link>
              <a
                href={WHATSAPP_TRIAL_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-8 py-3.5 text-xs sm:text-sm font-semibold hover:bg-red-50"
                >
                  <Tv className="mr-2 h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                  <span>Request a 24-Hour Trial</span>
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
