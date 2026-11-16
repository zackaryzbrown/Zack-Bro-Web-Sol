import Link from "next/link";
import { projectPolicySummary } from "@/content/project-policies";

export function ProjectPolicySummary() {
  return (
    <aside
      id="project-policies"
      className="project-policies"
      aria-labelledby="project-policies-heading"
    >
      <h3 id="project-policies-heading">Included with every website build</h3>
      <dl className="project-policies__grid">
        {projectPolicySummary.map((item) => (
          <div key={item.title}>
            <dt>{item.title}</dt>
            <dd>{item.text}</dd>
          </div>
        ))}
      </dl>
      <Link href="#faq" className="project-case-link">
        Read the payment, revision, and handover details{" "}
        <span aria-hidden>→</span>
      </Link>
    </aside>
  );
}
