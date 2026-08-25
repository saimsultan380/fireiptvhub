import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { B1GFooter } from "@/components/sections/footer";
import { LegalPageContent } from "@/components/legal/legal-page-content";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, ROUTES, SITE_PAGES } from "@/lib/seo";
import { SUPPORT_EMAIL, WHATSAPP_DISPLAY } from "@/lib/routes";

const page = SITE_PAGES.find((p) => p.path === ROUTES.terms)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />
      <LegalPageContent
        title="Terms of Service"
        lastUpdated="25 August 2026"
        intro={[
          "Legal operator: [LEGAL OPERATOR NAME]",
          "Trading name: Fire IPTV Hub",
          "Business address: [BUSINESS ADDRESS]",
          "Website: https://fireiptvhub.com",
          `Email: ${SUPPORT_EMAIL}`,
          "These terms govern your use of FireIPTVHub.com and any trial, subscription, installation assistance or reseller access supplied through the website. By placing an order or using an activated account, you agree to these terms. You must be at least 18 years old and legally able to enter a contract.",
        ]}
        sections={[
          {
            title: "Service Description",
            paragraphs: [
              "Fire IPTV Hub supplies fixed-term subscription access, compatible login details and reasonable setup assistance for supported devices and player applications.",
              "Features may include live television, on-demand content, programme information and different stream resolutions. The current order page, written confirmation and any specific compatibility or channel confirmation form part of the service description.",
            ],
          },
          {
            title: "Device Requirements",
            list: [
              "Compatible device",
              "Suitable player application",
              "Stable internet connection",
              "Sufficient device storage",
              "Television supporting the selected resolution",
              "Permission to install and use the software",
            ],
            paragraphs: ["A third-party player may charge its own licence fee."],
          },
          {
            title: "Trials",
            list: [
              "Limited to one per person, household or device unless agreed otherwise",
              "Subject to capacity",
              "For personal evaluation",
              "Not guaranteed for a specific event",
              "Disabled at expiry",
              "Not for resale or redistribution",
            ],
          },
          {
            title: "Orders and Prices",
            paragraphs: [
              "An order is accepted when payment is confirmed, required compatibility information is received and activation details are issued. The subscription begins at activation unless another start time is agreed in writing.",
              "Prices are shown in pounds sterling unless stated otherwise. Fixed-term plans do not renew automatically unless recurring billing is clearly displayed and expressly accepted.",
            ],
          },
          {
            title: "Account Security and Acceptable Use",
            paragraphs: [
              "You must not share credentials publicly, sell access without reseller approval, exceed the connection allowance, copy or interfere with the service, circumvent account controls or use the service unlawfully.",
              "The service must not be used to infringe intellectual-property rights, bypass restrictions unlawfully, redistribute or restream content, operate an unauthorised public exhibition, send spam, commit fraud, introduce malware, attack the infrastructure or misrepresent affiliation with another business.",
            ],
          },
          {
            title: "Content Availability and Performance",
            paragraphs: [
              "Channels, films, series, programme schedules, subtitles, audio and resolutions can change because of source availability, content rights, maintenance or technical requirements.",
              "Unless confirmed in writing as essential to an order, a subscription does not guarantee permanent availability of one individual channel, programme or event.",
              "We do not guarantee uninterrupted operation, a fixed uptime percentage or completely buffering-free playback.",
            ],
          },
          {
            title: "Support, Cancellation and Liability",
            paragraphs: [
              "Support covers reasonable assistance with activation, login entry, compatible player setup, EPG refresh, common playback checks, renewals and account questions. Support does not include home-network repair, television repair or control of your Amazon account.",
              "Cancellation and refund requests are handled under the Refund Policy and applicable law.",
              "Nothing limits liability for fraud, death or personal injury caused by negligence or another liability that cannot legally be limited.",
            ],
          },
          {
            title: "Governing Law and Contact",
            paragraphs: [
              "These terms are governed by the laws of England and Wales. Consumers elsewhere retain mandatory protections applicable to them.",
              `Email: ${SUPPORT_EMAIL}`,
              `WhatsApp: ${WHATSAPP_DISPLAY}`,
            ],
          },
        ]}
      />
      <B1GFooter />
    </main>
  );
}
