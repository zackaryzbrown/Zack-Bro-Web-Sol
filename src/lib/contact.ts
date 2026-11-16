export const CONTACT_FORM_SUBJECT = "New inquiry from ZB Web Solutions";
export const CONTACT_HONEYPOT_FIELD = "botcheck";
export const CONTACT_LEGACY_HONEYPOT_FIELDS = ["company"] as const;

export const CONTACT_REFERRAL_OPTIONS = [
  { value: "google", label: "Google search or Maps" },
  { value: "referral", label: "Someone recommended you" },
  { value: "social", label: "Social media" },
  { value: "client-website", label: "A website you built" },
  { value: "other", label: "Somewhere else" },
] as const;

export function normalizeContactWebsite(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return "";
  try {
    const url = new URL(
      /^[a-z][a-z\d+.-]*:/i.test(trimmed) ? trimmed : `https://${trimmed}`,
    );
    if (
      !["https:", "http:"].includes(url.protocol) ||
      url.username ||
      url.password ||
      !url.hostname.includes(".")
    )
      return null;
    return url.toString();
  } catch {
    return null;
  }
}

export function parseContactFields(
  value: unknown,
): Record<string, string> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const fields = [
    "name",
    "email",
    "business",
    "website",
    "service",
    "referral",
    "message",
    CONTACT_HONEYPOT_FIELD,
    ...CONTACT_LEGACY_HONEYPOT_FIELDS,
  ];
  const body: Record<string, string> = {};
  for (const field of fields) {
    const entry = (value as Record<string, unknown>)[field];
    if (entry !== undefined && typeof entry !== "string") return null;
    body[field] = typeof entry === "string" ? entry.trim() : "";
  }
  return body;
}

export function validateContactFields(
  body: Record<string, string>,
): { field: string; message: string } | null {
  if (body.name.length < 2 || body.name.length > 100)
    return {
      field: "name",
      message: "Please enter a name between 2 and 100 characters.",
    };
  if (body.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email))
    return { field: "email", message: "Please enter a valid email address." };
  if (body.message.length < 20 || body.message.length > 5000)
    return {
      field: "message",
      message: "Please describe your project in 20 to 5,000 characters.",
    };
  if (body.business.length > 150 || body.service.length > 100)
    return {
      field: "business",
      message: "Please shorten your business or service details.",
    };
  if (
    body.website.length > 2048 ||
    normalizeContactWebsite(body.website) === null
  )
    return {
      field: "website",
      message:
        "Please enter a website address such as example.com, or leave it blank.",
    };
  if ((body.message.match(/https?:\/\//g) || []).length > 3)
    return {
      field: "message",
      message: "Please include no more than three links in your message.",
    };
  if (
    body.referral &&
    !CONTACT_REFERRAL_OPTIONS.some((option) => option.value === body.referral)
  )
    return {
      field: "referral",
      message:
        "Please select an option for how you found me, or leave it blank.",
    };
  return null;
}

export function hasTriggeredContactHoneypot(
  body: Record<string, string>,
): boolean {
  return [CONTACT_HONEYPOT_FIELD, ...CONTACT_LEGACY_HONEYPOT_FIELDS].some(
    (field) => Boolean(body[field]?.trim()),
  );
}
