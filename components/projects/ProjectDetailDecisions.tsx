import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Project } from "./types";


type Decision = {
  title: string;
  desc: string;
  tags?: string[];
};

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded border border-zinc-700/70 bg-zinc-900/40 px-2 py-0.5 text-[11px] font-mono text-zinc-400">
      {children}
    </span>
  );
}

function DecisionCard({ d }: { d: Decision }) {
  return (
    <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6 backdrop-blur">
      <div className="flex items-start justify-between gap-6">
        <h4 className="text-base md:text-lg font-semibold text-white leading-snug">
          {d.title}
        </h4>

        {d.tags?.length ? (
          <div className="hidden sm:flex flex-wrap gap-2 justify-end">
            {d.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        ) : null}
      </div>

      <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{d.desc}</p>

      <div className="mt-5 border-t border-zinc-800/70 pt-3 text-[11px] font-mono text-zinc-600">
        $ decision --status in-progress
      </div>
    </div>
  );
}

export default function ProjectDetailDecisions({ project }: { project: Project }) {
  const decisions: Decision[] = [
    {
      title: "Stock is 1:1 with ProductOption",
      desc: "판매 단위를 옵션(ProductOption)으로 고정하고, 재고(Stock)는 옵션과 1:1로 매핑했습니다. 주문 라인은 옵션을 참조하도록 설계해 ‘옵션 단위 판매/정합성’이 흔들리지 않게 했습니다.",
      tags: ["Domain", "Modeling"],
    },
    {
      title: "Transactional boundaries before features",
      desc: "기능을 늘리기 전에 서비스 단위 트랜잭션 경계를 먼저 정의했습니다. 상태 전이(주문→결제→재고 감소)를 어디서 커밋할지 고정해, 예외/재시도/충돌 처리 전략을 예측 가능하게 만들었습니다.",
      tags: ["Tx", "Service"],
    },
    {
      title: "Consistency under concurrency via Optimistic Lock",
      desc: "@Version 기반 낙관적 락으로 동시 주문 시 재고 정합성을 보장하고, 충돌은 ‘버그’가 아니라 ‘정상 시나리오’로 취급했습니다. 실패를 허용하고 서비스 레벨에서 409로 처리하는 전략을 택했습니다.",
      tags: ["Concurrency", "JPA", "@Version"],
    },
    {
      title: "Unidirectional by default",
      desc: "양방향 연관관계는 편의보다 리스크(그래프 깨짐, 사이드 이펙트)를 먼저 고려했습니다. 기본은 단방향으로 두고, 필요한 시점에만 편의 메서드로 동기화 규칙을 강제합니다.",
      tags: ["JPA", "Relation"],
    },
    {
      title: "Enum and conversion responsibility is centralized",
      desc: "상태/권한 값은 끝까지 Enum으로 유지하고, 변환 책임은 한 곳(TypeHandler/매핑 규칙)으로 모읍니다. 중간에 String으로 타협하면 타입 책임이 분산돼 더 큰 런타임 오류로 돌아온다는 기준을 고정했습니다.",
      tags: ["Type", "Mapping"],
    },
  ];

  return (
    <section className="py-24 bg-zinc-900/30 border-y border-dashed border-zinc-800">
      <Container>
        <SectionHeader title="DESIGN DECISIONS" subtitle="Key decisions made so far" />

        <div className="mt-10 grid gap-6 max-w-4xl">
          {decisions.map((d) => (
            <DecisionCard key={d.title} d={d} />
          ))}
        </div>
      </Container>
    </section>
  );
}
