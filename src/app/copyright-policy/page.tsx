import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { B1GFooter } from "@/components/sections/footer";
import { LegalPageContent } from "@/components/legal/legal-page-content";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, ROUTES, SITE_PAGES } from "@/lib/seo";
import { COPYRIGHT_EMAIL, SUPPORT_EMAIL } from "@/lib/routes";

const page = SITE_PAGES.find((p) => p.path === ROUTES.copyright)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function CopyrightPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />
      <LegalPageContent
        title="Copyright and Takedown Policy"
        lastUpdated="25 August 2026"
        intro={[
          "Fire IPTV Hub respects copyright, trademark and other intellectual-property rights.",
          "This policy explains how a rights holder can report material hosted, published or controlled by FireIPTVHub.com. Properly formed UK copyright notices and United States Digital Millennium Copyright Act notices will be considered where applicable.",
        ]}
        sections={[
          {
            title: "Website Content and Scope",
            paragraphs: [
              "Original Fire IPTV Hub text, design, graphics and branding may not be copied, republished or commercially reused without permission.",
              "Third-party product names, programme titles, logos and trademarks remain the property of their owners. Descriptive compatibility references do not imply endorsement.",
              "This procedure applies to material Fire IPTV Hub can reasonably control. We cannot remove content from an unrelated website, app store, social network or external service.",
            ],
          },
          {
            title: "Information Required for a Copyright Notice",
            list: [
              "Full legal name and contact details",
              "Rights-holder name and authority to act where applicable",
              "Description of the protected work and evidence of ownership",
              "Exact disputed URL and location of the material",
              "Good-faith statement that the use is not authorised",
              "Statement that the supplied information is accurate",
              "Required authority or perjury statement for a DMCA notice",
              "Physical or valid electronic signature",
            ],
            paragraphs: [
              `Send to: ${COPYRIGHT_EMAIL}`,
              "Subject: Copyright Notice – [Name of Work]",
            ],
          },
          {
            title: "Our Response",
            paragraphs: [
              "We may acknowledge the notice, request missing information, review the identified URL, temporarily restrict material, contact the uploader, remove or disable material, preserve relevant evidence or reject incomplete or unsupported notices.",
              "Submission does not guarantee removal where permission, ownership, an exception or lawful use is disputed.",
            ],
          },
          {
            title: "Counter-Notice, False Notices and Trademark Reports",
            paragraphs: [
              "If material was removed by mistake, the affected party may provide full legal name, contact information, identification of the removed material, original location, explanation of the mistake, any required jurisdiction statement and a physical or valid electronic signature.",
              "Do not knowingly submit false ownership claims, altered evidence, notices intended to silence lawful criticism or misleading authority statements.",
              "For trademark reports, provide the relevant trademark, registration number and territory if applicable, evidence of ownership, disputed URL, explanation of likely confusion, and your authority and contact details.",
            ],
          },
          {
            title: "Independent Service Notice",
            paragraphs: [
              "Fire IPTV Hub is not affiliated with, sponsored by or endorsed by Amazon, broadcasters, television manufacturers or third-party player developers.",
              `Copyright and trademarks: ${COPYRIGHT_EMAIL} | General support: ${SUPPORT_EMAIL}`,
            ],
          },
        ]}
      />
      <B1GFooter />
    </main>
  );
}
