import { FadeIn } from "./FadeIn";

interface SectionIntroProps {
  label: string;
  heading: string;
  subtext?: string;
}

export function SectionIntro({ label, heading, subtext }: SectionIntroProps) {
  return (
    <FadeIn>
      <p className="section-label">{label}</p>
      <h2 className="section-heading">{heading}</h2>
      {subtext && (
        <p className="section-subtext" style={{ marginBottom: "2.5rem" }}>
          {subtext}
        </p>
      )}
    </FadeIn>
  );
}
