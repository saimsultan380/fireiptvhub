"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animation/fade-in";

type SetupTab = "smarters" | "downloader" | "login" | "troubleshoot";

const tabs: { id: SetupTab; label: string; title: string; steps: string[] }[] = [
  {
    id: "smarters",
    label: "Smarters",
    title: "How to Download IPTV Smarters Pro on Firestick",
    steps: [
      "Search the Amazon Appstore for the currently available compatible version first.",
      "Download and open the player, accept its displayed terms.",
      "Select Login with Xtream Codes API if instructed.",
      "Enter a profile name, subscription username, password and complete server address.",
      "Select Add User and wait for the channels and on-demand library to load.",
      "App availability can change. If the player is not listed, contact support for another compatible option.",
    ],
  },
  {
    id: "downloader",
    label: "Downloader",
    title: "Installing Through Downloader on Fire OS",
    steps: [
      "Use Downloader only when your Fire OS model permits it and the app comes from a trusted source.",
      "Reveal Developer Options: Settings → My Fire TV → About → highlight device name → press centre button seven times.",
      "Open Developer Options → Install Unknown Apps → find Downloader → change permission to On.",
      "Install Downloader by AFTVnews from Find → Search and open it.",
      "Enter the current Downloader code or direct link supplied in your activation message.",
      "Before installing, check the destination, confirm the expected app name and cancel if unrelated downloads appear.",
      "Delete the downloaded installation file after the player has been installed.",
    ],
  },
  {
    id: "login",
    label: "Login",
    title: "Entering Xtream Codes or M3U Details",
    steps: [
      "For Xtream Codes: Add User, enter profile name, username, password and server address including http:// or https://, then Login.",
      "For M3U: Add Playlist, paste the complete M3U URL, add the EPG link if separately supplied and save.",
      "An M3U link can contain your private account credentials. Do not share screenshots displaying the complete URL.",
      "After logging in, set the correct UK time zone, refresh the programme guide and test a live stream and on-demand title.",
      "Use the wall adapter, improve Wi-Fi with the HDMI extender, keep storage available and restart the device if needed.",
    ],
  },
  {
    id: "troubleshoot",
    label: "Fixes",
    title: "Common Setup Problems",
    steps: [
      "Invalid login — check spelling, capital letters, symbols, spaces and the complete server address.",
      "No channels loading — refresh the playlist, check account expiry and confirm the Firestick is online.",
      "Every channel buffers — run a speed test on the Firestick, restart the router and test a lower-resolution stream.",
      "One channel not working — try another channel in the same category and report the affected channel and time.",
      "Empty programme guide — refresh the EPG from player settings; information may take several minutes.",
      "Downloader cannot install — confirm Fire OS, permission enabled, enough storage and a compatible file.",
    ],
  },
];

export function InstSetupSteps() {
  const [activeTab, setActiveTab] = useState<SetupTab>("smarters");

  return (
    <section id="setup-steps" className="w-full py-12 sm:py-20 section-glass border-t border-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading mb-4">
              Firestick IPTV Setup –{" "}
              <span className="text-brand-gradient font-bold">Step-by-Step Guide</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              A Downloader code does not provide a permanent free IPTV subscription. Never publish your private account login. A free Downloader code is only as trustworthy as the web address behind it.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-2 mb-4" data-no-reveal data-tabs>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`min-w-[100px] rounded-[10px] px-4 py-2.5 text-xs sm:text-sm font-bold transition-colors ${
                activeTab === tab.id
                  ? "bg-[#E01E26] text-white shadow-sm"
                  : "bg-white text-[#12141F] border border-slate-200/80 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto rounded-[12px] border border-slate-200 bg-slate-50/80 p-5 sm:p-8" data-no-reveal>
          {tabs.map((tab) => (
            <div key={tab.id} className={activeTab === tab.id ? "block" : "hidden"}>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] font-heading mb-5 leading-snug">
                {tab.title}
              </h3>
              <ul className="space-y-4">
                {tab.steps.map((step, idx) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 border border-red-100 text-[#E01E26] font-bold text-xs mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">{step}</span>
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
