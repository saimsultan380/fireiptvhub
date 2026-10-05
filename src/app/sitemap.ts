import type { MetadataRoute } from "next";
import { BLOG_POSTS, blogPostPath } from "@/lib/blog";
import { SITE_PAGES, absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = SITE_PAGES.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const posts = BLOG_POSTS.map((post) => ({
    url: absoluteUrl(blogPostPath(post.slug)),
    lastModified: new Date(`${post.date}T00:00:00`),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
