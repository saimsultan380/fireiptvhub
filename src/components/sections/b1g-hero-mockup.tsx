"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";

const LEFT_ROWS = [
  "My Account",
  "Display & Audio",
  "Parental",
  "Subtitles",
  "Remote Control",
  "Time & Duration",
  "Setup",
  "Preferences",
];

const RIGHT_ROWS = [
  "Installed Apps",
  "Update List",
  "Device Cleaner",
  "New Update",
  "Manual Install",
  "System",
  "Permission",
  "My Library",
];

const TILES = ["Movies", "Series", "Live with EPG", "Multi-Screen", "Catch Up"];

export function B1GHeroMockup() {
  return (
    <FadeIn delay={0.18} duration={0.5} yOffset={22} className="w-full">
      <div className="relative w-full max-w-2xl mx-auto lg:max-w-none py-2 flex items-center justify-center bg-transparent">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[78%] w-[92%] -translate-x-1/2 -translate-y-[48%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(247,24,17,0.32)_0%,rgba(247,24,17,0.14)_38%,transparent_70%)] blur-2xl sm:blur-3xl"
        />
        <div className="relative z-10 w-full flex items-center justify-center bg-transparent">
          <div
            className="hero-tv relative mx-auto w-full overflow-hidden aspect-[1000/600] max-h-[45vh] sm:max-h-[55vh] lg:max-h-none max-w-[min(100%,calc(45vh*1000/600))] sm:max-w-[min(100%,calc(55vh*1000/600))] lg:max-w-none"
            role="img"
            aria-label="Animated Firestick IPTV television preview"
          >
            <div className="hero-tv__stage">
              <aside className="hero-tv__panel hero-tv__panel--left">
                <div className="hero-tv__panel-title">Settings</div>
                {LEFT_ROWS.map((row, i) => (
                  <div key={row} className={`hero-tv__row${i === 0 ? " is-on" : ""}`}>
                    <span className="hero-tv__dot" />
                    <span>{row}</span>
                  </div>
                ))}
              </aside>

              <div className="hero-tv__set">
                <div className="hero-tv__bezel">
                  <div className="hero-tv__screen">
                    <div className="hero-tv__scene hero-tv__scene--home">
                      <div className="hero-tv__ui">
                        <div className="hero-tv__bar">
                          <span className="hero-tv__brand">IPTV</span>
                          <div className="hero-tv__icons">
                            <span className="hero-tv__icon" />
                            <span className="hero-tv__icon" />
                            <span className="hero-tv__icon" />
                            <span className="hero-tv__icon" />
                          </div>
                        </div>
                        <div className="hero-tv__grid">
                          <div className="hero-tv__tile hero-tv__tile--hero is-live">
                            <span className="hero-tv__glyph" />
                            <span className="hero-tv__tile-label">Live TV</span>
                          </div>
                          {TILES.map((label, i) => (
                            <div
                              key={label}
                              className={`hero-tv__tile${i === 0 ? " hero-tv__tile--wide" : ""}`}
                            >
                              <span className="hero-tv__glyph" />
                              <span className="hero-tv__tile-label">{label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="hero-tv__scene hero-tv__scene--live">
                      <div className="hero-tv__pitch">
                        <div className="hero-tv__crowd" />
                        <div className="hero-tv__grass" />
                        <div className="hero-tv__ball" />
                        <div className="hero-tv__hud">
                          <span className="hero-tv__live">LIVE</span>
                          <span className="hero-tv__score">ARS 2 – 1 CHE · 67′</span>
                        </div>
                        <div className="hero-tv__ticker">
                          <span>Sky Sports · Premier League · Full HD stream · 20,000+ live channels</span>
                        </div>
                      </div>
                    </div>

                    <div className="hero-tv__scene hero-tv__scene--movies">
                      <div className="hero-tv__posters">
                        <span className="hero-tv__poster" />
                        <span className="hero-tv__poster" />
                        <span className="hero-tv__poster" />
                        <span className="hero-tv__poster" />
                      </div>
                    </div>

                    <div className="hero-tv__scan" />
                    <div className="hero-tv__glare" />
                  </div>
                  <div className="hero-tv__stand" />
                </div>
              </div>

              <aside className="hero-tv__panel hero-tv__panel--right">
                <div className="hero-tv__panel-title">Applications</div>
                {RIGHT_ROWS.map((row, i) => (
                  <div key={row} className={`hero-tv__row${i === 0 ? " is-on" : ""}`}>
                    <span className="hero-tv__dot" />
                    <span>{row}</span>
                  </div>
                ))}
              </aside>

              <div className="hero-tv__gear">
                <div className="hero-tv__stick" />
                <div className="hero-tv__remote" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
