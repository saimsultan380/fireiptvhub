"use client";

import React from "react";
import { Calendar, Download, MonitorPlay, Smartphone, Tablet, Tv } from "lucide-react";
import { ContentHero } from "@/components/content/content-hero";
import {
  CheckGrid,
  ContentCta,
  ContentSection,
  InfoCards,
} from "@/components/content/content-blocks";
import { HOME_PRICING_HREF, ROUTES, WHATSAPP_DEFAULT_HREF } from "@/lib/routes";

export function AppsHero() {
  return (
    <ContentHero
      titleParts={[
        { text: "Firestick IPTV Apps," },
        { text: "Players", className: "text-brand-gradient font-bold" },
        { text: "& Supported Devices" },
      ]}
      paragraphs={[
        "An IPTV player controls how channels, films, series and programme information appear on your Fire TV screen. It does not normally provide the content itself.",
        "The best IPTV player for Firestick is the one that supports your login format, works with your device’s operating system and remains easy to control with the Fire TV remote.",
      ]}
      primary={{ href: ROUTES.installation, label: "Installation Guide", icon: Download }}
      secondary={{ href: HOME_PRICING_HREF, label: "View Subscription Plans", icon: Calendar }}
    />
  );
}

export function AppsSections() {
  return (
    <>
      <ContentSection
        titleLead="Player, Subscription and"
        titleAccent="Device Differences"
        intro={[
          "A paid player licence and a Firestick IPTV subscription are separate purchases unless clearly stated otherwise.",
        ]}
      >
        <InfoCards
          cards={[
            {
              icon: Tv,
              title: "Firestick or Fire TV",
              body: "Connects the television to apps and the internet. Check Settings → My Fire TV → About for the exact model.",
            },
            {
              icon: MonitorPlay,
              title: "IPTV Player",
              body: "Displays and organises the subscription. Look for Xtream Codes or M3U support, EPG, search, favourites and remote-friendly menus.",
            },
            {
              icon: Tablet,
              title: "IPTV Subscription",
              body: "Supplies the account, channels and on-demand content. This is what Fire IPTV Hub provides.",
            },
            {
              icon: Smartphone,
              title: "Player Licence",
              body: "Unlocks features in some third-party apps. That fee belongs to the player developer and may not be included in the subscription.",
            },
          ]}
        />
      </ContentSection>

      <ContentSection titleLead="What to Look for in an" titleAccent="IPTV Player">
        <CheckGrid
          columns={2}
          items={[
            "Fire OS or Vega OS compatibility",
            "Xtream Codes support",
            "M3U playlist support",
            "EPG loading, search, favourites and parental controls",
            "Multiple profiles, subtitles and audio-track selection",
            "Remote-control navigation, app updates and licence terms",
          ]}
        />
      </ContentSection>

      <ContentSection
        titleLead="Common IPTV Players for"
        titleAccent="Firestick"
        intro={[
          "There is no single player that is best for everyone. Choose based on simple first setup, detailed EPG controls, multiple playlists, older Firestick performance or Vega OS compatibility. Use a trial before paying for both a long player licence and a long subscription.",
        ]}
      >
        <InfoCards
          cards={[
            {
              icon: MonitorPlay,
              title: "TiviMate",
              body: "Designed around television and remote-control navigation. Often chosen for favourites, multiple playlists and detailed EPG controls. Premium features may require a separate licence. The player does not supply channels.",
            },
            {
              icon: Tv,
              title: "IPTV Smarters-style players",
              body: "Support common login methods such as Xtream Codes and M3U playlists. Check the exact developer and version because similarly named applications may be unrelated.",
            },
            {
              icon: Tablet,
              title: "IBO and XCIPTV-style players",
              body: "May accept M3U or Xtream-based details. Install only from a recognised source and confirm compatibility with your Fire OS generation. The player licence is separate from the subscription.",
            },
            {
              icon: Smartphone,
              title: "VLC",
              body: "Can open some compatible playlist formats but is not designed primarily as a television guide.",
            },
          ]}
        />
      </ContentSection>

      <ContentSection
        titleLead="Supported Fire TV"
        titleAccent="Devices"
        intro={[
          "Model names may be reused between generations. Always check Settings → My Fire TV → About. A compatible Fire TV Stick 4K, 4K Max or 4K Plus provides a useful balance of price, performance and resolution.",
        ]}
      >
        <CheckGrid
          columns={2}
          items={[
            "Fire TV Stick Lite — HD viewing; use a lightweight player",
            "Fire TV Stick HD — HD/Full HD; check OS and available storage",
            "Fire TV Stick 4K — up to available 4K; practical general option",
            "Fire TV Stick 4K Max — up to available 4K; better for larger libraries",
            "Fire TV Stick 4K Plus — up to available 4K; strong Fire OS option",
            "Fire TV Cube — up to available 4K; stronger permanent setup",
            "Fire TV Stick 4K Select — uses Vega OS; compatibility check required",
            "Fire TV Edition TV — model dependent; check its app store",
          ]}
        />
      </ContentSection>

      <ContentSection
        titleLead="Firestick Alternatives for"
        titleAccent="IPTV"
        intro={[
          "The account may be saved on several compatible devices, but only the purchased number of connections may stream at once. Do not assume that installing the player on two televisions includes two simultaneous connections.",
        ]}
      >
        <CheckGrid
          columns={2}
          items={[
            "Android TV or Google TV — wider compatibility with Android player applications",
            "Smart TV application on Samsung, LG and other Smart TVs",
            "Apple TV — player apps built for tvOS",
            "Windows or Mac — useful for testing login details",
            "Android phone or tablet — temporary viewing and diagnostics",
            "iPhone or iPad — compatible iOS player",
            "MAG or other set-top box — portal address and MAC registration",
          ]}
        />
      </ContentSection>

      <ContentCta
        titleLead="Need Help Choosing a"
        titleAccent="Player?"
        body="Send your exact Fire TV model and we will recommend a compatible player and setup method."
        primary={{ href: ROUTES.installation, label: "Installation Guide", icon: Download }}
        secondary={{
          href: WHATSAPP_DEFAULT_HREF,
          label: "Contact Support",
          icon: Tv,
          external: true,
        }}
      />
    </>
  );
}
