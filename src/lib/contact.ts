export const CONTACT_FORM_SUBJECT = "New inquiry from ZB Web Solutions";
export const CONTACT_HONEYPOT_FIELD = "botcheck";
export const CONTACT_LEGACY_HONEYPOT_FIELDS = ["company"] as const;

export function hasTriggeredContactHoneypot(
  body: Record<string, string>,
): boolean {
  return [CONTACT_HONEYPOT_FIELD, ...CONTACT_LEGACY_HONEYPOT_FIELDS].some(
    (field) => Boolean(body[field]?.trim()),
  );
}
