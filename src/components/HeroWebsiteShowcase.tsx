"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { BrowserFrame } from "./BrowserFrame";

interface ShowcaseItem {
  name: string;
  url: string;
  image: string;
  alt: string;
  label: string;
}

/**
 * Curated real-project previews used only in the hero showcase.
 * Data mirrors `src/content/work.ts` — update in tandem when project
 * names, URLs, or screenshots change.
 */
const items: ShowcaseItem[] = [
  {
    name: "GreenScape Pro",
    url: "demo-greenscape.netlify.app",
    image: "/projects/greenscape.png",
    alt: "GreenScape Pro lawn care website preview",
    label: "Lawn Care & Landscaping",
  },
  {
    name: "MHK Training",
    url: "www.mhktraining.com",
    image: "/projects/mhk-training.png",
    alt: "MHK Training fitness website preview",
    label: "Martial Arts & Fitness",
  },
  {
    name: "Mobile Detailing",
    url: "mobile-details-demo.zackarybrown.net",
    image: "/projects/MobileDetailing.png",
    alt: "Mobile Detailing service website preview",
    label: "Automotive Detailing",
  },
  {
    name: "The Futons",
    url: "thefutons.band",
    image: "/projects/the-futons.png",
    alt: "The Futons band website preview",
    label: "Music & Band",
  },
];

const AUTO_ADVANCE_MS = 5500;
const MANUAL_PAUSE_MS = 12000;
const MAX_TILT_DEG = 12;
const TILT_RESET_DELAY_MS = 250;

type CardState = "active" | "stack-1" | "stack-2" | "exiting" | "hidden";

function computeState(
  index: number,
  activeIndex: number,
  total: number,
): CardState {
  const offset = (index - activeIndex + total) % total;
  if (offset === 0) return "active";
  if (offset === total - 1) return "exiting";
  if (offset === 1) return "stack-1";
  if (offset === 2) return "stack-2";
  return "hidden";
}

function formatCount(n: number): string {
  return n.toString().padStart(2, "0");
}

interface HeroWebsiteShowcaseProps {
  /** Small overlay chip on the mockup's bottom-left (e.g. price signal). */
  primaryBadge?: string;
  /** Small overlay chip on the mockup's right side. */
  secondaryBadge?: string;
}

