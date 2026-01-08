import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { DOCS, SKILLS } from "@/lib/portfolio-data";

// [변경] 기존 PillLink 대신 더 세련된 ResourceCard 컴포넌트 사용
function ResourceCard({
  href,
  label,
  desc,
  icon,
  colorClass,
}: {
  href?: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
  colorClass: string;
}) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="
        group flex flex-col justify-between
        h-full w-full
        rounded-lg border border-zinc-800 bg-zinc-900/30
        p-4 transition-all duration-300
        hover:border-zinc-700 hover:bg-zinc-800/50 hover:-translate-y-1
      "
    >
      <div className="flex items-start justify-between mb-3">
        {/* Icon Box */}
        <div
          className={`
            flex h-10 w-10 items-center justify-center rounded-md 
            bg-zinc-950 border border-zinc-800 
            text-zinc-500 transition-colors duration-300
            ${colorClass}
          `}
        >
          {icon}
        </div>

        {/* Arrow Icon */}
        <span className="text-zinc-600 group-hover:text-zinc-300 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </span>
      </div>

      <div>
        <h4 className="font-mono text-xs font-bold text-zinc-300 group-hover:text-white mb-1 tracking-wide">
          {label}
        </h4>
        <p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400">
          {desc}
        </p>
      </div>
    </a>
  );
}

export default function LogAndSkills() {
  return (
    <section
      id="log"
      className="scroll-mt-24 py-32 border-t border-dashed border-zinc-800"
    >
      <Container>
        <div className="grid md:grid-cols-2 gap-16">
          {/* Skills Section */}
          <div>
            <SectionHeader title="TECH STACK" />

            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 font-mono text-sm shadow-xl relative overflow-hidden">
              {/* Optional: Code Editor Line Numbers bg */}
              <div className="absolute left-0 top-0 bottom-0 w-10 border-r border-zinc-900 bg-zinc-900/20" />
              
              <div className="relative pl-6">
                <div className="text-zinc-500 mb-4 pb-4 border-b border-zinc-900 flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-yellow-500/80"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                    </svg>
                    package.json
                  </span>
                  <span className="text-[10px] bg-zinc-900 px-2 py-0.5 rounded text-zinc-500 border border-zinc-800">
                    read-only
                  </span>
                </div>

                <div className="space-y-4">
                  {Object.entries(SKILLS).map(([cat, items], idx) => (
                    <div key={cat}>
                      <div className="text-purple-400 mb-1 opacity-90">
                        "{cat}"<span className="text-zinc-500">:</span>{" "}
                        <span className="text-zinc-500">[</span>
                      </div>

                      <div className="pl-4 flex flex-wrap gap-x-2 gap-y-1 text-zinc-300">
                        {items.map((skill, i) => (
                          <span key={skill} className="hover:text-white transition-colors cursor-default">
                            <span className="text-orange-300/80">"</span>
                            {skill}
                            <span className="text-orange-300/80">"</span>
                            {i !== items.length - 1 && <span className="text-zinc-600">,</span>}
                          </span>
                        ))}
                      </div>

                      <div className="text-zinc-500 mt-1">
                        ]{idx !== Object.keys(SKILLS).length - 1 && ","}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Log Section */}
          <div>
            <SectionHeader
              title="SPRING DEV JOURNEY"
              subtitle="Learning system & execution"
            />

            <div className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-lg relative overflow-hidden">
               {/* Background Grid Pattern for texture */}
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

              <div className="relative z-10">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <div className="text-3xl font-bold text-white mb-2 tracking-tight">
                      Progress
                    </div>
                    <div className="text-zinc-500 text-xs font-mono border border-zinc-800 bg-zinc-950/50 px-3 py-1.5 rounded-full inline-flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Curriculum → Practice → Logs
                    </div>
                  </div>
                </div>

                {/* Graph Visualization */}
                <div className="flex gap-[3px] h-20 items-end mb-10 opacity-90">
                  {[...Array(28)].map((_, i) => {
                    // Random-looking but deterministic heights
                    const height = 15 + ((i * 17 + 3) % 75);
                    const opacity = 0.3 + ((i * 7) % 5) * 0.1;
                    const isActive = i > 18; // recent highlight

                    return (
                      <div
                        key={i}
                        className={`flex-1 rounded-sm transition-all hover:opacity-100 hover:scale-y-110 ${isActive ? 'bg-green-500' : 'bg-green-500/40'}`}
                        style={{ height: `${height}%`, opacity: isActive ? 1 : opacity }}
                      />
                    );
                  })}
                </div>

                {/* Evidence Links (New Design) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <ResourceCard
                    href={
                      DOCS.links.find((l) => l.label === "spring-dev-journey")?.href ||
                      DOCS.links[0]?.href
                    }
                    label="GITHUB REPO"
                    desc="Source code & Commits"
                    colorClass="group-hover:text-purple-400 group-hover:border-purple-500/30 group-hover:bg-purple-500/10"
                    icon={
                      // Git Branch Icon
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
                    }
                  />
                  
                  <ResourceCard
                    href={DOCS.links.find((l) => l.label === "curriculum")?.href}
                    label="CURRICULUM"
                    desc="Roadmap & Progress"
                    colorClass="group-hover:text-blue-400 group-hover:border-blue-500/30 group-hover:bg-blue-500/10"
                    icon={
                      // Map/List Icon
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    }
                  />

                  <ResourceCard
                    href={DOCS.links.find((l) => l.label === "lecture-notes")?.href}
                    label="DEV NOTES"
                    desc="Patterns & Mistakes"
                    colorClass="group-hover:text-amber-400 group-hover:border-amber-500/30 group-hover:bg-amber-500/10"
                    icon={
                      // Book/Note Icon
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    }
                  />
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-zinc-500 leading-relaxed max-w-md">
              학습을 “기록”으로 끝내지 않고, 커리큘럼을 설계하고 실습과 질문/실수 로그로
              검증하는 루프로 운영합니다.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
