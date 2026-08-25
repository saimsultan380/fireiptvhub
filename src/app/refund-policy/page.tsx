import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { B1GFooter } from "@/components/sections/footer";
import { LegalPageContent } from "@/components/legal/legal-page-content";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, ROUTES, SITE_PAGES } from "@/lib/seo";
import { REFUNDS_EMAIL, SUPPORT_EMAIL, WHATSAPP_DISPLAY } from "@/lib/routes";

const page = SITE_PAGES.find((p) => p.path === ROUTES.refund)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />
      <LegalPageContent
        title="Refund and Cancellation Policy"
        lastUpdated="25 August 2026"
        intro={[
          "This policy explains how cancellations, refunds and subscription problems are handled. It does not remove statutory consumer rights.",
          "Eligible customers can request a 24-hour trial and should test their exact Fire TV device, player, broadband, Wi-Fi, preferred categories, programme guide, normal viewing time and available picture quality before choosing a longer plan.",
        ]}
        sections={[
          {
            title: "Cancellation Before Activation",
            paragraphs: [
              "If you cancel before digital access has been activated, the payment will normally be returned in full. Contact refunds@fireiptvhub.com immediately with the order reference.",
            ],
          },
          {
            title: "Immediate Activation",
            paragraphs: [
              "Customers generally request activation without waiting through a cancellation period. Where required, checkout will ask you to request immediate supply and acknowledge how immediate digital delivery affects the right to cancel. Where a statutory right remains available, it will be honoured.",
            ],
          },
          {
            title: "Service Not Working as Described",
            paragraphs: [
              "Contact support promptly. Reasonable checks may include confirming login details, testing other channels, checking account expiry, restarting the player, checking Firestick internet speed, confirming app compatibility and supplying an error message.",
              "Where a genuine fault cannot be corrected within a reasonable period, an appropriate legal remedy will be considered.",
            ],
          },
          {
            title: "Duplicate Payments",
            paragraphs: [
              "A verified duplicate or incorrect charge will be refunded to the original payment method. Provide the date, amount and transaction reference. Do not send full card details.",
            ],
          },
          {
            title: "Situations That Do Not Normally Create an Automatic Refund",
            list: [
              "One channel changes",
              "A particular programme becomes unavailable",
              "The customer’s Wi-Fi is unstable",
              "An unsupported device was used without checking",
              "Credentials were shared",
              "The connection limit was exceeded",
              "A third-party player changed",
              "Every stream was expected to be 4K",
              "Access was suspended for a serious terms breach",
              "The customer changes their mind after requesting immediate supply",
            ],
            paragraphs: ["Every request will still be considered on its facts."],
          },
          {
            title: "Requesting a Refund",
            paragraphs: [
              `Email ${REFUNDS_EMAIL} with your name, order reference, payment date, amount, package, device, player, description of the problem, troubleshooting completed and preferred contact method.`,
              "Approved refunds are returned through the original payment method where possible. Banks and payment providers may take approximately 5–10 working days to display the credit.",
              "Reseller purchases are governed by the reseller agreement supplied before payment. Credits already used to create or extend an account cannot normally be reversed unless incorrectly deducted or the law requires another remedy.",
              `Refunds: ${REFUNDS_EMAIL} | Support: ${SUPPORT_EMAIL} | WhatsApp: ${WHATSAPP_DISPLAY}`,
            ],
          },
        ]}
      />
      <B1GFooter />
    </main>
  );
}
