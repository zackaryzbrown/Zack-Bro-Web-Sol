"use client";

import { useState, useRef, useEffect, FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  trackFormStarted,
  trackFormSubmitted,
  trackFormSuccess,
  trackFormFailure,
} from "@/lib/analytics";
import { CONTACT_FORM_SUBJECT, CONTACT_HONEYPOT_FIELD } from "@/lib/contact";

const SUBMISSION_COOLDOWN_MS = 60_000;
const MIN_FILL_TIME_MS = 3_000;
const LAST_SUBMISSION_KEY = "zbws-contact-last-submission-at";
const CONTACT_EMAIL = "zackary@zbweb.solutions";
const DEFAULT_ERROR_MESSAGE =
  "Something went wrong. Please try again or email me directly.";

type ErrorSource = "client" | "server";
type FormError = { message: string; source: ErrorSource };

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

function ContactFormInner() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") ?? "";

  // Map external query values to internal option values
  const resolvedService = SERVICE_OPTIONS.find(
    (o) => o.value === serviceParam,
  )?.value;

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<FormError | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [startedAt] = useState(() => Date.now());
  const [service, setService] = useState<string>(resolvedService ?? "");
  const formStartedRef = useRef(false);

  // Keep state in sync if user navigates with new query params
  useEffect(() => {
    if (resolvedService) setService(resolvedService);
  }, [resolvedService]);

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
    const lastSubmission =
      typeof window !== "undefined"
        ? Number(window.localStorage.getItem(LAST_SUBMISSION_KEY) ?? "0")
        : 0;

    if (lastSubmission && now - lastSubmission < SUBMISSION_COOLDOWN_MS) {
      setSubmitting(false);
      setFormError({
        message: "Please wait about a minute before sending another inquiry.",
        source: "client",
      });
      trackFormFailure("cooldown");
      return;
    }

    if (now - startedAt < MIN_FILL_TIME_MS) {
      setSubmitting(false);
      setFormError({
        message: "Please take a moment to review your details and try again.",
        source: "client",
      });
      trackFormFailure("too_fast");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const body: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === "string") body[key] = value;
    });

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
      } | null = res.headers.get("content-type")?.includes("application/json")
        ? ((await res.json()) as {
            success?: boolean;
            message?: string;
            error?: string;
          })
        : null;

      if (res.ok && data?.success) {
        form.reset();
        window.localStorage.setItem(LAST_SUBMISSION_KEY, String(now));
        setSubmitted(true);
        trackFormSuccess();
      } else {
        const msg = data?.message ?? data?.error ?? DEFAULT_ERROR_MESSAGE;
        setFormError({ message: msg, source: "server" });
        trackFormFailure(msg);
      }
    } catch {
      setFormError({ message: DEFAULT_ERROR_MESSAGE, source: "client" });
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
            autoComplete="email"
            className="form-input"
            placeholder="you@business.com"
          />
        </div>
      </div>

      <div className="form-grid">
        <div>
          <label htmlFor="business" className="form-label">
            Business name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            required
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
            value={service}
            onChange={(e) => setService(e.target.value)}
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
          type="url"
          autoComplete="url"
          className="form-input"
          placeholder="https://yourbusiness.com - or a social link"
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
          className="form-input"
          placeholder="What does your business do? What are you hoping to achieve with a new or improved website?"
          style={{ resize: "vertical", minHeight: "140px" }}
        />
      </div>

      {formError && (
        <p role="alert" className="contact-error">
          <span className="contact-error__label">
            {formError.source === "server" ? "Server Response" : "Form Check"}
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
    </form>
  );
}

/* Wrapper required for Next.js 16: useSearchParams must be inside Suspense */
export function ContactForm() {
  return (
    <Suspense fallback={<div className="contact-form__skeleton" aria-hidden />}>
      <ContactFormInner />
    </Suspense>
  );
}
