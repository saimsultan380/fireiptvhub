"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Mail, ArrowUpRight } from "lucide-react";

const channels = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    description:
      "If you encounter any issues with payment gateways or entering login details on your device, please reach out to us via WhatsApp for prompt assistance.",
    href: "https://wa.me/447848177296",
    cta: "WhatsApp",
    icon: MessageCircle,
    external: true,
  },
  {
    id: "telegram",
    title: "Telegram",
    description:
      "If you encounter any issues with payment gateways or entering login details on your device, please reach out to us via Telegram for prompt assistance.",
    detail: "t.me/B1GPlayerIPTVUK",
    href: "https://t.me/B1GPlayerIPTVUK",
    cta: "Telegram",
    icon: Send,
    external: true,
  },
  {
    id: "gmail",
    title: "Gmail",
    description:
      "Our dedicated support team is available around the clock. Please feel free to contact us at your convenience for prompt issue resolution and a seamless experience.",
    detail: "support@fireiptvhub.com",
    href: "mailto:support@fireiptvhub.com",
    cta: "Email",
    icon: Mail,
    external: false,
  },
];

export function ConHelpOptions() {
  return (
    <section
      id="stay-in-touch"
      className="w-full py-12 sm:py-20 bg-slate-50/50 border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-12">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading">
            Stay in Touch with{" "}
            <span className="text-brand-gradient font-bold">Fire IPTV Hub</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div
                  key={channel.id}
                  className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                        <Icon className="h-4 w-4 stroke-[2]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none font-heading">
                        {channel.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
                      {channel.description}
                    </p>

                    {channel.detail && (
                      <p className="text-xs sm:text-sm font-bold text-[#E01E26] mb-6 break-all">
                        {channel.detail}
                      </p>
                    )}
                  </div>

                  <a
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className="w-full"
                  >
                    <Button
                      variant="primary"
                      className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white py-3 text-xs sm:text-sm font-semibold"
                    >
                      <span>{channel.cta}</span>
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
