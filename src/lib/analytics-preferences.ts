export const analyticsMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "G-THKH3RZVBJ";

const STORAGE_KEY = "zbws-analytics-preference";
const CHANGE_EVENT = "zbws-analytics-change";
let sessionPreference: "on" | "off" | undefined;

export function getAnalyticsPreference(): "on" | "off" | "loading" {
  if (typeof window === "undefined") return "loading";
  if (
    (navigator as Navigator & { globalPrivacyControl?: boolean })
      .globalPrivacyControl
  )
    return "off";
  if (sessionPreference) return sessionPreference;
  try {
    return localStorage.getItem(STORAGE_KEY) === "off" ? "off" : "on";
  } catch {
    return "on";
  }
}

export function subscribeAnalyticsPreference(onChange: () => void) {
  const onStorage = () => {
    sessionPreference = undefined;
    onChange();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

export function setAnalyticsPreference(enabled: boolean) {
  sessionPreference = enabled ? "on" : "off";
  try {
    localStorage.setItem(STORAGE_KEY, sessionPreference);
  } catch {
    // The setting still applies to the current page when storage is blocked.
  }
  applyAnalyticsPreference(enabled);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function applyAnalyticsPreference(enabled: boolean) {
  (window as unknown as Record<string, unknown>)[
    `ga-disable-${analyticsMeasurementId}`
  ] = !enabled;
  if (!enabled) {
    const hostname = window.location.hostname;
    const parts = hostname.split(".");
    const domains = ["", ...parts.map((_, i) => parts.slice(i).join("."))];
    for (const cookie of document.cookie.split(";")) {
      const name = cookie.split("=")[0].trim();
      if (!/^_ga(?:_|$)|^_gid$|^_gat(?:_|$)/.test(name)) continue;
      for (const domain of domains) {
        document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain ? `; Domain=${domain}` : ""}`;
      }
    }
  }
}
