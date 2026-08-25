"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { ROUTES } from "@/lib/routes";

const compareRows = [
  { label: "HD television", standard: "Recommended", premium: "Usually unnecessary" },
  { label: "Full HD television", standard: "Recommended", premium: "Optional" },
  { label: "4K television", standard: "Supported at HD/FHD", premium: "Recommended" },
  { label: "Older entry-level Firestick", standard: "Recommended", premium: "Test performance first" },
  { label: "Fire TV Stick 4K, Max, Plus or Cube", standard: "Supported", premium: "Recommended for available 4K" },
  { label: "Suggested broadband", standard: "25 Mbps or more", premium: "50 Mbps or more" },
  { label: "Available 4K sources", standard: "Not the main focus", premium: "Included" },
];

export function FireFeatures() {
  return (
    <section
      id="features"
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading">
            Standard or{" "}
            <span className="text-brand-gradient font-bold">Premium?</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
            Choose Standard if your television is HD or Full HD. Choose Premium if you have suitable 4K equipment and want access to the highest available source quality.
          </p>
        </FadeIn>

        <FadeIn className="w-full mb-10">
          <div className="rounded-[12px] border border-slate-200 bg-white overflow-hidden">
            <div className="grid grid-cols-3 gap-2 p-4 bg-slate-50 border-b border-slate-200 text-xs sm:text-sm font-bold text-[#12141F]">
              <span>Consideration</span>
              <span>Standard</span>
              <span>Premium</span>
            </div>
            {compareRows.map((row) => (
              <div key={row.label} className="grid grid-cols-3 gap-2 p-4 border-b border-slate-100 text-xs sm:text-sm">
                <span className="font-semibold text-slate-800">{row.label}</span>
                <span className="font-medium text-slate-600">{row.standard}</span>
                <span className="font-medium text-slate-600">{row.premium}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="w-full flex justify-start" data-no-reveal>
            <Link href={ROUTES.installation} className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold shine-effect"
              >
                <BookOpen className="mr-2 h-4 w-4 stroke-[2.5]" />
                <span>View Installation Guide</span>
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
