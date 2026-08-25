import type { Metadata } from "next";
import { ROUTES } from "@/lib/routes";

export { ROUTES };

/** Canonical production origin — always non-www, no trailing slash on origin. */
export const SITE_ORIGIN = "https://fireiptvhub.com";

export const SITE_NAME = "Fire IPTV Hub";

export const SITE_TITLE =
  "Firestick IPTV – 20,000+ Channels & Plans from £12";

export const SITE_DESCRIPTION =
  "Choose Firestick IPTV with 20,000+ live channels, films, series, EPG, guided installation and UK subscription plans from £12. Trial available.";

/**
 * Prefer explicit env in preview/staging; production always resolves to non-www.
 * Strips trailing slash and any accidental www. prefix from the origin.
 */
export function getSiteOrigin(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    (process.env.VERCEL_ENV === "production"
      ? SITE_ORIGIN
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : SITE_ORIGIN);

  try {
    const url = new URL(raw.startsWith("http") ? raw : `https://${raw}`);
    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.slice(4);
    }
    return url.origin;
  } catch {
    return SITE_ORIGIN;
  }
}

/** True when the last path segment looks like a static file (e.g. sitemap.xml). */
function hasFileExtension(pathname: string): boolean {
  const last = pathname.split("/").filter(Boolean).pop() ?? "";
  return /\.[a-z0-9]+$/i.test(last);
}

/** Ensure path is absolute pathname with trailing slash (except `/` and file URLs). */
export function canonicalPath(path: string): string {
  if (!path || path === "/") return "/";
  const trimmed = path.startsWith("/") ? path : `/${path}`;
  const withoutQuery = trimmed.split("?")[0]?.split("#")[0] ?? trimmed;
  if (hasFileExtension(withoutQuery)) {
    return withoutQuery.endsWith("/")
      ? withoutQuery.slice(0, -1)
      : withoutQuery;
  }
  return withoutQuery.endsWith("/") ? withoutQuery : `${withoutQuery}/`;
}

/** Absolute canonical URL (non-www + trailing slash on page paths). */
export function absoluteUrl(path: string = "/"): string {
  const origin = getSiteOrigin();
  const pathname = canonicalPath(path);
  return pathname === "/" ? `${origin}/` : `${origin}${pathname}`;
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  /** When true, skip the root title template (title already includes brand). */
  absoluteTitle?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = true,
}: PageSeoInput): Metadata {
  const pathname = canonicalPath(path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: pathname,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} – Firestick IPTV UK`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/** Indexed marketing routes used by sitemap + internal SEO checks. */
export const SITE_PAGES = [
  {
    path: ROUTES.home,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    changeFrequency: "weekly" as const,
    priority: 1,
    breadcrumbs: [{ name: "Home", path: ROUTES.home }],
  },
  {
    path: ROUTES.subscription,
    title: "Firestick IPTV Subscription UK – Paid Plans from £12",
    description:
      "Compare Firestick IPTV subscription plans for 1, 3, 6 or 12 months. Includes 20,000+ live channels, on-demand viewing and setup help.",
    changeFrequency: "weekly" as const,
    priority: 0.9,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Subscription Plans", path: ROUTES.subscription },
    ],
  },
  {
    path: ROUTES.installation,
    title: "How to Download IPTV on Firestick – Apps & Codes",
    description:
      "Learn how to download IPTV on Firestick, install a player, use Downloader safely, enter your login and fix common setup problems.",
    changeFrequency: "monthly" as const,
    priority: 0.8,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Installation Guide", path: ROUTES.installation },
    ],
  },
  {
    path: ROUTES.reseller,
    title: "Firestick IPTV Reseller UK – Panel & Credits",
    description:
      "Apply for a Firestick IPTV reseller panel with prepaid credits, account tools, setup guidance and clearly explained reseller responsibilities.",
    changeFrequency: "monthly" as const,
    priority: 0.8,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Reseller Panel", path: ROUTES.reseller },
    ],
  },
  {
    path: ROUTES.contact,
    title: "Firestick IPTV Free Trial & UK Support",
    description:
      "Request a 24-hour Firestick IPTV trial, check your device or contact Fire IPTV Hub for installation, account, payment and renewal support.",
    changeFrequency: "monthly" as const,
    priority: 0.7,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Contact Us", path: ROUTES.contact },
    ],
  },
  {
    path: ROUTES.apps,
    title: "Firestick IPTV Apps – Players & Supported Devices",
    description:
      "Compare Firestick IPTV apps and players, check supported Fire TV models and find the best device or Firestick alternative for your setup.",
    changeFrequency: "monthly" as const,
    priority: 0.8,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Apps and Devices", path: ROUTES.apps },
    ],
  },
  {
    path: ROUTES.best,
    title: "Best IPTV for Firestick UK 2026 – What to Check",
    description:
      "Learn how to choose the best IPTV for Firestick in the UK by comparing apps, trials, paid and free options, device support and genuine reviews.",
    changeFrequency: "monthly" as const,
    priority: 0.8,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Best IPTV for Firestick", path: ROUTES.best },
    ],
  },
  {
    path: ROUTES.about,
    title: "About Fire IPTV Hub – Firestick IPTV UK",
    description:
      "Learn how Fire IPTV Hub helps UK customers choose, test and install Firestick IPTV with clearer prices, device checks and setup support.",
    changeFrequency: "monthly" as const,
    priority: 0.6,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "About Us", path: ROUTES.about },
    ],
  },
  {
    path: ROUTES.terms,
    title: "Terms of Service | Fire IPTV Hub",
    description:
      "Read the terms covering Fire IPTV Hub subscriptions, trials, payments, compatibility, acceptable use, cancellations and customer accounts.",
    changeFrequency: "yearly" as const,
    priority: 0.3,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Terms of Service", path: ROUTES.terms },
    ],
  },
  {
    path: ROUTES.privacy,
    title: "Privacy Policy | Fire IPTV Hub",
    description:
      "Learn what information Fire IPTV Hub collects, why it is used, how long it is retained and your UK data-protection rights.",
    changeFrequency: "yearly" as const,
    priority: 0.3,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Privacy Policy", path: ROUTES.privacy },
    ],
  },
  {
    path: ROUTES.refund,
    title: "Refund & Cancellation Policy | Fire IPTV Hub",
    description:
      "Read the Fire IPTV Hub cancellation and refund rules for trials, activation, duplicate payments, compatibility and subscription problems.",
    changeFrequency: "yearly" as const,
    priority: 0.3,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Refund Policy", path: ROUTES.refund },
    ],
  },
  {
    path: ROUTES.copyright,
    title: "Copyright & DMCA Policy | Fire IPTV Hub",
    description:
      "Submit a copyright or trademark notice concerning material hosted or controlled by FireIPTVHub.com and review our takedown process.",
    changeFrequency: "yearly" as const,
    priority: 0.3,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Copyright Policy", path: ROUTES.copyright },
    ],
  },
] as const;
