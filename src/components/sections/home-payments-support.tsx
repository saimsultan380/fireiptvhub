"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  CheckCircle2,
  ShieldCheck,
  Tv,
  Wifi,
  MonitorPlay,
  KeyRound,
  ListChecks,
  Sparkles,
  Gauge,
  Smartphone,
} from "lucide-react";

const needItems = [
  { label: "A compatible Amazon Fire TV device", icon: Tv },
  { label: "A stable internet connection", icon: Wifi },
  { label: "A suitable IPTV player", icon: MonitorPlay },
  { label: "An active IPTV subscription", icon: KeyRound },
];

const startSteps = [
  {
    title: "1. Check Your Fire TV Device",
    body: "Go to: Settings → My Fire TV → About. Note the exact device name and software information. This is particularly important for newer Vega OS models because they may require different player applications from Android-based Fire OS devices.",
  },
  {
    title: "2. Choose Your Subscription",
    body: "You can request an eligible 24-hour trial or choose a Standard or Premium plan.",
  },
  {
    title: "3. Receive Your Access Details",
    body: "After activation, you will receive the login information and setup instructions required for your device.",
  },
  {
    title: "4. Install a Compatible IPTV Player",
    body: "Use a suitable player that supports your Fire TV operating system and the login method supplied.",
  },
  {
    title: "5. Enter Your Details",
    body: "Depending on the player, you may enter your username, password, and server address or add an M3U playlist.",
  },
  {
    title: "6. Load Your Channels",
    body: "Once the account connects, refresh the content and check live channels, on-demand content, and the EPG.",
  },
];

const compareChecks = [
  "Firestick compatibility",
  "Fire TV operating system support",
  "Current channel availability",
  "Player compatibility",
  "EPG support",
  "Available picture quality",
  "Subscription duration",
  "Connection allowance",
  "Installation help",
  "Customer support",
  "Clear pricing",
  "Clear terms and responsible use",
];

