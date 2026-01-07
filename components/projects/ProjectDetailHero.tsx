import Container from "@/components/ui/Container";
import TechBadge from "@/components/ui/TechBadge";
import Link from "next/link";
import type { Project } from "./ProjectDetailPage";

export default function ProjectDetailHero({ project }: { project: Project }) {
  const repo = project.links.find((l) => l.label.toLowerCase() === "repo");
  const readme = project.links.find((l) => l.label.toLowerCase() === "readme");

  return (
    <section className="relative pt-40 pb-24 border-b border-dashed border-zinc-800 overflow-hidden">
      {/* subtle glow */}
      <div className="pointer-events-none absolute top-[-10%] right-[-5%] z-[-1] opacity-30">
        <div className="h-[560px] w-[560px] rounded-full bg-blue-600/15 blur-[110px]" />
      </div>

      <Container>
        <p className="font-mono text-xs text-zinc-500 mb-5">
          PROJECT / {project.slug}
        </p>

        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.1]">
            {project.name}
          </h1>

          {project.badge ? (
            <span className="text-xs font-mono text-amber-300/60">
              {project.badge}
            </span>
          ) : null}
        </div>

        <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
          {project.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <TechBadge key={s}>{s}</TechBadge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-sm">
          {/* Back Button: IDE Style */}
          <Link
            href="/#projects"
            className="group inline-flex items-center rounded-md border border-zinc-800 bg-zinc-950/70 px-4 py-2 text-sm font-mono text-zinc-200 hover:border-blue-500/50 hover:shadow-[0_0_20px_-12px_rgba(59,130,246,0.4)] transition-all"
          >
            <span className="text-zinc-500 mr-2 group-hover:text-zinc-300 transition-colors">←</span>
            <span className="text-purple-400">return</span>&nbsp;
            <span className="text-white">projects</span>
            <span className="text-blue-400">()</span>;
          </Link>

          {/* Repo Link */}
          {repo ? (
            <a
              href={repo.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center rounded-md border border-zinc-800 bg-transparent px-4 py-2 text-sm font-mono text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
            >
              repo
              <span className="ml-2 text-zinc-600">↗</span>
            </a>
          ) : null}

          {/* Readme Link */}
          {readme ? (
            <a
              href={readme.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center rounded-md border border-zinc-800 bg-transparent px-4 py-2 text-sm font-mono text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
            >
              README.md
              <span className="ml-2 text-zinc-600">↗</span>
            </a>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
