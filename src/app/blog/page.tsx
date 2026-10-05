import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { B1GFooter } from "@/components/sections/footer";
import { BlogList } from "@/components/blog/blog-index";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, ROUTES, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES.find((p) => p.path === ROUTES.blog)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />
      <BlogList />
      <B1GFooter />
    </main>
  );
}
