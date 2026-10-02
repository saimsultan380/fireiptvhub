import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { HomeHeroSection } from "@/components/sections/home-hero";
import { HomeMadeSimpleSection, HomeWhatIsSection } from "@/components/sections/home-why-choose";
import { HomePricingSection } from "@/components/sections/home-pricing";
import { HomeFeaturesSection } from "@/components/sections/home-features";
import { HomeDevicesSection } from "@/components/sections/home-devices";
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

/**
 * Homepage order: hero, What Is Firestick IPTV, then plans.
 */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-transparent">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <HomeHeroSection />
      <HomeWhatIsSection />
      <HomePricingSection />
      <HomeMadeSimpleSection />
      <HomeFeaturesSection />
      <HomeDevicesSection />
      <HomePaymentsSupportSection />
      <HomeFAQSection />
      <B1GFooter />
    </main>
  );
}
