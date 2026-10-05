import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ImageIcon } from "lucide-react";
import type { BlogImage, BlogPost } from "@/lib/blog";
import { ROUTES } from "@/lib/routes";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function ArticleImage({
  image,
  priority = false,
}: {
  image: BlogImage;
  priority?: boolean;
}) {
  return (
    <figure className="my-8">
      <div className="relative aspect-[16/9] overflow-hidden rounded-[16px] border border-slate-200 bg-slate-50">
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes="(min-width: 768px) 720px, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-white text-slate-400 border border-slate-200">
              <ImageIcon className="h-5 w-5" />
            </span>
            <p className="max-w-md text-xs sm:text-sm font-semibold text-slate-500 leading-relaxed">
              {image.alt}
            </p>
          </div>
        )}
      </div>
      {image.caption ? (
        <figcaption className="mt-2 text-center text-xs font-medium text-slate-500">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function BlogArticle({ post }: { post: BlogPost }) {
  const cover = post.cover ?? { alt: post.title };

  return (
    <article className="w-full py-10 sm:py-16 section-glass">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 w-full">
        <Link href={ROUTES.blog} className="text-sm font-bold text-[#E01E26] hover:underline">
          Back to Blog
        </Link>
        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-slate-500">
          {formatDate(post.date)} · {post.readTime}
        </p>
        <h1 className="mt-3 text-[1.7rem] sm:text-4xl font-bold tracking-tight text-[#12141F] leading-tight">
          {post.title}
        </h1>
        <ArticleImage image={cover} priority />

        <div className="space-y-5 text-[15px] sm:text-base leading-relaxed text-slate-700">
          {post.blocks.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={index}
                  className="pt-6 text-2xl font-bold tracking-tight text-[#12141F]"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "h3") {
              return (
                <h3 key={index} className="pt-2 text-lg font-bold text-[#12141F]">
                  {block.text}
                </h3>
              );
            }

            if (block.type === "note") {
              return (
                <aside
                  key={index}
                  className="rounded-[12px] border border-red-100 bg-white p-5 shadow-[inset_4px_0_0_0_#E01E26]"
                >
                  <p className="text-sm font-bold text-[#12141F]">{block.title}</p>
                  <p className="mt-2 text-sm sm:text-base font-medium text-slate-600 leading-relaxed">
                    {block.text}
                  </p>
                </aside>
              );
            }

            if (block.type === "steps") {
              return (
                <ol key={index} className="space-y-3">
                  {block.items.map((item, stepIndex) => (
                    <li
                      key={item.title}
                      className="flex gap-4 rounded-[12px] border border-slate-200 bg-white p-4 sm:p-5"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E01E26] to-[#B5121A] text-sm font-bold text-white">
                        {stepIndex + 1}
                      </span>
                      <div>
                        <p className="font-bold text-[#12141F]">{item.title}</p>
                        <p className="mt-1.5 text-sm sm:text-base font-medium text-slate-600 leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              );
            }

            if (block.type === "list") {
              return (
                <ul key={index} className="space-y-2">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-[10px] border border-slate-200 bg-white px-4 py-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E01E26]" />
                      <span className="text-sm sm:text-base font-medium text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            if (block.type === "checklist") {
              return (
                <ul key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-[10px] border border-slate-200 bg-white px-4 py-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E01E26]" />
                      <span className="text-sm font-semibold text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            if (block.type === "table") {
              return (
                <div key={index} className="overflow-x-auto rounded-[12px] border border-slate-200 bg-white">
                  <table className="w-full min-w-[520px] text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        {block.headers.map((header) => (
                          <th
                            key={header}
                            className="px-4 py-3 font-bold text-[#12141F]"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row) => (
                        <tr key={row.join("-")} className="border-t border-slate-100">
                          {row.map((cell, cellIndex) => (
                            <td
                              key={`${row[0]}-${cellIndex}`}
                              className={`px-4 py-3 font-medium text-slate-600 ${
                                cellIndex === 0 ? "font-bold text-[#12141F]" : ""
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }

            if (block.type === "faq") {
              return (
                <div key={index} className="space-y-3">
                  {block.items.map((item) => (
                    <details
                      key={item.question}
                      className="group rounded-[12px] border border-slate-200 bg-white px-5 py-4"
                    >
                      <summary className="cursor-pointer list-none font-bold text-[#12141F] leading-snug [&::-webkit-details-marker]:hidden">
                        {item.question}
                      </summary>
                      <p className="mt-3 whitespace-pre-line text-sm sm:text-base font-medium text-slate-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              );
            }

            if (block.type === "image") {
              return <ArticleImage key={index} image={block.image} />;
            }

            return (
              <p key={index} className="font-medium text-slate-600 leading-relaxed">
                {block.text}
              </p>
            );
          })}
        </div>
      </div>
    </article>
  );
}
