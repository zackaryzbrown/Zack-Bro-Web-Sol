import Image, { type ImageProps } from "next/image";

export interface BrowserFrameProps {
  /** Image src (public/ path). */
  src: string;
  /** Descriptive alt text for the preview. */
  alt: string;
  /** Address bar text (no protocol required). */
  url: string;
  /** Optional caption chip rendered over the preview. */
  label?: string;
  /** Prioritize image loading (only for the initially-visible card). */
  priority?: boolean;
  /** next/image sizes hint. */
  sizes?: string;
  /** Intrinsic image dimensions for CLS-safe rendering. */
  imageWidth?: number;
  imageHeight?: number;
  /** Extra className applied to the outer frame. */
  className?: string;
}

/**
 * Display-only browser mockup used inside the hero showcase stack.
 * Keeps chrome parity with `BrowserMockup` but is not a link and
 * uses a fixed aspect ratio to prevent layout shift.
 */
export function BrowserFrame({
  src,
  alt,
  url,
  label,
  priority = false,
  sizes = "(max-width: 900px) 92vw, 560px",
  imageWidth = 1200,
  imageHeight = 800,
  className = "",
}: BrowserFrameProps) {
  const imgProps: Pick<ImageProps, "loading" | "priority"> = priority
    ? { priority: true }
    : { loading: "lazy" };

  return (
    <div className={`hero-showcase__frame ${className}`.trim()}>
      <div className="hero-showcase__chrome" aria-hidden="true">
        <div className="hero-showcase__lights">
          <span style={{ background: "#FF5F57" }} />
          <span style={{ background: "#FEBC2E" }} />
          <span style={{ background: "#28C840" }} />
        </div>
        <div className="hero-showcase__address">
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M17 10V7a5 5 0 1 0-10 0v3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <rect
              x="5"
              y="10"
              width="14"
              height="10"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <span>{url}</span>
        </div>
      </div>

      <div className="hero-showcase__viewport">
        <Image
          src={src}
          alt={alt}
          width={imageWidth}
          height={imageHeight}
          sizes={sizes}
          {...imgProps}
          className="hero-showcase__image"
        />
        {label ? <span className="hero-showcase__label">{label}</span> : null}
      </div>
    </div>
  );
}
