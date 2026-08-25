"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { ShieldCheck, Zap, Clock, CheckCircle2 } from "lucide-react";

const beforeYouPay = [
  "Your exact Fire TV model",
  "Whether it uses Fire OS or Vega OS",
  "The compatible player",
  "Whether the player charges separately",
  "Your selected stream-quality package",
  "The current availability of important channels",
  "The number of simultaneous connections",
  "Your requested activation time",
];

const loginMayContain = [
  "Username",
  "Password",
  "Server address",
  "M3U playlist link",
  "EPG link",
  "App or portal instructions",
];

const renewalConfirm = [
  "Current expiry date",
  "Added duration",
  "New expiry date",
  "Package type",
  "Connection allowance",
  "Total payment",
];

const trialWhere = [
  "The customer is new",
  "A compatible player is installed or installable",
  "The request is for personal evaluation",
  "Previous trial access has not been used",
  "Trial capacity is available",
];

export function FireInstantActivation() {
  return (
    <section
      id="instant-activation"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full space-y-6">
        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#12141F] font-heading mb-6 text-center">
            Before You Pay, Activation &{" "}
            <span className="text-brand-gradient font-bold">Renewal</span>
          </h2>

          <h3 className="text-sm font-bold text-[#12141F] mb-3">Before You Pay — Confirm:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
            {beforeYouPay.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-sm font-bold text-[#12141F] mb-2">Account Activation</h3>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-3">
            Activation begins after payment has been confirmed and any required compatibility information has been supplied. Your login may contain:
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
            {loginMayContain.map((item) => (
              <li key={item} className="text-xs font-semibold text-slate-700 bg-slate-50 rounded-md px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs sm:text-sm font-bold text-[#12141F] mb-8">
            Keep this information private.
          </p>

          <h3 className="text-sm font-bold text-[#12141F] mb-2">Connection Allowance</h3>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-8">
            Installing an account on more than one device does not automatically allow simultaneous viewing. A one-connection subscription should not be streamed concurrently on two devices. Ask for the correct number of connections before ordering for several televisions.
          </p>

          <h3 className="text-sm font-bold text-[#12141F] mb-2">Renewal</h3>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-3">
            Plans are supplied for a fixed period. Unless recurring payment is expressly displayed and accepted, the subscription does not renew automatically. When renewing early, ask support to confirm:
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
            {renewalConfirm.map((item) => (
              <li key={item} className="text-xs font-semibold text-slate-700 bg-slate-50 rounded-md px-3 py-2">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-sm font-bold text-[#12141F] mb-2">Trial Conditions</h3>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-3">
            A trial may be available where:
          </p>
          <ul className="space-y-2 mb-4">
            {trialWhere.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
            A trial cannot guarantee permanent availability of a particular channel or programme.
          </p>

          <div className="w-full border-t border-slate-100 pt-6 mt-8">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-400 font-bold">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                <span>Secure Payments</span>
              </div>
              <span className="hidden sm:inline text-slate-200 select-none">•</span>
              <div className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                <span>Activation After Confirmation</span>
              </div>
              <span className="hidden sm:inline text-slate-200 select-none">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                <span>Setup Guidance Included</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
