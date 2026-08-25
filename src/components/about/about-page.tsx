"use client";

import React from "react";
import { Calendar, Tv, Shield, Ban, Scale, Building2 } from "lucide-react";
import { ContentHero } from "@/components/content/content-hero";
import {
  CheckGrid,
  ContentCta,
  ContentSection,
  InfoCards,
} from "@/components/content/content-blocks";
import { ROUTES } from "@/lib/routes";

export function AboutHero() {
  return (
    <ContentHero
      titleParts={[
        { text: "About Fire IPTV Hub –" },
        { text: "Firestick IPTV", className: "text-brand-gradient font-bold" },
        { text: "for UK Viewers" },
      ]}
      paragraphs={[
        "Fire IPTV Hub is a UK-focused Firestick IPTV subscription and setup service.",
        "We help customers identify their Fire TV model, select a suitable package, install a compatible player and test the service before choosing a longer subscription.",
      ]}
      primary={{ href: ROUTES.subscription, label: "View Subscription Plans", icon: Calendar }}
      secondary={{ href: ROUTES.contact, label: "Request a 24-Hour Trial", icon: Tv }}
    />
  );
}

export function AboutSections() {
  return (
    <>
      <ContentSection
        titleLead="Why Fire IPTV Hub"
        titleAccent="Exists"
        intro={[
          "Customers are frequently told that a Firestick, player app and IPTV subscription are the same product. They are not.",
          "People also encounter misleading claims such as: works on every Firestick; every channel is 4K; zero buffering; free app includes every channel; longer subscriptions include better servers; a VPN fixes every problem.",
          "Fire IPTV Hub takes a clearer approach.",
        ]}
      >
        <InfoCards
          cards={[
            {
              icon: Building2,
              title: "Clearer Setup",
              body: "We explain the device, app and subscription separately so you know what you are buying and how it is installed.",
            },
            {
              icon: Shield,
              title: "Honest Limits",
              body: "We describe 4K as available where supported, check Fire OS and Vega OS compatibility, and avoid permanent channel promises.",
            },
            {
              icon: Scale,
              title: "Visible Prices",
              body: "Package prices are shown before payment. Features stay consistent across durations, and eligible trials are offered where available.",
            },
            {
              icon: Ban,
              title: "No Amazon Link",
              body: "Fire IPTV Hub is independent. We are not affiliated with, sponsored by or endorsed by Amazon or player developers.",
            },
          ]}
        />
      </ContentSection>

      <ContentSection titleLead="Our" titleAccent="Approach">
        <CheckGrid
          items={[
            "Explain the device, app and subscription separately",
            "Display package prices before payment",
            "Keep features consistent across durations",
            "Describe 4K as available where supported",
            "Check Fire OS and Vega OS compatibility",
            "Offer eligible trials",
            "Explain simultaneous connections",
            "Avoid permanent channel promises",
            "Diagnose problems using the device, app and connection",
          ]}
        />
      </ContentSection>

      <ContentSection titleLead="What We" titleAccent="Provide">
        <CheckGrid
          columns={2}
          items={[
            "20,000+ live channels",
            "Films and television series",
            "HD and Full HD streams",
            "Available 4K sources on Premium plans",
            "EPG on supported channels",
            "Compatible login details",
            "Firestick installation guidance",
            "Account and troubleshooting support",
          ]}
        />
      </ContentSection>

      <ContentSection
        titleLead="What We Do Not"
        titleAccent="Promise"
        intro={[
          "Customers and resellers must use the service in accordance with applicable laws, content rights and territorial restrictions. Accounts must not be publicly shared, restreamed or resold without authorised reseller access.",
        ]}
      >
        <CheckGrid
          columns={2}
          items={[
            "Every stream is 4K",
            "Every channel will always remain available",
            "Every app works on every Firestick",
            "Buffering can never happen",
            "A reseller will earn a guaranteed amount",
            "Fire IPTV Hub is part of Amazon",
            "A large channel count means every channel is relevant",
          ]}
        />
      </ContentSection>

      <ContentCta
        titleLead="Ready to Get"
        titleAccent="Started?"
        body="Check your Fire TV model, request an eligible trial or choose a subscription plan with guided installation."
        primary={{ href: ROUTES.subscription, label: "View Plans", icon: Calendar }}
        secondary={{ href: ROUTES.contact, label: "Contact Support", icon: Tv }}
      />
    </>
  );
}
