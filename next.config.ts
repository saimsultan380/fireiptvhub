import type { NextConfig } from "next";
import { BLOG_POSTS } from "./src/lib/blog";
import { ROUTES } from "./src/lib/routes";

const CANONICAL_ORIGIN = "https://fireiptvhub.com";

type Redirect = {
  source: string;
  destination: string;
  permanent: boolean;
  has?: { type: "host"; value: string }[];
};

function toBothSlashes(source: string, destination: string): Redirect[] {
  const dest =
    destination === "/"
      ? "/"
      : destination.endsWith("/")
        ? destination
        : `${destination}/`;
  const raw = source.replace(/\/$/, "");
  if (!raw || raw === "/") return [];
  return [
    { source: raw, destination: dest, permanent: true },
    { source: `${raw}/`, destination: dest, permanent: true },
  ];
}

const legacyToCanonical: [string, string][] = [
  // Previous Next.js slugs
  ["/b1g-iptv-subscription", ROUTES.subscription],
  ["/b1g-player-installation-guide", ROUTES.installation],
  ["/b1g-player-reseller", ROUTES.reseller],
  ["/contact", ROUTES.contact],
  ["/subscription-plan", ROUTES.subscription],
  ["/installation-guide", ROUTES.installation],
  ["/reseller-panel", ROUTES.reseller],
  ["/setup-instructions", ROUTES.installation],
  ["/compare-plans", ROUTES.subscription],

  // Content-file URLs that differ from live WP finals
  ["/firestick-iptv-subscription", ROUTES.subscription],
  ["/firestick-iptv-reseller", ROUTES.reseller],

  // Flattened WordPress redirect chains → final live URLs
  ["/our-subscription-plans", ROUTES.subscription],
  ["/firestick-iptv-subscription-plans", ROUTES.subscription],
  ["/firestick-iptv-subscription-uk", ROUTES.subscription],
  ["/firestick-iptv-subscription-uk-2026", ROUTES.subscription],
  ["/iptv-firestick-subscription-plans", ROUTES.subscription],

  ["/iptv-reseller-panel-start-your-own-iptv-business", ROUTES.reseller],
  ["/iptv-reseller-panel", ROUTES.reseller],
  ["/iptv-reseller-panel-2026", ROUTES.reseller],
  ["/iptv-reseller-panel-uk", ROUTES.reseller],

  ["/amazon-fire-tv-stick-installation-guide", ROUTES.installation],
  ["/amazon-firestick-installation-guide", ROUTES.installation],
  ["/firestick-downloader-codes-easy-access-to-apps-iptv", ROUTES.installation],
  ["/firestick-downloader-codes", ROUTES.installation],
  [
    "/how-to-install-iptv-smarter-pro-application-from-fire-tv-downloader-by-using-downloader-code",
    ROUTES.installation,
  ],
  ["/how-to-install-iptv-smarter-pro-application", ROUTES.installation],
  ["/how-to-install-iptv-smarters-pro-application", ROUTES.installation],

  ["/contact-us", ROUTES.contact],
  ["/contact-us-2026", ROUTES.contact],

  // Old Firestick UK landing URLs → homepage
  ["/firestick-iptv", ROUTES.home],
  ["/firestick-iptv-uk", ROUTES.home],
  ...BLOG_POSTS.map(
    (post) => [`/blog/${post.slug}`, `/${post.slug}/`] as [string, string]
  ),
];

const nextConfig: NextConfig = {
  trailingSlash: true,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.fireiptvhub.com" }],
        destination: `${CANONICAL_ORIGIN}/:path*`,
        permanent: true,
      },
      {
        source: "/",
        destination: ROUTES.home,
        permanent: true,
      },
      ...legacyToCanonical.flatMap(([source, destination]) =>
        toBothSlashes(source, destination)
      ),
    ];
  },
};

export default nextConfig;
