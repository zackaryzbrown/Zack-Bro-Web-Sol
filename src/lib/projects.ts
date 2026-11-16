import type { Project } from "@/content/types";

export function projectSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function projectStatusLabel(project: Project): string {
  if (project.isSpec) return "Portfolio concept";
  if (project.isClient) return "Client project";
  return "Website project";
}
