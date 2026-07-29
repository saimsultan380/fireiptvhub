import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { InstHero } from "@/components/installation/inst-hero";
import { InstBeforeBegin } from "@/components/installation/inst-before-begin";
import { InstSetupSteps } from "@/components/installation/inst-setup-steps";
import { InstQuickFixes } from "@/components/installation/inst-quick-fixes";
import { InstCTA } from "@/components/installation/inst-cta";
import { InstFAQ } from "@/components/installation/inst-faq";
import { B1GFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES.find(
  (p) => p.path === "/b1g-player-installation-guide/"
)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function InstallationGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <InstHero />
      <InstBeforeBegin />
      <InstSetupSteps />
      <InstQuickFixes />
      <InstFAQ />
      <InstCTA />
      <B1GFooter />
    </main>
  );
}
