"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import {
  Download,
  AlertTriangle,
  ArrowRight,
  ListRestart,
} from "lucide-react";
import { DownloaderCodesList } from "@/components/installation/downloader-codes-list";

const installationSteps = [
  "Open the app.",
  "Enter your username.",
  "Enter your password.",
  "Enter the supplied server URL.",
  "Save the account.",
  "Allow the categories to load.",
  "Begin browsing the available content.",
];

export function DownloadApp() {
  return (
    <section
      id="download-app"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Download the Official{" "}
            <span className="text-brand-gradient font-bold">IPTV App</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            The current app can be installed on compatible Android and Fire TV devices using the official Downloader route.
          </p>
        </FadeIn>

        <FadeIn className="w-full mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col gap-6 flex-1 justify-between">
                <div className="space-y-5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <Download className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                      Downloader Credentials
                    </h3>
                  </div>

                  <DownloaderCodesList compact />
                </div>

                <div className="border-t border-slate-100 pt-4 mt-6 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#E01E26] font-semibold leading-relaxed">
                      Use only the official codes supplied through the website or support team.
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pl-6.5 font-semibold">
                    Avoid downloading copies of the app from unknown websites, public comments or unofficial file-sharing services.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col">
              <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <ListRestart className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                      After Installation Steps
                    </h3>
                  </div>

                  <ol className="space-y-3.5">
                    {installationSteps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26] font-bold text-xs">
                          {idx + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug pt-0.5">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="border-t border-slate-100 pt-4 mt-6">
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    Ensure the correct configuration parameters are entered to allow content compilation to initiate successfully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed max-w-2xl">
              Need detailed setup assistance? Visit our full installation guide for step-by-step instructions with device screenshots.
            </p>

            <Link href="/firestick-iptv-installation-guide/" className="shrink-0 w-full md:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full md:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold"
              >
                <span>View the Complete Installation Guide</span>
                <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
