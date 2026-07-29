"use client";

import { useEffect } from "react";
import { playCtaClickSound, unlockCtaClickSound } from "@/lib/cta-click-sound";

function classNameOf(el: Element): string {
  if (el instanceof SVGElement) return el.getAttribute("class") ?? "";
  if (el instanceof HTMLElement) {
    return typeof el.className === "string"
      ? el.className
      : (el.className as SVGAnimatedString | undefined)?.baseVal ?? "";
  }
  return "";
}

function looksLikeCta(el: Element): boolean {
  if (!(el instanceof HTMLElement)) return false;
  if (el.closest("[data-no-click-sound]")) return false;
  if (el.getAttribute("data-cta") === "true") return true;

  const cls = classNameOf(el);

  if (cls.includes("shine-effect")) return true;

  // Gradient CTAs
  if (
    cls.includes("from-[#E01E26]") ||
    cls.includes("from-[#e01e26]") ||
    cls.includes("via-[#EE2830]") ||
    cls.includes("to-[#B5121A]")
  ) {
    return true;
  }

  // Solid brand fill (pricing toggles, chips, etc.)
  if (cls.includes("bg-[#E01E26]") || cls.includes("bg-[#e01e26]")) return true;

  // Outline CTAs
  if (cls.includes("border-[#E01E26]") && (cls.includes("border-2") || cls.includes("border-2 "))) {
    return true;
  }

  return false;
}

function resolveCtaTarget(target: EventTarget | null): HTMLElement | null {
  if (!(target instanceof Element)) return null;

  // Prefer explicit data-cta (covers icons / spans inside Button)
  const marked = target.closest('[data-cta="true"]');
  if (marked instanceof HTMLElement && !marked.closest("[data-no-click-sound]")) {
    return marked;
  }

  const interactive = target.closest("a, button, [role='button']");
  if (!interactive) return null;

  if (looksLikeCta(interactive)) return interactive as HTMLElement;

  // <Link><Button /></Link>
  const nested = interactive.querySelector('[data-cta="true"], button, [role="button"]');
  if (nested && looksLikeCta(nested)) return nested as HTMLElement;

  // Parent link around a CTA-looking child
  if (interactive.tagName === "A") {
    const childBtn = interactive.querySelector("button");
    if (childBtn && looksLikeCta(childBtn)) return childBtn;
  }

  return null;
}

/**
 * Site-wide: play /button-click-sound.wav on every CTA tap.
 * Uses pointerdown so the sound starts before Next.js navigation.
 */
export function CtaClickSound() {
  useEffect(() => {
    const unlock = () => unlockCtaClickSound();
    document.addEventListener("pointerdown", unlock, { once: true, capture: true });

    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      const cta = resolveCtaTarget(event.target);
      if (!cta) return;
      playCtaClickSound();
    };

    // Keyboard activation (Enter / Space on focused CTA)
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const cta = resolveCtaTarget(event.target);
      if (!cta) return;
      playCtaClickSound();
    };

    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("keydown", onKeyDown, true);

    return () => {
      document.removeEventListener("pointerdown", unlock, true);
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("keydown", onKeyDown, true);
    };
  }, []);

  return null;
}
