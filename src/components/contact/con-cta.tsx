"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import { ROUTES, SUPPORT_EMAIL, WHATSAPP_DEFAULT_HREF } from "@/lib/routes";

export function ConCTA() {
  return (
    <section id="cta" className="w-full py-12 sm:py-20 section-glass border-t border-white/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-12 text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#12141F] mb-4">
            Request Your Trial or{" "}
            <span className="text-brand-gradient font-bold">Message Support</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-3xl mb-8">
            By submitting the form, you confirm that you have read the Privacy Policy and permit Fire IPTV Hub to use the supplied information to respond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={WHATSAPP_DEFAULT_HREF} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto rounded-[12px] px-8 py-3.5 text-sm font-semibold shine-effect">
                <MessageCircle className="mr-2 h-4 w-4" />
                Request Your Trial
              </Button>
            </a>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-[12px] border-2 border-[#E01E26] px-8 py-3.5 text-sm font-semibold hover:bg-red-50">
                <Mail className="mr-2 h-4 w-4 text-[#E01E26]" />
                Message Support
              </Button>
            </a>
          </div>
          <p className="mt-6 text-xs font-semibold text-slate-500">
            <Link href={ROUTES.privacy} className="text-[#E01E26] hover:underline">Privacy Policy</Link>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
