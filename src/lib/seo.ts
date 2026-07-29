import type { Metadata } from "next";

/** Canonical production origin — always non-www, no trailing slash on origin. */
export const SITE_ORIGIN = "https://fireiptvhub.com";

export const SITE_NAME = "Fire IPTV Hub";

export const SITE_TITLE =
  "#1 Firestick IPTV UK – Premium IPTV Subscription for Fire TV Stick in 2026";

export const SITE_DESCRIPTION =
  "What if one subscription covered every match, every movie night, and every channel your family actually watches? Fire IPTV Hub UK delivers 20,000+ live channels, a huge on-demand library, and complete sports coverage to every Fire TV device.";

/** Canonical route paths (always trailing slash except homepage `/`). */
export const ROUTES = {
  home: "/",
  subscription: "/b1g-iptv-subscription/",
  installation: "/b1g-player-installation-guide/",
  reseller: "/b1g-player-reseller/",
  contact: "/contact/",
} as const;

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
    title: "Firestick IPTV Subscription Plans UK 2026 – Flexible, Affordable & Built for Every Viewer",
    description:
      "Your entertainment shouldn’t be locked into someone else’s schedule — or someone else’s contract. At Fire IPTV Hub UK, every Firestick IPTV subscription UK plan puts you in charge.",
    changeFrequency: "weekly" as const,
    priority: 0.9,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Subscription Plans", path: ROUTES.subscription },
    ],
  },
  {
    path: ROUTES.installation,
    title: "Fire TV Stick Installation Guide – Easy Setup for All Firestick Models (2026)",
    description:
      "Just unboxed a new Fire TV Stick and not sure where to start? This Fire TV Stick installation guide takes you from the sealed box to your first live stream in around fifteen minutes.",

    changeFrequency: "monthly" as const,
    priority: 0.8,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Installation Guide", path: ROUTES.installation },
    ],
  },
  {
    path: ROUTES.reseller,
    title: "Start Your IPTV Business Today with the Best IPTV Reseller Panels in UK 2026",
    description:
      "Want to earn money by selling Firestick IPTV subscriptions UK? With Firestick IPTV reseller panels in the UK, start your own IPTV business with instant activation credits and full account control.",
    changeFrequency: "monthly" as const,
    priority: 0.8,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Reseller Panel", path: ROUTES.reseller },
    ],
  },
  {
    path: ROUTES.contact,
    title: "Contact Firestick IPTV Support – 24/7 Help",
    description:
      "Have questions about your Firestick IPTV subscription, installation, or reseller panel? Our support team is here to help you 24/7.",
    changeFrequency: "monthly" as const,
    priority: 0.7,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Contact Us", path: ROUTES.contact },
    ],
  },
] as const;
