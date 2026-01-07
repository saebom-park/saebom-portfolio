import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { DOCS, SKILLS } from "@/lib/portfolio-data";

function PillLink({
  href,
  label,
  desc,
}: {
  href?: string;
  label: string;
  desc: string;
}) {
  const disabled = !href;

  return (
    <a
      href={href || "#"}
      target={disabled ? undefined : "_blank"}
      rel={disabled ? undefined : "noreferrer noopener"}
      className={[
        "group rounded-xl border px-4 py-3 transition",
        disabled
          ? "border-zinc-800 bg-zinc-950/20 text-zinc-600 cursor-not-allowed"
          : "border-zinc-800 bg-zinc-950/40 hover:border-blue-500/40 hover:bg-zinc-950/60",
      ].join(" ")}
      onClick={(e) => {
        if (disabled) e.preventDefault();
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="font-mono text-xs text-zinc-500">{label}</div>
        <div
          className={[
            "text-xs font-mono",
            disabled ? "text-zinc-700" : "text-zinc-600 group-hover:text-blue-400",
          ].join(" ")}
        >
          ↗
        </div>
      </div>
      <div className="mt-1 text-xs text-zinc-500 leading-relaxed">{desc}</div>
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
          {/* Skills */}
          <div>
            <SectionHeader title="TECH STACK" />

            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 font-mono text-sm shadow-xl">
              <div className="text-zinc-500 mb-4 pb-4 border-b border-zinc-900 flex justify-between">
                <span>package.json</span>
                <span className="text-xs">read-only</span>
              </div>

              <div className="space-y-4">
                {Object.entries(SKILLS).map(([cat, items], idx) => (
                  <div key={cat}>
                    <div className="text-purple-400 mb-2">"{cat}": [</div>

                    <div className="pl-4 flex flex-wrap gap-2 text-zinc-300">
                      {items.map((skill, i) => (
                        <span key={skill}>
                          "{skill}"{i !== items.length - 1 && ","}
                        </span>
                      ))}
                    </div>

                    <div className="text-purple-400 mt-1">
                      ]{idx !== Object.keys(SKILLS).length - 1 && ","}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Log */}
          <div>
            <SectionHeader title="SPRING DEV JOURNEY" subtitle="Learning system & execution" />

            <div className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-lg">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">Progress</div>
                  <div className="text-zinc-500 text-sm">
                    Curriculum → Practice → Q&A → Fix logs
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-500 font-mono text-sm">● Active</div>
                </div>
              </div>

              {/* tiny visualization (placeholder) */}
              <div className="flex gap-1 h-16 items-end mb-8 opacity-80">
                {[...Array(24)].map((_, i) => {
                  const height = 20 + ((i * 13 + 7) % 70);
                  const opacity = 0.25 + ((i * 3) % 5) * 0.12;

                  return (
                    <div
                      key={i}
                      className="flex-1 bg-green-500/80"
                      style={{ height: `${height}%`, opacity }}
                    />
                  );
                })}
              </div>

              {/* Evidence links */}
              <div className="grid gap-3 sm:grid-cols-3">
                <PillLink
                  href={DOCS.links.find((l) => l.label === "spring-dev-journey")?.href || DOCS.links[0]?.href}
                  label="GITHUB REPO"
                  desc="daily commits & code"
                />
                <PillLink
                  href={DOCS.links.find((l) => l.label === "curriculum")?.href}
                  label="CURRICULUM"
                  desc="roadmap & progress"
                />
                <PillLink
                  href={DOCS.links.find((l) => l.label === "lecture-notes")?.href}
                  label="LECTURE NOTES"
                  desc="structured notes & practice"
                />
              </div>
            </div>

            <p className="mt-6 text-sm text-zinc-500 leading-relaxed max-w-md">
              학습을 “기록”으로 끝내지 않고, 커리큘럼을 설계하고 실습과 질문/실수 로그로
              검증하는 루프로 운영합니다. 결과물은 코드와 문서로 남깁니다.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
