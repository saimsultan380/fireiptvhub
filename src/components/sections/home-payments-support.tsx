"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Headphones, CheckCircle2 } from "lucide-react";
import { WHATSAPP_TRIAL_HREF } from "@/lib/routes";

const startSteps = [
  {
    title: "1. Check Your Device",
    body: "Open Settings → My Fire TV → About and note the exact device name. This is particularly important for newer Vega OS models because they may require different player applications from Android-based Fire OS devices.",
  },
  {
    title: "2. Request a Trial or Choose a Plan",
    body: "Eligible new customers can request a 24-hour trial. Test the service on your actual television, Firestick, player and broadband.",
  },
  {
    title: "3. Receive Your Login",
    body: "After trial approval or payment confirmation, you receive your subscription details and the correct setup method for your device.",
  },
  {
    title: "4. Install and Sign In",
    body: "Install the recommended player and enter the username, password and server address exactly as supplied.",
  },
  {
    title: "5. Check Your Preferred Categories",
    body: "Test several live channels, an on-demand title, the programme guide and playback during your normal viewing time.",
  },
];

const beforeOrdering = [
  {
    title: "Fire TV Model",
    body: "Do not assume every device carrying the Fire TV name supports the same apps. Send the exact model to support if you are uncertain.",
  },
  {
    title: "Internet Connection",
    body: "As a practical guide, aim for approximately 15 Mbps for standard HD, 25 Mbps or more for Full HD, and 50 Mbps or more for 4K. Stability on the Firestick matters more than the speed measured on a different device.",
  },
  {
    title: "Simultaneous Connections",
    body: "A login may be installed on more than one device, but that does not automatically allow those devices to stream at the same time. Confirm the connection allowance before ordering for several televisions.",
  },
  {
    title: "Player Licence",
    body: "Some players are free, while others charge a separate activation or premium-app fee. This payment belongs to the player developer and may not be included in the IPTV subscription price.",
  },
];

const bufferingCauses = [
  "Weak Wi-Fi",
  "Broadband-provider routing",
  "Limited Firestick storage",
  "Player-app problems",
  "Device overheating",
  "Original stream interruption",
  "Maintenance",
  "Peak-time internet congestion",
];

const compatibleDevices = [
  "Fire TV Stick Lite",
  "Fire TV Stick HD",
  "Fire TV Stick 4K",
  "Fire TV Stick 4K Max",
  "Fire TV Stick 4K Plus",
  "Fire TV Cube",
  "Selected Fire TV Edition televisions",
];

export function HomePaymentsSupportSection() {
  return (
    <section
      id="how-to-start"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* How to Start Watching */}
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            How to Start{" "}
            <span className="text-brand-gradient font-bold">Watching</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full mb-12">
          <div className="space-y-3">
            {startSteps.map((item) => (
              <div key={item.title} className="p-4 rounded-[12px] border border-slate-200 bg-white">
                <p className="text-xs sm:text-sm font-bold text-[#12141F] mb-1">{item.title}</p>
                <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Check These Details Before Ordering */}
        <FadeIn className="w-full mb-12">
          <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-4">
            Check These Details Before Ordering
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {beforeOrdering.map((item) => (
              <div key={item.title} className="rounded-[12px] border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-[#E01E26] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">{item.title}</span>
                </div>
                <p className="text-xs font-medium text-slate-600 leading-relaxed pl-6">{item.body}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Free IPTV or a Paid Subscription? */}
        <FadeIn className="w-full mb-12">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                <ShieldCheck className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F]">
                Free IPTV or a Paid Subscription?
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-3">
              Free IPTV for Firestick can mean a free player app, a legitimate advertising-supported television app, a provider trial or an unverified public playlist. These options are not the same.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
              A free player does not automatically provide content. Public playlists can disappear, contain broken links or lead to unsafe downloads. A paid Firestick subscription should provide a defined activation period, private login, support and clear account responsibility.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-800">
              Use the 24-hour trial to check the paid service before choosing a longer duration.
            </p>
          </div>
        </FadeIn>

        {/* Performance */}
        <FadeIn className="w-full mb-12">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-3">
              Firestick IPTV Performance Without Misleading Promises
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
              No internet television service can honestly guarantee that buffering will never occur. Playback can be affected by:
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {bufferingCauses.map((item) => (
                <span key={item} className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              If one channel is affected but others work, the issue is likely isolated. If every section is affected, the device, application or connection should be checked first.
            </p>
          </div>
        </FadeIn>

        {/* Compatible Fire TV Devices */}
        <FadeIn className="w-full mb-10">
          <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-4">
            Compatible Fire TV Devices
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
            Compatibility may include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            {compatibleDevices.map((item) => (
              <div key={item} className="flex items-start gap-2 p-3 rounded-[10px] bg-white border border-slate-200">
                <CheckCircle2 className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            The Fire TV Stick 4K Select uses Vega OS. Android APK files and older Downloader instructions should not be assumed to work on it. Confirm player availability before purchasing.
          </p>
        </FadeIn>

        <FadeIn className="w-full flex justify-center">
          <a href={WHATSAPP_TRIAL_HREF} target="_blank" rel="noopener noreferrer">
            <Button
              variant="primary"
              size="lg"
              className="rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-8 py-3.5 text-sm sm:text-base font-semibold shine-effect"
            >
              <Headphones className="mr-2 h-5 w-5 stroke-[2.5]" />
              <span>Request Your Trial</span>
            </Button>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
