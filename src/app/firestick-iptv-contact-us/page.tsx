import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { ConHero } from "@/components/contact/con-hero";
import { ConHelpOptions } from "@/components/contact/con-help-options";
import { ConWhatToInclude } from "@/components/contact/con-what-to-include";
import { ConForm } from "@/components/contact/con-form";
import { ConFAQ } from "@/components/contact/con-faq";
import { ConCTA } from "@/components/contact/con-cta";
import { B1GFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, ROUTES, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES.find((p) => p.path === ROUTES.contact)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

/**
 * Contact section order matches new-content.md Page 7:
 * Hero / contact details → 24-Hour Trial / What to Test →
 * Information Required / Existing Support → Contact Form → FAQs → CTA
 */
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <ConHero />
      <ConHelpOptions />
      <ConWhatToInclude />
      <ConForm />
      <ConFAQ />
      <ConCTA />
      <B1GFooter />
    </main>
  );
}
