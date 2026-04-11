/* ── Lightweight analytics event tracking ──
 *
 * Fires events to window.gtag (Google Analytics 4) if available,
 * and to any future analytics provider. Designed to be extended.
 *
 * Usage:
 *   trackEvent("cta_click", { label: "hero_request_quote" });
 */

type EventParams = Record<string, string | number | boolean>;

export function trackEvent(name: string, params?: EventParams): void {
  if (typeof window === "undefined") return;

  // Google Analytics 4 / gtag.js
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }

  // Debug logging in development
  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", name, params);
  }
}

/* ── Pre-defined event helpers ── */

export function trackCtaClick(label: string): void {
  trackEvent("cta_click", { label });
}

export function trackFormStarted(): void {
  trackEvent("form_started", { form: "contact" });
}

export function trackFormSubmitted(): void {
  trackEvent("form_submitted", { form: "contact" });
}

export function trackFormSuccess(): void {
  trackEvent("form_success", { form: "contact" });
}

export function trackFormFailure(reason?: string): void {
  trackEvent("form_failure", { form: "contact", reason: reason ?? "unknown" });
}

export function trackOutboundClick(url: string): void {
  trackEvent("outbound_click", { url });
}

/* ── Global type augmentation for gtag ── */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
