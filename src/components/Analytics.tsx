"use client";

import Script from "next/script";
import { useEffect, useSyncExternalStore } from "react";
import {
  analyticsMeasurementId,
  applyAnalyticsPreference,
  getAnalyticsPreference,
  subscribeAnalyticsPreference,
} from "@/lib/analytics-preferences";

export function Analytics() {
  const preference = useSyncExternalStore(
    subscribeAnalyticsPreference,
    getAnalyticsPreference,
    () => "loading" as const,
  );
  const enabled = preference === "on";
  const validId = /^G-[A-Z0-9]+$/.test(analyticsMeasurementId);

  useEffect(() => {
    if (preference === "loading" || !validId) return;
    applyAnalyticsPreference(enabled);
    if (!enabled) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function (...args: unknown[]) {
        window.dataLayer!.push(args);
      };
    window.gtag("js", new Date());
    window.gtag("config", analyticsMeasurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
  }, [enabled, preference, validId]);

  if (!enabled || !validId) return null;
  return (
    <Script
      id="google-analytics-library"
      src={`https://www.googletagmanager.com/gtag/js?id=${analyticsMeasurementId}`}
      strategy="lazyOnload"
    />
  );
}
