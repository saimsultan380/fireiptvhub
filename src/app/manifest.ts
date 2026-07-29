import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fire IPTV Hub",
    short_name: "Fire IPTV Hub",
    description:
      "Firestick IPTV UK – premium IPTV subscription for Fire TV Stick with 20,000+ live channels, sports, movies and 24/7 support.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#E01E26",
    id: "/",
    scope: "/",
    lang: "en-GB",
    icons: [
      {
        src: "/icons/icon-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