const whyChoose = [
  {
    title: "Clear Setup",
    body: "The Firestick, IPTV player, and subscription are explained separately so you know what each part does.",
    icon: ListChecks,
  },
  {
    title: "Transparent Plans",
    body: "Current subscription prices are displayed before purchase, with Standard and Premium options available.",
    icon: Sparkles,
  },
  {
    title: "Guided Installation",
    body: "Setup guidance is provided for compatible Fire TV devices, including help with player selection, login details, EPG refreshes, and common playback issues.",
    icon: MonitorPlay,
  },
  {
    title: "Trial Option",
    body: "Eligible new customers can request a 24-hour trial to test the service before choosing a longer subscription.",
    icon: CheckCircle2,
  },
  {
    title: "Practical Support",
    body: "If you are unsure about your Fire TV model or player, support can help you identify a suitable setup.",
    icon: Smartphone,
  },
  {
    title: "No Unnecessary Promises",
    body: "The service does not claim that every channel is permanently available, every Firestick uses the same application, or that buffering can never occur.",
    icon: ShieldCheck,
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
        <FadeIn className="w-full mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] mb-4">
            Firestick with IPTV:{" "}
            <span className="text-brand-gradient font-bold">What Do You Need?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed mb-5 max-w-4xl">
            A Firestick with IPTV normally requires four things:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {needItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-[12px] border border-slate-200 bg-white p-5 shadow-[0_8px_24px_-16px_rgba(18,20,31,0.35)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] mb-3">
                    <Icon className="h-5 w-5 stroke-[2]" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#12141F] leading-snug">{item.label}</p>
                </div>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn className="w-full max-w-4xl mb-6">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            How to Get IPTV{" "}
            <span className="text-brand-gradient font-bold">on Firestick</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
            If you are searching for IPTV to Firestick, the setup is usually straightforward once you know your device model and have your subscription details.
          </p>
        </FadeIn>

        <FadeIn className="w-full mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {startSteps.map((item, index) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-[12px] border border-slate-200 bg-white shadow-[0_8px_24px_-16px_rgba(18,20,31,0.35)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E01E26] to-[#B5121A] text-white text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#12141F] mb-1.5">{item.title.replace(/^\d+\.\s*/, "")}</p>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="w-full mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] mb-4">
            What Should You Look for in the{" "}
            <span className="text-brand-gradient font-bold">Best IPTV for Firestick</span> in the UK?
          </h2>
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-sm text-slate-600 font-semibold leading-relaxed mb-3">
              People often search for the Best IPTV for Firestick, Best IPTV Firestick, or Best IPTV on Firestick.
            </p>
            <p className="text-sm text-slate-600 font-semibold leading-relaxed mb-5">
              There is no useful one-size-fits-all answer because different UK households have different devices, internet connections, and viewing requirements.
            </p>
            <p className="text-sm font-bold text-[#12141F] mb-3">
              Instead, compare services using practical factors such as:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-5">
              {compareChecks.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-[10px] border border-slate-100 bg-slate-50 px-3 py-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#E01E26] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <p className="text-sm text-slate-600 font-semibold leading-relaxed rounded-[10px] bg-slate-50 border border-slate-100 p-4">
                A large channel number alone does not tell you whether a service will suit your particular television.
              </p>
              <p className="text-sm text-slate-600 font-semibold leading-relaxed rounded-[10px] bg-slate-50 border border-slate-100 p-4">
                Testing the service on your own Firestick and broadband connection is more useful than relying on somebody else&apos;s setup.
              </p>
            </div>
            <p className="mt-4 text-sm text-slate-800 font-bold leading-relaxed rounded-[10px] border border-red-100 bg-red-50/60 px-4 py-3">
              Fire IPTV Hub provides an eligible 24-hour trial, so new customers can test the service before choosing a longer subscription.
            </p>
          </div>
        </FadeIn>

        <FadeIn className="w-full mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] mb-4">
            Why Choose{" "}
            <span className="text-brand-gradient font-bold">Fire IPTV Hub?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed mb-5 max-w-4xl">
            Fire IPTV Hub is built around an easy approach to Firestick IPTV.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChoose.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[12px] border border-slate-200 bg-white p-5 shadow-[0_8px_24px_-16px_rgba(18,20,31,0.35)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] mb-3">
                    <Icon className="h-5 w-5 stroke-[2]" />
                  </div>
                  <p className="text-sm font-bold text-[#12141F] mb-2">{item.title}</p>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn className="w-full mb-12">
          <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-4">
            Check These Details Before Ordering
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {beforeOrdering.map((item) => (
              <div key={item.title} className="rounded-[12px] border border-slate-200 bg-white p-5 shadow-[inset_3px_0_0_0_#E01E26]">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-[#E01E26] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-[#12141F]">{item.title}</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed pl-6">{item.body}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="w-full mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] mb-4">
            Compatible{" "}
            <span className="text-brand-gradient font-bold">Fire TV Devices</span>
          </h2>
          <p className="text-sm text-slate-600 font-semibold leading-relaxed mb-3 max-w-4xl">
            Compatibility depends on the exact Fire TV model and operating system.
          </p>
          <p className="text-sm text-slate-600 font-semibold leading-relaxed mb-4">
            Fire IPTV Hub may support compatible devices including:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            {compatibleDevices.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-[12px] bg-white border border-slate-200 shadow-[0_8px_24px_-16px_rgba(18,20,31,0.35)]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26]">
                  <Tv className="h-4 w-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#12141F]">{item}</span>
              </div>
            ))}
          </div>
          <div className="rounded-[12px] border border-slate-200 bg-white p-4 sm:p-5">
            <p className="text-sm text-slate-600 font-semibold leading-relaxed mb-2">
              The Fire TV Stick 4K Select uses Vega OS, so compatibility should be confirmed before installation.
            </p>
            <p className="text-sm text-slate-800 font-bold leading-relaxed">
              If you are unsure, send the exact model name to support.
            </p>
          </div>
        </FadeIn>

        <FadeIn className="w-full mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
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

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <Gauge className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F]">
                  Firestick IPTV Performance Without Misleading Promises
                </h3>
              </div>
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
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
