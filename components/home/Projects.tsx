import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import TechBadge from "@/components/ui/TechBadge";
import { PROJECTS } from "@/lib/portfolio-data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 py-32 bg-zinc-900/30 border-t border-dashed border-zinc-800"
    >
      <Container>
        <SectionHeader title="PROJECTS" subtitle="Problem Solving & Architecture" />

        <div className="space-y-24">
          {PROJECTS.map((p, index) => (
            <div key={p.slug} className="group relative">
              <div className="absolute -left-12 -top-16 text-[120px] font-black text-zinc-800/20 select-none z-0">
                0{index + 1}
              </div>

              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                {/* Preview */}
                <div className="order-2 lg:order-1 relative lg:mt-[60px] rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl group-hover:border-zinc-600 transition-colors">
                  <div className="h-6 bg-zinc-950 border-b border-zinc-800 flex items-center px-3 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                  </div>

                  <div className="aspect-[16/10] relative bg-zinc-800/50">
                    {p.slides.length > 0 ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.slides[0].src}
                        alt={p.name}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    ) : p.slug === "keeb-station" ? (
                      <div className="absolute inset-0 p-6 font-mono text-xs leading-relaxed text-zinc-300">
                        <div className="text-zinc-500 mb-3">// preview (no UI shots yet)</div>

                        <div className="space-y-1">
                          <div>
                            <span className="text-purple-400">POST</span>{" "}
                            <span className="text-blue-300">/api/orders</span>{" "}
                            <span className="text-zinc-500">{`{ items: [...], payment: ... }`}</span>
                          </div>

                          <div>
                            <span className="text-zinc-500">→</span>{" "}
                            <span className="text-white">OrderService#createOrder</span>
                          </div>

                          <div>
                            <span className="text-zinc-500">→</span>{" "}
                            <span className="text-white">Stock</span>
                            <span className="text-blue-300">.decrease()</span>{" "}
                            <span className="text-zinc-500">@Version optimistic lock</span>
                          </div>

                          <div>
                            <span className="text-zinc-500">→</span>{" "}
                            <span className="text-white">commit</span>{" "}
                            <span className="text-zinc-500">/ conflict → 409</span>
                          </div>
                        </div>

                        <div className="mt-5 text-zinc-500">
                          $ <span className="text-zinc-300">curl -X POST …</span>
                          <span className="ml-1 text-blue-400 animate-pulse">▋</span>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-mono text-sm">
                        NO PREVIEW
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2 lg:pl-8">
                  {/* Stack badges (meta line) */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.stack.map((s) => (
                      <TechBadge key={s}>{s}</TechBadge>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {p.name}
                    {p.badge ? (
                      <span className="ml-3 text-xs font-mono text-amber-300/60">
                        {p.badge}
                      </span>
                    ) : null}
                  </h3>

                  <p className="text-zinc-500 text-sm font-mono mb-6">
                    // {p.tagline}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {p.summaryBullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                        <span className="font-mono text-green-500/70 mt-0.5">+</span>
                        <span className="text-zinc-300">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-950/70 px-3 py-1.5 text-sm font-mono text-zinc-200 hover:border-blue-500/50 hover:shadow-[0_0_20px_-12px_rgba(59,130,246,0.4)] transition-all"
                    >
                      <span className="text-purple-400">return</span>&nbsp;
                      <span className="text-white">caseStudy</span>
                      <span className="text-blue-400">()</span>;
                    </Link>

                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center rounded-md border border-zinc-800 bg-transparent px-3 py-1.5 text-sm font-mono text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
                      >
                        {l.label === "README" ? "README.md" : l.label.toLowerCase()}
                        <span className="ml-2 text-zinc-600">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
