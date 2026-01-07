import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/portfolio-data";
import ProjectDetailPage from "@/components/projects/ProjectDetailPage";

export default async function ProjectDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return notFound();

  return <ProjectDetailPage project={project} />;
}
