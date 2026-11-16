import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  CONTACT_FORM_SUBJECT,
  CONTACT_REFERRAL_OPTIONS,
  hasTriggeredContactHoneypot,
  normalizeContactWebsite,
  parseContactFields,
  validateContactFields,
} from "@/lib/contact";
import { limitContactByIdentifier } from "@/lib/rate-limit";

const FALLBACK_MESSAGE =
  "Your inquiry couldn't be sent. Please try again or email zackaryzbrown@gmail.com.";

export async function POST(req: NextRequest) {
  const wantsJson =
    req.headers.get("content-type")?.includes("application/json") ||
    req.headers.get("accept")?.includes("application/json");
  const respond = (
    success: boolean,
    status: number,
    error?: string,
    field?: string,
    headers?: Record<string, string>,
    leadReference?: string,
  ) => {
    if (wantsJson)
      return NextResponse.json(
        {
          success,
          ...(error ? { error, field } : {}),
          ...(leadReference ? { leadReference } : {}),
        },
        { status, headers },
      );
    const destination = new URL("/contact", req.url);
    destination.searchParams.set("status", success ? "sent" : "error");
    return NextResponse.redirect(destination, { status: 303, headers });
  };

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  try {
    const limit = await limitContactByIdentifier(`contact:${ip}`);
    if (!limit.success) {
      return respond(
        false,
        429,
        "Please wait a minute before sending another inquiry.",
        undefined,
        {
          "Retry-After": String(
            Math.max(1, Math.ceil((limit.resetAt - Date.now()) / 1000)),
          ),
        },
      );
    }
  } catch {
    console.error("[contact] Rate limit service unavailable.");
    return respond(false, 503, FALLBACK_MESSAGE);
  }

  let body: Record<string, string> | null;
  try {
    const raw = req.headers.get("content-type")?.includes("application/json")
      ? await req.json()
      : Object.fromEntries(await req.formData());
    body = parseContactFields(raw);
  } catch {
    return respond(false, 400, "Please check your details and try again.");
  }
  if (!body)
    return respond(false, 400, "Please check your details and try again.");
  if (hasTriggeredContactHoneypot(body)) return respond(true, 200);

  const validation = validateContactFields(body);
  if (validation)
    return respond(false, 400, validation.message, validation.field);

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not configured.");
    return respond(false, 503, FALLBACK_MESSAGE);
  }

  try {
    const resend = new Resend(apiKey);
    const leadReference = `ZB-${crypto.randomUUID().replaceAll("-", "").slice(0, 12).toUpperCase()}`;
    const { name, email, business, website, service, referral, message } = body;
    const { data, error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL?.trim() ||
        "Contact Form <contact@zbweb.solutions>",
      to: process.env.RESEND_TO_EMAIL?.trim() || "zackaryzbrown@gmail.com",
      replyTo: email,
      subject: `${CONTACT_FORM_SUBJECT} [${leadReference}]`,
      text: [
        `Inquiry reference: ${leadReference}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Business: ${business || "Not provided"}`,
        `Website: ${normalizeContactWebsite(website) || "Not provided"}`,
        `Service: ${service || "Not specified"}`,
        `How they found me: ${CONTACT_REFERRAL_OPTIONS.find((option) => option.value === referral)?.label || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });
    if (error || !data?.id) {
      console.error(
        "[contact] Email provider rejected submission:",
        error?.name ?? "missing_message_id",
      );
      return respond(false, 502, FALLBACK_MESSAGE);
    }
    console.info(
      `[contact] Submission accepted | reference: ${leadReference} | message_id: ${data?.id ?? "unavailable"}`,
    );
    return respond(true, 200, undefined, undefined, undefined, leadReference);
  } catch {
    console.error("[contact] Email delivery request failed.");
    return respond(false, 502, FALLBACK_MESSAGE);
  }
}
