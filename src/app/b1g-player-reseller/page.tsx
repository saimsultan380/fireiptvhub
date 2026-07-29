import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { ResHero } from "@/components/reseller/res-hero";
import { ResIntro } from "@/components/reseller/res-intro";
import { ResBenefits } from "@/components/reseller/res-benefits";
import { ResCreditsWork } from "@/components/reseller/res-credits-work";
import { ResPackages } from "@/components/reseller/res-packages";
import { ResFeatures } from "@/components/reseller/res-features";
import { ResFAQ } from "@/components/reseller/res-faq";
import { ResCTA } from "@/components/reseller/res-cta";
import { B1GFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES.find((p) => p.path === "/b1g-player-reseller/")!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function ResellerPanelPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <ResHero />
      <ResIntro />
      <ResBenefits />
      <ResCreditsWork />
      <ResPackages />
      <ResFeatures />
      <ResFAQ />
      <ResCTA />
      <B1GFooter />
    </main>
  );
}
