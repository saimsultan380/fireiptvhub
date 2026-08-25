import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { ResHero } from "@/components/reseller/res-hero";
import { ResIntro } from "@/components/reseller/res-intro";
import { ResCreditsWork } from "@/components/reseller/res-credits-work";
import { ResBenefits } from "@/components/reseller/res-benefits";
import { ResFeatures } from "@/components/reseller/res-features";
import { ResPackages } from "@/components/reseller/res-packages";
import { ResFAQ } from "@/components/reseller/res-faq";
import { ResCTA } from "@/components/reseller/res-cta";
import { B1GFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, ROUTES, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES.find((p) => p.path === ROUTES.reseller)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

/**
 * Reseller section order matches new-content.md Page 6:
 * Hero → What Panel Can Do → How Credits Work → Who Should / Should Not →
 * Responsibilities → Application Process / Form → FAQs → CTA
 */
export default function ResellerPanelPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <ResHero />
      <ResIntro />
      <ResCreditsWork />
      <ResBenefits />
      <ResFeatures />
      <ResPackages />
      <ResFAQ />
      <ResCTA />
      <B1GFooter />
    </main>
  );
}
