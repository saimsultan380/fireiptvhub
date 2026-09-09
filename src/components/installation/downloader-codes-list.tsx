"use client";

import React, { useState } from "react";
import { Clipboard, Check } from "lucide-react";
import { DOWNLOADER_APPS } from "@/lib/downloader-codes";

export function DownloaderCodesList({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-3">
      {DOWNLOADER_APPS.map((app, idx) => (
        <React.Fragment key={app.code}>
          {idx > 0 && (
            <div className="flex items-center gap-3 py-0.5">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-400">
                or
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>
          )}
          <div
            className={`rounded-[12px] border border-slate-100 bg-slate-50/50 ${
              compact ? "p-3" : "p-4"
            }`}
          >
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
              {app.apk}
            </span>
            <div className="flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                  Downloader
                </span>
                <span
                  className={`font-extrabold text-[#E01E26] tracking-tight ${
                    compact ? "text-xl" : "text-2xl"
                  }`}
                >
                  {app.code}
                </span>
              </div>
              <button
                type="button"
                onClick={() => copyCode(app.code)}
                className="text-slate-400 hover:text-[#E01E26] transition-colors p-1.5 rounded-lg border border-slate-200 bg-white shrink-0"
                title={`Copy ${app.code}`}
              >
                {copiedCode === app.code ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Clipboard className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
