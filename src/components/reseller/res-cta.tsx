"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";

export function ResCTA() {
  return (
    <section id="cta" className="w-full py-12 sm:py-20 section-glass border-t border-white/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#12141F] mb-4">
            Request Current <span className="text-brand-gradient font-bold">Credit Prices</span>
          </h2>
          <Link href={ROUTES.contact}>
            <Button variant="primary" size="lg" className="rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-8 py-3.5 text-sm font-semibold shine-effect">
              Apply for Reseller Access
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
