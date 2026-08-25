"use client";

import React from "react";
import Link from "next/link";
import { type LucideIcon, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";

export function ContentSection({
  id,
  titleLead,
  titleAccent,
  intro,
  children,
}: {
  id?: string;
  titleLead: string;
  titleAccent: string;
  intro?: string[];
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="w-full py-12 sm:py-20 section-glass border-t border-white/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            {titleLead}{" "}
            <span className="text-brand-gradient font-bold">{titleAccent}</span>
          </h2>
          {intro?.map((p) => (
            <p
              key={p}
              className="mt-3 text-sm sm:text-base text-slate-600 font-semibold leading-relaxed"
            >
              {p}
            </p>
          ))}
        </FadeIn>
        <FadeIn className="w-full">{children}</FadeIn>
      </div>
    </section>
  );
}

export function CheckGrid({
  items,
  columns = 3,
}: {
  items: string[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={`grid grid-cols-1 ${columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3"} gap-3`}
    >
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-2 p-3 rounded-[10px] bg-white border border-slate-200"
        >
          <CheckCircle2 className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
          <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export function InfoCards({
  cards,
}: {
  cards: { icon: LucideIcon; title: string; body: string }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-stretch">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.title}
            className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26] shrink-0 mb-4">
              <Icon className="h-5 w-5 stroke-[2]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-2">
              {card.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
              {card.body}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export function ContentCta({
  titleLead,
  titleAccent,
  body,
  primary,
  secondary,
}: {
  titleLead: string;
  titleAccent: string;
  body: string;
  primary: { href: string; label: string; icon: LucideIcon };
  secondary: { href: string; label: string; icon: LucideIcon };
}) {
  const PrimaryIcon = primary.icon;
  const SecondaryIcon = secondary.icon;

  return (
    <section className="w-full py-12 sm:py-20 section-glass border-t border-white/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-12 text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#12141F] mb-4">
            {titleLead}{" "}
            <span className="text-brand-gradient font-bold">{titleAccent}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-3xl mb-8">
            {body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href={primary.href} className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] px-8 py-3.5 text-sm font-semibold shine-effect"
              >
                <PrimaryIcon className="mr-2 h-4 w-4" />
                {primary.label}
              </Button>
            </Link>
            <Link href={secondary.href} className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] border-2 border-[#E01E26] px-8 py-3.5 text-sm font-semibold hover:bg-red-50"
              >
                <SecondaryIcon className="mr-2 h-4 w-4 text-[#E01E26]" />
                {secondary.label}
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
