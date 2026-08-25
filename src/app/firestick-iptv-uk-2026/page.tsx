import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { HomeHeroSection } from "@/components/sections/home-hero";
import { HomeWhyChooseSection } from "@/components/sections/home-why-choose";
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
 * Homepage section order matches new-content.md Page 1:
 * Hero → What Is → Plans → What Is Included → Installation Help /
 * Choosing Best / Why People Use → How to Start / Before Ordering /
 * Free vs Paid / Performance / Compatible Devices → FAQs → Ready CTA
 */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-transparent">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <HomeHeroSection />
      <HomeWhyChooseSection />
      <HomePricingSection />
      <HomeFeaturesSection />
      <HomeDevicesSection />
      <HomePaymentsSupportSection />
      <HomeFAQSection />
      <B1GFooter />
    </main>
  );
}
