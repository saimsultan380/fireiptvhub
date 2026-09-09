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

export function whatsappHref(message?: string): string {
  if (!message?.trim()) return WHATSAPP_HREF;
  return `${WHATSAPP_HREF}?text=${encodeURIComponent(message.trim())}`;
}

export const WHATSAPP_TRIAL_HREF = whatsappHref(
  "Hi, I'd like to request a 24-hour Firestick IPTV trial."
);

export const WHATSAPP_ORDER_HREF = whatsappHref(
  "Hi, I'd like to order a Firestick IPTV subscription plan."
);

export function whatsappPlanHref(planName: string, price: string): string {
  return whatsappHref(
    `Hi, I'd like the ${planName} Firestick IPTV plan (${price}).`
  );
}
