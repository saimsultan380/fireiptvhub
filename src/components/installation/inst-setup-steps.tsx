"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";

type SetupTab = "step1" | "step2";

const connectSteps: React.ReactNode[] = [
  "Push the Fire TV Stick into your TV’s HDMI port — use the extender if the fit is tight.",
  "Connect the power cable to the stick and plug the adapter into a wall socket.",
  "Switch your TV to the matching HDMI input using your TV remote.",
  "Wait for the Fire TV logo, then pair your Firestick remote — it usually connects automatically, but holding the Home button for 10 seconds pairs it manually.",
  "Choose your language, connect to your WiFi network, and sign in with your Amazon account.",
  "Decline the optional subscription offers Amazon shows during setup — none of them are required for IPTV.",
  "Your Fire TV home screen is now live. On to the apps.",
];

const installSteps: React.ReactNode[] = [
  <>
    First, allow outside apps: go to <strong>Settings</strong> → <strong>My Fire TV</strong> →{" "}
    <strong>Developer Options</strong> and switch on <strong>Apps from Unknown Sources</strong>.
    Can’t see Developer Options? Open <strong>Settings</strong> → <strong>My Fire TV</strong> →{" "}
    <strong>About</strong> and click your device name seven times to reveal it.
  </>,
  <>
    From the home screen, open the <strong>App Store</strong> (or use Find → Search) and search for{" "}
    <strong>Downloader by AFTVnews</strong> — the orange icon.
  </>,
  <>
    Install <strong>Downloader</strong> and open it.
  </>,
  "Enter the Downloader Codes for Firestick to fetch your streaming apps — including the IPTV Smarters downloader code, the best movie apps for Firestick, and other trusted IPTV Firestick apps. Message us for the current working codes.",
  <>
    Once your IPTV app is installed, you’ll need a <strong>username</strong> and{" "}
    <strong>password</strong> to unlock live channels and movies.
  </>,
  <>
    To get yours,{" "}
    <Link href="/contact/" className="text-[#E01E26] underline underline-offset-2 hover:opacity-80">
      contact us
    </Link>{" "}
    for a free trial or head to our{" "}
    <Link
      href="/b1g-iptv-subscription/"
      className="text-[#E01E26] underline underline-offset-2 hover:opacity-80"
    >
      Subscription Plans
    </Link>{" "}
    page — your login details arrive within minutes.
  </>,
];

const tabs: { id: SetupTab; label: string; title: string; steps: React.ReactNode[] }[] = [
  {
    id: "step1",
    label: "STEP 1",
    title: "Connect and Set Up Your Fire TV Stick",
    steps: connectSteps,
  },
  {
    id: "step2",
    label: "STEP 2",
    title: "Install IPTV Apps with Downloader Codes for Firestick",
    steps: installSteps,
  },
];

export function InstSetupSteps() {
  const [activeTab, setActiveTab] = useState<SetupTab>("step1");

  return (
    <section
      id="setup-steps"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading mb-4">
              Firestick IPTV Setup –{" "}
              <span className="text-brand-gradient font-bold">Step-by-Step Installation Guide</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              The full installation has two parts: connecting the hardware, then loading your streaming apps. Both are simpler than they sound.
            </p>
          </div>
        </FadeIn>

        <div className="flex justify-center mb-3 sm:mb-4" data-no-reveal data-tabs>
          <div
            className="inline-flex items-center gap-2 p-1 rounded-[12px] bg-slate-100 border border-slate-200/80"
            role="tablist"
            aria-label="Installation steps"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-pressed={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`min-w-[110px] sm:min-w-[140px] rounded-[10px] px-5 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E01E26]/40 ${
                    isActive
                      ? "bg-[#E01E26] text-white shadow-sm"
                      : "bg-white text-[#12141F] border border-slate-200/80 hover:bg-slate-50"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="max-w-3xl mx-auto rounded-[12px] border border-slate-200 bg-slate-50/80 p-5 sm:p-8"
          data-no-reveal
        >
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={activeTab === tab.id ? "block" : "hidden"}
              role="tabpanel"
              aria-hidden={activeTab !== tab.id}
            >
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] font-heading mb-5 sm:mb-6 leading-snug">
                {tab.title}
              </h3>

              <ul className="space-y-4 sm:space-y-5">
                {tab.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 border border-red-100 text-[#E01E26] font-bold text-xs mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                      {step}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
