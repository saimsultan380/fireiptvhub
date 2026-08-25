"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";

export type LegalSection = {
  title?: string;
  paragraphs?: string[];
  list?: string[];
};

export function LegalPageContent({
  title,
  lastUpdated,
  intro,
  sections,
}: {
  title: string;
  lastUpdated: string;
  intro?: string[];
  sections: LegalSection[];
}) {
  return (
    <section className="w-full py-12 sm:py-20 section-glass border-t border-white/50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn>
          <h1 className="text-h2 font-bold tracking-tight text-[#12141F] mb-2">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-8">
            Last updated: {lastUpdated}
          </p>

          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            {intro?.map((p) => (
              <p
                key={p}
                className="text-sm text-slate-600 font-medium leading-relaxed mb-4 last:mb-0"
              >
                {p}
              </p>
            ))}

            <div className={intro?.length ? "mt-8 space-y-8" : "space-y-8"}>
              {sections.map((section, idx) => (
                <div key={idx}>
                  {section.title && (
                    <h2 className="text-base sm:text-lg font-bold text-[#12141F] mb-3">
                      {section.title}
                    </h2>
                  )}
                  {section.paragraphs?.map((p) => (
                    <p
                      key={p}
                      className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-3 last:mb-0"
                    >
                      {p}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
