/** Canonical route paths (trailing slash on all marketing pages). */
export const ROUTES = {
  home: "/firestick-iptv-uk-2026/",
  subscription: "/iptv-firestick-subscription-plans-2026/",
  installation: "/firestick-iptv-installation-guide/",
  reseller: "/iptv-reseller-panel-uk-2026/",
  contact: "/firestick-iptv-contact-us/",
  apps: "/firestick-iptv-apps/",
  best: "/best-iptv-for-firestick/",
  about: "/about/",
  blog: "/blog/",
  terms: "/terms-of-service/",
  privacy: "/privacy-policy/",
  refund: "/refund-policy/",
  copyright: "/copyright-policy/",
} as const;

export const WHATSAPP_HREF = "https://wa.me/447848177296";
export const WHATSAPP_DISPLAY = "+44 7848 177296";
export const SUPPORT_EMAIL = "support@fireiptvhub.com";
export const PRIVACY_EMAIL = "privacy@fireiptvhub.com";
export const REFUNDS_EMAIL = "refunds@fireiptvhub.com";
export const COPYRIGHT_EMAIL = "copyright@fireiptvhub.com";

/** Homepage pricing section (View Plans CTAs). */
export const HOME_PRICING_HREF = `${ROUTES.home}#pricing`;

export const WHATSAPP_DEFAULT_MESSAGE = "Firestick subscription";

export function whatsappHref(message?: string): string {
  if (!message?.trim()) return WHATSAPP_HREF;
  return `${WHATSAPP_HREF}?text=${encodeURIComponent(message.trim())}`;
}

/** General WhatsApp CTA (trial, floating button, support). */
export const WHATSAPP_DEFAULT_HREF = whatsappHref(WHATSAPP_DEFAULT_MESSAGE);

export const WHATSAPP_TRIAL_HREF = WHATSAPP_DEFAULT_HREF;
export const WHATSAPP_ORDER_HREF = WHATSAPP_DEFAULT_HREF;

/** Package CTA — includes Firestick subscription + selected plan. */
export function whatsappPlanHref(
  planName: string,
  price: string,
  packageType?: string
): string {
  const packageLabel = packageType
    ? `${packageType} ${planName} (${price})`
    : `${planName} (${price})`;

  return whatsappHref(`${WHATSAPP_DEFAULT_MESSAGE}\n${packageLabel}`);
}
