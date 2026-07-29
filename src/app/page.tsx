import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { HomeHeroSection } from "@/components/sections/home-hero";
import { HomeWhyChooseSection } from "@/components/sections/home-why-choose";
import { HomePricingSection } from "@/components/sections/home-pricing";
import { DeviceMarquee } from "@/components/sections/device-marquee";
import { HomeDevicesSection } from "@/components/sections/home-devices";
import { HomeFeaturesSection } from "@/components/sections/home-features";
import { HomePaymentsSupportSection } from "@/components/sections/home-payments-support";
import { HomeFAQSection } from "@/components/sections/home-faq";
import { B1GFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES[0];

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <HomeHeroSection />
      <HomeWhyChooseSection />
      <HomePricingSection />
      <DeviceMarquee />
      <HomeDevicesSection />
      <HomeFeaturesSection />
      <HomePaymentsSupportSection />
      <HomeFAQSection />
      <B1GFooter />
    </main>
  );
}
