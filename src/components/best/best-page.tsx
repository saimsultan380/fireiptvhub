"use client";

import React from "react";
import { Calendar, CheckCircle2, MessageCircle, Shield, Star, Tv } from "lucide-react";
import { ContentHero } from "@/components/content/content-hero";
import {
  CheckGrid,
  ContentCta,
  ContentSection,
  InfoCards,
} from "@/components/content/content-blocks";
import { HOME_PRICING_HREF, WHATSAPP_TRIAL_HREF } from "@/lib/routes";

export function BestHero() {
  return (
    <ContentHero
      titleParts={[
        { text: "How to Choose the Best IPTV for" },
        { text: "Firestick", className: "text-brand-gradient font-bold" },
        { text: "in the UK" },
      ]}
      paragraphs={[
        "The best IPTV for Firestick is not determined by one impressive number or anonymous review. It should work on your device, cover your preferred categories, provide clear prices and perform properly on your own broadband.",
        "This guide explains how to compare Firestick IPTV services, free and paid options, player apps, Reddit recommendations and Trustpilot reviews in 2026.",
      ]}
      primary={{ href: HOME_PRICING_HREF, label: "View Subscription Plans", icon: Calendar }}
      secondary={{
        href: WHATSAPP_TRIAL_HREF,
        label: "Request a 24-Hour Trial",
        icon: Tv,
        external: true,
      }}
    />
  );
}

export function BestSections() {
  return (
    <>
      <ContentSection
        titleLead="Ten Things to"
        titleAccent="Check"
        intro={[
          "Older 2024 and 2025 guides may pre-date Vega OS, new Fire TV models, app changes and current installation restrictions. Use an updated 2026 guide and confirm the exact device rather than relying on the publication year alone.",
        ]}
      >
        <CheckGrid
          columns={2}
          items={[
            "Exact Fire TV compatibility under Settings → My Fire TV → About",
            "Trial availability on your actual television, Wi-Fi, player and viewing time",
            "Current channel selection if particular channels or languages matter",
            "Player requirements, operating system support and separate licence fees",
            "Stream quality without assuming every channel is 4K",
            "Programme guide loading on the channels you use",
            "Simultaneous connections—not merely how many devices can store the login",
            "Support that asks for device, app, time and error details",
            "Visible prices, activation date, expiry, renewal and refund terms",
            "Honest limitations rather than absolute zero-buffering guarantees",
          ]}
        />
      </ContentSection>

      <ContentSection titleLead="Free and Paid IPTV for" titleAccent="Firestick">
        <InfoCards
          cards={[
            {
              icon: Shield,
              title: "Free IPTV for Firestick",
              body: "Searches for best free IPTV Firestick often combine legitimate free television apps, free IPTV players, provider trials, public playlists and shared codes. Free access should not be assumed to include paid channels legally or permanently. Public playlists and shared codes can be unreliable, unsafe or unauthorised.",
            },
            {
              icon: CheckCircle2,
              title: "Paid IPTV for Firestick",
              body: "Look for a defined subscription period, individual login, compatible setup method, current package description, connection allowance, support, cancellation information and a secure payment process. The best paid option is the one that passes a trial on your device—not automatically the cheapest annual package.",
            },
          ]}
        />
      </ContentSection>

      <ContentSection
        titleLead="Checking Reddit and"
        titleAccent="Trustpilot"
        intro={[
          "One anonymous Reddit recommendation should not replace a device trial. Fire IPTV Hub should not publish or display a Trustpilot rating until a genuine profile and verifiable review history exist.",
        ]}
      >
        <InfoCards
          cards={[
            {
              icon: MessageCircle,
              title: "Reddit Recommendations",
              body: "Queries such as best IPTV service for Firestick Reddit can show genuine advice alongside advertising disguised as customer experience. Check the community, account age, whether identical wording appears elsewhere, whether the poster identifies the device and player, whether a seller link is included, and whether limitations are discussed.",
            },
            {
              icon: Star,
              title: "Trustpilot Reviews",
              body: "Search the exact website domain, confirm that the profile matches the seller, check the number and dates of reviews, read lower ratings as well as five-star ratings, look for specific device and support details and examine how the business responds to criticism.",
            },
          ]}
        />
      </ContentSection>

      <ContentSection
        titleLead="How to Test a Service"
        titleAccent="Properly"
        intro={[
          "Fire IPTV Hub should publish customer feedback only after it can be linked to a genuine trial or order. A review may be edited only to remove passwords or private information, correct obvious spelling, remove abusive language or protect another person’s privacy.",
        ]}
      >
        <CheckGrid
          columns={2}
          items={[
            "Test several live categories and open films and series",
            "Refresh the EPG and add favourites",
            "Test during the evening and check HD and higher-quality streams",
            "Restart the app once and ask one support question",
            "Confirm the expiry time and paid-plan terms",
          ]}
        />
      </ContentSection>

      <ContentCta
        titleLead="Compare on Your Own"
        titleAccent="Device"
        body="Request an eligible 24-hour trial and test live TV, films, the programme guide and your normal viewing time before choosing a longer plan."
        primary={{
          href: WHATSAPP_TRIAL_HREF,
          label: "Request a Trial",
          icon: Tv,
          external: true,
        }}
        secondary={{ href: HOME_PRICING_HREF, label: "View Plans", icon: Calendar }}
      />
    </>
  );
}
