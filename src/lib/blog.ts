import { allowUnknownSourcesPost } from "./allow-unknown-sources-post";
import { firestickVegaOsPost } from "./firestick-vega-os-post";
import { iptvServiceNotWorkingPost } from "./iptv-service-not-working-post";
import { pairFirestickRemotePost } from "./pair-firestick-remote-post";

export type BlogImage = {
  /** Public path, for example `/blog/remote-pairing.jpg`. Leave unset until the photo is ready. */
  src?: string;
  alt: string;
  caption?: string;
};

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { title: string; body: string }[] }
  | { type: "note"; title: string; text: string }
  | { type: "image"; image: BlogImage }
  | { type: "checklist"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "faq"; items: { question: string; answer: string }[] };

export type BlogPost = {
  slug: string;
  title: string;
  /** Browser and search title. Falls back to the article title. */
  metaTitle?: string;
  excerpt: string;
  /** Search description. Falls back to the excerpt. */
  metaDescription?: string;
  date: string;
  readTime: string;
  cover?: BlogImage;
  blocks: BlogBlock[];
};

export function blogPostPath(slug: string): string {
  return `/${slug}/`;
}

export const BLOG_POSTS: BlogPost[] = [
  firestickVegaOsPost,
  allowUnknownSourcesPost,
  iptvServiceNotWorkingPost,
  pairFirestickRemotePost,
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
