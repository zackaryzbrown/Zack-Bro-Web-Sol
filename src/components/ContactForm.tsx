"use client";

import { useState, useRef, FormEvent } from "react";
import Link from "next/link";
import {
  trackFormStarted,
  trackFormSubmitted,
  trackFormSuccess,
  trackFormFailure,
} from "@/lib/analytics";
import {
  CONTACT_FORM_SUBJECT,
  CONTACT_HONEYPOT_FIELD,
  CONTACT_REFERRAL_OPTIONS,
  normalizeContactWebsite,
} from "@/lib/contact";

const SUBMISSION_COOLDOWN_MS = 60_000;
const LAST_SUBMISSION_KEY = "zbws-contact-last-submission-at";
const CONTACT_EMAIL = "zackaryzbrown@gmail.com";
const DEFAULT_ERROR_MESSAGE =
  "Something went wrong. Please try again or email me directly.";

type FormError = { message: string; field?: string };

const SERVICE_OPTIONS: { value: string; label: string }[] = [
  { value: "custom-website", label: "Custom Website (new build)" },
  { value: "redesign", label: "Website Redesign" },
  { value: "conversion", label: "Conversion-Focused Pages" },
  { value: "ai", label: "AI Assistant / Automation" },
  { value: "care", label: "Care & Support" },
  { value: "wordpress", label: "WordPress build" },
  { value: "not-sure", label: "Not sure yet" },
];

function shouldShowFallbackEmail(message: string): boolean {
  return !message.toLowerCase().includes(CONTACT_EMAIL);
}

