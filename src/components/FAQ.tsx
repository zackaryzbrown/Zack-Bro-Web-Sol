"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              borderBottom: "1px solid var(--border-light)",
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                width: "100%",
                padding: "1.25rem 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  fontSize: "1.0625rem",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  lineHeight: 1.4,
                }}
              >
                {item.question}
              </span>
              <span
                style={{
                  fontSize: "1.25rem",
                  color: "var(--text-tertiary)",
                  flexShrink: 0,
                  transition: "transform 0.2s ease",
                  transform: isOpen ? "rotate(45deg)" : "none",
                  width: "24px",
                  height: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                +
              </span>
            </button>
            <div
              style={{
                maxHeight: isOpen ? "500px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              <p
                style={{
                  padding: "0 0 1.25rem",
                  fontSize: "0.9375rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  maxWidth: "640px",
                }}
              >
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
