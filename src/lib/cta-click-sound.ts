const CLICK_SOUND_SRC = "/button-click-sound.wav";

let shared: HTMLAudioElement | null = null;
let lastPlayAt = 0;

function getShared(): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  if (!shared) {
    shared = new Audio(CLICK_SOUND_SRC);
    shared.preload = "auto";
    shared.volume = 0.55;
  }
  return shared;
}

/** Warm the audio element on first gesture (no muted race). */
export function unlockCtaClickSound() {
  const el = getShared();
  if (!el) return;
  // Force a load so the first CTA click is ready
  try {
    el.load();
  } catch {
    // ignore
  }
}

/**
 * Play the CTA bell. Clones audio so rapid / overlapping clicks still fire,
 * and debounces duplicate listeners (Button + document) within the same tap.
 */
export function playCtaClickSound() {
  if (typeof window === "undefined") return;

  const now = performance.now();
  if (now - lastPlayAt < 90) return;
  lastPlayAt = now;

  try {
    const base = getShared();
    const el = base ? (base.cloneNode(true) as HTMLAudioElement) : new Audio(CLICK_SOUND_SRC);
    el.volume = 0.55;
    el.currentTime = 0;
    void el.play().catch(() => {
      // Fallback: retry once with a fresh element on gesture failure
      const retry = new Audio(CLICK_SOUND_SRC);
      retry.volume = 0.55;
      void retry.play().catch(() => {});
    });
  } catch {
    // Ignore playback errors
  }
}
