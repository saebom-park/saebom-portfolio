import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Project } from "./ProjectDetailPage";

type Case = {
  title: string;
  cause: string;
  fix: string;
  prevent: string;
  tags?: string[];
};

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded border border-zinc-700/70 bg-zinc-900/40 px-2 py-0.5 text-[11px] font-mono text-zinc-400">
      {children}
    </span>
  );
}

export default function ProjectDetailIncidentLog({ project }: { project: Project }) {
  // 초기 단계라 추후 계속 추가
  const cases: Case[] = [
    {
      title: "existsBy 사전 체크로 중복 생성이 완전히 막히지 않던 문제",
      cause: "existsBy 통과 후 동시에 insert 시도가 가능한 레이스 컨디션 구간이 존재",
      fix: "existsBy는 사용자 친화적 사전 체크로만 사용하고, 최종 방어는 DB UNIQUE 제약/락 전략에 위임",
      prevent: "동시성 최종 방어는 애플리케이션 로직이 아니라 DB 제약/락으로 고정",
      tags: ["Race Condition", "DB"],
    },
    {
      title: "양방향 연관관계에서 객체 그래프가 깨지던 문제",
      cause: "한쪽만 연관관계를 세팅하여 반대 방향 참조가 null로 남음",
      fix: "생성/연결 시점에 양방향 동기화를 강제하는 편의 메서드 도입",
      prevent: "양방향을 쓸 경우 ‘동기화 규칙’을 코드로 강제하고, 초기엔 단방향을 기본으로 유지",
      tags: ["JPA", "Relation"],
    },
    {
      title: "Optimistic Lock 충돌을 예외로 ‘허용’해야 했던 이유",
      cause: "동시 주문 상황에서 충돌은 발생 가능한 정상 시나리오인데, 이를 500으로 흘리면 운영상 의미가 깨짐",
      fix: "OptimisticLockException을 서비스 레벨에서 잡아 409로 매핑하고 재시도/사용자 피드백 정책을 분리",
      prevent: "충돌/실패 케이스는 버그가 아니라 정책으로 분리해 예외 매핑을 먼저 확정",
      tags: ["@Version", "409"],
    },
  ];

  return (
    <section className="py-24">
      <Container>
        <SectionHeader title="INCIDENT LOG" subtitle="Early issues & findings (in progress)" />

        <div className="mt-10 space-y-6 max-w-4xl">
          {cases.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6 backdrop-blur"
            >
              <div className="flex items-start justify-between gap-6">
                <h4 className="text-base md:text-lg font-semibold text-white leading-snug">
                  {c.title}
                </h4>

                {c.tags?.length ? (
                  <div className="hidden sm:flex flex-wrap gap-2 justify-end">
                    {c.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="mt-4 grid gap-2 text-xs md:text-sm font-mono leading-relaxed">
                <div className="text-zinc-500">
                  <span className="text-red-400/80">CAUSE</span>
                  <span className="text-zinc-700"> — </span>
                  {c.cause}
                </div>

                <div className="text-zinc-500">
                  <span className="text-emerald-400/80">FIX</span>
                  <span className="text-zinc-700"> — </span>
                  {c.fix}
                </div>

                <div className="text-zinc-500">
                  <span className="text-blue-400/80">PREVENT</span>
                  <span className="text-zinc-700"> — </span>
                  {c.prevent}
                </div>
              </div>

              <div className="mt-5 border-t border-zinc-800/70 pt-3 text-[11px] font-mono text-zinc-600">
                $ incident --status in-progress --format cause,fix,prevent
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
