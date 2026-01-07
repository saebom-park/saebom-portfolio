import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Project } from "./ProjectDetailPage";

type Principle = {
  title: string;
  desc: string;
};

function PrincipleCard({ p }: { p: Principle }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-950/30 p-5">
      <h4 className="text-white font-bold mb-2">{p.title}</h4>
      <p className="text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
    </div>
  );
}

export default function ProjectDetailPrinciples({ project }: { project: Project }) {
  const principles: Principle[] =
  project.slug === "bulletin-board"
    ? [
        {
          title: "Use-case based responsibility split",
          desc: "계층 분리를 형식적으로 유지하기보다, 실제 유스케이스 기준으로 책임을 고정했습니다. Controller는 요청 흐름만, Service는 판단과 규칙을, Mapper는 데이터 접근만 담당하도록 역할을 분리했습니다.",
        },
        {
          title: "Auth flow first, then Security",
          desc: "Spring Security를 바로 적용하지 않고, 세션 기반 인증 흐름을 먼저 구현해 인증·권한 판단 지점을 명확히 했습니다. 전환 기준을 정리해 Security 도입 시 책임 이동을 예측 가능하게 만들었습니다.",
        },
        {
          title: "Policy as code",
          desc: "Owner/Admin 권한을 조건 분기가 아닌 정책 단위로 분리했습니다. 권한 규칙을 코드로 고정해 예외 확장을 최소화하고, 운영 중 정책 변경에도 대응할 수 있도록 설계했습니다.",
        },
      ]
    : [
        {
          title: "Domain-driven flow",
          desc: "주문–결제–재고 흐름을 기능 중심이 아닌 도메인 상태 전이 기준으로 설계해, 각 단계의 책임과 변경 범위를 명확히 했습니다.",
        },
        {
          title: "Transactional boundaries",
          desc: "트랜잭션 경계를 구현 후에 조정하지 않고, 서비스 설계 단계에서 먼저 정의해 동시성 및 롤백 영향을 예측 가능하게 만들었습니다.",
        },
        {
          title: "Consistency under concurrency",
          desc: "@Version 기반 Optimistic Lock과 충돌 처리 전략을 함께 설계해, 동시 주문 상황에서도 재고 정합성을 애플리케이션 레벨에서 보장했습니다.",
        },
      ];


  return (
    <section className="py-24 bg-zinc-900/30 border-y border-dashed border-zinc-800">
      <Container>
        <SectionHeader
          title="DESIGN PRINCIPLES"
          subtitle="Rules I fixed during development"
        />

        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl">
          {principles.map((p) => (
            <PrincipleCard key={p.title} p={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
