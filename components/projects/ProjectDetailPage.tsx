import Container from "@/components/ui/Container";
import ProjectDetailHero from "./ProjectDetailHero";
import ProjectDetailContext from "./ProjectDetailContext";
import ProjectDetailPrinciples from "./ProjectDetailPrinciples";
import ProjectDetailTroubleshooting from "./ProjectDetailTroubleshooting";
import ProjectDetailNotes from "./ProjectDetailNotes";
import ProjectDetailToc from "./ProjectDetailToc";

import ProjectDetailDecisions from "./ProjectDetailDecisions";
import ProjectDetailIncidentLog from "./ProjectDetailIncidentLog";

import type { Project } from "./types";

export default function ProjectDetailPage({ project }: { project: Project }) {
  const isKeeb = project.slug === "keeb-station";

  return (
    <main className="min-h-screen bg-black text-zinc-200 selection:bg-blue-500/30 selection:text-blue-200">
      <ProjectDetailHero project={project} />

      <section className="py-24">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
            {/* LEFT: TOC */}
            <aside className="hidden lg:block sticky top-32 h-fit">
              <div className="rounded-xl border border-zinc-800/60 bg-black/30 backdrop-blur px-4 py-5">
                <ProjectDetailToc project={project} isKeeb={isKeeb} />
              </div>
            </aside>

            {/* RIGHT: Content */}
            <div className="min-w-0 space-y-32">
              <div id="context" className="scroll-mt-28">
                <ProjectDetailContext project={project} />
              </div>

              {/* keeb면 Decisions, 아니면 Principles */}
              <div id="principles" className="scroll-mt-28">
                {isKeeb ? (
                  <ProjectDetailDecisions project={project} />
                ) : (
                  <ProjectDetailPrinciples project={project} />
                )}
              </div>

              {/* keeb면 Incident Log, 아니면 Troubleshooting */}
              <div id="troubleshooting" className="scroll-mt-28">
                {isKeeb ? (
                  <ProjectDetailIncidentLog project={project} />
                ) : (
                  <ProjectDetailTroubleshooting />
                )}
              </div>

              <div id="notes" className="scroll-mt-28">
                <ProjectDetailNotes project={project} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
