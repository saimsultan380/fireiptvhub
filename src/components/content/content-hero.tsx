"use client";

import React from "react";
import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { B1GHeroMockup } from "@/components/sections/b1g-hero-mockup";
import { FadeIn } from "@/components/animation/fade-in";
import { MaskReveal } from "@/components/animation/mask-reveal";
import { Button } from "@/components/ui/button";

type TitlePart = { text: string; className?: string };

type HeroCta = {
  href: string;
  label: string;
  icon: LucideIcon;
  external?: boolean;
};

function CtaLink({
  cta,
  className,
  children,
}: {
  cta: HeroCta;
  className?: string;
  children: React.ReactNode;
}) {
  if (cta.external) {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={cta.href} className={className}>
      {children}
    </Link>
  );
}

export function ContentHero({
  titleParts,
  paragraphs,
  primary,
  secondary,
}: {
  titleParts: TitlePart[];
  paragraphs: string[];
  primary: HeroCta;
  secondary: HeroCta;
}) {
  const PrimaryIcon = primary.icon;
  const SecondaryIcon = secondary.icon;

  return (
    <div
      className="relative section-glass-hero text-[#12141F] flex flex-col pb-8 sm:pb-12"
      data-hero
    >
      <div className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14">
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="w-full" data-no-reveal>
              <MaskReveal
                trigger="mount"
                as="h1"
                className="text-h1-b1g leading-[1.15] font-bold tracking-tight"
                parts={titleParts}
              />
            </div>

            <FadeIn delay={0.22} duration={0.45} yOffset={14} className="w-full mt-4">
              <div className="hero-desc space-y-4 text-xs sm:text-sm lg:text-base text-black leading-relaxed">
                {paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </FadeIn>

            <div className="mt-8 w-full">
              <div className="flex flex-row items-center gap-2 sm:gap-4 w-full">
                <CtaLink cta={primary} className="flex-1 sm:flex-initial">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold shine-effect whitespace-nowrap"
                  >
                    <PrimaryIcon className="mr-2 h-4 w-4 stroke-[2.5]" />
                    <span>{primary.label}</span>
                  </Button>
                </CtaLink>
                <CtaLink cta={secondary} className="flex-1 sm:flex-initial">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-5 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold whitespace-nowrap hover:bg-red-50"
                  >
                    <SecondaryIcon className="mr-2 h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                    <span>{secondary.label}</span>
                  </Button>
                </CtaLink>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <B1GHeroMockup />
          </div>
        </div>

        <div className="flex lg:hidden flex-col items-center gap-5 text-left">
          <div className="w-full">
            <div className="w-full" data-no-reveal>
              <MaskReveal
                trigger="mount"
                as="h1"
                className="text-h1-b1g leading-[1.15] font-bold tracking-tight"
                parts={titleParts}
              />
            </div>
            <FadeIn delay={0.22} duration={0.45} yOffset={14} className="w-full mt-3">
              <div className="hero-desc space-y-3 text-xs text-black leading-relaxed">
                {paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="w-full my-1">
            <B1GHeroMockup />
          </div>

          <div className="w-full flex flex-col gap-2.5">
            <CtaLink cta={primary} className="w-full">
              <Button
                variant="primary"
                size="lg"
                className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white py-3.5 text-xs sm:text-sm font-semibold"
              >
                <PrimaryIcon className="mr-2 h-4 w-4 stroke-[2.5]" />
                <span>{primary.label}</span>
              </Button>
            </CtaLink>
            <CtaLink cta={secondary} className="w-full">
              <Button
                variant="outline"
                size="lg"
                className="w-full rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] py-3.5 text-xs sm:text-sm font-semibold hover:bg-red-50"
              >
                <SecondaryIcon className="mr-2 h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                <span>{secondary.label}</span>
              </Button>
            </CtaLink>
          </div>
        </div>
      </div>
    </div>
  );
}
