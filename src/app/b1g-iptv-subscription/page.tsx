import React from "react";
import { FireHeader } from "@/components/sections/fire-header";
import { FireHeroSection } from "@/components/sections/fire-hero-section";
import { WhyChooseSection } from "@/components/sections/fire-why-choose";
import { FirePricing } from "@/components/sections/fire-pricing";
import { FireFeatures } from "@/components/sections/fire-features";
import { FirePlanGuide } from "@/components/sections/fire-plan-guide";
import { FireInstantActivation } from "@/components/sections/fire-instant-activation";
import { FireFAQ } from "@/components/sections/fire-faq";
import { FireFooter } from "@/components/sections/fire-footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES.find((p) => p.path === "/b1g-iptv-subscription/")!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function SubscriptionPlansPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <FireHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <FireHeroSection />
      <WhyChooseSection />
      <FirePricing />
      <FireFeatures />
      <FirePlanGuide />
      <FireInstantActivation />
      <FireFAQ />
      <FireFooter />
    </main>
  );
}
