import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { B1GHeader } from "@/components/sections/b1g-header";
import { B1GFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { BlogArticle } from "@/components/blog/blog-article";
import { BLOG_POSTS, blogPostPath, getBlogPost } from "@/lib/blog";
import { buildPageMetadata, ROUTES } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return buildPageMetadata({
    title: post.metaTitle ?? `${post.title} | Fire IPTV Hub`,
    description: post.metaDescription ?? post.excerpt,
    path: blogPostPath(post.slug),
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-transparent">
      <B1GHeader />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: ROUTES.home },
          { name: "Blog", path: ROUTES.blog },
          { name: post.title, path: blogPostPath(post.slug) },
        ]}
      />
      <BlogArticle post={post} />
      <B1GFooter />
    </main>
  );
}
