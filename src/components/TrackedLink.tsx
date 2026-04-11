"use client";

import Link from "next/link";
import { trackCtaClick } from "@/lib/analytics";

interface TrackedLinkProps {
  href: string;
  className?: string;
  label: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function TrackedLink({
  href,
  className,
  label,
  children,
  style,
}: TrackedLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const handleClick = () => {
    trackCtaClick(label);
  };

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        style={style}
        onClick={handleClick}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} style={style} onClick={handleClick}>
      {children}
    </Link>
  );
}