export function HeroWebsiteShowcase({
  primaryBadge,
  secondaryBadge,
}: HeroWebsiteShowcaseProps = {}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = items.length;

  const rootRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const autoTimerRef = useRef<number | null>(null);
  const pauseTimerRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);
  const finePointerRef = useRef(false);

  const clearAutoTimer = useCallback(() => {
    if (autoTimerRef.current !== null) {
      window.clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  }, []);

  const startAutoTimer = useCallback(() => {
    clearAutoTimer();
    if (reducedMotionRef.current) return;
    autoTimerRef.current = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % total);
    }, AUTO_ADVANCE_MS);
  }, [clearAutoTimer, total]);

  // Auto-cycle + reduced-motion detection.
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerMql = window.matchMedia("(pointer: fine)");
    reducedMotionRef.current = mql.matches;
    finePointerRef.current = pointerMql.matches;

    const onMotionChange = () => {
      reducedMotionRef.current = mql.matches;
      if (reducedMotionRef.current) {
        clearAutoTimer();
      } else if (!isPaused) {
        startAutoTimer();
      }
    };
    const onPointerChange = () => {
      finePointerRef.current = pointerMql.matches;
      if (!finePointerRef.current && tiltRef.current) {
        tiltRef.current.style.setProperty("--tilt-x", "0deg");
        tiltRef.current.style.setProperty("--tilt-y", "0deg");
      }
    };

    mql.addEventListener("change", onMotionChange);
    pointerMql.addEventListener("change", onPointerChange);
    if (!isPaused) startAutoTimer();

    return () => {
      mql.removeEventListener("change", onMotionChange);
      pointerMql.removeEventListener("change", onPointerChange);
      clearAutoTimer();
      if (pauseTimerRef.current !== null) {
        window.clearTimeout(pauseTimerRef.current);
      }
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [clearAutoTimer, startAutoTimer, isPaused]);

  const handleManualSelect = useCallback(
    (nextIndex: number) => {
      setActiveIndex(nextIndex);
      setIsPaused(true);
      clearAutoTimer();
      if (pauseTimerRef.current !== null) {
        window.clearTimeout(pauseTimerRef.current);
      }
      pauseTimerRef.current = window.setTimeout(() => {
        setIsPaused(false);
      }, MANUAL_PAUSE_MS);
    },
    [clearAutoTimer],
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!finePointerRef.current || reducedMotionRef.current) return;
      const tilt = tiltRef.current;
      const root = rootRef.current;
      if (!tilt || !root) return;

      const rect = root.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
      const relY = (event.clientY - rect.top) / rect.height - 0.5;

      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = window.requestAnimationFrame(() => {
        const tiltY = relX * MAX_TILT_DEG * 2; // rotateY responds to X
        const tiltX = -relY * MAX_TILT_DEG * 2; // rotateX responds to Y (inverted)
        tilt.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
        tilt.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
      });
    },
    [],
  );

  const handlePointerLeave = useCallback(() => {
    if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    const tilt = tiltRef.current;
    if (!tilt) return;
    window.setTimeout(() => {
      tilt.style.setProperty("--tilt-x", "0deg");
      tilt.style.setProperty("--tilt-y", "0deg");
    }, TILT_RESET_DELAY_MS);
  }, []);

  const activeItem = items[activeIndex];

  return (
    <div
      ref={rootRef}
      className="hero-showcase"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="hero-showcase__stage-wrapper">
        <div className="hero-showcase__float">
          <div className="hero-showcase__wander">
            <div ref={tiltRef} className="hero-showcase__tilt">
              <div
                className="hero-showcase__stage"
                role="group"
                aria-roledescription="Website preview carousel"
                aria-label={`${activeItem.name} — website preview ${activeIndex + 1} of ${total}`}
              >
                {items.map((item, i) => {
                  const state = computeState(i, activeIndex, total);
                  const isClickable =
                    state === "stack-1" || state === "stack-2";
                  const frame = (
                    <BrowserFrame
                      src={item.image}
                      alt={item.alt}
                      url={item.url}
                      priority={i === 0}
                    />
                  );

                  if (isClickable) {
                    return (
                      <button
                        key={item.name}
                        type="button"
                        className="hero-showcase__card"
                        data-state={state}
                        aria-label={`Show ${item.name} preview`}
                        onClick={() => handleManualSelect(i)}
                      >
                        {frame}
                      </button>
                    );
                  }

                  return (
                    <div
                      key={item.name}
                      className="hero-showcase__card"
                      data-state={state}
                      aria-hidden={state !== "active"}
                    >
                      {frame}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {primaryBadge ? (
          <span className="hero-showcase__badge hero-showcase__badge--primary">
            {primaryBadge}
          </span>
        ) : null}
        {secondaryBadge ? (
          <span className="hero-showcase__badge hero-showcase__badge--secondary">
            {secondaryBadge}
          </span>
        ) : null}
      </div>

      <div className="hero-showcase__caption" aria-hidden="true">
        <span className="hero-showcase__count">
          {formatCount(activeIndex + 1)}
          <span className="hero-showcase__count-total">
            {" "}
            / {formatCount(total)}
          </span>
        </span>
        <span className="hero-showcase__meta">
          <span className="hero-showcase__title">{activeItem.name}</span>
          <span className="hero-showcase__subtitle">{activeItem.label}</span>
        </span>
      </div>

      <div
        className="hero-showcase__progress"
        data-paused={isPaused ? "true" : undefined}
        aria-hidden="true"
      >
        <div
          key={`${activeIndex}-${isPaused ? "p" : "r"}`}
          className="hero-showcase__progress-bar"
          style={{ animationDuration: `${AUTO_ADVANCE_MS}ms` }}
        />
      </div>

      {/* Mobile-only fallback dots — visible stack is flattened at ≤900px, so
          users still need a way to switch previews on touch devices. */}
      <div
        className="hero-showcase__dots"
        role="group"
        aria-label="Website preview selector"
      >
        {items.map((item, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={item.name}
              type="button"
              className="hero-showcase__dot"
              aria-current={isActive ? "true" : undefined}
              aria-label={`Show ${item.name} preview`}
              onClick={() => handleManualSelect(i)}
            />
          );
        })}
      </div>
    </div>
  );
}
