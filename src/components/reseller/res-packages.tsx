"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";

const applicationFields = [
  "Full name",
  "Business or trading name",
  "Country",
  "Email",
  "WhatsApp number",
  "Website or sales channel",
  "Previous reseller experience",
  "Expected monthly customers",
  "Devices you can support",
  "Confirmation of lawful marketing",
  "Acceptance of reseller terms",
];

const processSteps = [
  "Submit your details — name, country, trading name, current sales channel and relevant experience.",
  "Receive the current offer — minimum credit purchase, panel tools, connection options and reseller conditions.",
  "Review the terms — credit, customer-data, support, refund and acceptable-use rules.",
  "Receive panel access after payment confirmation and verification.",
];

export function ResPackages() {
  return (
    <section id="reseller-packages" className="w-full py-12 sm:py-20 section-glass border-t border-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="mb-10">
          <h2 className="text-h2 font-bold text-[#12141F] mb-4">
            Application <span className="text-brand-gradient font-bold">Process</span>
          </h2>
          <ol className="space-y-4">
            {processSteps.map((step, idx) => (
              <li key={step} className="flex gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26] font-bold text-xs">
                  {idx + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </FadeIn>

        <FadeIn>
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#12141F] mb-4">Application Form</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {applicationFields.map((field) => (
                <li key={field} className="text-xs sm:text-sm font-semibold text-slate-700">{field}</li>
              ))}
            </ul>
            <Link href="/firestick-iptv-contact-us/#contact-form">
              <Button variant="primary" className="rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-6 py-3 text-sm font-semibold">
                Submit Reseller Application
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
