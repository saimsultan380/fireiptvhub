"use client";

import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/animation/fade-in";

export function B1GHeroMockup() {
  return (
    <FadeIn delay={0.18} duration={0.5} yOffset={22} className="w-full">
      <div className="relative w-full max-w-2xl mx-auto lg:max-w-none py-2 flex items-center justify-center bg-transparent">
        {/* Soft red halo behind devices — same language as the fixed site atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[78%] w-[92%] -translate-x-1/2 -translate-y-[48%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(247,24,17,0.32)_0%,rgba(247,24,17,0.14)_38%,transparent_70%)] blur-2xl sm:blur-3xl"
        />
        <div className="relative z-10 w-full flex items-center justify-center bg-transparent">
          <Image
            src="/hero-mockup.png"
            alt="Firestick IPTV streaming preview"
            width={1000}
            height={600}
            priority
            className="w-full h-auto object-contain max-h-[45vh] sm:max-h-[55vh] lg:max-h-none bg-transparent"
          />
        </div>
      </div>
    </FadeIn>
  );
}
