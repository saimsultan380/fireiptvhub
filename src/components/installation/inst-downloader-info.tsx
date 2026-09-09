"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Download, AlertCircle } from "lucide-react";
import { DownloaderCodesList } from "@/components/installation/downloader-codes-list";

export function InstDownloaderInfo() {
  return (
    <section
      id="downloader-info"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10 mx-auto text-center">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Official <span className="text-brand-gradient font-bold">Download Information</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full max-w-3xl mx-auto">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <Download className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                  Official Download Credentials
                </h3>
              </div>

              <DownloaderCodesList />
            </div>

            <div className="border-t border-slate-100 pt-5 mt-6 space-y-3">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
                <p className="text-xs text-[#E01E26] font-semibold leading-relaxed">
                  Use only the official codes shown on the Fire IPTV Hub website or supplied by the support team.
                </p>
              </div>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed pl-6.5">
                Installation details can change after application updates, so check the current guide if a code does not work.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
