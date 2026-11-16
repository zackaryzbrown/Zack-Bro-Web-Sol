"use client";

import { useSyncExternalStore } from "react";
import {
  analyticsMeasurementId,
  getAnalyticsPreference,
  setAnalyticsPreference,
  subscribeAnalyticsPreference,
} from "@/lib/analytics-preferences";

export function AnalyticsPreferences() {
  const preference = useSyncExternalStore(
    subscribeAnalyticsPreference,
    getAnalyticsPreference,
    () => "loading" as const,
  );
  const globalPreference =
    preference !== "loading" &&
    typeof navigator !== "undefined" &&
    (navigator as Navigator & { globalPrivacyControl?: boolean })
      .globalPrivacyControl;
  const configured = /^G-[A-Z0-9]+$/.test(analyticsMeasurementId);
  return (
    <div className="privacy-preferences">
      <p role="status">
        Optional analytics are{" "}
        <strong>
          {!configured
            ? "not configured"
            : preference === "loading"
              ? "loading"
              : preference === "on"
                ? "on"
                : "off"}
        </strong>{" "}
        in this browser.
        {globalPreference &&
          " Your Global Privacy Control signal keeps them off."}
      </p>
      {configured && (
        <button
          type="button"
          className="btn-secondary"
          disabled={preference === "loading" || !!globalPreference}
          onClick={() => setAnalyticsPreference(preference !== "on")}
        >
          {preference === "off" ? "Turn analytics on" : "Turn analytics off"}
        </button>
      )}
      <p className="privacy-preferences__note">
        Your choice applies to this browser. If browser storage is blocked, it
        applies until you leave or reload this page. The inquiry form works
        either way.
      </p>
      <noscript>Analytics do not run when JavaScript is disabled.</noscript>
    </div>
  );
}