export function ContactForm({
  initialService = "",
  initialStatus,
}: {
  initialService?: string;
  initialStatus?: string;
}) {
  const resolvedService = SERVICE_OPTIONS.find(
    (o) => o.value === initialService,
  )?.value;

  const [submitted, setSubmitted] = useState(initialStatus === "sent");
  const [formError, setFormError] = useState<FormError | null>(
    initialStatus === "error" ? { message: DEFAULT_ERROR_MESSAGE } : null,
  );
  const [submitting, setSubmitting] = useState(false);
  const formStartedRef = useRef(false);

  const handleFocus = () => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackFormStarted();
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError(null);
    trackFormSubmitted();

    const now = Date.now();
    let lastSubmission = 0;
    try {
      lastSubmission = Number(
        window.localStorage.getItem(LAST_SUBMISSION_KEY) ?? "0",
      );
    } catch {
      // Storage is optional; the server still enforces its rate limit.
    }

    if (lastSubmission && now - lastSubmission < SUBMISSION_COOLDOWN_MS) {
      setSubmitting(false);
      setFormError({
        message: "Please wait about a minute before sending another inquiry.",
      });
      trackFormFailure("cooldown");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const body: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === "string") body[key] = value;
    });
    const website = normalizeContactWebsite(body.website ?? "");
    if (website === null) {
      setSubmitting(false);
      setFormError({
        field: "website",
        message:
          "Enter a website address such as example.com, or leave it blank.",
      });
      trackFormFailure("invalid_website");
      return;
    }
    body.website = website;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data: {
        success?: boolean;
        message?: string;
        error?: string;
        field?: string;
        leadReference?: string;
      } | null = res.headers.get("content-type")?.includes("application/json")
        ? ((await res.json()) as {
            success?: boolean;
            message?: string;
            error?: string;
            field?: string;
            leadReference?: string;
          })
        : null;

      if (res.ok && data?.success) {
        form.reset();
        try {
          window.localStorage.setItem(LAST_SUBMISSION_KEY, String(now));
        } catch {
          // Successful delivery must not depend on browser storage.
        }
        setSubmitted(true);
        if (data.leadReference && /^ZB-[A-F0-9]{12}$/.test(data.leadReference))
          trackFormSuccess();
      } else {
        const msg = data?.message ?? data?.error ?? DEFAULT_ERROR_MESSAGE;
        setFormError({ message: msg, field: data?.field });
        trackFormFailure(`response_${res.status}`);
      }
    } catch {
      setFormError({ message: DEFAULT_ERROR_MESSAGE });
      trackFormFailure("network_error");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="contact-success" role="status" aria-live="polite">
        <div className="contact-success__mark" aria-hidden>
          ✓
        </div>
        <p className="contact-success__title">Thanks - your inquiry is in.</p>
        <p className="contact-success__body">
          I&apos;ll review the details and reply within{" "}
          <strong>1 business day</strong>. Keep an eye on your inbox (and your
          spam folder, just in case).
        </p>
      </div>
    );
  }

  const hasPrefill = !!resolvedService;

  return (
    <form
      action="/api/contact"
      method="post"
      onSubmit={handleSubmit}
      onFocus={handleFocus}
      className="contact-form"
    >
      <input type="hidden" name="subject" value={CONTACT_FORM_SUBJECT} />
      <input
        type="text"
        name={CONTACT_HONEYPOT_FIELD}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {hasPrefill && (
        <div className="contact-prefill" role="status">
          <span className="contact-prefill__mark" aria-hidden>
            ◆
          </span>
          We&apos;ve pre-filled this form based on what you were viewing. Edit
          anything that doesn&apos;t fit.
        </div>
      )}

      <div className="form-grid">
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            aria-invalid={formError?.field === "name" || undefined}
            aria-describedby={
              formError?.field === "name" ? "contact-error" : undefined
            }
            autoComplete="name"
            className="form-input"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            aria-invalid={formError?.field === "email" || undefined}
            aria-describedby={
              formError?.field === "email" ? "contact-error" : undefined
            }
            autoComplete="email"
            className="form-input"
            placeholder="you@business.com"
          />
        </div>
      </div>

      <div className="form-grid">
        <div>
          <label htmlFor="business" className="form-label">
            Business name <span className="form-label__hint">(optional)</span>
          </label>
          <input
            id="business"
            name="business"
            type="text"
            maxLength={150}
            autoComplete="organization"
            className="form-input"
            placeholder="Your business"
          />
        </div>
        <div>
          <label htmlFor="service" className="form-label">
            What do you need?{" "}
            <span className="form-label__hint">(optional)</span>
          </label>
          <select
            id="service"
            name="service"
            className="form-input"
            defaultValue={resolvedService ?? ""}
          >
            <option value="">Not sure / tell me in the message</option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="website" className="form-label">
          Current website or social link{" "}
          <span className="form-label__hint">(optional)</span>
        </label>
        <input
          id="website"
          name="website"
          type="text"
          inputMode="url"
          maxLength={2048}
          aria-invalid={formError?.field === "website" || undefined}
          aria-describedby={
            formError?.field === "website" ? "contact-error" : undefined
          }
          autoComplete="url"
          className="form-input"
          placeholder="example.com or your social profile URL"
        />
      </div>

      <div>
        <label htmlFor="message" className="form-label">
          Tell me about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={20}
          maxLength={5000}
          aria-invalid={formError?.field === "message" || undefined}
          aria-describedby={
            formError?.field === "message"
              ? "message-hint contact-error"
              : "message-hint"
          }
          className="form-input"
          placeholder="What does your business do? What are you hoping to achieve with a new or improved website?"
          style={{ resize: "vertical", minHeight: "140px" }}
        />
        <p id="message-hint" className="contact-form__fineprint">
          At least 20 characters. A few sentences about what you need is enough.
        </p>
      </div>

      <div>
        <label htmlFor="referral" className="form-label">
          How did you find me?{" "}
          <span className="form-label__hint">(optional)</span>
        </label>
        <select
          id="referral"
          name="referral"
          className="form-input"
          defaultValue=""
          aria-invalid={formError?.field === "referral" || undefined}
          aria-describedby={
            formError?.field === "referral" ? "contact-error" : undefined
          }
        >
          <option value="">Prefer not to say</option>
          {CONTACT_REFERRAL_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {formError && (
        <p id="contact-error" role="alert" className="contact-error">
          <span className="contact-error__label">
            Please check your inquiry
          </span>
          {formError.message}
          {shouldShowFallbackEmail(formError.message) && (
            <>
              {" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="contact-error__link"
              >
                {CONTACT_EMAIL}
              </a>
            </>
          )}
        </p>
      )}

      <div className="contact-form__footer">
        <button
          type="submit"
          className="btn-primary contact-form__submit"
          disabled={submitting}
          aria-busy={submitting}
        >
          {submitting ? "Sending…" : "Send Inquiry"}
        </button>
        <p className="contact-form__fineprint">
          I&apos;ll reply within <strong>1 business day</strong>. No pressure,
          no spam.
        </p>
      </div>
      <p className="contact-form__fineprint">
        Your details are used to answer your inquiry. Please leave passwords and
        sensitive records out of your message.{" "}
        <Link href="/privacy">Privacy &amp; analytics</Link>
      </p>
    </form>
  );
}
