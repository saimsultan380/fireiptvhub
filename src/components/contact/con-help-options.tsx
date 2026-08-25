"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SUPPORT_EMAIL, WHATSAPP_HREF } from "@/lib/routes";

const trialUses = [
  "Fire TV device",
  "Player",
  "Television",
  "Internet connection",
  "Wi-Fi environment",
  "Preferred viewing time",
];

const whatToTest = [
  "Test several live categories",
  "Open a film or episode",
  "Check the EPG",
  "Add favourites",
  "Test during normal viewing hours",
  "Compare HD and available higher-quality streams",
  "Check remote navigation",
  "Ask support if anything is unclear",
];

export function ConHelpOptions() {
  return (
    <section id="stay-in-touch" className="w-full py-12 sm:py-20 section-glass border-t border-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-8">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading">
            Request a{" "}
            <span className="text-brand-gradient font-bold">24-Hour Trial</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
            A trial helps you test the service using your own:
          </p>
        </FadeIn>

        <FadeIn className="w-full mb-10">
          <div className="flex flex-wrap gap-2 mb-8">
            {trialUses.map((item) => (
              <span key={item} className="text-xs font-semibold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-md">
                {item}
              </span>
            ))}
          </div>

          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 mb-8">
            <h3 className="text-base font-bold text-[#12141F] mb-4">What to Test</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-3">During the trial:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {whatToTest.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[12px] border border-slate-200 bg-white p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle className="h-5 w-5 text-[#E01E26]" />
                <h3 className="font-bold text-[#12141F]">WhatsApp</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mb-4">
                Message support for trial requests and quick setup help.
              </p>
              <Button
                variant="primary"
                className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white"
              >
                WhatsApp <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="rounded-[12px] border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="h-5 w-5 text-[#E01E26]" />
                <h3 className="font-bold text-[#12141F]">Email</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mb-2 break-all">{SUPPORT_EMAIL}</p>
              <p className="text-xs text-slate-500 mb-4">Or complete the support form below.</p>
              <Link href="#contact-form">
                <Button
                  variant="outline"
                  className="w-full rounded-[12px] border-2 border-[#E01E26] text-[#12141F] hover:bg-red-50"
                >
                  Open Contact Form
                </Button>
              </Link>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
