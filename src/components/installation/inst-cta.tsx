"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";
import { ROUTES } from "@/lib/routes";

export function InstCTA() {
  return (
    <section id="cta" className="w-full py-12 sm:py-20 section-glass border-t border-white/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-12 text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#12141F] max-w-3xl font-heading mb-4">
            Need{" "}
            <span className="text-brand-gradient font-bold">Installation Support?</span>
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-500 font-semibold leading-relaxed max-w-3xl mb-8">
            Get your setup details or contact installation support if login, Downloader, Vega OS compatibility or playback checks need help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link href={ROUTES.contact} className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-8 py-3.5 text-xs sm:text-sm font-semibold shine-effect">
                Get Your Setup Details
              </Button>
            </Link>
            <Link href={ROUTES.contact} className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-8 py-3.5 text-xs sm:text-sm font-semibold hover:bg-red-50">
                <Headphones className="mr-2 h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                Contact Installation Support
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
