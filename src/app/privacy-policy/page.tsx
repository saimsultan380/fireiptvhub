import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { B1GFooter } from "@/components/sections/footer";
import { LegalPageContent } from "@/components/legal/legal-page-content";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, ROUTES, SITE_PAGES } from "@/lib/seo";
import { PRIVACY_EMAIL, SUPPORT_EMAIL } from "@/lib/routes";

const page = SITE_PAGES.find((p) => p.path === ROUTES.privacy)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />
      <LegalPageContent
        title="Privacy Policy"
        lastUpdated="25 August 2026"
        intro={[
          "Data controller: [LEGAL OPERATOR NAME] trading as Fire IPTV Hub",
          "Address: [BUSINESS ADDRESS]",
          `Privacy email: ${PRIVACY_EMAIL}`,
          "This policy explains how Fire IPTV Hub collects, uses, shares and retains personal information when you visit the website, contact support, request a trial, place an order, submit a review, apply for reseller access or submit a privacy or copyright request.",
        ]}
        sections={[
          {
            title: "Information Collected",
            list: [
              "Contact information: name, email, WhatsApp number, country and preferred contact method",
              "Order information: package, duration, amount, payment status, transaction reference, activation date, expiry and connection allowance",
              "Device information: Fire TV model, operating system, player, television resolution and troubleshooting information you provide",
              "Technical information: IP address, browser, device type, approximate location, pages visited, referral source, security logs and cookie choices",
              "Communications: messages, forms, emails, WhatsApp communications and support attachments",
              "Review and reseller information where applicable",
            ],
            paragraphs: ["We do not need your Amazon password, full card number or banking security code."],
          },
          {
            title: "Why Information Is Used",
            list: [
              "Answering enquiries — legitimate interests or pre-contract steps",
              "Checking trial eligibility — legitimate interests",
              "Processing orders and activating accounts — contract",
              "Providing support — contract",
              "Preventing fraud — legitimate interests",
              "Keeping financial records — legal obligation",
              "Sending essential service notices — contract or legitimate interests",
              "Optional marketing — consent",
              "Website analytics — consent where required",
              "Handling legal requests — legal obligation or legitimate interests",
            ],
          },
          {
            title: "Payments, WhatsApp and Cookies",
            paragraphs: [
              "An independent provider may process payments under its own privacy policy. Fire IPTV Hub generally receives the payment amount, status, date and transaction reference rather than complete card information.",
              "If you contact us through WhatsApp, Meta and its providers may process your number, messages and technical information under their own policies.",
              "Essential cookies are required for security, forms, checkout and preference storage. Analytics cookies are used to understand traffic and website performance. Marketing cookies are used only where implemented and permitted.",
            ],
          },
          {
            title: "Sharing, Retention and Security",
            paragraphs: [
              "Information may be shared where necessary with hosting and security providers, payment processors, email and support providers, analytics providers, professional advisers, regulators or law enforcement, or a lawful business successor. We do not sell personal information.",
              "Order and payment records may be retained up to six years. Support messages may be retained up to 24 months after closure. Security logs are normally retained up to 90 days.",
              "Reasonable technical and organisational measures are used to protect personal information. No internet system is completely secure.",
            ],
          },
          {
            title: "Your Rights and Complaints",
            paragraphs: [
              "Depending on the circumstances, you may ask to access, correct, delete, restrict, object to or receive portable information, withdraw consent or complain about processing. Identity verification may be required.",
              `Contact ${PRIVACY_EMAIL} first so the concern can be investigated. You may also complain to the Information Commissioner’s Office at https://ico.org.uk/make-a-complaint/ or telephone 0303 123 1113.`,
              "The website and subscriptions are intended for adults aged 18 or over.",
              `Support: ${SUPPORT_EMAIL}`,
            ],
          },
        ]}
      />
      <B1GFooter />
    </main>
  );
}
