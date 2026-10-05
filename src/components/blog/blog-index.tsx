"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { BLOG_POSTS, blogPostPath } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogList() {
  const posts = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="w-full py-14 sm:py-20 section-glass">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h1 className="text-h2 font-bold tracking-tight text-[#12141F]">Blog</h1>
        </div>
        <div className="mx-auto mt-5 mb-10 h-px w-full max-w-xs bg-slate-200" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={blogPostPath(post.slug)}
              className="group flex h-full flex-col overflow-hidden rounded-[12px] border border-slate-200 bg-white shadow-[0_8px_24px_-16px_rgba(18,20,31,0.35)] transition-colors hover:border-red-200"
            >
              <div className="relative aspect-[16/10] bg-slate-100">
                {post.cover?.src ? (
                  <Image
                    src={post.cover.src}
                    alt={post.cover.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-slate-300" aria-hidden />
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold text-slate-500">
                  {formatDate(post.date)} · {post.readTime}
                </p>
                <h2 className="mt-2 text-base font-bold text-[#12141F] leading-snug group-hover:text-[#E01E26]">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-slate-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
